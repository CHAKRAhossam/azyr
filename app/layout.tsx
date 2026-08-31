import type { Metadata, Viewport } from "next";
import { Amiri, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-amiri",
  display: "swap",
  // Police arabe (~105 Ko) utilisée uniquement pour le poème en bas de page :
  // on la retire du chemin critique pour ne pas ralentir le rendu initial sur mobile.
  preload: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    "AZYR Express Targa — café-restaurant familial à Marrakech (quartier Targa). 100% fait maison, sans conservateur, service continu. Petits déjeuners, salades, burgers, chawarmas, sandwichs, tacos & desserts maison. Réservez : +212 524 422 444.",
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
    images: [{ url: "/images/hero/hero-main.jpg", width: 1200, height: 630, alt: "AZYR Express Targa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AZYR Express Targa — Restaurant familial à Marrakech",
    description: "Cuisine à la minute • Restaurant Familial • Saveurs Authentiques.",
    images: ["/images/hero/hero-main.jpg"],
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
  image: `${SITE_URL}/images/hero/hero-main.jpg`,
  servesCuisine: ["Marocaine", "Fast Food", "Burgers", "Chawarma"],
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
    <html lang="fr" className={`${playfair.variable} ${poppins.variable} ${amiri.variable}`}>
      {/* Les extensions de navigateur (Grammarly, etc.) ajoutent leurs propres
          attributs sur <body> avant l'hydratation : on ignore l'avertissement. */}
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
