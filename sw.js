const CACHE_NAME = 'creation-cache-v2'; // Naya version (Purana cache udane ke liye)

const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/poems.json',
  '/manifest.json'
];

// Install karte waqt turant activate ho jaye
self.addEventListener('install', event => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Naya update aate hi Puraane Cache (memory) ko DELETE maar de
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log("Old Cache Deleted!");
            return caches.delete(cacheName); 
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 🟢 SMART FETCH: Pehle hamesha LIVE internet se file mangega, net band ho tabhi cache dega!
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Agar live file mil gayi toh usko cache mein bhi naya save kar lo
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Agar internet nahi hai, toh cache use karo
        return caches.match(event.request);
      })
  );
});
