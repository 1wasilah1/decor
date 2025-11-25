import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST() {
  try {
    console.log('Starting image compression...');
    
    // Install sharp if not installed
    try {
      await execAsync('npm list sharp');
    } catch {
      console.log('Installing sharp...');
      await execAsync('npm install sharp');
    }
    
    // Run compression script
    const { stdout, stderr } = await execAsync('node compress-images.js');
    
    if (stderr) {
      console.error('Compression stderr:', stderr);
    }
    
    console.log('Compression stdout:', stdout);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Images compressed successfully',
      output: stdout 
    });
    
  } catch (error) {
    console.error('Compression error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}