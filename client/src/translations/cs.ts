import { Description } from "@radix-ui/react-toast"; // Tento import se zdá být v samotném překladovém objektu nepoužitý, ale ponechávám ho, pokud je potřeba jinde.

export default {
  // Common - Běžné
  common: {
    no_photos_data: "Nejsou k dispozici žádná data fotografií.",
    lastUpdated: "Poslední aktualizace",
    placeholderContent:
      "Obsah této sekce se právě připravuje. Brzy bude doplněn.",
  },

  // Routes - Trasy (URL Slugs)
  routes: {
    // --- Hlavní stránky (odpovídající navigaci a sitemapě) ---
    home: "", // Prázdné pro kořenovou cestu v daném jazyce (např. /cs/)
    destinations: "cesty", // Nebo "destinace"
    about: "o-nas",
    contact: "kontakt",

    // --- Detailní cesty (základ pro parametry) ---
    destinationDetail: "cesta", // např. /cs/cesta/praha nebo /cs/cesta/:id

    // --- Patička a nové informační stránky ---
    faq: "faq",
    privacy: "zasady-ochrany-osobnich-udaju",
    terms: "podminky-uzivani", // Nebo jen 'podminky'
    sitemap: "mapa-stranek",
    accessibility: "pristupnost",
    cookiePolicy: "zasady-cookies",
    support: "podpora", // Nebo 'pomoc'
  },

  // Navbar - Navigace
  navbar: {
    home: "Domů",
    destinations: "Cesty", // Nebo "Destinace"
    about: "O nás",
    contact: "Kontakt",
  },

  // Destinations - Destinace (Texty UI)
  destinations: {
    exploreTitle: "Objevte Cesty",
    exploreDescription:
      "Prohlédněte si naši sbírku studentských cestovních fotografií z nejkrásnějších evropských měst.",
    allDestinations: "Všechny Cesty",
    lisbon: "Lisabon",
    paris: "Paříž",
    berlin: "Berlín",
    capri: "Capri",
    naples: "Neapol",
    prague: "Praha",
    loadMore: "Načíst další",
    ariaLabel: "Kategorie cest",
  },

  // Destinations Data - Data destinací (Jména a země)
  destinationsData: {
    lisbon: { name: "Lisabon", country: "Portugalsko" },
    paris: { name: "Paříž", country: "Francie" },
    berlin: { name: "Berlín", country: "Německo" },
    capri: { name: "Capri", country: "Itálie" },
    naples: { name: "Neapol", country: "Itálie" },
    prague: { name: "Praha", country: "Česká republika" }, // Nebo "Česko"
  },

  // Hero Slides - Hlavní slidery
  heroSlides: {
    "paris-hero": {
      location: "Paříž, Francie",
      description:
        "Město světel očima studenta - zachycení kouzla pařížské architektury a kultury.",
    },
    "rome-hero": {
      // Poznámka: Původní lokace byla Neapol
      location: "Neapol, Itálie",
      description:
        "Neapol je místo, kde život plyne v rytmu espressa, pouličních rozhovorů a vůně čerstvě upečené pizzy linoucí se teplým středomořským vzduchem.",
    },
    "lisbon-hero": {
      location: "Lisabon, Portugalsko",
      description:
        "Lisabon je město plné světla, kde se dlážděné uličky vinou mezi barevnými domy a život klidně plyne v rytmu fada a vůně čerstvých 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      location: "Frankfurt nad Mohanem, Německo",
      // Použit původní popis pro konzistenci dle požadavku
      description:
        "Lisabon je město plné světla, kde se dlážděné uličky vinou mezi barevnými domy a život klidně plyne v rytmu fada a vůně čerstvých 'pasteis de nata'.",
    },
  },

  // Photos - Fotografie
  photos: {
    view: "Zobrazit fotografii {{title}}",
    noPhotos: "Pro tuto cestu zatím nejsou k dispozici žádné fotografie.",
    "paris-sunset": {
      title: "Západ slunce v Paříži",
      location: "Paříž, Francie",
      alt: "Eiffelova věž při západu slunce v Paříži",
    },
    "lisbon-tram": {
      title: "Pohled na Národní divadlo D. Marie II.",
      location: "Lisabon, Portugalsko",
      description:
        "Historická budova divadla je jedním z nejprestižnějších sálů Portugalska a nachází se na náměstí Rossio v centru města.",
    },
    "lisbon-belem": {
      title: "Střechy Starého Města",
      location: "Lisabon, Portugalsko",
      description:
        "Nejstarší čtvrtí Lisabonu je Alfama, postavená na svahu nad řekou Tejo za vlády Maurů. Právě zde můžete pocítit atmosféru středověkého Lisabonu.",
    },
    "lisbon-bele": {
      title: "Belémská věž",
      location: "Lisabon, Portugalsko",
      description: "Středověká pevnost s výhledem na ústí řeky Tejo",
    },
    "boca do inferno": {
      title: "Ústa Pekel",
      location: "Cascais, Portugalsko",
      description:
        "Propast nacházející se v pobřežních útesech poblíž portugalského města Cascais",
    },
    "capri-marina": {
      title: "Pláž Luigia u Faraglioni",
      location: "Capri, Itálie",
      description:
        "Nachází se v Tyrhénském moři, zaujímá 19. místo mezi 118 plážemi neapolského regionu.",
    },
    "paris-hero": {
      // Duplicitní klíč jako v původním pl.ts
      title: "Versailles – Perla Baroka",
      location: "Paříž, Francie",
      alt: "Zámek Versailles u Paříže",
      description:
        "Versailles je symbolem francouzské absolutní monarchie a jedním z nejvelkolepějších příkladů barokní architektury na světě.",
    },
    "naples-view": {
      title: "Cesta u Tyrhénského moře",
      location: "Neapol, Itálie",
      alt: "Cesta na úpatí hory",
      description: "Malebná trasa podél pobřeží.",
    },
    "naples-mummy": {
      title: "Odlitek oběti Vesuvu",
      location: "Pompeje, Itálie",
      alt: "Oběti výbuchu sopky",
      description:
        "Odlitky těl byly objeveny v roce 1863 archeologem Giuseppem Fiorellim. 'Dodnes nebyly inventarizovány z etických důvodů a citlivosti, s jakou se vždy přistupovalo k lidským ostatkům.'",
    },
    "naples-stadion": {
      title: "Amfiteátr v Pompejích",
      location: "Pompeje, Itálie",
      alt: "Část stadionu ve starověkém městě Pompeje",
      description:
        "Amfiteátr v Pompejích – starověký římský amfiteátr, nacházející se v Pompejích. Je nejstarší dochovanou stavbou svého druhu.",
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
        "Okouzlující střešní terasa s kaktusy. Většina střech budov na Capri je plochá. A jak je vidět výše, na některých z těchto budov jsou zřízeny terasy.",
    },
    "capri-street": {
      title: "Nákupní ulice na Capri",
      location: "Capri, Itálie",
      alt: "Obchody na Capri",
      description:
        "Capri se vyznačuje okouzlujícími nákupními uličkami, které začínají na Piazzettě a vedou přes Via Camerelle a Via Le Botteghe.",
    },
    "capri-port": {
      title: "Přístav v Marina Grande",
      location: "Capri, Itálie",
      alt: "Zakotvené jachty",
      description:
        "Nosiči zavazadel z hlavních hotelů čekají, aby vám vzali zavazadla na vozíku, a vy můžete jet lanovkou nebo kabrioletem, protože na Capri není automobilový provoz.",
    },
    "lisbon-hero": {
      // Duplicitní klíč jako v původním pl.ts
      title: "Klášter Jeronymitů",
      location: "Lisabon, Portugalsko",
      alt: "Klášter Jeronymitů v Belému",
      description:
        "Postaven v první polovině 16. století, je považován za perlu a kvintesenci manuelského stylu, specifického portugalského spojení gotiky a renesance.",
    },
    "paris-eiffel": {
      title: "Eiffelova věž",
      location: "Paříž, Francie",
      alt: "Večerní osvětlení Eiffelovy věže v Paříži",
      description:
        "Nejznámější architektonická památka Paříže, považovaná za symbol tohoto města a někdy i celé Francie.",
    },
    "paris-louvre": {
      title: "Muzeum Louvre",
      location: "Paříž, Francie",
      alt: "Bývalý královský palác v Paříži",
      description:
        "Jedno z největších muzeí na světě, je také nejnavštěvovanější institucí svého druhu na světě.",
    },
    "paris-panteon": {
      title: "Pohled na Panthéon z náměstí Place du Panthéon",
      location: "Paříž, Francie",
      alt: "Panthéon z náměstí Place du Panthéon",
      description:
        "Panthéon – budova v Latinské čtvrti v Paříži, postavená na konci 18. století jako kostel zasvěcený svaté Jenovéfě.",
    },
    "paris-snails": {
      title: "Slavní francouzští šneci",
      location: "Paříž, Francie",
      alt: "Pokrm ze šneků",
      description:
        "Je těžké si představit kuchyni na Seině, a zejména na Rhôně, bez lahodného šneka na talíři.",
    },
    "frankfurt-hero": {
      // Duplicitní klíč jako v původním pl.ts
      title: "Stará opera (Alte Oper), Frankfurt",
      location: "Frankfurt nad Mohanem, Německo",
      alt: "Stará opera (Alte Oper), Frankfurt",
      description:
        "Tyčící se nad malebným náměstím zdobeným elegantní fontánou stojí Opera, která má fasádu v renesančním stylu.",
    },
    "berlin-gate": {
      title: "Braniborská brána",
      location: "Berlín, Německo",
      alt: "Braniborská brána",
      description:
        "Braniborská brána jako symbol Míru a Svobody od 3. října 1990, výročí znovusjednocení Německa.",
    },
    "berlin-museum": {
      title: "Staré muzeum (Altes Museum)",
      location: "Berlín, Německo",
      alt: "Staré muzeum (Altes Museum)",
      description:
        "Muzeum bylo postaveno s cílem zpřístupnit sbírky antického umění široké veřejnosti na příkaz pruského krále Fridricha Viléma III.",
    },
    "berlin-victory-column": {
      title: "Vítězný sloup",
      location: "Berlín, Německo",
      alt: "Vítězný sloup",
      description:
        "Sloup nacházející se v parku Großer Tiergarten v Berlíně připomínající vítězství Pruska nad Dánskem v dánské válce roku 1864.",
    },
    "berlin-music": {
      title: "Památník Beethovena, Haydna a Mozarta",
      location: "Berlín, Německo",
      alt: "Památník tří hudebních géniů",
      description:
        "Venkovní památník klasických skladatelů Ludwiga van Beethovena, Josepha Haydna a Wolfganga Amadea Mozarta z roku 1904.",
    },
    "prague-bridge": {
      title: "Pohled na Vltavu v Praze",
      location: "Praha, Česká republika",
      alt: "Řeka Vltava v Praze",
      description:
        "Celá Praha se zhlíží ve Vltavě a usmívá se na ni jako do kouzelného zrcadla.",
    },
    "prague-wit": {
      title: "Svatovítský poklad",
      location: "Praha, Česká republika",
      alt: "Poklad v Praze",
      description:
        "Artefakty v pokladu Katedrály svatého Víta na Pražském hradě.",
    },
    "prague-dance": {
      title: "Tančící dům",
      location: "Praha, Česká republika",
      alt: "Ginger a Fred",
      description:
        "Avantgardní budova navržená architektonickým párem Vlado Milunićem a Frankem Gehrym v dekonstruktivistickém stylu.",
    },
    "prague-kafka": {
      title: "Otočná hlava Franze Kafky",
      location: "Praha, Česká republika",
      alt: "Hlava Franze Kafky",
      description:
        "David Černý navrhl toto kontroverzní umělecké dílo pro obchodní a kancelářskou budovu 'Quadrio' na Národní třídě.",
    },
  },

  // About Section - O nás
  about: {
    title: "O EuroTrek",
    description1:
      "EuroTrek je kolektivní fotografický deník vytvořený univerzitními studenty studujícími v Polsku. Naším posláním je prezentovat krásu, kulturu a zážitky ze studentských cest prostřednictvím autentické fotografie.",
    description2:
      "Tato platforma slouží jako inspirace pro budoucí studentské cestovatele i jako pamětní kniha pro ty, kteří již svá evropská dobrodružství začali. Všechny fotografie jsou pořízeny studenty a ukazují Evropu svěží, mladistvou perspektivou.",
    pageTitle: "O naší cestě",
    pageDescription1:
      "EuroTrek se zrodil z vášně pro cestovní fotografii a touhy zachytit jedinečné zážitky studentských průzkumníků v nejživějších evropských městech.",
    pageDescription2:
      "To, co začalo jako malá skupina sdílející fotografie mezi spolužáky studujícími v Polsku, se rozrostlo v platformu spojující studentské fotografy z různých zemí, prostředí a akademických oborů, kteří sdílejí společnou lásku k objevování a vizuálnímu vyprávění.",
    pageDescription3:
      "Naši přispěvatelé jsou studenti jako vy, kteří vyvažují studium s dobrodružstvími po celém kontinentu a zachycují autentické okamžiky na cestě.",
    mission: {
      title: "Naše mise",
      description:
        "Inspirovat ke studentským cestám prostřednictvím autentického vizuálního vyprávění a podporovat komunitu mladých fotografů objevujících Evropu.",
    },
    team: {
      title: "Studentský kolektiv",
      description:
        "Náš tým se skládá výhradně ze studentských fotografů, spisovatelů a webových vývojářů z univerzit po celém světě. Každý přispěvatel přináší na platformu svou jedinečnou perspektivu a zkušenosti.",
    },
    feature1: {
      title: "Studentští fotografové",
      description: "Fotografie pořízené zahraničními studenty z celého světa",
    },
    feature2: {
      title: "Autentické zážitky",
      description: "Skutečné cestovní okamžiky mimo typická turistická místa",
    },
    feature3: {
      title: "Mnoho cest",
      description: "Rostoucí sbírka fotografií z celého evropského kontinentu",
    },
    image1: {
      title: "Lisabon",
      description: "Klášter Jeronymitů.",
    },
    image2: {
      title: "Německo & Francie",
      description: "Nezapomenutelná cesta Německem a Francií.",
    },
    image3: {
      title: "Neapol",
      description: "Úchvatná krajina Neapole.",
    },
  },

  // Featured Section - Doporučeno
  featured: {
    title: "Doporučeno: Jaro v Paříži",
    description1:
      "Paříž na jaře je snem pro studentské fotografy. Město ožívá kvetoucími třešněmi, kavárenskými zahrádkami a dokonalým světlem pro zachycení ikonických památek.",
    description2:
      "Naše doporučená sbírka ukazuje kouzlo Paříže očima polských studentů, kteří strávili studijní pobyt v Městě světel.",
    exploreLink: "Prozkoumat pařížskou sbírku",
    image1Alt: "Eiffelova věž na jaře",
    image2Alt: "Řeka Seina v Paříži",
    image3Alt: "Pařížská kavárenská terasa",
    image4Alt: "Muzeum Louvre",
  },

  // Contact Section - Kontakt
  contact: {
    title: "Kontaktujte nás",
    description:
      "Máte dotazy nebo chcete zaslat vlastní studentské cestovní fotografie? Rádi se s vámi spojíme!",
    pageTitle: "Spojte se s námi",
    getInTouch: "Jak vám můžeme pomoci?",
    getInTouchDescription:
      "Ať už chcete zaslat své cestovní fotografie, máte dotazy ohledně naší platformy, nebo se jen chcete pozdravit, jsme tu, abychom vám pomohli.",
    email: {
      title: "Napište nám email",
      description: "Pro obecné dotazy a zasílání fotografií",
    },
    location: {
      title: "Naše sídlo",
      description: "Navštivte naši kancelář studentského kolektivu",
      address: "University Creative Hub, European Campus, Amsterdam",
    },
    phone: {
      title: "Zavolejte nám",
      description: "Dostupní ve všední dny 10:00 - 18:00 SEČ",
    },
    form: {
      name: "Vaše jméno",
      namePlaceholder: "Zadejte své jméno",
      nameError: "Jméno je povinné",
      email: "Váš email",
      emailPlaceholder: "Zadejte svůj email",
      emailError: "Je vyžadován platný email",
      subject: "Předmět",
      subjectPlaceholder: "O čem byste chtěli mluvit?",
      subjectError: "Předmět je povinný",
      message: "Zpráva",
      messagePlaceholder: "Sem napište svou zprávu...",
      messageError: "Zpráva musí mít alespoň 10 znaků",
      send: "Odeslat zprávu",
      sending: "Odesílání...",
      successTitle: "Zpráva odeslána!",
      successMessage: "Děkujeme, že jste nás kontaktovali. Brzy se vám ozveme.",
    },
  },

  // Footer - Patička
  footer: {
    description:
      "Vizuální cesta Evropou zachycená objektivem studentů objevujících nejkrásnější kouty kontinentu.",
    quickLinks: "Rychlé odkazy",
    resources: "Zdroje",
    parisCollection: "Pařížská sbírka",
    submitPhotos: "Zaslat fotografie",
    privacyPolicy: "Zásady ochrany osobních údajů",
    termsOfUse: "Podmínky užívání",
    accessibility: "Přístupnost",
    cookiePolicy: "Zásady cookies",
    cookieSettings: "Nastavení cookies",
    faq: "Často kladené otázky (FAQ)",
    sitemap: "Mapa stránek",
    support: "Pomoc a podpora",
    copyright: "Všechna práva vyhrazena.",
    tagline: "Vytvořeno s ❤ studenty, pro studenty.",
    instagram: "Sledujte nás na Instagramu",
    twitter: "Sledujte nás na Twitteru",
    facebook: "Sledujte nás na Facebooku",
    pinterest: "Sledujte nás na Pinterestu",
    linkedin: "Sledujte nás na LinkedIn",
    messenger: "Kontaktujte nás přes Messenger",
  },

  // Slider Controls - Ovládání slideru
  slider: {
    previous: "Předchozí snímek",
    next: "Další snímek",
    goToSlide: "Přejít na snímek {{index}}",
  },

  // Lightbox - Prohlížeč obrázků
  lightbox: {
    close: "Zavřít prohlížeč",
    previous: "Předchozí obrázek",
    next: "Další obrázek",
  },

  // Theme Toggle - Přepínač motivu
  theme: {
    toggleLight: "Přepnout na světlý režim",
    toggleDark: "Přepnout na tmavý režim",
  },

  // Language - Jazyk
  language: {
    changeLanguage: "Změnit jazyk",
  },

  // Home - Domů
  home: {
    heroAriaLabel: "Doporučené destinace",
  },

  // --- Informační stránky ---
  privacyPolicy: {
    title: "Zásady ochrany osobních údajů",
    metaDescription:
      "Přečtěte si zásady ochrany osobních údajů služby EuroTrek.",
    introduction:
      "Vítejte v zásadách ochrany osobních údajů EuroTrek. Vaše soukromí je pro nás důležité a jsme odhodláni chránit vaše osobní údaje v souladu s platnými předpisy, včetně GDPR.",
    section1Title: "1. Jaké informace shromažďujeme?",
    section1Content:
      "Shromažďujeme informace, které nám přímo poskytnete (např. prostřednictvím kontaktního formuláře: jméno, e-mailová adresa, obsah zprávy) a údaje shromážděné automaticky při používání služby (např. IP adresa, typ prohlížeče, informace o zařízení, údaje o aktivitě ve službě pomocí souborů cookie – viz Zásady cookies).",
    section2Title: "2. Jak vaše informace používáme?",
    section2Content:
      "Vaše údaje používáme k poskytování a zlepšování našich služeb, komunikaci s vámi (odpovědi na dotazy), analýze návštěvnosti webu, zajištění bezpečnosti služby a plnění právních povinností.",
    contactTitle: "Kontakt ohledně soukromí",
    contactContent:
      "V záležitostech týkajících se zpracování vašich osobních údajů nebo uplatnění vašich práv nás prosím kontaktujte na adrese: [vas-email@priklad.com].", // Nahraďte skutečným emailem
  },
  termsOfUse: {
    title: "Podmínky užívání",
    metaDescription: "Přečtěte si podmínky užívání služby EuroTrek.",
    introduction:
      "Tyto Podmínky užívání upravují používání webové služby EuroTrek. Používáním služby přijímáte následující ustanovení.",
    section1Title: "1. Obecná pravidla a přijetí podmínek",
    section1Content:
      "Služba EuroTrek je platforma prezentující cestovní fotografie. Uživatelé jsou povinni používat službu v souladu se zákonem a dobrými mravy. Je zakázáno zveřejňovat nezákonný, urážlivý obsah nebo obsah porušující práva třetích stran.",
    contactTitle: "Kontakt ohledně Podmínek užívání",
    contactContent:
      "Dotazy týkající se těchto Podmínek užívání směřujte na adresu: [vas-email@priklad.com].", // Nahraďte skutečným emailem
  },
  accessibility: {
    title: "Prohlášení o přístupnosti",
    metaDescription:
      "Zjistěte více o našem závazku k digitální přístupnosti na EuroTrek.",
    introduction:
      "EuroTrek se snaží zajistit digitální přístupnost služby pro co nejširší okruh uživatelů, včetně osob se zdravotním postižením. Neustále pracujeme na zlepšování rozhraní a uplatňování příslušných standardů přístupnosti, jako je WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Naše snahy o přístupnost",
    section1Content:
      "Snažíme se implementovat řešení jako: používání sémantického kódu HTML, zajištění navigace pomocí klávesnice, adekvátní barevný kontrast, alternativní popisy obrázků a testování služby pomocí různých podpůrných technologií.",
    contactTitle: "Zpětná vazba a kontaktní informace",
    contactContent:
      "Pokud narazíte na bariéry přístupnosti v naší službě, kontaktujte nás prosím. Vaše připomínky jsou pro nás cenné. Kontaktujte nás na adrese: [vas-email@priklad.com].", // Nahraďte skutečným emailem
  },
  cookiePolicy: {
    title: "Zásady cookies",
    metaDescription: "Zjistěte, jak EuroTrek používá soubory cookie.",
    introduction:
      "Naše služba používá soubory cookie, aby zajistila správné fungování stránky, zlepšila váš zážitek a pro analytické a marketingové účely (s vaším souhlasem).",
    section1Title: "1. Co jsou soubory cookie?",
    section1Content:
      "Soubory cookie jsou malé textové soubory ukládané do vašeho zařízení (počítače, smartphonu) při návštěvě webových stránek. Umožňují stránce 'pamatovat si' vaše akce a preference po určitou dobu.",
    section2Title: "2. Jaké typy souborů cookie používáme?",
    section2Content: "Používáme různé typy souborů cookie, včetně:",
    type1:
      "Nezbytné soubory cookie: Nutné pro základní fungování služby (např. relace uživatele). Nevyžadují souhlas.",
    type2:
      "Analytické soubory cookie: Pomáhají nám pochopit, jak uživatelé interagují se stránkou (např. Google Analytics). Vyžadují váš souhlas.",
    type3:
      "Funkční soubory cookie: Umožňují zapamatovat si vaše volby a preference (např. jazyk). Mohou vyžadovat souhlas.",
    type4:
      "Marketingové soubory cookie: Používají se k zobrazování personalizované reklamy (např. Facebook Pixel). Vyžadují váš souhlas.",
    section3Title: "3. Správa souborů cookie",
    section3Content:
      "Své souhlasy se soubory cookie můžete kdykoli spravovat pomocí nástroje pro správu souhlasů dostupného na našem webu (klikněte na tlačítko 'Nastavení cookies'). Nastavení souborů cookie můžete také změnit ve svém webovém prohlížeči.",
    settingsError:
      "Nelze otevřít nastavení cookies. Kontaktujte podporu nebo zkuste spravovat nastavení ve svém prohlížeči.",
    settingsInfoPlaceholder:
      "Kliknutím na tlačítko se otevře panel správy nastavení souborů cookie.",
    contactTitle: "Kontakt ohledně Zásad cookies",
    contactContent:
      "Máte-li dotazy ohledně našich zásad cookies, kontaktujte nás na adrese: [vas-email@priklad.com].", // Nahraďte skutečným emailem
  },
  faq: {
    title: "Často kladené otázky (FAQ)",
    metaDescription:
      "Najděte odpovědi na nejčastější otázky týkající se EuroTrek.",
    q1: "Otázka 1: Jak mohu zaslat své fotografie?",
    a1: "V současné době shromažďujeme fotografie od spřátelených studentů. Máte-li zájem o spolupráci, kontaktujte nás prosím prostřednictvím kontaktního formuláře a stručně popište své cesty a portfolio.",
    q2: "Otázka 2: Je používání služby zdarma?",
    a2: "Ano, prohlížení fotografií a obsahu na službě EuroTrek je pro všechny uživatele zcela zdarma.",
    q3: "Otázka 3: Kdo vlastní autorská práva k fotografiím?",
    a3: "Autorská práva k fotografiím náleží studentským autorům. EuroTrek má licenci k jejich publikování ve službě. Podrobnosti jsou uvedeny ve smlouvě s autorem a v našich Podmínkách užívání.",
    stillHaveQuestions: "Máte další otázky?",
    contactUs: "Kontaktujte nás",
  },
  sitemap: {
    title: "Mapa stránek",
    metaDescription: "Prohlédněte si strukturu stránek EuroTrek.",
    introduction:
      "Níže je uveden seznam hlavních sekcí a stránek dostupných ve službě EuroTrek, který vám usnadní navigaci.",
  },
  support: {
    title: "Pomoc a podpora",
    metaDescription:
      "Potřebujete pomoc? Najděte kontaktní informace a podporu pro EuroTrek.",
    introduction:
      "Jsme tu, abychom vám pomohli! Máte-li dotazy ohledně fungování služby, narazili jste na technický problém nebo máte jiné obavy, využijte prosím dostupné možnosti podpory.",
    faqTitle: "Nejprve zkontrolujte FAQ",
    faqDescription:
      "Mnoho odpovědí na běžné otázky najdete v naší sekci Často kladených otázek (FAQ).",
    goToFaq: "Přejít na FAQ",
    contactFormTitle: "Kontaktní formulář",
    contactFormDescription:
      "Nejlepším způsobem, jak nás kontaktovat ve většině případů, je zaslání zprávy prostřednictvím našeho kontaktního formuláře.",
    goToContact: "Přejít na Kontakt",
    phoneTitle: "Telefonická podpora",
    phoneDescription:
      "V naléhavých technických záležitostech nás můžete kontaktovat telefonicky v čase [např. 10:00 - 16:00] od pondělí do pátku.",
    phoneNumber: "Zavolejte: [Vaše Telefonní Číslo]", // Nahraďte skutečným telefonním číslem
    responseInfo:
      "Snažíme se odpovídat na dotazy zaslané prostřednictvím kontaktního formuláře do 1-2 pracovních dnů.",
  },
};
