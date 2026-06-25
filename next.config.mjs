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
    // Garde les images optimisées en cache 30 jours (moins de re-génération)
    minimumCacheTTL: 2592000,
  },
  experimental: {
    // N'importe que les icônes réellement utilisées (bundle plus léger)
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
