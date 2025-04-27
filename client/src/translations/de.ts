export default {
  // Common
  common: {
    no_photos_data: "Keine Fotodaten.",
    lastUpdated: "Zuletzt aktualisiert",
    placeholderContent:
      "Der Inhalt dieses Abschnitts befindet sich in Vorbereitung. Er wird in Kürze ergänzt.",
    no_alt_text: "Foto",
    no_title: "Ohne Titel",
    no_location: "Unbekannter Ort",
    photo_not_found: "Foto konnte nicht geladen werden",
  },

  routes: {
    // German routes - verify if these slugs are appropriate
    home: "",
    destinations: "reisen", // Example
    about: "ueber-uns", // Example
    contact: "kontakt", // Example
    destinationDetail: "reise", // Example
    faq: "faq",
    privacy: "datenschutz", // Example
    terms: "nutzungsbedingungen", // Example
    sitemap: "sitemap",
    accessibility: "barrierefreiheit", // Example
    cookiePolicy: "cookie-richtlinie", // Example
    support: "hilfe", // Example
  },

  // Navbar
  navbar: {
    home: "Startseite",
    destinations: "Reisen",
    about: "Über uns",
    contact: "Kontakt",
    mainNavLabel: "Hauptnavigation",
    goToHome: "Zur Startseite gehen",
    toggleMenu: "Menü öffnen/schließen",
    mobileMenuTitle: "Menü",
  },
  // Destinations List Page
  destinationsListPage: {
    title: "Unsere Reisen",
    metaDescription:
      "Entdecken Sie alle fantastischen Orte, die wir bei EuroTrek anbieten.",
    header: "Entdecken Sie Unsere Reisen",
  },
  // Destinations general terms
  destinations: {
    exploreTitle: "Reisen entdecken",
    exploreDescription:
      "Durchstöbern Sie unsere Sammlung von Studentenreisefotos aus den schönsten Städten Europas.",
    lisbon: "Lissabon",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Neapel",
    prague: "Prag",
    loadMore: "Mehr laden",
    ariaLabel: "Reisekategorien",
    noMorePhotos: "Für diese Kategorie gibt es keine weiteren Fotos zum Laden",
  },
  // Specific destination data
  destinationsData: {
    lisbon: { name: "Lissabon", country: "Portugal" },
    paris: { name: "Paris", country: "Frankreich" },
    berlin: { name: "Berlin", country: "Deutschland" },
    capri: { name: "Capri", country: "Italien" },
    naples: {
      name: "Neapel",
      country: "Italien",
      description:
        "Neapel, eine pulsierende Stadt in Süditalien, gelegen am Golf von Neapel. Berühmt für seine reiche Geschichte, Kunst, Kultur, Architektur, Musik und Gastronomie.", // Machine translation
    },
    prague: { name: "Prag", country: "Tschechische Republik" },
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      title: "Versailles - Perle des Barock",
      alt: "Schloss Versailles bei Paris",
      location: "Versailles, Frankreich",
      description:
        "Die Stadt der Lichter aus der Sicht eines Studenten - die Magie der Pariser Architektur und Kultur einfangen.", // Machine translation
    },
    "rome-hero": {
      title: "Straße über dem Tyrrhenischen Meer",
      alt: "Blick auf die Küste und den Vesuv in Neapel",
      location: "Neapel, Italien",
      description:
        "Neapel ist ein Ort, an dem das Leben im Rhythmus von Espresso, Gesprächen auf der Straße und dem Duft frisch gebackener Pizza pulsiert, der in der warmen mediterranen Luft liegt.", // Machine translation
    },
    "lisbon-hero": {
      title: "Hieronymuskloster",
      alt: "Hieronymuskloster in Belém, Lissabon",
      location: "Lissabon, Portugal",
      description:
        "Lissabon ist eine Stadt voller Licht, in der sich gepflasterte Straßen zwischen bunten Häusern schlängeln und das Leben ruhig im Rhythmus von Fado und dem Duft frischer 'pasteis de nata' fließt.", // Machine translation
    },
    "frankfurt-hero": {
      title: "Alte Oper",
      alt: "Gebäude der Alten Oper in Frankfurt",
      location: "Frankfurt am Main, Deutschland",
      description:
        "Entdecken Sie Frankfurt am Main, wo die glänzenden Wolkenkratzer des Bankenviertels einen außergewöhnlichen Kontrast zum historischen Opernplatz bilden.", // Machine translation
    },
  },
  // Photos
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
      alt: "Blick auf den Rossio-Platz in Lissabon",
    },
    "lisbon-belem": {
      title: "Dächer der Altstadt",
      location: "Lissabon, Portugal",
      description:
        "Der älteste Stadtteil Lissabons ist Alfama, erbaut am Hang über dem Tejo zur Zeit der Maurenherrschaft. Hier spürt man die Atmosphäre des mittelalterlichen Lissabons.",
      alt: "Blick auf die roten Dächer von Alfama in Lissabon",
    },
    "lisbon-bele": {
      title: "Turm von Belém",
      location: "Lissabon, Portugal",
      description:
        "Mittelalterliche Festung mit Blick auf die Mündung des Tejo",
      alt: "Turm von Belém am Tejo in Lissabon",
    },
    "boca do inferno": {
      title: "Höllenschlund",
      location: "Cascais, Portugal",
      description:
        "Ein Abgrund in den Küstenklippen nahe der portugiesischen Stadt Cascais",
      alt: "Felsformation Höllenschlund in Cascais",
    },
    "capri-marina": {
      title: "Strand Luigia bei den Faraglioni",
      location: "Capri, Italien",
      description:
        "Im Tyrrhenischen Meer gelegen, belegt er Platz 19 unter den 118 Stränden der Region Neapel.",
      alt: "Strand Luigia und Faraglioni-Felsen auf Capri",
    },
    "paris-hero": {
      title: "Versailles – Perle des Barock",
      location: "Versailles, Frankreich",
      alt: "Schloss Versailles und Gärten",
      description:
        "Versailles ist das Symbol der französischen absoluten Monarchie und eines der prächtigsten Beispiele barocker Architektur weltweit.",
    },
    "naples-view": {
      title: "Straße über dem Tyrrhenischen Meer",
      location: "Neapel, Italien",
      alt: "Straße am Fuße des Vesuvs",
      description: "Malerische Route entlang der Küste.",
    },
    "naples-mummy": {
      title: "Gipsabdruck eines Vesuv-Opfers",
      location: "Pompeji, Italien",
      alt: "Gipsabdruck des Körpers eines Opfers des Vesuv-Ausbruchs",
      description:
        "Die Körperabdrücke wurden 1863 vom Archäologen Giuseppe Fiorelli entdeckt. „Bis heute wurden sie aus ethischen Gründen und wegen der Gefühle, mit denen menschliche Überreste stets behandelt wurden, nicht inventarisiert.“",
    },
    "naples-stadion": {
      title: "Amphitheater in Pompeji",
      location: "Pompeji, Italien",
      alt: "Ruinen des Amphitheaters in der antiken Stadt Pompeji",
      description:
        "Das Amphitheater in Pompeji – ein antikes römisches Amphitheater in Pompeji. Es ist das älteste erhaltene Bauwerk dieser Art.",
    },
    "naples-museum": {
      title: "Kleines Pergamon-Geschenk", // Oder "Sterbender Gallier"
      location: "Neapel, Italien",
      alt: "Skulptur 'Sterbender Gallier' im Archäologischen Nationalmuseum Neapel",
      description:
        "Kopie aus dem 2. Jh. n. Chr. nach einem griechischen Original aus dem 2. Jh. v. Chr.",
    },
    "capri-taras": {
      title: "Capri nahe Marina Piccola",
      location: "Capri, Italien",
      alt: "Aussichtsterrasse mit Kakteen auf Capri",
      description:
        "Eine charmante Dachterrasse mit Kakteen. Die meisten Dächer von Gebäuden auf Capri sind flach. Und wie oben zu sehen ist, sind auf einigen dieser Gebäude Terrassen angelegt.",
    },
    "capri-street": {
      title: "Einkaufsstraße in Capri",
      location: "Capri, Italien",
      alt: "Enge Einkaufsstraße mit Geschäften in Capri",
      description:
        "Capri zeichnet sich durch charmante Einkaufsstraßen aus, die an der Piazzetta beginnen und durch die Via Camerelle und Via Le Botteghe führen.",
    },
    "capri-port": {
      title: "Hafen in Marina Grande",
      location: "Capri, Italien",
      alt: "Boote und Yachten im Hafen Marina Grande auf Capri",
      description:
        "Gepäckträger der Haupthotels warten darauf, Gepäck auf einem Karren mitzunehmen, und Sie können mit der Standseilbahn oder einem Cabriolet fahren, da es auf Capri keinen Autoverkehr gibt.",
    },
    "lisbon-hero": {
      title: "Hieronymuskloster",
      location: "Lissabon, Portugal",
      alt: "Fassade des Hieronymusklosters in Belém",
      description:
        "Erbaut in der ersten Hälfte des 16. Jahrhunderts, gilt es als Perle und Quintessenz des manuelinischen Stils, einer spezifisch portugiesischen Verbindung von Gotik und Renaissance.",
    },
    "paris-eiffel": {
      title: "Eiffelturm",
      location: "Paris, Frankreich",
      alt: "Abendliche Beleuchtung des Eiffelturms vor dem Himmel",
      description:
        "Das bekannteste architektonische Wahrzeichen von Paris, gilt als Symbol dieser Stadt und manchmal ganz Frankreichs.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "Paris, Frankreich",
      alt: "Glaspyramide vor dem Louvre-Palast in Paris",
      description:
        "Eines der größten Museen der Welt, es ist auch die meistbesuchte Einrichtung dieser Art weltweit.",
    },
    "paris-panteon": {
      title: "Blick auf das Pantheon vom Place du Pantheon",
      location: "Paris, Frankreich",
      alt: "Fassade des Pantheons in Paris vom Platz aus gesehen",
      description:
        "Pantheon – ein Gebäude im Quartier Latin in Paris, erbaut Ende des 18. Jahrhunderts als Kirche zu Ehren der Heiligen Genoveva.",
    },
    "paris-snails": {
      title: "Berühmte französische Schnecken",
      location: "Paris, Frankreich",
      alt: "Teller mit zubereiteten Weinbergschnecken nach Burgunder Art",
      description:
        "Es ist schwer, sich die Küche an der Seine, und besonders an der Rhône, ohne eine köstliche Schnecke auf dem Teller vorzustellen.",
    },
    "paris-1": {
      title: "Nationalbibliothek Frankreichs, Standort Richelieu, Ovaler Saal",
      location: "Paris, Frankreich",
      alt: "Innenansicht des Ovalen Saals der Nationalbibliothek Frankreichs",
    },
    "paris-2": {
      title: "Versailles, Tempel der Liebe",
      location: "Versailles, Frankreich",
      alt: "Tempel der Liebe in den Gärten von Versailles",
    },
    "paris-3": {
      title: "Prächtige historische Gärten",
      location: "Paris, Frankreich",
      alt: "Spazierweg in einem französischen Garten in Paris",
    },
    "paris-4": {
      title: "Tanzender Faun",
      location: "Paris, Frankreich",
      alt: "Skulptur des Tanzenden Fauns",
    },
    "frankfurt-hero": {
      title: "Alte Oper, Frankfurt",
      location: "Frankfurt am Main, Deutschland",
      alt: "Gebäude der Alten Oper in Frankfurt bei Nacht",
      description:
        "Über einem malerischen Platz mit einem eleganten Brunnen thront die Oper mit ihrer Fassade im Renaissancestil.",
    },
    "berlin-gate": {
      title: "Brandenburger Tor",
      location: "Berlin, Deutschland",
      alt: "Brandenburger Tor bei Nacht",
      description:
        "Das Brandenburger Tor als Symbol für Frieden und Freiheit seit dem 3. Oktober 1990, dem Tag der Deutschen Einheit.",
    },
    "berlin-museum": {
      title: "Altes Museum",
      location: "Berlin, Deutschland",
      alt: "Kolonnade vor dem Alten Museum in Berlin",
      description:
        "Das Museum wurde gebaut, um die Sammlungen antiker Kunst der breiten Öffentlichkeit zugänglich zu machen, auf Befehl des preußischen Königs Friedrich Wilhelm III.",
    },
    "berlin-victory-column": {
      title: "Siegessäule",
      location: "Berlin, Deutschland",
      alt: "Goldene Statue auf der Spitze der Siegessäule in Berlin",
      description:
        "Die Säule im Großen Tiergarten in Berlin erinnert an den Sieg Preußens über Dänemark im Deutsch-Dänischen Krieg von 1864.",
    },
    "berlin-music": {
      title: "Beethoven-Haydn-Mozart-Denkmal",
      location: "Berlin, Deutschland",
      alt: "Denkmal der drei Komponisten im Tiergarten",
      description:
        "Ein Freiluftdenkmal für die klassischen Komponisten Ludwig van Beethoven, Joseph Haydn und Wolfgang Amadeus Mozart aus dem Jahr 1904.",
    },
    "prague-bridge": {
      title: "Blick auf die Moldau in Prag",
      location: "Prag, Tschechische Republik",
      alt: "Karlsbrücke über die Moldau in Prag bei Dämmerung",
      description:
        "Ganz Prag spiegelt sich in der Moldau und kokettiert mit ihr wie mit einem magischen Spiegel.",
    },
    "prague-wit": {
      title: "Schatzkammer des St. Veitsdoms",
      location: "Prag, Tschechische Republik",
      alt: "Reliquiar in der Schatzkammer des St. Veitsdoms",
      description:
        "Artefakte in der Schatzkammer des St. Veitsdoms auf der Prager Burg.",
    },
    "prague-dance": {
      title: "Tanzendes Haus",
      location: "Prag, Tschechische Republik",
      alt: "Modernes Gebäude Tanzendes Haus in Prag",
      description:
        "Ein avantgardistisches Gebäude, entworfen vom Architektenpaar Vlado Milunić und Frank Gehry im dekonstruktivistischen Stil.",
    },
    "prague-kafka": {
      title: "Drehender Kopf von Franz Kafka",
      location: "Prag, Tschechische Republik",
      alt: "Kinetische Skulptur Kopf von Franz Kafka in Prag",
      description:
        "David Černý entwarf dieses umstrittene Kunstwerk für das Geschäfts- und Bürogebäude 'Quadrio' in der Národní třída.",
    },
  },
  // About Section
  about: {
    title: "Über EuroTrek",
    description1:
      "EuroTrek ist ein kollektives Fototagebuch, erstellt von Universitätsstudenten, die in Polen studieren. Unsere Mission ist es, die Schönheit, Kultur und Erfahrungen von Studentenreisen durch authentische Fotografie zu präsentieren.",
    description2:
      "Diese Plattform dient sowohl als Inspiration für zukünftige reisende Studenten als auch als Erinnerungsbuch für diejenigen, die ihre europäischen Abenteuer bereits begonnen haben. Alle Fotos werden von Studenten gemacht und zeigen Europa aus einer frischen, jugendlichen Perspektive.",
    pageTitle: "Über unsere Reise",
    pageDescription1:
      "EuroTrek entstand aus der Leidenschaft für Reisefotografie und dem Wunsch, die einzigartigen Erlebnisse von studentischen Entdeckern in den lebendigsten Städten Europas festzuhalten.",
    pageDescription2:
      "Was als kleine Gruppe zum Teilen von Fotos unter Kommilitonen begann, die in Polen studierten, hat sich zu einer Plattform entwickelt, die studentische Fotografen aus verschiedenen Ländern, Hintergründen und akademischen Disziplinen verbindet, die eine gemeinsame Liebe zum Entdecken und visuellen Erzählen teilen.",
    pageDescription3:
      "Unsere Beitragenden sind Studenten wie Sie, die ihr Studium mit Abenteuern auf dem gesamten Kontinent in Einklang bringen und dabei authentische Momente festhalten.",
    mission: {
      title: "Unsere Mission",
      description:
        "Studentenreisen durch authentisches visuelles Erzählen inspirieren und eine unterstützende Gemeinschaft für junge Fotografen schaffen, die Europa erkunden.",
    },
    team: {
      title: "Studentenkollektiv",
      description:
        "Unser Team besteht ausschließlich aus studentischen Fotografen, Autoren und Webentwicklern von Universitäten weltweit. Jeder Beitragende bringt seine einzigartige Perspektive und Erfahrung in die Plattform ein.",
    },
    feature1: {
      title: "Studenten-Fotografen",
      description: "Fotos von internationalen Studenten aus aller Welt",
    },
    feature2: {
      title: "Authentische Erlebnisse",
      description:
        "Echte Reisemomente jenseits der typischen Touristenattraktionen",
    },
    feature3: {
      title: "Viele Reisen",
      description:
        "Eine wachsende Sammlung von Fotos vom gesamten europäischen Kontinent",
    },
    image1: { title: "Lissabon", description: "Hieronymuskloster." },
    image2: {
      title: "Deutschland und Frankreich",
      description:
        "Eine unvergessliche Reise durch Deutschland und Frankreich.",
    },
    image3: {
      title: "Neapel",
      description: "Außergewöhnliche Landschaften Neapels.",
    },
  },
  // Featured Section
  featured: {
    title: "Empfohlen: Frühling in Paris",
    description1:
      "Paris im Frühling ist ein Traum für studentische Fotografen. Die Stadt erwacht mit blühenden Kirschbäumen, Straßencafés und perfektem Licht, um ikonische Wahrzeichen festzuhalten.",
    description2:
      "Unsere empfohlene Sammlung zeigt den Charme von Paris durch die Augen polnischer Studenten, die ihre Auslandsferien in der Stadt der Lichter verbracht haben.",
    exploreLink: "Entdecken Sie die Paris-Sammlung",
    image1Alt: "Eiffelturm im Frühling",
    image2Alt: "Die Seine in Paris",
    image3Alt: "Pariser Café",
    image4Alt: "Louvre-Museum",
  },
  // Contact Section
  contact: {
    title: "Kontakt",
    description:
      "Haben Sie Fragen oder möchten Sie Ihre eigenen Studentenreisefotos einreichen? Wir würden uns freuen, von Ihnen zu hören!",
    pageTitle: "Kontaktieren Sie uns",
    getInTouch: "Wie können wir Ihnen helfen?",
    getInTouchDescription:
      "Egal, ob Sie Ihre Reisefotos einreichen möchten, Fragen zu unserer Plattform haben oder einfach nur Hallo sagen möchten, wir sind hier, um zu helfen.",
    email: {
      title: "Schreiben Sie uns",
      description: "Für allgemeine Anfragen und Fotoeinreichungen",
    },
    location: {
      title: "Unser Standort",
      description:
        "Besuchen Sie unser Büro des Studentenkollektivs (nach Vereinbarung)",
      address: "Universität Danzig, ul. Bażyńskiego 8, 80-309 Danzig",
    },
    phone: {
      title: "Rufen Sie uns an",
      description: "Erreichbar werktags von 10:00 bis 18:00 Uhr MEZ",
    },
    form: {
      name: "Ihr Name",
      namePlaceholder: "Geben Sie Ihren Namen ein",
      nameError: "Name ist erforderlich",
      email: "Ihre E-Mail",
      emailPlaceholder: "Geben Sie Ihre E-Mail ein",
      emailError: "Gültige E-Mail ist erforderlich",
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
  // Footer
  footer: {
    description:
      "Eine visuelle Reise durch Europa, festgehalten durch die Linse von Studenten, die die schönsten Ecken des Kontinents erkunden.",
    quickLinks: "Schnelllinks",
    resources: "Ressourcen",
    parisCollection: "Paris-Sammlung",
    submitPhotos: "Fotos einreichen",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfUse: "Nutzungsbedingungen",
    accessibility: "Barrierefreiheit",
    cookiePolicy: "Cookie-Richtlinie",
    cookieSettings: "Cookie-Einstellungen",
    faq: "Häufig gestellte Fragen (FAQ)",
    sitemap: "Sitemap",
    support: "Hilfe & Support",
    copyright: "Alle Rechte vorbehalten.",
    tagline: "Mit ❤ von Studenten für Studenten gemacht.",
    instagram: "Folgen Sie uns auf Instagram",
    twitter: "Folgen Sie uns auf Twitter",
    facebook: "Folgen Sie uns auf Facebook",
    pinterest: "Folgen Sie uns auf Pinterest",
  },
  // Slider Controls
  slider: {
    previous: "Vorheriges Dia",
    next: "Nächstes Dia",
    goToSlide: "Gehe zu Dia {{index}}",
  },
  // Lightbox
  lightbox: {
    close: "Schließen",
    previous: "Vorheriges Foto",
    next: "Nächstes Foto",
  },
  // Theme Toggle
  theme: {
    toggleLight: "Zum hellen Modus wechseln",
    toggleDark: "Zum dunklen Modus wechseln",
  },
  // Language
  language: {
    changeLanguage: "Sprache ändern",
  },
  // Home
  home: {
    heroAriaLabel: "Empfohlene Reiseziele",
  },

  // --- SECTIONS FOR INFO PAGES ---
  privacyPolicy: {
    title: "Datenschutzrichtlinie",
    metaDescription: "Lesen Sie die Datenschutzrichtlinie von EuroTrek.",
    introduction:
      "Willkommen bei der Datenschutzrichtlinie von EuroTrek. Ihre Privatsphäre ist uns wichtig, und wir verpflichten uns, Ihre personenbezogenen Daten gemäß den geltenden Gesetzen, einschließlich der DSGVO, zu schützen.",
    section1Title: "1. Welche Informationen sammeln wir?",
    section1Content:
      "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen (z. B. über das Kontaktformular: Name, E-Mail-Adresse, Nachrichteninhalt) sowie Daten, die automatisch während der Nutzung der Website gesammelt werden (z. B. IP-Adresse, Browsertyp, Geräteinformationen, Daten über Aktivitäten auf der Website mittels Cookies – siehe Cookie-Richtlinie).",
    section2Title: "2. Wie verwenden wir Ihre Informationen?",
    section2Content:
      "Wir verwenden Ihre Daten zur Bereitstellung und Verbesserung unserer Dienste, zur Kommunikation mit Ihnen (Beantwortung von Anfragen), zur Analyse des Website-Traffics, zur Gewährleistung der Website-Sicherheit und zur Erfüllung gesetzlicher Pflichten.",
    contactTitle: "Datenschutzkontakt",
    contactContent:
      "Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter: puaro@vp.pl",
  },
  termsOfUse: {
    title: "Nutzungsbedingungen",
    metaDescription: "Lesen Sie die Nutzungsbedingungen von EuroTrek.",
    introduction:
      "Diese Nutzungsbedingungen regeln die Nutzung der EuroTrek-Website. Durch die Nutzung der Website akzeptieren Sie die folgenden Bestimmungen.",
    section1Title: "1. Allgemeine Regeln und Annahme der Bedingungen",
    section1Content:
      "Die EuroTrek-Website ist eine Plattform zur Präsentation von Reisefotografien. Benutzer sind verpflichtet, die Website gemäß Gesetz und guten Sitten zu nutzen. Das Veröffentlichen von rechtswidrigen, beleidigenden oder die Rechte Dritter verletzenden Inhalten ist untersagt.",
    contactTitle: "Kontakt bezüglich der Nutzungsbedingungen",
    contactContent:
      "Fragen zu diesen Nutzungsbedingungen richten Sie bitte an: puaro@vp.pl",
  },
  accessibility: {
    title: "Erklärung zur Barrierefreiheit",
    metaDescription:
      "Erfahren Sie mehr über unser Engagement für digitale Barrierefreiheit bei EuroTrek.",
    introduction:
      "EuroTrek ist bestrebt, die digitale Barrierefreiheit der Website für ein möglichst breites Publikum, einschließlich Menschen mit Behinderungen, zu gewährleisten. Wir arbeiten kontinuierlich an der Verbesserung der Benutzeroberfläche und der Anwendung relevanter Barrierefreiheitsstandards wie den WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Unsere Maßnahmen zur Barrierefreiheit",
    section1Content:
      "Wir bemühen uns um die Implementierung von Lösungen wie: Verwendung von semantischem HTML-Code, Gewährleistung der Tastaturnavigation, angemessener Farbkontrast, Alternativtexte für Bilder und Testen der Website mit verschiedenen unterstützenden Technologien.",
    contactTitle: "Feedback und Kontaktdaten",
    contactContent:
      "Sollten Sie auf Barrieren bei der Barrierefreiheit auf unserer Website stoßen, kontaktieren Sie uns bitte. Ihre Kommentare sind für uns wertvoll. Kontaktieren Sie uns unter: puaro@vp.pl",
  },
  cookiePolicy: {
    title: "Cookie-Richtlinie",
    metaDescription: "Erfahren Sie, wie EuroTrek Cookies verwendet.",
    introduction:
      "Unsere Website verwendet Cookies, um die ordnungsgemäße Funktion der Seite zu gewährleisten, Ihr Erlebnis zu verbessern sowie zu Analyse- und Marketingzwecken (mit Ihrer Zustimmung).",
    section1Title: "1. Was sind Cookies?",
    section1Content:
      "Cookies sind kleine Textdateien, die beim Besuch von Websites auf Ihrem Gerät (Computer, Smartphone) gespeichert werden. Sie ermöglichen es der Website, sich Ihre Aktionen und Präferenzen für einen bestimmten Zeitraum zu 'merken'.",
    section2Title: "2. Welche Arten von Cookies verwenden wir?",
    section2Content: "Wir verwenden verschiedene Arten von Cookies, darunter:",
    type1:
      "Notwendige Cookies: Erforderlich für die grundlegende Funktion der Website (z. B. Benutzersitzung). Erfordern keine Zustimmung.",
    type2:
      "Analytische Cookies: Helfen uns zu verstehen, wie Benutzer die Website nutzen (z. B. Google Analytics). Erfordern Ihre Zustimmung.",
    type3:
      "Funktionale Cookies: Ermöglichen das Speichern Ihrer Auswahl und Präferenzen (z. B. Sprache). Können Zustimmung erfordern.",
    type4:
      "Marketing-Cookies: Dienen zur Anzeige personalisierter Werbung (z. B. Facebook Pixel). Erfordern Ihre Zustimmung.",
    section3Title: "3. Verwaltung von Cookies",
    section3Content:
      "Sie können Ihre Cookie-Zustimmungen jederzeit über das auf unserer Website verfügbare Einwilligungsmanagement-Tool verwalten (klicken Sie auf die Schaltfläche 'Cookie-Einstellungen'). Sie können die Cookie-Einstellungen auch in Ihrem Webbrowser ändern.",
    settingsError:
      "Cookie-Einstellungen können nicht geöffnet werden. Kontaktieren Sie den technischen Support oder versuchen Sie, die Einstellungen in Ihrem Browser zu verwalten.",
    settingsInfoPlaceholder:
      "Durch Klicken auf die Schaltfläche wird das Verwaltungspanel für Cookie-Einstellungen geöffnet.",
    contactTitle: "Kontakt bezüglich der Cookie-Richtlinie",
    contactContent:
      "Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte: puaro@vp.pl",
  },
  faq: {
    title: "Häufig gestellte Fragen (FAQ)",
    metaDescription:
      "Finden Sie Antworten auf die häufigsten Fragen zu EuroTrek.",
    q1: "Frage 1: Wie kann ich meine Fotos einreichen?",
    a1: "Derzeit sammeln wir Fotos von befreundeten Studenten. Wenn Sie an einer Zusammenarbeit interessiert sind, kontaktieren Sie uns bitte über das Kontaktformular und beschreiben Sie kurz Ihre Reisen und Ihr Portfolio.",
    q2: "Frage 2: Ist die Nutzung der Website kostenpflichtig?",
    a2: "Nein, das Betrachten von Fotos und Inhalten auf der EuroTrek-Website ist für alle Benutzer völlig kostenlos.",
    q3: "Frage 3: Wer besitzt die Urheberrechte an den Fotos?",
    a3: "Die Urheberrechte an den Fotos liegen bei den studentischen Autoren. EuroTrek besitzt eine Lizenz zur Veröffentlichung auf der Website. Details regelt der Vertrag mit dem Autor und unsere Nutzungsbedingungen.",
    stillHaveQuestions: "Haben Sie weitere Fragen?",
    contactUs: "Kontaktieren Sie uns",
  },
  sitemap: {
    title: "Sitemap",
    metaDescription: "Durchsuchen Sie die Struktur der EuroTrek-Website.",
    introduction:
      "Unten finden Sie eine Liste der Hauptbereiche und Seiten, die auf der EuroTrek-Website verfügbar sind, um Ihnen die Navigation zu erleichtern.",
  },
  support: {
    title: "Hilfe & Support",
    metaDescription:
      "Benötigen Sie Hilfe? Finden Sie Kontaktinformationen und Support für EuroTrek.",
    introduction:
      "Wir sind hier, um zu helfen! Wenn Sie Fragen zur Funktionsweise der Website haben, auf ein technisches Problem gestoßen sind oder andere Bedenken haben, nutzen Sie bitte die verfügbaren Support-Optionen.",
    faqTitle: "Überprüfen Sie zuerst die FAQ",
    faqDescription:
      "Viele Antworten auf häufige Fragen finden Sie in unserem FAQ-Bereich.",
    goToFaq: "Gehe zu FAQ",
    contactFormTitle: "Kontaktformular",
    contactFormDescription:
      "Der beste Weg, uns in den meisten Fällen zu kontaktieren, ist das Senden einer Nachricht über unser Kontaktformular.",
    goToContact: "Gehe zum Kontakt",
    phoneTitle: "Telefonischer Support",
    phoneDescription:
      "In dringenden technischen Angelegenheiten können Sie uns montags bis freitags von [z.B. 10:00 - 16:00 Uhr] telefonisch kontaktieren.",
    phoneNumber: "Rufen Sie an: +49 000 0000000", // Beispielnummer
    responseInfo:
      "Wir bemühen uns, Anfragen über das Kontaktformular innerhalb von 1-2 Werktagen zu beantworten.",
  },
};
