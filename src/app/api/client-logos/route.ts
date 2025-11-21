import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const clientImagesPath = path.join(process.cwd(), 'public', 'images', 'client');
    const files = fs.readdirSync(clientImagesPath);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    const logos = imageFiles.map(file => `/images/client/${file}`);
    return NextResponse.json({ logos });
  } catch {
    return NextResponse.json({ logos: [] });
  }
}

export async function POST(request: Request) {
  try {
    const { logos } = await request.json();
    const dataPath = path.join(process.cwd(), 'backend', 'data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    data.clientLogos = logos;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
