const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dagingDir = path.join(process.cwd(), 'public', 'daging');
const files = fs.readdirSync(dagingDir).filter(f => f.endsWith('.png'));

console.log('Converting ' + files.length + ' PNG files to WebP...');

let done = 0;
files.forEach(function(file) {
  const input = path.join(dagingDir, file);
  const output = path.join(dagingDir, file.replace('.png', '.webp'));
  const sizeBefore = fs.statSync(input).size;

  sharp(input)
    .webp({ quality: 82, effort: 4 })
    .toFile(output, function(err, info) {
      if (err) {
        console.error('Error ' + file + ':', err.message);
      } else {
        const saved = ((1 - info.size / sizeBefore) * 100).toFixed(1);
        console.log('  OK ' + file + ' -> .webp  (' + (sizeBefore/1024/1024).toFixed(1) + 'MB -> ' + (info.size/1024/1024).toFixed(1) + 'MB, -' + saved + '%)');
      }
      done++;
      if (done === files.length) console.log('\nDone!');
    });
});
