// Deterministic placeholder Home Screen icon; no final character artwork.
import { deflateSync } from 'node:zlib';
import { writeFile } from 'node:fs/promises';
function chunk(type, data) {
  const body = Buffer.concat([Buffer.from(type), data]);
  let crc = 0xffffffff;
  for (const byte of body) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
  }
  const header = Buffer.alloc(4), tail = Buffer.alloc(4);
  header.writeUInt32BE(data.length); tail.writeUInt32BE((crc ^ 0xffffffff) >>> 0);
  return Buffer.concat([header, body, tail]);
}
for (const size of [180, 192, 512]) {
  const raw = Buffer.alloc((size * 3 + 1) * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size;
    let color = [15, 23, 42];
    if (((u - .5) / .32) ** 2 + ((v - .52) / .33) ** 2 < 1) color = [101, 212, 110];
    for (const eye of [.38, .62]) {
      if ((u - eye) ** 2 + (v - .43) ** 2 < .065 ** 2) color = [244, 241, 255];
      if ((u - eye) ** 2 + (v - .44) ** 2 < .029 ** 2) color = [15, 23, 42];
    }
    if (((u - .5) / .14) ** 2 + ((v - .57) / .11) ** 2 < 1 && v > .57) color = [15, 23, 42];
    const i = y * (size * 3 + 1) + 1 + x * 3;
    raw.set(color, i);
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0); header.writeUInt32BE(size, 4); header[8] = 8; header[9] = 2;
  await writeFile(`public/icon-${size}.png`, Buffer.concat([
    Buffer.from([137,80,78,71,13,10,26,10]), chunk('IHDR', header), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0)),
  ]));
}
