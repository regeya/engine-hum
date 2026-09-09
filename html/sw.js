const CACHE_NAME = "v1";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "favicon-32x32.png",
  "icon-192.png",
  "icon-512.png"
];

// Install Event (Cache Assets)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }),
  );
});

// Fetch Event (Serve from Cache or Network)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );

