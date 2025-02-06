const CACHE_NAME = "workout-tracker-v1";
const urlsToCache = [
  "/Tracker/",
  "index.html",
  "manifest.json",
  "icon-192.png",  // Ensure these files exist in the correct path
  "icon-512.png",
  "screenshot-narrow.png",
  "screenshot-wide.png"
];

// Install Service Worker and Cache Files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate Service Worker and Remove Old Caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

// Fetch Request - Serve Cached Files First, Then Network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
