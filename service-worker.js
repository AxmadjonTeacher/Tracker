// service-worker.js (correct filename and cache list)
const CACHE_NAME = "workout-tracker-v1";
const urlsToCache = [
  "/",
  "index.html",
  "manifest.json",
  // Removed style.css (not used)
  "icon-192.png",    // Changed from icon-192x192.png
  "icon-512.png"     // Changed from icon-512x512.png
];

// Rest of the service worker code remains the same
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// ... keep the rest of the service worker code unchanged
