import { Description } from "@radix-ui/react-toast"; // Mantenere l'importazione

export default {
  // Common / Comune
  common: {
    no_photos_data: "Nessun dato fotografico disponibile.",
    // --- AGGIUNTO ---
    lastUpdated: "Ultimo aggiornamento",
    placeholderContent:
      "Il contenuto di questa sezione è in preparazione. Verrà aggiornato a breve.",
    // --- FINE AGGIUNTO ---
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
    exploreTitle: "Scopri le Destinazioni",
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
      location: "Napoli, Italia",
      description:
        "Napoli è un luogo dove la vita scorre al ritmo dell'espresso, delle conversazioni per strada e del profumo della pizza appena sfornata che aleggia nell'aria calda mediterranea.",
    },
    "lisbon-hero": {
      location: "Lisbona, Portogallo",
      description:
        "Lisbona è una città piena di luce, dove vicoli acciottolati si snodano tra case colorate, e la vita scorre tranquilla al ritmo del fado e dell'aroma dei freschi 'pastéis de nata'.",
    },
    "frankfurt-hero": {
      location: "Francoforte sul Meno, Germania",
      // Mantenuta la descrizione dal template PL, anche se descrive Lisbona
      description:
        "Lisbona è una città piena di luce, dove vicoli acciottolati si snodano tra case colorate, e la vita scorre tranquilla al ritmo del fado e dell'aroma dei freschi 'pastéis de nata'.",
    },
  },
  // Photos / Foto
  photos: {
    view: "Vedi foto {{title}}",
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
      title: "Tetti della Città Vecchia",
      location: "Lisbona, Portogallo",
      description:
        "Il quartiere più antico di Lisbona è Alfama, costruito su un pendio sopra il Tago durante il dominio moresco. È qui che si può sentire l'atmosfera della Lisbona medievale.",
    },
    "lisbon-bele": {
      title: "Torre di Belém",
      location: "Lisbona, Portogallo",
      description: "Fortezza medievale con vista sulla foce del fiume Tago", // Correzione dell'errore di battitura 'widokime'
    },
    "boca do inferno": {
      title: "Bocca dell'Inferno",
      location: "Cascais, Portogallo",
      description:
        "Una voragine situata nelle scogliere costiere vicino alla città portoghese di Cascais",
    },
    "capri-marina": {
      title: "Spiaggia Luigi ai Faraglioni",
      location: "Capri, Italia",
      description:
        "Situata nel Mar Tirreno, occupa il 19° posto tra le 118 spiagge della regione napoletana.",
    },
    "paris-hero": {
      // Nota: Conflitto con heroSlides, ma traduzione come presente.
      title: "Versailles – Perla del Barocco",
      location: "Parigi, Francia", // Tecnicamente vicino a Parigi
      alt: "Palazzo di Versailles vicino a Parigi",
      description:
        "Versailles è un simbolo della monarchia assoluta francese e uno dei più magnifici esempi di architettura barocca al mondo.",
    },
    "naples-view": {
      title: "Strada sul Mar Tirreno",
      location: "Napoli, Italia",
      alt: "Strada ai piedi di una montagna",
      description: "Percorso pittoresco lungo la costa.",
    },
    "naples-mummy": {
      title: "Calco di una vittima del Vesuvio",
      location: "Pompei, Italia",
      alt: "Vittime dell'eruzione vulcanica",
      description:
        "I calchi dei corpi furono recuperati nel 1863 dall'archeologo Giuseppe Fiorelli. 'Finora non sono stati inventariati per motivi etici e per la sensibilità con cui sono sempre stati trattati i resti umani.'",
    },
    "naples-stadion": {
      title: "Anfiteatro di Pompei",
      location: "Pompei, Italia",
      alt: "Parte dello stadio nell'antica città di Pompei",
      description:
        "L'Anfiteatro di Pompei – un antico anfiteatro romano, situato a Pompei. È la più antica struttura conservata di questo tipo.",
    },
    "naples-museum": {
      title: "Piccolo donario pergameno", // Traduzione diretta, si riferisce a sculture specifiche
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
        "Un'affascinante terrazza sul tetto con cactus. La maggior parte dei tetti degli edifici a Capri è piatta. E come si vede sopra, su alcuni di questi edifici sono state create delle terrazze.",
    },
    "capri-street": {
      title: "Via dello shopping a Capri",
      location: "Capri, Italia",
      alt: "Negozi a Capri",
      description:
        "Capri è caratterizzata da affascinanti vie dello shopping, che iniziano dalla Piazzetta e conducono attraverso Via Camerelle e Via Le Botteghe.",
    },
    "capri-port": {
      title: "Porto a Marina Grande",
      location: "Capri, Italia",
      alt: "Yacht ormeggiati",
      description:
        "I portabagagli degli hotel principali aspettano per prendere i vostri bagagli su un carrello, e potete prendere la funicolare o un taxi decappottabile, poiché a Capri non c'è traffico automobilistico.",
    },
    "lisbon-hero": {
      // Nota: Conflitto con heroSlides, ma traduzione come presente.
      title: "Monastero dos Jerónimos",
      location: "Lisbona, Portogallo",
      alt: "Monastero dos Jerónimos a Belém",
      description:
        "Costruito nella prima metà del XVI secolo, è considerato il gioiello e la quintessenza dello stile manuelino, una specifica miscela portoghese di gotico e rinascimento.",
    },
    "paris-eiffel": {
      title: "Torre Eiffel",
      location: "Parigi, Francia",
      alt: "Illuminazione serale della Torre Eiffel a Parigi",
      description:
        "Il monumento architettonico più famoso di Parigi, considerato un simbolo di questa città e talvolta dell'intera Francia.",
    },
    "paris-louvre": {
      title: "Museo del Louvre",
      location: "Parigi, Francia",
      alt: "Ex palazzo reale a Parigi",
      description:
        "Uno dei più grandi musei del mondo, è anche l'istituzione di questo tipo più visitata al mondo.",
    },
    "paris-panteon": {
      title: "Vista del Panthéon da Place du Panthéon",
      location: "Parigi, Francia",
      alt: "Panthéon da Place du Panthéon",
      description:
        "Il Panthéon – un edificio nel Quartiere Latino a Parigi, eretto alla fine del XVIII secolo come chiesa dedicata a Santa Genoveffa.",
    },
    "paris-snails": {
      title: "Famose lumache francesi",
      location: "Parigi, Francia",
      alt: "Piatto di lumache",
      description:
        "È difficile immaginare la cucina sulla Senna, e soprattutto quella sul Rodano, senza deliziose lumache nel piatto.",
    },
    "frankfurt-hero": {
      // Nota: Conflitto con heroSlides, ma traduzione come presente.
      title: "Alte Oper (Vecchia Opera), Francoforte",
      location: "Francoforte sul Meno, Germania",
      alt: "Alte Oper, Francoforte",
      description:
        "Svettando su una piazza pittoresca adornata da un'elegante fontana si trova l'Opera, che possiede una facciata in stile rinascimentale.",
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
        "Il museo fu costruito per rendere accessibili al grande pubblico le collezioni di arte antica, su ordine del re prussiano Federico Guglielmo III.",
    },
    "berlin-victory-column": {
      title: "Colonna della Vittoria (Siegessäule)",
      location: "Berlino, Germania",
      alt: "Colonna della Vittoria",
      description:
        "Colonna situata nel parco Großer Tiergarten a Berlino che commemora la vittoria della Prussia sulla Danimarca nella guerra dello Schleswig del 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven, Haydn e Mozart",
      location: "Berlino, Germania",
      alt: "Monumento ai tre geni musicali",
      description:
        "Monumento all'aperto ai compositori classici Ludwig van Beethoven, Joseph Haydn e Wolfgang Amadeus Mozart, del 1904.",
    },
    "prague-bridge": {
      title: "Vista sulla Moldava a Praga",
      location: "Praga, Repubblica Ceca",
      alt: "Fiume Moldava a Praga",
      description:
        "Tutta Praga si specchia nella Moldava e la lusinga, come uno specchio magico.",
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
        "Edificio avanguardista progettato dalla coppia di architetti Vlado Milunić e Frank Gehry in stile decostruttivista.",
    },
    "prague-kafka": {
      title: "Testa rotante di Franz Kafka",
      location: "Praga, Repubblica Ceca",
      alt: "Testa di Franz Kafka",
      description:
        "David Černý ha progettato questa controversa opera d'arte per l'edificio commerciale e per uffici 'Quadrio' in via Národní třída.",
    },
  },
  // About Section / Chi siamo
  about: {
    title: "Chi è EuroTrek",
    description1:
      "EuroTrek è un diario fotografico collettivo creato da studenti universitari che studiano in Polonia. La nostra missione è mostrare la bellezza, la cultura e le esperienze dei viaggi studenteschi attraverso la fotografia autentica.",
    description2:
      "Questa piattaforma serve sia da ispirazione per futuri studenti viaggiatori sia da libro dei ricordi per coloro che hanno già intrapreso le loro avventure europee. Tutte le foto sono scattate da studenti, mostrando l'Europa da una prospettiva fresca e giovanile.",
    pageTitle: "Sul Nostro Viaggio",
    pageDescription1:
      "EuroTrek è nato dalla passione per la fotografia di viaggio e dal desiderio di catturare le esperienze uniche degli studenti esploratori nelle città più vivaci d'Europa.",
    pageDescription2:
      "Ciò che è iniziato come un piccolo gruppo che condivideva foto tra compagni di classe che studiavano in Polonia si è trasformato in una piattaforma che collega studenti fotografi di diversi paesi, background e discipline accademiche che condividono un amore comune per l'esplorazione e la narrazione visiva.",
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
      description: "Foto scattate da studenti in scambio da tutto il mondo",
    },
    feature2: {
      title: "Esperienze Autentiche",
      description: "Momenti di viaggio reali oltre i tipici luoghi turistici",
    },
    feature3: {
      title: "Molteplici Destinazioni",
      description:
        "Una collezione crescente di immagini da tutto il continente europeo",
    },
    image1: {
      title: "Lisbona",
      description: "Monastero dos Jerónimos.",
    },
    image2: {
      title: "Germania e Francia",
      description:
        "Un viaggio indimenticabile attraverso la Germania e la Francia.",
    },
    image3: {
      title: "Napoli",
      description: "Gli straordinari paesaggi di Napoli.",
    },
  },
  // Featured Section / In primo piano
  featured: {
    title: "In primo piano: Primavera a Parigi",
    description1:
      "Parigi in primavera è un sogno per gli studenti fotografi. La città si anima con ciliegi in fiore, terrazze di caffè e la luce perfetta per catturare monumenti iconici.",
    description2:
      "La nostra collezione in primo piano mostra la magia di Parigi attraverso gli occhi degli studenti polacchi che hanno trascorso le loro vacanze di scambio nella Città della Luce.",
    exploreLink: "Esplora la Collezione Parigi",
    image1Alt: "Torre Eiffel in primavera",
    image2Alt: "Fiume Senna a Parigi",
    image3Alt: "Scena di caffè parigino",
    image4Alt: "Museo del Louvre",
  },
  // Contact Section / Contatti
  contact: {
    title: "Contatti",
    description:
      "Hai domande o vuoi inviare le tue foto di viaggi studenteschi? Ci piacerebbe sentirti!",
    pageTitle: "Mettiti in Contatto",
    getInTouch: "Come Possiamo Aiutarti?",
    getInTouchDescription:
      "Sia che tu voglia inviare le tue foto di viaggio, abbia domande sulla nostra piattaforma o voglia semplicemente salutarci, siamo qui per aiutarti.",
    email: {
      title: "Scrivici",
      description: "Per richieste generali e invio di foto",
    },
    location: {
      title: "La Nostra Sede",
      description: "Visita l'ufficio del nostro collettivo studentesco",
      address: "University Creative Hub, European Campus, Amsterdam", // Indirizzo segnaposto mantenuto
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
      messagePlaceholder: "Scrivi qui il tuo messaggio...",
      messageError: "Il messaggio deve contenere almeno 10 caratteri",
      send: "Invia Messaggio",
      sending: "Invio in corso...",
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
    parisCollection: "Collezione Parigi",
    submitPhotos: "Invia Foto",
    privacyPolicy: "Informativa sulla Privacy",
    termsOfUse: "Termini di Utilizzo",
    accessibility: "Accessibilità",
    cookiePolicy: "Politica sui Cookie",
    cookieSettings: "Impostazioni Cookie",
    faq: "Domande Frequenti (FAQ)",
    sitemap: "Mappa del Sito",
    support: "Aiuto e Supporto",
    copyright: "Tutti i diritti riservati.",
    tagline: "Fatto con ❤ dagli studenti, per gli studenti.",
    instagram: "Seguici su Instagram",
    twitter: "Seguici su Twitter",
    facebook: "Seguici su Facebook",
    pinterest: "Seguici su Pinterest",
  },
  // Slider Controls / Controlli slider
  slider: {
    previous: "Diapositiva precedente",
    next: "Diapositiva successiva",
    goToSlide: "Vai alla diapositiva {{index}}",
  },
  // Lightbox / Visualizzatore immagini
  lightbox: {
    close: "Chiudi visualizzatore",
    previous: "Immagine precedente",
    next: "Immagine successiva",
  },
  // Theme Toggle / Cambio tema
  theme: {
    toggleLight: "Passa alla modalità chiara",
    toggleDark: "Passa alla modalità scura",
  },
  // Language / Lingua
  language: {
    changeLanguage: "Cambia lingua",
  },
  // Home / Home
  home: {
    heroAriaLabel: "Destinazioni in primo piano",
  },

  // --- SEZIONI AGGIUNTE PER NUOVE PAGINE INFORMATIVE (CON CONTENUTO SEGNAPOSTO GENERICO) ---
  privacyPolicy: {
    title: "Informativa sulla Privacy",
    metaDescription: "Leggi l'informativa sulla privacy del servizio EuroTrek.",
    introduction:
      "Benvenuto nell'Informativa sulla Privacy di EuroTrek. La tua privacy è importante per noi e ci impegniamo a proteggere i tuoi dati personali in conformità con le normative applicabili, incluso il GDPR.",
    section1Title: "1. Quali informazioni raccogliamo?",
    section1Content:
      "Raccogliamo le informazioni che ci fornisci direttamente (ad es. tramite il modulo di contatto: nome, indirizzo email, contenuto del messaggio) e i dati raccolti automaticamente quando utilizzi il servizio (ad es. indirizzo IP, tipo di browser, informazioni sul dispositivo, dati sull'attività nel servizio tramite cookie – vedi Politica sui Cookie).",
    section2Title: "2. Come utilizziamo le tue informazioni?",
    section2Content:
      "Utilizziamo i tuoi dati per fornire e migliorare i nostri servizi, comunicare con te (rispondere a richieste), analizzare il traffico del sito web, garantire la sicurezza del servizio e adempiere agli obblighi legali.",
    contactTitle: "Contatto per la Privacy",
    contactContent:
      "Per questioni relative al trattamento dei tuoi dati personali o all'esercizio dei tuoi diritti, ti preghiamo di contattarci a: [puaro@vp.pl].", // Email segnaposto mantenuta
  },
  termsOfUse: {
    title: "Termini di Utilizzo",
    metaDescription: "Leggi i termini di utilizzo del servizio EuroTrek.",
    introduction:
      "Questi Termini di Utilizzo regolano l'uso del sito web EuroTrek. Utilizzando il servizio, accetti le seguenti disposizioni.",
    section1Title: "1. Regole generali e accettazione dei termini",
    section1Content:
      "Il servizio EuroTrek è una piattaforma che presenta fotografie di viaggio. Gli utenti sono obbligati a utilizzare il servizio in conformità con la legge e le buone pratiche. È vietato pubblicare contenuti illegali, offensivi o che violino i diritti di terzi.",
    contactTitle: "Contatto per i Termini di Utilizzo",
    contactContent:
      "Le domande relative a questi Termini di Utilizzo devono essere indirizzate a: [puaro@vp.pl].", // Email segnaposto mantenuta
  },
  accessibility: {
    title: "Dichiarazione di Accessibilità",
    metaDescription:
      "Scopri il nostro impegno per l'accessibilità digitale su EuroTrek.",
    introduction:
      "EuroTrek si impegna a garantire l'accessibilità digitale del servizio per la più ampia gamma possibile di utenti, comprese le persone con disabilità. Lavoriamo continuamente per migliorare l'interfaccia utente e applicare gli standard di accessibilità pertinenti, come le WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. I nostri sforzi per l'accessibilità",
    section1Content:
      "Miriamo a implementare soluzioni come: l'uso di codice HTML semantico, la garanzia della navigazione tramite tastiera, un contrasto cromatico adeguato, testo alternativo per le immagini e il test del servizio con varie tecnologie assistive.",
    contactTitle: "Feedback e Informazioni di Contatto",
    contactContent:
      "Se incontri barriere di accessibilità sul nostro servizio, ti preghiamo di contattarci. Il tuo feedback è prezioso per noi. Contattaci a: [puaro@vp.pl].", // Email segnaposto mantenuta
  },
  cookiePolicy: {
    title: "Politica sui Cookie",
    metaDescription: "Scopri come EuroTrek utilizza i cookie.",
    introduction:
      "Il nostro servizio utilizza i cookie per garantire il corretto funzionamento del sito, migliorare la tua esperienza e per scopi analitici e di marketing (con il tuo consenso).",
    section1Title: "1. Cosa sono i cookie?",
    section1Content:
      "I cookie sono piccoli file di testo salvati sul tuo dispositivo (computer, smartphone) quando visiti siti web. Consentono al sito di 'ricordare' le tue azioni e preferenze per un periodo di tempo.",
    section2Title: "2. Quali tipi di cookie utilizziamo?",
    section2Content: "Utilizziamo vari tipi di cookie, tra cui:",
    type1:
      "Cookie essenziali: Necessari per il funzionamento di base del servizio (ad es. sessione utente). Non richiedono consenso.",
    type2:
      "Cookie analitici: Ci aiutano a capire come gli utenti interagiscono con il sito (ad es. Google Analytics). Richiedono il tuo consenso.",
    type3:
      "Cookie funzionali: Consentono di ricordare le tue scelte e preferenze (ad es. lingua). Possono richiedere consenso.",
    type4:
      "Cookie di marketing: Utilizzati per mostrare pubblicità personalizzata (ad es. Facebook Pixel). Richiedono il tuo consenso.",
    section3Title: "3. Gestione dei Cookie",
    section3Content:
      "Puoi gestire i tuoi consensi ai cookie in qualsiasi momento utilizzando lo strumento di gestione del consenso disponibile sul nostro sito (fai clic sul pulsante 'Impostazioni Cookie'). Puoi anche modificare le impostazioni dei cookie nel tuo browser web.",
    settingsError:
      "Impossibile aprire le impostazioni dei cookie. Contatta l'assistenza o prova a gestire le impostazioni nel tuo browser.",
    settingsInfoPlaceholder:
      "Facendo clic sul pulsante si aprirà il pannello di gestione delle impostazioni dei cookie.",
    contactTitle: "Contatto per la Politica sui Cookie",
    contactContent:
      "Se hai domande sulla nostra politica sui cookie, ti preghiamo di contattarci: [puaro@vp.pl].", // Email segnaposto mantenuta
  },
  faq: {
    title: "Domande Frequenti (FAQ)",
    metaDescription: "Trova le risposte alle domande più comuni su EuroTrek.",
    q1: "Domanda 1: Come posso inviare le mie foto?",
    a1: "Attualmente raccogliamo foto da studenti associati. Se sei interessato a collaborare, ti preghiamo di contattarci tramite il modulo di contatto, descrivendo brevemente i tuoi viaggi e il tuo portfolio.",
    q2: "Domanda 2: L'uso del servizio è a pagamento?",
    a2: "No, la navigazione tra foto e contenuti sul servizio EuroTrek è completamente gratuita per tutti gli utenti.",
    q3: "Domanda 3: Chi detiene i diritti d'autore delle foto?",
    a3: "I diritti d'autore delle foto appartengono agli studenti autori. EuroTrek detiene una licenza per pubblicarle sul servizio. I dettagli sono specificati nell'accordo con l'autore e nei nostri Termini di Utilizzo.",
    stillHaveQuestions: "Hai altre domande?",
    contactUs: "Contattaci",
  },
  sitemap: {
    title: "Mappa del Sito",
    metaDescription: "Esplora la struttura del sito EuroTrek.",
    introduction:
      "Di seguito è riportato un elenco delle principali sezioni e pagine disponibili sul servizio EuroTrek per facilitare la tua navigazione.",
  },
  support: {
    title: "Aiuto e Supporto",
    metaDescription:
      "Hai bisogno di assistenza? Trova informazioni di contatto e supporto per EuroTrek.",
    introduction:
      "Siamo qui per aiutarti! Se hai domande su come funziona il servizio, hai riscontrato un problema tecnico o hai altre preoccupazioni, ti preghiamo di utilizzare le opzioni di supporto disponibili.",
    faqTitle: "Controlla prima le FAQ",
    faqDescription:
      "Molte risposte a domande comuni si possono trovare nella nostra sezione Domande Frequenti (FAQ).",
    goToFaq: "Vai alle FAQ",
    contactFormTitle: "Modulo di Contatto",
    contactFormDescription:
      "Il modo migliore per contattarci per la maggior parte delle questioni è inviare un messaggio tramite il nostro modulo di contatto.",
    goToContact: "Vai ai Contatti",
    phoneTitle: "Supporto Telefonico",
    phoneDescription:
      "Per questioni tecniche urgenti, puoi contattarci telefonicamente durante [ad es. 10:00 - 16:00] dal lunedì al venerdì.",
    phoneNumber: "Chiamaci: [000 000 000]", // Numero di telefono segnaposto mantenuto
    responseInfo:
      "Ci sforziamo di rispondere alle richieste inviate tramite il modulo di contatto entro 1-2 giorni lavorativi.",
  },
  // --- FINE DELLE SEZIONI MODIFICATE ---
};
