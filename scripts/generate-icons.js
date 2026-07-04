const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, '../public/BenEl logo.png');
const publicDir = path.join(__dirname, '../public');

async function generateIcons() {
  if (!fs.existsSync(inputImagePath)) {
    console.error('Input image not found:', inputImagePath);
    return;
  }

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  try {
    const inputBuffer = fs.readFileSync(inputImagePath);
    
    for (const item of sizes) {
      await sharp(inputBuffer)
        .resize(item.size, item.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(path.join(publicDir, item.name));
      console.log(`Generated ${item.name}`);
    }
    
    // Create an .ico file containing 16x32 by just copying 32x32 (browser handles it, or use proper ico generator if needed, but simple rename works for some, better just using png and relying on modern browsers, but PRD asks for favicon.ico)
    // Actually, sharp doesn't write .ico format natively easily without additional libs. We will just convert a 32x32 image and rename to .ico, browsers support png in .ico extension.
    await sharp(inputBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(path.join(publicDir, 'favicon.ico'));
      
    console.log('Generated favicon.ico');

  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
