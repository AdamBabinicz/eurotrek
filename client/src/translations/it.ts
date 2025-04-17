import { Description } from "@radix-ui/react-toast"; // Mantenendo l'importazione originale

export default {
  // Common / Comune
  common: {
    no_photos_data: "Nessun dato fotografico disponibile.",
  },
  // Navbar / Barra di navigazione
  navbar: {
    home: "Home",
    destinations: "Destinazioni",
    about: "Chi siamo",
    contact: "Contatti",
  },
  // Destinations / Destinazioni
  destinations: {
    exploreTitle: "Esplora le Destinazioni",
    exploreDescription:
      "Sfoglia la nostra collezione di foto di viaggi studenteschi dalle città più belle d'Europa.",
    allDestinations: "Tutte le Destinazioni",
    lisbon: "Lisbona",
    paris: "Parigi",
    berlin: "Berlino",
    capri: "Capri",
    naples: "Napoli",
    prague: "Praga",
    loadMore: "Carica altro",
    ariaLabel: "Categorie delle destinazioni",
  },
  // Hero Slides / Diapositive principali
  heroSlides: {
    "paris-hero": {
      location: "Parigi, Francia",
      description:
        "La Città delle Luci attraverso gli occhi di uno studente - catturando il fascino dell'architettura e della cultura parigina.",
    },
    "rome-hero": {
      // La chiave si riferisce a Napoli in base al contenuto originale polacco
      location: "Napoli, Italia",
      description:
        "Napoli è un luogo dove la vita pulsa al ritmo dell'espresso, delle conversazioni per strada e del profumo della pizza appena sfornata che aleggia nella calda aria mediterranea.",
    },
    "lisbon-hero": {
      location: "Lisbona, Portogallo",
      description:
        "Lisbona è una città piena di luce, dove le stradine acciottolate si snodano tra case colorate e la vita scorre tranquilla al ritmo del fado e dell'aroma dei 'pasteis de nata' freschi.",
    },
    "frankfurt-hero": {
      // Utilizzando la descrizione più precisa da photos["frankfurt-hero"]
      location: "Francoforte sul Meno, Germania",
      description:
        "Sopra una piazza pittoresca adornata da un'elegante fontana si erge la Vecchia Opera (Alte Oper), che vanta una facciata in stile rinascimentale.",
    },
  },
  // Photos / Foto
  photos: {
    view: "Visualizza foto {{title}}",
    noPhotos: "Non ci sono ancora foto disponibili per questa destinazione.",
    "paris-sunset": {
      title: "Tramonto a Parigi",
      location: "Parigi, Francia",
      alt: "Torre Eiffel al tramonto a Parigi",
    },
    "lisbon-tram": {
      title: "Vista sul Teatro Nazionale D. Maria II",
      location: "Lisbona, Portogallo",
      description:
        "L'edificio storico del teatro è una delle sale più prestigiose del Portogallo e si trova in Piazza Rossio, nel centro della città.",
    },
    "lisbon-belem": {
      // La chiave probabilmente si riferisce ad Alfama in base alla descrizione
      title: "Tetti della Città Vecchia",
      location: "Lisbona, Portogallo",
      description:
        "Il quartiere più antico di Lisbona è Alfama, costruito sulla collina sopra il fiume Tago durante la dominazione moresca. È qui che si può sentire l'atmosfera della Lisbona medievale.",
    },
    "lisbon-bele": {
      // La chiave probabilmente si riferisce alla Torre di Belém
      title: "Torre di Belém",
      location: "Lisbona, Portogallo",
      description: "Fortezza medievale affacciata sulla foce del fiume Tago.",
    },
    "boca do inferno": {
      title: "Boca do Inferno",
      location: "Cascais, Portogallo",
      description:
        "Una voragine situata nelle scogliere sul mare vicino alla città portoghese di Cascais.",
    },
    "capri-marina": {
      // La chiave probabilmente si riferisce ai Faraglioni in base alla descrizione
      title: "Spiaggia Da Luigi ai Faraglioni",
      location: "Capri, Italia",
      description:
        "Situata nel Mar Tirreno, occupa il 19° posto tra le 118 spiagge della regione napoletana.",
    },
    "paris-hero": {
      // La chiave probabilmente si riferisce a Versailles in base alla descrizione
      title: "Versailles – Perla del Barocco",
      location: "Versailles, Francia", // Località corretta
      alt: "Reggia di Versailles vicino a Parigi",
      description:
        "Versailles è un simbolo della monarchia assoluta francese e uno degli esempi più magnifici di architettura barocca al mondo.",
    },
    "naples-view": {
      title: "Strada sul Mar Tirreno",
      location: "Napoli, Italia",
      alt: "Strada ai piedi di una montagna",
    },
    "naples-mummy": {
      title: "Calco di una vittima del Vesuvio",
      location: "Pompei, Italia",
      alt: "Vittime dell'eruzione del vulcano",
      description:
        "I calchi dei corpi furono scoperti nel 1863 dall'archeologo Giuseppe Fiorelli. 'Ad oggi, non sono stati inventariati per motivi etici e per i sentimenti con cui sono sempre stati trattati i resti umani.'",
    },
    "naples-stadion": {
      title: "Anfiteatro di Pompei",
      location: "Pompei, Italia",
      alt: "Parte dello stadio nell'antica città di Pompei",
      description:
        "L'Anfiteatro di Pompei – un antico anfiteatro romano situato a Pompei. È la più antica struttura superstite del suo genere.",
    },
    "naples-museum": {
      title: "Piccolo Donario Pergameno (Galli)",
      location: "Napoli, Italia",
      alt: "Museo Archeologico Nazionale di Napoli",
      description:
        "Copia del II secolo d.C. da un originale greco del II secolo a.C.",
    },
    "capri-taras": {
      title: "Capri vicino a Marina Piccola",
      location: "Capri, Italia",
      alt: "Terrazze a Capri",
      description:
        "Un'affascinante terrazza sul tetto con cactus. La maggior parte dei tetti degli edifici a Capri sono piani. E come si vede sopra, su alcuni di questi edifici sono state create delle terrazze.",
    },
    "capri-street": {
      title: "Via dello shopping a Capri",
      location: "Capri, Italia",
      alt: "Negozi a Capri",
      description:
        "Capri è caratterizzata da affascinanti vie dello shopping che partono dalla Piazzetta e attraversano Via Camerelle e Via Le Botteghe.",
    },
    "capri-port": {
      title: "Porto di Marina Grande",
      location: "Capri, Italia",
      alt: "Yacht ormeggiati",
      description:
        "I facchini degli hotel principali aspettano per portare i tuoi bagagli su un carrello, e puoi prendere la funicolare o un taxi decappottabile, dato che non c'è traffico automobilistico a Capri.",
    },
    "lisbon-hero": {
      // La chiave probabilmente si riferisce al Monastero dos Jerónimos in base alla descrizione
      title: "Monastero dos Jerónimos",
      location: "Lisbona, Portogallo",
      alt: "Monastero dos Jerónimos a Belém",
      description:
        "Costruito nella prima metà del XVI secolo, è considerato la perla e la quintessenza dello stile manuelino, una miscela unicamente portoghese di gotico e rinascimento.",
    },
    "paris-eiffel": {
      title: "Torre Eiffel",
      location: "Parigi, Francia",
      alt: "Illuminazione serale della Torre Eiffel a Parigi",
      description:
        "Il monumento architettonico più famoso di Parigi, considerato un simbolo della città e talvolta di tutta la Francia.",
    },
    "paris-louvre": {
      title: "Museo del Louvre",
      location: "Parigi, Francia",
      alt: "Ex palazzo reale a Parigi",
      description:
        "Uno dei musei più grandi del mondo, è anche il museo più visitato del suo genere a livello globale.",
    },
    "paris-panteon": {
      title: "Vista del Panthéon da Place du Panthéon",
      location: "Parigi, Francia",
      alt: "Il Panthéon da Place du Panthéon",
      description:
        "Il Panthéon – un edificio nel Quartiere Latino di Parigi, eretto alla fine del XVIII secolo come chiesa dedicata a Santa Genoveffa.",
    },
    "paris-snails": {
      title: "Famose Lumache Francesi (Escargots)",
      location: "Parigi, Francia",
      alt: "Piatto di lumache",
      description:
        "È difficile immaginare la cucina francese, specialmente lungo il Rodano, senza una deliziosa lumaca nel piatto.",
    },
    "frankfurt-hero": {
      // La chiave si riferisce all'Alte Oper in base alla descrizione
      title: "Vecchia Opera (Alte Oper), Francoforte",
      location: "Francoforte sul Meno, Germania",
      alt: "Vecchia Opera (Alte Oper), Francoforte",
      description:
        "Sopra una piazza pittoresca adornata da un'elegante fontana si erge la Vecchia Opera, che vanta una facciata in stile rinascimentale.",
    },
    "berlin-gate": {
      title: "Porta di Brandeburgo",
      location: "Berlino, Germania",
      alt: "Porta di Brandeburgo",
      description:
        "La Porta di Brandeburgo come simbolo di Pace e Libertà dal 3 ottobre 1990, anniversario della riunificazione tedesca.",
    },
    "berlin-museum": {
      title: "Altes Museum (Museo Vecchio)",
      location: "Berlino, Germania",
      alt: "Altes Museum (Museo Vecchio)",
      description:
        "Il museo fu costruito per ordine del re prussiano Federico Guglielmo III per rendere accessibili al pubblico le collezioni di arte antica.",
    },
    "berlin-victory-column": {
      title: "Colonna della Vittoria (Siegessäule)",
      location: "Berlino, Germania",
      alt: "Colonna della Vittoria",
      description:
        "La colonna situata nel parco Großer Tiergarten a Berlino commemora la vittoria della Prussia sulla Danimarca nella guerra danese del 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven-Haydn-Mozart",
      location: "Berlino, Germania",
      alt: "Monumento ai tre geni della musica",
      description:
        "Un monumento all'aperto ai compositori classici Ludwig van Beethoven, Joseph Haydn e Wolfgang Amadeus Mozart, inaugurato nel 1904.",
    },
    "prague-bridge": {
      title: "Vista sul fiume Moldava a Praga",
      location: "Praga, Repubblica Ceca",
      alt: "Fiume Moldava a Praga",
    },
    "prague-wit": {
      title: "Tesoro di San Vito",
      location: "Praga, Repubblica Ceca",
      alt: "Tesoro a Praga",
      description:
        "Manufatti nel Tesoro della Cattedrale di San Vito al Castello di Praga.",
    },
    "prague-dance": {
      title: "Casa Danzante",
      location: "Praga, Repubblica Ceca",
      alt: "Ginger e Fred",
      description:
        "Un edificio all'avanguardia progettato dalla coppia di architetti Vlado Milunić e Frank Gehry in stile decostruttivista.",
    },
    "prague-kafka": {
      title: "Testa rotante di Franz Kafka",
      location: "Praga, Repubblica Ceca",
      alt: "Testa di Franz Kafka",
      description:
        "David Černý ha progettato questa controversa opera d'arte per l'edificio commerciale e per uffici 'Quadrio' in via Národní třída.",
    },
  },
  // About Section / Sezione Chi siamo
  about: {
    title: "Informazioni su EuroTrek",
    description1:
      "EuroTrek è un diario fotografico collettivo creato da studenti universitari che studiano in Europa (originariamente focalizzato sulla Polonia). La nostra missione è mostrare la bellezza, la cultura e le esperienze dei viaggi studenteschi attraverso la fotografia autentica.", // Contesto leggermente modificato
    description2:
      "Questa piattaforma funge sia da ispirazione per i futuri studenti viaggiatori che da libro dei ricordi per coloro che hanno già intrapreso le loro avventure europee. Tutte le foto sono scattate da studenti, mostrando l'Europa attraverso un obiettivo fresco e giovanile.",
    pageTitle: "Riguardo al Nostro Viaggio",
    pageDescription1:
      "EuroTrek è nato dalla passione per la fotografia di viaggio e dal desiderio di catturare le esperienze uniche degli studenti esploratori nelle città più vivaci d'Europa.",
    pageDescription2:
      "Quello che era iniziato come un piccolo gruppo che condivideva foto tra compagni di classe che studiavano in Polonia è cresciuto fino a diventare una piattaforma che collega studenti fotografi provenienti da diversi paesi, background e discipline accademiche, tutti accomunati dall'amore per la scoperta e la narrazione visiva.",
    pageDescription3:
      "I nostri collaboratori sono studenti come te, che bilanciano i loro studi con avventure in tutto il continente, catturando momenti autentici lungo il percorso.",
    mission: {
      title: "La Nostra Missione",
      description:
        "Ispirare i viaggi studenteschi attraverso un'autentica narrazione visiva e promuovere una comunità di supporto per giovani fotografi che esplorano l'Europa.",
    },
    team: {
      title: "Il Collettivo Studentesco",
      description:
        "Il nostro team è composto interamente da studenti fotografi, scrittori e sviluppatori web provenienti da università di tutto il mondo. Ogni collaboratore porta la propria prospettiva ed esperienza uniche alla piattaforma.",
    },
    feature1: {
      title: "Fotografi Studenti",
      description: "Foto scattate da studenti in scambio da tutto il mondo.",
    },
    feature2: {
      title: "Esperienze Autentiche",
      description:
        "Momenti di viaggio reali al di là delle tipiche attrazioni turistiche.",
    },
    feature3: {
      title: "Molteplici Destinazioni",
      description:
        "Una collezione crescente di foto da tutto il continente europeo.",
    },
    image1: {
      title: "Lisbona",
      description: "Monastero dos Jerónimos.",
    },
    image2: {
      title: "Germania & Francia",
      description: "Un viaggio indimenticabile attraverso Germania e Francia.",
    },
    image3: {
      title: "Napoli",
      description: "Gli straordinari paesaggi di Napoli.",
    },
  },
  // Featured Section / Sezione In primo piano
  featured: {
    title: "In primo piano: Primavera a Parigi",
    description1:
      "Parigi in primavera è un sogno per gli studenti fotografi. La città si anima con ciliegi in fiore, caffè all'aperto e una luce perfetta per catturare monumenti iconici.",
    description2:
      "La nostra collezione in primo piano mostra la magia di Parigi attraverso gli occhi degli studenti che hanno trascorso il loro semestre di studio all'estero nella Città delle Luci.", // Contesto leggermente modificato
    exploreLink: "Esplora la Collezione di Parigi",
    image1Alt: "Torre Eiffel in primavera",
    image2Alt: "Fiume Senna a Parigi",
    image3Alt: "Caffè parigino all'aperto",
    image4Alt: "Museo del Louvre",
  },
  // Contact Section / Sezione Contatti
  contact: {
    title: "Contatti",
    description:
      "Hai domande o vuoi inviare le tue foto di viaggi studenteschi? Ci farebbe piacere sentirti!",
    pageTitle: "Mettiti in Contatto",
    getInTouch: "Come Possiamo Aiutarti?",
    getInTouchDescription:
      "Sia che tu voglia inviare le tue foto di viaggio, avere domande sulla nostra piattaforma o semplicemente salutare, siamo qui per aiutarti.",
    email: {
      title: "Inviaci un'Email",
      description: "Per richieste generali e invio di foto",
    },
    location: {
      title: "La Nostra Sede",
      description: "Visita l'hub del nostro collettivo studentesco",
      address: "University Creative Hub, European Campus, Amsterdam", // Mantenuto com'è, presumendo sia un nome di luogo specifico
    },
    phone: {
      title: "Chiamaci",
      description: "Disponibile nei giorni feriali dalle 10:00 alle 18:00 CET",
    },
    form: {
      name: "Il Tuo Nome",
      namePlaceholder: "Inserisci il tuo nome",
      nameError: "Il nome è obbligatorio",
      email: "La Tua Email",
      emailPlaceholder: "Inserisci il tuo indirizzo email",
      emailError: "È richiesta un'email valida",
      subject: "Oggetto",
      subjectPlaceholder: "Di cosa vorresti parlare?",
      subjectError: "L'oggetto è obbligatorio",
      message: "Messaggio",
      messagePlaceholder: "Scrivi qui il tuo messaggio...",
      messageError: "Il messaggio deve contenere almeno 10 caratteri",
      send: "Invia Messaggio",
      sending: "Invio...",
      successTitle: "Messaggio Inviato!",
      successMessage: "Grazie per averci contattato. Ti risponderemo presto.",
    },
  },
  // Footer / Piè di pagina
  footer: {
    description:
      "Un viaggio visivo attraverso l'Europa catturato dall'obiettivo di studenti che esplorano gli angoli più belli del continente.",
    quickLinks: "Link Rapidi",
    resources: "Risorse",
    parisCollection: "Collezione di Parigi",
    submitPhotos: "Invia Foto",
    privacyPolicy: "Informativa sulla Privacy",
    termsOfUse: "Termini di Utilizzo",
    accessibility: "Accessibilità",
    copyright: "© {{year}} EuroTrek. Tutti i diritti riservati.", // Placeholder dell'anno aggiunto
    tagline: "Realizzato con ❤ da studenti, per studenti.",
    instagram: "Seguici su Instagram",
    twitter: "Seguici su Twitter",
    facebook: "Seguici su Facebook",
    pinterest: "Seguici su Pinterest",
  },
  // Slider Controls / Controlli dello slider
  slider: {
    previous: "Diapositiva precedente",
    next: "Diapositiva successiva",
    goToSlide: "Vai alla diapositiva {{index}}",
  },
  // Lightbox / Visualizzatore immagini
  lightbox: {
    close: "Chiudi",
    previous: "Foto precedente",
    next: "Foto successiva",
  },
  // Theme Toggle / Selettore tema
  theme: {
    toggleLight: "Passa alla modalità chiara",
    toggleDark: "Passa alla modalità scura",
  },
  // Language / Lingua
  language: {
    changeLanguage: "Cambia lingua",
  },
  // Home / Pagina iniziale
  home: {
    heroAriaLabel: "Destinazioni in primo piano",
  },
};
