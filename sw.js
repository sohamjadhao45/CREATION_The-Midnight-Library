// 🔴 PWA CACHE KILLER - NO MORE OFFLINE CACHING
const CACHE_NAME = 'kill-cache-v1';

// Install hote hi purane system ko dhakka maar do
self.addEventListener('install', (e) => {
  self.skipWaiting(); 
});

// Activate hote hi saara purana kachra (cache memory) hamesha ke liye DELETE kar do
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        console.log('🗑️ Deleting old cache:', key);
        return caches.delete(key);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - HAMESHA INTERNET SE NAYA CODE LAO (No caching)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
