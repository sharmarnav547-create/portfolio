import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schema = JSON.parse(fs.readFileSync(path.join(__dirname, 'schema.json'), 'utf-8'));

console.log('Seeding database from schema...');

const insertPage = db.prepare(`INSERT OR REPLACE INTO pages (page_name, draft_content, published_content, status) VALUES (?, ?, ?, 'published')`);
const insertSetting = db.prepare(`INSERT OR REPLACE INTO global_settings (id, value) VALUES (?, ?)`);

const transaction = db.transaction(() => {
  schema.pages.forEach(page => {
    if (page.name === 'Global Settings') {
      // Seed global settings
      page.sections.forEach(section => {
        section.fields.forEach(field => {
          if (field.defaultValue !== undefined) {
            insertSetting.run(field.id, JSON.stringify(field.defaultValue));
          }
        });
      });
    } else {
      // Seed pages
      const content = {};
      page.sections.forEach(section => {
        section.fields.forEach(field => {
          if (field.defaultValue !== undefined) {
            content[field.id] = field.defaultValue;
          }
        });
      });
      const contentJson = JSON.stringify(content);
      insertPage.run(page.name, contentJson, contentJson);
    }
  });

  // Seed default admin user (password: admin123)
  const existingUser = db.prepare(`SELECT id FROM users WHERE username = 'admin'`).get();
  if (!existingUser) {
    db.prepare(`INSERT INTO users (username, password_hash) VALUES ('admin', 'admin123')`).run();
  }
});

transaction();
console.log('Database seeded successfully!');
