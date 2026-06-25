/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Autorise l'accès au serveur de dev depuis le réseau local et les tunnels (mobile, Cloudflare)
  allowedDevOrigins: [
    "192.168.3.202",
    "*.trycloudflare.com",
    "lenders-efficiently-attorney-exclusion.trycloudflare.com",
  ],
  images: {
    // WebP uniquement : l'encodage AVIF est très lent et faisait échouer le chargement des images
    formats: ["image/webp"],
    // Garde les images optimisées en cache 1 an (côté CDN ET navigateur via l'upstream immutable)
    minimumCacheTTL: 31536000,
    // Qualités autorisées (Next 16 bloque les autres) — 60 pour le hero (plus léger), 75 par défaut
    qualities: [60, 75],
  },
  // Cache navigateur "immutable" pour les images sources : une fois téléchargées,
  // elles ne sont JAMAIS re-demandées au scroll (évite les zones blanches sur mobile).
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
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
