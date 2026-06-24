"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WORDS = [
  "Cuisine à la minute",
  "Saveurs Marocaines",
  "Produits frais",
  "Restaurant familial",
  "Service continu",
  "Marrakech — Targa",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Défilement infini fluide piloté par GSAP
    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  const group = (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="px-8 font-display text-2xl text-cream/90 sm:text-4xl">{w}</span>
          <span className="h-2 w-2 rounded-full bg-gold" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-soft py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
      <div ref={trackRef} className="flex w-max">
        {group}
        {group}
      </div>
    </div>
  );
}
