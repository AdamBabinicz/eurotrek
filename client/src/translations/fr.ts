import { Description } from "@radix-ui/react-toast"; // Conservé comme demandé, bien qu'inutilisé

export default {
  // Common - Commun
  common: {
    no_photos_data: "Aucune donnée photo disponible.",
    lastUpdated: "Dernière mise à jour",
    placeholderContent:
      "Le contenu de cette section est en préparation. Il sera bientôt complété.",
  },

  routes: {
    home: "",
    destinations: "voyages", // Route exemple
    about: "a-propos", // Route exemple
    contact: "contact", // Route exemple
    destinationDetail: "voyage", // Route exemple
    faq: "faq", // Route exemple
    privacy: "politique-confidentialite", // Route exemple
    terms: "conditions-utilisation", // Route exemple
    sitemap: "plan-site", // Route exemple
    accessibility: "accessibilite", // Route exemple
    cookiePolicy: "politique-cookies", // Route exemple
    support: "aide", // Route exemple
  },

  // Navbar - Barre de navigation
  navbar: {
    home: "Accueil",
    destinations: "Voyages",
    about: "À propos",
    contact: "Contact",
  },
  // Destinations - Destinations
  destinations: {
    exploreTitle: "Découvrez les Voyages",
    exploreDescription:
      "Parcourez notre collection de photos de voyages étudiants des plus belles villes d'Europe.",
    allDestinations: "Tous les Voyages",
    lisbon: "Lisbonne",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Naples",
    prague: "Prague",
    loadMore: "Charger plus",
    ariaLabel: "Catégories de voyages",
    noMorePhotos: "Il n'y a plus de photos à charger pour cette catégorie.",
  },
  destinationsData: {
    lisbon: { name: "Lisbonne", country: "Portugal" },
    paris: { name: "Paris", country: "France" },
    berlin: { name: "Berlin", country: "Allemagne" },
    capri: { name: "Capri", country: "Italie" },
    naples: { name: "Naples", country: "Italie" },
    prague: { name: "Prague", country: "République tchèque" },
  },
  // Hero Slides - Diapositives principales
  heroSlides: {
    "paris-hero": {
      location: "Paris, France",
      description:
        "La ville lumière à travers l'objectif d'un étudiant - capturer le charme de l'architecture et de la culture parisiennes.",
    },
    "rome-hero": {
      // Note : pl.ts contient Naples ici, pas Rome. Traduction du contexte de Naples.
      location: "Naples, Italie",
      description:
        "Naples est un lieu où la vie s'écoule au rythme de l'espresso, des conversations de rue et de l'odeur de la pizza fraîchement cuite flottant dans l'air chaud et méditerranéen.",
    },
    "lisbon-hero": {
      location: "Lisbonne, Portugal",
      description:
        "Lisbonne est une ville pleine de lumière, où les rues pavées serpentent entre des maisons colorées, et où la vie s'écoule paisiblement au rythme du fado et de l'arôme des 'pasteis de nata' frais.",
    },
    "frankfurt-hero": {
      location: "Francfort-sur-le-Main, Allemagne",
      description:
        // Note : pl.ts a copié la description de Lisbonne ici. Traduction de ce texte.
        "Lisbonne est une ville pleine de lumière, où les rues pavées serpentent entre des maisons colorées, et où la vie s'écoule paisiblement au rythme du fado et de l'arôme des 'pasteis de nata' frais.",
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
        "Le bâtiment historique du théâtre est l'une des salles les plus prestigieuses du Portugal et se trouve sur la place Rossio, au centre-ville.",
    },
    "lisbon-belem": {
      title: "Toits de la Vieille Ville",
      location: "Lisbonne, Portugal",
      description:
        "Le quartier le plus ancien de Lisbonne est l'Alfama, construit sur le versant surplombant le Tage à l'époque de la domination maure. C'est ici que l'on peut ressentir l'atmosphère de la Lisbonne médiévale.",
    },
    "lisbon-bele": {
      title: "Tour de Belém",
      location: "Lisbonne, Portugal",
      description: "Forteresse médiévale avec vue sur l'embouchure du Tage.",
    },
    "boca do inferno": {
      title: "Bouche de l'Enfer",
      location: "Cascais, Portugal",
      description:
        "Gouffre situé dans les falaises côtières près de la ville portugaise de Cascais.",
    },
    "capri-marina": {
      title: "Plage Luigia aux Faraglioni", // En supposant un nom commun
      location: "Capri, Italie",
      description:
        "Située dans la mer Tyrrhénienne, elle occupe la 19e place parmi les 118 plages de la région napolitaine.",
    },
    "paris-hero": {
      // Note : Conflit d'ID potentiel avec heroSlides
      title: "Versailles – Perle du Baroque",
      location: "Paris, France", // Devrait être Versailles ?
      alt: "Château de Versailles près de Paris",
      description:
        "Versailles est un symbole de la monarchie absolue française et l'un des plus magnifiques exemples d'architecture baroque au monde.",
    },
    "naples-view": {
      title: "Route sur la mer Tyrrhénienne",
      location: "Naples, Italie",
      alt: "Route au pied de la montagne",
      description: "Itinéraire pittoresque le long de la côte.",
    },
    "naples-mummy": {
      title: "Moulage d'une victime du Vésuve",
      location: "Pompéi, Italie",
      alt: "Victimes de l'éruption du volcan",
      description:
        "Les moulages des corps ont été découverts en 1863 par l'archéologue Giuseppe Fiorelli. 'Jusqu'à présent, ils n'ont pas été inventoriés pour des raisons éthiques et en raison des sentiments avec lesquels les restes humains ont toujours été traités.'",
    },
    "naples-stadion": {
      title: "Amphithéâtre de Pompéi",
      location: "Pompéi, Italie",
      alt: "Partie du stade dans l'ancienne ville de Pompéi",
      description:
        "L'Amphithéâtre de Pompéi – un ancien amphithéâtre romain, situé à Pompéi. C'est la plus ancienne structure de ce type encore existante.",
    },
    "naples-museum": {
      title: "Petit donataire pergaménien", // Terme courant pour le groupe de statues
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
        "Une charmante terrasse sur le toit avec des cactus. La plupart des toits des bâtiments de Capri sont plats. Et comme on le voit ci-dessus, des terrasses sont aménagées sur certains de ces bâtiments.",
    },
    "capri-street": {
      title: "Rue commerçante à Capri",
      location: "Capri, Italie",
      alt: "Boutiques à Capri",
      description:
        "Capri se caractérise par de charmantes rues commerçantes qui partent de la Piazzetta et mènent par la Via Camerelle et la Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port de Marina Grande",
      location: "Capri, Italie",
      alt: "Yachts amarrés",
      description:
        "Les porteurs de bagages des principaux hôtels attendent pour prendre les bagages sur un chariot, et vous pouvez prendre le funiculaire ou un taxi décapotable, car il n'y a pas de circulation automobile à Capri.",
    },
    "lisbon-hero": {
      // Note : Conflit d'ID potentiel avec heroSlides
      title: "Monastère des Hiéronymites",
      location: "Lisbonne, Portugal",
      alt: "Monastère des Hiéronymites à Belém",
      description:
        "Construit dans la première moitié du XVIe siècle, il est considéré comme la perle et la quintessence du style manuélin, une combinaison spécifiquement portugaise de gothique et de renaissance.",
    },
    "paris-eiffel": {
      title: "Tour Eiffel",
      location: "Paris, France",
      alt: "Illumination nocturne de la Tour Eiffel à Paris",
      description:
        "Le monument architectural le plus célèbre de Paris, reconnu comme un symbole de cette ville et parfois de toute la France.",
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
        "Le Panthéon – un bâtiment dans le Quartier Latin de Paris, érigé à la fin du XVIIIe siècle comme église dédiée à Sainte Geneviève.",
    },
    "paris-snails": {
      title: "Célèbres escargots français",
      location: "Paris, France",
      alt: "Plat d'escargots",
      description:
        "Difficile d'imaginer la cuisine de la Seine, et surtout du Rhône, sans un délicieux escargot dans l'assiette.",
    },
    "paris-1": {
      alt: "Vue de la Bibliothèque Nationale au printemps",
      title: "Bibliothèque Nationale de France, site Richelieu, Salle Ovale",
      location: "Paris, France",
    },
    "paris-2": {
      alt: "Versailles, Temple de l'amour",
      title: "Versailles, Temple de l'amour",
      location: "Versailles, France",
    },
    "paris-3": {
      alt: "Jardin à la française",
      title: "Magnifiques jardins historiques",
      location: "Paris, France",
    },
    "paris-4": {
      alt: "Faune dansant",
      title: "Dieu mythique romain de la forêt et des bosquets enchantés",
      location: "Paris, France",
    },
    "frankfurt-hero": {
      // Note : Conflit d'ID potentiel avec heroSlides
      title: "Alte Oper (Vieil Opéra), Francfort",
      location: "Francfort-sur-le-Main, Allemagne",
      alt: "Alte Oper (Vieil Opéra), Francfort",
      description:
        "S'élevant au-dessus d'une place pittoresque ornée d'une élégante fontaine se dresse l'Opéra, doté d'une façade de style Renaissance.",
    },
    "berlin-gate": {
      title: "Porte de Brandebourg",
      location: "Berlin, Allemagne",
      alt: "Porte de Brandebourg",
      description:
        "La Porte de Brandebourg comme symbole de Paix et de Liberté depuis le 3 octobre 1990, anniversaire de la réunification allemande.",
    },
    "berlin-museum": {
      title: "Altes Museum (Vieux Musée)",
      location: "Berlin, Allemagne",
      alt: "Altes Museum",
      description:
        "Le musée a été construit dans le but de rendre les collections d'art antique accessibles au grand public, sur ordre du roi de Prusse Frédéric-Guillaume III.",
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
        "Mémorial en plein air aux compositeurs classiques : Ludwig van Beethoven, Joseph Haydn et Wolfgang Amadeus Mozart, érigé en 1904.",
    },
    "prague-bridge": {
      title: "Vue sur la Vltava à Prague",
      location: "Prague, République tchèque",
      alt: "Rivière Vltava à Prague",
      description:
        "Tout Prague se mire dans la Vltava et s'y pare, comme devant un miroir magique.",
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
      title: "Tête tournante de Franz Kafka",
      location: "Prague, République tchèque",
      alt: "Tête de Franz Kafka",
      description:
        "David Černý a conçu cette œuvre d'art controversée pour le bâtiment commercial et de bureaux 'Quadrio' dans la rue Národní třída.",
    },
  },
  // About Section - À propos
  about: {
    title: "À propos d'EuroTrek",
    description1:
      "EuroTrek est un journal photographique collectif créé par des étudiants universitaires étudiant en Pologne. Notre mission est de présenter la beauté, la culture et les expériences des voyages étudiants à travers une photographie authentique.",
    description2:
      "Cette plateforme sert à la fois d'inspiration pour les futurs étudiants voyageurs et de livre de souvenirs pour ceux qui ont déjà commencé leurs aventures européennes. Toutes les photos sont prises par des étudiants, montrant l'Europe sous une perspective fraîche et jeune.",
    pageTitle: "À Propos de Notre Voyage",
    pageDescription1:
      "EuroTrek est né d'une passion pour la photographie de voyage et d'un désir de capturer les expériences uniques des étudiants explorateurs dans les villes les plus dynamiques d'Europe.",
    pageDescription2:
      "Ce qui a commencé comme un petit groupe partageant des photos entre camarades de classe étudiant en Pologne est devenu une plateforme connectant des étudiants photographes de divers pays, horizons et disciplines académiques qui partagent un amour commun pour l'exploration et la narration visuelle.",
    pageDescription3:
      "Nos contributeurs sont des étudiants comme vous, qui équilibrent leurs études avec des aventures à travers le continent, capturant des moments authentiques en cours de route.",
    mission: {
      title: "Notre Mission",
      description:
        "Inspirer les voyages étudiants par une narration visuelle authentique et favoriser une communauté de soutien pour les jeunes photographes explorant l'Europe.",
    },
    team: {
      title: "Collectif Étudiant",
      description:
        "Notre équipe est entièrement composée d'étudiants photographes, rédacteurs et développeurs web d'universités du monde entier. Chaque contributeur apporte sa perspective et son expérience uniques à la plateforme.",
    },
    feature1: {
      title: "Étudiants Photographes",
      description:
        "Photos prises par des étudiants internationaux du monde entier",
    },
    feature2: {
      title: "Expériences Authentiques",
      description:
        "Moments de voyage réels au-delà des attractions touristiques typiques",
    },
    feature3: {
      title: "Nombreux Voyages",
      description:
        "Une collection croissante de photos de tout le continent européen",
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
      description: "Paysages extraordinaires de Naples.",
    },
  },
  // Featured Section - Section en vedette
  featured: {
    title: "En vedette : Printemps à Paris",
    description1:
      "Paris au printemps est un rêve pour les étudiants photographes. La ville s'anime avec des cerisiers en fleurs, des terrasses de café et une lumière parfaite pour capturer des monuments emblématiques.",
    description2:
      "Notre collection en vedette met en valeur le charme de Paris à travers les yeux d'étudiants polonais qui ont passé leurs vacances d'études à l'étranger dans la Ville Lumière.",
    exploreLink: "Découvrez la Collection Paris",
    image1Alt: "Tour Eiffel au printemps",
    image2Alt: "La Seine à Paris",
    image3Alt: "Café parisien",
    image4Alt: "Musée du Louvre",
  },
  // Contact Section - Section contact
  contact: {
    title: "Contact",
    description:
      "Vous avez des questions ou souhaitez soumettre vos propres photos de voyages étudiants ? Nous serions ravis de vous entendre !",
    pageTitle: "Contactez-Nous",
    getInTouch: "Comment Pouvons-Nous Vous Aider ?",
    getInTouchDescription:
      "Que vous souhaitiez soumettre vos photos de voyage, que vous ayez des questions sur notre plateforme ou que vous vouliez simplement dire bonjour, nous sommes là pour vous aider.",
    email: {
      title: "Envoyez-nous un Email",
      description: "Pour les demandes générales et les soumissions de photos",
    },
    location: {
      title: "Notre Emplacement",
      description: "Visitez le bureau de notre collectif étudiant",
      address: "University Creative Hub, European Campus, Amsterdam", // Traduire ou conserver l'adresse ?
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
      sending: "Envoi en cours...",
      successTitle: "Message Envoyé !",
      successMessage:
        "Merci de nous avoir contactés. Nous vous répondrons bientôt.",
    },
  },
  // Footer - Pied de page
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
    faq: "Questions Fréquemment Posées (FAQ)",
    sitemap: "Plan du Site",
    support: "Aide et Support",
    copyright: "Tous droits réservés.",
    tagline: "Créé avec ❤ par des étudiants, pour des étudiants.",
    instagram: "Suivez-nous sur Instagram",
    twitter: "Suivez-nous sur Twitter",
    facebook: "Suivez-nous sur Facebook",
    pinterest: "Suivez-nous sur Pinterest",
  },
  // Slider Controls - Contrôles du carrousel
  slider: {
    previous: "Diapositive précédente",
    next: "Diapositive suivante",
    goToSlide: "Aller à la diapositive {{index}}",
  },
  // Lightbox - Visionneuse de photos
  lightbox: {
    close: "Fermer la visionneuse",
    previous: "Photo précédente",
    next: "Photo suivante",
  },
  // Theme Toggle - Sélecteur de thème
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

  // --- Sections pour les nouvelles pages d'information ---
  privacyPolicy: {
    title: "Politique de Confidentialité",
    metaDescription:
      "Lisez la politique de confidentialité du service EuroTrek.",
    introduction:
      "Bienvenue dans la Politique de Confidentialité d'EuroTrek. Votre vie privée est importante pour nous, et nous nous efforçons de protéger vos données personnelles conformément aux réglementations applicables, y compris le RGPD.",
    section1Title: "1. Quelles informations collectons-nous ?",
    section1Content:
      "Nous collectons les informations que vous nous fournissez directement (par exemple, via le formulaire de contact : nom, adresse e-mail, contenu du message) et les données collectées automatiquement lors de l'utilisation du service (par exemple, adresse IP, type de navigateur, informations sur l'appareil, données sur l'activité dans le service à l'aide de cookies – voir la Politique de Cookies).",
    section2Title: "2. Comment utilisons-nous vos informations ?",
    section2Content:
      "Nous utilisons vos données pour fournir et améliorer nos services, communiquer avec vous (répondre aux demandes), analyser le trafic du site, assurer la sécurité du service et remplir les obligations légales.",
    contactTitle: "Contact concernant la confidentialité",
    contactContent:
      "Pour les questions concernant le traitement de vos données personnelles ou l'exercice de vos droits, veuillez nous contacter à : [puaro@vp.pl].", // Mettre à jour l'adresse e-mail
  },
  termsOfUse: {
    title: "Conditions d'Utilisation",
    metaDescription: "Lisez les conditions d'utilisation du service EuroTrek.",
    introduction:
      "Ces Conditions d'Utilisation régissent les règles d'utilisation du service en ligne EuroTrek. En utilisant le service, vous acceptez les dispositions suivantes.",
    section1Title: "1. Règles générales et acceptation des conditions",
    section1Content:
      "Le service EuroTrek est une plateforme présentant la photographie de voyage. Les utilisateurs sont tenus d'utiliser le service conformément à la loi et aux bonnes mœurs. Il est interdit de publier du contenu illégal, offensant ou portant atteinte aux droits de tiers.",
    contactTitle: "Contact concernant les Conditions d'Utilisation",
    contactContent:
      "Les questions concernant ces Conditions d'Utilisation doivent être adressées à : [puaro@vp.pl].", // Mettre à jour l'adresse e-mail
  },
  accessibility: {
    title: "Déclaration d'Accessibilité",
    metaDescription:
      "Découvrez notre engagement en faveur de l'accessibilité numérique chez EuroTrek.",
    introduction:
      "EuroTrek s'efforce d'assurer l'accessibilité numérique du service au plus grand nombre d'utilisateurs possible, y compris les personnes handicapées. Nous travaillons constamment à l'amélioration de l'interface et à l'application des normes d'accessibilité pertinentes, telles que les WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Nos actions pour l'accessibilité",
    section1Content:
      "Nous nous efforçons de mettre en œuvre des solutions telles que : l'utilisation de code HTML sémantique, la garantie de la navigation au clavier, un contraste de couleurs adéquat, des textes alternatifs pour les images et le test du service à l'aide de diverses technologies d'assistance.",
    contactTitle: "Commentaires et coordonnées",
    contactContent:
      "Si vous rencontrez des obstacles à l'accessibilité sur notre service, veuillez nous contacter. Vos commentaires nous sont précieux. Contactez-nous à : [puaro@vp.pl].", // Mettre à jour l'adresse e-mail
  },
  cookiePolicy: {
    title: "Politique de Cookies",
    metaDescription: "Découvrez comment EuroTrek utilise les cookies.",
    introduction:
      "Notre service utilise des cookies pour assurer le bon fonctionnement du site, améliorer votre expérience et à des fins analytiques et marketing (avec votre consentement).",
    section1Title: "1. Que sont les cookies ?",
    section1Content:
      "Les cookies sont de petits fichiers texte enregistrés sur votre appareil (ordinateur, smartphone) lors de la visite de sites Web. Ils permettent au site de 'se souvenir' de vos actions et préférences pendant un certain temps.",
    section2Title: "2. Quels types de cookies utilisons-nous ?",
    section2Content: "Nous utilisons différents types de cookies, notamment :",
    type1:
      "Cookies nécessaires : Essentiels au fonctionnement de base du service (par exemple, session utilisateur). Ne nécessitent pas de consentement.",
    type2:
      "Cookies analytiques : Nous aident à comprendre comment les utilisateurs utilisent le site (par exemple, Google Analytics). Nécessitent votre consentement.",
    type3:
      "Cookies fonctionnels : Permettent de mémoriser vos choix et préférences (par exemple, la langue). Peuvent nécessiter un consentement.",
    type4:
      "Cookies marketing : Utilisés pour afficher des publicités personnalisées (par exemple, Pixel Facebook). Nécessitent votre consentement.",
    section3Title: "3. Gestion des cookies",
    section3Content:
      "Vous pouvez gérer vos consentements aux cookies à tout moment à l'aide de l'outil de gestion du consentement disponible sur notre site (cliquez sur le bouton 'Paramètres des Cookies'). Vous pouvez également modifier les paramètres des cookies dans votre navigateur Web.",
    settingsError:
      "Impossible d'ouvrir les paramètres des cookies. Contactez le support technique ou essayez de gérer les paramètres dans votre navigateur.",
    settingsInfoPlaceholder:
      "Cliquer sur le bouton ouvrira le panneau de gestion des paramètres des cookies.",
    contactTitle: "Contact concernant la Politique de Cookies",
    contactContent:
      "Si vous avez des questions sur notre politique de cookies, veuillez nous contacter : [puaro@vp.pl].", // Mettre à jour l'adresse e-mail
  },
  faq: {
    title: "Questions Fréquemment Posées (FAQ)",
    metaDescription:
      "Trouvez des réponses aux questions les plus courantes sur EuroTrek.",
    q1: "Question 1 : Comment puis-je soumettre mes photos ?",
    a1: "Nous collectons actuellement des photos auprès d'étudiants associés. Si vous êtes intéressé par une collaboration, veuillez nous contacter via le formulaire de contact, en décrivant brièvement vos voyages et votre portfolio.",
    q2: "Question 2 : L'utilisation du service est-elle payante ?",
    a2: "Non, la consultation des photos et du contenu sur le service EuroTrek est entièrement gratuite pour tous les utilisateurs.",
    q3: "Question 3 : Qui détient les droits d'auteur des photos ?",
    a3: "Les droits d'auteur des photos appartiennent aux étudiants auteurs. EuroTrek détient une licence pour leur publication sur le service. Les détails sont précisés dans l'accord avec l'auteur et dans nos Conditions d'Utilisation.",
    stillHaveQuestions: "Vous avez d'autres questions ?",
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
      "De nombreuses réponses aux questions courantes se trouvent dans notre section Questions Fréquemment Posées (FAQ).",
    goToFaq: "Aller à la FAQ",
    contactFormTitle: "Formulaire de Contact",
    contactFormDescription:
      "Le meilleur moyen de nous contacter pour la plupart des questions est d'envoyer un message via notre formulaire de contact.",
    goToContact: "Aller au Contact",
    phoneTitle: "Support Téléphonique",
    phoneDescription:
      "Pour les problèmes techniques urgents, vous pouvez nous contacter par téléphone pendant [par ex. 10h00 - 16h00] du lundi au vendredi.", // Mettre à jour les heures
    phoneNumber: "Appelez : [000 000 000]", // Mettre à jour le numéro de téléphone
    responseInfo:
      "Nous nous efforçons de répondre aux demandes envoyées via le formulaire de contact dans un délai de 1 à 2 jours ouvrables.",
  },
};
