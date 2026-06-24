"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "7j/7", label: "Service continu" },
  { value: "11", label: "Univers de saveurs" },
  { value: "100%", label: "Préparé à la minute" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="apropos" className="relative bg-ink py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visuel */}
        <Reveal className="relative">
          <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
              <Image
                src="/images/marocaine/marocaine-extra-2.png"
                alt="Ambiance intérieure moderne d'AZYR Express Targa : bar à jus et smoothies frais, décor chaleureux"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          {/* Sceau MGHARBA flottant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-10 -top-14 grid h-44 w-44 place-items-center sm:-left-16 sm:h-52 sm:w-52"
          >
            {/* Disque noir limité au cercle du logo */}
            <span className="absolute h-[67%] w-[70%] rounded-full bg-ink" />
            <Image
              src="/images/mgharba.png"
              alt="MGHARBA — 100% fait maison"
              width={120}
              height={120}
              className="relative h-full w-full select-none object-contain"
            />
          </motion.div>
          {/* Carte flottante en verre */}
          <div className="glass absolute -bottom-6 -right-3 max-w-[230px] rounded-2xl p-5 shadow-glass sm:-right-6">
            <p className="font-display text-xl text-gold-grad">Targa, Marrakech</p>
            <p className="mt-1 text-sm text-cream/70">
              Un café-restaurant familial au cœur du quartier.
            </p>
          </div>
        </Reveal>

        {/* Texte */}
        <div>
          <Reveal>
            <span className="eyebrow mb-5">À propos d&apos;AZYR</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg max-w-xl">
              Une maison familiale où chaque plat est{" "}
              <span className="text-gold-grad italic">préparé à la minute</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-cream/75 leading-relaxed">
              AZYR Express Targa est un café-restaurant familial situé dans le quartier de Targa à
              Marrakech. Reconnu pour sa cuisine préparée à la minute, son ambiance chaleureuse et
              son cadre moderne, il est l&apos;adresse idéale pour les familles, les couples et les
              groupes d&apos;amis.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl text-cream/75 leading-relaxed">
              Une carte généreuse et variée — petits déjeuners, salades, burgers, chawarmas,
              sandwichs, tacos, sélections et desserts maison — servie en continu tout au long de
              la journée.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-gold-grad sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
