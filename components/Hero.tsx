"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone, UtensilsCrossed } from "lucide-react";
import { RESTAURANT } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const word = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const title = ["Saveurs", "à la", "Minute"];

  return (
    <section id="accueil" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Image de fond (parallaxe + zoom) */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <Image
          src="/images/hero/hero-main.png"
          alt="Façade du restaurant AZYR Express Targa à Marrakech, illuminée le soir"
          fill
          priority
          sizes="100vw"
          className="origin-top scale-[1.5] object-cover object-top landscape:scale-100 landscape:origin-center landscape:object-[center_38%]"
        />
      </motion.div>

      {/* Overlays élégants */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/35 to-ink"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(11,11,12,0.65)_100%)]" />
      {/* Halo lumineux doré */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      {/* Contenu */}
      <motion.div
        style={{ y: contentY }}
        className="container-x relative z-10 flex h-full flex-col items-center justify-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="eyebrow mb-6"
        >
          Marrakech — Targa
        </motion.span>

        <h1 className="heading-xl max-w-4xl">
          <span className="sr-only">Saveurs à la minute</span>
          <span aria-hidden className="flex flex-wrap justify-center gap-x-4">
            {title.map((w, i) => (
              <motion.span
                key={w}
                custom={i}
                variants={word}
                initial="hidden"
                animate="show"
                className={i === 2 ? "text-gold-grad italic" : ""}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          {RESTAURANT.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="#carte" className="btn-gold">
            <UtensilsCrossed className="h-4 w-4" />
            Découvrir notre carte
          </a>
          <a href={RESTAURANT.phoneHref} className="btn-ghost">
            <Phone className="h-4 w-4" />
            Réserver
          </a>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll animé */}
      <motion.a
        href="#apropos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/60"
        aria-label="Défiler vers le bas"
      >
        <span className="text-[10px] uppercase tracking-luxe">Défiler</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-cream/30 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-gold animate-scroll-dot" />
        </span>
        <ChevronDown className="h-4 w-4 animate-float" />
      </motion.a>
    </section>
  );
}
