"use client";

import Image from "@/components/Img";
import { useState } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import { RESTAURANT } from "@/lib/data";
import { Reveal } from "./Reveal";

const FIELD =
  "block w-full min-w-0 max-w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none transition-all focus:border-gold/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-gold/20";

// Numéro WhatsApp pour recevoir les demandes de réservation (+212 672 019230)
const WHATSAPP_NUMBER = "212672019230";

export default function Reservation() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nom = (data.get("nom") as string)?.trim() || "";
    const tel = (data.get("telephone") as string)?.trim() || "";
    const personnes = (data.get("personnes") as string)?.trim() || "";
    const date = (data.get("date") as string)?.trim() || "";
    const heure = (data.get("heure") as string)?.trim() || "";
    const message = (data.get("message") as string)?.trim() || "";

    const texte =
      "Bonjour AZYR Express Targa, je souhaite réserver une table.\n\n" +
      `• Nom : ${nom}\n` +
      `• Téléphone : ${tel}\n` +
      `• Personnes : ${personnes}\n` +
      `• Date : ${date}\n` +
      `• Heure : ${heure}` +
      (message ? `\n• Message : ${message}` : "");

    setSent(true);
    // Envoi de la demande de réservation sur WhatsApp avec les infos pré-remplies.
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texte)}`, "_blank");
  };

  return (
    <section id="reservation" className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="container-x grid items-stretch gap-10 lg:grid-cols-2">
        {/* Visuel + accroche */}
        <Reveal className="relative hidden overflow-hidden rounded-3xl lg:block">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Façade du restaurant AZYR Express Targa illuminée le soir"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
          <div className="absolute inset-x-0 bottom-0 p-10">
            <h3 className="heading-lg max-w-sm">
              Réservez votre <span className="text-gold-grad italic">table</span>
            </h3>
            <p className="mt-3 max-w-sm text-cream/75">
              Une équipe attentionnée vous accueille 7j/7. Réservation immédiate par téléphone.
            </p>
            <a href={RESTAURANT.phoneHref} className="btn-gold mt-6">
              <Phone className="h-4 w-4" /> {RESTAURANT.phone}
            </a>
          </div>
        </Reveal>

        {/* Formulaire */}
        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-7 sm:p-10">
            <span className="eyebrow mb-5">Réservation</span>
            <h3 className="heading-lg mb-2 text-3xl sm:text-4xl">Demande de table</h3>
            <p className="mb-7 text-sm text-cream/60">
              Remplissez le formulaire — votre demande nous est envoyée sur WhatsApp et nous confirmons votre venue.
            </p>

            <form onSubmit={onSubmit} className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Nom</label>
                <input required name="nom" type="text" placeholder="Votre nom" className={FIELD} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Téléphone</label>
                <input required name="telephone" type="tel" placeholder="+212 ..." className={FIELD} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Personnes</label>
                <input required name="personnes" type="number" min={1} defaultValue={2} className={FIELD} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Date</label>
                <input required name="date" type="date" className={`${FIELD} [color-scheme:dark]`} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Heure</label>
                <input required name="heure" type="time" className={`${FIELD} [color-scheme:dark]`} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Message</label>
                <textarea name="message" rows={3} placeholder="Une demande particulière ?" className={`${FIELD} resize-none`} />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="btn-gold w-full transition-transform active:scale-[0.98]"
                >
                  <CalendarCheck className="h-4 w-4" />
                  {sent ? "Ouverture de WhatsApp…" : "Réserver ma table"}
                </button>
                <p className="mt-3 text-center text-xs text-cream/45">
                  Ou appelez directement le{" "}
                  <a href={RESTAURANT.phoneHref} className="text-gold hover:underline">
                    {RESTAURANT.phone}
                  </a>
                </p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
