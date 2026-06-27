"use client";

import Image from "@/components/Img";
import { ArrowUpRight } from "lucide-react";
import { SPECIALTIES } from "@/lib/data";
import { Reveal, useReveal } from "./Reveal";

export default function Specialties() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-60" />
      <div className="container-x relative">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="eyebrow mb-5">Nos spécialités</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg max-w-2xl">
                Nos univers de goût, <span className="text-gold-grad italic">une même exigence</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a href="#carte" className="btn-ghost shrink-0">
              Voir toute la carte <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[300px]">
          {SPECIALTIES.map((s, i) => (
            <SpecialtyCard
              key={s.key}
              s={s}
              i={i}
              // Mise en page éditoriale : 1ère carte large, dernière haute
              className={
                i === 0
                  ? "col-span-2 lg:col-span-2 lg:row-span-2"
                  : i === 5
                  ? "col-span-2 lg:col-span-2"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialtyCard({
  s,
  i,
  className,
}: {
  s: (typeof SPECIALTIES)[number];
  i: number;
  className?: string;
}) {
  const { ref, className: revealCls, style } = useReveal<HTMLAnchorElement>(i * 0.08);
  return (
    <a
      ref={ref}
      href="#carte"
      style={style}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 ${className} ${revealCls}`}
    >
      <Image
        src={s.image}
        alt={s.title}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        className={`object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 ${
          s.key === "desserts" ? "object-[center_40%]" : ""
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="flex items-end justify-between gap-3">
          <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="font-display text-2xl text-cream sm:text-3xl">{s.title}</h3>
            <p className="mt-1 max-w-xs text-sm text-cream/0 transition-colors duration-500 group-hover:text-cream/75">
              {s.subtitle}
            </p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/50 bg-ink/40 text-gold backdrop-blur-sm transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </a>
  );
}
