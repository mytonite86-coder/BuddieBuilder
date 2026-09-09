import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';

const root = resolve('dist');
async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  }));
  return groups.flat();
}
const files = (await filesIn(root)).filter((path) => relative(root, path) !== 'sw.js').sort();
const template = await readFile(new URL('./offline-worker.js', import.meta.url), 'utf8');
const hash = createHash('sha256').update(template);
for (const file of files) hash.update(relative(root, file)).update(await readFile(file));
const assets = files.map((file) => './' + relative(root, file).split(sep).join('/'));
const worker = template.replace('__BUILD_VERSION__', hash.digest('hex').slice(0, 20))
  .replace('/* __ASSETS__ */ []', JSON.stringify(assets));
await writeFile(resolve(root, 'sw.js'), worker);
console.log(`Offline worker generated for ${assets.length} local assets.`);
