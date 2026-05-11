/* Service Worker — network-first.
   Servir siempre la versión más reciente cuando hay red, y caer al
   caché solo si la red falla. Esto evita servir CSS/JS viejos cuando
   se publica un fix. */

const CACHE = 'dmv-co-v4';
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/icons.js',
  './js/questions.js',
  './js/i18n.js',
  './js/app.js',
  './manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Network-first con fallback a cache.
  event.respondWith(
    fetch(req).then((res) => {
      // Guardar copia en cache para uso offline.
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
  );
});

// Permite que la página pida un skipWaiting si necesita activar el SW nuevo.
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
