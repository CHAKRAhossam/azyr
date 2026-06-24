/* =========================================================================
   AZYR EXPRESS TARGA — Données du site (facilement modifiable)
   Toutes les images proviennent EXCLUSIVEMENT du dossier fourni.
   ========================================================================= */

export const RESTAURANT = {
  name: "AZYR Express",
  city: "Marrakech — Targa",
  slogan: "Cuisine à la Minute • Restaurant Familial • Saveurs Authentiques",
  phone: "+212 5 24 42 24 44",
  phoneHref: "tel:+212524422444",
  address: {
    line1: "39 Targa Jawhar II",
    line2: "En face de la Pharmacie Premium",
    line3: "Route de Targa",
    city: "Marrakech, Maroc",
  },
  hours: {
    cafe: "07h30 → 01h00",
    cuisine: "12h00 → 00h00 (Service continu)",
    days: "Ouvert 7 jours sur 7",
  },
  socials: {
    instagram: "https://www.instagram.com/azyrexpresstarga/",
    facebook: "https://web.facebook.com/AZYREXPRESSTARGA/",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=AZYR+Express+Targa+Jawhar+II+Route+de+Targa+Marrakech&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=AZYR+Express+Targa+Marrakech",
};

/* -------------------------------------------------------------------------
   Spécialités phares — grandes cartes animées (catégories avec photos)
   ------------------------------------------------------------------------- */
export type Specialty = {
  key: string;
  title: string;
  subtitle: string;
  image: string;
};

export const SPECIALTIES: Specialty[] = [
  {
    key: "plats",
    title: "Plats",
    subtitle: "Signatures de la maison, préparées à la minute",
    image: "/images/plat/plat-1.png",
  },
  {
    key: "marocaine",
    title: "Saveurs Marocaines",
    subtitle: "L'âme de Marrakech dans l'assiette",
    image: "/images/marocaine/marocaine-1.png",
  },
  {
    key: "sushi",
    title: "Sushi",
    subtitle: "Fraîcheur et précision à la japonaise",
    image: "/images/sushi/sushi-1.png",
  },
  {
    key: "salades",
    title: "Salades",
    subtitle: "Croquantes, généreuses et colorées",
    image: "/images/salade/salade-1.png",
  },
  {
    key: "desserts",
    title: "Desserts",
    subtitle: "La douceur en point d'orgue",
    image: "/images/dessert/dessert-1.png",
  },
];

/* -------------------------------------------------------------------------
   Menu complet — onglets par catégorie
   Les catégories sans photo s'affichent en liste typographique raffinée.
   ------------------------------------------------------------------------- */
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
};

export type MenuCategory = {
  key: string;
  label: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    key: "marocaine",
    label: "Saveurs Marocaines",
    items: [
      { name: "Tajine de Poulet Beldi", description: "Citron confit, olives, pommes de terre fondantes", price: "75 DH", image: "/images/marocaine/marocaine-1.png" },
      { name: "Tajine Kefta aux Œufs", description: "Viande hachée, sauce tomate épicée, œuf", price: "70 DH", image: "/images/marocaine/marocaine-2.png" },
      { name: "Couscous Royal", description: "Légumes de saison, agneau, poulet, merguez", price: "95 DH", image: "/images/marocaine/marocaine-3.png" },
      { name: "Pastilla au Poulet", description: "Feuilletée, amandes, cannelle et sucre glace", price: "85 DH", image: "/images/marocaine/marocaine-4.png" },
      { name: "Tanjia Marrakchia", description: "La spécialité de Marrakech, mijotée lentement", price: "90 DH", image: "/images/marocaine/marocaine-5.png" },
      { name: "Harira Traditionnelle", description: "Soupe marocaine aux lentilles et pois chiches", price: "30 DH", image: "/images/marocaine/marocaine-6.png" },
      { name: "Briouates Maison", description: "Croustillants farcis, recette familiale", price: "45 DH", image: "/images/marocaine/marocaine-7.png" },
      { name: "Tajine de Légumes", description: "Légumes du marché, huile d'olive de Targa", price: "60 DH", image: "/images/marocaine/marocaine-8.png" },
    ],
  },
  {
    key: "plats",
    label: "Plats",
    items: [
      { name: "Filet de Saumon Crème d'Épinards", description: "Saumon poêlé, sauce crémeuse, salade tiède", price: "120 DH", image: "/images/plat/plat-1.png" },
      { name: "Escalope de Poulet Gratinée", description: "Fromage fondant, sauce maison à la minute", price: "85 DH", image: "/images/plat/plat-2.png" },
      { name: "Plat Signature AZYR", description: "La création du chef, généreuse et raffinée", price: "110 DH", image: "/images/plat/plat-3.png" },
      { name: "Émincé de Bœuf Sauté", description: "Légumes croquants, sauce relevée", price: "105 DH", image: "/images/plat/plat-4.png" },
      { name: "Poulet Rôti à la Minute", description: "Herbes fraîches, frites maison", price: "80 DH", image: "/images/plat/plat-5.png" },
      { name: "Pâtes Crémeuses au Poulet", description: "Tagliatelles, crème, parmesan", price: "75 DH", image: "/images/plat/plat-6.png" },
      { name: "Assiette Gourmande", description: "Sélection du jour, fraîcheur garantie", price: "95 DH", image: "/images/plat/plat-7.png" },
      { name: "Brochettes Mixtes", description: "Grillées au feu, accompagnement au choix", price: "100 DH", image: "/images/plat/plat-8.png" },
      { name: "Plat du Chef", description: "Inspiration du marché, à découvrir", price: "115 DH", image: "/images/plat/plat-9.png" },
    ],
  },
  {
    key: "salades",
    label: "Salades",
    items: [
      { name: "Salade César AZYR", description: "Poulet grillé, croûtons, parmesan, sauce maison", price: "65 DH", image: "/images/salade/salade-1.png" },
      { name: "Salade Marocaine", description: "Tomates, concombres, oignons, herbes fraîches", price: "40 DH", image: "/images/salade/salade-2.png" },
      { name: "Salade de Chèvre Chaud", description: "Toasts de chèvre, miel, noix, mesclun", price: "70 DH", image: "/images/salade/salade-3.png" },
      { name: "Salade Océane", description: "Fruits de mer, avocat, agrumes", price: "85 DH", image: "/images/salade/salade-4.png" },
      { name: "Salade Composée du Jour", description: "Le mélange frais du chef", price: "55 DH", image: "/images/salade/salade-5.png" },
      { name: "Salade Quinoa & Avocat", description: "Légumineuses, légumes croquants, vinaigrette citron", price: "60 DH", image: "/images/salade/salade-6.png" },
      { name: "Salade Italienne", description: "Mozzarella, tomates cerises, basilic, roquette", price: "65 DH", image: "/images/salade/salade-7.png" },
      { name: "Salade Gourmande", description: "Généreuse, colorée et équilibrée", price: "70 DH", image: "/images/salade/salade-8.png" },
      { name: "Salade Fraîcheur", description: "Légumes de saison, fines herbes", price: "50 DH", image: "/images/salade/salade-9.png" },
    ],
  },
  {
    key: "sushi",
    label: "Sushi",
    items: [
      { name: "California Roll", description: "Surimi, avocat, concombre, sésame", price: "55 DH", image: "/images/sushi/sushi-1.png" },
      { name: "Saumon Avocat Roll", description: "Saumon frais, avocat fondant", price: "65 DH", image: "/images/sushi/sushi-2.png" },
      { name: "Plateau Mixte AZYR", description: "Assortiment de makis et california", price: "120 DH", image: "/images/sushi/sushi-3.png" },
      { name: "Crispy Roll", description: "Croustillant, sauce spicy maison", price: "70 DH", image: "/images/sushi/sushi-4.png" },
      { name: "Maki Concombre / Avocat", description: "Vegan, frais et léger", price: "45 DH", image: "/images/sushi/sushi-5.png" },
      { name: "Plateau Signature", description: "La sélection du sushi-man", price: "150 DH", image: "/images/sushi/sushi-6.png" },
    ],
  },
  {
    key: "desserts",
    label: "Desserts",
    items: [
      { name: "Fondant au Chocolat", description: "Cœur coulant, glace vanille", price: "45 DH", image: "/images/dessert/dessert-1.png" },
      { name: "Tiramisu Maison", description: "Mascarpone, café, cacao", price: "40 DH", image: "/images/dessert/dessert-2.png" },
      { name: "Cheesecake", description: "Crémeux, coulis de fruits rouges", price: "45 DH", image: "/images/dessert/dessert-3.png" },
      { name: "Assiette Gourmande", description: "Sélection de douceurs de la maison", price: "55 DH", image: "/images/dessert/dessert-4.png" },
      { name: "Dessert du Jour", description: "La création sucrée du chef pâtissier", price: "40 DH", image: "/images/dessert/dessert-5.png" },
      { name: "Douceur AZYR", description: "Notre signature sucrée", price: "50 DH", image: "/images/dessert/dessert-6.png" },
    ],
  },
  {
    key: "pizzas",
    label: "Pizzas",
    items: [
      { name: "Margherita", description: "Tomate, mozzarella, basilic frais", price: "55 DH" },
      { name: "Quatre Fromages", description: "Mozzarella, chèvre, gorgonzola, emmental", price: "75 DH" },
      { name: "Pizza AZYR", description: "Poulet, champignons, poivrons, olives", price: "80 DH" },
      { name: "Pepperoni", description: "Sauce tomate, mozzarella, pepperoni", price: "70 DH" },
      { name: "Végétarienne", description: "Légumes grillés de saison", price: "65 DH" },
      { name: "Fruits de Mer", description: "Crevettes, calamars, mozzarella", price: "90 DH" },
    ],
  },
  {
    key: "pates",
    label: "Pâtes",
    items: [
      { name: "Spaghetti Bolognaise", description: "Sauce viande mijotée maison", price: "65 DH" },
      { name: "Tagliatelles Carbonara", description: "Crème, lardons, parmesan", price: "70 DH" },
      { name: "Penne Arrabbiata", description: "Sauce tomate relevée, ail, piment", price: "60 DH" },
      { name: "Pâtes aux Fruits de Mer", description: "Crème, crevettes, calamars", price: "95 DH" },
      { name: "Tagliatelles au Poulet", description: "Sauce crémeuse aux champignons", price: "75 DH" },
    ],
  },
  {
    key: "viandes",
    label: "Viandes",
    items: [
      { name: "Entrecôte Grillée", description: "Sauce au poivre, frites maison", price: "140 DH" },
      { name: "Brochettes de Bœuf", description: "Marinées, grillées au feu", price: "110 DH" },
      { name: "Côtelettes d'Agneau", description: "Herbes de Provence, légumes", price: "150 DH" },
      { name: "Magret de Canard", description: "Sauce miel & épices", price: "160 DH" },
      { name: "Mixed Grill AZYR", description: "Assortiment de grillades", price: "180 DH" },
    ],
  },
  {
    key: "poissons",
    label: "Poissons",
    items: [
      { name: "Filet de Saumon Grillé", description: "Beurre citronné, légumes vapeur", price: "130 DH" },
      { name: "Loup de Mer", description: "À la plancha, huile d'olive de Targa", price: "150 DH" },
      { name: "Crevettes Sautées", description: "Ail, persil, citron", price: "120 DH" },
      { name: "Calamars Grillés", description: "Sauce chermoula", price: "110 DH" },
      { name: "Sole Meunière", description: "Beurre noisette, persillade", price: "140 DH" },
    ],
  },
  {
    key: "sandwichs",
    label: "Sandwichs",
    items: [
      { name: "Sandwich Poulet", description: "Pain frais, crudités, sauce maison", price: "40 DH" },
      { name: "Sandwich Kefta", description: "Viande hachée épicée, légumes", price: "45 DH" },
      { name: "Panini Mixte", description: "Fromage, charcuterie, légumes grillés", price: "45 DH" },
      { name: "Burger AZYR", description: "Steak, cheddar, oignons confits, frites", price: "70 DH" },
      { name: "Wrap César", description: "Poulet, salade, parmesan, sauce césar", price: "50 DH" },
    ],
  },
  {
    key: "boissons",
    label: "Boissons",
    items: [
      { name: "Jus d'Orange Pressé", description: "100% frais, pressé minute", price: "25 DH" },
      { name: "Thé à la Menthe", description: "Le thé marocain traditionnel", price: "20 DH" },
      { name: "Smoothies Fruits", description: "Au choix, fruits frais de saison", price: "35 DH" },
      { name: "Café Espresso", description: "Torréfaction maison", price: "15 DH" },
      { name: "Limonades Maison", description: "Citron, fraise, fruits rouges", price: "30 DH" },
      { name: "Eaux & Sodas", description: "Plate, gazeuse, sodas variés", price: "à partir de 10 DH" },
    ],
  },
];

/* -------------------------------------------------------------------------
   Galerie immersive — toutes les images du dossier
   ------------------------------------------------------------------------- */
export const GALLERY: string[] = [
  "/images/interior/interior-1.png",
  "/images/plat/plat-1.png",
  "/images/marocaine/marocaine-1.png",
  "/images/sushi/sushi-1.png",
  "/images/salade/salade-2.png",
  "/images/dessert/dessert-1.png",
  "/images/plat/plat-3.png",
  "/images/marocaine/marocaine-3.png",
  "/images/sushi/sushi-3.png",
  "/images/salade/salade-4.png",
  "/images/dessert/dessert-3.png",
  "/images/plat/plat-5.png",
  "/images/marocaine/marocaine-5.png",
  "/images/sushi/sushi-5.png",
  "/images/salade/salade-7.png",
  "/images/dessert/dessert-5.png",
  "/images/plat/plat-7.png",
  "/images/marocaine/marocaine-7.png",
  "/images/sushi/sushi-2.png",
  "/images/salade/salade-9.png",
  "/images/dessert/dessert-6.png",
  "/images/plat/plat-9.png",
  "/images/marocaine/marocaine-extra-1.png",
  "/images/marocaine/marocaine-extra-3.png",
];

/* -------------------------------------------------------------------------
   Pourquoi choisir AZYR
   ------------------------------------------------------------------------- */
export const REASONS: { icon: string; title: string; text: string }[] = [
  { icon: "Flame", title: "Cuisine à la minute", text: "Chaque plat est préparé sur le moment, jamais à l'avance." },
  { icon: "Leaf", title: "Produits frais", text: "Sélection quotidienne des meilleurs produits du marché." },
  { icon: "Users", title: "Restaurant familial", text: "Une maison chaleureuse pensée pour tous les âges." },
  { icon: "Clock", title: "Service continu", text: "Café dès 07h30, cuisine en continu de 12h à minuit." },
  { icon: "Heart", title: "Ambiance chaleureuse", text: "Un cadre moderne et accueillant au cœur de Targa." },
  { icon: "Award", title: "Qualité & large choix", text: "Une carte généreuse, du marocain au sushi." },
  { icon: "Sparkles", title: "Cadre moderne", text: "Un décor soigné, élégant et lumineux." },
  { icon: "Utensils", title: "Pour tous", text: "Idéal pour les familles, les couples et les groupes." },
];
