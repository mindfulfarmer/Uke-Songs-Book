const CACHE_NAME = 'uke-songbook-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './songs.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 1. Install Event: Cache core assets immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Force the waiting service worker to become the active service worker
});

// 2. Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch Event: Network falling back to Cache, or Cache falling back to Network?
// We use Stale-While-Revalidate logic for dynamic items, but Cache-First for static assets.
// Given this is a simple static app, we'll use a robust "Cache First, then Network" 
// strategy to ensure it works offline, while dynamically caching new requests (like fonts).

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Hit? Return the cached response
      if (response) {
        return response;
      }

      // Miss? Fetch from network
      return fetch(event.request).then((networkResponse) => {
        // Check if we received a valid response
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          // Note: 'basic' type means it's a request to our origin. 
          // We allow caching opaque responses (like Google Fonts) if we remove that check,
          // but for safety, we often return third-party directly unless we specifically want to cache them.
          
          // However, for an offline app, we DO want to cache the Google Fonts.
          // So we simply clone and cache valid responses regardless of type (mostly).
          
          if (!networkResponse || networkResponse.status !== 200) {
             return networkResponse;
          }
        }

        // Clone the response because it's a stream and can only be consumed once
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});
