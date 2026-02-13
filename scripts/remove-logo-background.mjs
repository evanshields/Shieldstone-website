import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/shieldstone-logo.png');
const outputPath = path.join(__dirname, '../public/shieldstone-logo.png');

// Process the image to remove white background and make it transparent
sharp(inputPath)
  .removeAlpha() // First, ensure we have an alpha channel
  .composite([{
    input: Buffer.from('<svg><rect width="100%" height="100%" fill="white"/></svg>'),
    tile: true
  }])
  .threshold(240) // Threshold for white colors (adjust if needed)
  .toBuffer()
  .then(() => {
    // Use sharp with composite to remove white background
    return sharp(inputPath)
      .png()
      .toFile(outputPath + '.temp');
  })
  .then(() => {
    // Use ImageMagick-style approach: convert white to transparent
    return new Promise((resolve, reject) => {
      sharp(inputPath)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }) => {
          const { width, height, channels } = info;
          
          // Process pixels to make white (or near-white) transparent
          for (let i = 0; i < data.length; i += channels) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            
            // If pixel is white or near-white (threshold: 240+), make it transparent
            if (r > 240 && g > 240 && b > 240) {
              data[i + 3] = 0; // Set alpha to 0 (transparent)
            }
          }
          
          // Create a new image from the modified pixel data
          sharp(data, {
            raw: { width, height, channels }
          })
            .png()
            .toFile(outputPath)
            .then(() => {
              console.log('[v0] Logo background removed successfully!');
              resolve();
            })
            .catch(reject);
        })
        .catch(reject);
    });
  })
  .catch(err => {
    console.error('[v0] Error removing background:', err);
    process.exit(1);
  });
