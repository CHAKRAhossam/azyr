"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";
import { RESTAURANT } from "@/lib/data";
import { Reveal } from "./Reveal";

const LINKS = [
  { href: "#apropos", label: "À propos" },
  { href: "#carte", label: "Notre carte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#reservation", label: "Réservation" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-soft">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-grad opacity-60" />
      <div className="container-x relative z-10 py-16">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo.png"
                  alt="AZYR Express Targa"
                  width={170}
                  height={54}
                  className="h-12 w-auto"
                />
                <Image
                  src="/images/mgharba.png"
                  alt="MGHARBA"
                  width={96}
                  height={96}
                  className="h-16 w-16 select-none"
                />
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
                {RESTAURANT.slogan}
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={RESTAURANT.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cream/80 transition-all hover:border-gold/60 hover:text-gold"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={RESTAURANT.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cream/80 transition-all hover:border-gold/60 hover:text-gold"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs uppercase tracking-luxe text-gold/90">Navigation</h4>
              <ul className="space-y-2.5">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-cream/65 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs uppercase tracking-luxe text-gold/90">Coordonnées</h4>
              <address className="space-y-2.5 not-italic text-sm text-cream/65">
                <p>
                  {RESTAURANT.address.line1}
                  <br />
                  {RESTAURANT.address.line2}
                  <br />
                  {RESTAURANT.address.line3}, {RESTAURANT.address.city}
                </p>
                <a
                  href={RESTAURANT.phoneHref}
                  className="inline-flex items-center gap-2 text-gold transition-colors hover:text-gold-light"
                >
                  <Phone className="h-4 w-4" /> {RESTAURANT.phone}
                </a>
              </address>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} AZYR Express Targa — Tous droits réservés.
          </p>
          <p className="text-xs text-cream/35">Marrakech — Targa • Cuisine à la minute</p>
        </div>
      </div>
    </footer>
  );
}
