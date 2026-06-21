const CACHE_NAME = 'midnight-bypass-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => self.clients.claim())
    );
});

// ALWAYS FETCH FROM INTERNET
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});
