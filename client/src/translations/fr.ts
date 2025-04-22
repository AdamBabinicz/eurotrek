import { Description } from "@radix-ui/react-toast"; // Conserver l'importation

export default {
  // Common / Commun
  common: {
    no_photos_data: "Aucune donnée photo disponible.",
    // --- AJOUTÉ ---
    lastUpdated: "Dernière mise à jour",
    placeholderContent:
      "Le contenu de cette section est en cours de préparation. Il sera bientôt mis à jour.",
    // --- FIN AJOUTÉ ---
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
    exploreTitle: "Découvrez les Destinations",
    exploreDescription:
      "Parcourez notre collection de photos de voyages d'étudiants prises dans les plus belles villes d'Europe.",
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
      location: "Naples, Italie",
      description:
        "Naples est un lieu où la vie s'écoule au rythme de l'espresso, des conversations dans la rue et de l'odeur de la pizza fraîchement cuite flottant dans l'air chaud méditerranéen.",
    },
    "lisbon-hero": {
      location: "Lisbonne, Portugal",
      description:
        "Lisbonne est une ville pleine de lumière, où les rues pavées serpentent entre des maisons colorées, et la vie s'écoule paisiblement au rythme du fado et de l'arôme des frais 'pastéis de nata'.",
    },
    "frankfurt-hero": {
      location: "Francfort-sur-le-Main, Allemagne",
      // Description du modèle PL conservée, même si elle décrit Lisbonne
      description:
        "Lisbonne est une ville pleine de lumière, où les rues pavées serpentent entre des maisons colorées, et la vie s'écoule paisiblement au rythme du fado et de l'arôme des frais 'pastéis de nata'.",
    },
  },
  // Photos
  photos: {
    view: "Voir la photo {{title}}",
    noPhotos: "Aucune photo n'est encore disponible pour cette destination.",
    "paris-sunset": {
      title: "Coucher de soleil à Paris",
      location: "Paris, France",
      alt: "La Tour Eiffel au coucher du soleil à Paris",
    },
    "lisbon-tram": {
      title: "Vue sur le Théâtre National D. Maria II",
      location: "Lisbonne, Portugal",
      description:
        "Le bâtiment historique du théâtre est l'une des salles les plus prestigieuses du Portugal et se trouve sur la place Rossio, au centre-ville.",
    },
    "lisbon-belem": {
      title: "Toits de la Vieille Ville",
      location: "Lisbonne, Portugal",
      description:
        "Le plus ancien quartier de Lisbonne est Alfama, construit sur une pente au-dessus du Tage à l'époque de la domination maure. C'est ici que l'on peut ressentir l'atmosphère de la Lisbonne médiévale.",
    },
    "lisbon-bele": {
      title: "Tour de Belém",
      location: "Lisbonne, Portugal",
      description: "Forteresse médiévale avec vue sur l'embouchure du Tage", // Correction de la faute de frappe 'widokime'
    },
    "boca do inferno": {
      title: "Bouche de l'Enfer (Boca do Inferno)",
      location: "Cascais, Portugal",
      description:
        "Un gouffre situé dans les falaises côtières près de la ville portugaise de Cascais",
    },
    "capri-marina": {
      title: "Plage Luigia ai Faraglioni",
      location: "Capri, Italie",
      description:
        "Située dans la mer Tyrrhénienne, elle occupe la 19ème place parmi les 118 plages de la région napolitaine.",
    },
    "paris-hero": {
      // Note : Conflit avec heroSlides, mais traduction telle quelle.
      title: "Versailles – Perle du Baroque",
      location: "Paris, France", // Techniquement près de Paris
      alt: "Château de Versailles près de Paris",
      description:
        "Versailles est un symbole de la monarchie absolue française et l'un des exemples les plus magnifiques de l'architecture baroque au monde.",
    },
    "naples-view": {
      title: "Route sur la mer Tyrrhénienne",
      location: "Naples, Italie",
      alt: "Route au pied d'une montagne",
      description: "Itinéraire pittoresque le long de la côte.",
    },
    "naples-mummy": {
      title: "Moulage d'une victime du Vésuve",
      location: "Pompéi, Italie",
      alt: "Victimes de l'éruption volcanique",
      description:
        "Les moulages des corps ont été exhumés en 1863 par l'archéologue Giuseppe Fiorelli. 'Jusqu'à présent, ils n'ont pas été inventoriés pour des raisons éthiques et en raison de la sensibilité avec laquelle les restes humains ont toujours été traités.'",
    },
    "naples-stadion": {
      title: "Amphithéâtre de Pompéi",
      location: "Pompéi, Italie",
      alt: "Partie du stade dans l'ancienne cité de Pompéi",
      description:
        "L'Amphithéâtre de Pompéi – un ancien amphithéâtre romain, situé à Pompéi. C'est la plus ancienne structure conservée de ce type.",
    },
    "naples-museum": {
      title: "Le petit donataire pergaménien", // Traduction directe, fait référence à des sculptures spécifiques
      location: "Naples, Italie",
      alt: "Musée Archéologique National de Naples",
      description:
        "Copie du IIe siècle apr. J.-C. d'un original grec du IIe siècle av. J.-C.",
    },
    "capri-taras": {
      title: "Capri près de Marina Piccola",
      location: "Capri, Italie",
      alt: "Terrasses à Capri",
      description:
        "Une charmante terrasse sur le toit avec des cactus. La plupart des toits des bâtiments de Capri sont plats. Et comme on peut le voir ci-dessus, des terrasses sont aménagées sur certains de ces bâtiments.",
    },
    "capri-street": {
      title: "Rue commerçante à Capri",
      location: "Capri, Italie",
      alt: "Magasins à Capri",
      description:
        "Capri se caractérise par ses charmantes rues commerçantes, qui partent de la Piazzetta et mènent à travers la Via Camerelle et la Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port à Marina Grande",
      location: "Capri, Italie",
      alt: "Yachts amarrés",
      description:
        "Les porteurs de bagages des hôtels principaux attendent pour prendre vos bagages sur un chariot, et vous pouvez prendre le funiculaire ou un taxi décapotable, car il n'y a pas de circulation automobile à Capri.",
    },
    "lisbon-hero": {
      // Note : Conflit avec heroSlides, mais traduction telle quelle.
      title: "Monastère des Hiéronymites (Mosteiro dos Jerónimos)",
      location: "Lisbonne, Portugal",
      alt: "Monastère des Hiéronymites à Belém",
      description:
        "Construit dans la première moitié du XVIe siècle, il est considéré comme le joyau et la quintessence du style manuélin, un mélange spécifiquement portugais de gothique et de renaissance.",
    },
    "paris-eiffel": {
      title: "Tour Eiffel",
      location: "Paris, France",
      alt: "Illumination nocturne de la Tour Eiffel à Paris",
      description:
        "Le monument architectural le plus célèbre de Paris, considéré comme un symbole de cette ville et parfois de toute la France.",
    },
    "paris-louvre": {
      title: "Musée du Louvre",
      location: "Paris, France",
      alt: "Ancien palais royal à Paris",
      description:
        "L'un des plus grands musées du monde, c'est aussi l'établissement de ce type le plus visité au monde.",
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
        "Il est difficile d'imaginer la cuisine de la Seine, et surtout celle du Rhône, sans de délicieux escargots dans l'assiette.",
    },
    "frankfurt-hero": {
      // Note : Conflit avec heroSlides, mais traduction telle quelle.
      title: "Ancien Opéra (Alte Oper), Francfort",
      location: "Francfort-sur-le-Main, Allemagne",
      alt: "Ancien Opéra (Alte Oper), Francfort",
      description:
        "S'élevant au-dessus d'une place pittoresque ornée d'une élégante fontaine se trouve l'Opéra, qui possède une façade de style Renaissance.",
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
      alt: "Altes Museum",
      description:
        "Le musée a été construit pour rendre accessibles au grand public les collections d'art antique, sur ordre du roi de Prusse Frédéric-Guillaume III.",
    },
    "berlin-victory-column": {
      title: "Colonne de la Victoire (Siegessäule)",
      location: "Berlin, Allemagne",
      alt: "Colonne de la Victoire",
      description:
        "Colonne située dans le parc Großer Tiergarten à Berlin commémorant la victoire de la Prusse sur le Danemark lors de la guerre des Duchés de 1864.",
    },
    "berlin-music": {
      title: "Monument à Beethoven, Haydn et Mozart",
      location: "Berlin, Allemagne",
      alt: "Monument aux trois génies musicaux",
      description:
        "Monument en plein air aux compositeurs classiques Ludwig van Beethoven, Joseph Haydn et Wolfgang Amadeus Mozart, datant de 1904.",
    },
    "prague-bridge": {
      title: "Vue sur la Vltava à Prague",
      location: "Prague, République tchèque",
      alt: "La rivière Vltava à Prague",
      description:
        "Tout Prague se reflète dans la Vltava et la flatte, comme un miroir magique.",
    },
    "prague-wit": {
      title: "Trésor de Saint-Guy",
      location: "Prague, République tchèque",
      alt: "Trésor à Prague",
      description:
        "Artefacts dans le Trésor de la Cathédrale Saint-Guy au Château de Prague.",
    },
    "prague-dance": {
      title: "Maison Dansante",
      location: "Prague, République tchèque",
      alt: "Ginger et Fred",
      description:
        "Bâtiment avant-gardiste conçu par le couple d'architectes Vlado Milunić et Frank Gehry dans le style déconstructiviste.",
    },
    "prague-kafka": {
      title: "Tête rotative de Franz Kafka",
      location: "Prague, République tchèque",
      alt: "Tête de Franz Kafka",
      description:
        "David Černý a conçu cette œuvre d'art controversée pour le bâtiment commercial et de bureaux 'Quadrio' dans la rue Národní třída.",
    },
  },
  // About Section / À propos
  about: {
    title: "À propos d'EuroTrek",
    description1:
      "EuroTrek est un journal photo collectif créé par des étudiants universitaires étudiant en Pologne. Notre mission est de présenter la beauté, la culture et les expériences des voyages étudiants à travers une photographie authentique.",
    description2:
      "Cette plateforme sert à la fois d'inspiration pour les futurs étudiants voyageurs et de livre de souvenirs pour ceux qui ont déjà entrepris leurs aventures européennes. Toutes les photos sont prises par des étudiants, montrant l'Europe sous un angle frais et jeune.",
    pageTitle: "À propos de notre voyage",
    pageDescription1:
      "EuroTrek est né d'une passion pour la photographie de voyage et d'un désir de capturer les expériences uniques des étudiants explorateurs dans les villes les plus dynamiques d'Europe.",
    pageDescription2:
      "Ce qui a commencé comme un petit groupe partageant des photos entre camarades de classe étudiant en Pologne est devenu une plateforme reliant des étudiants photographes de divers pays, horizons et disciplines académiques qui partagent un amour commun pour l'exploration et la narration visuelle.",
    pageDescription3:
      "Nos contributeurs sont des étudiants comme vous, qui concilient leurs études avec des aventures à travers le continent, capturant des moments authentiques en cours de route.",
    mission: {
      title: "Notre Mission",
      description:
        "Inspirer les voyages étudiants par le biais d'une narration visuelle authentique et favoriser une communauté de soutien pour les jeunes photographes explorant l'Europe.",
    },
    team: {
      title: "Le Collectif Étudiant",
      description:
        "Notre équipe est entièrement composée d'étudiants photographes, rédacteurs et développeurs web d'universités du monde entier. Chaque contributeur apporte sa perspective et son expertise uniques à la plateforme.",
    },
    feature1: {
      title: "Photographes Étudiants",
      description: "Photos prises par des étudiants en échange du monde entier",
    },
    feature2: {
      title: "Expériences Authentiques",
      description:
        "Moments de voyage réels au-delà des sites touristiques typiques",
    },
    feature3: {
      title: "Multiples Destinations",
      description:
        "Une collection croissante d'images de tout le continent européen",
    },
    image1: {
      title: "Lisbonne",
      description: "Monastère des Hiéronymites.",
    },
    image2: {
      title: "Allemagne et France",
      description: "Un voyage inoubliable à travers l'Allemagne et la France.",
    },
    image3: {
      title: "Naples",
      description: "Les paysages extraordinaires de Naples.",
    },
  },
  // Featured Section / En vedette
  featured: {
    title: "En vedette : Printemps à Paris",
    description1:
      "Paris au printemps est un rêve pour les étudiants photographes. La ville s'anime avec les cerisiers en fleurs, les terrasses de café et la lumière parfaite pour capturer les monuments emblématiques.",
    description2:
      "Notre collection en vedette montre la magie de Paris à travers les yeux d'étudiants polonais qui ont passé leurs vacances d'échange dans la Ville Lumière.",
    exploreLink: "Découvrez la Collection Paris",
    image1Alt: "Tour Eiffel au printemps",
    image2Alt: "La Seine à Paris",
    image3Alt: "Scène de café parisien",
    image4Alt: "Musée du Louvre",
  },
  // Contact Section / Contact
  contact: {
    title: "Contact",
    description:
      "Vous avez des questions ou souhaitez soumettre vos propres photos de voyages étudiants ? Nous serions ravis d'avoir de vos nouvelles !",
    pageTitle: "Prendre Contact",
    getInTouch: "Comment pouvons-nous vous aider ?",
    getInTouchDescription:
      "Que vous souhaitiez soumettre vos photos de voyage, que vous ayez des questions sur notre plateforme ou que vous vouliez simplement dire bonjour, nous sommes là pour vous aider.",
    email: {
      title: "Envoyez-nous un email",
      description: "Pour les demandes générales et la soumission de photos",
    },
    location: {
      title: "Notre Emplacement",
      description: "Visitez le bureau de notre collectif étudiant",
      address: "University Creative Hub, European Campus, Amsterdam", // Adresse de substitution conservée
    },
    phone: {
      title: "Appelez-nous",
      description: "Disponible en semaine de 10h00 à 18h00 CET",
    },
    form: {
      name: "Votre Nom",
      namePlaceholder: "Entrez votre nom",
      nameError: "Le nom est requis",
      email: "Votre Email",
      emailPlaceholder: "Entrez votre email",
      emailError: "Une adresse email valide est requise",
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
    cookiePolicy: "Politique de Cookies",
    cookieSettings: "Paramètres des Cookies",
    faq: "Questions Fréquentes (FAQ)",
    sitemap: "Plan du Site",
    support: "Aide et Support",
    copyright: "Tous droits réservés.",
    tagline: "Fait avec ❤ par des étudiants, pour des étudiants.",
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
    close: "Fermer la visionneuse",
    previous: "Image précédente",
    next: "Image suivante",
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

  // --- SECTIONS AJOUTÉES POUR LES NOUVELLES PAGES D'INFORMATION (AVEC CONTENU GÉNÉRIQUE) ---
  privacyPolicy: {
    title: "Politique de Confidentialité",
    metaDescription:
      "Lisez la politique de confidentialité du service EuroTrek.",
    introduction:
      "Bienvenue dans la Politique de Confidentialité d'EuroTrek. Votre vie privée est importante pour nous et nous nous engageons à protéger vos données personnelles conformément aux réglementations applicables, y compris le RGPD.",
    section1Title: "1. Quelles informations collectons-nous ?",
    section1Content:
      "Nous collectons les informations que vous nous fournissez directement (par ex. via le formulaire de contact : nom, adresse e-mail, contenu du message) et les données collectées automatiquement lors de l'utilisation du service (par ex. adresse IP, type de navigateur, informations sur l'appareil, données sur l'activité dans le service via les cookies – voir la Politique de Cookies).",
    section2Title: "2. Comment utilisons-nous vos informations ?",
    section2Content:
      "Nous utilisons vos données pour fournir et améliorer nos services, communiquer avec vous (répondre aux demandes), analyser le trafic du site web, assurer la sécurité du service et remplir nos obligations légales.",
    contactTitle: "Contact Confidentialité",
    contactContent:
      "Pour les questions concernant le traitement de vos données personnelles ou l'exercice de vos droits, veuillez nous contacter à : [puaro@vp.pl].", // Email de substitution conservé
  },
  termsOfUse: {
    title: "Conditions d'Utilisation",
    metaDescription: "Lisez les conditions d'utilisation du service EuroTrek.",
    introduction:
      "Ces Conditions d'Utilisation régissent votre utilisation du site web EuroTrek. En utilisant le service, vous acceptez les dispositions suivantes.",
    section1Title: "1. Règles générales et acceptation des conditions",
    section1Content:
      "Le service EuroTrek est une plateforme présentant des photographies de voyage. Les utilisateurs sont tenus d'utiliser le service conformément à la loi et aux bonnes mœurs. Il est interdit de publier du contenu illégal, offensant ou portant atteinte aux droits de tiers.",
    contactTitle: "Contact Conditions d'Utilisation",
    contactContent:
      "Les questions concernant ces Conditions d'Utilisation doivent être adressées à : [puaro@vp.pl].", // Email de substitution conservé
  },
  accessibility: {
    title: "Déclaration d'Accessibilité",
    metaDescription:
      "Découvrez notre engagement envers l'accessibilité numérique chez EuroTrek.",
    introduction:
      "EuroTrek s'efforce d'assurer l'accessibilité numérique du service au plus grand nombre d'utilisateurs possible, y compris les personnes handicapées. Nous travaillons continuellement à l'amélioration de l'interface utilisateur et à l'application des normes d'accessibilité pertinentes, telles que les WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Nos actions en faveur de l'accessibilité",
    section1Content:
      "Nous nous efforçons de mettre en œuvre des solutions telles que : l'utilisation de code HTML sémantique, la garantie de la navigation au clavier, un contraste de couleurs adéquat, des textes alternatifs pour les images et le test du service à l'aide de diverses technologies d'assistance.",
    contactTitle: "Retours et Coordonnées",
    contactContent:
      "Si vous rencontrez des obstacles à l'accessibilité sur notre service, veuillez nous contacter. Vos retours nous sont précieux. Contactez-nous à : [puaro@vp.pl].", // Email de substitution conservé
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
      "Cookies essentiels : Nécessaires au fonctionnement de base du service (par ex. session utilisateur). Ne nécessitent pas de consentement.",
    type2:
      "Cookies analytiques : Nous aident à comprendre comment les utilisateurs interagissent avec le site (par ex. Google Analytics). Nécessitent votre consentement.",
    type3:
      "Cookies fonctionnels : Permettent de mémoriser vos choix et préférences (par ex. langue). Peuvent nécessiter un consentement.",
    type4:
      "Cookies marketing : Utilisés pour afficher des publicités personnalisées (par ex. Pixel Facebook). Nécessitent votre consentement.",
    section3Title: "3. Gestion des Cookies",
    section3Content:
      "Vous pouvez gérer vos consentements aux cookies à tout moment via l'outil de gestion du consentement disponible sur notre site (cliquez sur le bouton 'Paramètres des Cookies'). Vous pouvez également modifier les paramètres des cookies dans votre navigateur web.",
    settingsError:
      "Impossible d'ouvrir les paramètres des cookies. Veuillez contacter le support ou essayer de gérer les paramètres dans votre navigateur.",
    settingsInfoPlaceholder:
      "Cliquer sur le bouton ouvrira le panneau de gestion des paramètres des cookies.",
    contactTitle: "Contact Politique de Cookies",
    contactContent:
      "Si vous avez des questions sur notre politique de cookies, veuillez nous contacter : [puaro@vp.pl].", // Email de substitution conservé
  },
  faq: {
    title: "Questions Fréquentes (FAQ)",
    metaDescription:
      "Trouvez les réponses aux questions les plus courantes sur EuroTrek.",
    q1: "Question 1 : Comment puis-je soumettre mes photos ?",
    a1: "Actuellement, nous collectons des photos auprès d'étudiants partenaires. Si vous êtes intéressé par une collaboration, veuillez nous contacter via le formulaire de contact, en décrivant brièvement vos voyages et votre portfolio.",
    q2: "Question 2 : L'utilisation du service est-elle payante ?",
    a2: "Non, la consultation des photos et du contenu sur le service EuroTrek est entièrement gratuite pour tous les utilisateurs.",
    q3: "Question 3 : À qui appartiennent les droits d'auteur des photos ?",
    a3: "Les droits d'auteur des photos appartiennent aux étudiants auteurs. EuroTrek détient une licence pour leur publication sur le service. Les détails sont spécifiés dans l'accord avec l'auteur et dans nos Conditions d'Utilisation.",
    stillHaveQuestions: "Avez-vous d'autres questions ?",
    contactUs: "Contactez-nous",
  },
  sitemap: {
    title: "Plan du Site",
    metaDescription: "Parcourez la structure du site EuroTrek.",
    introduction:
      "Vous trouverez ci-dessous une liste des principales sections et pages disponibles sur le service EuroTrek pour faciliter votre navigation.",
  },
  support: {
    title: "Aide et Support",
    metaDescription:
      "Besoin d'aide ? Trouvez les informations de contact et le support pour EuroTrek.",
    introduction:
      "Nous sommes là pour vous aider ! Si vous avez des questions sur le fonctionnement du service, si vous avez rencontré un problème technique ou si vous avez d'autres préoccupations, veuillez utiliser les options de support disponibles.",
    faqTitle: "Consultez d'abord la FAQ",
    faqDescription:
      "De nombreuses réponses aux questions courantes se trouvent dans notre section Questions Fréquentes (FAQ).",
    goToFaq: "Aller à la FAQ",
    contactFormTitle: "Formulaire de Contact",
    contactFormDescription:
      "Le meilleur moyen de nous contacter pour la plupart des questions est d'envoyer un message via notre formulaire de contact.",
    goToContact: "Aller au Contact",
    phoneTitle: "Support Téléphonique",
    phoneDescription:
      "Pour les problèmes techniques urgents, vous pouvez nous contacter par téléphone pendant [par ex. 10h00 - 16h00] du lundi au vendredi.",
    phoneNumber: "Appelez-nous : [000 000 000]", // Numéro de téléphone de substitution conservé
    responseInfo:
      "Nous nous efforçons de répondre aux demandes soumises via le formulaire de contact dans un délai de 1 à 2 jours ouvrables.",
  },
  // --- FIN DES SECTIONS MODIFIÉES ---
};
