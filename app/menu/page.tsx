import type { Metadata } from "next";
import Image from "@/components/Img";
import Link from "next/link";
import { MapPin, Phone, ArrowLeft } from "lucide-react";
import { RESTAURANT } from "@/lib/data";
import { menuWithPhotos } from "@/lib/menuPhotos";
import MenuCarte from "@/components/MenuCarte";

export const metadata: Metadata = {
  title: "La Carte",
  description:
    "La carte complète d'AZYR Express Targa — 100% fait maison, sans conservateur. Petits déjeuners, salades, burgers, chawarmas, sandwichs, tacos & desserts.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-ink">
      {/* En-tête */}
      <header className="border-b border-white/10 bg-ink-soft">
        <div className="container-x flex flex-col items-center py-10 text-center">
          <div className="flex items-center gap-5">
            <Link href="/" aria-label="Retour à l'accueil" className="transition-opacity hover:opacity-80">
              <Image
                src="/images/logo.png"
                alt="AZYR Express Targa"
                width={220}
                height={220}
                priority
                className="h-auto w-44 sm:w-52"
              />
            </Link>
            <Image
              src="/images/mgharba.png"
              alt="MGHARBA"
              width={120}
              height={120}
              priority
              className="h-20 w-20 select-none sm:h-24 sm:w-24"
            />
          </div>
          <span className="eyebrow mt-6 justify-center">{RESTAURANT.city}</span>
          <h1 className="heading-lg mt-3">
            Notre <span className="text-gold-grad italic">Carte</span>
          </h1>
          <p className="mt-3 text-sm uppercase tracking-luxe text-cream/45">
            100% Fait Maison • Sans Conservateur
          </p>
        </div>
      </header>

      {/* Carte */}
      <section className="container-x py-10 sm:py-14">
        <MenuCarte menu={menuWithPhotos()} />
        <p className="mt-12 text-center text-xs uppercase tracking-luxe text-cream/40">
          Les prix sont indiqués en dirhams (DH) — carte à titre indicatif
        </p>
      </section>

      {/* Pied de page minimal */}
      <footer className="border-t border-white/10 bg-ink-soft">
        <div className="container-x flex flex-col items-center gap-5 py-10 text-center">
          <a href={RESTAURANT.phoneHref} className="btn-gold">
            <Phone className="h-4 w-4" /> {RESTAURANT.phone}
          </a>
          <a
            href={RESTAURANT.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cream/65 transition-colors hover:text-gold"
          >
            <MapPin className="h-4 w-4 text-gold" />
            {RESTAURANT.address.line1} — {RESTAURANT.address.city}
          </a>
          <Link
            href="/"
            className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-cream/45 transition-colors hover:text-cream"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Retour au site
          </Link>
        </div>
      </footer>
    </main>
  );
}
