import { Description } from "@radix-ui/react-toast"; // Dieses Import scheint im Übersetzungsobjekt selbst unbenutzt zu sein, wird aber beibehalten, falls es anderswo benötigt wird.

export default {
  // Common - Allgemein
  common: {
    no_photos_data: "Keine Fotodaten verfügbar.",
    lastUpdated: "Zuletzt aktualisiert",
    placeholderContent:
      "Der Inhalt für diesen Abschnitt wird derzeit vorbereitet. Er wird bald aktualisiert.",
  },

  // Routes - Routen (URL-Slugs)
  routes: {
    // --- Hauptseiten (entsprechend Navbar und Sitemap) ---
    home: "", // Leer für den Root-Pfad in der Standardsprache (z.B. /de/)
    destinations: "reisen", // Oder "ziele", "destinationen"
    about: "ueber-uns", // "ueber-uns" statt "über-uns" für URL-Sicherheit
    contact: "kontakt",

    // --- Detailpfade (Basis für Parameter) ---
    destinationDetail: "reise", // z.B. /de/reise/berlin oder /de/reise/:id

    // --- Fußzeile und neue Infoseiten ---
    faq: "faq", // Bleibt oft international
    privacy: "datenschutz", // Oder "datenschutzerklaerung"
    terms: "nutzungsbedingungen",
    sitemap: "sitemap", // Bleibt oft international
    accessibility: "barrierefreiheit", // Oder "zugaenglichkeit"
    cookiePolicy: "cookie-richtlinie",
    support: "hilfe", // Oder "support"
  },

  // Navbar - Navigation
  navbar: {
    home: "Startseite",
    destinations: "Reisen", // Oder "Ziele"
    about: "Über uns",
    contact: "Kontakt",
  },

  // Destinations - Reiseziele (UI-Texte)
  destinations: {
    exploreTitle: "Reisen entdecken",
    exploreDescription:
      "Durchstöbern Sie unsere Sammlung studentischer Reisefotos aus den schönsten Städten Europas.",
    allDestinations: "Alle Reisen",
    lisbon: "Lissabon",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Neapel",
    prague: "Prag",
    loadMore: "Mehr laden",
    ariaLabel: "Reisekategorien",
  },

  // Destinations Data - Reisedaten (Namen & Länder)
  destinationsData: {
    lisbon: { name: "Lissabon", country: "Portugal" },
    paris: { name: "Paris", country: "Frankreich" },
    berlin: { name: "Berlin", country: "Deutschland" },
    capri: { name: "Capri", country: "Italien" },
    naples: { name: "Neapel", country: "Italien" },
    prague: { name: "Prag", country: "Tschechische Republik" }, // Oder "Tschechien"
  },

  // Hero Slides - Haupt-Slider
  heroSlides: {
    "paris-hero": {
      location: "Paris, Frankreich",
      description:
        "Die Stadt der Lichter aus der Sicht eines Studenten - den Charme der Pariser Architektur und Kultur einfangen.",
    },
    "rome-hero": {
      // Hinweis: Ursprünglicher Ort war Neapel
      location: "Neapel, Italien",
      description:
        "Neapel ist ein Ort, an dem das Leben im Rhythmus von Espresso, Gesprächen auf der Straße und dem Duft frisch gebackener Pizza pulsiert, der durch die warme mediterrane Luft weht.",
    },
    "lisbon-hero": {
      location: "Lissabon, Portugal",
      description:
        "Lissabon ist eine Stadt voller Licht, in der sich gepflasterte Gassen zwischen bunten Häusern schlängeln und das Leben ruhig im Rhythmus von Fado und dem Aroma frischer 'Pasteis de Nata' fließt.",
    },
    "frankfurt-hero": {
      location: "Frankfurt am Main, Deutschland",
      // Ursprüngliche Beschreibung beibehalten wie gewünscht
      description:
        "Lissabon ist eine Stadt voller Licht, in der sich gepflasterte Gassen zwischen bunten Häusern schlängeln und das Leben ruhig im Rhythmus von Fado und dem Aroma frischer 'Pasteis de Nata' fließt.",
    },
  },

  // Photos - Fotos
  photos: {
    view: "Foto {{title}} ansehen",
    noPhotos: "Für diese Reise sind noch keine Fotos verfügbar.",
    "paris-sunset": {
      title: "Sonnenuntergang in Paris",
      location: "Paris, Frankreich",
      alt: "Eiffelturm bei Sonnenuntergang in Paris",
    },
    "lisbon-tram": {
      title: "Blick auf das Nationaltheater D. Maria II",
      location: "Lissabon, Portugal",
      description:
        "Das historische Theatergebäude ist einer der renommiertesten Säle Portugals und befindet sich am Rossio-Platz im Stadtzentrum.",
    },
    "lisbon-belem": {
      title: "Dächer der Altstadt",
      location: "Lissabon, Portugal",
      description:
        "Lissabons ältester Stadtteil ist Alfama, erbaut am Hang über dem Tejo während der Maurenherrschaft. Hier spürt man das Flair des mittelalterlichen Lissabons.",
    },
    "lisbon-bele": {
      title: "Turm von Belém",
      location: "Lissabon, Portugal",
      description:
        "Mittelalterliche Festung mit Blick auf die Mündung des Tejo",
    },
    "boca do inferno": {
      title: "Höllenschlund (Boca do Inferno)",
      location: "Cascais, Portugal",
      description:
        "Eine Schlucht in den Küstenklippen nahe der portugiesischen Stadt Cascais",
    },
    "capri-marina": {
      title: "Strand Luigia bei den Faraglioni",
      location: "Capri, Italien",
      description:
        "Im Tyrrhenischen Meer gelegen, belegt er den 19. Platz unter den 118 Stränden der neapolitanischen Region.",
    },
    "paris-hero": {
      // Duplizierter Schlüssel wie im Original pl.ts
      title: "Versailles – Perle des Barock",
      location: "Paris, Frankreich",
      alt: "Schloss Versailles bei Paris",
      description:
        "Versailles ist ein Symbol der französischen absoluten Monarchie und eines der prächtigsten Beispiele barocker Architektur weltweit.",
    },
    "naples-view": {
      title: "Straße am Tyrrhenischen Meer",
      location: "Neapel, Italien",
      alt: "Straße am Fuße des Berges",
      description: "Eine malerische Route entlang der Küste.",
    },
    "naples-mummy": {
      title: "Gipsabdruck eines Opfers des Vesuvs",
      location: "Pompeji, Italien",
      alt: "Opfer des Vulkanausbruchs",
      description:
        "Die Gipsabdrücke der Körper wurden 1863 vom Archäologen Giuseppe Fiorelli entdeckt. 'Bis heute wurden sie aus ethischen Gründen und aus Respekt vor menschlichen Überresten nicht inventarisiert.'",
    },
    "naples-stadion": {
      title: "Amphitheater von Pompeji",
      location: "Pompeji, Italien",
      alt: "Teil des Stadions in der antiken Stadt Pompeji",
      description:
        "Das Amphitheater von Pompeji – ein antikes römisches Amphitheater in Pompeji. Es ist das älteste erhaltene Bauwerk seiner Art.",
    },
    "naples-museum": {
      title: "Kleines pergamenisches Geschenk",
      location: "Neapel, Italien",
      alt: "Archäologisches Nationalmuseum Neapel",
      description:
        "Eine Kopie aus dem 2. Jahrhundert n. Chr. nach einem griechischen Original aus dem 2. Jahrhundert v. Chr.",
    },
    "capri-taras": {
      title: "Capri bei Marina Piccola",
      location: "Capri, Italien",
      alt: "Terrassen auf Capri",
      description:
        "Eine charmante Dachterrasse mit Kakteen. Die meisten Dächer auf Capri sind flach. Und wie oben zu sehen, sind auf einigen dieser Gebäude Terrassen angelegt.",
    },
    "capri-street": {
      title: "Einkaufsstraße auf Capri",
      location: "Capri, Italien",
      alt: "Geschäfte auf Capri",
      description:
        "Capri zeichnet sich durch charmante Einkaufsstraßen aus, die an der Piazzetta beginnen und durch die Via Camerelle und Via Le Botteghe führen.",
    },
    "capri-port": {
      title: "Hafen in Marina Grande",
      location: "Capri, Italien",
      alt: "Angelegte Yachten",
      description:
        "Gepäckträger der Haupthotels warten darauf, Ihr Gepäck auf einem Wagen mitzunehmen, und Sie können mit der Standseilbahn fahren oder ein Cabrio nehmen, da es auf Capri keinen Autoverkehr gibt.",
    },
    "lisbon-hero": {
      // Duplizierter Schlüssel wie im Original pl.ts
      title: "Hieronymuskloster",
      location: "Lissabon, Portugal",
      alt: "Hieronymuskloster in Belém",
      description:
        "Erbaut in der ersten Hälfte des 16. Jahrhunderts, gilt es als Perle und Quintessenz des manuelinischen Stils, einer spezifisch portugiesischen Verbindung von Gotik und Renaissance.",
    },
    "paris-eiffel": {
      title: "Eiffelturm",
      location: "Paris, Frankreich",
      alt: "Abendliche Beleuchtung des Eiffelturms in Paris",
      description:
        "Das bekannteste architektonische Wahrzeichen von Paris, gilt als Symbol der Stadt und manchmal ganz Frankreichs.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "Paris, Frankreich",
      alt: "Ehemaliger Königspalast in Paris",
      description:
        "Eines der größten Museen der Welt, ist auch die meistbesuchte Einrichtung dieser Art weltweit.",
    },
    "paris-panteon": {
      title: "Blick auf das Panthéon vom Place du Panthéon",
      location: "Paris, Frankreich",
      alt: "Panthéon vom Place du Panthéon",
      description:
        "Das Panthéon – ein Gebäude im Quartier Latin in Paris, Ende des 18. Jahrhunderts als Kirche zu Ehren der Heiligen Genoveva errichtet.",
    },
    "paris-snails": {
      title: "Berühmte französische Schnecken",
      location: "Paris, Frankreich",
      alt: "Schneckengericht",
      description:
        "Es ist schwer, sich die Küche an der Seine, und besonders an der Rhône, ohne eine köstliche Schnecke auf dem Teller vorzustellen.",
    },
    "paris-1": {
      alt: "Blick auf die Nationalbibliothek im Frühling",
      title:
        "Nationalbibliothek von Frankreich, Standort Richelieu, Ovaler Saal",
      location: "Paris, Frankreich",
    },
    "paris-2": {
      alt: "Versailles, Tempel der Liebe",
      title: "Versailles, Tempel der Liebe",
      location: "Versailles, Frankreich",
    },
    "paris-3": {
      alt: "Französischer Garten",
      title: "Prächtige historische Gärten",
      location: "Paris, Frankreich",
    },
    "paris-4": {
      alt: "Tanzender Faun",
      title: "Römischer mythischer Gott des Waldes und der verwunschenen Haine",
      location: "Paris, Frankreich",
    },
    "frankfurt-hero": {
      // Duplizierter Schlüssel wie im Original pl.ts
      title: "Alte Oper, Frankfurt",
      location: "Frankfurt am Main, Deutschland",
      alt: "Alte Oper, Frankfurt",
      description:
        "Über einem malerischen Platz mit einem eleganten Brunnen erhebt sich die Oper mit ihrer Fassade im Renaissancestil.",
    },
    "berlin-gate": {
      title: "Brandenburger Tor",
      location: "Berlin, Deutschland",
      alt: "Brandenburger Tor",
      description:
        "Das Brandenburger Tor als Symbol für Frieden und Freiheit seit dem 3. Oktober 1990, dem Jahrestag der deutschen Wiedervereinigung.",
    },
    "berlin-museum": {
      title: "Altes Museum",
      location: "Berlin, Deutschland",
      alt: "Altes Museum",
      description:
        "Das Museum wurde gebaut, um die Sammlungen antiker Kunst der breiten Öffentlichkeit zugänglich zu machen, im Auftrag des preußischen Königs Friedrich Wilhelm III.",
    },
    "berlin-victory-column": {
      title: "Siegessäule",
      location: "Berlin, Deutschland",
      alt: "Siegessäule",
      description:
        "Eine Säule im Großen Tiergarten in Berlin zum Gedenken an den Sieg Preußens über Dänemark im Deutsch-Dänischen Krieg von 1864.",
    },
    "berlin-music": {
      title: "Beethoven-Haydn-Mozart-Denkmal",
      location: "Berlin, Deutschland",
      alt: "Denkmal für die drei Musikgenies",
      description:
        "Ein Freiluftdenkmal für die klassischen Komponisten Ludwig van Beethoven, Joseph Haydn und Wolfgang Amadeus Mozart aus dem Jahr 1904.",
    },
    "prague-bridge": {
      title: "Blick auf die Moldau in Prag",
      location: "Prag, Tschechische Republik",
      alt: "Die Moldau in Prag",
      description:
        "Ganz Prag spiegelt sich in der Moldau und schmeichelt ihr wie einem Zauberspiegel.",
    },
    "prague-wit": {
      title: "Domschatz von St. Veit",
      location: "Prag, Tschechische Republik",
      alt: "Domschatz in Prag",
      description: "Artefakte im Domschatz des Veitsdoms auf der Prager Burg.",
    },
    "prague-dance": {
      title: "Tanzendes Haus",
      location: "Prag, Tschechische Republik",
      alt: "Ginger und Fred",
      description:
        "Ein avantgardistisches Gebäude des Architektenpaares Vlado Milunić und Frank Gehry im dekonstruktivistischen Stil.",
    },
    "prague-kafka": {
      title: "Drehbarer Kopf von Franz Kafka",
      location: "Prag, Tschechische Republik",
      alt: "Kopf von Franz Kafka",
      description:
        "David Černý entwarf dieses umstrittene Kunstwerk für das Geschäfts- und Bürogebäude 'Quadrio' in der Národní třída.",
    },
  },

  // About Section - Über uns
  about: {
    title: "Über EuroTrek",
    description1:
      "EuroTrek ist ein kollektives Fototagebuch, erstellt von Universitätsstudenten, die in Polen studieren. Unsere Mission ist es, die Schönheit, Kultur und Erfahrungen studentischer Reisen durch authentische Fotografie zu präsentieren.",
    description2:
      "Diese Plattform dient sowohl als Inspiration für zukünftige studentische Reisende als auch als Erinnerungsbuch für diejenigen, die ihre europäischen Abenteuer bereits begonnen haben. Alle Fotos wurden von Studenten aufgenommen und bieten eine frische, jugendliche Perspektive auf Europa.",
    pageTitle: "Über unsere Reise",
    pageDescription1:
      "EuroTrek entstand aus einer Leidenschaft für Reisefotografie und dem Wunsch, die einzigartigen Erfahrungen von studentischen Entdeckern in den lebhaftesten Städten Europas festzuhalten.",
    pageDescription2:
      "Was als kleine Fotogruppe unter Kommilitonen in Polen begann, hat sich zu einer Plattform entwickelt, die studentische Fotografen aus verschiedenen Ländern, mit unterschiedlichem Hintergrund und verschiedenen Studienrichtungen verbindet, die alle die gemeinsame Liebe zum Entdecken und visuellen Erzählen teilen.",
    pageDescription3:
      "Unsere Mitwirkenden sind Studenten wie Sie, die ihr Studium mit Abenteuern auf dem ganzen Kontinent verbinden und dabei authentische Momente festhalten.",
    mission: {
      title: "Unsere Mission",
      description:
        "Studentisches Reisen durch authentisches visuelles Storytelling inspirieren und eine unterstützende Gemeinschaft für junge Fotografen schaffen, die Europa erkunden.",
    },
    team: {
      title: "Das Studentenkollektiv",
      description:
        "Unser Team besteht ausschließlich aus studentischen Fotografen, Autoren und Webentwicklern von Universitäten weltweit. Jeder Mitwirkende bringt seine einzigartige Perspektive und Erfahrung in die Plattform ein.",
    },
    feature1: {
      title: "Studentische Fotografen",
      description: "Fotos von internationalen Studenten aus aller Welt",
    },
    feature2: {
      title: "Authentische Erlebnisse",
      description: "Echte Reisemomente jenseits der typischen Touristenorte",
    },
    feature3: {
      title: "Viele Reisen",
      description: "Eine wachsende Sammlung von Fotos aus ganz Europa",
    },
    image1: {
      title: "Lissabon",
      description: "Hieronymuskloster.",
    },
    image2: {
      title: "Deutschland & Frankreich",
      description:
        "Eine unvergessliche Reise durch Deutschland und Frankreich.",
    },
    image3: {
      title: "Neapel",
      description: "Die atemberaubenden Landschaften Neapels.",
    },
  },

  // Featured Section - Empfohlen
  featured: {
    title: "Empfohlen: Frühling in Paris",
    description1:
      "Paris im Frühling ist ein Traum für studentische Fotografen. Die Stadt erwacht mit Kirschblüten, Caféterrassen und dem perfekten Licht, um ikonische Wahrzeichen einzufangen.",
    description2:
      "Unsere empfohlene Sammlung zeigt den Zauber von Paris durch die Augen polnischer Studenten, die ihre Studienpause in der Stadt der Lichter verbracht haben.",
    exploreLink: "Entdecken Sie die Paris-Sammlung",
    image1Alt: "Eiffelturm im Frühling",
    image2Alt: "Die Seine in Paris",
    image3Alt: "Pariser Caféterrasse",
    image4Alt: "Louvre-Museum",
  },

  // Contact Section - Kontakt
  contact: {
    title: "Kontaktieren Sie uns",
    description:
      "Haben Sie Fragen oder möchten Sie Ihre eigenen studentischen Reisefotos einreichen? Wir freuen uns, von Ihnen zu hören!",
    pageTitle: "Kontakt aufnehmen",
    getInTouch: "Wie können wir Ihnen helfen?",
    getInTouchDescription:
      "Egal, ob Sie Ihre Reisefotos einreichen möchten, Fragen zu unserer Plattform haben oder einfach nur Hallo sagen wollen, wir sind hier, um zu helfen.",
    email: {
      title: "Schreiben Sie uns eine E-Mail",
      description: "Für allgemeine Anfragen und Fotoeinreichungen",
    },
    location: {
      title: "Unser Standort",
      description: "Besuchen Sie unser Büro des Studentenkollektivs",
      address: "University Creative Hub, European Campus, Amsterdam",
    },
    phone: {
      title: "Rufen Sie uns an",
      description: "Erreichbar werktags 10:00 - 18:00 Uhr MEZ",
    },
    form: {
      name: "Ihr Name",
      namePlaceholder: "Geben Sie Ihren Namen ein",
      nameError: "Name ist erforderlich",
      email: "Ihre E-Mail",
      emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
      emailError: "Eine gültige E-Mail-Adresse ist erforderlich",
      subject: "Betreff",
      subjectPlaceholder: "Worüber möchten Sie sprechen?",
      subjectError: "Betreff ist erforderlich",
      message: "Nachricht",
      messagePlaceholder: "Geben Sie hier Ihre Nachricht ein...",
      messageError: "Nachricht muss mindestens 10 Zeichen lang sein",
      send: "Nachricht senden",
      sending: "Senden...",
      successTitle: "Nachricht gesendet!",
      successMessage:
        "Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns bald bei Ihnen melden.",
    },
  },

  // Footer - Fußzeile
  footer: {
    description:
      "Eine visuelle Reise durch Europa, festgehalten von Studenten, die die schönsten Ecken des Kontinents erkunden.",
    quickLinks: "Schnelllinks",
    resources: "Ressourcen",
    parisCollection: "Paris-Sammlung",
    submitPhotos: "Fotos einreichen",
    privacyPolicy: "Datenschutzerklärung",
    termsOfUse: "Nutzungsbedingungen",
    accessibility: "Barrierefreiheit",
    cookiePolicy: "Cookie-Richtlinie",
    cookieSettings: "Cookie-Einstellungen",
    faq: "Häufig gestellte Fragen (FAQ)",
    sitemap: "Sitemap",
    support: "Hilfe & Support",
    copyright: "Alle Rechte vorbehalten.",
    tagline: "Mit ❤ von Studenten, für Studenten gemacht.",
    instagram: "Folgen Sie uns auf Instagram",
    twitter: "Folgen Sie uns auf Twitter",
    facebook: "Folgen Sie uns auf Facebook",
    pinterest: "Folgen Sie uns auf Pinterest",
    linkedin: "Folgen Sie uns auf LinkedIn",
    messenger: "Kontaktieren Sie uns über Messenger",
  },

  // Slider Controls - Slider-Steuerung
  slider: {
    previous: "Vorheriges Dia",
    next: "Nächstes Dia",
    goToSlide: "Gehe zu Dia {{index}}",
  },

  // Lightbox - Leuchtkasten (Bildbetrachter)
  lightbox: {
    close: "Betrachter schließen",
    previous: "Vorheriges Bild",
    next: "Nächstes Bild",
  },

  // Theme Toggle - Motiv-Umschalter
  theme: {
    toggleLight: "Zum hellen Modus wechseln",
    toggleDark: "Zum dunklen Modus wechseln",
  },

  // Language - Sprache
  language: {
    changeLanguage: "Sprache ändern",
  },

  // Home - Startseite
  home: {
    heroAriaLabel: "Empfohlene Reiseziele",
  },

  // --- Informationsseiten ---
  privacyPolicy: {
    title: "Datenschutzerklärung",
    metaDescription:
      "Lesen Sie die Datenschutzerklärung des EuroTrek-Dienstes.",
    introduction:
      "Willkommen zur Datenschutzerklärung von EuroTrek. Ihre Privatsphäre ist uns wichtig, und wir verpflichten uns, Ihre personenbezogenen Daten gemäß den geltenden Vorschriften, einschließlich der DSGVO, zu schützen.",
    section1Title: "1. Welche Informationen sammeln wir?",
    section1Content:
      "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen (z.B. über das Kontaktformular: Name, E-Mail-Adresse, Nachrichteninhalt) und Daten, die automatisch bei der Nutzung des Dienstes erfasst werden (z.B. IP-Adresse, Browsertyp, Geräteinformationen, Aktivitätsdaten im Dienst mittels Cookies – siehe Cookie-Richtlinie).",
    section2Title: "2. Wie verwenden wir Ihre Informationen?",
    section2Content:
      "Wir verwenden Ihre Daten zur Bereitstellung und Verbesserung unserer Dienste, zur Kommunikation mit Ihnen (Beantwortung von Anfragen), zur Analyse des Website-Verkehrs, zur Gewährleistung der Dienstsicherheit und zur Erfüllung rechtlicher Verpflichtungen.",
    contactTitle: "Kontakt bezüglich Datenschutz",
    contactContent:
      "Für Angelegenheiten bezüglich der Verarbeitung Ihrer personenbezogenen Daten oder der Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter: [Ihre-Email@beispiel.de].", // Ersetzen Sie dies durch die tatsächliche E-Mail
  },
  termsOfUse: {
    title: "Nutzungsbedingungen",
    metaDescription:
      "Lesen Sie die Nutzungsbedingungen für den EuroTrek-Dienst.",
    introduction:
      "Diese Nutzungsbedingungen regeln die Nutzung des EuroTrek-Webdienstes. Durch die Nutzung des Dienstes akzeptieren Sie die folgenden Bestimmungen.",
    section1Title: "1. Allgemeine Regeln und Akzeptanz der Bedingungen",
    section1Content:
      "Der EuroTrek-Dienst ist eine Plattform zur Präsentation von Reisefotografie. Die Nutzer sind verpflichtet, den Dienst gemäß Gesetz und guten Sitten zu nutzen. Die Veröffentlichung von rechtswidrigen, beleidigenden Inhalten oder Inhalten, die Rechte Dritter verletzen, ist untersagt.",
    contactTitle: "Kontakt bezüglich der Nutzungsbedingungen",
    contactContent:
      "Fragen zu diesen Nutzungsbedingungen richten Sie bitte an: [Ihre-Email@beispiel.de].", // Ersetzen Sie dies durch die tatsächliche E-Mail
  },
  accessibility: {
    title: "Erklärung zur Barrierefreiheit",
    metaDescription:
      "Erfahren Sie mehr über unser Engagement für digitale Barrierefreiheit bei EuroTrek.",
    introduction:
      "EuroTrek ist bestrebt, die digitale Barrierefreiheit des Dienstes für ein möglichst breites Nutzerspektrum, einschließlich Menschen mit Behinderungen, zu gewährleisten. Wir arbeiten kontinuierlich an der Verbesserung der Benutzeroberfläche und der Anwendung relevanter Barrierefreiheitsstandards wie WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Unsere Bemühungen um Barrierefreiheit",
    section1Content:
      "Wir bemühen uns um die Implementierung von Lösungen wie: Verwendung von semantischem HTML-Code, Gewährleistung der Tastaturnavigation, angemessener Farbkontrast, alternative Beschreibungen für Bilder und Testen des Dienstes mit verschiedenen unterstützenden Technologien.",
    contactTitle: "Feedback und Kontaktinformationen",
    contactContent:
      "Wenn Sie auf Barrierefreiheitsbarrieren in unserem Dienst stoßen, kontaktieren Sie uns bitte. Ihr Feedback ist für uns wertvoll. Kontaktieren Sie uns unter: [Ihre-Email@beispiel.de].", // Ersetzen Sie dies durch die tatsächliche E-Mail
  },
  cookiePolicy: {
    title: "Cookie-Richtlinie",
    metaDescription: "Erfahren Sie, wie EuroTrek Cookies verwendet.",
    introduction:
      "Unser Dienst verwendet Cookies, um das ordnungsgemäße Funktionieren der Website zu gewährleisten, Ihre Erfahrung zu verbessern sowie zu Analyse- und Marketingzwecken (mit Ihrer Zustimmung).",
    section1Title: "1. Was sind Cookies?",
    section1Content:
      "Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone) gespeichert werden, wenn Sie Websites besuchen. Sie ermöglichen es der Website, sich Ihre Aktionen und Präferenzen für einen bestimmten Zeitraum zu 'merken'.",
    section2Title: "2. Welche Arten von Cookies verwenden wir?",
    section2Content: "Wir verwenden verschiedene Arten von Cookies, darunter:",
    type1:
      "Notwendige Cookies: Erforderlich für die grundlegende Funktion des Dienstes (z.B. Benutzersitzung). Sie erfordern keine Zustimmung.",
    type2:
      "Analytische Cookies: Helfen uns zu verstehen, wie Benutzer mit der Website interagieren (z.B. Google Analytics). Sie erfordern Ihre Zustimmung.",
    type3:
      "Funktionale Cookies: Ermöglichen das Speichern Ihrer Auswahl und Präferenzen (z.B. Sprache). Können Zustimmung erfordern.",
    type4:
      "Marketing-Cookies: Werden zur Anzeige personalisierter Werbung verwendet (z.B. Facebook Pixel). Sie erfordern Ihre Zustimmung.",
    section3Title: "3. Verwaltung von Cookies",
    section3Content:
      "Sie können Ihre Cookie-Einwilligungen jederzeit über das auf unserer Website verfügbare Einwilligungsmanagement-Tool verwalten (klicken Sie auf die Schaltfläche 'Cookie-Einstellungen'). Sie können die Cookie-Einstellungen auch in Ihrem Webbrowser ändern.",
    settingsError:
      "Cookie-Einstellungen konnten nicht geöffnet werden. Kontaktieren Sie den Support oder versuchen Sie, die Einstellungen in Ihrem Browser zu verwalten.",
    settingsInfoPlaceholder:
      "Durch Klicken auf die Schaltfläche wird das Verwaltungspanel für Cookie-Einstellungen geöffnet.",
    contactTitle: "Kontakt bezüglich der Cookie-Richtlinie",
    contactContent:
      "Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns unter: [Ihre-Email@beispiel.de].", // Ersetzen Sie dies durch die tatsächliche E-Mail
  },
  faq: {
    title: "Häufig gestellte Fragen (FAQ)",
    metaDescription:
      "Finden Sie Antworten auf die häufigsten Fragen zu EuroTrek.",
    q1: "Frage 1: Wie kann ich meine Fotos einreichen?",
    a1: "Derzeit sammeln wir Fotos von befreundeten Studenten. Wenn Sie an einer Zusammenarbeit interessiert sind, kontaktieren Sie uns bitte über das Kontaktformular und beschreiben Sie kurz Ihre Reisen und Ihr Portfolio.",
    q2: "Frage 2: Ist die Nutzung des Dienstes kostenlos?",
    a2: "Ja, das Durchsuchen von Fotos und Inhalten im EuroTrek-Dienst ist für alle Benutzer völlig kostenlos.",
    q3: "Frage 3: Wer besitzt das Urheberrecht an den Fotos?",
    a3: "Das Urheberrecht an den Fotos liegt bei den studentischen Autoren. EuroTrek besitzt eine Lizenz zur Veröffentlichung im Dienst. Details sind im Vertrag mit dem Autor und in unseren Nutzungsbedingungen festgelegt.",
    stillHaveQuestions: "Haben Sie weitere Fragen?",
    contactUs: "Kontaktieren Sie uns",
  },
  sitemap: {
    title: "Sitemap",
    metaDescription: "Durchsuchen Sie die Struktur der EuroTrek-Website.",
    introduction:
      "Unten finden Sie eine Liste der Hauptbereiche und Seiten, die im EuroTrek-Dienst verfügbar sind, um Ihnen die Navigation zu erleichtern.",
  },
  support: {
    title: "Hilfe & Support",
    metaDescription:
      "Benötigen Sie Hilfe? Finden Sie Kontaktinformationen und Support für EuroTrek.",
    introduction:
      "Wir sind hier, um zu helfen! Wenn Sie Fragen zur Funktionsweise des Dienstes haben, auf ein technisches Problem gestoßen sind oder andere Bedenken haben, nutzen Sie bitte die verfügbaren Support-Optionen.",
    faqTitle: "Überprüfen Sie zuerst die FAQ",
    faqDescription:
      "Viele Antworten auf häufige Fragen finden Sie in unserem Abschnitt Häufig gestellte Fragen (FAQ).",
    goToFaq: "Gehe zu FAQ",
    contactFormTitle: "Kontaktformular",
    contactFormDescription:
      "Der beste Weg, uns für die meisten Anfragen zu kontaktieren, ist das Senden einer Nachricht über unser Kontaktformular.",
    goToContact: "Gehe zum Kontakt",
    phoneTitle: "Telefonischer Support",
    phoneDescription:
      "In dringenden technischen Angelegenheiten können Sie uns telefonisch während [z.B. 10:00 - 16:00 Uhr] von Montag bis Freitag kontaktieren.",
    phoneNumber: "Anrufen: [Ihre Telefonnummer]", // Ersetzen Sie dies durch die tatsächliche Telefonnummer
    responseInfo:
      "Wir bemühen uns, auf Anfragen, die über das Kontaktformular gesendet werden, innerhalb von 1-2 Werktagen zu antworten.",
  },
};
