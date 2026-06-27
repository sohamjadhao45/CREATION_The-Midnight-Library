const CACHE_NAME = 'midnight-vFinal';

// NAYA: Yahan se '/poems.json' hata diya hai taaki installation fail na ho
const urlsToCache = [
    '/', 
    '/index.html', 
    '/style.css', 
    '/script.js', 
    '/manifest.json'
];

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.map((k) => {
                if (k !== CACHE_NAME) return caches.delete(k);
            })
        )).then(() => self.clients.claim())
    );
});

// NETWORK-FIRST STRATEGY: Hamesha pehle naya code layega!
self.addEventListener('fetch', (e) => {
    // Audio files (Mixkit URLs) ke liye cache strategy ko thoda safe rakhte hain
    e.respondWith(
        fetch(e.request)
        .then((response) => {
            // Agar response valid nahi hai (yaani third-party/audio block ho gaya), toh seedha return karo
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }
            const resClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
            return response;
        })
        .catch(() => caches.match(e.request))
    );
});
