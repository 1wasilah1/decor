const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/portofolio';
const outputDir = './public/portofolio-compressed';

async function compressImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const folders = fs.readdirSync(inputDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const folder of folders) {
    const folderPath = path.join(inputDir, folder);
    const outputFolderPath = path.join(outputDir, folder);
    
    if (!fs.existsSync(outputFolderPath)) {
      fs.mkdirSync(outputFolderPath, { recursive: true });
    }

    const files = fs.readdirSync(folderPath)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png'].includes(ext);
      });

    console.log(`Processing ${folder}: ${files.length} images`);

    for (const file of files) {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(outputFolderPath, file);
      
      try {
        await sharp(inputPath)
          .resize(400, 300, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 40, progressive: true })
          .toFile(outputPath);
        
        console.log(`✓ Compressed: ${file}`);
      } catch (error) {
        console.error(`✗ Error compressing ${file}:`, error.message);
      }
    }
  }
  
  console.log('Compression complete!');
}

compressImages().catch(console.error);