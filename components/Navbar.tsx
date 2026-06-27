"use client";

import Image from "@/components/Img";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { RESTAURANT } from "@/lib/data";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#carte", label: "Notre carte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#reservation", label: "Réservation" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl shadow-glass"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[88px] items-center justify-between">
        <Link href="#accueil" className="flex items-center gap-3" aria-label="AZYR Express Targa">
          <Image
            src="/images/logo.png"
            alt="Logo AZYR Express Targa"
            width={220}
            height={72}
            priority
            className="h-24 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative text-sm font-medium text-cream/85 transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-grad transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={RESTAURANT.phoneHref} className="btn-ghost">
            <Phone className="h-4 w-4" /> Appeler
          </a>
          <a href="#reservation" className="btn-gold">
            <CalendarCheck className="h-4 w-4" /> Réserver
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={RESTAURANT.phoneHref}
            aria-label="Appeler le restaurant"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setOpen(true)}
            className="text-cream"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>
      </header>

      {/* Menu mobile — rendu HORS du <header> : un ancêtre avec `backdrop-filter`
          (ajouté au scroll) devient bloc conteneur des enfants `fixed` et tronque
          l'overlay au haut de page → fond opaque sur tout l'écran garanti ici. */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex h-16 shrink-0 items-center justify-between sm:h-20">
          <Image src="/images/logo.png" alt="AZYR" width={140} height={44} className="h-10 w-auto sm:h-12" />
          <button onClick={() => setOpen(false)} aria-label="Fermer le menu" className="p-1">
            <X className="h-7 w-7 text-cream" />
          </button>
        </div>
        <ul className="container-x mt-4 flex flex-col gap-1 pb-10">
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              className={open ? "animate-rise" : ""}
              style={open ? { animationDelay: `${i * 0.06}s` } : undefined}
            >
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-4 font-display text-2xl text-cream/90"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-6 flex flex-col gap-3">
            <a href="#reservation" onClick={() => setOpen(false)} className="btn-gold w-full">
              <CalendarCheck className="h-4 w-4" /> Réserver une table
            </a>
            <a href={RESTAURANT.phoneHref} className="btn-ghost w-full">
              <Phone className="h-4 w-4" /> Appeler
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
