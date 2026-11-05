import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

await mkdir(path.join(root, 'dist', 'views'), { recursive: true });
await mkdir(path.join(root, 'dist', 'public'), { recursive: true });

await cp(path.join(root, 'src', 'views'), path.join(root, 'dist', 'views'), {
  recursive: true,
  force: true,
});
await cp(path.join(root, 'public'), path.join(root, 'dist', 'public'), {
  recursive: true,
  force: true,
});

console.log('Assets copiados a dist/');
