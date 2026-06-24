"use client";

import {
  Award,
  Clock,
  Flame,
  Heart,
  Leaf,
  Sparkles,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { REASONS } from "@/lib/data";
import { Reveal } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Flame,
  Leaf,
  Users,
  Clock,
  Heart,
  Award,
  Sparkles,
  Utensils,
};

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-leaf/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[140px]" />

      <div className="container-x relative">
        <div className="mb-14 text-center">
          <Reveal>
            <span className="eyebrow mb-5 justify-center">Pourquoi AZYR</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg mx-auto max-w-2xl">
              Pourquoi choisir <span className="text-gold-grad italic">AZYR Express Targa</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => {
            const Icon = ICONS[r.icon] ?? Sparkles;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="card-hover glass group rounded-2xl p-7"
              >
                <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-xl text-cream">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{r.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
