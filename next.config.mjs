const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Autorise l'accès au serveur de dev depuis le réseau local et les tunnels (mobile, Cloudflare)
  allowedDevOrigins: [
    "192.168.3.202",
    "192.168.2.223",
    "192.168.11.102",
    "*.trycloudflare.com",
    "lenders-efficiently-attorney-exclusion.trycloudflare.com",
  ],
  images: {
    // WebP uniquement : l'encodage AVIF est très lent et faisait échouer le chargement des images
    formats: ["image/webp"],
    // Prod : garde les images optimisées en cache 1 an (côté CDN ET navigateur).
    // Dev : AUCUN cache. Sinon les rendus optimisés sont écrits dans
    // .next/dev/cache/images avec un TTL d'un an — ils survivent aux redémarrages,
    // et remplacer une photo sans changer son nom reste invisible dans le navigateur.
    minimumCacheTTL: isDev ? 0 : 31536000,
  },
  // Cache navigateur "immutable" pour les images sources : une fois téléchargées,
  // elles ne sont JAMAIS re-demandées au scroll (évite les zones blanches sur mobile).
  // En dev on désactive ce cache pour voir chaque retouche immédiatement.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: isDev ? "no-store, must-revalidate" : "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  experimental: {
    // N'importe que les icônes réellement utilisées (bundle plus léger)
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
