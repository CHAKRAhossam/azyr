/* =========================================================================
   AZYR EXPRESS TARGA — Données du site (facilement modifiable)
   Toutes les images proviennent EXCLUSIVEMENT du dossier fourni.
   ========================================================================= */

export const RESTAURANT = {
  name: "AZYR Express",
  city: "Marrakech — Targa",
  slogan: "100% Fait Maison • Sans Conservateur • Saveurs Authentiques",
  phone: "+212 524 422 444",
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
    facebook: "https://www.facebook.com/AZYRMARRAKECH",
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
    key: "burgers",
    title: "Burgers",
    subtitle: "Steaks 5% m.g, cheddar smooky & sauces maison, servis avec frites",
    image: "/images/plat/plat-1.png",
  },
  {
    key: "chawarma",
    title: "Chawarma",
    subtitle: "Du falafel au Sultan, généreux et servis avec frites",
    image: "/images/plat/plat-5.png",
  },
  {
    key: "salades",
    title: "Salades",
    subtitle: "Croquantes, fraîches et généreuses",
    image: "/images/salade/salade-1.png",
  },
  {
    key: "petit-dejeuner",
    title: "Petit Déjeuner",
    subtitle: "Express, Premium, Prestige & Azyr — pour bien démarrer",
    image: "/images/marocaine/marocaine-1.png",
  },
  {
    key: "desserts",
    title: "Desserts",
    subtitle: "Pannacotta, tiramisu, cheese cake — la douceur en point d'orgue",
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
    key: "petit-dejeuner",
    label: "Petit Déjeuner",
    items: [
      { name: "Express", description: "Café, crème ou thé · mahrach · œuf dur · fromage blanc · huile d'olive jeune · jus d'oranges ou de carottes", price: "30 DH" },
      { name: "Express Premium", description: "Café, crème ou thé · omelette ou œufs au plat · jus d'oranges ou de carottes", price: "35 DH" },
      { name: "Azyr Prestige", description: "Café, crème ou thé · pain mahrach · fromage blanc · huile d'olive jeune · origan · olives noires · omelette ou œufs au plat · jus d'oranges ou de carottes · yaourt", price: "45 DH" },
      { name: "Azyr", description: "Café, crème ou thé · pain mahrach, fromage blanc, huile d'olive jeune, origan, olives noires · jus d'oranges ou de carottes · khlaa aux œufs · mini salade de fruits", price: "55 DH" },
      { name: "Suppl. Viennoiserie", description: "Supplément petit déjeuner", price: "5 DH" },
      { name: "Suppl. M9ila Fromage", description: "Supplément petit déjeuner", price: "25 DH" },
      { name: "Suppl. M9ila Khliaa", description: "Supplément petit déjeuner", price: "35 DH" },
    ],
  },
  {
    key: "boissons-chaudes",
    label: "Boissons Chaudes",
    items: [
      { name: "Thé Chamali", description: "", price: "12 DH" },
      { name: "Café Espresso + 33 cl", description: "", price: "15 DH" },
      { name: "Americano + 33 cl", description: "", price: "15 DH" },
      { name: "Nos Nos", description: "", price: "16 DH" },
      { name: "Crème", description: "", price: "16 DH" },
      { name: "Thé à la Menthe", description: "", price: "16 DH" },
      { name: "Capsule + 33 cl", description: "", price: "18 DH" },
      { name: "Lait au Chocolat", description: "", price: "18 DH" },
      { name: "Cappuccino", description: "", price: "18 DH" },
      { name: "Infusion & Thé Aromatisé", description: "", price: "18 DH" },
      { name: "Double Espresso + 33 cl", description: "", price: "19 DH" },
      { name: "Crème Capsule", description: "", price: "20 DH" },
      { name: "Chococcino", description: "", price: "20 DH" },
      { name: "Mokaccino", description: "", price: "20 DH" },
    ],
  },
  {
    key: "boissons-fraiches",
    label: "Boissons Fraîches",
    items: [
      { name: "Eaux", description: "Petite · moyenne · grande", price: "6 / 10 / 16 DH" },
      { name: "Soda 33 cl", description: "", price: "12 DH" },
      { name: "Oulmès", description: "Petite ou grande", price: "14 / 20 DH" },
      { name: "Citronnade", description: "Jus 25 cl", price: "16 DH" },
      { name: "Ice Tea", description: "", price: "18 DH" },
      { name: "Citron", description: "Jus 25 cl", price: "20 DH" },
      { name: "Orange", description: "Jus 25 cl pressé", price: "22 DH" },
      { name: "Carottes", description: "Jus 25 cl", price: "24 DH" },
      { name: "Mojitos", description: "Vergin · Océano · Exótico · Marrakech", price: "45 DH" },
    ],
  },
  {
    key: "mixes",
    label: "Mixés & Cocktails",
    items: [
      { name: "Jus de Pommes", description: "Mixé 25 cl", price: "28 DH" },
      { name: "Jus de Banane", description: "Mixé 25 cl", price: "28 DH" },
      { name: "Cocktail de Fruits de Saison", description: "Mixé 25 cl", price: "30 DH" },
      { name: "Avocat", description: "Mixé 25 cl", price: "35 DH" },
      { name: "Mangue", description: "Mixé 25 cl", price: "38 DH" },
      { name: "Ananas", description: "Mixé 25 cl", price: "38 DH" },
      { name: "Fruits Secs", description: "Mixé 25 cl", price: "38 DH" },
      { name: "Cocktail de Fruits de Luxe", description: "Mixé 25 cl", price: "40 DH" },
    ],
  },
  {
    key: "salades",
    label: "Salades",
    items: [
      { name: "Niçoise", description: "Salade verte, haricots verts, œuf, thon, concombre, choux blanc, tomate, olives noires, vinaigrette moutardée", price: "45 DH", image: "/images/salade/salade-1.png" },
      { name: "Exotic", description: "Salade verte, thon blanc, légumes, jus de citron, œuf, huile d'olive jeune, fruits", price: "50 DH", image: "/images/salade/salade-2.png" },
      { name: "Fraîcheur", description: "Pâtes, fromage, salade verte, tomate, œuf, cornichons, thon", price: "55 DH", image: "/images/salade/salade-3.png" },
      { name: "Premium", description: "Une sélection fraîche du chef", price: "60 DH", image: "/images/salade/salade-4.png" },
    ],
  },
  {
    key: "burgers",
    label: "Burgers",
    items: [
      { name: "Cheese Burger Classic", description: "Steak haché 5% m.g · double fromage · cheddar smooky · sauce Filadelfia · servi avec frites", price: "50 DH", image: "/images/plat/plat-1.png" },
      { name: "Chicken Crispy Burger", description: "Chicken · double fromage · cheddar smooky · sauce maison · servi avec frites", price: "55 DH", image: "/images/plat/plat-2.png" },
      { name: "Double Cheese Burger", description: "Deux steaks hachés 5% m.g · triple fromage · cheddar smooky · sauce Filadelfia · servi avec frites", price: "65 DH", image: "/images/plat/plat-3.png" },
      { name: "Double Cheese Burger Forest", description: "Salade verte, oignons caramélisés, tomate, cornichons, deux steaks hachés 5% m.g, triple fromage, cheddar smooky, sauce Chicago · servi avec frites", price: "75 DH", image: "/images/plat/plat-4.png" },
    ],
  },
  {
    key: "chawarma",
    label: "Chawarma",
    items: [
      { name: "Chawarma Falafel", description: "Salade verte, choux, tomate, cornichons, oignons blancs, falafel, sauce maison · servi avec frites", price: "25 DH", image: "/images/plat/plat-5.png" },
      { name: "Chawarma Agha", description: "Servi avec frites", price: "35 DH", image: "/images/plat/plat-6.png" },
      { name: "Chawarma Pacha", description: "Servi avec frites", price: "45 DH", image: "/images/plat/plat-7.png" },
      { name: "Chawarma Baguette", description: "Salade verte, tomate, cornichons, oignons blancs, choux blancs, poulet, sauce maison · servi avec frites", price: "55 DH", image: "/images/plat/plat-8.png" },
      { name: "Chawarma Sultan (en plat)", description: "Salade verte, tomate, cornichons, oignons blancs, choux blancs, double poulet, sauce maison", price: "80 DH", image: "/images/plat/plat-9.png" },
    ],
  },
  {
    key: "selections",
    label: "Sélections",
    items: [
      { name: "Spaghetti Velouté", description: "Sélection de fromage", price: "75 DH" },
      { name: "Brochettes de Poulet à l'Ancienne", description: "Mini salade du chef · chawarma poulet · légumes · frites · pâtes", price: "75 DH" },
      { name: "Spaghetti Maison", description: "Fromage, champignons frais, viande hachée", price: "80 DH" },
      { name: "Émincé de Poulet aux Champignons", description: "Frites", price: "85 DH" },
      { name: "Spaghetti Nordique", description: "Fromage, saumon, noix de muscade", price: "90 DH" },
    ],
  },
  {
    key: "sandwichs",
    label: "Sandwichs",
    items: [
      { name: "Thon", description: "Salade verte, tomate, œuf, cornichons, oignons blancs, thon blanc, sauce mayo · servi avec frites", price: "45 DH" },
      { name: "Poulet", description: "Salade verte, tomate, cornichons, oignons blancs, poulet à la moutarde, sauce fromage · servi avec frites", price: "50 DH" },
      { name: "Viande Hachée", description: "Salade verte, tomate, cornichons, oignons blancs, steak, sauce smooky · servi avec frites", price: "55 DH" },
      { name: "Mixte Premium", description: "Servi avec frites", price: "58 DH" },
    ],
  },
  {
    key: "tacos",
    label: "Tacos",
    items: [
      { name: "Tacos Thon", description: "Salade verte, tomate, cornichons, oignons blancs · servi avec frites", price: "38 DH" },
      { name: "Tacos Poulet", description: "Salade verte, tomate, cornichons, oignons blancs · servi avec frites", price: "42 DH" },
      { name: "Tacos Viande Hachée", description: "Salade verte, tomate, cornichons, oignons blancs · servi avec frites", price: "44 DH" },
      { name: "Tacos Crispy", description: "Salade verte, tomate, cornichons, oignons blancs, poulet, viande hachée, sauce maison · servi avec frites", price: "46 DH" },
    ],
  },
  {
    key: "desserts",
    label: "Desserts",
    items: [
      { name: "Pannacotta", description: "Onctueuse, faite maison", price: "25 DH", image: "/images/dessert/dessert-1.png" },
      { name: "Tiramisu Caramelo", description: "Mascarpone, café, caramel", price: "28 DH", image: "/images/dessert/dessert-2.png" },
      { name: "Cheese Cake", description: "Crémeux, fait maison", price: "30 DH", image: "/images/dessert/dessert-3.png" },
      { name: "Salade de Fruits", description: "Fruits frais de saison", price: "35 DH", image: "/images/dessert/dessert-4.png" },
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
  { icon: "Award", title: "Qualité & large choix", text: "Une carte généreuse, du petit déjeuner aux burgers." },
  { icon: "Sparkles", title: "Cadre moderne", text: "Un décor soigné, élégant et lumineux." },
  { icon: "Utensils", title: "Pour tous", text: "Idéal pour les familles, les couples et les groupes." },
];
