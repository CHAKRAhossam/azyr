import Image from "next/image";
import { CalendarCheck, ChevronDown, UtensilsCrossed } from "lucide-react";
import { RESTAURANT } from "@/lib/data";

const TITLE = ["Saveurs", "à la", "Minute"];

export default function Hero() {
  return (
    <section id="accueil" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Façade du restaurant AZYR Express Targa à Marrakech, illuminée le soir"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="origin-center object-contain object-[center_30%] landscape:object-cover landscape:object-[center_38%]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/35 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(11,11,12,0.65)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-x relative z-10 flex h-full flex-col items-center justify-end pb-28 text-center sm:justify-center sm:pb-0">
        <span className="eyebrow mb-6 animate-rise" style={{ animationDelay: "0.1s" }}>
          Marrakech — Targa
        </span>

        <h1 className="heading-xl max-w-4xl">
          <span className="sr-only">Saveurs à la minute</span>
          <span aria-hidden className="flex flex-wrap justify-center gap-x-4">
            {TITLE.map((w, i) => (
              <span
                key={w}
                className={`animate-rise ${i === 2 ? "text-gold-grad italic" : ""}`}
                style={{ animationDelay: `${0.3 + i * 0.12}s` }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-xl animate-rise text-base leading-relaxed text-cream/80 sm:text-lg"
          style={{ animationDelay: "0.9s" }}
        >
          {RESTAURANT.slogan}
        </p>

        <div
          className="mt-10 flex animate-rise flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "1.1s" }}
        >
          <a href="#carte" className="btn-gold">
            <UtensilsCrossed className="h-4 w-4" />
            Découvrir notre carte
          </a>
          <a href="#reservation" className="btn-ghost">
            <CalendarCheck className="h-4 w-4" />
            Réserver
          </a>
        </div>
      </div>

      <a
        href="#apropos"
        className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 animate-rise flex-col items-center gap-2 text-cream/60 sm:bottom-8"
        style={{ animationDelay: "1.6s" }}
        aria-label="Défiler vers le bas"
      >
        <span className="text-[10px] uppercase tracking-luxe">Défiler</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-cream/30 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-gold animate-scroll-dot" />
        </span>
        <ChevronDown className="h-4 w-4 animate-float" />
      </a>
    </section>
  );
}
