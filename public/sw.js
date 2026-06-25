/* Désinstallation propre de l'ancienne PWA :
   ce service worker se supprime lui-même et vide tous ses caches.
   (Remplace l'ancien sw.js qui mettait le site en cache.) */
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
        await self.registration.unregister();
        const clients = await self.clients.matchAll({ type: "window" });
        clients.forEach((client) => client.navigate(client.url));
      } catch {
        /* no-op */
      }
    })()
  );
});

// Plus aucune interception réseau : tout passe directement au réseau.
