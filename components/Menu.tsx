"use client";

import Image from "@/components/BlurImage";
import { useState } from "react";
import { MENU } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function Menu() {
  const [active, setActive] = useState(MENU[0].key);
  const category = MENU.find((c) => c.key === active)!;
  const hasImages = category.items.some((it) => it.image);

  return (
    <section id="carte" className="relative bg-ink py-24 sm:py-32">
      <div className="container-x">
        <div className="mb-10 text-center">
          <Reveal>
            <span className="eyebrow mb-5 justify-center">Notre carte</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg mx-auto max-w-2xl">
              Une carte <span className="text-gold-grad italic">généreuse</span> &amp; variée
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-cream/65">
              Du petit déjeuner aux burgers, des chawarmas aux desserts maison — 100% fait maison,
              sans conservateur, avec des produits frais.
            </p>
          </Reveal>
        </div>

        {/* Onglets catégories */}
        <Reveal delay={0.1}>
          <div className="mb-12 flex flex-wrap justify-center gap-2.5">
            {MENU.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === c.key
                    ? "bg-gold-grad text-ink shadow-gold"
                    : "border border-white/10 text-cream/70 hover:border-gold/50 hover:text-cream"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="animate-rise">
          {hasImages ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((it, i) => (
                <article
                  key={it.name}
                  className="card-hover group overflow-hidden rounded-2xl border border-white/10 bg-ink-card animate-rise"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={it.image!}
                      alt={it.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-card/90 via-transparent to-transparent" />
                    <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-sm font-semibold text-gold backdrop-blur-md">
                      {it.price}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-cream">{it.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{it.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto grid max-w-4xl gap-x-12 gap-y-1 sm:grid-cols-2">
              {category.items.map((it, i) => (
                <div
                  key={it.name}
                  className="group flex items-baseline gap-3 border-b border-white/[0.06] py-4 animate-rise"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-cream transition-colors group-hover:text-gold-light">
                      {it.name}
                    </h3>
                    <p className="text-sm text-cream/55">{it.description}</p>
                  </div>
                  <span className="mx-2 flex-1 translate-y-[-3px] border-b border-dotted border-white/15" />
                  <span className="shrink-0 font-semibold text-gold">{it.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-xs uppercase tracking-luxe text-cream/40">
            Les prix sont indiqués en dirhams (DH) — carte à titre indicatif
          </p>
        </Reveal>
      </div>
    </section>
  );
}
