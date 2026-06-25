"use client";

import { useEffect } from "react";

/** Enregistre le service worker (PWA) — cache instantané au reload et hors-ligne. */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    const onLoad = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    };
    // On enregistre après le chargement pour ne pas concurrencer le rendu initial
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
  }, []);

  return null;
}
