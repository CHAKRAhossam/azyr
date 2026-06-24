"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ARABIC_STROPHES = [
  [
    "إذا التعبير خانك والكلام",
    "وأضحى لا يطيب لك المقام",
    "فهادر كيفما لو كنت ضيفاً",
    "ودع مافات يختمه السلام",
    "وصافح من تركت وكن سميحاً",
    "فذا طيب يجود به الكرام",
  ],
  [
    "ولو جافيت فاجتنب اغتياباً",
    "ولا يفوتك يا صاح انتقام",
    "لأن المرء مهما عاش يفنى",
    "ويبقى الذكر لو طال الخصام",
    "وسقم الجسم يشفر من دواء",
    "وسقم النفس ليس له التمام",
  ],
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

export default function PoetrySlide() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [strophe, setStrophe] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setStrophe((s) => (s + 1) % ARABIC_STROPHES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-soft py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,160,78,0.05),transparent)]" />

      <div className="container-x relative z-10 grid items-start gap-16 lg:grid-cols-2 lg:gap-24">

        {/* ── Colonne gauche : citation française ── */}
        <div className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-2 font-display text-[7rem] leading-none text-gold/20 sm:text-[9rem]"
            aria-hidden
          >
            "
          </motion.span>

          <div className="-mt-6 space-y-0.5">
            {FRENCH_LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-lg italic leading-[1.9] text-cream/70 sm:text-xl text-justify"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 + FRENCH_LINES.length * 0.08 + 0.2, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs uppercase tracking-luxe text-gold/70">
              Rebecca L. Spang, historienne
            </span>
          </motion.div>
        </div>

        {/* ── Séparateur vertical (desktop) ── */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-1/2 top-10 hidden h-[80%] w-px origin-top -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/25 to-transparent lg:block"
        />

        {/* ── Colonne droite : poème arabe par strophes ── */}
        <div className="flex flex-col items-end" dir="rtl">
          {/* Auteur fixe en haut */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-luxe text-gold/70"
          >
            جعفر الخطاط
            <span className="h-px w-8 bg-gold/50" />
          </motion.span>

          {/* Strophes alternées */}
          <div className="w-full text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={strophe}
                initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(5px)" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {ARABIC_STROPHES[strophe].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="font-arabic text-xl leading-[2.1] text-cream/85 sm:text-2xl text-justify"
                    style={{ textShadow: "0 0 40px rgba(201,160,78,0.1)" }}
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Indicateur de strophe */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6 flex justify-end gap-2"
              dir="ltr"
            >
              {ARABIC_STROPHES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStrophe(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === strophe ? "w-6 bg-gold" : "w-2 bg-cream/20"
                  }`}
                  aria-label={`Strophe ${i + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
