import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const portfolioPath = path.join(process.cwd(), 'public', 'portofolio');
    
    if (!fs.existsSync(portfolioPath)) {
      return NextResponse.json({ error: 'Portfolio directory not found' }, { status: 404 });
    }

    const folders = fs.readdirSync(portfolioPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const portfolioData = folders.map(folder => {
      const folderPath = path.join(portfolioPath, folder);
      const files = fs.readdirSync(folderPath)
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
        })
        .slice(0, 20) // Limit to first 20 images per folder
        .map(file => `/portofolio/${folder}/${file}`);

      return {
        folder,
        images: files
      };
    });

    return NextResponse.json(portfolioData);
  } catch (error) {
    console.error('Error reading portfolio:', error);
    return NextResponse.json({ error: 'Failed to load portfolio' }, { status: 500 });
  }
}