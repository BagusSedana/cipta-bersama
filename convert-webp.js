const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dagingDir = path.join(__dirname, 'public', 'daging');
const files = fs.readdirSync(dagingDir).filter(f => f.endsWith('.png'));

console.log(`Converting ${files.length} PNG files to WebP...`);

Promise.all(
  files.map(async (file) => {
    const input = path.join(dagingDir, file);
    const output = path.join(dagingDir, file.replace('.png', '.webp'));
    
    const stats = fs.statSync(input);
    await sharp(input)
      .webp({ quality: 82, effort: 4 })
      .toFile(output);
    
    const newStats = fs.statSync(output);
    const saved = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    console.log(`  ✓ ${file} → .webp  (${(stats.size/1024/1024).toFixed(1)}MB → ${(newStats.size/1024/1024).toFixed(1)}MB, -${saved}%)`);
  })
).then(() => {
  console.log('\nDone! All PNG files converted to WebP.');
}).catch(err => {
  console.error('Error:', err);
});
