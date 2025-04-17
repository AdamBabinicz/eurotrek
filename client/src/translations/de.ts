import { Description } from "@radix-ui/react-toast";
export default {
  // Common
  common: {
    no_photos_data: "Keine Fotodaten vorhanden.",
  },
  // Navbar
  navbar: {
    home: "Startseite",
    destinations: "Reiseziele",
    about: "Über uns",
    contact: "Kontakt",
  },
  // Destinations
  destinations: {
    exploreTitle: "Entdecke Reiseziele",
    exploreDescription:
      "Durchstöbere unsere Sammlung studentischer Reisefotos aus den schönsten Städten Europas.",
    allDestinations: "Alle Reiseziele",
    lisbon: "Lissabon",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Neapel",
    prague: "Prag",
    loadMore: "Mehr laden",
    ariaLabel: "Reiseziel-Kategorien",
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      location: "Paris, Frankreich",
      description:
        "Die Stadt der Lichter aus Studentensicht – den Zauber der Pariser Architektur und Kultur einfangen.",
    },
    "rome-hero": {
      // Key refers to Naples based on PL/CS content
      location: "Neapel, Italien",
      description:
        "Neapel ist ein Ort, an dem das Leben im Rhythmus von Espresso, Gesprächen auf der Straße und dem Duft frisch gebackener Pizza in der warmen, mediterranen Luft pulsiert.",
    },
    "lisbon-hero": {
      location: "Lissabon, Portugal",
      description:
        "Lissabon ist eine Stadt voller Licht, wo sich gepflasterte Gassen zwischen bunten Häusern schlängeln und das Leben ruhig im Rhythmus von Fado und dem Duft frischer 'pasteis de nata' fließt.",
    },
    "frankfurt-hero": {
      // Using the description from photos["frankfurt-hero"] as it seems more appropriate
      location: "Frankfurt am Main, Deutschland",
      description:
        "Über einem malerischen Platz mit einem eleganten Brunnen erhebt sich die Oper mit ihrer Fassade im Renaissancestil.",
    },
  },
  // Photos
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
        "Das historische Theatergebäude ist einer der renommiertesten Säle Portugals und befindet sich am Rossio-Platz im Stadtzentrum.",
    },
    "lisbon-belem": {
      // Key likely refers to Alfama based on description
      title: "Dächer der Altstadt",
      location: "Lissabon, Portugal",
      description:
        "Der älteste Stadtteil Lissabons ist Alfama, erbaut am Hang über dem Tejo zur Zeit der Maurenherrschaft. Hier spürt man das Flair des mittelalterlichen Lissabons.",
    },
    "lisbon-bele": {
      // Key likely refers to Belém Tower
      title: "Turm von Belém",
      location: "Lissabon, Portugal",
      description:
        "Mittelalterliche Festung mit Blick auf die Mündung des Tejo",
    },
    "boca do inferno": {
      title: "Höllenschlund (Boca do Inferno)",
      location: "Cascais, Portugal",
      description:
        "Eine Schlucht in den Küstenklippen nahe der portugiesischen Stadt Cascais.",
    },
    "capri-marina": {
      // Key likely refers to Faraglioni based on description
      title: "Strand Luigia bei den Faraglioni",
      location: "Capri, Italien",
      description:
        "Im Tyrrhenischen Meer gelegen, belegt er den 19. Platz unter den 118 Stränden der Region Neapel.",
    },
    "paris-hero": {
      // Key likely refers to Versailles based on description
      title: "Versailles – Perle des Barock",
      location: "Paris, Frankreich", // Technically near Paris
      alt: "Schloss Versailles bei Paris",
      description:
        "Versailles ist ein Symbol der französischen absoluten Monarchie und eines der prächtigsten Beispiele barocker Architektur weltweit.",
    },
    "naples-view": {
      title: "Straße am Tyrrhenischen Meer",
      location: "Neapel, Italien",
      alt: "Straße am Fuße eines Berges",
    },
    "naples-mummy": {
      title: "Gipsabdruck eines Vesuv-Opfers",
      location: "Pompeji, Italien",
      alt: "Opfer des Vulkanausbruchs",
      description:
        "Die Gipsabdrücke der Körper wurden 1863 vom Archäologen Giuseppe Fiorelli entdeckt. „Sie wurden bisher aus ethischen Gründen und aus Rücksicht auf die Gefühle, mit denen menschliche Überreste stets behandelt wurden, nicht inventarisiert.“",
    },
    "naples-stadion": {
      title: "Amphitheater in Pompeji",
      location: "Pompeji, Italien",
      alt: "Teil des Stadions in der antiken Stadt Pompeji",
      description:
        "Das Amphitheater von Pompeji – ein antikes römisches Amphitheater in Pompeji. Es ist das älteste erhaltene Bauwerk dieser Art.",
    },
    "naples-museum": {
      title: "Kleiner Pergamonaltar (Gallier-Anathema)",
      location: "Neapel, Italien",
      alt: "Archäologisches Nationalmuseum Neapel",
      description:
        "Kopie aus dem 2. Jahrhundert n. Chr. nach einem griechischen Original aus dem 2. Jahrhundert v. Chr.",
    },
    "capri-taras": {
      title: "Capri in der Nähe von Marina Piccola",
      location: "Capri, Italien",
      alt: "Terrassen auf Capri",
      description:
        "Eine charmante Dachterrasse mit Kakteen. Die meisten Dächer auf Capri sind flach. Und wie oben zu sehen ist, sind auf einigen dieser Gebäude Terrassen angelegt.",
    },
    "capri-street": {
      title: "Einkaufsstraße auf Capri",
      location: "Capri, Italien",
      alt: "Geschäfte auf Capri",
      description:
        "Capri zeichnet sich durch charmante Einkaufsstraßen aus, die von der Piazzetta ausgehen und durch die Via Camerelle und die Via Le Botteghe führen.",
    },
    "capri-port": {
      title: "Hafen in Marina Grande",
      location: "Capri, Italien",
      alt: "Angelegte Yachten",
      description:
        "Gepäckträger der Haupthotels warten darauf, Ihr Gepäck auf einem Karren mitzunehmen, und Sie können mit der Standseilbahn fahren oder ein Cabrio nehmen, da auf Capri kein Autoverkehr herrscht.",
    },
    "lisbon-hero": {
      // Key likely refers to Jerónimos Monastery based on description
      title: "Hieronymuskloster (Mosteiro dos Jerónimos)",
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
        "Eines der größten Museen der Welt und die meistbesuchte Einrichtung dieser Art weltweit.",
    },
    "paris-panteon": {
      title: "Blick auf das Panthéon vom Place du Panthéon",
      location: "Paris, Frankreich",
      alt: "Panthéon vom Place du Panthéon",
      description:
        "Das Panthéon – ein Gebäude im Quartier Latin in Paris, erbaut Ende des 18. Jahrhunderts als Kirche, die der Heiligen Genoveva geweiht ist.",
    },
    "paris-snails": {
      title: "Berühmte französische Schnecken",
      location: "Paris, Frankreich",
      alt: "Schneckengericht",
      description:
        "Es ist schwer, sich die Küche an der Seine, und besonders an der Rhône, ohne eine köstliche Schnecke auf dem Teller vorzustellen.",
    },
    "frankfurt-hero": {
      // Key refers to Alte Oper based on description
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
        "Das Museum wurde auf Anordnung des preußischen Königs Friedrich Wilhelm III. gebaut, um die Sammlungen antiker Kunst der breiten Öffentlichkeit zugänglich zu machen.",
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
        "Ein Freiluftdenkmal für die klassischen Komponisten Ludwig van Beethoven, Joseph Haydn und Wolfgang Amadeus Mozart aus dem Jahr 1904.",
    },
    "prague-bridge": {
      title: "Blick auf die Moldau in Prag",
      location: "Prag, Tschechien",
      alt: "Die Moldau in Prag",
    },
    "prague-wit": {
      title: "Domschatz von St. Veit",
      location: "Prag, Tschechien",
      alt: "Schatzkammer in Prag",
      description:
        "Artefakte im Domschatz des Veitsdoms auf der Prager Burg in Prag.",
    },
    "prague-dance": {
      title: "Tanzendes Haus",
      location: "Prag, Tschechien",
      alt: "Ginger und Fred",
      description:
        "Ein avantgardistisches Gebäude, entworfen von dem Architektenpaar Vlado Milunić und Frank Gehry im dekonstruktivistischen Stil.",
    },
    "prague-kafka": {
      title: "Drehbarer Kopf von Franz Kafka",
      location: "Prag, Tschechien",
      alt: "Kopf von Franz Kafka",
      description:
        "David Černý entwarf dieses umstrittene Kunstwerk für das Geschäfts- und Bürogebäude 'Quadrio' an der Národní třída.",
    },
  },
  // About Section
  about: {
    title: "Über EuroTrek",
    description1:
      "EuroTrek ist ein kollektives Fototagebuch, erstellt von Universitätsstudenten, die in Polen studieren. Unsere Mission ist es, die Schönheit, Kultur und Erfahrungen studentischer Reisen durch authentische Fotografie zu präsentieren.",
    description2:
      "Diese Plattform dient sowohl als Inspiration für zukünftige studentische Reisende als auch als Erinnerungsbuch für diejenigen, die ihre europäischen Abenteuer bereits begonnen haben. Alle Fotos werden von Studenten gemacht und zeigen Europa aus einer frischen, jugendlichen Perspektive.",
    pageTitle: "Über unsere Reise",
    pageDescription1:
      "EuroTrek entstand aus der Leidenschaft für Reisefotografie und dem Wunsch, die einzigartigen Erlebnisse von Studenten auf Entdeckungsreise in den lebendigsten Städten Europas festzuhalten.",
    pageDescription2:
      "Was als kleine Gruppe begann, die Fotos unter Kommilitonen in Polen austauschte, entwickelte sich zu einer Plattform, die studentische Fotografen aus verschiedenen Ländern, mit unterschiedlichem Hintergrund und aus verschiedenen Studienrichtungen verbindet, die die gemeinsame Liebe zum Entdecken und zum visuellen Geschichtenerzählen teilen.",
    pageDescription3:
      "Unsere Beitragenden sind Studenten wie Sie, die ihr Studium mit Abenteuern auf dem ganzen Kontinent verbinden und dabei authentische Momente festhalten.",
    mission: {
      title: "Unsere Mission",
      description:
        "Studentisches Reisen durch authentisches visuelles Storytelling zu inspirieren und eine unterstützende Gemeinschaft für junge Fotografen zu schaffen, die Europa entdecken.",
    },
    team: {
      title: "Das Studentenkollektiv",
      description:
        "Unser Team besteht ausschließlich aus studentischen Fotografen, Autoren und Webentwicklern von Universitäten aus aller Welt. Jeder Mitwirkende bringt seine einzigartige Perspektive und Erfahrung in die Plattform ein.",
    },
    feature1: {
      title: "Studentische Fotografen",
      description: "Fotos von internationalen Studenten aus aller Welt",
    },
    feature2: {
      title: "Authentische Erlebnisse",
      description:
        "Echte Reisemomente jenseits der typischen Touristenattraktionen",
    },
    feature3: {
      title: "Vielfältige Reisen",
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
      description: "Die außergewöhnlichen Landschaften Neapels.",
    },
  },
  // Featured Section
  featured: {
    title: "Im Fokus: Frühling in Paris",
    description1:
      "Paris im Frühling ist ein Traum für studentische Fotografen. Die Stadt erwacht mit blühenden Kirschbäumen, Straßencafés und perfektem Licht zum Einfangen ikonischer Wahrzeichen.",
    description2:
      "Unsere vorgestellte Sammlung zeigt den Charme von Paris durch die Augen polnischer Studenten, die ihre Ferien im Ausland in der Stadt der Lichter verbracht haben.",
    exploreLink: "Entdecke die Paris-Sammlung",
    image1Alt: "Eiffelturm im Frühling",
    image2Alt: "Die Seine in Paris",
    image3Alt: "Pariser Straßencafé",
    image4Alt: "Louvre-Museum",
  },
  // Contact Section
  contact: {
    title: "Kontakt",
    description:
      "Haben Sie Fragen oder möchten Sie Ihre eigenen studentischen Reisefotos einreichen? Wir freuen uns darauf, von Ihnen zu hören!",
    pageTitle: "Kontakt aufnehmen",
    getInTouch: "Wie können wir Ihnen helfen?",
    getInTouchDescription:
      "Ob Sie Ihre Reisefotos einreichen möchten, Fragen zu unserer Plattform haben oder einfach nur Hallo sagen wollen, wir sind hier, um zu helfen.",
    email: {
      title: "Schreiben Sie uns",
      description: "Für allgemeine Anfragen und Foto-Einreichungen",
    },
    location: {
      title: "Unser Standort",
      description: "Besuchen Sie unser Büro des Studentenkollektivs",
      address: "University Creative Hub, European Campus, Amsterdam", // Keeping address in English as it's likely a proper name/location.
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
        "Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns bald bei Ihnen melden.",
    },
  },
  // Footer
  footer: {
    description:
      "Eine visuelle Reise durch Europa, festgehalten durch die Linse von Studenten, die die schönsten Ecken des Kontinents entdecken.",
    quickLinks: "Schnelllinks",
    resources: "Ressourcen",
    parisCollection: "Paris-Sammlung",
    submitPhotos: "Fotos einreichen",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfUse: "Nutzungsbedingungen",
    accessibility: "Barrierefreiheit",
    copyright: "© {{year}} EuroTrek. Alle Rechte vorbehalten.", // Added year placeholder
    tagline: "Mit ❤ von Studenten, für Studenten erstellt.",
    instagram: "Folge uns auf Instagram",
    twitter: "Folge uns auf Twitter",
    facebook: "Folge uns auf Facebook",
    pinterest: "Folge uns auf Pinterest",
  },
  // Slider Controls
  slider: {
    previous: "Vorherige Folie",
    next: "Nächste Folie",
    goToSlide: "Gehe zu Folie {{index}}",
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
};
