import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8700;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json());

const AUTH_TOKEN = 'decor-admin-secret-2024';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === `Bearer ${AUTH_TOKEN}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    res.json({ token: AUTH_TOKEN });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Get all sections
app.get('/api/sections', authMiddleware, async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch {
    res.json({ sections: [], menus: [] });
  }
});

// Get menus (public)
app.get('/api/menus', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
    res.json({ menus: data.menus || [] });
  } catch {
    res.json({ menus: [] });
  }
});

// Get sections (public)
app.get('/api/sections-public', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
    res.json({ sections: data.sections || [] });
  } catch {
    res.json({ sections: [] });
  }
});

// Get section settings (public)
app.get('/api/section-settings/:id', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
    res.json(data.sectionSettings?.[req.params.id] || {});
  } catch {
    res.json({});
  }
});

// Update section settings
app.put('/api/section-settings/:id', authMiddleware, async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
    if (!data.sectionSettings) data.sectionSettings = {};
    data.sectionSettings[req.params.id] = req.body;
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update all data
app.put('/api/sections', authMiddleware, async (req, res) => {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update single section
app.put('/api/sections/:id', authMiddleware, async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
    const index = data.sections.findIndex(s => s.id === req.params.id);
    if (index !== -1) {
      data.sections[index] = { ...data.sections[index], ...req.body };
      await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
      res.json(data.sections[index]);
    } else {
      res.status(404).json({ error: 'Section not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get client logos
app.get('/api/client-logos', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
    res.json({ logos: data.clientLogos || [] });
  } catch {
    res.json({ logos: [] });
  }
});

// Update client logos
app.post('/api/client-logos', authMiddleware, async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
    data.clientLogos = req.body.logos;
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
