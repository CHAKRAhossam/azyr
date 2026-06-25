"use client";

import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { RESTAURANT } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32">
      <div className="container-x">
        <div className="mb-12 text-center">
          <Reveal>
            <span className="eyebrow mb-5 justify-center">Contact</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg mx-auto max-w-2xl">
              Venez nous <span className="text-gold-grad italic">rendre visite</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Infos */}
          <Reveal className="flex flex-col gap-5">
            <InfoCard icon={<MapPin className="h-6 w-6" />} title="Adresse">
              {RESTAURANT.address.line1}
              <br />
              {RESTAURANT.address.line2}
              <br />
              {RESTAURANT.address.line3} — {RESTAURANT.address.city}
            </InfoCard>

            <InfoCard icon={<Phone className="h-6 w-6" />} title="Téléphone">
              <a href={RESTAURANT.phoneHref} className="transition-colors hover:text-gold">
                {RESTAURANT.phone}
              </a>
            </InfoCard>

            <InfoCard icon={<Clock className="h-6 w-6" />} title="Horaires">
              {RESTAURANT.hours.days}
              <br />
              <span className="text-cream/55">Café :</span> {RESTAURANT.hours.cafe}
              <br />
              <span className="text-cream/55">Cuisine :</span> {RESTAURANT.hours.cuisine}
            </InfoCard>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-sm text-cream/55">Suivez-nous</span>
              <a
                href={RESTAURANT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cream/80 transition-all hover:border-gold/60 hover:text-gold hover:-translate-y-0.5"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={RESTAURANT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cream/80 transition-all hover:border-gold/60 hover:text-gold hover:-translate-y-0.5"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          {/* Carte Google */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-card">
              <iframe
                title="Localisation AZYR Express Targa sur Google Maps"
                src={RESTAURANT.mapsEmbed}
                className="h-full min-h-[420px] w-full"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-hover glass flex gap-4 rounded-2xl p-6">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
        {icon}
      </span>
      <div>
        <h3 className="font-display text-lg text-cream">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-cream/70">{children}</p>
      </div>
    </div>
  );
}
