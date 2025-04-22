import { Description } from "@radix-ui/react-toast";
export default {
  // Common
  common: {
    no_photos_data: "Žádná data fotografií.",
  },
  // Navbar
  navbar: {
    home: "Domů",
    destinations: "Destinace",
    about: "O nás",
    contact: "Kontakt",
  },
  // Destinations
  destinations: {
    exploreTitle: "Objevujte Destinace",
    exploreDescription:
      "Prohlédněte si naši sbírku studentských fotografií z cest po nejkrásnějších městech Evropy.",
    allDestinations: "Všechny Destinace",
    lisbon: "Lisabon",
    paris: "Paříž",
    berlin: "Berlín",
    capri: "Capri",
    naples: "Neapol",
    prague: "Praha",
    loadMore: "Načíst další",
    ariaLabel: "Kategorie destinací",
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      location: "Paříž, Francie",
      description:
        "Město světel očima studenta - zachycení kouzla pařížské architektury a kultury.",
    },
    "rome-hero": {
      // Assuming 'rome-hero' key refers to Naples based on PL content
      location: "Neapol, Itálie",
      description:
        "Neapol je místo, kde život pulzuje v rytmu espressa, rozhovorů na ulici a vůně čerstvě upečené pizzy v teplém středomořském vzduchu.",
    },
    "lisbon-hero": {
      location: "Lisabon, Portugalsko",
      description:
        "Lisabon je město plné světla, kde se dlážděné uličky vinou mezi barevnými domy a život plyne klidně v rytmu fada a vůně čerstvých 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      // Note: Polish description seems to be a copy-paste from Lisbon. Translating as is.
      location: "Frankfurt nad Mohanem, Německo",
      description:
        "Lisabon je město plné světla, kde se dlážděné uličky vinou mezi barevnými domy a život plyne klidně v rytmu fada a vůně čerstvých 'pasteis de nata'.",
    },
  },
  // Photos
  photos: {
    view: "Zobrazit fotografii {{title}}",
    noPhotos: "Pro tuto destinaci zatím nejsou k dispozici žádné fotografie.",
    "paris-sunset": {
      title: "Západ slunce v Paříži",
      location: "Paříž, Francie",
      alt: "Eiffelova věž při západu slunce v Paříži",
    },
    "lisbon-tram": {
      title: "Pohled na Národní divadlo D. Maria II",
      location: "Lisabon, Portugalsko",
      description:
        "Historická budova divadla je jedním z nejprestižnějších sálů Portugalska a nachází se na náměstí Rossio v centru města.",
    },
    "lisbon-belem": {
      // Key likely refers to Alfama based on description
      title: "Střechy Starého Města",
      location: "Lisabon, Portugalsko",
      description:
        "Nejstarší čtvrtí Lisabonu je Alfama, postavená na svahu nad řekou Tejo v době maurské nadvlády. Právě zde můžete pocítit atmosféru středověkého Lisabonu.",
    },
    "lisbon-bele": {
      // Key likely refers to Belém Tower
      title: "Belémská věž",
      location: "Lisabon, Portugalsko",
      description: "Středověká pevnost s výhledem na ústí řeky Tejo",
    },
    "boca do inferno": {
      title: "Ústa Pekla",
      location: "Cascais, Portugalsko",
      description:
        "Propast nacházející se v pobřežních útesech poblíž portugalského města Cascais",
    },
    "capri-marina": {
      // Key likely refers to Faraglioni based on description
      title: "Pláž Luigia u Faraglioni",
      location: "Capri, Itálie",
      description:
        "Nachází se v Tyrhénském moři, zaujímá 19. místo mezi 118 plážemi neapolského regionu.",
    },
    "paris-hero": {
      // Key likely refers to Versailles based on description
      title: "Versailles – Perla Baroka",
      location: "Paříž, Francie", // Technically near Paris
      alt: "Zámek Versailles u Paříže",
      description:
        "Versailles je symbolem francouzské absolutní monarchie a jedním z nejvelkolepějších příkladů barokní architektury na světě.",
    },
    "naples-view": {
      title: "Cesta nad Tyrhénským mořem",
      location: "Neapol, Itálie",
      alt: "Cesta na úpatí hory",
    },
    "naples-mummy": {
      title: "Odlitek oběti Vesuvu",
      location: "Pompeje, Itálie",
      alt: "Oběti výbuchu sopky",
      description:
        "Odlitky těl byly objeveny v roce 1863 archeologem Giuseppem Fiorellim. „Dosud nebyly inventarizovány z etických důvodů a citů, s nimiž se vždy zacházelo s lidskými ostatky.“",
    },
    "naples-stadion": {
      title: "Amfiteátr v Pompejích",
      location: "Pompeje, Itálie",
      alt: "Část stadionu ve starověkém městě Pompeje",
      description:
        "Amfiteátr v Pompejích – starověký římský amfiteátr nacházející se v Pompejích. Je nejstarší dochovanou stavbou tohoto typu.",
    },
    "naples-museum": {
      title: "Malý pergamonský dar",
      location: "Neapol, Itálie",
      alt: "Národní archeologické muzeum v Neapoli",
      description:
        "Kopie z 2. století n. l. podle řeckého originálu z 2. století př. n. l.",
    },
    "capri-taras": {
      title: "Capri poblíž Marina Piccola",
      location: "Capri, Itálie",
      alt: "Terasy na Capri",
      description:
        "Okouzlující střešní terasa s kaktusy. Většina střech budov na Capri je plochá. A jak je vidět výše, na některých z těchto budov jsou založeny terasy.",
    },
    "capri-street": {
      title: "Obchodní ulice na Capri",
      location: "Capri, Itálie",
      alt: "Obchody na Capri",
      description:
        "Capri se vyznačuje půvabnými obchodními uličkami, které začínají na Piazzettě a vedou přes Via Camerelle a Via Le Botteghe.",
    },
    "capri-port": {
      title: "Přístav v Marina Grande",
      location: "Capri, Itálie",
      alt: "Zakotvené jachty",
      description:
        "Nosiči zavazadel z hlavních hotelů čekají, aby vzali vaše zavazadlo na vozík, a vy můžete vyjet lanovkou nebo jet kabrioletem, protože na Capri není automobilová doprava.",
    },
    "lisbon-hero": {
      // Key likely refers to Jerónimos Monastery based on description
      title: "Klášter jeronymitů",
      location: "Lisabon, Portugalsko",
      alt: "Klášter jeronymitů v Belému",
      description:
        "Postaven v 1. polovině 16. století, je považován za perlu a kvintesenci manuelského stylu, který je pro Portugalsko specifickým spojením gotiky a renesance.",
    },
    "paris-eiffel": {
      title: "Eiffelova věž",
      location: "Paříž, Francie",
      alt: "Večerní osvětlení Eiffelovy věže v Paříži",
      description:
        "Nejznámější architektonický objekt Paříže, považovaný za symbol tohoto města a někdy celé Francie.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "Paříž, Francie",
      alt: "Bývalý královský palác v Paříži",
      description:
        "Jedno z největších muzeí na světě, je také nejnavštěvovanější institucí tohoto typu na světě.",
    },
    "paris-panteon": {
      title: "Pohled na Pantheon z Place du Panthéon",
      location: "Paříž, Francie",
      alt: "Pantheon z Place du Panthéon",
      description:
        "Pantheon – budova v Latinské čtvrti v Paříži, postavená na konci 18. století jako kostel zasvěcený svaté Jenovéfě.",
    },
    "paris-snails": {
      title: "Slavní francouzští šneci",
      location: "Paříž, Francie",
      alt: "Pokrm ze šneků",
      description:
        "Těžko si představit kuchyni nad Seinou, a zvláště nad Rhônou, bez lahodného šneka na talíři.",
    },
    "frankfurt-hero": {
      // Key likely refers to Alte Oper based on description
      title: "Stará opera (Alte Oper), Frankfurt",
      location: "Frankfurt nad Mohanem, Německo",
      alt: "Stará opera (Alte Oper), Frankfurt",
      description:
        "Tyčící se nad malebným náměstím zdobeným elegantní fontánou se nachází Opera, která má fasádu v renesančním stylu.",
    },
    "berlin-gate": {
      title: "Braniborská brána",
      location: "Berlín, Německo",
      alt: "Braniborská brána",
      description:
        "Braniborská brána jako symbol Míru a Svobody od 3. října 1990, v den výročí sjednocení Německa.",
    },
    "berlin-museum": {
      title: "Staré muzeum (Altes Museum)",
      location: "Berlín, Německo",
      alt: "Staré muzeum",
      description:
        "Muzeum bylo postaveno za účelem zpřístupnění sbírek antického umění široké veřejnosti na příkaz pruského krále Fridricha Viléma III.",
    },
    "berlin-victory-column": {
      title: "Vítězný sloup (Siegessäule)",
      location: "Berlín, Německo",
      alt: "Vítězný sloup",
      description:
        "Sloup nacházející se v parku Großer Tiergarten v Berlíně připomínající vítězství Pruska nad Dánskem v dánské válce roku 1864.",
    },
    "berlin-music": {
      title: "Pomník Beethovena, Haydna a Mozarta",
      location: "Berlín, Německo",
      alt: "Pomník tří hudebních géniů",
      description:
        "Venkovní pomník klasických skladatelů: Ludwiga van Beethovena, Josepha Haydna a Wolfganga Amadea Mozarta z roku 1904.",
    },
    "prague-bridge": {
      title: "Pohled na Vltavu v Praze",
      location: "Praha, Česko",
      alt: "Řeka Vltava v Praze",
    },
    "prague-wit": {
      title: "Svatovítský poklad",
      location: "Praha, Česko",
      alt: "Pokladnice v Praze",
      description:
        "Artefakty v pokladnici Katedrály svatého Víta na Pražském hradě v Praze.",
    },
    "prague-dance": {
      title: "Tančící dům",
      location: "Praha, Česko",
      alt: "Ginger a Fred",
      description:
        "Avantgardní budova navržená dvojicí architektů: Vlado Milunićem a Frankem Gehrym ve stylu dekonstruktivismu.",
    },
    "prague-kafka": {
      title: "Otočná hlava Franze Kafky",
      location: "Praha, Česko",
      alt: "Hlava Franze Kafky",
      description:
        "David Černý navrhl toto kontroverzní umělecké dílo pro obchodní a kancelářskou budovu 'Quadrio' na Národní třídě.",
    },
  },
  // About Section
  about: {
    title: "O EuroTrek",
    description1:
      "EuroTrek je kolektivní fotografický deník vytvořený vysokoškolskými studenty studujícími v Polsku. Naším posláním je prezentovat krásu, kulturu a zážitky ze studentských cest prostřednictvím autentické fotografie.",
    description2:
      "Tato platforma slouží jako inspirace pro budoucí studenty-cestovatele i jako kniha vzpomínek pro ty, kteří již zahájili svá evropská dobrodružství. Všechny fotografie jsou pořízeny studenty a ukazují Evropu ze svěží, mladistvé perspektivy.",
    pageTitle: "O naší cestě",
    pageDescription1:
      "EuroTrek se zrodil z vášně pro cestovatelskou fotografii a touhy zachytit jedinečné zážitky studentů-objevitelů v nejživějších městech Evropy.",
    pageDescription2:
      "To, co začalo jako malá skupina sdílející fotografie mezi spolužáky studujícími v Polsku, se rozrostlo v platformu spojující studenty-fotografy z různých zemí, prostředí a akademických oborů, kteří sdílejí společnou lásku k objevování a vizuálnímu vyprávění.",
    pageDescription3:
      "Naši přispěvatelé jsou studenti jako vy, kteří vyvažují své studium s dobrodružstvími po celém kontinentu a zachycují autentické okamžiky na cestě.",
    mission: {
      title: "Naše poslání",
      description:
        "Inspirovat ke studentským cestám prostřednictvím autentického vizuálního vyprávění a vytvářet podpůrnou komunitu pro mladé fotografy objevující Evropu.",
    },
    team: {
      title: "Studentský kolektiv",
      description:
        "Náš tým se skládá výhradně ze studentů-fotografů, spisovatelů a webových vývojářů z univerzit po celém světě. Každý přispěvatel přináší na platformu svou jedinečnou perspektivu a zkušenost.",
    },
    feature1: {
      title: "Studenti-fotografové",
      description: "Fotografie pořízené zahraničními studenty z celého světa",
    },
    feature2: {
      title: "Autentické zážitky",
      description: "Skutečné momenty z cest mimo typické turistické atrakce",
    },
    feature3: {
      title: "Mnoho cest",
      description: "Rostoucí sbírka fotografií z celého evropského kontinentu",
    },
    image1: {
      title: "Lisabon",
      description: "Klášter jeronymitů.",
    },
    image2: {
      title: "Německo a Francie",
      description: "Nezapomenutelná cesta přes Německo a Francii.",
    },
    image3: {
      title: "Neapol",
      description: "Neobyčejné krajiny Neapole.",
    },
  },
  // Featured Section
  featured: {
    title: "Doporučeno: Jaro v Paříži",
    description1:
      "Paříž na jaře je snem pro studenty-fotografy. Město ožívá kvetoucími třešněmi, kavárenskými zahrádkami a ideálním světlem pro zachycení ikonických památek.",
    description2:
      "Naše doporučená kolekce ukazuje kouzlo Paříže očima polských studentů, kteří strávili své prázdniny v zahraničí ve Městě světla.",
    exploreLink: "Objevte pařížskou kolekci",
    image1Alt: "Eiffelova věž na jaře",
    image2Alt: "Řeka Seina v Paříži",
    image3Alt: "Pařížská kavárna",
    image4Alt: "Muzeum Louvre",
  },
  // Contact Section
  contact: {
    title: "Kontakt",
    description:
      "Máte dotazy nebo chcete zaslat vlastní studentské fotografie z cest? Rádi se s vámi spojíme!",
    pageTitle: "Kontaktujte nás",
    getInTouch: "Jak vám můžeme pomoci?",
    getInTouchDescription:
      "Ať už chcete odeslat své cestovatelské fotografie, máte dotazy ohledně naší platformy, nebo se jen chcete pozdravit, jsme tu, abychom vám pomohli.",
    email: {
      title: "Napište nám",
      description: "Pro obecné dotazy a zasílání fotografií",
    },
    location: {
      title: "Naše poloha",
      description: "Navštivte naši kancelář studentského kolektivu",
      address: "University Creative Hub, European Campus, Amsterdam", // Note: Address kept in English as it's likely a proper name/location.
    },
    phone: {
      title: "Zavolejte nám",
      description: "Dostupní v pracovní dny od 10:00 do 18:00 SEČ",
    },
    form: {
      name: "Vaše jméno",
      namePlaceholder: "Zadejte své jméno",
      nameError: "Jméno je povinné",
      email: "Váš email",
      emailPlaceholder: "Zadejte svůj email",
      emailError: "Vyžadován platný email",
      subject: "Předmět",
      subjectPlaceholder: "O čem chcete mluvit?",
      subjectError: "Předmět je povinný",
      message: "Zpráva",
      messagePlaceholder: "Sem napište svou zprávu...",
      messageError: "Zpráva musí mít alespoň 10 znaků",
      send: "Odeslat zprávu",
      sending: "Odesílání...",
      successTitle: "Zpráva odeslána!",
      successMessage: "Děkujeme za kontaktování. Brzy se vám ozveme.",
    },
  },
  // Footer
  footer: {
    description:
      "Vizuální cesta Evropou zachycená objektivem studentů, kteří objevují nejkrásnější zákoutí kontinentu.",
    quickLinks: "Rychlé odkazy",
    resources: "Zdroje",
    parisCollection: "Pařížská kolekce",
    submitPhotos: "Odeslat fotografie",
    privacyPolicy: "Zásady ochrany osobních údajů",
    termsOfUse: "Podmínky použití",
    accessibility: "Přístupnost",
    copyright: "Všechna práva vyhrazena.", // Added year placeholder assuming it might be dynamic
    tagline: "Vytvořeno s ❤ studenty pro studenty.",
    instagram: "Sledujte nás na Instagramu",
    twitter: "Sledujte nás na Twitteru",
    facebook: "Sledujte nás na Facebooku",
    pinterest: "Sledujte nás na Pinterestu",
  },
  // Slider Controls
  slider: {
    previous: "Předchozí snímek",
    next: "Další snímek",
    goToSlide: "Přejít na snímek {{index}}",
  },
  // Lightbox
  lightbox: {
    close: "Zavřít",
    previous: "Předchozí fotografie",
    next: "Další fotografie",
  },
  // Theme Toggle
  theme: {
    toggleLight: "Přepnout na světlý režim",
    toggleDark: "Přepnout na tmavý režim",
  },
  // Language
  language: {
    changeLanguage: "Změnit jazyk",
  },
  // Home
  home: {
    heroAriaLabel: "Doporučené destinace",
  },
};
