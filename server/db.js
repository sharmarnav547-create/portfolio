import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Connect to SQLite DB
const db = new Database(path.join(dataDir, 'cms.db'));

// Initialize Database Schema
const initDb = () => {
  // Global Settings Table
  db.prepare(`
    CREATE TABLE IF NOT EXISTS global_settings (
      id TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  // Pages Table
  db.prepare(`
    CREATE TABLE IF NOT EXISTS pages (
      page_name TEXT PRIMARY KEY,
      status TEXT DEFAULT 'draft', -- 'draft' or 'published'
      draft_content TEXT NOT NULL, -- JSON
      published_content TEXT, -- JSON
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  // Versions Table
  db.prepare(`
    CREATE TABLE IF NOT EXISTS version_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      page_name TEXT NOT NULL,
      content TEXT NOT NULL, -- JSON
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  // Users Table
  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL
    )
  `).run();
};

initDb();

export default db;
