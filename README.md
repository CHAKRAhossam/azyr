# AZYR Express Targa — Site vitrine

Maquette professionnelle d'un site vitrine haut de gamme pour le restaurant **AZYR Express Targa** (Marrakech, quartier Targa).

> **Règle absolue respectée :** le site utilise **exclusivement** le logo et les photos fournis dans le dossier. Aucune image externe, de stock ou générée.

## Stack technique

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** (palette dérivée du logo)
- **Framer Motion** (apparitions au scroll, parallaxe, lightbox, transitions)
- **GSAP** (bandeau défilant infini)
- **Lucide Icons**

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # serveur de production
```

## Palette (issue du logo)

| Rôle | Couleur |
| --- | --- |
| Fond | `#0B0B0C` (noir profond) |
| Or / accent principal | `#C9A04E` → dégradé `#E4C783 → A07C32` |
| Vert (feuille / « Express ») | `#5AA046` |
| Texte / crème | `#F4EFE6` |

Définie dans [tailwind.config.ts](tailwind.config.ts).

## Structure

- Sections : Hero · À propos · Spécialités · Bandeau · Carte · Galerie · Pourquoi AZYR · Réservation · Contact · Footer
- Composants réutilisables dans [components/](components/)
- **Contenu modifiable en un seul fichier :** [lib/data.ts](lib/data.ts)
  - infos restaurant, horaires, réseaux sociaux, lien Google Maps
  - menu complet (11 catégories) — ajouter/éditer un plat = éditer ce fichier
  - galerie, spécialités, raisons « Pourquoi AZYR »

## Images

Toutes les images sont dans [public/images/](public/images/), organisées par catégorie
(`hero`, `interior`, `dessert`, `marocaine`, `salade`, `plat`, `sushi`).
Pour remplacer une photo, déposez un fichier au même chemin et mettez à jour `lib/data.ts` si besoin.

## À personnaliser avant mise en ligne

- Liens **Instagram / Facebook** → `RESTAURANT.socials` dans `lib/data.ts`
- Le bouton **Réserver** appelle directement le `+212 5 24 42 24 44`
