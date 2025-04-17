import { Description } from "@radix-ui/react-toast"; // Conservant l'importation d'origine

export default {
  // Common / Commun
  common: {
    no_photos_data: "Aucune donnée photo disponible.",
  },
  // Navbar / Barre de navigation
  navbar: {
    home: "Accueil",
    destinations: "Destinations",
    about: "À propos",
    contact: "Contact",
  },
  // Destinations
  destinations: {
    exploreTitle: "Explorer les Destinations",
    exploreDescription:
      "Parcourez notre collection de photos de voyages d'étudiants des plus belles villes d'Europe.",
    allDestinations: "Toutes les Destinations",
    lisbon: "Lisbonne",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Naples",
    prague: "Prague",
    loadMore: "Charger plus",
    ariaLabel: "Catégories de destinations",
  },
  // Hero Slides / Diapositives principales
  heroSlides: {
    "paris-hero": {
      location: "Paris, France",
      description:
        "La Ville Lumière à travers les yeux d'un étudiant - capturer le charme de l'architecture et de la culture parisiennes.",
    },
    "rome-hero": {
      // Clé faisant référence à Naples d'après le contenu original polonais
      location: "Naples, Italie",
      description:
        "Naples est un lieu où la vie palpite au rythme de l'espresso, des conversations de rue et de l'odeur de la pizza fraîchement cuite flottant dans l'air chaud méditerranéen.",
    },
    "lisbon-hero": {
      location: "Lisbonne, Portugal",
      description:
        "Lisbonne est une ville pleine de lumière, où les rues pavées serpentent entre des maisons colorées, et la vie s'écoule calmement au rythme du fado et de l'arôme des 'pasteis de nata' frais.",
    },
    "frankfurt-hero": {
      // Utilisation de la description plus précise de photos["frankfurt-hero"]
      location: "Francfort-sur-le-Main, Allemagne",
      description:
        "S'élevant au-dessus d'une place pittoresque ornée d'une élégante fontaine se trouve l'Ancien Opéra (Alte Oper), arborant une façade de style Renaissance.",
    },
  },
  // Photos
  photos: {
    view: "Voir la photo {{title}}",
    noPhotos: "Aucune photo n'est encore disponible pour cette destination.",
    "paris-sunset": {
      title: "Coucher de soleil à Paris",
      location: "Paris, France",
      alt: "Tour Eiffel au coucher du soleil à Paris",
    },
    "lisbon-tram": {
      title: "Vue sur le Théâtre National D. Maria II",
      location: "Lisbonne, Portugal",
      description:
        "Le bâtiment historique du théâtre est l'une des salles les plus prestigieuses du Portugal et se situe sur la place Rossio, au centre-ville.",
    },
    "lisbon-belem": {
      // Clé faisant probablement référence à Alfama d'après la description
      title: "Toits de la Vieille Ville",
      location: "Lisbonne, Portugal",
      description:
        "Le plus vieux quartier de Lisbonne est Alfama, construit à flanc de colline au-dessus du Tage à l'époque de la domination maure. C'est ici que l'on peut ressentir l'atmosphère de la Lisbonne médiévale.",
    },
    "lisbon-bele": {
      // Clé faisant probablement référence à la Tour de Belém
      title: "Tour de Belém",
      location: "Lisbonne, Portugal",
      description: "Forteresse médiévale surplombant l'embouchure du Tage.",
    },
    "boca do inferno": {
      title: "Boca do Inferno (Bouche de l'Enfer)",
      location: "Cascais, Portugal",
      description:
        "Un gouffre situé dans les falaises côtières près de la ville portugaise de Cascais.",
    },
    "capri-marina": {
      // Clé faisant probablement référence aux Faraglioni d'après la description
      title: "Plage Luigia ai Faraglioni",
      location: "Capri, Italie",
      description:
        "Située dans la mer Tyrrhénienne, elle occupe la 19ème place parmi les 118 plages de la région napolitaine.",
    },
    "paris-hero": {
      // Clé faisant probablement référence à Versailles d'après la description
      title: "Versailles – Perle du Baroque",
      location: "Versailles, France", // Emplacement corrigé
      alt: "Château de Versailles près de Paris",
      description:
        "Versailles est un symbole de la monarchie absolue française et l'un des plus magnifiques exemples d'architecture baroque au monde.",
    },
    "naples-view": {
      title: "Route au bord de la mer Tyrrhénienne",
      location: "Naples, Italie",
      alt: "Route au pied d'une montagne",
    },
    "naples-mummy": {
      title: "Moulage d'une victime du Vésuve",
      location: "Pompéi, Italie",
      alt: "Victimes de l'éruption du volcan",
      description:
        "Les moulages des corps ont été découverts en 1863 par l'archéologue Giuseppe Fiorelli. 'À ce jour, ils n'ont pas été inventoriés pour des raisons éthiques et en raison des sentiments avec lesquels les restes humains ont toujours été traités.'",
    },
    "naples-stadion": {
      title: "Amphithéâtre de Pompéi",
      location: "Pompéi, Italie",
      alt: "Partie du stade dans l'ancienne ville de Pompéi",
      description:
        "L'Amphithéâtre de Pompéi – un ancien amphithéâtre romain situé à Pompéi. C'est la plus ancienne structure de ce type encore existante.",
    },
    "naples-museum": {
      title: "Petite Dédicace Attalide (Gaulois)",
      location: "Naples, Italie",
      alt: "Musée Archéologique National de Naples",
      description:
        "Copie du IIe siècle ap. J.-C. d'un original grec du IIe siècle av. J.-C.",
    },
    "capri-taras": {
      title: "Capri près de Marina Piccola",
      location: "Capri, Italie",
      alt: "Terrasses à Capri",
      description:
        "Une charmante terrasse sur le toit avec des cactus. La plupart des toits des bâtiments à Capri sont plats. Et comme on le voit ci-dessus, des terrasses sont aménagées sur certains de ces bâtiments.",
    },
    "capri-street": {
      title: "Rue commerçante à Capri",
      location: "Capri, Italie",
      alt: "Boutiques à Capri",
      description:
        "Capri se caractérise par de charmantes rues commerçantes qui partent de la Piazzetta et mènent à travers la Via Camerelle et la Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port de Marina Grande",
      location: "Capri, Italie",
      alt: "Yachts amarrés",
      description:
        "Les porteurs des principaux hôtels attendent pour prendre vos bagages sur un chariot, et vous pouvez prendre le funiculaire ou un taxi décapotable, car il n'y a pas de circulation automobile à Capri.",
    },
    "lisbon-hero": {
      // Clé faisant probablement référence au Monastère des Hiéronymites d'après la description
      title: "Monastère des Hiéronymites",
      location: "Lisbonne, Portugal",
      alt: "Monastère des Hiéronymites à Belém",
      description:
        "Construit dans la première moitié du XVIe siècle, il est considéré comme la perle et la quintessence du style manuélin, un mélange typiquement portugais de gothique et de Renaissance.",
    },
    "paris-eiffel": {
      title: "Tour Eiffel",
      location: "Paris, France",
      alt: "Illumination nocturne de la Tour Eiffel à Paris",
      description:
        "Le monument architectural le plus célèbre de Paris, considéré comme un symbole de la ville et parfois de toute la France.",
    },
    "paris-louvre": {
      title: "Musée du Louvre",
      location: "Paris, France",
      alt: "Ancien palais royal à Paris",
      description:
        "L'un des plus grands musées du monde, c'est aussi le musée le plus visité de son genre au niveau mondial.",
    },
    "paris-panteon": {
      title: "Vue du Panthéon depuis la Place du Panthéon",
      location: "Paris, France",
      alt: "Le Panthéon depuis la Place du Panthéon",
      description:
        "Le Panthéon – un bâtiment dans le Quartier Latin de Paris, érigé à la fin du XVIIIe siècle comme église dédiée à Sainte Geneviève.",
    },
    "paris-snails": {
      title: "Célèbres Escargots Français",
      location: "Paris, France",
      alt: "Plat d'escargots",
      description:
        "Il est difficile d'imaginer la cuisine française, en particulier le long du Rhône, sans un délicieux escargot dans l'assiette.",
    },
    "frankfurt-hero": {
      // Clé faisant référence à l'Alte Oper d'après la description
      title: "Ancien Opéra (Alte Oper), Francfort",
      location: "Francfort-sur-le-Main, Allemagne",
      alt: "Ancien Opéra (Alte Oper), Francfort",
      description:
        "S'élevant au-dessus d'une place pittoresque ornée d'une élégante fontaine se trouve l'Ancien Opéra, arborant une façade de style Renaissance.",
    },
    "berlin-gate": {
      title: "Porte de Brandebourg",
      location: "Berlin, Allemagne",
      alt: "Porte de Brandebourg",
      description:
        "La Porte de Brandebourg comme symbole de Paix et de Liberté depuis le 3 octobre 1990, anniversaire de la réunification allemande.",
    },
    "berlin-museum": {
      title: "Altes Museum (Ancien Musée)",
      location: "Berlin, Allemagne",
      alt: "Altes Museum (Ancien Musée)",
      description:
        "Le musée a été construit sur ordre du roi de Prusse Frédéric-Guillaume III pour rendre les collections d'art antique accessibles au grand public.",
    },
    "berlin-victory-column": {
      title: "Colonne de la Victoire (Siegessäule)",
      location: "Berlin, Allemagne",
      alt: "Colonne de la Victoire",
      description:
        "La colonne située dans le parc Großer Tiergarten à Berlin commémore la victoire de la Prusse sur le Danemark lors de la guerre des Duchés de 1864.",
    },
    "berlin-music": {
      title: "Mémorial Beethoven-Haydn-Mozart",
      location: "Berlin, Allemagne",
      alt: "Mémorial aux trois génies musicaux",
      description:
        "Un mémorial en plein air aux compositeurs classiques Ludwig van Beethoven, Joseph Haydn et Wolfgang Amadeus Mozart, inauguré en 1904.",
    },
    "prague-bridge": {
      title: "Vue sur la Vltava à Prague",
      location: "Prague, République Tchèque",
      alt: "La Vltava à Prague",
    },
    "prague-wit": {
      title: "Trésor de Saint-Guy",
      location: "Prague, République Tchèque",
      alt: "Trésor à Prague",
      description:
        "Artefacts dans le Trésor de la Cathédrale Saint-Guy au Château de Prague.",
    },
    "prague-dance": {
      title: "Maison Dansante",
      location: "Prague, République Tchèque",
      alt: "Ginger et Fred",
      description:
        "Un bâtiment avant-gardiste conçu par le couple d'architectes Vlado Milunić et Frank Gehry dans le style déconstructiviste.",
    },
    "prague-kafka": {
      title: "Tête rotative de Franz Kafka",
      location: "Prague, République Tchèque",
      alt: "Tête de Franz Kafka",
      description:
        "David Černý a conçu cette œuvre d'art controversée pour le bâtiment commercial et de bureaux 'Quadrio' dans la rue Národní třída.",
    },
  },
  // About Section / Section À propos
  about: {
    title: "À propos d'EuroTrek",
    description1:
      "EuroTrek est un journal photo collectif créé par des étudiants universitaires étudiant à travers l'Europe (initialement axé sur la Pologne). Notre mission est de mettre en valeur la beauté, la culture et les expériences des voyages étudiants à travers une photographie authentique.", // Contexte légèrement ajusté
    description2:
      "Cette plateforme sert à la fois d'inspiration pour les futurs étudiants voyageurs et de carnet de souvenirs pour ceux qui ont déjà entrepris leurs aventures européennes. Toutes les photos sont prises par des étudiants, montrant l'Europe à travers un objectif frais et jeune.",
    pageTitle: "À propos de Notre Voyage",
    pageDescription1:
      "EuroTrek est né d'une passion pour la photographie de voyage et d'un désir de capturer les expériences uniques des étudiants explorateurs dans les villes les plus vibrantes d'Europe.",
    pageDescription2:
      "Ce qui a commencé comme un petit groupe partageant des photos entre camarades de classe étudiant en Pologne est devenu une plateforme connectant des étudiants photographes de divers pays, origines et disciplines académiques, partageant tous un amour commun pour la découverte et la narration visuelle.",
    pageDescription3:
      "Nos contributeurs sont des étudiants comme vous, équilibrant leurs études avec des aventures à travers le continent, capturant des moments authentiques en cours de route.",
    mission: {
      title: "Notre Mission",
      description:
        "Inspirer les voyages étudiants par le biais d'une narration visuelle authentique et favoriser une communauté de soutien pour les jeunes photographes explorant l'Europe.",
    },
    team: {
      title: "Le Collectif Étudiant",
      description:
        "Notre équipe est entièrement composée d'étudiants photographes, rédacteurs et développeurs web d'universités du monde entier. Chaque contributeur apporte sa perspective et son expérience uniques à la plateforme.",
    },
    feature1: {
      title: "Photographes Étudiants",
      description:
        "Photos prises par des étudiants en échange du monde entier.",
    },
    feature2: {
      title: "Expériences Authentiques",
      description:
        "Moments de voyage réels au-delà des sites touristiques typiques.",
    },
    feature3: {
      title: "Destinations Multiples",
      description:
        "Une collection croissante de photos de tout le continent européen.",
    },
    image1: {
      title: "Lisbonne",
      description: "Monastère des Hiéronymites.",
    },
    image2: {
      title: "Allemagne & France",
      description: "Un voyage inoubliable à travers l'Allemagne et la France.",
    },
    image3: {
      title: "Naples",
      description: "Les paysages extraordinaires de Naples.",
    },
  },
  // Featured Section / Section En vedette
  featured: {
    title: "En vedette : Le Printemps à Paris",
    description1:
      "Paris au printemps est un rêve pour les étudiants photographes. La ville s'anime avec les cerisiers en fleurs, les terrasses de café et une lumière parfaite pour capturer les monuments emblématiques.",
    description2:
      "Notre collection en vedette met en valeur la magie de Paris à travers les yeux d'étudiants qui ont passé leur semestre d'échange dans la Ville Lumière.", // Contexte légèrement ajusté
    exploreLink: "Explorer la Collection Paris",
    image1Alt: "Tour Eiffel au printemps",
    image2Alt: "La Seine à Paris",
    image3Alt: "Terrasse de café parisienne",
    image4Alt: "Musée du Louvre",
  },
  // Contact Section / Section Contact
  contact: {
    title: "Contact",
    description:
      "Vous avez des questions ou souhaitez soumettre vos propres photos de voyages étudiants ? Nous serions ravis d'avoir de vos nouvelles !",
    pageTitle: "Nous Contacter",
    getInTouch: "Comment Pouvons-Nous Vous Aider ?",
    getInTouchDescription:
      "Que vous souhaitiez soumettre vos photos de voyage, que vous ayez des questions sur notre plateforme ou que vous vouliez simplement dire bonjour, nous sommes là pour vous aider.",
    email: {
      title: "Envoyez-nous un E-mail",
      description: "Pour les demandes générales et la soumission de photos",
    },
    location: {
      title: "Notre Emplacement",
      description: "Visitez le siège de notre collectif étudiant",
      address: "University Creative Hub, European Campus, Amsterdam", // Conservé tel quel, supposant qu'il s'agit d'un nom de lieu spécifique
    },
    phone: {
      title: "Appelez-nous",
      description: "Disponible en semaine de 10h à 18h HEC", // CET -> HEC (Heure d'Europe Centrale)
    },
    form: {
      name: "Votre Nom",
      namePlaceholder: "Entrez votre nom",
      nameError: "Le nom est requis",
      email: "Votre E-mail",
      emailPlaceholder: "Entrez votre adresse e-mail",
      emailError: "Une adresse e-mail valide est requise",
      subject: "Sujet",
      subjectPlaceholder: "De quoi souhaitez-vous parler ?",
      subjectError: "Le sujet est requis",
      message: "Message",
      messagePlaceholder: "Écrivez votre message ici...",
      messageError: "Le message doit contenir au moins 10 caractères",
      send: "Envoyer le Message",
      sending: "Envoi...",
      successTitle: "Message Envoyé !",
      successMessage:
        "Merci de nous avoir contactés. Nous vous répondrons bientôt.",
    },
  },
  // Footer / Pied de page
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
    copyright: "© {{year}} EuroTrek. Tous droits réservés.", // Placeholder d'année ajouté
    tagline: "Créé avec ❤ par des étudiants, pour des étudiants.",
    instagram: "Suivez-nous sur Instagram",
    twitter: "Suivez-nous sur Twitter",
    facebook: "Suivez-nous sur Facebook",
    pinterest: "Suivez-nous sur Pinterest",
  },
  // Slider Controls / Contrôles du carrousel
  slider: {
    previous: "Diapositive précédente",
    next: "Diapositive suivante",
    goToSlide: "Aller à la diapositive {{index}}",
  },
  // Lightbox / Visionneuse d'images
  lightbox: {
    close: "Fermer",
    previous: "Photo précédente",
    next: "Photo suivante",
  },
  // Theme Toggle / Sélecteur de thème
  theme: {
    toggleLight: "Passer en mode clair",
    toggleDark: "Passer en mode sombre",
  },
  // Language / Langue
  language: {
    changeLanguage: "Changer de langue",
  },
  // Home / Accueil
  home: {
    heroAriaLabel: "Destinations en vedette",
  },
};
