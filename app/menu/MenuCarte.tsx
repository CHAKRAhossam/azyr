"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MENU } from "@/lib/data";

export default function MenuCarte() {
  const [active, setActive] = useState(MENU[0].key);
  const category = MENU.find((c) => c.key === active)!;
  const hasImages = category.items.some((it) => it.image);

  return (
    <div>
      {/* Onglets catégories — scroll horizontal sur mobile */}
      <div className="sticky top-0 z-20 -mx-5 mb-8 bg-ink/85 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {MENU.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === c.key
                  ? "text-ink"
                  : "border border-white/10 text-cream/70 hover:border-gold/50 hover:text-cream"
              }`}
            >
              {active === c.key && (
                <motion.span
                  layoutId="menu-pill-carte"
                  className="absolute inset-0 -z-0 rounded-full bg-gold-grad"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          {hasImages ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((it, i) => (
                <motion.article
                  key={it.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={it.image!}
                      alt={it.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-card/90 via-transparent to-transparent" />
                    <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-sm font-semibold text-gold backdrop-blur-md">
                      {it.price}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg text-cream">{it.name}</h3>
                    {it.description && (
                      <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{it.description}</p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="mx-auto grid max-w-3xl gap-x-10 gap-y-0.5 sm:grid-cols-2">
              {category.items.map((it, i) => (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.035, duration: 0.4 }}
                  className="group flex items-baseline gap-3 border-b border-white/[0.06] py-3.5"
                >
                  <div className="min-w-0">
                    <h3 className="font-display text-base text-cream transition-colors group-hover:text-gold-light">
                      {it.name}
                    </h3>
                    {it.description && <p className="text-sm text-cream/55">{it.description}</p>}
                  </div>
                  <span className="mx-2 flex-1 translate-y-[-3px] border-b border-dotted border-white/15" />
                  <span className="shrink-0 font-semibold text-gold">{it.price}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
