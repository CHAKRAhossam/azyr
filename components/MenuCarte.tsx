"use client";

import Image from "@/components/Img";
import { useState } from "react";
import { Utensils } from "lucide-react";
import { type MenuCategory, type MenuItem } from "@/lib/data";

export default function MenuCarte({
  menu,
  /** Décalage de la barre d'onglets collante (la navbar de l'accueil fait 88px). */
  stickyTop = "top-0",
  /** Nombre de photos chargées en priorité (0 quand la carte est loin sous la ligne de flottaison). */
  priorityCount = 3,
}: {
  menu: MenuCategory[];
  stickyTop?: string;
  priorityCount?: number;
}) {
  const [active, setActive] = useState(menu[0].key);
  const category = menu.find((c) => c.key === active)!;

  // Produits en cartes (photo/placeholder) vs produits forcés en liste texte
  const cardItems = category.items.filter((it) => !it.textOnly);
  const textItems = category.items.filter((it) => it.textOnly);
  const hasImages = cardItems.some((it) => it.image);

  const textRow = (it: MenuItem, i: number) => (
    <div
      key={it.name}
      className="group flex items-baseline gap-3 border-b border-white/[0.06] py-3.5 animate-rise"
      style={{ animationDelay: `${i * 0.035}s` }}
    >
      <div className="min-w-0">
        <h3 className="font-display text-base text-cream transition-colors group-hover:text-gold-light">
          {it.name}
        </h3>
        {it.description && <p className="text-sm text-cream/55">{it.description}</p>}
      </div>
      <span className="mx-2 flex-1 translate-y-[-3px] border-b border-dotted border-white/15" />
      <span className="shrink-0 font-semibold text-gold">{it.price}</span>
    </div>
  );

  return (
    <div>
      {/* Onglets catégories — scroll horizontal sur mobile */}
      <div className={`sticky ${stickyTop} z-20 -mx-5 mb-8 bg-ink/85 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8`}>
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {menu.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === c.key
                  ? "bg-gold-grad text-ink shadow-gold"
                  : "border border-white/10 text-cream/70 hover:border-gold/50 hover:text-cream"
              }`}
            >
              <span className="whitespace-nowrap">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div key={active} className="animate-rise">
        {hasImages ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cardItems.map((it, i) => (
                <article
                  key={it.name}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-card animate-rise"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {it.image ? (
                      <>
                        <Image
                          src={it.image}
                          alt={it.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          /* Sur /menu, les premières cartes sont au-dessus de la ligne de
                             flottaison : chargées en priorité, elles évitent un LCP dégradé. */
                          priority={i < priorityCount}
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-card/90 via-transparent to-transparent" />
                        {category.photoDisclaimer && (
                          <span className="absolute bottom-2 left-2 rounded bg-ink/55 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-cream/65 backdrop-blur-sm">
                            Photo non contractuelle
                          </span>
                        )}
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-soft to-ink-card">
                        <Utensils className="h-8 w-8 text-gold/25" />
                      </div>
                    )}
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
                </article>
              ))}
            </div>

            {/* Suppléments, eaux, sodas… : sous les cartes photo, en liste texte */}
            {textItems.length > 0 && (
              <div className="mx-auto mt-10 grid max-w-3xl gap-x-10 gap-y-0.5 sm:grid-cols-2">
                {textItems.map(textRow)}
              </div>
            )}
          </>
        ) : (
          <div className="mx-auto grid max-w-3xl gap-x-10 gap-y-0.5 sm:grid-cols-2">
            {category.items.map(textRow)}
          </div>
        )}
      </div>
    </div>
  );
}
