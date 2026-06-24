"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl shadow-glass"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Link href="#accueil" className="flex items-center gap-3" aria-label="AZYR Express Targa">
          <Image
            src="/images/logo.png"
            alt="Logo AZYR Express Targa"
            width={150}
            height={48}
            priority
            className="h-11 w-auto object-contain"
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

        <div className="hidden lg:block">
          <a href={RESTAURANT.phoneHref} className="btn-gold">
            <Phone className="h-4 w-4" /> Réserver
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="text-cream lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-x flex h-[72px] items-center justify-between">
              <Image src="/images/logo.png" alt="AZYR" width={140} height={44} className="h-10 w-auto" />
              <button onClick={() => setOpen(false)} aria-label="Fermer le menu">
                <X className="h-7 w-7 text-cream" />
              </button>
            </div>
            <motion.ul
              className="container-x mt-8 flex flex-col gap-2"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {LINKS.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-4 font-display text-2xl text-cream/90"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-6">
                <a href={RESTAURANT.phoneHref} className="btn-gold w-full">
                  <Phone className="h-4 w-4" /> Réserver une table
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
