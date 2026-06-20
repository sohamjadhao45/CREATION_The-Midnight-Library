// THE MIDNIGHT LIBRARY - OFFLINE ENGINE
const CACHE_NAME = 'midnight-library-v1';

// Yeh wo files hain jo phone apne andar hamesha ke liye save kar lega
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/poems.json'
];

// 1. Install Engine & Save Files Offline
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// 2. Fetch Data (Bina Internet ke chalane ki shakti)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Agar internet nahi hai, toh cache se (offline) file bhej do
                if (response) {
                    return response;
                }
                // Agar internet hai, toh normal load hone do
                return fetch(event.request);
            })
    );
});

// 3. Purane Kachre (Cache) ko saaf karna
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// 4. Push Notification Engine 🌌
self.addEventListener('push', event => {
    const options = {
        body: "The Midnight Library is quiet... A new thought awaits you.",
        icon: "https://cdn-icons-png.flaticon.com/512/2873/2873926.png", // Ek default moon icon
        badge: "https://cdn-icons-png.flaticon.com/512/2873/2873926.png",
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification("Creation Library", options)
    );
});
