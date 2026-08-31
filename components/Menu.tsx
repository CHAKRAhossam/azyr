import MenuCarte from "@/components/MenuCarte";
import { menuWithPhotos } from "@/lib/menuPhotos";
import { Reveal } from "./Reveal";

/**
 * Section « Notre carte » de la page d'accueil.
 * Affiche EXACTEMENT la même carte que la page /menu : même composant
 * (MenuCarte) et mêmes données enrichies des photos réelles (menuWithPhotos).
 * Composant serveur : les photos sont résolues au build.
 */
export default function Menu() {
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

        {/* Onglets collants sous la navbar (88px) ; aucune image prioritaire :
            la carte est loin sous la ligne de flottaison sur l'accueil. */}
        <MenuCarte menu={menuWithPhotos()} stickyTop="top-[88px]" priorityCount={0} />

        <Reveal>
          <p className="mt-12 text-center text-xs uppercase tracking-luxe text-cream/40">
            Les prix sont indiqués en dirhams (DH) — carte à titre indicatif
          </p>
        </Reveal>
      </div>
    </section>
  );
}
