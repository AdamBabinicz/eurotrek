export default {
  // Common
  common: {
    no_photos_data: "Nessun dato fotografico.",
    lastUpdated: "Ultimo aggiornamento",
    placeholderContent:
      "Il contenuto di questa sezione è attualmente in preparazione. Sarà aggiornato a breve.",
    no_alt_text: "Immagine", // Testo alternativo predefinito
    no_title: "Senza titolo", // Titolo predefinito
    no_location: "Località sconosciuta", // Località predefinita
    photo_not_found: "Impossibile caricare l'immagine", // Se src è errato o l'immagine non esiste
  },

  routes: {
    // Slug URL in italiano - verificare se appropriati
    home: "",
    destinations: "viaggi", // Esempio
    about: "chi-siamo", // Esempio
    contact: "contatti", // Esempio
    destinationDetail: "viaggio", // Esempio
    faq: "faq", // Mantenere faq è comune
    privacy: "privacy-policy", // Esempio
    terms: "termini-uso", // Esempio
    sitemap: "mappa-sito", // Esempio
    accessibility: "accessibilita", // Esempio
    cookiePolicy: "cookie-policy", // Esempio
    support: "supporto", // Esempio
  },

  // Navbar
  navbar: {
    home: "Home",
    destinations: "Viaggi",
    about: "Chi siamo",
    contact: "Contatti",
    mainNavLabel: "Navigazione principale",
    goToHome: "Vai alla homepage",
    toggleMenu: "Apri/Chiudi menu",
    mobileMenuTitle: "Menu",
  },
  // Destinations List Page
  destinationsListPage: {
    title: "I Nostri Viaggi",
    metaDescription:
      "Scopri tutti i posti incredibili che offriamo su EuroTrek.",
    header: "Scopri I Nostri Viaggi",
  },
  // Destinations general terms
  destinations: {
    exploreTitle: "Esplora Viaggi",
    exploreDescription:
      "Sfoglia la nostra collezione di foto di viaggi studenteschi dalle città più belle d'Europa.",
    lisbon: "Lisbona",
    paris: "Parigi",
    berlin: "Berlino",
    capri: "Capri",
    naples: "Napoli",
    prague: "Praga",
    loadMore: "Carica altro",
    ariaLabel: "Categorie di viaggio",
    noMorePhotos: "Non ci sono altre foto da caricare per questa categoria",
  },
  // Specific destination data
  destinationsData: {
    lisbon: { name: "Lisbona", country: "Portogallo" },
    paris: { name: "Parigi", country: "Francia" },
    berlin: { name: "Berlino", country: "Germania" },
    capri: { name: "Capri", country: "Italia" },
    naples: {
      name: "Napoli",
      country: "Italia",
      description:
        "Napoli, una vibrante città del sud Italia, situata sul Golfo di Napoli. Famosa per la sua ricca storia, arte, cultura, architettura, musica e gastronomia.", // Traduzione automatica
    },
    prague: { name: "Praga", country: "Repubblica Ceca" },
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      title: "Versailles - Perla del Barocco",
      alt: "Palazzo di Versailles vicino Parigi",
      location: "Versailles, Francia",
      description:
        "La città delle luci attraverso l'obiettivo di uno studente - catturando la magia dell'architettura e della cultura parigina.", // Traduzione automatica
    },
    "rome-hero": {
      title: "Strada sul Mar Tirreno",
      alt: "Vista della costa e del Vesuvio a Napoli",
      location: "Napoli, Italia",
      description:
        "Napoli è un luogo dove la vita scorre al ritmo dell'espresso, delle conversazioni per strada e del profumo della pizza appena sfornata che aleggia nella calda aria mediterranea.", // Traduzione automatica
    },
    "lisbon-hero": {
      title: "Monastero dos Jerónimos",
      alt: "Monastero dos Jerónimos a Belém, Lisbona",
      location: "Lisbona, Portogallo",
      description:
        "Lisbona è una città piena di luce, dove le strade acciottolate si snodano tra case colorate, e la vita scorre pacificamente al ritmo del fado e dell'aroma dei 'pastéis de nata' freschi.", // Traduzione automatica
    },
    "frankfurt-hero": {
      title: "Vecchia Opera (Alte Oper)",
      alt: "Edificio della Vecchia Opera a Francoforte",
      location: "Francoforte sul Meno, Germania",
      description:
        "Scopri Francoforte sul Meno, dove i luccicanti grattacieli del quartiere bancario creano uno straordinario contrasto con la storica Opernplatz (Piazza dell'Opera).", // Traduzione automatica
    },
  },
  // Photos
  photos: {
    view: "Visualizza foto {{title}}",
    noPhotos: "Non ci sono ancora foto disponibili per questo viaggio.",
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
      alt: "Tram storico giallo in Piazza Rossio, Lisbona",
    },
    "lisbon-belem": {
      title: "Tetti della Città Vecchia",
      location: "Lisbona, Portogallo",
      description:
        "Il quartiere più antico di Lisbona è Alfama, costruito sul pendio sopra il fiume Tago durante il dominio moresco. È qui che si può sentire l'atmosfera della Lisbona medievale.",
      alt: "Vista sui tetti rossi di Alfama a Lisbona",
    },
    "lisbon-bele": {
      title: "Torre di Belém",
      location: "Lisbona, Portogallo",
      description: "Fortezza medievale affacciata sulla foce del fiume Tago",
      alt: "Torre di Belém sul fiume Tago a Lisbona",
    },
    "boca do inferno": {
      title: "Bocca dell'Inferno",
      location: "Cascais, Portogallo",
      description:
        "Una voragine situata nelle scogliere sul mare vicino alla città portoghese di Cascais",
      alt: "Formazione rocciosa Bocca dell'Inferno a Cascais",
    },
    "capri-marina": {
      title: "Spiaggia Luigia ai Faraglioni",
      location: "Capri, Italia",
      description:
        "Situata nel Mar Tirreno, occupa il 19° posto tra le 118 spiagge della regione napoletana.",
      alt: "Spiaggia Luigia e faraglioni a Capri",
    },
    "paris-hero": {
      title: "Versailles – Perla del Barocco",
      location: "Versailles, Francia",
      alt: "Palazzo di Versailles e giardini",
      description:
        "Versailles è il simbolo della monarchia assoluta francese e uno dei più magnifici esempi di architettura barocca al mondo.",
    },
    "naples-view": {
      title: "Strada sul Mar Tirreno",
      location: "Napoli, Italia",
      alt: "Strada ai piedi del Vesuvio",
      description: "Percorso panoramico lungo la costa.",
    },
    "naples-mummy": {
      title: "Calco di una vittima del Vesuvio",
      location: "Pompei, Italia",
      alt: "Calco in gesso del corpo di una vittima dell'eruzione del Vesuvio",
      description:
        "I calchi dei corpi furono scavati nel 1863 dall'archeologo Giuseppe Fiorelli. 'Ad oggi non sono stati inventariati per motivi etici e per i sentimenti con cui sono sempre stati trattati i resti umani.'",
    },
    "naples-stadion": {
      title: "Anfiteatro di Pompei",
      location: "Pompei, Italia",
      alt: "Rovine dell'anfiteatro nell'antica città di Pompei",
      description:
        "L'Anfiteatro di Pompei – un antico anfiteatro romano situato a Pompei. È la più antica struttura superstite del suo genere.",
    },
    "naples-museum": {
      title: "Piccolo donario pergameno", // O "Galata morente"
      location: "Napoli, Italia",
      alt: "Scultura del 'Galata morente' nel Museo Archeologico Nazionale di Napoli",
      description:
        "Copia del II secolo d.C. da un originale greco del II secolo a.C.",
    },
    "capri-taras": {
      title: "Capri vicino a Marina Piccola",
      location: "Capri, Italia",
      alt: "Terrazza panoramica con cactus a Capri",
      description:
        "Un'affascinante terrazza sul tetto con cactus. La maggior parte dei tetti degli edifici a Capri sono piani. E come si vede sopra, le terrazze sono stabilite su alcuni di questi edifici.",
    },
    "capri-street": {
      title: "Via dello shopping a Capri",
      location: "Capri, Italia",
      alt: "Stretta via dello shopping con negozi a Capri",
      description:
        "Capri è caratterizzata da affascinanti vie dello shopping che partono dalla Piazzetta e conducono attraverso Via Camerelle e Via Le Botteghe.",
    },
    "capri-port": {
      title: "Porto a Marina Grande",
      location: "Capri, Italia",
      alt: "Barche e yacht ormeggiati nel porto di Marina Grande a Capri",
      description:
        "I portabagagli degli hotel principali aspettano per prendere i bagagli su un carrello, e si può prendere la funicolare o un taxi decappottabile, poiché non c'è traffico automobilistico a Capri.",
    },
    "lisbon-hero": {
      title: "Monastero dos Jerónimos",
      location: "Lisbona, Portogallo",
      alt: "Facciata del Monastero dos Jerónimos a Belém",
      description:
        "Costruito nella prima metà del XVI secolo, è considerato la perla e la quintessenza dello stile manuelino, una specifica miscela portoghese di gotico e rinascimento.",
    },
    "paris-eiffel": {
      title: "Torre Eiffel",
      location: "Parigi, Francia",
      alt: "Illuminazione serale della Torre Eiffel contro il cielo",
      description:
        "Il monumento architettonico più famoso di Parigi, considerato un simbolo della città e talvolta dell'intera Francia.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "Parigi, Francia",
      alt: "Piramide di vetro di fronte al Palazzo del Louvre a Parigi",
      description:
        "Uno dei musei più grandi del mondo, è anche l'istituzione del suo genere più visitata al mondo.",
    },
    "paris-panteon": {
      title: "Vista del Pantheon da Place du Pantheon",
      location: "Parigi, Francia",
      alt: "Facciata del Pantheon a Parigi vista dalla piazza",
      description:
        "Pantheon – un edificio nel Quartiere Latino di Parigi, eretto alla fine del XVIII secolo come chiesa dedicata a Santa Genoveffa.",
    },
    "paris-snails": {
      title: "Famose lumache francesi",
      location: "Parigi, Francia",
      alt: "Piatto di lumache alla bourguignonne preparate",
      description:
        "È difficile immaginare la cucina sulla Senna, e specialmente sul Rodano, senza una deliziosa lumaca nel piatto.",
    },
    "paris-1": {
      title: "Biblioteca Nazionale di Francia, sito Richelieu, Sala Ovale",
      location: "Parigi, Francia",
      alt: "Interno della Sala Ovale della Biblioteca Nazionale di Francia",
    },
    "paris-2": {
      title: "Versailles, Tempio dell'Amore",
      location: "Versailles, Francia",
      alt: "Tempio dell'Amore nei giardini di Versailles",
    },
    "paris-3": {
      title: "Magnifici giardini storici",
      location: "Parigi, Francia",
      alt: "Viale pedonale in un giardino alla francese a Parigi",
    },
    "paris-4": {
      title: "Fauno danzante",
      location: "Parigi, Francia",
      alt: "Scultura del Fauno danzante",
    },
    "frankfurt-hero": {
      title: "Vecchia Opera (Alte Oper), Francoforte",
      location: "Francoforte sul Meno, Germania",
      alt: "Edificio della Vecchia Opera a Francoforte di notte",
      description:
        "Sorgendo sopra una piazza pittoresca adornata da un'elegante fontana si trova l'Opera, che vanta una facciata in stile rinascimentale.",
    },
    "berlin-gate": {
      title: "Porta di Brandeburgo",
      location: "Berlino, Germania",
      alt: "Porta di Brandeburgo di notte",
      description:
        "La Porta di Brandeburgo come simbolo di Pace e Libertà dal 3 ottobre 1990, anniversario della riunificazione tedesca.",
    },
    "berlin-museum": {
      title: "Museo Vecchio",
      location: "Berlino, Germania",
      alt: "Colonnato di fronte al Museo Vecchio a Berlino",
      description:
        "Il museo fu costruito per rendere accessibili al grande pubblico le collezioni di arte antica, su ordine del re prussiano Federico Guglielmo III.",
    },
    "berlin-victory-column": {
      title: "Colonna della Vittoria",
      location: "Berlino, Germania",
      alt: "Statua dorata in cima alla Colonna della Vittoria a Berlino",
      description:
        "La colonna situata nel parco Großer Tiergarten a Berlino commemora la vittoria della Prussia sulla Danimarca nella guerra danese del 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven, Haydn e Mozart",
      location: "Berlino, Germania",
      alt: "Monumento ai tre compositori nel parco Tiergarten",
      description:
        "Un monumento all'aperto ai compositori classici Ludwig van Beethoven, Joseph Haydn e Wolfgang Amadeus Mozart, risalente al 1904.",
    },
    "prague-bridge": {
      title: "Vista sul fiume Moldava a Praga",
      location: "Praga, Repubblica Ceca",
      alt: "Ponte Carlo sulla Moldava a Praga al crepuscolo",
      description:
        "Tutta Praga si riflette nella Moldava e flirta con essa come se fosse uno specchio magico.",
    },
    "prague-wit": {
      title: "Tesoro di San Vito",
      location: "Praga, Repubblica Ceca",
      alt: "Reliquiario nel Tesoro della Cattedrale di San Vito",
      description:
        "Manufatti nel Tesoro della Cattedrale di San Vito al Castello di Praga.",
    },
    "prague-dance": {
      title: "Casa Danzante",
      location: "Praga, Repubblica Ceca",
      alt: "Edificio moderno Casa Danzante a Praga",
      description:
        "Un edificio d'avanguardia progettato dalla coppia di architetti Vlado Milunić e Frank Gehry in stile decostruttivista.",
    },
    "prague-kafka": {
      title: "Testa rotante di Franz Kafka",
      location: "Praga, Repubblica Ceca",
      alt: "Scultura cinetica Testa di Franz Kafka a Praga",
      description:
        "David Černý ha progettato questa controversa opera d'arte per l'edificio commerciale e per uffici 'Quadrio' in via Národní třída.",
    },
  },
  // About Section
  about: {
    title: "Su EuroTrek",
    description1:
      "EuroTrek è un diario fotografico collettivo creato da studenti universitari che studiano in Polonia. La nostra missione è mostrare la bellezza, la cultura e le esperienze dei viaggi studenteschi attraverso la fotografia autentica.",
    description2:
      "Questa piattaforma funge sia da ispirazione per i futuri studenti viaggiatori sia da libro dei ricordi per coloro che hanno già iniziato le loro avventure europee. Tutte le foto sono scattate da studenti, mostrando l'Europa da una prospettiva fresca e giovanile.",
    pageTitle: "Sul Nostro Viaggio",
    pageDescription1:
      "EuroTrek è nato dalla passione per la fotografia di viaggio e dal desiderio di catturare le esperienze uniche degli studenti esploratori nelle città più vivaci d'Europa.",
    pageDescription2:
      "Ciò che è iniziato come un piccolo gruppo di condivisione di foto tra compagni di classe che studiavano in Polonia è cresciuto fino a diventare una piattaforma che collega studenti fotografi di diversi paesi, background e discipline accademiche che condividono un amore comune per l'esplorazione e la narrazione visiva.",
    pageDescription3:
      "I nostri collaboratori sono studenti come te, che bilanciano i loro studi con avventure attraverso il continente, catturando momenti autentici lungo il percorso.",
    mission: {
      title: "La Nostra Missione",
      description:
        "Ispirare i viaggi studenteschi attraverso un'autentica narrazione visiva e promuovere una comunità di supporto per giovani fotografi che esplorano l'Europa.",
    },
    team: {
      title: "Collettivo Studentesco",
      description:
        "Il nostro team è composto interamente da studenti fotografi, scrittori e sviluppatori web di università di tutto il mondo. Ogni collaboratore porta la propria prospettiva ed esperienza uniche alla piattaforma.",
    },
    feature1: {
      title: "Studenti Fotografi",
      description: "Foto scattate da studenti internazionali da tutto il mondo",
    },
    feature2: {
      title: "Esperienze Autentiche",
      description:
        "Momenti di viaggio reali al di là dei tipici luoghi turistici",
    },
    feature3: {
      title: "Molti Viaggi",
      description:
        "Una collezione crescente di foto da tutto il continente europeo",
    },
    image1: { title: "Lisbona", description: "Monastero dos Jerónimos." },
    image2: {
      title: "Germania & Francia",
      description:
        "Un viaggio indimenticabile attraverso la Germania e la Francia.",
    },
    image3: {
      title: "Napoli",
      description: "Paesaggi straordinari di Napoli.",
    },
  },
  // Featured Section
  featured: {
    title: "In Evidenza: Primavera a Parigi",
    description1:
      "Parigi in primavera è un sogno per gli studenti fotografi. La città si anima con ciliegi in fiore, terrazze di caffè e la luce perfetta per catturare monumenti iconici.",
    description2:
      "La nostra collezione in evidenza mostra la magia di Parigi attraverso gli occhi degli studenti polacchi che hanno trascorso le loro vacanze di studio all'estero nella Città della Luce.",
    exploreLink: "Esplora la Collezione Parigi",
    image1Alt: "Torre Eiffel in primavera",
    image2Alt: "Fiume Senna a Parigi",
    image3Alt: "Caffè parigino",
    image4Alt: "Museo del Louvre",
  },
  // Contact Section
  contact: {
    title: "Contatti",
    description:
      "Hai domande o vuoi inviare le tue foto di viaggi studenteschi? Ci farebbe piacere sentirti!",
    pageTitle: "Mettiti in Contatto",
    getInTouch: "Come Possiamo Aiutarti?",
    getInTouchDescription:
      "Che tu voglia inviare le tue foto di viaggio, avere domande sulla nostra piattaforma o semplicemente salutare, siamo qui per aiutarti.",
    email: {
      title: "Inviaci un'Email",
      description: "Per richieste generali e invio di foto",
    },
    location: {
      title: "La Nostra Sede",
      description:
        "Visita l'ufficio del nostro collettivo studentesco (su appuntamento)",
      address: "Università di Danzica, ul. Bażyńskiego 8, 80-309 Danzica",
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
      emailPlaceholder: "Inserisci la tua email",
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
  // Footer
  footer: {
    description:
      "Un viaggio visivo attraverso l'Europa catturato dall'obiettivo di studenti che esplorano gli angoli più belli del continente.",
    quickLinks: "Link Rapidi",
    resources: "Risorse",
    parisCollection: "Collezione Parigi",
    submitPhotos: "Invia Foto",
    privacyPolicy: "Informativa sulla Privacy",
    termsOfUse: "Termini di Utilizzo",
    accessibility: "Accessibilità",
    cookiePolicy: "Politica sui Cookie",
    cookieSettings: "Impostazioni Cookie",
    faq: "FAQ",
    sitemap: "Mappa del Sito",
    support: "Aiuto & Supporto",
    copyright: "Tutti i diritti riservati.",
    tagline: "Fatto con ❤ da studenti, per studenti.",
    instagram: "Seguici su Instagram",
    twitter: "Seguici su Twitter",
    facebook: "Seguici su Facebook",
    pinterest: "Seguici su Pinterest",
  },
  // Slider Controls
  slider: {
    previous: "Diapositiva precedente",
    next: "Diapositiva successiva",
    goToSlide: "Vai alla diapositiva {{index}}",
  },
  // Lightbox
  lightbox: {
    close: "Chiudi visualizzatore",
    previous: "Foto precedente",
    next: "Foto successiva",
  },
  // Theme Toggle
  theme: {
    toggleLight: "Passa alla modalità chiara",
    toggleDark: "Passa alla modalità scura",
  },
  // Language
  language: {
    changeLanguage: "Cambia lingua",
  },
  // Home
  home: {
    heroAriaLabel: "Destinazioni in primo piano",
  },

  // --- SECTIONS FOR INFO PAGES ---
  privacyPolicy: {
    title: "Informativa sulla Privacy",
    metaDescription: "Leggi l'informativa sulla privacy del servizio EuroTrek.",
    introduction:
      "Benvenuto nell'Informativa sulla Privacy di EuroTrek. La tua privacy è importante per noi e ci impegniamo a proteggere i tuoi dati personali in conformità con le leggi applicabili, incluso il GDPR.",
    section1Title: "1. Quali informazioni raccogliamo?",
    section1Content:
      "Raccogliamo le informazioni che ci fornisci direttamente (es. tramite il modulo di contatto: nome, indirizzo email, contenuto del messaggio) e i dati raccolti automaticamente quando utilizzi il servizio (es. indirizzo IP, tipo di browser, informazioni sul dispositivo, dati sull'attività del servizio tramite cookie - vedi Politica sui Cookie).",
    section2Title: "2. Come utilizziamo le tue informazioni?",
    section2Content:
      "Utilizziamo i tuoi dati per fornire e migliorare i nostri servizi, comunicare con te (rispondere alle richieste), analizzare il traffico del sito web, garantire la sicurezza del servizio e adempiere agli obblighi legali.",
    contactTitle: "Contatto per la Privacy",
    contactContent:
      "Per questioni riguardanti il trattamento dei tuoi dati personali o l'esercizio dei tuoi diritti, ti preghiamo di contattarci a: puaro@vp.pl",
  },
  termsOfUse: {
    title: "Termini di Utilizzo",
    metaDescription: "Leggi i termini di utilizzo del servizio EuroTrek.",
    introduction:
      "I presenti Termini di Utilizzo regolano l'uso del sito web EuroTrek. Utilizzando il servizio, accetti le seguenti disposizioni.",
    section1Title: "1. Regole Generali e Accettazione dei Termini",
    section1Content:
      "Il servizio EuroTrek è una piattaforma che presenta fotografie di viaggio. Gli utenti sono obbligati a utilizzare il servizio in conformità con la legge e le buone pratiche. È vietato pubblicare contenuti illegali, offensivi o che violino i diritti di terzi.",
    contactTitle: "Contatto per i Termini di Utilizzo",
    contactContent:
      "Le domande riguardanti i presenti Termini di Utilizzo devono essere indirizzate a: puaro@vp.pl",
  },
  accessibility: {
    title: "Dichiarazione di Accessibilità",
    metaDescription:
      "Scopri il nostro impegno per l'accessibilità digitale su EuroTrek.",
    introduction:
      "EuroTrek si impegna a garantire l'accessibilità digitale del servizio al pubblico più ampio possibile, comprese le persone con disabilità. Lavoriamo continuamente per migliorare l'interfaccia utente e applicare gli standard di accessibilità pertinenti, come le Linee Guida per l'Accessibilità dei Contenuti Web (WCAG).",
    section1Title: "1. I Nostri Sforzi per l'Accessibilità",
    section1Content:
      "Miriamo a implementare soluzioni come: l'uso di codice HTML semantico, la garanzia della navigazione da tastiera, un contrasto cromatico adeguato, testo alternativo per le immagini e il test del servizio con varie tecnologie assistive.",
    contactTitle: "Feedback e Informazioni di Contatto",
    contactContent:
      "Se incontri barriere di accessibilità sul nostro servizio, ti preghiamo di contattarci. Il tuo feedback è prezioso per noi. Contattaci a: puaro@vp.pl",
  },
  cookiePolicy: {
    title: "Politica sui Cookie",
    metaDescription: "Scopri come EuroTrek utilizza i cookie.",
    introduction:
      "Il nostro servizio utilizza i cookie per garantire il corretto funzionamento del sito, migliorare la tua esperienza e per scopi analitici e di marketing (con il tuo consenso).",
    section1Title: "1. Cosa sono i cookie?",
    section1Content:
      "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo (computer, smartphone) quando visiti siti web. Permettono al sito di 'ricordare' le tue azioni e preferenze per un periodo di tempo.",
    section2Title: "2. Quali tipi di cookie utilizziamo?",
    section2Content: "Utilizziamo vari tipi di cookie, tra cui:",
    type1:
      "Cookie essenziali: Necessari per il funzionamento di base del servizio (es. sessione utente). Non richiedono consenso.",
    type2:
      "Cookie analitici: Ci aiutano a capire come gli utenti interagiscono con il sito (es. Google Analytics). Richiedono il tuo consenso.",
    type3:
      "Cookie funzionali: Permettono di ricordare le tue scelte e preferenze (es. lingua). Possono richiedere il consenso.",
    type4:
      "Cookie di marketing: Utilizzati per visualizzare pubblicità personalizzata (es. Facebook Pixel). Richiedono il tuo consenso.",
    section3Title: "3. Gestione dei Cookie",
    section3Content:
      "Puoi gestire i tuoi consensi ai cookie in qualsiasi momento utilizzando lo strumento di gestione del consenso disponibile sul nostro sito (fai clic sul pulsante 'Impostazioni Cookie'). Puoi anche modificare le impostazioni dei cookie nel tuo browser web.",
    settingsError:
      "Impossibile aprire le impostazioni dei cookie. Contatta il supporto tecnico o prova a gestire le impostazioni nel tuo browser.",
    settingsInfoPlaceholder:
      "Cliccando sul pulsante si aprirà il pannello di gestione delle impostazioni dei cookie.",
    contactTitle: "Contatto per la Politica sui Cookie",
    contactContent:
      "Se hai domande sulla nostra politica sui cookie, ti preghiamo di contattarci: puaro@vp.pl",
  },
  faq: {
    title: "Domande Frequenti (FAQ)",
    metaDescription: "Trova le risposte alle domande più comuni su EuroTrek.",
    q1: "Domanda 1: Come posso inviare le mie foto?",
    a1: "Attualmente raccogliamo foto da studenti affiliati. Se sei interessato a collaborare, ti preghiamo di contattarci tramite il modulo di contatto, descrivendo brevemente i tuoi viaggi e il tuo portfolio.",
    q2: "Domanda 2: L'utilizzo del servizio è gratuito?",
    a2: "Sì, la navigazione di foto e contenuti sul servizio EuroTrek è completamente gratuita per tutti gli utenti.",
    q3: "Domanda 3: Chi detiene il copyright delle foto?",
    a3: "Il copyright delle foto appartiene agli studenti autori. EuroTrek detiene una licenza per pubblicarle sul servizio. I dettagli sono specificati nell'accordo con l'autore e nei nostri Termini di Utilizzo.",
    stillHaveQuestions: "Hai altre domande?",
    contactUs: "Contattaci",
  },
  sitemap: {
    title: "Mappa del Sito",
    metaDescription: "Sfoglia la struttura del sito EuroTrek.",
    introduction:
      "Di seguito è riportato un elenco delle principali sezioni e pagine disponibili sul servizio EuroTrek per aiutarti a navigare.",
  },
  support: {
    title: "Aiuto & Supporto",
    metaDescription:
      "Hai bisogno di assistenza? Trova informazioni di contatto e supporto per EuroTrek.",
    introduction:
      "Siamo qui per aiutare! Se hai domande su come funziona il servizio, hai riscontrato un problema tecnico o hai altre preoccupazioni, utilizza le opzioni di supporto disponibili.",
    faqTitle: "Controlla Prima le FAQ",
    faqDescription:
      "Molte risposte a domande comuni si trovano nella nostra sezione Domande Frequenti (FAQ).",
    goToFaq: "Vai alle FAQ",
    contactFormTitle: "Modulo di Contatto",
    contactFormDescription:
      "Il modo migliore per contattarci per la maggior parte delle questioni è inviare un messaggio tramite il nostro modulo di contatto.",
    goToContact: "Vai ai Contatti",
    phoneTitle: "Supporto Telefonico",
    phoneDescription:
      "Per questioni tecniche urgenti, puoi contattarci telefonicamente durante [es. 10:00 - 16:00] dal lunedì al venerdì.",
    phoneNumber: "Chiama: +39 000 000 0000", // Numero di esempio
    responseInfo:
      "Ci sforziamo di rispondere alle richieste inviate tramite il modulo di contatto entro 1-2 giorni lavorativi.",
  },
};
