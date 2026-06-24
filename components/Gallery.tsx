"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  return (
    <section id="galerie" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="container-x">
        <div className="mb-12 text-center">
          <Reveal>
            <span className="eyebrow mb-5 justify-center">Galerie</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg mx-auto max-w-2xl">
              L&apos;expérience AZYR <span className="text-gold-grad italic">en images</span>
            </h2>
          </Reveal>
        </div>

        <div className="masonry">
          {GALLERY.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className="group relative block w-full overflow-hidden rounded-xl border border-white/10"
              aria-label="Agrandir l'image"
            >
              <Image
                src={src}
                alt={`Galerie AZYR Express Targa ${i + 1}`}
                width={600}
                height={750}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-500 group-hover:bg-ink/40 group-hover:opacity-100">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/60 bg-ink/40 text-gold backdrop-blur-sm">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4"
            onClick={close}
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:bg-white/10"
              onClick={close}
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:bg-white/10 sm:left-8"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[82vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY[index]}
                alt={`Galerie AZYR ${index + 1}`}
                width={1400}
                height={1000}
                className="mx-auto max-h-[82vh] w-auto rounded-xl object-contain shadow-card"
              />
            </motion.div>

            <button
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:bg-white/10 sm:right-8"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-cream/60">
              {index + 1} / {GALLERY.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
