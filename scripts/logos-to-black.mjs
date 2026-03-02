import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public', 'logos');

async function imageToBlack(inputPath, outputPath) {
  const input = path.join(publicDir, inputPath);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const a = data[i + 3];
    if (a > 0) {
      data[i] = 0;     // R
      data[i + 1] = 0; // G
      data[i + 2] = 0; // B
      // data[i + 3] = a; keep alpha
    }
  }

  const outPath = path.join(publicDir, outputPath || inputPath);
  const ext = path.extname(outPath).toLowerCase();
  const pipeline = sharp(data, { raw: { width, height, channels } });

  if (ext === '.webp') {
    await pipeline.webp().toFile(outPath);
  } else {
    await pipeline.png().toFile(outPath);
  }
  console.log('OK:', path.basename(outPath));
}

await imageToBlack('Aeromot.png');
await imageToBlack('criaai.webp');
