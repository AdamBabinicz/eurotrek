import { Description } from "@radix-ui/react-toast"; // Mantenuto come richiesto, sebbene non utilizzato

export default {
  // Common - Comune
  common: {
    no_photos_data: "Nessun dato fotografico disponibile.",
    lastUpdated: "Ultimo aggiornamento",
    placeholderContent:
      "Il contenuto di questa sezione è in preparazione. Verrà aggiornato presto.",
  },

  routes: {
    home: "",
    destinations: "viaggi", // Percorso esempio
    about: "chi-siamo", // Percorso esempio
    contact: "contatti", // Percorso esempio
    destinationDetail: "viaggio", // Percorso esempio
    faq: "faq", // Percorso esempio
    privacy: "informativa-privacy", // Percorso esempio
    terms: "termini-uso", // Percorso esempio
    sitemap: "mappa-sito", // Percorso esempio
    accessibility: "accessibilita", // Percorso esempio
    cookiePolicy: "informativa-cookie", // Percorso esempio
    support: "supporto", // Percorso esempio
  },

  // Navbar - Barra di navigazione
  navbar: {
    home: "Home",
    destinations: "Viaggi",
    about: "Chi siamo",
    contact: "Contatti",
  },
  // Destinations - Destinazioni
  destinations: {
    exploreTitle: "Scopri i Viaggi",
    exploreDescription:
      "Sfoglia la nostra collezione di foto di viaggi studenteschi dalle città più belle d'Europa.",
    allDestinations: "Tutti i Viaggi",
    lisbon: "Lisbona",
    paris: "Parigi",
    berlin: "Berlino",
    capri: "Capri",
    naples: "Napoli",
    prague: "Praga",
    loadMore: "Carica altro",
    ariaLabel: "Categorie di viaggio",
    noMorePhotos: "Non ci sono più foto da caricare per questa categoria.",
  },
  destinationsData: {
    lisbon: { name: "Lisbona", country: "Portogallo" },
    paris: { name: "Parigi", country: "Francia" },
    berlin: { name: "Berlino", country: "Germania" },
    capri: { name: "Capri", country: "Italia" },
    naples: { name: "Napoli", country: "Italia" },
    prague: { name: "Praga", country: "Repubblica Ceca" },
  },
  // Hero Slides - Slide principali
  heroSlides: {
    "paris-hero": {
      location: "Parigi, Francia",
      description:
        "La città delle luci attraverso l'obiettivo di uno studente - catturare il fascino dell'architettura e della cultura parigina.",
    },
    "rome-hero": {
      // Nota: pl.ts ha Napoli qui, non Roma. Traducendo il contesto di Napoli.
      location: "Napoli, Italia",
      description:
        "Napoli è un luogo dove la vita scorre al ritmo dell'espresso, delle conversazioni per strada e dell'odore della pizza appena sfornata che aleggia nella calda aria mediterranea.",
    },
    "lisbon-hero": {
      location: "Lisbona, Portogallo",
      description:
        "Lisbona è una città piena di luce, dove i vicoli acciottolati si snodano tra case colorate e la vita scorre tranquilla al ritmo del fado e dell'aroma dei 'pasteis de nata' freschi.",
    },
    "frankfurt-hero": {
      location: "Francoforte sul Meno, Germania",
      description:
        // Nota: pl.ts ha copiato qui la descrizione di Lisbona. Traducendo quel testo.
        "Lisbona è una città piena di luce, dove i vicoli acciottolati si snodano tra case colorate e la vita scorre tranquilla al ritmo del fado e dell'aroma dei 'pasteis de nata' freschi.",
    },
  },
  // Photos - Foto
  photos: {
    view: "Guarda la foto {{title}}",
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
    },
    "lisbon-belem": {
      title: "Tetti della Città Vecchia",
      location: "Lisbona, Portogallo",
      description:
        "Il quartiere più antico di Lisbona è Alfama, costruito sul pendio sopra il Tago durante la dominazione moresca. È qui che si può sentire l'atmosfera della Lisbona medievale.",
    },
    "lisbon-bele": {
      title: "Torre di Belém",
      location: "Lisbona, Portogallo",
      description: "Fortezza medievale con vista sulla foce del fiume Tago.",
    },
    "boca do inferno": {
      title: "Bocca dell'Inferno",
      location: "Cascais, Portogallo",
      description:
        "Una voragine situata nelle scogliere costiere vicino alla città portoghese di Cascais.",
    },
    "capri-marina": {
      title: "Spiaggia da Luigi ai Faraglioni", // Assumendo nome comune
      location: "Capri, Italia",
      description:
        "Situata nel Mar Tirreno, occupa il 19° posto tra le 118 spiagge della regione napoletana.",
    },
    "paris-hero": {
      // Nota: Potenziale conflitto di ID con heroSlides
      title: "Versailles – Perla del Barocco",
      location: "Parigi, Francia", // Dovrebbe essere Versailles?
      alt: "Reggia di Versailles vicino a Parigi",
      description:
        "Versailles è un simbolo della monarchia assoluta francese e uno dei più magnifici esempi di architettura barocca al mondo.",
    },
    "naples-view": {
      title: "Strada sul Mar Tirreno",
      location: "Napoli, Italia",
      alt: "Strada ai piedi della montagna",
      description: "Percorso pittoresco lungo la costa.",
    },
    "naples-mummy": {
      title: "Calco di una vittima del Vesuvio",
      location: "Pompei, Italia",
      alt: "Vittime dell'eruzione del vulcano",
      description:
        "I calchi dei corpi furono recuperati nel 1863 dall'archeologo Giuseppe Fiorelli. 'Fino ad oggi non sono stati inventariati per motivi etici e per i sentimenti con cui sono sempre stati trattati i resti umani.'",
    },
    "naples-stadion": {
      title: "Anfiteatro di Pompei",
      location: "Pompei, Italia",
      alt: "Parte dello stadio nell'antica città di Pompei",
      description:
        "L'Anfiteatro di Pompei – un antico anfiteatro romano, situato a Pompei. È la struttura più antica conservata di questo tipo.",
    },
    "naples-museum": {
      title: "Piccolo donario pergameno", // Termine comune per il gruppo statuario
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
        "Un'incantevole terrazza sul tetto con cactus. La maggior parte dei tetti degli edifici a Capri è piatta. E come si vede sopra, su alcuni di questi edifici sono state create delle terrazze.",
    },
    "capri-street": {
      title: "Via dello shopping a Capri",
      location: "Capri, Italia",
      alt: "Negozi a Capri",
      description:
        "Capri è caratterizzata da affascinanti vie dello shopping che partono dalla Piazzetta e conducono attraverso Via Camerelle e Via Le Botteghe.",
    },
    "capri-port": {
      title: "Porto a Marina Grande",
      location: "Capri, Italia",
      alt: "Yacht ormeggiati",
      description:
        "I portabagagli degli hotel principali aspettano per prendere i bagagli su un carrello, e tu puoi prendere la funicolare o un taxi decappottabile, poiché a Capri non c'è traffico automobilistico.",
    },
    "lisbon-hero": {
      // Nota: Potenziale conflitto di ID con heroSlides
      title: "Monastero dos Jerónimos",
      location: "Lisbona, Portogallo",
      alt: "Monastero dos Jerónimos a Belém",
      description:
        "Costruito nella prima metà del XVI secolo, è considerato la perla e la quintessenza dello stile manuelino, una specifica combinazione portoghese di gotico e rinascimento.",
    },
    "paris-eiffel": {
      title: "Torre Eiffel",
      location: "Parigi, Francia",
      alt: "Illuminazione serale della Torre Eiffel a Parigi",
      description:
        "Il monumento architettonico più famoso di Parigi, riconosciuto come simbolo di questa città e talvolta di tutta la Francia.",
    },
    "paris-louvre": {
      title: "Museo del Louvre",
      location: "Parigi, Francia",
      alt: "Ex palazzo reale a Parigi",
      description:
        "Uno dei musei più grandi del mondo, è anche l'istituzione di questo tipo più visitata al mondo.",
    },
    "paris-panteon": {
      title: "Vista del Panthéon da Place du Panthéon",
      location: "Parigi, Francia",
      alt: "Panthéon da Place du Panthéon",
      description:
        "Il Panthéon – un edificio nel Quartiere Latino di Parigi, eretto alla fine del XVIII secolo come chiesa dedicata a Santa Genoveffa.",
    },
    "paris-snails": {
      title: "Famose lumache francesi",
      location: "Parigi, Francia",
      alt: "Piatto di lumache",
      description:
        "È difficile immaginare la cucina sulla Senna, e soprattutto sul Rodano, senza una deliziosa lumaca nel piatto.",
    },
    "paris-1": {
      alt: "Vista sulla Biblioteca Nazionale in primavera",
      title: "Biblioteca Nazionale di Francia, sito Richelieu, Sala Ovale",
      location: "Parigi, Francia",
    },
    "paris-2": {
      alt: "Versailles, Tempio dell'amore",
      title: "Versailles, Tempio dell'amore",
      location: "Versailles, Francia",
    },
    "paris-3": {
      alt: "Giardino alla francese",
      title: "Magnifici giardini storici",
      location: "Parigi, Francia",
    },
    "paris-4": {
      alt: "Fauno danzante",
      title: "Dio mitico romano della foresta e dei boschi incantati",
      location: "Parigi, Francia",
    },
    "frankfurt-hero": {
      // Nota: Potenziale conflitto di ID con heroSlides
      title: "Alte Oper (Vecchia Opera), Francoforte",
      location: "Francoforte sul Meno, Germania",
      alt: "Alte Oper (Vecchia Opera), Francoforte",
      description:
        "Sopra una pittoresca piazza adornata da un'elegante fontana si erge l'Opera, con una facciata in stile rinascimentale.",
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
      alt: "Altes Museum",
      description:
        "Il museo fu costruito con l'obiettivo di rendere accessibili al grande pubblico le collezioni di arte antica, su ordine del re prussiano Federico Guglielmo III.",
    },
    "berlin-victory-column": {
      title: "Colonna della Vittoria (Siegessäule)",
      location: "Berlino, Germania",
      alt: "Colonna della Vittoria",
      description:
        "La colonna situata nel parco Großer Tiergarten a Berlino commemora la vittoria della Prussia sulla Danimarca nella guerra danese del 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven, Haydn e Mozart",
      location: "Berlino, Germania",
      alt: "Monumento ai tre geni musicali",
      description:
        "Monumento all'aperto ai compositori classici: Ludwig van Beethoven, Joseph Haydn e Wolfgang Amadeus Mozart, eretto nel 1904.",
    },
    "prague-bridge": {
      title: "Vista sul fiume Moldava a Praga",
      location: "Praga, Repubblica Ceca",
      alt: "Fiume Moldava a Praga",
      description:
        "Tutta Praga si specchia nella Moldava e le si ingrazia, come a uno specchio magico.",
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
        "Edificio all'avanguardia progettato dalla coppia di architetti Vlado Milunić e Frank Gehry in stile decostruttivista.",
    },
    "prague-kafka": {
      title: "Testa rotante di Franz Kafka",
      location: "Praga, Repubblica Ceca",
      alt: "Testa di Franz Kafka",
      description:
        "David Černý ha progettato questa controversa opera d'arte per l'edificio commerciale e per uffici 'Quadrio' in via Národní třída.",
    },
  },
  // About Section - Chi siamo
  about: {
    title: "Su EuroTrek",
    description1:
      "EuroTrek è un diario fotografico collettivo creato da studenti universitari che studiano in Polonia. La nostra missione è mostrare la bellezza, la cultura e le esperienze dei viaggi studenteschi attraverso la fotografia autentica.",
    description2:
      "Questa piattaforma serve sia da ispirazione per i futuri studenti viaggiatori sia da libro dei ricordi per coloro che hanno già iniziato le loro avventure europee. Tutte le foto sono scattate da studenti, mostrando l'Europa attraverso una prospettiva fresca e giovanile.",
    pageTitle: "Sul Nostro Viaggio",
    pageDescription1:
      "EuroTrek è nato dalla passione per la fotografia di viaggio e dal desiderio di catturare le esperienze uniche degli studenti esploratori nelle città più vivaci d'Europa.",
    pageDescription2:
      "Ciò che è iniziato come un piccolo gruppo che condivideva foto tra compagni di classe che studiavano in Polonia è cresciuto fino a diventare una piattaforma che collega studenti fotografi di diversi paesi, background e discipline accademiche che condividono un amore comune per l'esplorazione e la narrazione visiva.",
    pageDescription3:
      "I nostri collaboratori sono studenti come te, che bilanciano i loro studi con avventure in tutto il continente, catturando momenti autentici lungo il percorso.",
    mission: {
      title: "La Nostra Missione",
      description:
        "Ispirare i viaggi studenteschi attraverso un'autentica narrazione visiva e promuovere una comunità di supporto per giovani fotografi che esplorano l'Europa.",
    },
    team: {
      title: "Collettivo Studentesco",
      description:
        "Il nostro team è composto interamente da studenti fotografi, scrittori e sviluppatori web provenienti da università di tutto il mondo. Ogni collaboratore porta la propria prospettiva ed esperienza uniche alla piattaforma.",
    },
    feature1: {
      title: "Studenti Fotografi",
      description: "Foto scattate da studenti internazionali da tutto il mondo",
    },
    feature2: {
      title: "Esperienze Autentiche",
      description:
        "Momenti di viaggio reali al di là delle tipiche attrazioni turistiche",
    },
    feature3: {
      title: "Molti Viaggi",
      description:
        "Una collezione crescente di foto da tutto il continente europeo",
    },
    image1: {
      title: "Lisbona",
      description: "Monastero dos Jerónimos.",
    },
    image2: {
      title: "Germania e Francia",
      description: "Un viaggio indimenticabile attraverso Germania e Francia.",
    },
    image3: {
      title: "Napoli",
      description: "Paesaggi straordinari di Napoli.",
    },
  },
  // Featured Section - Sezione in primo piano
  featured: {
    title: "In primo piano: Primavera a Parigi",
    description1:
      "Parigi in primavera è un sogno per gli studenti fotografi. La città si anima con ciliegi in fiore, terrazze di caffè e luce perfetta per catturare monumenti iconici.",
    description2:
      "La nostra collezione in primo piano mostra il fascino di Parigi attraverso gli occhi degli studenti polacchi che hanno trascorso le loro vacanze studio all'estero nella Città della Luce.",
    exploreLink: "Esplora la Collezione Parigi",
    image1Alt: "Torre Eiffel in primavera",
    image2Alt: "Fiume Senna a Parigi",
    image3Alt: "Caffè parigino",
    image4Alt: "Museo del Louvre",
  },
  // Contact Section - Sezione contatti
  contact: {
    title: "Contatti",
    description:
      "Hai domande o vuoi inviare le tue foto di viaggio studentesche? Ci farebbe piacere sentirti!",
    pageTitle: "Mettiti in Contatto",
    getInTouch: "Come Possiamo Aiutarti?",
    getInTouchDescription:
      "Sia che tu voglia inviare le tue foto di viaggio, abbia domande sulla nostra piattaforma o semplicemente voglia salutare, siamo qui per aiutarti.",
    email: {
      title: "Inviaci un'Email",
      description: "Per richieste generali e invio di foto",
    },
    location: {
      title: "La Nostra Sede",
      description: "Visita l'ufficio del nostro collettivo studentesco",
      address: "University Creative Hub, European Campus, Amsterdam", // Tradurre o mantenere l'indirizzo?
    },
    phone: {
      title: "Chiamaci",
      description: "Disponibili nei giorni feriali dalle 10:00 alle 18:00 CET",
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
      messagePlaceholder: "Inserisci qui il tuo messaggio...",
      messageError: "Il messaggio deve contenere almeno 10 caratteri",
      send: "Invia Messaggio",
      sending: "Invio in corso...",
      successTitle: "Messaggio Inviato!",
      successMessage: "Grazie per averci contattato. Ti risponderemo presto.",
    },
  },
  // Footer - Piè di pagina
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
    cookiePolicy: "Informativa sui Cookie",
    cookieSettings: "Impostazioni Cookie",
    faq: "Domande Frequenti (FAQ)",
    sitemap: "Mappa del Sito",
    support: "Aiuto e Supporto",
    copyright: "Tutti i diritti riservati.",
    tagline: "Creato con ❤ da studenti, per studenti.",
    instagram: "Seguici su Instagram",
    twitter: "Seguici su Twitter",
    facebook: "Seguici su Facebook",
    pinterest: "Seguici su Pinterest",
  },
  // Slider Controls - Controlli slider
  slider: {
    previous: "Slide precedente",
    next: "Slide successiva",
    goToSlide: "Vai alla slide {{index}}",
  },
  // Lightbox - Visualizzatore foto
  lightbox: {
    close: "Chiudi visualizzatore",
    previous: "Foto precedente",
    next: "Foto successiva",
  },
  // Theme Toggle - Selettore tema
  theme: {
    toggleLight: "Passa a modalità chiara",
    toggleDark: "Passa a modalità scura",
  },
  // Language - Lingua
  language: {
    changeLanguage: "Cambia lingua",
  },
  // Home - Home
  home: {
    heroAriaLabel: "Destinazioni in primo piano",
  },

  // --- Sezioni per nuove pagine informative ---
  privacyPolicy: {
    title: "Informativa sulla Privacy",
    metaDescription: "Leggi l'informativa sulla privacy del servizio EuroTrek.",
    introduction:
      "Benvenuto nell'Informativa sulla Privacy di EuroTrek. La tua privacy è importante per noi e ci impegniamo a proteggere i tuoi dati personali in conformità con le normative applicabili, incluso il GDPR.",
    section1Title: "1. Quali informazioni raccogliamo?",
    section1Content:
      "Raccogliamo informazioni che ci fornisci direttamente (ad es. tramite il modulo di contatto: nome, indirizzo email, contenuto del messaggio) e dati raccolti automaticamente durante l'utilizzo del servizio (ad es. indirizzo IP, tipo di browser, informazioni sul dispositivo, dati sull'attività nel servizio tramite cookie – vedi Informativa sui Cookie).",
    section2Title: "2. Come utilizziamo le tue informazioni?",
    section2Content:
      "Utilizziamo i tuoi dati per fornire e migliorare i nostri servizi, comunicare con te (rispondere alle richieste), analizzare il traffico del sito, garantire la sicurezza del servizio e adempiere agli obblighi legali.",
    contactTitle: "Contatto per la privacy",
    contactContent:
      "Per questioni relative al trattamento dei tuoi dati personali o all'esercizio dei tuoi diritti, ti preghiamo di contattarci a: [puaro@vp.pl].", // Aggiornare indirizzo email
  },
  termsOfUse: {
    title: "Termini di Utilizzo",
    metaDescription: "Leggi i termini di utilizzo del servizio EuroTrek.",
    introduction:
      "Questi Termini di Utilizzo regolano le regole per l'utilizzo del servizio online EuroTrek. Utilizzando il servizio, accetti le seguenti disposizioni.",
    section1Title: "1. Regole generali e accettazione dei termini",
    section1Content:
      "Il servizio EuroTrek è una piattaforma che presenta fotografie di viaggio. Gli utenti sono obbligati a utilizzare il servizio in conformità con la legge e le buone pratiche. È vietato pubblicare contenuti illegali, offensivi o che violino i diritti di terzi.",
    contactTitle: "Contatto per i Termini di Utilizzo",
    contactContent:
      "Le domande relative a questi Termini di Utilizzo devono essere indirizzate a: [puaro@vp.pl].", // Aggiornare indirizzo email
  },
  accessibility: {
    title: "Dichiarazione di Accessibilità",
    metaDescription:
      "Scopri il nostro impegno per l'accessibilità digitale su EuroTrek.",
    introduction:
      "EuroTrek si impegna a garantire l'accessibilità digitale del servizio per la più ampia gamma possibile di utenti, comprese le persone con disabilità. Lavoriamo costantemente per migliorare l'interfaccia e applicare gli standard di accessibilità pertinenti, come le WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Le nostre azioni per l'accessibilità",
    section1Content:
      "Ci sforziamo di implementare soluzioni come: l'uso di codice HTML semantico, la garanzia della navigazione tramite tastiera, un adeguato contrasto cromatico, testo alternativo per le immagini e il test del servizio utilizzando varie tecnologie assistive.",
    contactTitle: "Feedback e dati di contatto",
    contactContent:
      "Se incontri barriere di accessibilità sul nostro servizio, ti preghiamo di contattarci. Il tuo feedback è prezioso per noi. Contattaci a: [puaro@vp.pl].", // Aggiornare indirizzo email
  },
  cookiePolicy: {
    title: "Informativa sui Cookie",
    metaDescription: "Scopri come EuroTrek utilizza i cookie.",
    introduction:
      "Il nostro servizio utilizza i cookie per garantire il corretto funzionamento del sito, migliorare la tua esperienza e per scopi analitici e di marketing (con il tuo consenso).",
    section1Title: "1. Cosa sono i cookie?",
    section1Content:
      "I cookie sono piccoli file di testo salvati sul tuo dispositivo (computer, smartphone) quando visiti siti web. Permettono al sito di 'ricordare' le tue azioni e preferenze per un periodo di tempo.",
    section2Title: "2. Quali tipi di cookie utilizziamo?",
    section2Content: "Utilizziamo diversi tipi di cookie, tra cui:",
    type1:
      "Cookie necessari: Essenziali per il funzionamento di base del servizio (ad es. sessione utente). Non richiedono consenso.",
    type2:
      "Cookie analitici: Ci aiutano a capire come gli utenti utilizzano il sito (ad es. Google Analytics). Richiedono il tuo consenso.",
    type3:
      "Cookie funzionali: Consentono di ricordare le tue scelte e preferenze (ad es. lingua). Possono richiedere consenso.",
    type4:
      "Cookie di marketing: Utilizzati per visualizzare pubblicità personalizzata (ad es. Pixel di Facebook). Richiedono il tuo consenso.",
    section3Title: "3. Gestione dei cookie",
    section3Content:
      "Puoi gestire i tuoi consensi ai cookie in qualsiasi momento utilizzando lo strumento di gestione del consenso disponibile sul nostro sito (fai clic sul pulsante 'Impostazioni Cookie'). Puoi anche modificare le impostazioni dei cookie nel tuo browser web.",
    settingsError:
      "Impossibile aprire le impostazioni dei cookie. Contatta il supporto tecnico o prova a gestire le impostazioni nel tuo browser.",
    settingsInfoPlaceholder:
      "Facendo clic sul pulsante si aprirà il pannello di gestione delle impostazioni dei cookie.",
    contactTitle: "Contatto per l'Informativa sui Cookie",
    contactContent:
      "In caso di domande sulla nostra informativa sui cookie, ti preghiamo di contattarci: [puaro@vp.pl].", // Aggiornare indirizzo email
  },
  faq: {
    title: "Domande Frequenti (FAQ)",
    metaDescription: "Trova le risposte alle domande più comuni su EuroTrek.",
    q1: "Domanda 1: Come posso inviare le mie foto?",
    a1: "Attualmente raccogliamo foto da studenti associati. Se sei interessato a collaborare, ti preghiamo di contattarci tramite il modulo di contatto, descrivendo brevemente i tuoi viaggi e il tuo portfolio.",
    q2: "Domanda 2: L'uso del servizio è a pagamento?",
    a2: "No, la navigazione tra foto e contenuti nel servizio EuroTrek è completamente gratuita per tutti gli utenti.",
    q3: "Domanda 3: Chi detiene il copyright delle foto?",
    a3: "Il copyright delle foto appartiene agli studenti autori. EuroTrek detiene una licenza per la loro pubblicazione nel servizio. I dettagli sono specificati nell'accordo con l'autore e nei nostri Termini di Utilizzo.",
    stillHaveQuestions: "Hai altre domande?",
    contactUs: "Contattaci",
  },
  sitemap: {
    title: "Mappa del Sito",
    metaDescription: "Esplora la struttura del sito EuroTrek.",
    introduction:
      "Di seguito è riportato un elenco delle principali sezioni e pagine disponibili nel servizio EuroTrek per facilitare la tua navigazione.",
  },
  support: {
    title: "Aiuto e Supporto",
    metaDescription:
      "Hai bisogno di aiuto? Trova informazioni di contatto e supporto per EuroTrek.",
    introduction:
      "Siamo qui per aiutarti! Se hai domande sul funzionamento del servizio, hai riscontrato un problema tecnico o hai altre preoccupazioni, ti preghiamo di utilizzare le opzioni di supporto disponibili.",
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
      "Per questioni tecniche urgenti, puoi contattarci telefonicamente durante [ad es. 10:00 - 16:00] dal lunedì al venerdì.", // Aggiornare orario
    phoneNumber: "Chiama: [000 000 000]", // Aggiornare numero di telefono
    responseInfo:
      "Ci sforziamo di rispondere alle richieste inviate tramite il modulo di contatto entro 1-2 giorni lavorativi.",
  },
};
