import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('=== GOOGLE DRIVE PORTFOLIO API ===');
    
    // Google Drive API key
    const API_KEY = process.env.GOOGLE_DRIVE_API_KEY || 
                   process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY || 
                   'AIzaSyC-PUT_YOUR_ACTUAL_API_KEY_HERE'; // Replace with your actual API key
    
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

    // Real Google Drive API function to get folder contents
    const getFolderContents = async (folderName: string, folderId: string) => {
      console.log(`\n📁 FETCHING REAL FOLDER: ${folderName}`);
      console.log(`🆔 ID: ${folderId}`);
      
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`
        );
        
        if (!response.ok) {
          console.error(`API Error for ${folderName}:`, response.status, response.statusText);
          return [];
        }
        
        const data = await response.json();
        const imageFiles = data.files?.filter((file: any) => 
          file.mimeType?.startsWith('image/')
        ) || [];
        
        console.log(`📄 REAL FILES FOUND (${imageFiles.length} images):`);
        imageFiles.forEach((file: any, index: number) => {
          console.log(`   ${index + 1}. ${file.name}`);
          console.log(`      🆔 File ID: ${file.id}`);
          console.log(`      🔗 Direct URL: https://drive.google.com/uc?id=${file.id}`);
        });
        
        return imageFiles.map((file: any) => ({
          thumbnail: `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
          fullsize: `https://drive.google.com/uc?id=${file.id}`
        }));
        
      } catch (error) {
        console.error(`Error fetching ${folderName}:`, error);
        // Return fallback images if API fails
        return [
          { thumbnail: '/images/service1.png', fullsize: '/images/service1.png' },
          { thumbnail: '/images/service2.png', fullsize: '/images/service2.png' }
        ];
      }
    };
    
    // Generate portfolio data with real Google Drive contents
    const portfolioData = [];
    
    for (const [name, folderId] of Object.entries(folders)) {
      const fileUrls = await getFolderContents(name, folderId);
      
      // If no images found, use fallback
      const finalImages = fileUrls.length > 0 ? fileUrls : [
        { thumbnail: '/images/service1.png', fullsize: '/images/service1.png' },
        { thumbnail: '/images/service2.png', fullsize: '/images/service2.png' }
      ];
      
      portfolioData.push({
        folder: name,
        images: finalImages
      });
    }
    
    console.log(`\n📊 SUMMARY:`);
    console.log(`Total folders processed: ${portfolioData.length}`);
    console.log(`\n📋 PORTFOLIO STRUCTURE:`);
    portfolioData.forEach((folder, index) => {
      console.log(`${index + 1}. ${folder.folder} (${folder.images.length} images)`);
    });

    console.log('=== API RESPONSE READY ===');
    return NextResponse.json(portfolioData);
  } catch (error) {
    console.error('=== API ERROR ===');
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
  }
}