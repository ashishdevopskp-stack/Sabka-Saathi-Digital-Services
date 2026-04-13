// Minimal Service Worker to fulfill PWA installability requirements
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through for network requests
  event.respondWith(fetch(event.request));
});
