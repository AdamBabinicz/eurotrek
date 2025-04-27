export default {
  // Common
  common: {
    no_photos_data: "Pas de données photo.",
    lastUpdated: "Dernière mise à jour",
    placeholderContent:
      "Le contenu de cette section est en cours de préparation. Il sera bientôt mis à jour.",
    no_alt_text: "Image", // Texte alternatif par défaut
    no_title: "Sans titre", // Titre par défaut
    no_location: "Lieu inconnu", // Lieu par défaut
    photo_not_found: "Impossible de charger l'image", // Si src est incorrect ou l'image n'existe pas
  },

  routes: {
    // Slugs d'URL en français - vérifier s'ils sont appropriés
    home: "",
    destinations: "voyages", // Exemple
    about: "a-propos", // Exemple
    contact: "contact", // Exemple
    destinationDetail: "voyage", // Exemple
    faq: "faq", // Garder faq est courant
    privacy: "politique-confidentialite", // Exemple
    terms: "conditions-utilisation", // Exemple
    sitemap: "plan-site", // Exemple
    accessibility: "accessibilite", // Exemple
    cookiePolicy: "politique-cookies", // Exemple
    support: "aide", // Exemple
  },

  // Navbar
  navbar: {
    home: "Accueil",
    destinations: "Voyages",
    about: "À propos",
    contact: "Contact",
    mainNavLabel: "Navigation principale",
    goToHome: "Aller à la page d'accueil",
    toggleMenu: "Ouvrir/Fermer le menu",
    mobileMenuTitle: "Menu",
  },
  // Destinations List Page
  destinationsListPage: {
    title: "Nos Voyages",
    metaDescription:
      "Découvrez tous les endroits incroyables que nous proposons chez EuroTrek.",
    header: "Découvrez Nos Voyages",
  },
  // Destinations general terms
  destinations: {
    exploreTitle: "Explorer les Voyages",
    exploreDescription:
      "Parcourez notre collection de photos de voyages d'étudiants des plus belles villes d'Europe.",
    lisbon: "Lisbonne",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Naples",
    prague: "Prague",
    loadMore: "Charger plus",
    ariaLabel: "Catégories de voyages",
    noMorePhotos: "Plus de photos à charger pour cette catégorie",
  },
  // Specific destination data
  destinationsData: {
    lisbon: { name: "Lisbonne", country: "Portugal" },
    paris: { name: "Paris", country: "France" },
    berlin: { name: "Berlin", country: "Allemagne" },
    capri: { name: "Capri", country: "Italie" },
    naples: {
      name: "Naples",
      country: "Italie",
      description:
        "Naples, une ville vibrante du sud de l'Italie, située dans la baie de Naples. Célèbre pour sa riche histoire, son art, sa culture, son architecture, sa musique et sa gastronomie.", // Traduction automatique
    },
    prague: { name: "Prague", country: "République tchèque" },
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      title: "Versailles - Perle du Baroque",
      alt: "Château de Versailles près de Paris",
      location: "Versailles, France",
      description:
        "La ville lumière à travers l'objectif d'un étudiant - capturer la magie de l'architecture et de la culture parisiennes.", // Traduction automatique
    },
    "rome-hero": {
      title: "Route sur la mer Tyrrhénienne",
      alt: "Vue de la côte et du Vésuve à Naples",
      location: "Naples, Italie",
      description:
        "Naples est un lieu où la vie s'écoule au rythme de l'espresso, des conversations de rue et de l'odeur de la pizza fraîchement cuite flottant dans l'air chaud méditerranéen.", // Traduction automatique
    },
    "lisbon-hero": {
      title: "Monastère des Hiéronymites",
      alt: "Monastère des Hiéronymites à Belém, Lisbonne",
      location: "Lisbonne, Portugal",
      description:
        "Lisbonne est une ville pleine de lumière, où les rues pavées serpentent entre des maisons colorées, et la vie s'écoule paisiblement au rythme du fado et de l'arôme des 'pastéis de nata' frais.", // Traduction automatique
    },
    "frankfurt-hero": {
      title: "Ancien Opéra (Alte Oper)",
      alt: "Bâtiment de l'Ancien Opéra à Francfort",
      location: "Francfort-sur-le-Main, Allemagne",
      description:
        "Découvrez Francfort-sur-le-Main, où les gratte-ciel étincelants du quartier bancaire créent un contraste extraordinaire avec l'historique Opernplatz (Place de l'Opéra).", // Traduction automatique
    },
  },
  // Photos
  photos: {
    view: "Voir la photo {{title}}",
    noPhotos: "Aucune photo disponible pour ce voyage pour le moment.",
    "paris-sunset": {
      title: "Coucher de soleil à Paris",
      location: "Paris, France",
      alt: "Tour Eiffel au coucher du soleil à Paris",
    },
    "lisbon-tram": {
      title: "Vue sur le Théâtre National D. Maria II",
      location: "Lisbonne, Portugal",
      description:
        "Le bâtiment historique du théâtre est l'une des salles les plus prestigieuses du Portugal et est situé sur la place Rossio, au centre-ville.",
      alt: "Vue sur la Place Rossio à Lisbonne",
    },
    "lisbon-belem": {
      title: "Toits de la Vieille Ville",
      location: "Lisbonne, Portugal",
      description:
        "Le plus ancien quartier de Lisbonne est Alfama, construit sur le versant surplombant le Tage à l'époque de la domination maure. C'est ici que l'on peut ressentir l'atmosphère de la Lisbonne médiévale.",
      alt: "Vue sur les toits rouges d'Alfama à Lisbonne",
    },
    "lisbon-bele": {
      title: "Tour de Belém",
      location: "Lisbonne, Portugal",
      description: "Forteresse médiévale surplombant l'embouchure du Tage",
      alt: "Tour de Belém au bord du Tage à Lisbonne",
    },
    "boca do inferno": {
      title: "Bouche de l'Enfer",
      location: "Cascais, Portugal",
      description:
        "Un gouffre situé dans les falaises côtières près de la ville portugaise de Cascais",
      alt: "Formation rocheuse Bouche de l'Enfer à Cascais",
    },
    "capri-marina": {
      title: "Plage Luigia aux Faraglioni",
      location: "Capri, Italie",
      description:
        "Située dans la mer Tyrrhénienne, elle occupe la 19e place parmi les 118 plages de la région napolitaine.",
      alt: "Plage Luigia et formations rocheuses Faraglioni à Capri",
    },
    "paris-hero": {
      title: "Versailles – Perle du Baroque",
      location: "Versailles, France",
      alt: "Palais de Versailles et jardins",
      description:
        "Versailles est le symbole de la monarchie absolue française et l'un des exemples les plus magnifiques de l'architecture baroque au monde.",
    },
    "naples-view": {
      title: "Route sur la mer Tyrrhénienne",
      location: "Naples, Italie",
      alt: "Route au pied du Vésuve",
      description: "Route pittoresque le long de la côte.",
    },
    "naples-mummy": {
      title: "Moulage d'une victime du Vésuve",
      location: "Pompéi, Italie",
      alt: "Moulage en plâtre du corps d'une victime de l'éruption du Vésuve",
      description:
        "Les moulages des corps ont été exhumés en 1863 par l'archéologue Giuseppe Fiorelli. 'À ce jour, ils n'ont pas été inventoriés pour des raisons éthiques et en raison des sentiments avec lesquels les restes humains ont toujours été traités.'",
    },
    "naples-stadion": {
      title: "Amphithéâtre de Pompéi",
      location: "Pompéi, Italie",
      alt: "Ruines de l'amphithéâtre dans l'ancienne cité de Pompéi",
      description:
        "L'Amphithéâtre de Pompéi – un ancien amphithéâtre romain situé à Pompéi. C'est la plus ancienne structure de ce type encore existante.",
    },
    "naples-museum": {
      title: "Petit don pergaménien", // Ou "Gaulois mourant"
      location: "Naples, Italie",
      alt: "Sculpture du 'Gaulois mourant' au Musée Archéologique National de Naples",
      description:
        "Copie du IIe siècle apr. J.-C. d'un original grec du IIe siècle av. J.-C.",
    },
    "capri-taras": {
      title: "Capri près de Marina Piccola",
      location: "Capri, Italie",
      alt: "Terrasse panoramique avec cactus à Capri",
      description:
        "Une charmante terrasse sur le toit avec des cactus. La plupart des toits des bâtiments de Capri sont plats. Et comme on le voit ci-dessus, des terrasses sont aménagées sur certains de ces bâtiments.",
    },
    "capri-street": {
      title: "Rue commerçante à Capri",
      location: "Capri, Italie",
      alt: "Rue commerçante étroite avec des magasins à Capri",
      description:
        "Capri se caractérise par de charmantes rues commerçantes qui partent de la Piazzetta et mènent à travers Via Camerelle et Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port à Marina Grande",
      location: "Capri, Italie",
      alt: "Bateaux et yachts amarrés dans le port de Marina Grande à Capri",
      description:
        "Les porteurs de bagages des principaux hôtels attendent pour prendre les bagages sur un chariot, et vous pouvez prendre le funiculaire ou un taxi décapotable, car il n'y a pas de circulation automobile à Capri.",
    },
    "lisbon-hero": {
      title: "Monastère des Hiéronymites",
      location: "Lisbonne, Portugal",
      alt: "Façade du Monastère des Hiéronymites à Belém",
      description:
        "Construit dans la première moitié du XVIe siècle, il est considéré comme la perle et la quintessence du style manuélin, un mélange spécifiquement portugais de gothique et de Renaissance.",
    },
    "paris-eiffel": {
      title: "Tour Eiffel",
      location: "Paris, France",
      alt: "Illumination nocturne de la Tour Eiffel sur fond de ciel",
      description:
        "Le monument architectural le plus célèbre de Paris, considéré comme un symbole de la ville et parfois de toute la France.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "Paris, France",
      alt: "Pyramide de verre devant le palais du Louvre à Paris",
      description:
        "L'un des plus grands musées du monde, c'est aussi l'institution de ce type la plus visitée au monde.",
    },
    "paris-panteon": {
      title: "Vue du Panthéon depuis la Place du Panthéon",
      location: "Paris, France",
      alt: "Façade du Panthéon à Paris vue depuis la place",
      description:
        "Panthéon – un bâtiment dans le Quartier Latin de Paris, érigé à la fin du XVIIIe siècle comme église dédiée à Sainte Geneviève.",
    },
    "paris-snails": {
      title: "Célèbres escargots français",
      location: "Paris, France",
      alt: "Assiette d'escargots de Bourgogne préparés",
      description:
        "Difficile d'imaginer la cuisine de la Seine, et surtout du Rhône, sans un délicieux escargot dans l'assiette.",
    },
    "paris-1": {
      title: "Bibliothèque Nationale de France, site Richelieu, Salle Ovale",
      location: "Paris, France",
      alt: "Intérieur de la Salle Ovale de la Bibliothèque Nationale de France",
    },
    "paris-2": {
      title: "Versailles, Temple de l'Amour",
      location: "Versailles, France",
      alt: "Temple de l'Amour dans les jardins de Versailles",
    },
    "paris-3": {
      title: "Magnifiques jardins historiques", // Pourrait être plus spécifique, ex: Jardin des Tuileries
      location: "Paris, France",
      alt: "Allée de promenade dans un jardin à la française à Paris",
    },
    "paris-4": {
      title: "Faune dansant", // Mieux que la description
      location: "Paris, France",
      alt: "Sculpture du Faune dansant",
    },
    "frankfurt-hero": {
      title: "Ancien Opéra (Alte Oper), Francfort",
      location: "Francfort-sur-le-Main, Allemagne",
      alt: "Bâtiment de l'Ancien Opéra à Francfort la nuit",
      description:
        "S'élevant au-dessus d'une place pittoresque ornée d'une élégante fontaine se trouve l'Opéra, doté d'une façade de style Renaissance.",
    },
    "berlin-gate": {
      title: "Porte de Brandebourg",
      location: "Berlin, Allemagne",
      alt: "Porte de Brandebourg la nuit",
      description:
        "La Porte de Brandebourg comme symbole de Paix et de Liberté depuis le 3 octobre 1990, anniversaire de la réunification allemande.",
    },
    "berlin-museum": {
      title: "Ancien Musée",
      location: "Berlin, Allemagne",
      alt: "Colonnade devant l'Ancien Musée à Berlin",
      description:
        "Le musée a été construit pour rendre les collections d'art antique accessibles au grand public, sur ordre du roi de Prusse Frédéric-Guillaume III.",
    },
    "berlin-victory-column": {
      title: "Colonne de la Victoire",
      location: "Berlin, Allemagne",
      alt: "Statue dorée au sommet de la Colonne de la Victoire à Berlin",
      description:
        "La colonne située dans le parc du Großer Tiergarten à Berlin commémore la victoire de la Prusse sur le Danemark lors de la guerre des Duchés de 1864.",
    },
    "berlin-music": {
      title: "Mémorial Beethoven-Haydn-Mozart",
      location: "Berlin, Allemagne",
      alt: "Mémorial aux trois compositeurs dans le parc Tiergarten",
      description:
        "Un mémorial en plein air aux compositeurs classiques Ludwig van Beethoven, Joseph Haydn et Wolfgang Amadeus Mozart, datant de 1904.",
    },
    "prague-bridge": {
      title: "Vue sur la Vltava à Prague",
      location: "Prague, République tchèque",
      alt: "Pont Charles sur la Vltava à Prague au crépuscule",
      description:
        "Toute Prague se reflète dans la Vltava et flirte avec elle comme avec un miroir magique.",
    },
    "prague-wit": {
      title: "Trésor de Saint-Guy",
      location: "Prague, République tchèque",
      alt: "Reliquaire dans le Trésor de la Cathédrale Saint-Guy",
      description:
        "Artefacts dans le Trésor de la Cathédrale Saint-Guy au Château de Prague.",
    },
    "prague-dance": {
      title: "Maison Dansante",
      location: "Prague, République tchèque",
      alt: "Bâtiment moderne Maison Dansante à Prague",
      description:
        "Un bâtiment avant-gardiste conçu par le couple d'architectes Vlado Milunić et Frank Gehry dans le style déconstructiviste.",
    },
    "prague-kafka": {
      title: "Tête tournante de Franz Kafka",
      location: "Prague, République tchèque",
      alt: "Sculpture cinétique Tête de Franz Kafka à Prague",
      description:
        "David Černý a conçu cette œuvre d'art controversée pour le bâtiment commercial et de bureaux 'Quadrio' dans la rue Národní třída.",
    },
  },
  // About Section
  about: {
    title: "À propos d'EuroTrek",
    description1:
      "EuroTrek est un journal photo collectif créé par des étudiants universitaires étudiant en Pologne. Notre mission est de mettre en valeur la beauté, la culture et les expériences des voyages étudiants à travers une photographie authentique.",
    description2:
      "Cette plateforme sert à la fois d'inspiration pour les futurs étudiants voyageurs et de livre de souvenirs pour ceux qui ont déjà commencé leurs aventures européennes. Toutes les photos sont prises par des étudiants, montrant l'Europe sous une perspective fraîche et jeune.",
    pageTitle: "À propos de notre voyage",
    pageDescription1:
      "EuroTrek est né d'une passion pour la photographie de voyage et d'un désir de capturer les expériences uniques des étudiants explorateurs dans les villes les plus dynamiques d'Europe.",
    pageDescription2:
      "Ce qui a commencé comme un petit groupe de partage de photos entre camarades de classe étudiant en Pologne est devenu une plateforme reliant des étudiants photographes de divers pays, origines et disciplines académiques qui partagent un amour commun pour l'exploration et la narration visuelle.",
    pageDescription3:
      "Nos contributeurs sont des étudiants comme vous, qui concilient leurs études avec des aventures à travers le continent, capturant des moments authentiques en cours de route.",
    mission: {
      title: "Notre Mission",
      description:
        "Inspirer les voyages étudiants par une narration visuelle authentique et encourager une communauté de soutien pour les jeunes photographes explorant l'Europe.",
    },
    team: {
      title: "Collectif Étudiant",
      description:
        "Notre équipe est entièrement composée d'étudiants photographes, rédacteurs et développeurs web d'universités du monde entier. Chaque contributeur apporte sa perspective et son expertise uniques à la plateforme.",
    },
    feature1: {
      title: "Étudiants Photographes",
      description:
        "Photos prises par des étudiants internationaux du monde entier",
    },
    feature2: {
      title: "Expériences Authentiques",
      description:
        "Moments de voyage réels au-delà des sites touristiques typiques",
    },
    feature3: {
      title: "Nombreux Voyages",
      description:
        "Une collection croissante de photos de tout le continent européen",
    },
    image1: { title: "Lisbonne", description: "Monastère des Hiéronymites." },
    image2: {
      title: "Allemagne & France",
      description: "Un voyage inoubliable à travers l'Allemagne et la France.",
    },
    image3: {
      title: "Naples",
      description: "Paysages extraordinaires de Naples.",
    },
  },
  // Featured Section
  featured: {
    title: "À la une : Printemps à Paris",
    description1:
      "Paris au printemps est un rêve pour les étudiants photographes. La ville s'anime avec les cerisiers en fleurs, les terrasses de café et la lumière parfaite pour capturer les monuments emblématiques.",
    description2:
      "Notre collection à la une met en valeur la magie de Paris à travers les yeux d'étudiants polonais qui ont passé leurs vacances d'études à l'étranger dans la Ville Lumière.",
    exploreLink: "Explorez la Collection Paris",
    image1Alt: "Tour Eiffel au printemps",
    image2Alt: "La Seine à Paris",
    image3Alt: "Café parisien",
    image4Alt: "Musée du Louvre",
  },
  // Contact Section
  contact: {
    title: "Contact",
    description:
      "Vous avez des questions ou souhaitez soumettre vos propres photos de voyage étudiant ? Nous serions ravis d'avoir de vos nouvelles !",
    pageTitle: "Contactez-nous",
    getInTouch: "Comment pouvons-nous aider ?",
    getInTouchDescription:
      "Que vous souhaitiez soumettre vos photos de voyage, que vous ayez des questions sur notre plateforme ou que vous vouliez simplement dire bonjour, nous sommes là pour vous aider.",
    email: {
      title: "Envoyez-nous un Email",
      description: "Pour les demandes générales et les soumissions de photos",
    },
    location: {
      title: "Notre Emplacement",
      description:
        "Visitez notre bureau du collectif étudiant (sur rendez-vous)",
      address: "Université de Gdansk, ul. Bażyńskiego 8, 80-309 Gdansk",
    },
    phone: {
      title: "Appelez-nous",
      description: "Disponible en semaine de 10h à 18h CET",
    },
    form: {
      name: "Votre Nom",
      namePlaceholder: "Entrez votre nom",
      nameError: "Le nom est requis",
      email: "Votre Email",
      emailPlaceholder: "Entrez votre email",
      emailError: "Un email valide est requis",
      subject: "Sujet",
      subjectPlaceholder: "De quoi souhaitez-vous parler ?",
      subjectError: "Le sujet est requis",
      message: "Message",
      messagePlaceholder: "Tapez votre message ici...",
      messageError: "Le message doit comporter au moins 10 caractères",
      send: "Envoyer le Message",
      sending: "Envoi...",
      successTitle: "Message Envoyé !",
      successMessage:
        "Merci de nous avoir contactés. Nous reviendrons vers vous bientôt.",
    },
  },
  // Footer
  footer: {
    description:
      "Un voyage visuel à travers l'Europe capturé par l'objectif d'étudiants explorant les plus beaux coins du continent.",
    quickLinks: "Liens Rapides",
    resources: "Ressources",
    parisCollection: "Collection Paris",
    submitPhotos: "Soumettre des Photos",
    privacyPolicy: "Politique de Confidentialité",
    termsOfUse: "Conditions d'Utilisation",
    accessibility: "Accessibilité",
    cookiePolicy: "Politique de Cookies",
    cookieSettings: "Paramètres des Cookies",
    faq: "FAQ",
    sitemap: "Plan du Site",
    support: "Aide & Support",
    copyright: "Tous droits réservés.",
    tagline: "Fait avec ❤ par des étudiants, pour des étudiants.",
    instagram: "Suivez-nous sur Instagram",
    twitter: "Suivez-nous sur Twitter",
    facebook: "Suivez-nous sur Facebook",
    pinterest: "Suivez-nous sur Pinterest",
  },
  // Slider Controls
  slider: {
    previous: "Diapositive précédente",
    next: "Diapositive suivante",
    goToSlide: "Aller à la diapositive {{index}}",
  },
  // Lightbox
  lightbox: {
    close: "Fermer la visionneuse",
    previous: "Photo précédente",
    next: "Photo suivante",
  },
  // Theme Toggle
  theme: {
    toggleLight: "Passer en mode clair",
    toggleDark: "Passer en mode sombre",
  },
  // Language
  language: {
    changeLanguage: "Changer de langue",
  },
  // Home
  home: {
    heroAriaLabel: "Destinations à la une",
  },

  // --- SECTIONS FOR INFO PAGES ---
  privacyPolicy: {
    title: "Politique de Confidentialité",
    metaDescription:
      "Lisez la politique de confidentialité du service EuroTrek.",
    introduction:
      "Bienvenue dans la Politique de Confidentialité d'EuroTrek. Votre vie privée est importante pour nous, et nous nous engageons à protéger vos données personnelles conformément aux lois applicables, y compris le RGPD.",
    section1Title: "1. Quelles informations collectons-nous ?",
    section1Content:
      "Nous collectons les informations que vous nous fournissez directement (par exemple, via le formulaire de contact : nom, adresse e-mail, contenu du message) et les données collectées automatiquement lorsque vous utilisez le service (par exemple, adresse IP, type de navigateur, informations sur l'appareil, données d'activité du service via les cookies - voir la Politique de Cookies).",
    section2Title: "2. Comment utilisons-nous vos informations ?",
    section2Content:
      "Nous utilisons vos données pour fournir et améliorer nos services, communiquer avec vous (répondre aux demandes), analyser le trafic du site web, assurer la sécurité du service et remplir nos obligations légales.",
    contactTitle: "Contact pour la Confidentialité",
    contactContent:
      "Pour toute question concernant le traitement de vos données personnelles ou l'exercice de vos droits, veuillez nous contacter à : puaro@vp.pl",
  },
  termsOfUse: {
    title: "Conditions d'Utilisation",
    metaDescription: "Lisez les conditions d'utilisation du service EuroTrek.",
    introduction:
      "Ces Conditions d'Utilisation régissent l'utilisation du site web EuroTrek. En utilisant le service, vous acceptez les dispositions suivantes.",
    section1Title: "1. Règles Générales et Acceptation des Conditions",
    section1Content:
      "Le service EuroTrek est une plateforme présentant des photographies de voyage. Les utilisateurs sont tenus d'utiliser le service conformément à la loi et aux bonnes mœurs. La publication de contenu illégal, offensant ou violant les droits de tiers est interdite.",
    contactTitle: "Contact pour les Conditions d'Utilisation",
    contactContent:
      "Les questions concernant ces Conditions d'Utilisation doivent être adressées à : puaro@vp.pl",
  },
  accessibility: {
    title: "Déclaration d'Accessibilité",
    metaDescription:
      "Découvrez notre engagement en faveur de l'accessibilité numérique chez EuroTrek.",
    introduction:
      "EuroTrek s'efforce de garantir l'accessibilité numérique du service au public le plus large possible, y compris aux personnes handicapées. Nous travaillons continuellement à améliorer l'interface utilisateur et à appliquer les normes d'accessibilité pertinentes, telles que les directives pour l'accessibilité des contenus Web (WCAG).",
    section1Title: "1. Nos Efforts en matière d'Accessibilité",
    section1Content:
      "Nous visons à mettre en œuvre des solutions telles que : l'utilisation de code HTML sémantique, la garantie de la navigation au clavier, un contraste de couleurs adéquat, un texte alternatif pour les images et le test du service avec diverses technologies d'assistance.",
    contactTitle: "Commentaires et Coordonnées",
    contactContent:
      "Si vous rencontrez des obstacles à l'accessibilité sur notre service, veuillez nous contacter. Vos commentaires nous sont précieux. Contactez-nous à : puaro@vp.pl",
  },
  cookiePolicy: {
    title: "Politique de Cookies",
    metaDescription: "Apprenez comment EuroTrek utilise les cookies.",
    introduction:
      "Notre service utilise des cookies pour assurer le bon fonctionnement du site, améliorer votre expérience, ainsi qu'à des fins analytiques et marketing (avec votre consentement).",
    section1Title: "1. Que sont les cookies ?",
    section1Content:
      "Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, smartphone) lorsque vous visitez des sites web. Ils permettent au site de 'se souvenir' de vos actions et préférences pendant un certain temps.",
    section2Title: "2. Quels types de cookies utilisons-nous ?",
    section2Content: "Nous utilisons différents types de cookies, notamment :",
    type1:
      "Cookies essentiels : Nécessaires au fonctionnement de base du service (par exemple, session utilisateur). Ils ne nécessitent pas de consentement.",
    type2:
      "Cookies analytiques : Nous aident à comprendre comment les utilisateurs interagissent avec le site (par exemple, Google Analytics). Ils nécessitent votre consentement.",
    type3:
      "Cookies fonctionnels : Permettent de mémoriser vos choix et préférences (par exemple, la langue). Peuvent nécessiter un consentement.",
    type4:
      "Cookies marketing : Utilisés pour afficher des publicités personnalisées (par exemple, Pixel Facebook). Ils nécessitent votre consentement.",
    section3Title: "3. Gestion des Cookies",
    section3Content:
      "Vous pouvez gérer vos consentements aux cookies à tout moment à l'aide de l'outil de gestion du consentement disponible sur notre site (cliquez sur le bouton 'Paramètres des Cookies'). Vous pouvez également modifier les paramètres des cookies dans votre navigateur web.",
    settingsError:
      "Impossible d'ouvrir les paramètres des cookies. Contactez le support technique ou essayez de gérer les paramètres dans votre navigateur.",
    settingsInfoPlaceholder:
      "Cliquer sur le bouton ouvrira le panneau de gestion des paramètres de cookies.",
    contactTitle: "Contact pour la Politique de Cookies",
    contactContent:
      "Si vous avez des questions sur notre politique de cookies, veuillez nous contacter : puaro@vp.pl",
  },
  faq: {
    title: "Questions Fréquemment Posées (FAQ)",
    metaDescription:
      "Trouvez les réponses aux questions les plus courantes sur EuroTrek.",
    q1: "Question 1 : Comment puis-je soumettre mes photos ?",
    a1: "Actuellement, nous collectons des photos auprès d'étudiants affiliés. Si vous êtes intéressé par une collaboration, veuillez nous contacter via le formulaire de contact, en décrivant brièvement vos voyages et votre portfolio.",
    q2: "Question 2 : L'utilisation du service est-elle gratuite ?",
    a2: "Oui, la consultation des photos et du contenu sur le service EuroTrek est entièrement gratuite pour tous les utilisateurs.",
    q3: "Question 3 : Qui détient les droits d'auteur des photos ?",
    a3: "Les droits d'auteur des photos appartiennent aux étudiants auteurs. EuroTrek détient une licence pour les publier sur le service. Les détails sont spécifiés dans l'accord avec l'auteur et nos Conditions d'Utilisation.",
    stillHaveQuestions: "Vous avez d'autres questions ?",
    contactUs: "Contactez-nous",
  },
  sitemap: {
    title: "Plan du Site",
    metaDescription: "Parcourez la structure du site EuroTrek.",
    introduction:
      "Ci-dessous se trouve une liste des principales sections et pages disponibles sur le service EuroTrek pour vous aider à naviguer.",
  },
  support: {
    title: "Aide & Support",
    metaDescription:
      "Besoin d'aide ? Trouvez les coordonnées et le support pour EuroTrek.",
    introduction:
      "Nous sommes là pour vous aider ! Si vous avez des questions sur le fonctionnement du service, si vous avez rencontré un problème technique ou si vous avez d'autres préoccupations, veuillez utiliser les options de support disponibles.",
    faqTitle: "Consultez d'abord la FAQ",
    faqDescription:
      "De nombreuses réponses aux questions courantes se trouvent dans notre section Questions Fréquemment Posées (FAQ).",
    goToFaq: "Aller à la FAQ",
    contactFormTitle: "Formulaire de Contact",
    contactFormDescription:
      "Le meilleur moyen de nous contacter pour la plupart des questions est d'envoyer un message via notre formulaire de contact.",
    goToContact: "Aller au Contact",
    phoneTitle: "Support Téléphonique",
    phoneDescription:
      "Pour les problèmes techniques urgents, vous pouvez nous contacter par téléphone pendant [ex. 10h00 - 16h00] du lundi au vendredi.",
    phoneNumber: "Appelez : +33 0 00 00 00 00", // Numéro d'exemple
    responseInfo:
      "Nous nous efforçons de répondre aux demandes envoyées via le formulaire de contact dans un délai de 1 à 2 jours ouvrables.",
  },
};
