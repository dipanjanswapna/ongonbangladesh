
const CACHE_NAME = 'ongon-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Alegreya:wght@400;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
