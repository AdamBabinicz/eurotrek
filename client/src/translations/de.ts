import { Description } from "@radix-ui/react-toast"; // Beibehalten wie gewünscht, obwohl unbenutzt

export default {
  // Common - Allgemein
  common: {
    no_photos_data: "Keine Fotodaten vorhanden.",
    lastUpdated: "Zuletzt aktualisiert",
    placeholderContent:
      "Der Inhalt dieses Abschnitts wird vorbereitet. Er wird bald ergänzt.",
  },

  routes: {
    home: "",
    destinations: "reisen", // Beispielroute
    about: "ueber-uns", // Beispielroute
    contact: "kontakt", // Beispielroute
    destinationDetail: "reise", // Beispielroute
    faq: "faq", // Beispielroute
    privacy: "datenschutzrichtlinie", // Beispielroute
    terms: "nutzungsbedingungen", // Beispielroute
    sitemap: "sitemap", // Beispielroute
    accessibility: "barrierefreiheit", // Beispielroute
    cookiePolicy: "cookie-richtlinie", // Beispielroute
    support: "hilfe", // Beispielroute
  },

  // Navbar - Navigationsleiste
  navbar: {
    home: "Startseite",
    destinations: "Reisen",
    about: "Über uns",
    contact: "Kontakt",
  },
  // Destinations - Reiseziele
  destinations: {
    exploreTitle: "Entdecke Reisen",
    exploreDescription:
      "Durchstöbern Sie unsere Sammlung von Studenten-Reisefotos aus den schönsten Städten Europas.",
    allDestinations: "Alle Reisen",
    lisbon: "Lissabon",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Neapel",
    prague: "Prag",
    loadMore: "Mehr laden",
    ariaLabel: "Reisekategorien",
    noMorePhotos: "Für diese Kategorie gibt es keine weiteren Fotos zum Laden.",
  },
  destinationsData: {
    lisbon: { name: "Lissabon", country: "Portugal" },
    paris: { name: "Paris", country: "Frankreich" },
    berlin: { name: "Berlin", country: "Deutschland" },
    capri: { name: "Capri", country: "Italien" },
    naples: { name: "Neapel", country: "Italien" },
    prague: { name: "Prag", country: "Tschechien" },
  },
  // Hero Slides - Hero-Folien
  heroSlides: {
    "paris-hero": {
      location: "Paris, Frankreich",
      description:
        "Die Stadt der Lichter aus der Sicht eines Studenten - den Zauber der Pariser Architektur und Kultur einfangen.",
    },
    "rome-hero": {
      // Hinweis: In pl.ts steht hier Neapel, nicht Rom. Ich übersetze den Kontext von Neapel.
      location: "Neapel, Italien",
      description:
        "Neapel ist ein Ort, an dem das Leben im Rhythmus von Espresso, Gesprächen auf der Straße und dem Duft frisch gebackener Pizza pulsiert, der in der warmen, mediterranen Luft liegt.",
    },
    "lisbon-hero": {
      location: "Lissabon, Portugal",
      description:
        "Lissabon ist eine Stadt voller Licht, in der sich gepflasterte Gassen zwischen bunten Häusern winden und das Leben ruhig im Rhythmus von Fado und dem Aroma frischer 'pasteis de nata' fließt.",
    },
    "frankfurt-hero": {
      location: "Frankfurt am Main, Deutschland",
      description:
        // Hinweis: In pl.ts wurde hier die Beschreibung von Lissabon kopiert. Ich übersetze diesen Text.
        "Lissabon ist eine Stadt voller Licht, in der sich gepflasterte Gassen zwischen bunten Häusern winden und das Leben ruhig im Rhythmus von Fado und dem Aroma frischer 'pasteis de nata' fließt.",
    },
  },
  // Photos - Fotos
  photos: {
    view: "Foto ansehen: {{title}}",
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
        "Das älteste Viertel Lissabons ist Alfama, erbaut am Hang über dem Tejo zur Zeit der Maurenherrschaft. Genau hier kann man das Flair des mittelalterlichen Lissabons spüren.",
    },
    "lisbon-bele": {
      title: "Turm von Belém",
      location: "Lissabon, Portugal",
      description:
        "Mittelalterliche Festung mit Blick auf die Mündung des Tejo.", // Leicht angepasst für besseren Fluss
    },
    "boca do inferno": {
      title: "Höllenschlund",
      location: "Cascais, Portugal",
      description:
        "Eine Schlucht in den Küstenklippen nahe der portugiesischen Stadt Cascais.",
    },
    "capri-marina": {
      title: "Strand Luigia bei den Faraglioni",
      location: "Capri, Italien",
      description:
        "Im Tyrrhenischen Meer gelegen, belegt er Platz 19 unter den 118 Stränden der neapolitanischen Region.",
    },
    "paris-hero": {
      // Hinweis: Möglicher ID-Konflikt mit heroSlides
      title: "Versailles – Perle des Barock",
      location: "Paris, Frankreich", // Sollte Versailles sein?
      alt: "Schloss Versailles bei Paris",
      description:
        "Versailles ist ein Symbol der französischen absoluten Monarchie und eines der prächtigsten Beispiele barocker Architektur weltweit.",
    },
    "naples-view": {
      title: "Straße am Tyrrhenischen Meer",
      location: "Neapel, Italien",
      alt: "Straße am Fuße des Berges",
      description: "Malerische Route entlang der Küste.",
    },
    "naples-mummy": {
      title: "Gipsabdruck eines Opfers des Vesuvs",
      location: "Pompeji, Italien",
      alt: "Opfer des Vulkanausbruchs",
      description:
        "Die Gipsabdrücke der Körper wurden 1863 vom Archäologen Giuseppe Fiorelli entdeckt. „Bis heute wurden sie aus ethischen Gründen und wegen der Gefühle, mit denen menschliche Überreste immer behandelt wurden, nicht inventarisiert.“",
    },
    "naples-stadion": {
      title: "Amphitheater in Pompeji",
      location: "Pompeji, Italien",
      alt: "Teil des Stadions in der antiken Stadt Pompeji",
      description:
        "Das Amphitheater von Pompeji – ein antikes römisches Amphitheater in Pompeji. Es ist das älteste erhaltene Bauwerk dieser Art.",
    },
    "naples-museum": {
      title: "Kleines pergamesisches Weihgeschenk",
      location: "Neapel, Italien",
      alt: "Archäologisches Nationalmuseum Neapel",
      description:
        "Kopie aus dem 2. Jh. n. Chr. nach einem griechischen Original aus dem 2. Jh. v. Chr.",
    },
    "capri-taras": {
      title: "Capri in der Nähe von Marina Piccola",
      location: "Capri, Italien",
      alt: "Terrassen auf Capri",
      description:
        "Eine charmante Dachterrasse mit Kakteen. Die meisten Dächer der Gebäude auf Capri sind flach. Und wie oben zu sehen ist, sind auf einigen dieser Gebäude Terrassen angelegt.",
    },
    "capri-street": {
      title: "Einkaufsstraße auf Capri",
      location: "Capri, Italien",
      alt: "Geschäfte auf Capri",
      description:
        "Capri zeichnet sich durch bezaubernde Einkaufsstraßen aus, die an der Piazzetta beginnen und durch die Via Camerelle und Via Le Botteghe führen.",
    },
    "capri-port": {
      title: "Hafen in Marina Grande",
      location: "Capri, Italien",
      alt: "Festgemachte Yachten",
      description:
        "Gepäckträger der Haupthotels warten darauf, das Gepäck auf einem Wagen mitzunehmen, und Sie können mit der Standseilbahn fahren oder ein Cabrio nehmen, da auf Capri kein Autoverkehr herrscht.",
    },
    "lisbon-hero": {
      // Hinweis: Möglicher ID-Konflikt mit heroSlides
      title: "Hieronymuskloster",
      location: "Lissabon, Portugal",
      alt: "Hieronymuskloster in Belém",
      description:
        "Erbaut in der ersten Hälfte des 16. Jahrhunderts, gilt es als Perle und Quintessenz des manuelinischen Stils, einer für Portugal spezifischen Verbindung von Gotik und Renaissance.",
    },
    "paris-eiffel": {
      title: "Eiffelturm",
      location: "Paris, Frankreich",
      alt: "Abendliche Beleuchtung des Eiffelturms in Paris",
      description:
        "Das bekannteste architektonische Wahrzeichen von Paris, gilt als Symbol dieser Stadt und manchmal ganz Frankreichs.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "Paris, Frankreich",
      alt: "Ehemaliger Königspalast in Paris",
      description:
        "Eines der größten Museen der Welt, ist auch die meistbesuchte Einrichtung dieser Art weltweit.",
    },
    "paris-panteon": {
      title: "Blick auf das Pantheon vom Place du Pantheon",
      location: "Paris, Frankreich",
      alt: "Pantheon vom Place du Pantheon",
      description:
        "Das Panthéon – ein Gebäude im Quartier Latin in Paris, erbaut Ende des 18. Jahrhunderts als Kirche unter dem Patrozinium der Heiligen Genoveva.",
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
      title: "Nationalbibliothek Frankreichs, Standort Richelieu, Ovaler Saal",
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
      // Hinweis: Möglicher ID-Konflikt mit heroSlides
      title: "Alte Oper, Frankfurt",
      location: "Frankfurt am Main, Deutschland",
      alt: "Alte Oper, Frankfurt",
      description:
        "Über einem malerischen Platz, geschmückt mit einem eleganten Brunnen, erhebt sich die Oper mit ihrer Fassade im Renaissancestil.",
    },
    "berlin-gate": {
      title: "Brandenburger Tor",
      location: "Berlin, Deutschland",
      alt: "Brandenburger Tor",
      description:
        "Das Brandenburger Tor als Symbol des Friedens und der Freiheit seit dem 3. Oktober 1990, dem Jahrestag der deutschen Wiedervereinigung.",
    },
    "berlin-museum": {
      title: "Altes Museum",
      location: "Berlin, Deutschland",
      alt: "Altes Museum",
      description:
        "Das Museum wurde mit dem Ziel erbaut, die Sammlungen antiker Kunst der breiten Öffentlichkeit zugänglich zu machen, auf Befehl des preußischen Königs Friedrich Wilhelm III.",
    },
    "berlin-victory-column": {
      title: "Siegessäule",
      location: "Berlin, Deutschland",
      alt: "Siegessäule",
      description:
        "Die Säule im Großen Tiergarten in Berlin erinnert an den Sieg Preußens über Dänemark im Deutsch-Dänischen Krieg von 1864.",
    },
    "berlin-music": {
      title: "Beethoven-Haydn-Mozart-Denkmal",
      location: "Berlin, Deutschland",
      alt: "Denkmal der drei Musikgenies",
      description:
        "Freiluftdenkmal für die klassischen Komponisten: Ludwig van Beethoven, Joseph Haydn und Wolfgang Amadeus Mozart aus dem Jahr 1904.",
    },
    "prague-bridge": {
      title: "Blick auf die Moldau in Prag",
      location: "Prag, Tschechien",
      alt: "Die Moldau in Prag",
      description:
        "Ganz Prag spiegelt sich in der Moldau und schmeichelt ihr wie einem magischen Spiegel.",
    },
    "prague-wit": {
      title: "Domschatz von St. Veit",
      location: "Prag, Tschechien",
      alt: "Domschatz in Prag",
      description: "Artefakte im Domschatz des Veitsdoms auf der Prager Burg.",
    },
    "prague-dance": {
      title: "Tanzendes Haus",
      location: "Prag, Tschechien",
      alt: "Ginger und Fred",
      description:
        "Avantgardistisches Gebäude, entworfen vom Architektenpaar Vlado Milunić und Frank Gehry im dekonstruktivistischen Stil.",
    },
    "prague-kafka": {
      title: "Drehbarer Kopf von Franz Kafka",
      location: "Prag, Tschechien",
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
      "Diese Plattform dient sowohl als Inspiration für zukünftige Studentenreisende als auch als Erinnerungsbuch für diejenigen, die bereits ihre europäischen Abenteuer begonnen haben. Alle Fotos wurden von Studenten aufgenommen und zeigen Europa aus einer frischen, jugendlichen Perspektive.",
    pageTitle: "Über Unsere Reise",
    pageDescription1:
      "EuroTrek entstand aus der Leidenschaft für Reisefotografie und dem Wunsch, die einzigartigen Erfahrungen von Studenten-Entdeckern in den lebendigsten Städten Europas festzuhalten.",
    pageDescription2:
      "Was als kleine Gruppe begann, die Fotos unter Kommilitonen in Polen austauschte, entwickelte sich zu einer Plattform, die Studenten-Fotografen aus verschiedenen Ländern, Hintergründen und akademischen Disziplinen verbindet, die die gemeinsame Liebe zum Entdecken und visuellen Geschichtenerzählen teilen.",
    pageDescription3:
      "Unsere Mitwirkenden sind Studenten wie Sie, die ihr Studium mit Abenteuern auf dem ganzen Kontinent verbinden und dabei authentische Momente festhalten.",
    mission: {
      title: "Unsere Mission",
      description:
        "Studentenreisen durch authentisches visuelles Geschichtenerzählen zu inspirieren und eine unterstützende Gemeinschaft für junge Fotografen zu schaffen, die Europa entdecken.",
    },
    team: {
      title: "Studentisches Kollektiv",
      description:
        "Unser Team besteht ausschließlich aus Studenten-Fotografen, Autoren und Webentwicklern von Universitäten auf der ganzen Welt. Jeder Mitwirkende bringt seine einzigartige Perspektive und Erfahrung in die Plattform ein.",
    },
    feature1: {
      title: "Studenten-Fotografen",
      description:
        "Fotos von internationalen Studenten aus aller Welt aufgenommen",
    },
    feature2: {
      title: "Authentische Erfahrungen",
      description:
        "Echte Reisemomente jenseits der typischen Touristenattraktionen",
    },
    feature3: {
      title: "Viele Reisen",
      description:
        "Eine wachsende Sammlung von Fotos vom gesamten europäischen Kontinent",
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
      description: "Außergewöhnliche Landschaften Neapels.",
    },
  },
  // Featured Section - Empfohlener Abschnitt
  featured: {
    title: "Empfohlen: Frühling in Paris",
    description1:
      "Paris im Frühling ist ein Traum für Studenten-Fotografen. Die Stadt erwacht mit blühenden Kirschbäumen, Straßencafés und perfektem Licht zum Festhalten ikonischer Wahrzeichen.",
    description2:
      "Unsere empfohlene Sammlung zeigt den Charme von Paris aus der Sicht polnischer Studenten, die ihre Auslandsferien in der Stadt der Lichter verbracht haben.",
    exploreLink: "Entdecke die Paris-Sammlung",
    image1Alt: "Eiffelturm im Frühling",
    image2Alt: "Die Seine in Paris",
    image3Alt: "Pariser Café",
    image4Alt: "Louvre-Museum",
  },
  // Contact Section - Kontaktbereich
  contact: {
    title: "Kontakt",
    description:
      "Haben Sie Fragen oder möchten Sie Ihre eigenen studentischen Reisefotos einsenden? Wir freuen uns darauf, von Ihnen zu hören!",
    pageTitle: "Kontaktieren Sie Uns",
    getInTouch: "Wie können wir Ihnen helfen?",
    getInTouchDescription:
      "Egal, ob Sie Ihre Reisefotos einreichen möchten, Fragen zu unserer Plattform haben oder einfach nur Hallo sagen wollen, wir sind hier, um zu helfen.",
    email: {
      title: "Schreiben Sie uns",
      description: "Für allgemeine Anfragen und Fotoeinsendungen",
    },
    location: {
      title: "Unser Standort",
      description: "Besuchen Sie unser Büro des studentischen Kollektivs",
      address: "University Creative Hub, European Campus, Amsterdam", // Adresse übersetzen oder beibehalten?
    },
    phone: {
      title: "Rufen Sie uns an",
      description: "Erreichbar an Werktagen von 10:00 bis 18:00 Uhr MEZ",
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
      send: "Nachricht Senden",
      sending: "Senden...",
      successTitle: "Nachricht Gesendet!",
      successMessage:
        "Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns bald.",
    },
  },
  // Footer - Fußzeile
  footer: {
    description:
      "Eine visuelle Reise durch Europa, festgehalten durch die Linse von Studenten, die die schönsten Ecken des Kontinents entdecken.",
    quickLinks: "Schnelllinks",
    resources: "Ressourcen",
    parisCollection: "Paris-Sammlung",
    submitPhotos: "Fotos Einreichen",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfUse: "Nutzungsbedingungen",
    accessibility: "Barrierefreiheit",
    cookiePolicy: "Cookie-Richtlinie",
    cookieSettings: "Cookie-Einstellungen",
    faq: "Häufig Gestellte Fragen (FAQ)",
    sitemap: "Sitemap",
    support: "Hilfe und Support",
    copyright: "Alle Rechte vorbehalten.",
    tagline: "Mit ❤ von Studenten, für Studenten erstellt.",
    instagram: "Folgen Sie uns auf Instagram",
    twitter: "Folgen Sie uns auf Twitter",
    facebook: "Folgen Sie uns auf Facebook",
    pinterest: "Folgen Sie uns auf Pinterest",
  },
  // Slider Controls - Slider-Steuerung
  slider: {
    previous: "Vorherige Folie",
    next: "Nächste Folie",
    goToSlide: "Gehe zu Folie {{index}}",
  },
  // Lightbox - Leuchtkasten
  lightbox: {
    close: "Schließen",
    previous: "Vorheriges Foto",
    next: "Nächstes Foto",
  },
  // Theme Toggle - Theme-Umschalter
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

  // --- Abschnitte für neue Informationsseiten ---
  privacyPolicy: {
    title: "Datenschutzrichtlinie",
    metaDescription:
      "Lesen Sie die Datenschutzrichtlinie des EuroTrek-Dienstes.",
    introduction:
      "Willkommen bei der Datenschutzrichtlinie von EuroTrek. Ihre Privatsphäre ist uns wichtig, und wir bemühen uns, Ihre personenbezogenen Daten gemäß den geltenden Vorschriften, einschließlich der DSGVO, zu schützen.",
    section1Title: "1. Welche Informationen sammeln wir?",
    section1Content:
      "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen (z. B. über das Kontaktformular: Name, E-Mail-Adresse, Nachrichtentext) sowie Daten, die automatisch während der Nutzung des Dienstes gesammelt werden (z. B. IP-Adresse, Browsertyp, Geräteinformationen, Daten über Aktivitäten im Dienst mithilfe von Cookies – siehe Cookie-Richtlinie).",
    section2Title: "2. Wie verwenden wir Ihre Informationen?",
    section2Content:
      "Ihre Daten verwenden wir zur Bereitstellung und Verbesserung unserer Dienste, zur Kommunikation mit Ihnen (Beantwortung von Anfragen), zur Analyse des Website-Traffics, zur Gewährleistung der Sicherheit des Dienstes und zur Erfüllung gesetzlicher Verpflichtungen.",
    contactTitle: "Kontakt bezüglich Datenschutz",
    contactContent:
      "In Angelegenheiten bezüglich der Verarbeitung Ihrer personenbezogenen Daten oder der Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter: [puaro@vp.pl].", // E-Mail-Adresse aktualisieren
  },
  termsOfUse: {
    title: "Nutzungsbedingungen",
    metaDescription: "Lesen Sie die Nutzungsbedingungen des EuroTrek-Dienstes.",
    introduction:
      "Diese Nutzungsbedingungen regeln die Regeln für die Nutzung des Online-Dienstes EuroTrek. Durch die Nutzung des Dienstes akzeptieren Sie die nachstehenden Bestimmungen.",
    section1Title: "1. Allgemeine Regeln und Annahme der Bedingungen",
    section1Content:
      "Der EuroTrek-Dienst ist eine Plattform zur Präsentation von Reisefotografien. Die Nutzer sind verpflichtet, den Dienst gemäß Gesetz und guten Sitten zu nutzen. Es ist verboten, rechtswidrige, beleidigende oder die Rechte Dritter verletzende Inhalte zu veröffentlichen.",
    contactTitle: "Kontakt bezüglich der Nutzungsbedingungen",
    contactContent:
      "Fragen zu diesen Nutzungsbedingungen richten Sie bitte an: [puaro@vp.pl].", // E-Mail-Adresse aktualisieren
  },
  accessibility: {
    title: "Erklärung zur Barrierefreiheit",
    metaDescription:
      "Erfahren Sie mehr über unser Engagement für digitale Barrierefreiheit bei EuroTrek.",
    introduction:
      "EuroTrek ist bestrebt, die digitale Barrierefreiheit des Dienstes für einen möglichst breiten Nutzerkreis, einschließlich Menschen mit Behinderungen, zu gewährleisten. Wir arbeiten ständig an der Verbesserung der Benutzeroberfläche und der Anwendung entsprechender Barrierefreiheitsstandards wie WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Unsere Maßnahmen zur Barrierefreiheit",
    section1Content:
      "Wir bemühen uns, Lösungen wie die Verwendung von semantischem HTML-Code, die Gewährleistung der Tastaturnavigation, einen angemessenen Farbkontrast, Alternativtexte für Bilder und das Testen des Dienstes mit verschiedenen assistiven Technologien umzusetzen.",
    contactTitle: "Feedback und Kontaktdaten",
    contactContent:
      "Sollten Sie auf Barrieren in unserem Dienst stoßen, kontaktieren Sie uns bitte. Ihre Hinweise sind für uns wertvoll. Kontaktieren Sie uns unter: [puaro@vp.pl].", // E-Mail-Adresse aktualisieren
  },
  cookiePolicy: {
    title: "Cookie-Richtlinie",
    metaDescription: "Erfahren Sie, wie EuroTrek Cookies verwendet.",
    introduction:
      "Unser Dienst verwendet Cookies, um das ordnungsgemäße Funktionieren der Website zu gewährleisten, Ihre Erfahrung zu verbessern sowie zu analytischen und Marketingzwecken (mit Ihrer Zustimmung).",
    section1Title: "1. Was sind Cookies?",
    section1Content:
      "Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone) gespeichert werden, wenn Sie Websites besuchen. Sie ermöglichen es der Website, sich Ihre Aktionen und Präferenzen für eine bestimmte Zeit zu 'merken'.",
    section2Title: "2. Welche Arten von Cookies verwenden wir?",
    section2Content: "Wir verwenden verschiedene Arten von Cookies, darunter:",
    type1:
      "Notwendige Cookies: Erforderlich für die grundlegende Funktion des Dienstes (z. B. Benutzersitzung). Erfordern keine Zustimmung.",
    type2:
      "Analytische Cookies: Helfen uns zu verstehen, wie Nutzer die Website verwenden (z. B. Google Analytics). Erfordern Ihre Zustimmung.",
    type3:
      "Funktionale Cookies: Ermöglichen es, sich Ihre Auswahl und Präferenzen zu merken (z. B. Sprache). Können Zustimmung erfordern.",
    type4:
      "Marketing-Cookies: Dienen zur Anzeige personalisierter Werbung (z. B. Facebook Pixel). Erfordern Ihre Zustimmung.",
    section3Title: "3. Verwaltung von Cookies",
    section3Content:
      "Sie können Ihre Cookie-Zustimmungen jederzeit über das auf unserer Website verfügbare Zustimmungsmanagement-Tool verwalten (klicken Sie auf die Schaltfläche 'Cookie-Einstellungen'). Sie können die Cookie-Einstellungen auch in Ihrem Webbrowser ändern.",
    settingsError:
      "Cookie-Einstellungen können nicht geöffnet werden. Kontaktieren Sie den technischen Support oder versuchen Sie, die Einstellungen in Ihrem Browser zu verwalten.",
    settingsInfoPlaceholder:
      "Durch Klicken auf die Schaltfläche wird das Panel zur Verwaltung der Cookie-Einstellungen geöffnet.",
    contactTitle: "Kontakt bezüglich der Cookie-Richtlinie",
    contactContent:
      "Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte unter: [puaro@vp.pl].", // E-Mail-Adresse aktualisieren
  },
  faq: {
    title: "Häufig Gestellte Fragen (FAQ)",
    metaDescription:
      "Finden Sie Antworten auf die häufigsten Fragen zu EuroTrek.",
    q1: "Frage 1: Wie kann ich meine Fotos einreichen?",
    a1: "Derzeit sammeln wir Fotos von befreundeten Studenten. Wenn Sie an einer Zusammenarbeit interessiert sind, kontaktieren Sie uns bitte über das Kontaktformular und beschreiben Sie kurz Ihre Reisen und Ihr Portfolio.",
    q2: "Frage 2: Ist die Nutzung des Dienstes kostenpflichtig?",
    a2: "Nein, das Betrachten von Fotos und Inhalten im EuroTrek-Dienst ist für alle Nutzer völlig kostenlos.",
    q3: "Frage 3: Wer besitzt die Urheberrechte an den Fotos?",
    a3: "Die Urheberrechte an den Fotos liegen bei den Studenten-Autoren. EuroTrek besitzt eine Lizenz zur Veröffentlichung im Dienst. Details regelt der Vertrag mit dem Autor sowie unsere Nutzungsbedingungen.",
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
    title: "Hilfe und Support",
    metaDescription:
      "Benötigen Sie Hilfe? Finden Sie Kontaktinformationen und Support für EuroTrek.",
    introduction:
      "Wir sind hier, um zu helfen! Wenn Sie Fragen zur Funktionsweise des Dienstes haben, auf ein technisches Problem gestoßen sind oder andere Bedenken haben, nutzen Sie bitte die verfügbaren Support-Optionen.",
    faqTitle: "Prüfen Sie zuerst die FAQ",
    faqDescription:
      "Viele Antworten auf häufig gestellte Fragen finden Sie in unserem FAQ-Bereich.",
    goToFaq: "Gehe zu FAQ",
    contactFormTitle: "Kontaktformular",
    contactFormDescription:
      "Der beste Weg, uns in den meisten Fällen zu kontaktieren, ist das Senden einer Nachricht über unser Kontaktformular.",
    goToContact: "Gehe zu Kontakt",
    phoneTitle: "Telefonischer Support",
    phoneDescription:
      "In dringenden technischen Angelegenheiten können Sie uns telefonisch während der Geschäftszeiten [z. B. 10:00 - 16:00 Uhr] von Montag bis Freitag erreichen.", // Zeiten aktualisieren
    phoneNumber: "Rufen Sie an: [000 000 000]", // Telefonnummer aktualisieren
    responseInfo:
      "Wir bemühen uns, auf Anfragen, die über das Kontaktformular gesendet werden, innerhalb von 1-2 Werktagen zu antworten.",
  },
};
