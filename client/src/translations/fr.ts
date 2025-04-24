import { Description } from "@radix-ui/react-toast"; // Cet import semble inutilisé dans l'objet de traduction lui-même, mais conservé au cas où il serait nécessaire ailleurs.

export default {
  // Common - Commun
  common: {
    no_photos_data: "Aucune donnée photo disponible.",
    lastUpdated: "Dernière mise à jour",
    placeholderContent:
      "Le contenu de cette section est en cours de préparation. Il sera bientôt mis à jour.",
  },

  // Routes - Routes (Slugs d'URL)
  routes: {
    // --- Pages principales (correspondant à la navbar et au sitemap) ---
    home: "", // Vide pour le chemin racine dans la langue par défaut (ex. /fr/)
    destinations: "voyages", // Ou "destinations"
    about: "a-propos", // Ou "qui-sommes-nous"
    contact: "contact",

    // --- Chemins de détail (base pour les paramètres) ---
    destinationDetail: "voyage", // ex. /fr/voyage/paris ou /fr/voyage/:id

    // --- Pied de page et nouvelles pages d'information ---
    faq: "faq", // Reste souvent international
    privacy: "politique-confidentialite",
    terms: "conditions-utilisation",
    sitemap: "plan-site", // Ou garder 'sitemap'
    accessibility: "accessibilite",
    cookiePolicy: "politique-cookies",
    support: "aide", // Ou "support"
  },

  // Navbar - Navigation
  navbar: {
    home: "Accueil",
    destinations: "Voyages", // Ou "Destinations"
    about: "À Propos",
    contact: "Contact",
  },

  // Destinations - Destinations (Textes UI)
  destinations: {
    exploreTitle: "Découvrez les Voyages",
    exploreDescription:
      "Parcourez notre collection de photos de voyages d'étudiants dans les plus belles villes d'Europe.",
    allDestinations: "Tous les Voyages",
    lisbon: "Lisbonne",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Naples",
    prague: "Prague",
    loadMore: "Charger plus",
    ariaLabel: "Catégories de voyages",
  },

  // Destinations Data - Données des destinations (Noms et pays)
  destinationsData: {
    lisbon: { name: "Lisbonne", country: "Portugal" },
    paris: { name: "Paris", country: "France" },
    berlin: { name: "Berlin", country: "Allemagne" },
    capri: { name: "Capri", country: "Italie" },
    naples: { name: "Naples", country: "Italie" },
    prague: { name: "Prague", country: "République tchèque" }, // Ou "Tchéquie"
  },

  // Hero Slides - Diaporamas principaux
  heroSlides: {
    "paris-hero": {
      location: "Paris, France",
      description:
        "La ville lumière à travers les yeux d'un étudiant - capturer le charme de l'architecture et de la culture parisiennes.",
    },
    "rome-hero": {
      // Note : L'emplacement d'origine était Naples
      location: "Naples, Italie",
      description:
        "Naples est un lieu où la vie se déroule au rythme de l'espresso, des conversations de rue et de l'odeur de la pizza fraîchement cuite flottant dans l'air chaud méditerranéen.",
    },
    "lisbon-hero": {
      location: "Lisbonne, Portugal",
      description:
        "Lisbonne est une ville pleine de lumière, où les rues pavées serpentent entre des maisons colorées, et où la vie s'écoule calmement au rythme du fado et de l'arôme des 'pasteis de nata' frais.",
    },
    "frankfurt-hero": {
      location: "Francfort-sur-le-Main, Allemagne",
      // Description originale conservée comme demandé
      description:
        "Lisbonne est une ville pleine de lumière, où les rues pavées serpentent entre des maisons colorées, et où la vie s'écoule calmement au rythme du fado et de l'arôme des 'pasteis de nata' frais.",
    },
  },

  // Photos - Photos
  photos: {
    view: "Voir la photo {{title}}",
    noPhotos: "Aucune photo n'est encore disponible pour ce voyage.",
    "paris-sunset": {
      title: "Coucher de soleil à Paris",
      location: "Paris, France",
      alt: "Tour Eiffel au coucher du soleil à Paris",
    },
    "lisbon-tram": {
      title: "Vue sur le Théâtre National D. Maria II",
      location: "Lisbonne, Portugal",
      description:
        "Le bâtiment historique du théâtre est l'une des salles les plus prestigieuses du Portugal et est situé sur la place Rossio, au centre de la ville.",
    },
    "lisbon-belem": {
      title: "Toits de la Vieille Ville",
      location: "Lisbonne, Portugal",
      description:
        "Le plus vieux quartier de Lisbonne est l'Alfama, construit sur la colline surplombant le Tage à l'époque maure. C'est ici que l'on peut ressentir l'atmosphère de la Lisbonne médiévale.",
    },
    "lisbon-bele": {
      title: "Tour de Belém",
      location: "Lisbonne, Portugal",
      description: "Forteresse médiévale surplombant l'embouchure du Tage",
    },
    "boca do inferno": {
      title: "Bouche de l'Enfer",
      location: "Cascais, Portugal",
      description:
        "Un gouffre situé dans les falaises côtières près de la ville portugaise de Cascais",
    },
    "capri-marina": {
      title: "Plage Luigia aux Faraglioni",
      location: "Capri, Italie",
      description:
        "Située dans la mer Tyrrhénienne, elle occupe la 19e place parmi les 118 plages de la région napolitaine.",
    },
    "paris-hero": {
      // Clé dupliquée comme dans pl.ts original
      title: "Versailles – Perle du Baroque",
      location: "Paris, France",
      alt: "Château de Versailles près de Paris",
      description:
        "Versailles est un symbole de la monarchie absolue française et l'un des exemples les plus magnifiques de l'architecture baroque au monde.",
    },
    "naples-view": {
      title: "Route au bord de la mer Tyrrhénienne",
      location: "Naples, Italie",
      alt: "Route au pied de la montagne",
      description: "Une route pittoresque le long de la côte.",
    },
    "naples-mummy": {
      title: "Moulage d'une victime du Vésuve",
      location: "Pompéi, Italie",
      alt: "Victimes de l'éruption volcanique",
      description:
        "Les moulages des corps ont été découverts en 1863 par l'archéologue Giuseppe Fiorelli. 'Jusqu'à présent, ils n'ont pas été inventoriés pour des raisons éthiques et en raison de la sensibilité toujours accordée aux restes humains.'",
    },
    "naples-stadion": {
      title: "Amphithéâtre de Pompéi",
      location: "Pompéi, Italie",
      alt: "Partie du stade dans l'ancienne ville de Pompéi",
      description:
        "L'Amphithéâtre de Pompéi – un ancien amphithéâtre romain, situé à Pompéi. C'est la plus ancienne structure de ce type encore existante.",
    },
    "naples-museum": {
      title: "Petit don pergaménien",
      location: "Naples, Italie",
      alt: "Musée Archéologique National de Naples",
      description:
        "Une copie du IIe siècle après J.-C. d'un original grec du IIe siècle avant J.-C.",
    },
    "capri-taras": {
      title: "Capri près de Marina Piccola",
      location: "Capri, Italie",
      alt: "Terrasses à Capri",
      description:
        "Une charmante terrasse sur le toit avec des cactus. La plupart des toits des bâtiments de Capri sont plats. Et comme on le voit ci-dessus, des terrasses sont aménagées sur certains de ces bâtiments.",
    },
    "capri-street": {
      title: "Rue commerçante à Capri",
      location: "Capri, Italie",
      alt: "Boutiques à Capri",
      description:
        "Capri se caractérise par ses charmantes rues commerçantes qui partent de la Piazzetta et traversent la Via Camerelle et la Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port de Marina Grande",
      location: "Capri, Italie",
      alt: "Yachts amarrés",
      description:
        "Les porteurs de bagages des principaux hôtels attendent pour prendre vos bagages sur un chariot, et vous pouvez prendre le funiculaire ou une décapotable, car il n'y a pas de circulation automobile à Capri.",
    },
    "lisbon-hero": {
      // Clé dupliquée comme dans pl.ts original
      title: "Monastère des Hiéronymites",
      location: "Lisbonne, Portugal",
      alt: "Monastère des Hiéronymites à Belém",
      description:
        "Construit dans la première moitié du XVIe siècle, il est considéré comme une perle et la quintessence du style manuélin, un mélange spécifique portugais de gothique et de renaissance.",
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
        "L'un des plus grands musées du monde, c'est aussi l'institution de ce type la plus visitée au monde.",
    },
    "paris-panteon": {
      title: "Vue du Panthéon depuis la Place du Panthéon",
      location: "Paris, France",
      alt: "Panthéon depuis la Place du Panthéon",
      description:
        "Le Panthéon – un bâtiment dans le Quartier Latin à Paris, érigé à la fin du XVIIIe siècle comme église dédiée à Sainte Geneviève.",
    },
    "paris-snails": {
      title: "Célèbres escargots français",
      location: "Paris, France",
      alt: "Plat d'escargots",
      description:
        "Difficile d'imaginer la cuisine de la Seine, et surtout celle du Rhône, sans un délicieux escargot dans l'assiette.",
    },
    "frankfurt-hero": {
      // Clé dupliquée comme dans pl.ts original
      title: "Alte Oper (Ancien Opéra), Francfort",
      location: "Francfort-sur-le-Main, Allemagne",
      alt: "Alte Oper (Ancien Opéra), Francfort",
      description:
        "S'élevant au-dessus d'une place pittoresque ornée d'une élégante fontaine se trouve l'Opéra, qui présente une façade de style Renaissance.",
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
        "Le musée a été construit pour rendre les collections d'art antique accessibles au grand public, sur ordre du roi de Prusse Frédéric-Guillaume III.",
    },
    "berlin-victory-column": {
      title: "Colonne de la Victoire",
      location: "Berlin, Allemagne",
      alt: "Colonne de la Victoire",
      description:
        "Une colonne située dans le parc Großer Tiergarten à Berlin commémorant la victoire de la Prusse sur le Danemark lors de la guerre des Duchés de 1864.",
    },
    "berlin-music": {
      title: "Mémorial Beethoven-Haydn-Mozart",
      location: "Berlin, Allemagne",
      alt: "Mémorial aux trois génies musicaux",
      description:
        "Un mémorial en plein air aux compositeurs classiques Ludwig van Beethoven, Joseph Haydn et Wolfgang Amadeus Mozart, créé en 1904.",
    },
    "prague-bridge": {
      title: "Vue sur la Vltava à Prague",
      location: "Prague, République tchèque",
      alt: "Rivière Vltava à Prague",
      description:
        "Tout Prague se reflète dans la Vltava et lui sourit, comme dans un miroir magique.",
    },
    "prague-wit": {
      title: "Trésor de Saint-Guy",
      location: "Prague, République tchèque",
      alt: "Trésor à Prague",
      description:
        "Artefacts dans le Trésor de la cathédrale Saint-Guy au Château de Prague.",
    },
    "prague-dance": {
      title: "Maison Dansante",
      location: "Prague, République tchèque",
      alt: "Ginger et Fred",
      description:
        "Un bâtiment avant-gardiste conçu par le duo d'architectes Vlado Milunić et Frank Gehry dans le style déconstructiviste.",
    },
    "prague-kafka": {
      title: "Tête rotative de Franz Kafka",
      location: "Prague, République tchèque",
      alt: "Tête de Franz Kafka",
      description:
        "David Černý a conçu cette œuvre d'art controversée pour le bâtiment commercial et de bureaux 'Quadrio' dans la rue Národní třída.",
    },
  },

  // About Section - À Propos
  about: {
    title: "À Propos d'EuroTrek",
    description1:
      "EuroTrek est un journal photo collectif créé par des étudiants universitaires étudiant en Pologne. Notre mission est de mettre en valeur la beauté, la culture et les expériences des voyages étudiants à travers une photographie authentique.",
    description2:
      "Cette plateforme sert à la fois d'inspiration pour les futurs étudiants voyageurs et de livre de souvenirs pour ceux qui ont déjà entrepris leurs aventures européennes. Toutes les photos sont prises par des étudiants, offrant une perspective fraîche et jeune sur l'Europe.",
    pageTitle: "À Propos de Notre Voyage",
    pageDescription1:
      "EuroTrek est né d'une passion pour la photographie de voyage et d'un désir de capturer les experiences uniques des étudiants explorateurs dans les villes les plus vibrantes d'Europe.",
    pageDescription2:
      "Ce qui a commencé comme un petit groupe de partage de photos entre camarades de classe étudiant en Pologne est devenu une plateforme connectant des étudiants photographes de divers pays, origines et disciplines académiques, partageant tous un amour commun pour l'exploration et la narration visuelle.",
    pageDescription3:
      "Nos contributeurs sont des étudiants comme vous, équilibrant leurs études avec des aventures à travers le continent, capturant des moments authentiques en chemin.",
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
        "Photos prises par des étudiants internationaux du monde entier",
    },
    feature2: {
      title: "Expériences Authentiques",
      description:
        "Moments de voyage réels au-delà des lieux touristiques typiques",
    },
    feature3: {
      title: "Voyages Multiples",
      description:
        "Une collection croissante de photos de tout le continent européen",
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
      description: "Les paysages époustouflants de Naples.",
    },
  },

  // Featured Section - En Vedette
  featured: {
    title: "En Vedette : Printemps à Paris",
    description1:
      "Paris au printemps est un rêve pour les étudiants photographes. La ville s'anime avec les cerisiers en fleurs, les terrasses de café et la lumière parfaite pour capturer les monuments emblématiques.",
    description2:
      "Notre collection vedette met en valeur la magie de Paris à travers les yeux d'étudiants polonais qui ont passé leurs vacances d'études à l'étranger dans la Ville Lumière.",
    exploreLink: "Explorez la Collection Paris",
    image1Alt: "Tour Eiffel au Printemps",
    image2Alt: "La Seine à Paris",
    image3Alt: "Terrasse de Café Parisien",
    image4Alt: "Musée du Louvre",
  },

  // Contact Section - Contact
  contact: {
    title: "Contactez-nous",
    description:
      "Vous avez des questions ou souhaitez soumettre vos propres photos de voyages étudiants ? Nous serions ravis de vous entendre !",
    pageTitle: "Prenez Contact",
    getInTouch: "Comment Pouvons-nous Vous Aider ?",
    getInTouchDescription:
      "Que vous souhaitiez soumettre vos photos de voyage, que vous ayez des questions sur notre plateforme ou que vous vouliez simplement dire bonjour, nous sommes là pour vous aider.",
    email: {
      title: "Envoyez-nous un Email",
      description: "Pour les demandes générales et les soumissions de photos",
    },
    location: {
      title: "Notre Emplacement",
      description: "Visitez notre bureau du collectif étudiant",
      address: "University Creative Hub, European Campus, Amsterdam",
    },
    phone: {
      title: "Appelez-nous",
      description: "Disponible les jours ouvrables de 10h00 à 18h00 CET",
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
      messagePlaceholder: "Entrez votre message ici...",
      messageError: "Le message doit contenir au moins 10 caractères",
      send: "Envoyer le Message",
      sending: "Envoi...",
      successTitle: "Message Envoyé !",
      successMessage:
        "Merci de nous avoir contactés. Nous reviendrons vers vous bientôt.",
    },
  },

  // Footer - Pied de page
  footer: {
    description:
      "Un voyage visuel à travers l'Europe capturé par des étudiants explorant les plus beaux coins du continent.",
    quickLinks: "Liens Rapides",
    resources: "Ressources",
    parisCollection: "Collection Paris",
    submitPhotos: "Soumettre des Photos",
    privacyPolicy: "Politique de Confidentialité",
    termsOfUse: "Conditions d'Utilisation",
    accessibility: "Accessibilité",
    cookiePolicy: "Politique de Cookies",
    cookieSettings: "Paramètres des Cookies",
    faq: "Questions Fréquemment Posées (FAQ)",
    sitemap: "Plan du Site",
    support: "Aide & Support",
    copyright: "Tous droits réservés.",
    tagline: "Fait avec ❤ par des étudiants, pour des étudiants.",
    instagram: "Suivez-nous sur Instagram",
    twitter: "Suivez-nous sur Twitter",
    facebook: "Suivez-nous sur Facebook",
    pinterest: "Suivez-nous sur Pinterest",
    linkedin: "Suivez-nous sur LinkedIn",
    messenger: "Contactez-nous via Messenger",
  },

  // Slider Controls - Contrôles du Slider
  slider: {
    previous: "Diapositive précédente",
    next: "Diapositive suivante",
    goToSlide: "Aller à la diapositive {{index}}",
  },

  // Lightbox - Visionneuse d'Images
  lightbox: {
    close: "Fermer la visionneuse",
    previous: "Image précédente",
    next: "Image suivante",
  },

  // Theme Toggle - Changement de Thème
  theme: {
    toggleLight: "Passer en mode clair",
    toggleDark: "Passer en mode sombre",
  },

  // Language - Langue
  language: {
    changeLanguage: "Changer de langue",
  },

  // Home - Accueil
  home: {
    heroAriaLabel: "Destinations en vedette",
  },

  // --- Pages d'Information ---
  privacyPolicy: {
    title: "Politique de Confidentialité",
    metaDescription:
      "Lisez la politique de confidentialité du service EuroTrek.",
    introduction:
      "Bienvenue dans la Politique de Confidentialité d'EuroTrek. Votre vie privée est importante pour nous, et nous nous engageons à protéger vos données personnelles conformément aux réglementations applicables, y compris le RGPD.",
    section1Title: "1. Quelles informations collectons-nous ?",
    section1Content:
      "Nous collectons les informations que vous nous fournissez directement (par ex., via le formulaire de contact : nom, adresse e-mail, contenu du message) et les données collectées automatiquement lorsque vous utilisez le service (par ex., adresse IP, type de navigateur, informations sur l'appareil, données d'activité sur le service via les cookies – voir la Politique de Cookies).",
    section2Title: "2. Comment utilisons-nous vos informations ?",
    section2Content:
      "Nous utilisons vos données pour fournir et améliorer nos services, communiquer avec vous (répondre aux demandes), analyser le trafic du site web, assurer la sécurité du service et remplir les obligations légales.",
    contactTitle: "Contact concernant la confidentialité",
    contactContent:
      "Pour les questions relatives au traitement de vos données personnelles ou à l'exercice de vos droits, veuillez nous contacter à : [votre-email@exemple.fr].", // Remplacez par l'email réel
  },
  termsOfUse: {
    title: "Conditions d'Utilisation",
    metaDescription: "Lisez les conditions d'utilisation du service EuroTrek.",
    introduction:
      "Ces Conditions d'Utilisation régissent l'utilisation du service web EuroTrek. En utilisant le service, vous acceptez les dispositions suivantes.",
    section1Title: "1. Règles générales et acceptation des conditions",
    section1Content:
      "Le service EuroTrek est une plateforme présentant des photographies de voyage. Les utilisateurs sont tenus d'utiliser le service conformément à la loi et aux bonnes mœurs. Il est interdit de publier du contenu illégal, offensant ou violant les droits de tiers.",
    contactTitle: "Contact concernant les Conditions d'Utilisation",
    contactContent:
      "Les questions concernant ces Conditions d'Utilisation doivent être adressées à : [votre-email@exemple.fr].", // Remplacez par l'email réel
  },
  accessibility: {
    title: "Déclaration d'Accessibilité",
    metaDescription:
      "En savoir plus sur notre engagement envers l'accessibilité numérique chez EuroTrek.",
    introduction:
      "EuroTrek s'efforce de garantir l'accessibilité numérique du service au plus grand nombre d'utilisateurs possible, y compris les personnes handicapées. Nous travaillons continuellement à améliorer l'interface et à appliquer les normes d'accessibilité pertinentes, telles que les WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Nos efforts en matière d'accessibilité",
    section1Content:
      "Nous nous efforçons de mettre en œuvre des solutions telles que : l'utilisation de code HTML sémantique, la garantie de la navigation au clavier, un contraste de couleurs adéquat, des descriptions alternatives pour les images et le test du service à l'aide de diverses technologies d'assistance.",
    contactTitle: "Commentaires et coordonnées",
    contactContent:
      "Si vous rencontrez des barrières d'accessibilité sur notre service, veuillez nous contacter. Vos commentaires sont précieux pour nous. Contactez-nous à : [votre-email@exemple.fr].", // Remplacez par l'email réel
  },
  cookiePolicy: {
    title: "Politique de Cookies",
    metaDescription: "Découvrez comment EuroTrek utilise les cookies.",
    introduction:
      "Notre service utilise des cookies pour assurer le bon fonctionnement du site, améliorer votre expérience et à des fins d'analyse et de marketing (avec votre consentement).",
    section1Title: "1. Que sont les cookies ?",
    section1Content:
      "Les cookies sont de petits fichiers texte enregistrés sur votre appareil (ordinateur, smartphone) lorsque vous visitez des sites web. Ils permettent au site de 'se souvenir' de vos actions et préférences pendant un certain temps.",
    section2Title: "2. Quels types de cookies utilisons-nous ?",
    section2Content: "Nous utilisons différents types de cookies, notamment :",
    type1:
      "Cookies nécessaires : Essentiels au fonctionnement de base du service (par ex., session utilisateur). Ils ne nécessitent pas de consentement.",
    type2:
      "Cookies analytiques : Nous aident à comprendre comment les utilisateurs interagissent avec le site (par ex., Google Analytics). Ils nécessitent votre consentement.",
    type3:
      "Cookies fonctionnels : Permettent de mémoriser vos choix et préférences (par ex., langue). Peuvent nécessiter un consentement.",
    type4:
      "Cookies marketing : Utilisés pour afficher des publicités personnalisées (par ex., Pixel Facebook). Ils nécessitent votre consentement.",
    section3Title: "3. Gestion des cookies",
    section3Content:
      "Vous pouvez gérer vos consentements aux cookies à tout moment à l'aide de l'outil de gestion du consentement disponible sur notre site (cliquez sur le bouton 'Paramètres des Cookies'). Vous pouvez également modifier les paramètres des cookies dans votre navigateur web.",
    settingsError:
      "Impossible d'ouvrir les paramètres des cookies. Contactez le support ou essayez de gérer les paramètres dans votre navigateur.",
    settingsInfoPlaceholder:
      "Cliquer sur le bouton ouvrira le panneau de gestion des paramètres de cookies.",
    contactTitle: "Contact concernant la Politique de Cookies",
    contactContent:
      "Si vous avez des questions sur notre politique de cookies, contactez-nous à : [votre-email@exemple.fr].", // Remplacez par l'email réel
  },
  faq: {
    title: "Questions Fréquemment Posées (FAQ)",
    metaDescription:
      "Trouvez les réponses aux questions les plus courantes sur EuroTrek.",
    q1: "Question 1 : Comment puis-je soumettre mes photos ?",
    a1: "Actuellement, nous collectons des photos auprès d'étudiants affiliés. Si vous êtes intéressé à collaborer, veuillez nous contacter via le formulaire de contact, en décrivant brièvement vos voyages et votre portfolio.",
    q2: "Question 2 : L'utilisation du service est-elle gratuite ?",
    a2: "Oui, la navigation des photos et du contenu sur le service EuroTrek est entièrement gratuite pour tous les utilisateurs.",
    q3: "Question 3 : À qui appartiennent les droits d'auteur des photos ?",
    a3: "Les droits d'auteur des photos appartiennent aux étudiants auteurs. EuroTrek détient une licence pour les publier sur le service. Les détails sont spécifiés dans l'accord avec l'auteur et dans nos Conditions d'Utilisation.",
    stillHaveQuestions: "Vous avez d'autres questions ?",
    contactUs: "Contactez-nous",
  },
  sitemap: {
    title: "Plan du Site",
    metaDescription: "Parcourez la structure du site EuroTrek.",
    introduction:
      "Vous trouverez ci-dessous une liste des principales sections et pages disponibles sur le service EuroTrek pour vous aider à naviguer.",
  },
  support: {
    title: "Aide & Support",
    metaDescription:
      "Besoin d'aide ? Trouvez les informations de contact et le support pour EuroTrek.",
    introduction:
      "Nous sommes là pour vous aider ! Si vous avez des questions sur le fonctionnement du service, si vous avez rencontré un problème technique ou si vous avez d'autres préoccupations, veuillez utiliser les options de support disponibles.",
    faqTitle: "Consultez d'abord la FAQ",
    faqDescription:
      "De nombreuses réponses aux questions courantes se trouvent dans notre section Questions Fréquemment Posées (FAQ).",
    goToFaq: "Aller à la FAQ",
    contactFormTitle: "Formulaire de Contact",
    contactFormDescription:
      "Le meilleur moyen de nous contacter pour la plupart des demandes est d'envoyer un message via notre formulaire de contact.",
    goToContact: "Aller au Contact",
    phoneTitle: "Support Téléphonique",
    phoneDescription:
      "Pour les problèmes techniques urgents, vous pouvez nous contacter par téléphone pendant [ex. 10h00 - 16h00] du lundi au vendredi.",
    phoneNumber: "Appeler : [Votre Numéro de Téléphone]", // Remplacez par le numéro de téléphone réel
    responseInfo:
      "Nous nous efforçons de répondre aux demandes soumises via le formulaire de contact dans un délai de 1 à 2 jours ouvrables.",
  },
};
