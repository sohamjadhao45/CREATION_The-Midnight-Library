const CACHE_NAME = 'midnight-vFinal';
const urlsToCache = ['/', '/index.html', '/style.css', '/script.js', '/poems.json', '/manifest.json'];

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((k) => {
        if (k !== CACHE_NAME) return caches.delete(k);
    }))).then(() => self.clients.claim()));
});

// NETWORK-FIRST STRATEGY: Hamesha pehle naya code layega!
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request)
        .then((response) => {
            const resClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
            return response;
        })
        .catch(() => caches.match(e.request))
    );
});
