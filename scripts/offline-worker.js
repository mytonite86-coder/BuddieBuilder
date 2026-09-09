/* Build template: all core files are inserted after Vite finishes. */
const ASSETS = /* __ASSETS__ */ [];
const PREFIX = 'buddiebuilder:' + self.registration.scope + ':';
const CACHE = PREFIX + '__BUILD_VERSION__';
const absolute = (path) => new URL(path, self.registration.scope).href;

self.addEventListener('install', (event) => {
  // Atomic addAll failure rejects installation; the existing worker stays active.
  // Deliberately no skipWaiting: never replace an active play session.
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(
    ASSETS.map((path) => new Request(absolute(path), { cache: 'reload' })),
  )));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((key) => key.startsWith(PREFIX) && key !== CACHE).map((key) => caches.delete(key)),
  )));
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(event.request.mode === 'navigate' ? absolute('./index.html') : event.request);
    return cached || fetch(event.request);
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type !== 'CHECK_OFFLINE' || !event.ports[0]) return;
  event.waitUntil((async () => {
    let ready = false;
    try {
      const cache = await caches.open(CACHE);
      ready = ASSETS.length > 0 && (await Promise.all(ASSETS.map((path) => cache.match(absolute(path))))).every(Boolean);
    } catch { /* Report unavailable storage without breaking play. */ }
    event.ports[0].postMessage({ ready });
  })());
});
