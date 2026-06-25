"use client";

import { useEffect, useRef, useState } from "react";

const ARABIC_LINES = [
  "إذا التعبير خانك والكلام",
  "وأضحى لا يطيب لك المقام",
  "فهادر كيفما لو كنت ضيفاً",
  "ودع مافات يختمه السلام",
  "وصافح من تركت وكن سميحاً",
  "فذا طيب يجود به الكرام",
  "ولو جافيت فاجتنب اغتياباً",
  "ولا يفوتك يا صاح انتقام",
  "لأن المرء مهما عاش يفنى",
  "ويبقى الذكر لو طال الخصام",
  "وسقم الجسم يشفر من دواء",
  "وسقم النفس ليس له التمام",
];

const FRENCH_LINES = [
  "Je suis toujours étonnée de constater",
  "que les anglophones, et même les francophones",
  "d'ailleurs, ne font pas le lien avec les dérivés",
  "du mot « restaurant », qui vient bien sûr",
  "du verbe « se restaurer », c'est-à-dire",
  "prendre des forces, se rafraîchir.",
  "Et aux XVIIe et XVIIIe siècles,",
  "un « restaurant » est un bouillon « restaurateur »",
  "spécialement fait pour restaurer l'appétit.",
];

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export default function PoetrySlide() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-soft py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,160,78,0.05),transparent)]" />

      <div className="container-x relative z-10 grid items-start gap-16 lg:grid-cols-2 lg:gap-24">

        {/* ── Colonne gauche : citation française ── */}
        <div className="flex flex-col">
          <span
            className={`mb-2 font-display text-[7rem] leading-none text-gold/20 sm:text-[9rem] ${
              inView ? "animate-rise" : ""
            }`}
            style={inView ? { animationDelay: "0.2s" } : undefined}
            aria-hidden
          >
            &quot;
          </span>

          <div className="-mt-6 space-y-0.5">
            {FRENCH_LINES.map((line, i) => (
              <p
                key={i}
                className={`font-display text-lg italic leading-[1.9] text-cream/70 sm:text-xl text-justify ${
                  inView ? "animate-rise" : ""
                }`}
                style={inView ? { animationDelay: `${0.25 + i * 0.08}s` } : undefined}
              >
                {line}
              </p>
            ))}
          </div>

          <div
            className={`mt-8 flex items-center gap-4 ${inView ? "animate-rise" : ""}`}
            style={inView ? { animationDelay: `${0.25 + FRENCH_LINES.length * 0.08 + 0.2}s` } : undefined}
          >
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs uppercase tracking-luxe text-gold/70">
              Rebecca L. Spang, historienne
            </span>
          </div>
        </div>

        {/* ── Séparateur vertical (desktop) ── */}
        <div className="pointer-events-none absolute left-1/2 top-10 hidden h-[80%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/25 to-transparent lg:block" />

        {/* ── Colonne droite : poème arabe complet ── */}
        <div className="flex flex-col items-end" dir="rtl">
          {/* Auteur fixe en haut */}
          <span
            className={`mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-luxe text-gold/70 ${
              inView ? "animate-rise" : ""
            }`}
            style={inView ? { animationDelay: "0.1s" } : undefined}
          >
            جعفر الخطاط
            <span className="h-px w-8 bg-gold/50" />
          </span>

          {/* Poème complet en un seul bloc */}
          <div className="w-full text-right">
            {ARABIC_LINES.map((line, i) => (
              <p
                key={i}
                className={`font-arabic text-xl leading-[2.1] text-cream/85 sm:text-2xl text-justify ${
                  inView ? "animate-rise" : ""
                }`}
                style={{
                  textShadow: "0 0 40px rgba(201,160,78,0.1)",
                  ...(inView ? { animationDelay: `${0.25 + i * 0.08}s` } : {}),
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
