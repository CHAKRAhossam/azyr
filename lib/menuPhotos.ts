import fs from "node:fs";
import path from "node:path";
import { MENU, type MenuCategory } from "@/lib/data";
import { menuImagePath } from "@/lib/menuImages";

/**
 * Enrichit le menu avec les photos RÉELLEMENT présentes dans public/images/menu.
 * S'exécute au build (pages statiques) : une photo ajoutée puis redéployée
 * apparaît automatiquement, sans jamais afficher d'image cassée.
 *
 * ⚠️ Utilisable uniquement depuis un composant SERVEUR (accès disque).
 * Utilisé à la fois par la section « Notre carte » de l'accueil et par /menu,
 * afin que les deux affichent exactement la même carte.
 */
export function menuWithPhotos(): MenuCategory[] {
  const publicDir = path.join(process.cwd(), "public");
  return MENU.map((cat) => ({
    ...cat,
    items: cat.items.map((it) => {
      if (it.textOnly) return it;
      const rel = menuImagePath(cat.key, it.name); // .jpg par défaut
      const abs = path.join(publicDir, rel);
      if (fs.existsSync(abs)) return { ...it, image: rel };
      // Essayer d'autres extensions (png, webp)
      for (const ext of [".png", ".webp"]) {
        const alt = rel.replace(/\.jpg$/, ext);
        if (fs.existsSync(path.join(publicDir, alt)))
          return { ...it, image: alt };
      }
      return it;
    }),
  }));
}
