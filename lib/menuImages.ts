/* =========================================================================
   PHOTOS DES PRODUITS DU MENU
   -------------------------------------------------------------------------
   Chaque produit peut avoir sa propre photo, rangée dans :

       public/images/menu/<categorie>/<slug-du-produit>.jpg

   La photo s'affiche AUTOMATIQUEMENT dès qu'elle est présente dans le dossier
   (voir app/menu/page.tsx qui scanne les fichiers existants au build).
   Tant qu'une photo manque, le produit reste affiché proprement sans image.
   ========================================================================= */

/** Transforme un nom de produit en identifiant de fichier (sans accents, minuscule). */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "") // retire les accents
    .replace(/[^a-z0-9]+/g, "-") // tout le reste → tirets
    .replace(/^-+|-+$/g, ""); // nettoie les tirets aux extrémités
}

/** Chemin (public) attendu de la photo d'un produit — peut ne pas encore exister. */
export function menuImagePath(categoryKey: string, itemName: string): string {
  return `/images/menu/${categoryKey}/${slugify(itemName)}.jpg`;
}
