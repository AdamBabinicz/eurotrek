import { Description } from "@radix-ui/react-toast"; // Import beibehalten

export default {
  // Common / Allgemein
  common: {
    no_photos_data: "Keine Fotodaten verfügbar.",
    // --- HINZUGEFÜGT ---
    lastUpdated: "Zuletzt aktualisiert",
    placeholderContent:
      "Der Inhalt für diesen Abschnitt wird derzeit vorbereitet. Er wird bald aktualisiert.",
    // --- ENDE HINZUGEFÜGT ---
  },
  // Navbar / Navigationsleiste
  navbar: {
    home: "Startseite",
    destinations: "Reiseziele",
    about: "Über uns",
    contact: "Kontakt",
  },
  // Destinations / Reiseziele
  destinations: {
    exploreTitle: "Reiseziele entdecken",
    exploreDescription:
      "Durchsuchen Sie unsere Sammlung von studentischen Reisefotos aus den schönsten Städten Europas.",
    allDestinations: "Alle Reiseziele",
    lisbon: "Lissabon",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Neapel",
    prague: "Prag",
    loadMore: "Mehr laden",
    ariaLabel: "Reisezielkategorien",
  },
  // Hero Slides / Heldenfolien
  heroSlides: {
    "paris-hero": {
      location: "Paris, Frankreich",
      description:
        "Die Stadt der Lichter aus der Sicht eines Studenten - den Charme der Pariser Architektur und Kultur einfangen.",
    },
    "rome-hero": {
      location: "Neapel, Italien",
      description:
        "Neapel ist ein Ort, an dem das Leben im Rhythmus von Espresso, Gesprächen auf der Straße und dem Duft frisch gebackener Pizza in der warmen mediterranen Luft pulsiert.",
    },
    "lisbon-hero": {
      location: "Lissabon, Portugal",
      description:
        "Lissabon ist eine Stadt voller Licht, in der sich gepflasterte Gassen zwischen bunten Häusern schlängeln und das Leben ruhig im Rhythmus von Fado und dem Aroma frischer 'Pasteis de Nata' fließt.",
    },
    "frankfurt-hero": {
      location: "Frankfurt am Main, Deutschland",
      // Beibehalten der Beschreibung aus der PL-Vorlage, auch wenn sie Lissabon beschreibt
      description:
        "Lissabon ist eine Stadt voller Licht, in der sich gepflasterte Gassen zwischen bunten Häusern schlängeln und das Leben ruhig im Rhythmus von Fado und dem Aroma frischer 'Pasteis de Nata' fließt.",
    },
  },
  // Photos / Fotos
  photos: {
    view: "Foto {{title}} ansehen",
    noPhotos: "Für dieses Reiseziel sind noch keine Fotos verfügbar.",
    "paris-sunset": {
      title: "Sonnenuntergang in Paris",
      location: "Paris, Frankreich",
      alt: "Eiffelturm bei Sonnenuntergang in Paris",
    },
    "lisbon-tram": {
      title: "Blick auf das Nationaltheater D. Maria II",
      location: "Lissabon, Portugal",
      description:
        "Das historische Theatergebäude ist eine der renommiertesten Bühnen Portugals und befindet sich am Rossio-Platz im Stadtzentrum.",
    },
    "lisbon-belem": {
      title: "Dächer der Altstadt",
      location: "Lissabon, Portugal",
      description:
        "Der älteste Stadtteil Lissabons ist Alfama, erbaut am Hang über dem Tejo während der Maurenherrschaft. Hier spürt man das Flair des mittelalterlichen Lissabons.",
    },
    "lisbon-bele": {
      title: "Turm von Belém",
      location: "Lissabon, Portugal",
      description:
        "Mittelalterliche Festung mit Blick auf die Mündung des Tejo", // Korrektur des Tippfehlers 'widokime'
    },
    "boca do inferno": {
      title: "Höllenschlund (Boca do Inferno)",
      location: "Cascais, Portugal",
      description:
        "Eine Schlucht in den Küstenklippen nahe der portugiesischen Stadt Cascais",
    },
    "capri-marina": {
      title: "Strand Luigia ai Faraglioni",
      location: "Capri, Italien",
      description:
        "Im Tyrrhenischen Meer gelegen, belegt er den 19. Platz unter den 118 Stränden der neapolitanischen Region.",
    },
    "paris-hero": {
      // Hinweis: Konflikt mit heroSlides, aber Übersetzung wie vorhanden.
      title: "Versailles – Perle des Barock",
      location: "Paris, Frankreich", // Technisch gesehen bei Paris
      alt: "Schloss Versailles bei Paris",
      description:
        "Versailles ist ein Symbol der französischen absoluten Monarchie und eines der prächtigsten Beispiele barocker Architektur weltweit.",
    },
    "naples-view": {
      title: "Straße am Tyrrhenischen Meer",
      location: "Neapel, Italien",
      alt: "Straße am Fuße eines Berges",
      description: "Malerische Strecke entlang der Küste.",
    },
    "naples-mummy": {
      title: "Gipsabdruck eines Opfers des Vesuvs",
      location: "Pompeji, Italien",
      alt: "Opfer des Vulkanausbruchs",
      description:
        "Die Gipsabdrücke der Körper wurden 1863 vom Archäologen Giuseppe Fiorelli ausgegraben. „Bisher wurden sie aus ethischen Gründen und aufgrund der Sensibilität, mit der menschliche Überreste stets behandelt wurden, nicht inventarisiert.“",
    },
    "naples-stadion": {
      title: "Amphitheater von Pompeji",
      location: "Pompeji, Italien",
      alt: "Teil des Stadions in der antiken Stadt Pompeji",
      description:
        "Das Amphitheater von Pompeji – ein antikes römisches Amphitheater in Pompeji. Es ist das älteste erhaltene Bauwerk dieser Art.",
    },
    "naples-museum": {
      title: "Kleines pergamisches Weihgeschenk",
      location: "Neapel, Italien",
      alt: "Archäologisches Nationalmuseum Neapel",
      description:
        "Kopie aus dem 2. Jh. n. Chr. nach einem griechischen Original aus dem 2. Jh. v. Chr.",
    },
    "capri-taras": {
      title: "Capri nahe Marina Piccola",
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
        "Capri zeichnet sich durch charmante Einkaufsstraßen aus, die von der Piazzetta beginnen und durch die Via Camerelle und Via Le Botteghe führen.",
    },
    "capri-port": {
      title: "Hafen in Marina Grande",
      location: "Capri, Italien",
      alt: "Angelegte Yachten",
      description:
        "Gepäckträger der Haupthotels warten darauf, Ihr Gepäck auf einem Trolley mitzunehmen, und Sie können mit der Standseilbahn oder einem Cabrio-Taxi fahren, da es auf Capri keinen Autoverkehr gibt.",
    },
    "lisbon-hero": {
      // Hinweis: Konflikt mit heroSlides, aber Übersetzung wie vorhanden.
      title: "Hieronymuskloster (Mosteiro dos Jerónimos)",
      location: "Lissabon, Portugal",
      alt: "Hieronymuskloster in Belém",
      description:
        "Erbaut in der ersten Hälfte des 16. Jahrhunderts, gilt es als Juwel und Quintessenz des manuelinischen Stils, einer spezifisch portugiesischen Mischung aus Gotik und Renaissance.",
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
        "Eines der größten Museen der Welt und die meistbesuchte Einrichtung dieser Art weltweit.",
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
        "Es ist schwer, sich die Küche an der Seine, und besonders an der Rhône, ohne köstliche Schnecken auf dem Teller vorzustellen.",
    },
    "frankfurt-hero": {
      // Hinweis: Konflikt mit heroSlides, aber Übersetzung wie vorhanden.
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
        "Das Museum wurde auf Anweisung des preußischen Königs Friedrich Wilhelm III. erbaut, um die Sammlungen antiker Kunst der breiten Öffentlichkeit zugänglich zu machen.",
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
        "Ein Denkmal im Freien für die klassischen Komponisten Ludwig van Beethoven, Joseph Haydn und Wolfgang Amadeus Mozart aus dem Jahr 1904.",
    },
    "prague-bridge": {
      title: "Blick auf die Moldau in Prag",
      location: "Prag, Tschechien",
      alt: "Die Moldau in Prag",
      description:
        "Ganz Prag spiegelt sich in der Moldau und schmeichelt ihr wie einem Zauberspiegel.",
    },
    "prague-wit": {
      title: "Schatzkammer des Veitsdoms",
      location: "Prag, Tschechien",
      alt: "Schatzkammer in Prag",
      description:
        "Artefakte in der Schatzkammer des Veitsdoms auf der Prager Burg.",
    },
    "prague-dance": {
      title: "Tanzendes Haus",
      location: "Prag, Tschechien",
      alt: "Ginger und Fred",
      description:
        "Ein avantgardistisches Gebäude des Architektenpaares Vlado Milunić und Frank Gehry im dekonstruktivistischen Stil.",
    },
    "prague-kafka": {
      title: "Drehender Kopf von Franz Kafka",
      location: "Prag, Tschechien",
      alt: "Kopf von Franz Kafka",
      description:
        "David Černý entwarf dieses umstrittene Kunstwerk für das Geschäfts- und Bürogebäude 'Quadrio' in der Národní třída.",
    },
  },
  // About Section / Über uns
  about: {
    title: "Über EuroTrek",
    description1:
      "EuroTrek ist ein kollektives Fototagebuch, erstellt von Universitätsstudenten, die in Polen studieren. Unsere Mission ist es, die Schönheit, Kultur und Erfahrungen von Studentenreisen durch authentische Fotografie zu präsentieren.",
    description2:
      "Diese Plattform dient sowohl als Inspiration für zukünftige studentische Reisende als auch als Erinnerungsbuch für diejenigen, die bereits ihre europäischen Abenteuer begonnen haben. Alle Fotos wurden von Studenten aufgenommen und zeigen Europa aus einer frischen, jugendlichen Perspektive.",
    pageTitle: "Über unsere Reise",
    pageDescription1:
      "EuroTrek entstand aus der Leidenschaft für Reisefotografie und dem Wunsch, die einzigartigen Erfahrungen studentischer Entdecker in den lebendigsten Städten Europas festzuhalten.",
    pageDescription2:
      "Was als kleine Gruppe begann, die Fotos unter Kommilitonen in Polen teilte, hat sich zu einer Plattform entwickelt, die studentische Fotografen aus verschiedenen Ländern, mit unterschiedlichem Hintergrund und aus verschiedenen akademischen Disziplinen verbindet, die die gemeinsame Liebe zum Entdecken und visuellen Geschichtenerzählen teilen.",
    pageDescription3:
      "Unsere Mitwirkenden sind Studenten wie Sie, die ihr Studium mit Abenteuern auf dem ganzen Kontinent verbinden und dabei authentische Momente festhalten.",
    mission: {
      title: "Unsere Mission",
      description:
        "Studentenreisen durch authentisches visuelles Storytelling zu inspirieren und eine unterstützende Gemeinschaft für junge Fotografen zu schaffen, die Europa entdecken.",
    },
    team: {
      title: "Das Studentenkollektiv",
      description:
        "Unser Team besteht ausschließlich aus studentischen Fotografen, Autoren und Webentwicklern von Universitäten weltweit. Jeder Mitwirkende bringt seine einzigartige Perspektive und Expertise in die Plattform ein.",
    },
    feature1: {
      title: "Studentische Fotografen",
      description: "Fotos, aufgenommen von Austauschstudenten aus aller Welt",
    },
    feature2: {
      title: "Authentische Erlebnisse",
      description:
        "Echte Reisemomente jenseits der typischen Touristenattraktionen",
    },
    feature3: {
      title: "Viele Reiseziele",
      description: "Eine wachsende Sammlung von Bildern aus ganz Europa",
    },
    image1: {
      title: "Lissabon",
      description: "Hieronymuskloster.",
    },
    image2: {
      title: "Deutschland und Frankreich",
      description:
        "Eine unvergessliche Reise durch Deutschland und Frankreich.",
    },
    image3: {
      title: "Neapel",
      description: "Die außergewöhnlichen Landschaften Neapels.",
    },
  },
  // Featured Section / Im Fokus
  featured: {
    title: "Im Fokus: Frühling in Paris",
    description1:
      "Paris im Frühling ist ein Traum für studentische Fotografen. Die Stadt erwacht mit Kirschblüten, Caféterrassen und dem perfekten Licht, um ikonische Wahrzeichen einzufangen.",
    description2:
      "Unsere vorgestellte Kollektion zeigt den Zauber von Paris durch die Augen polnischer Studenten, die ihre Auslandssemesterferien in der Stadt des Lichts verbracht haben.",
    exploreLink: "Entdecken Sie die Paris-Kollektion",
    image1Alt: "Eiffelturm im Frühling",
    image2Alt: "Die Seine in Paris",
    image3Alt: "Pariser Café-Szene",
    image4Alt: "Louvre-Museum",
  },
  // Contact Section / Kontakt
  contact: {
    title: "Kontakt",
    description:
      "Haben Sie Fragen oder möchten Sie Ihre eigenen studentischen Reisefotos einreichen? Wir freuen uns, von Ihnen zu hören!",
    pageTitle: "Kontakt aufnehmen",
    getInTouch: "Wie können wir Ihnen helfen?",
    getInTouchDescription:
      "Egal, ob Sie Ihre Reisefotos einreichen möchten, Fragen zu unserer Plattform haben oder einfach nur Hallo sagen wollen – wir sind hier, um zu helfen.",
    email: {
      title: "Schreiben Sie uns eine E-Mail",
      description: "Für allgemeine Anfragen und Fotoeinreichungen",
    },
    location: {
      title: "Unser Standort",
      description: "Besuchen Sie unser Büro des Studentenkollektivs",
      address: "University Creative Hub, European Campus, Amsterdam", // Platzhalteradresse beibehalten
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
      emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
      emailError: "Gültige E-Mail-Adresse erforderlich",
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
        "Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns bald bei Ihnen.",
    },
  },
  // Footer / Fußzeile
  footer: {
    description:
      "Eine visuelle Reise durch Europa, festgehalten durch die Linse von Studenten, die die schönsten Ecken des Kontinents erkunden.",
    quickLinks: "Schnelllinks",
    resources: "Ressourcen",
    parisCollection: "Paris-Kollektion",
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
    tagline: "Mit ❤ von Studenten, für Studenten gemacht.",
    instagram: "Folgen Sie uns auf Instagram",
    twitter: "Folgen Sie uns auf Twitter",
    facebook: "Folgen Sie uns auf Facebook",
    pinterest: "Folgen Sie uns auf Pinterest",
  },
  // Slider Controls / Slider-Steuerung
  slider: {
    previous: "Vorherige Folie",
    next: "Nächste Folie",
    goToSlide: "Gehe zu Folie {{index}}",
  },
  // Lightbox / Leuchtkasten
  lightbox: {
    close: "Viewer schließen",
    previous: "Vorheriges Bild",
    next: "Nächstes Bild",
  },
  // Theme Toggle / Theme-Umschalter
  theme: {
    toggleLight: "Zum hellen Modus wechseln",
    toggleDark: "Zum dunklen Modus wechseln",
  },
  // Language / Sprache
  language: {
    changeLanguage: "Sprache ändern",
  },
  // Home / Startseite
  home: {
    heroAriaLabel: "Empfohlene Reiseziele",
  },

  // --- HINZUGEFÜGTE ABSCHNITTE FÜR NEUE INFORMATIONSSEITEN (MIT ALLGEMEINEM PLATZHALTERINHALT) ---
  privacyPolicy: {
    title: "Datenschutzrichtlinie",
    metaDescription:
      "Lesen Sie die Datenschutzrichtlinie des EuroTrek-Dienstes.",
    introduction:
      "Willkommen bei der Datenschutzrichtlinie von EuroTrek. Ihre Privatsphäre ist uns wichtig und wir verpflichten uns, Ihre personenbezogenen Daten gemäß den geltenden Vorschriften, einschließlich der DSGVO, zu schützen.",
    section1Title: "1. Welche Informationen sammeln wir?",
    section1Content:
      "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen (z. B. über das Kontaktformular: Name, E-Mail-Adresse, Nachrichteninhalt) sowie Daten, die automatisch bei der Nutzung des Dienstes erhoben werden (z. B. IP-Adresse, Browsertyp, Geräteinformationen, Daten über Aktivitäten im Dienst mittels Cookies – siehe Cookie-Richtlinie).",
    section2Title: "2. Wie verwenden wir Ihre Informationen?",
    section2Content:
      "Wir verwenden Ihre Daten zur Bereitstellung und Verbesserung unserer Dienste, zur Kommunikation mit Ihnen (Beantwortung von Anfragen), zur Analyse des Website-Traffics, zur Gewährleistung der Sicherheit des Dienstes sowie zur Erfüllung gesetzlicher Pflichten.",
    contactTitle: "Kontakt zum Datenschutz",
    contactContent:
      "In Angelegenheiten bezüglich der Verarbeitung Ihrer personenbezogenen Daten oder der Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter: [puaro@vp.pl].", // Platzhalter-E-Mail beibehalten
  },
  termsOfUse: {
    title: "Nutzungsbedingungen",
    metaDescription: "Lesen Sie die Nutzungsbedingungen des EuroTrek-Dienstes.",
    introduction:
      "Diese Nutzungsbedingungen regeln die Nutzung der EuroTrek-Website. Durch die Nutzung des Dienstes akzeptieren Sie die folgenden Bestimmungen.",
    section1Title: "1. Allgemeine Regeln und Annahme der Bedingungen",
    section1Content:
      "Der EuroTrek-Dienst ist eine Plattform zur Präsentation von Reisefotografien. Nutzer sind verpflichtet, den Dienst gemäß geltendem Recht und guten Sitten zu nutzen. Die Veröffentlichung rechtswidriger, beleidigender oder gegen Rechte Dritter verstoßender Inhalte ist untersagt.",
    contactTitle: "Kontakt zu den Nutzungsbedingungen",
    contactContent:
      "Fragen zu diesen Nutzungsbedingungen richten Sie bitte an: [puaro@vp.pl].", // Platzhalter-E-Mail beibehalten
  },
  accessibility: {
    title: "Erklärung zur Barrierefreiheit",
    metaDescription:
      "Erfahren Sie mehr über unser Engagement für digitale Barrierefreiheit bei EuroTrek.",
    introduction:
      "EuroTrek ist bestrebt, die digitale Barrierefreiheit des Dienstes für einen möglichst breiten Nutzerkreis, einschließlich Menschen mit Behinderungen, zu gewährleisten. Wir arbeiten kontinuierlich an der Verbesserung der Benutzeroberfläche und der Anwendung relevanter Barrierefreiheitsstandards wie WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Unsere Maßnahmen zur Barrierefreiheit",
    section1Content:
      "Wir bemühen uns um die Implementierung von Lösungen wie: Verwendung von semantischem HTML-Code, Gewährleistung der Tastaturnavigation, angemessener Farbkontrast, Alternativtexte für Bilder sowie das Testen des Dienstes mit verschiedenen assistiven Technologien.",
    contactTitle: "Feedback und Kontaktdaten",
    contactContent:
      "Sollten Sie auf Barrieren in unserem Dienst stoßen, kontaktieren Sie uns bitte. Ihr Feedback ist für uns wertvoll. Kontaktieren Sie uns unter: [puaro@vp.pl].", // Platzhalter-E-Mail beibehalten
  },
  cookiePolicy: {
    title: "Cookie-Richtlinie",
    metaDescription: "Erfahren Sie, wie EuroTrek Cookies verwendet.",
    introduction:
      "Unser Dienst verwendet Cookies, um die ordnungsgemäße Funktion der Website zu gewährleisten, Ihre Erfahrung zu verbessern sowie zu analytischen und Marketingzwecken (mit Ihrer Zustimmung).",
    section1Title: "1. Was sind Cookies?",
    section1Content:
      "Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone) gespeichert werden, wenn Sie Websites besuchen. Sie ermöglichen es der Website, sich Ihre Aktionen und Präferenzen über einen bestimmten Zeitraum zu 'merken'.",
    section2Title: "2. Welche Arten von Cookies verwenden wir?",
    section2Content: "Wir verwenden verschiedene Arten von Cookies, darunter:",
    type1:
      "Notwendige Cookies: Erforderlich für die grundlegende Funktion des Dienstes (z. B. Benutzersitzung). Erfordern keine Zustimmung.",
    type2:
      "Analytische Cookies: Helfen uns zu verstehen, wie Nutzer die Website nutzen (z. B. Google Analytics). Erfordern Ihre Zustimmung.",
    type3:
      "Funktionale Cookies: Ermöglichen das Speichern Ihrer Auswahl und Präferenzen (z. B. Sprache). Können Zustimmung erfordern.",
    type4:
      "Marketing-Cookies: Dienen zur Anzeige personalisierter Werbung (z. B. Facebook Pixel). Erfordern Ihre Zustimmung.",
    section3Title: "3. Verwaltung von Cookies",
    section3Content:
      "Sie können Ihre Cookie-Einwilligungen jederzeit über das auf unserer Website verfügbare Einwilligungsmanagement-Tool verwalten (klicken Sie auf die Schaltfläche 'Cookie-Einstellungen'). Sie können die Cookie-Einstellungen auch in Ihrem Webbrowser ändern.",
    settingsError:
      "Cookie-Einstellungen können nicht geöffnet werden. Bitte kontaktieren Sie den Support oder versuchen Sie, die Einstellungen in Ihrem Browser zu verwalten.",
    settingsInfoPlaceholder:
      "Ein Klick auf die Schaltfläche öffnet das Verwaltungsfenster für Cookie-Einstellungen.",
    contactTitle: "Kontakt zur Cookie-Richtlinie",
    contactContent:
      "Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte: [puaro@vp.pl].", // Platzhalter-E-Mail beibehalten
  },
  faq: {
    title: "Häufig gestellte Fragen (FAQ)",
    metaDescription:
      "Finden Sie Antworten auf die häufigsten Fragen zu EuroTrek.",
    q1: "Frage 1: Wie kann ich meine Fotos einreichen?",
    a1: "Derzeit sammeln wir Fotos von befreundeten Studenten. Wenn Sie an einer Zusammenarbeit interessiert sind, kontaktieren Sie uns bitte über das Kontaktformular und beschreiben Sie kurz Ihre Reisen und Ihr Portfolio.",
    q2: "Frage 2: Ist die Nutzung des Dienstes kostenpflichtig?",
    a2: "Nein, das Ansehen von Fotos und Inhalten im EuroTrek-Dienst ist für alle Nutzer völlig kostenlos.",
    q3: "Frage 3: Wer besitzt das Urheberrecht an den Fotos?",
    a3: "Das Urheberrecht an den Fotos liegt bei den studentischen Autoren. EuroTrek besitzt eine Lizenz zur Veröffentlichung im Dienst. Details regelt der Vertrag mit dem Autor sowie unsere Nutzungsbedingungen.",
    stillHaveQuestions: "Haben Sie weitere Fragen?",
    contactUs: "Kontaktieren Sie uns",
  },
  sitemap: {
    title: "Sitemap",
    metaDescription: "Durchsuchen Sie die Struktur der EuroTrek-Website.",
    introduction:
      "Nachfolgend finden Sie eine Liste der Hauptbereiche und Seiten, die im EuroTrek-Dienst verfügbar sind, um Ihnen die Navigation zu erleichtern.",
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
      "Der beste Weg, uns in den meisten Fällen zu kontaktieren, ist das Senden einer Nachricht über unser Kontaktformular.",
    goToContact: "Gehe zum Kontakt",
    phoneTitle: "Telefonischer Support",
    phoneDescription:
      "In dringenden technischen Angelegenheiten können Sie uns telefonisch während [z.B. 10:00 - 16:00 Uhr] von Montag bis Freitag kontaktieren.",
    phoneNumber: "Rufen Sie uns an: [000 000 000]", // Platzhalter-Telefonnummer beibehalten
    responseInfo:
      "Wir bemühen uns, Anfragen über das Kontaktformular innerhalb von 1-2 Werktagen zu beantworten.",
  },
  // --- ENDE DER MODIFIZIERTEN ABSCHNITTE ---
};
