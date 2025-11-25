import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Google Drive folder IDs
    const folders = {
      'GHFORCE': '1HDQTfi92WJ22fTAc2yErRuxRtqFn6YpA',
      'MINI BOOTH': '1LZyuOHvkdCzy7NmItAQtfxoBJ00OJGeh',
      'NETCUT': '1lrjF2wSF9SgN0iiC5wmUYek1igvjLOJS',
      'PANCKOO': '17olcYAG-PnawUfENgBNZXuwEXam7TFRz',
      'SAN GROUP': '1geWEf9rIoOWW-zTTf_JJAnw_8rv0AtB6',
      'XIANGJUN': '1ZxMZghjTQg3_d4_GtZVdLwEEGq6zTJ9J',
      'ZANRAY': '1uYinpNHUTBvTSQZk9is4KcilximnQY46',
      'MIHO Filler': '1OeEucWewRlTtNMpKSIPNuncvD9ahcFUL',
      'REESEE': '1KKiM9mXWKqdYcnMDFH6YCEVX0sHmryD6',
      'Veraclara': '1o-0dScwB5pQZfqBQpyLPmz5Mq1suzec1',
      'Belleza Office MHM': '1XTsXbaGeVorztt_isUT2T-Uo6QIFbqyZ',
      'Medom Kpop Merch': '1hvkGIfDrZZt4Dr7lX_MY5ZSnP5vJk1aC',
      'Blackpink Pop Up Store': '1Plif1K4ahYdwnapsy6A_MeKnKMf1CUOj',
      'Ppulbatu TXT Pop Up Store': '1iJdJpGLXmXIdssK9ZRqRq5cx7exwSaAX',
      'Zero Base One': '1-WAuIm4xfwVLENRvah2eJUkhNPKyELXA',
      'EDDR': '1DjusXSpnwaTU_PGLE_COABai2unSUIO9',
      'Backdrop Rental': '1eviD29OmQ4mr1PpyxeRgFfuRrzca_k5E',
      'CNC Cutting': '18O76CKA9OJhQ8UaFuGAJLx7o9sqDEHPD',
      '3d Design': '1RVrX84j2jYsVkV2NQQd26O0Wl3r1Og_w',
      'BTS Pop Up Store': '1ZhJmqbM9k7t--XKGZNiN7n5gHrQ6sreU'
    };

    // Generate portfolio data with working Google Drive URLs
    const portfolioData = Object.entries(folders).map(([name, folderId]) => {
      // Use different Google Drive URL formats
      const driveImages = [
        `https://drive.google.com/uc?export=view&id=${folderId}`,
        `https://lh3.googleusercontent.com/u/0/d/${folderId}=w800-h600-c-k-no`
      ];
      
      return {
        folder: name,
        images: driveImages
      };
    });

    return NextResponse.json(portfolioData);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
  }
}