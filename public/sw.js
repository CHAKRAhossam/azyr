/* Service Worker AZYR Express Targa — cache pour chargement instantané (reload + retours).
   Incrémenter la version à chaque changement de stratégie pour forcer la mise à jour. */
const CACHE = "azyr-cache-v1";
const PRECACHE = ["/", "/menu", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE).catch(() => {}))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // uniquement notre domaine

  // Pages (navigation) : on sert le cache TOUT DE SUITE puis on rafraîchit en fond
  if (req.mode === "navigate") {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // Fichiers fixes (JS/CSS/polices/images optimisées) : cache d'abord = instantané
  if (
    url.pathname.startsWith("/_next/static") ||
    url.pathname.startsWith("/_next/image") ||
    url.pathname.startsWith("/images") ||
    url.pathname.startsWith("/icons") ||
    /\.(?:js|css|woff2?|png|jpe?g|webp|svg|ico)$/.test(url.pathname)
  ) {
    event.respondWith(cacheFirst(req));
    return;
  }

  // Le reste : réseau, repli sur le cache
  event.respondWith(fetch(req).catch(() => caches.match(req)));
});

async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      const cache = await caches.open(CACHE);
      cache.put(req, res.clone());
    }
    return res;
  } catch {
    return cached || Response.error();
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req);
  const network = fetch(req)
    .then((res) => {
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    })
    .catch(() => cached);
  return cached || network;
}
