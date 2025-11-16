import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'backend', 'data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    return NextResponse.json({ logos: data.clientLogos || [] });
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
