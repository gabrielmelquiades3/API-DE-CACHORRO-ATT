const CACHE_NAME = "meu-app-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js"
];

// Instalando
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Interceptando requisições
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});