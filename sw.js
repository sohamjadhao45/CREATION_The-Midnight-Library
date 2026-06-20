// THE MIDNIGHT LIBRARY - OFFLINE ENGINE (v2 - GitHub Fix)
const CACHE_NAME = 'midnight-library-v2';

// 🟢 NAYA FIX: GitHub Pages ke liye relative paths ('./')
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './poems.json'
];

// 1. Install Engine & Save Files Offline
self.addEventListener('install', event => {
    self.skipWaiting(); // 🟢 NAYA FIX: Turant active ho jayega, wait nahi karega
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache successfully');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Caching failed:', err))
    );
});

// 2. Turant Control Lene Ke Liye (Activate)
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim()); // 🟢 NAYA FIX: Pehli baar mein hi control le lega
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache); // Purana kachra saaf
                    }
                })
            );
        })
    );
});

// 3. Fetch Data (Bina Internet ke chalane ki shakti)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Agar cache mein hai, toh wahi se de do
                if (response) {
                    return response;
                }
                // Nahi toh internet se le aao
                return fetch(event.request);
            })
            .catch(() => {
                // Agar internet bhi nahi hai aur path galat hai, toh index.html dikha do
                return caches.match('./index.html');
            })
    );
});

// 4. Push Notification Engine 🌌
self.addEventListener('push', event => {
    const options = {
        body: "The Midnight Library is quiet... A new thought awaits you.",
        icon: "https://cdn-icons-png.flaticon.com/512/2873/2873926.png",
        badge: "https://cdn-icons-png.flaticon.com/512/2873/2873926.png",
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification("Creation Library", options)
    );
});
