import express from 'express';
import cors from 'cors';
import multer from 'multer';
import sharp from 'sharp';
import jwt from 'jsonwebtoken';
import db from './db.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve static images uploaded via CMS
const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const JWT_SECRET = 'pitchbrands-super-secret-key-change-in-prod';

// --- AUTHENTICATION ---
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  // Basic hardcoded auth for demonstration (user can change password later)
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// --- CONTENT API ---

app.get('/api/schema', (req, res) => {
  try {
    const schemaContent = fs.readFileSync(path.join(__dirname, 'schema.json'), 'utf-8');
    res.json(JSON.parse(schemaContent));
  } catch (err) {
    res.status(500).json({ error: 'Failed to read schema' });
  }
});

// GET Public content (No Auth required)
app.get('/api/content', (req, res) => {
  const pages = db.prepare(`SELECT page_name, published_content FROM pages WHERE status = 'published'`).all();
  const globals = db.prepare(`SELECT id, value FROM global_settings`).all();
  
  const content = {
    pages: {},
    global: {}
  };
  
  pages.forEach(p => {
    content.pages[p.page_name] = JSON.parse(p.published_content);
  });
  
  globals.forEach(g => {
    content.global[g.id] = JSON.parse(g.value);
  });
  
  res.json(content);
});

// GET Draft content (Auth required)
app.get('/api/content/drafts', requireAuth, (req, res) => {
  const pages = db.prepare(`SELECT page_name, draft_content, status FROM pages`).all();
  const globals = db.prepare(`SELECT id, value FROM global_settings`).all();
  
  const content = {
    pages: {},
    global: {}
  };
  
  pages.forEach(p => {
    content.pages[p.page_name] = { data: JSON.parse(p.draft_content), status: p.status };
  });
  
  globals.forEach(g => {
    content.global[g.id] = JSON.parse(g.value);
  });
  
  res.json(content);
});

// SAVE Draft content (Auth required)
app.post('/api/content/draft', requireAuth, (req, res) => {
  const { page_name, content } = req.body;
  
  const existing = db.prepare(`SELECT page_name FROM pages WHERE page_name = ?`).get(page_name);
  if (existing) {
    db.prepare(`UPDATE pages SET draft_content = ?, status = 'draft', updated_at = CURRENT_TIMESTAMP WHERE page_name = ?`)
      .run(JSON.stringify(content), page_name);
  } else {
    db.prepare(`INSERT INTO pages (page_name, draft_content, status) VALUES (?, ?, 'draft')`)
      .run(page_name, JSON.stringify(content));
  }
  
  res.json({ success: true, message: 'Draft saved' });
});

// PUBLISH content (Auth required)
app.post('/api/content/publish', requireAuth, (req, res) => {
  const { page_name } = req.body;
  const page = db.prepare(`SELECT draft_content FROM pages WHERE page_name = ?`).get(page_name);
  
  if (!page) return res.status(404).json({ error: 'Page not found' });
  
  const transaction = db.transaction(() => {
    // Save version history
    db.prepare(`INSERT INTO version_history (page_name, content) VALUES (?, ?)`).run(page_name, page.draft_content);
    
    // Promote draft to published
    db.prepare(`UPDATE pages SET published_content = draft_content, status = 'published', updated_at = CURRENT_TIMESTAMP WHERE page_name = ?`).run(page_name);
  });
  
  try {
    transaction();
    res.json({ success: true, message: 'Published successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to publish' });
  }
});

// GET Version History
app.get('/api/content/history/:page_name', requireAuth, (req, res) => {
  const history = db.prepare(`SELECT id, created_at FROM version_history WHERE page_name = ? ORDER BY created_at DESC LIMIT 20`).all(req.params.page_name);
  res.json(history);
});

// RESTORE Version
app.post('/api/content/restore', requireAuth, (req, res) => {
  const { id } = req.body;
  const version = db.prepare(`SELECT page_name, content FROM version_history WHERE id = ?`).get(id);
  if (!version) return res.status(404).json({ error: 'Version not found' });
  
  db.prepare(`UPDATE pages SET draft_content = ?, status = 'draft', updated_at = CURRENT_TIMESTAMP WHERE page_name = ?`)
    .run(version.content, version.page_name);
    
  res.json({ success: true, message: 'Version restored as draft' });
});

// SAVE Global Settings (Auth required)
app.post('/api/settings', requireAuth, (req, res) => {
  const { settings } = req.body; // { 'seo_title': '...', 'contact_email': '...' }
  const insert = db.prepare(`INSERT OR REPLACE INTO global_settings (id, value) VALUES (?, ?)`);
  
  const transaction = db.transaction((settingsData) => {
    for (const [key, val] of Object.entries(settingsData)) {
      insert.run(key, JSON.stringify(val));
    }
  });
  
  transaction(settings);
  res.json({ success: true, message: 'Settings saved' });
});

// --- IMAGE UPLOAD (WebP Generation) ---
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

app.post('/api/upload', requireAuth, upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image provided' });
  
  try {
    const filename = `cms-${Date.now()}.webp`;
    const filepath = path.join(uploadDir, filename);
    
    // Process image: convert to webp, optimize
    await sharp(req.file.buffer)
      .webp({ quality: 80 })
      .toFile(filepath);
      
    res.json({ success: true, url: `/uploads/${filename}` });
  } catch (err) {
    console.error('Image processing failed:', err);
    res.status(500).json({ error: 'Image processing failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CMS API Server running on port ${PORT}`);
});
