import { NextResponse } from 'next/server';

const CLOUDINARY_CLOUD_NAME = 'dusrhsqkr';
const CLOUDINARY_API_KEY = '523883795895656';
const CLOUDINARY_API_SECRET = '8bgSSoUyJU8Ao2Y_xq8tSvynn38';

const folders = [
  'EDDR',
  'GHFORCE',
  'MINI BOOTH',
  'NETCUT',
  'PANCKOO',
  'REESEE',
  'SAN GROUP',
  'XIANGJUN',
  'ZANRAY'
];

export async function GET() {
  try {
    // Fetch all images
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image?type=upload&max_results=500`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString('base64')
      }
    });

    const data = await response.json();
    
    // Group by folder
    const grouped: { [key: string]: string[] } = {};
    
    data.resources?.forEach((resource: any) => {
      const assetFolder = resource.asset_folder;
      if (assetFolder && assetFolder.startsWith('Portfolio BSIxMTP/')) {
        const folderName = assetFolder.replace('Portfolio BSIxMTP/', '');
        if (folders.includes(folderName)) {
          if (!grouped[folderName]) {
            grouped[folderName] = [];
          }
          grouped[folderName].push(resource.secure_url);
        }
      }
    });

    const allImages = folders
      .filter(folder => grouped[folder])
      .map(folder => ({
        folder,
        images: grouped[folder]
      }));

    console.log('Total folders with images:', allImages.length);
    return NextResponse.json(allImages);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
  }
}
