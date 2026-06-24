import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://azyr-express-targa.ma";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AZYR Express Targa — Restaurant familial à Marrakech",
    template: "%s | AZYR Express Targa",
  },
  description:
    "AZYR Express Targa — restaurant familial à Marrakech (quartier Targa). Cuisine à la minute, produits frais, service continu. Spécialités marocaines, plats, salades, sushis, pizzas, pâtes, viandes, poissons & desserts. Réservez : +212 5 24 42 24 44.",
  keywords: [
    "AZYR Express Targa",
    "Restaurant Targa",
    "Restaurant Marrakech",
    "Restaurant familial Marrakech",
    "Cuisine à la minute Marrakech",
    "Restaurant marocain Marrakech",
    "Restaurant avec terrasse Marrakech",
    "Restaurant moderne Marrakech",
    "Restaurant premium Marrakech",
  ],
  authors: [{ name: "AZYR Express Targa" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "AZYR Express Targa",
    title: "AZYR Express Targa — Restaurant familial à Marrakech",
    description:
      "Cuisine à la minute • Restaurant Familial • Saveurs Authentiques. Au cœur de Targa, Marrakech.",
    images: [{ url: "/images/hero/hero-main.png", width: 1200, height: 630, alt: "AZYR Express Targa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AZYR Express Targa — Restaurant familial à Marrakech",
    description: "Cuisine à la minute • Restaurant Familial • Saveurs Authentiques.",
    images: ["/images/hero/hero-main.png"],
  },
  icons: { icon: "/images/logo.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "AZYR Express Targa",
  image: `${SITE_URL}/images/hero/hero-main.png`,
  servesCuisine: ["Marocaine", "Internationale", "Sushi", "Pizza"],
  priceRange: "$$",
  telephone: "+212524422444",
  address: {
    "@type": "PostalAddress",
    streetAddress: "39 Targa Jawhar II, Route de Targa",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:30",
      closes: "01:00",
    },
  ],
  url: SITE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
