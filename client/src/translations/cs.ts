import { Description } from "@radix-ui/react-toast"; // Import ponechán

export default {
  // Common / Společné
  common: {
    no_photos_data: "Nejsou k dispozici žádná data fotografií.",
    // --- PŘIDÁNO ---
    lastUpdated: "Naposledy aktualizováno",
    placeholderContent:
      "Obsah této sekce se právě připravuje. Brzy bude doplněn.",
    // --- KONEC PŘIDANÝCH ---
  },
  // Navbar / Navigační lišta
  navbar: {
    home: "Domů",
    destinations: "Destinace",
    about: "O nás",
    contact: "Kontakt",
  },
  // Destinations / Destinace
  destinations: {
    exploreTitle: "Objevte Destinace",
    exploreDescription:
      "Prohlédněte si naši sbírku studentských fotografií z cest po nejkrásnějších městech Evropy.",
    allDestinations: "Všechny Destinace",
    lisbon: "Lisabon",
    paris: "Paříž",
    berlin: "Berlín",
    capri: "Capri",
    naples: "Neapol",
    prague: "Praha",
    loadMore: "Načíst více",
    ariaLabel: "Kategorie destinací",
  },
  // Hero Slides / Hlavní snímky
  heroSlides: {
    "paris-hero": {
      location: "Paříž, Francie",
      description:
        "Město světel očima studenta - zachycení kouzla pařížské architektury a kultury.",
    },
    "rome-hero": {
      location: "Neapol, Itálie",
      description:
        "Neapol je místo, kde život plyne v rytmu espressa, rozhovorů na ulici a vůně čerstvě upečené pizzy linoucí se teplým středomořským vzduchem.",
    },
    "lisbon-hero": {
      location: "Lisabon, Portugalsko",
      description:
        "Lisabon je město plné světla, kde se dlážděné uličky vinou mezi barevnými činžovními domy a život klidně plyne v rytmu fada a vůně čerstvých 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      location: "Frankfurt nad Mohanem, Německo",
      // Ponechán popis z PL šablony, i když popisuje Lisabon
      description:
        "Lisabon je město plné světla, kde se dlážděné uličky vinou mezi barevnými činžovními domy a život klidně plyne v rytmu fada a vůně čerstvých 'pasteis de nata'.",
    },
  },
  // Photos / Fotografie
  photos: {
    view: "Zobrazit fotografii {{title}}",
    noPhotos: "Pro tuto destinaci zatím nejsou k dispozici žádné fotografie.",
    "paris-sunset": {
      title: "Západ slunce v Paříži",
      location: "Paříž, Francie",
      alt: "Eiffelova věž při západu slunce v Paříži",
    },
    "lisbon-tram": {
      title: "Pohled na Národní divadlo D. Marie II.",
      location: "Lisabon, Portugalsko",
      description:
        "Historická budova divadla je jednou z nejprestižnějších sálů Portugalska a nachází se na náměstí Rossio v centru města.",
    },
    "lisbon-belem": {
      title: "Střechy Starého Města",
      location: "Lisabon, Portugalsko",
      description:
        "Nejstarší čtvrtí Lisabonu je Alfama, postavená na svahu nad řekou Tagus v době maurské nadvlády. Právě zde můžete pocítit atmosféru středověkého Lisabonu.",
    },
    "lisbon-bele": {
      title: "Belémská věž",
      location: "Lisabon, Portugalsko",
      description: "Středověká pevnost s výhledem na ústí řeky Tagus", // Oprava překlepu 'widokime'
    },
    "boca do inferno": {
      title: "Ústa pekla (Boca do Inferno)",
      location: "Cascais, Portugalsko",
      description:
        "Propast nacházející se v pobřežních útesech poblíž portugalského města Cascais",
    },
    "capri-marina": {
      title: "Pláž Luigia ai Faraglioni",
      location: "Capri, Itálie",
      description:
        "Nachází se v Tyrhénském moři a zaujímá 19. místo mezi 118 plážemi neapolského regionu.",
    },
    "paris-hero": {
      // Poznámka: Konflikt s heroSlides, ale překlad tak, jak je.
      title: "Versailles – Perla Baroka",
      location: "Paříž, Francie", // Technicky blízko Paříže
      alt: "Zámek Versailles u Paříže",
      description:
        "Versailles je symbolem francouzské absolutní monarchie a jedním z nejvelkolepějších příkladů barokní architektury na světě.",
    },
    "naples-view": {
      title: "Cesta nad Tyrhénským mořem",
      location: "Neapol, Itálie",
      alt: "Cesta na úpatí hory",
      description: "Malebná trasa podél pobřeží.",
    },
    "naples-mummy": {
      title: "Odlitek oběti Vesuvu",
      location: "Pompeje, Itálie",
      alt: "Oběti výbuchu sopky",
      description:
        "Odlitky těl byly objeveny v roce 1863 archeologem Giuseppem Fiorellim. „Dodnes nebyly z etických důvodů a kvůli citlivosti, s jakou se vždy zacházelo s lidskými ostatky, zaevidovány.“",
    },
    "naples-stadion": {
      title: "Amfiteátr v Pompejích",
      location: "Pompeje, Itálie",
      alt: "Část stadionu ve starověkém městě Pompeje",
      description:
        "Amfiteátr v Pompejích – starověký římský amfiteátr nacházející se v Pompejích. Je nejstarší dochovanou stavbou tohoto typu.",
    },
    "naples-museum": {
      title: "Malý pergamonský dar", // Přímý překlad, odkazuje na konkrétní sochy
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
      title: "Nákupní ulice na Capri",
      location: "Capri, Itálie",
      alt: "Obchody na Capri",
      description:
        "Capri se vyznačuje půvabnými nákupními uličkami, které začínají od Piazzetty a vedou přes Via Camerelle a Via Le Botteghe.",
    },
    "capri-port": {
      title: "Přístav v Marina Grande",
      location: "Capri, Itálie",
      alt: "Zakotvené jachty",
      description:
        "Nosiči zavazadel z hlavních hotelů čekají, aby vám vzali zavazadla na vozíku, a vy můžete jet lanovkou nebo kabrioletem, protože na Capri není automobilová doprava.",
    },
    "lisbon-hero": {
      // Poznámka: Konflikt s heroSlides, ale překlad tak, jak je.
      title: "Klášter Jeronymitů (Mosteiro dos Jerónimos)",
      location: "Lisabon, Portugalsko",
      alt: "Klášter Jeronymitů v Belému",
      description:
        "Postaven v první polovině 16. století, je považován za perlu a kvintesenci manuelského stylu, který je pro Portugalsko specifickou směsí gotiky a renesance.",
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
        "Je těžké si představit kuchyni na Seině, a zvláště na Rhôně, bez lahodného šneka na talíři.",
    },
    "frankfurt-hero": {
      // Poznámka: Konflikt s heroSlides, ale překlad tak, jak je.
      title: "Stará opera (Alte Oper), Frankfurt",
      location: "Frankfurt nad Mohanem, Německo",
      alt: "Stará opera (Alte Oper), Frankfurt",
      description:
        "Nad malebným náměstím zdobeným elegantní fontánou se tyčí Opera s fasádou v renesančním stylu.",
    },
    "berlin-gate": {
      title: "Braniborská brána",
      location: "Berlín, Německo",
      alt: "Braniborská brána",
      description:
        "Braniborská brána jako symbol míru a svobody od 3. října 1990, výročí znovusjednocení Německa.",
    },
    "berlin-museum": {
      title: "Staré muzeum (Altes Museum)",
      location: "Berlín, Německo",
      alt: "Staré muzeum",
      description:
        "Muzeum bylo postaveno s cílem zpřístupnit sbírky antického umění široké veřejnosti na příkaz pruského krále Fridricha Viléma III.",
    },
    "berlin-victory-column": {
      title: "Vítězný sloup (Siegessäule)",
      location: "Berlín, Německo",
      alt: "Vítězný sloup",
      description:
        "Sloup nacházející se v parku Großer Tiergarten v Berlíně připomínající vítězství Pruska nad Dánskem v dánsko-německé válce z roku 1864.",
    },
    "berlin-music": {
      title: "Pomník Beethovena, Haydna a Mozarta",
      location: "Berlín, Německo",
      alt: "Pomník tří hudebních géniů",
      description:
        "Venkovní pomník klasických skladatelů Ludwiga van Beethovena, Josepha Haydna a Wolfganga Amadea Mozarta z roku 1904.",
    },
    "prague-bridge": {
      title: "Pohled na Vltavu v Praze",
      location: "Praha, Česká republika",
      alt: "Řeka Vltava v Praze",
      description:
        "Celá Praha se prohlíží ve Vltavě a lichotí jí jako kouzelnému zrcadlu.",
    },
    "prague-wit": {
      title: "Svatovítský poklad",
      location: "Praha, Česká republika",
      alt: "Poklad v Praze",
      description:
        "Artefakty v pokladu katedrály svatého Víta na Hradčanech v Praze.",
    },
    "prague-dance": {
      title: "Tančící dům",
      location: "Praha, Česká republika",
      alt: "Ginger a Fred",
      description:
        "Avantgardní budova navržená architektonickou dvojicí Vlado Milunićem a Frankem Gehrym ve stylu dekonstruktivismu.",
    },
    "prague-kafka": {
      title: "Otočná hlava Franze Kafky",
      location: "Praha, Česká republika",
      alt: "Hlava Franze Kafky",
      description:
        "David Černý navrhl toto kontroverzní umělecké dílo pro obchodně-kancelářskou budovu 'Quadrio' na Národní třídě.",
    },
  },
  // About Section / O nás
  about: {
    title: "O EuroTrek",
    description1:
      "EuroTrek je kolektivní fotografický deník vytvořený univerzitními studenty studujícími v Polsku. Naším posláním je prezentovat krásu, kulturu a zážitky ze studentských cest prostřednictvím autentické fotografie.",
    description2:
      "Tato platforma slouží jak jako inspirace pro budoucí studenty-cestovatele, tak jako kniha vzpomínek pro ty, kteří již zahájili svá evropská dobrodružství. Všechny fotografie jsou pořízeny studenty a ukazují Evropu ze svěží, mladistvé perspektivy.",
    pageTitle: "O naší cestě",
    pageDescription1:
      "EuroTrek se zrodil z vášně pro cestovatelskou fotografii a touhy zachytit jedinečné zážitky studentů-objevitelů v nejživějších městech Evropy.",
    pageDescription2:
      "To, co začalo jako malá skupina sdílející fotografie mezi spolužáky studujícími v Polsku, se rozrostlo v platformu spojující studenty-fotografy z různých zemí, prostředí a akademických oborů, kteří sdílejí společnou lásku k objevování a vizuálnímu vyprávění příběhů.",
    pageDescription3:
      "Naši přispěvatelé jsou studenti jako vy, kteří vyvažují své studium s dobrodružstvími po celém kontinentu a zachycují autentické okamžiky na cestě.",
    mission: {
      title: "Naše mise",
      description:
        "Inspirovat ke studentským cestám prostřednictvím autentického vizuálního vyprávění příběhů a vytvářet podpůrnou komunitu pro mladé fotografy objevující Evropu.",
    },
    team: {
      title: "Studentský kolektiv",
      description:
        "Náš tým se skládá výhradně ze studentů-fotografů, spisovatelů a webových vývojářů z univerzit po celém světě. Každý přispěvatel přináší svou jedinečnou perspektivu a zkušenosti na platformu.",
    },
    feature1: {
      title: "Studenti-Fotografové",
      description: "Fotografie pořízené studenty ze zahraničí z celého světa",
    },
    feature2: {
      title: "Autentické zážitky",
      description: "Skutečné momenty z cest mimo typické turistické atrakce",
    },
    feature3: {
      title: "Mnoho destinací",
      description: "Rostoucí sbírka fotografií z celého evropského kontinentu",
    },
    image1: {
      title: "Lisabon",
      description: "Klášter Jeronymitů.",
    },
    image2: {
      title: "Německo a Francie",
      description: "Nezapomenutelná cesta Německem a Francií.",
    },
    image3: {
      title: "Neapol",
      description: "Neobyčejná krajina Neapole.",
    },
  },
  // Featured Section / Doporučeno
  featured: {
    title: "Doporučeno: Jaro v Paříži",
    description1:
      "Paříž na jaře je snem pro studenty-fotografy. Město ožívá kvetoucími třešněmi, kavárenskými zahrádkami a ideálním světlem pro zachycení ikonických památek.",
    description2:
      "Naše doporučená sbírka ukazuje kouzlo Paříže očima polských studentů, kteří strávili své prázdniny v zahraničí ve Městě světla.",
    exploreLink: "Objevte pařížskou kolekci",
    image1Alt: "Eiffelova věž na jaře",
    image2Alt: "Řeka Seina v Paříži",
    image3Alt: "Pařížská kavárna",
    image4Alt: "Muzeum Louvre",
  },
  // Contact Section / Kontakt
  contact: {
    title: "Kontakt",
    description:
      "Máte dotazy nebo chcete zaslat vlastní studentské fotografie z cest? Rádi se s vámi spojíme!",
    pageTitle: "Kontaktujte nás",
    getInTouch: "Jak vám můžeme pomoci?",
    getInTouchDescription:
      "Ať už chcete zaslat své fotografie z cest, máte dotazy týkající se naší platformy, nebo se jen chcete pozdravit, jsme tu, abychom vám pomohli.",
    email: {
      title: "Napište nám e-mail",
      description: "Pro obecné dotazy a zasílání fotografií",
    },
    location: {
      title: "Naše sídlo",
      description: "Navštivte naši kancelář studentského kolektivu",
      address: "University Creative Hub, European Campus, Amsterdam", // Placeholder adresa ponechána
    },
    phone: {
      title: "Zavolejte nám",
      description: "K zastižení ve všední dny od 10:00 do 18:00 SEČ",
    },
    form: {
      name: "Vaše jméno",
      namePlaceholder: "Zadejte své jméno",
      nameError: "Jméno je povinné",
      email: "Váš e-mail",
      emailPlaceholder: "Zadejte svůj e-mail",
      emailError: "Je vyžadován platný e-mail",
      subject: "Předmět",
      subjectPlaceholder: "O čem chcete mluvit?",
      subjectError: "Předmět je povinný",
      message: "Zpráva",
      messagePlaceholder: "Sem napište svou zprávu...",
      messageError: "Zpráva musí obsahovat alespoň 10 znaků",
      send: "Odeslat zprávu",
      sending: "Odesílání...",
      successTitle: "Zpráva odeslána!",
      successMessage: "Děkujeme, že jste nás kontaktovali. Brzy se vám ozveme.",
    },
  },
  // Footer / Patička
  footer: {
    description:
      "Vizuální cesta Evropou zachycená objektivem studentů objevujících nejkrásnější zákoutí kontinentu.",
    quickLinks: "Rychlé odkazy",
    resources: "Zdroje",
    parisCollection: "Pařížská kolekce",
    submitPhotos: "Zaslat fotografie",
    privacyPolicy: "Zásady ochrany osobních údajů",
    termsOfUse: "Podmínky použití",
    accessibility: "Přístupnost",
    cookiePolicy: "Zásady cookies",
    cookieSettings: "Nastavení cookies",
    faq: "Často kladené otázky (FAQ)",
    sitemap: "Mapa stránek",
    support: "Nápověda a podpora",
    copyright: "Všechna práva vyhrazena.",
    tagline: "Vytvořeno s ❤ studenty pro studenty.",
    instagram: "Sledujte nás na Instagramu",
    twitter: "Sledujte nás na Twitteru",
    facebook: "Sledujte nás na Facebooku",
    pinterest: "Sledujte nás na Pinterestu",
  },
  // Slider Controls / Ovládání slideru
  slider: {
    previous: "Předchozí snímek",
    next: "Další snímek",
    goToSlide: "Přejít na snímek {{index}}",
  },
  // Lightbox / Prohlížeč obrázků
  lightbox: {
    close: "Zavřít prohlížeč",
    previous: "Předchozí obrázek",
    next: "Další obrázek",
  },
  // Theme Toggle / Přepínač motivu
  theme: {
    toggleLight: "Přepnout na světlý režim",
    toggleDark: "Přepnout na tmavý režim",
  },
  // Language / Jazyk
  language: {
    changeLanguage: "Změnit jazyk",
  },
  // Home / Domů
  home: {
    heroAriaLabel: "Doporučené destinace",
  },

  // --- PŘIDANÉ SEKCE PRO NOVÉ INFORMAČNÍ STRÁNKY (S VYPLNĚNÝM OBECNÝM OBSAHEM) ---
  privacyPolicy: {
    title: "Zásady ochrany osobních údajů",
    metaDescription:
      "Přečtěte si zásady ochrany osobních údajů služby EuroTrek.",
    introduction:
      "Vítejte v zásadách ochrany osobních údajů EuroTrek. Vaše soukromí je pro nás důležité a zavazujeme se chránit vaše osobní údaje v souladu s platnými předpisy, včetně GDPR.",
    section1Title: "1. Jaké informace shromažďujeme?",
    section1Content:
      "Shromažďujeme informace, které nám přímo poskytnete (např. prostřednictvím kontaktního formuláře: jméno, e-mailová adresa, obsah zprávy) a údaje shromažďované automaticky při používání služby (např. IP adresa, typ prohlížeče, informace o zařízení, údaje o aktivitě ve službě pomocí souborů cookie – viz Zásady cookies).",
    section2Title: "2. Jak používáme vaše informace?",
    section2Content:
      "Vaše údaje používáme za účelem poskytování a zlepšování našich služeb, komunikace s vámi (odpovědi na dotazy), analýzy návštěvnosti stránek, zajištění bezpečnosti služby a plnění právních povinností.",
    contactTitle: "Kontakt ohledně ochrany osobních údajů",
    contactContent:
      "V záležitostech týkajících se zpracování vašich osobních údajů nebo uplatnění vašich práv nás prosím kontaktujte na adrese: [puaro@vp.pl].", // Placeholder e-mail ponechán
  },
  termsOfUse: {
    title: "Podmínky použití",
    metaDescription: "Přečtěte si podmínky použití služby EuroTrek.",
    introduction:
      "Tyto Podmínky použití upravují pravidla používání webové služby EuroTrek. Používáním služby souhlasíte s níže uvedenými ustanoveními.",
    section1Title: "1. Obecná pravidla a přijetí podmínek",
    section1Content:
      "Služba EuroTrek je platforma prezentující cestovatelské fotografie. Uživatelé jsou povinni používat službu v souladu se zákonem a dobrými mravy. Je zakázáno zveřejňovat obsah, který je nezákonný, urážlivý nebo porušuje práva třetích stran.",
    contactTitle: "Kontakt ohledně Podmínek použití",
    contactContent:
      "Dotazy týkající se těchto Podmínek použití směřujte prosím na adresu: [puaro@vp.pl].", // Placeholder e-mail ponechán
  },
  accessibility: {
    title: "Prohlášení o přístupnosti",
    metaDescription:
      "Zjistěte více o našem závazku k digitální přístupnosti v EuroTrek.",
    introduction:
      "EuroTrek usiluje o zajištění digitální přístupnosti služby pro co nejširší okruh uživatelů, včetně osob se zdravotním postižením. Neustále pracujeme na zlepšování rozhraní a uplatňování příslušných standardů přístupnosti, jako jsou WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Naše kroky k zajištění přístupnosti",
    section1Content:
      "Snažíme se implementovat řešení jako: používání sémantického kódu HTML, zajištění navigace pomocí klávesnice, odpovídající kontrast barev, alternativní popisy obrázků a testování služby s použitím různých podpůrných technologií.",
    contactTitle: "Zpětná vazba a kontaktní údaje",
    contactContent:
      "Pokud narazíte na bariéry přístupnosti v naší službě, kontaktujte nás prosím. Vaše připomínky jsou pro nás cenné. Kontaktujte nás na adrese: [puaro@vp.pl].", // Placeholder e-mail ponechán
  },
  cookiePolicy: {
    title: "Zásady cookies",
    metaDescription: "Zjistěte, jak EuroTrek používá soubory cookie.",
    introduction:
      "Naše služba používá soubory cookie, aby zajistila správné fungování stránky, zlepšila vaše zkušenosti a pro analytické a marketingové účely (s vaším souhlasem).",
    section1Title: "1. Co jsou soubory cookie?",
    section1Content:
      "Soubory cookie jsou malé textové soubory ukládané do vašeho zařízení (počítače, smartphonu) při návštěvě webových stránek. Umožňují stránce 'pamatovat si' vaše akce a preference po určitou dobu.",
    section2Title: "2. Jaké druhy souborů cookie používáme?",
    section2Content: "Používáme různé typy souborů cookie, včetně:",
    type1:
      "Nezbytné soubory cookie: Nutné pro základní fungování služby (např. uživatelská relace). Nevyžadují souhlas.",
    type2:
      "Analytické soubory cookie: Pomáhají nám pochopit, jak uživatelé používají stránku (např. Google Analytics). Vyžadují váš souhlas.",
    type3:
      "Funkční soubory cookie: Umožňují zapamatovat si vaše volby a preference (např. jazyk). Mohou vyžadovat souhlas.",
    type4:
      "Marketingové soubory cookie: Slouží k zobrazování personalizovaných reklam (např. Facebook Pixel). Vyžadují váš souhlas.",
    section3Title: "3. Správa souborů cookie",
    section3Content:
      "Své souhlasy se soubory cookie můžete kdykoli spravovat pomocí nástroje pro správu souhlasů dostupného na našich stránkách (klikněte na tlačítko 'Nastavení cookies'). Můžete také změnit nastavení souborů cookie ve svém webovém prohlížeči.",
    settingsError:
      "Nelze otevřít nastavení cookies. Kontaktujte prosím technickou podporu nebo zkuste spravovat nastavení ve svém prohlížeči.",
    settingsInfoPlaceholder:
      "Kliknutím na tlačítko se otevře panel pro správu nastavení souborů cookie.",
    contactTitle: "Kontakt ohledně Zásad cookies",
    contactContent:
      "V případě dotazů týkajících se našich zásad cookies nás kontaktujte: [puaro@vp.pl].", // Placeholder e-mail ponechán
  },
  faq: {
    title: "Často kladené otázky (FAQ)",
    metaDescription:
      "Najděte odpovědi na nejčastější otázky týkající se EuroTrek.",
    q1: "Otázka 1: Jak mohu zaslat své fotografie?",
    a1: "V současné době shromažďujeme fotografie od spřátelených studentů. Pokud máte zájem o spolupráci, kontaktujte nás prostřednictvím kontaktního formuláře a stručně popište své cesty a portfolio.",
    q2: "Otázka 2: Je používání služby placené?",
    a2: "Ne, prohlížení fotografií a obsahu ve službě EuroTrek je pro všechny uživatele zcela zdarma.",
    q3: "Otázka 3: Kdo je vlastníkem autorských práv k fotografiím?",
    a3: "Autorská práva k fotografiím náleží studentům-autorům. EuroTrek má licenci k jejich publikaci ve službě. Podrobnosti stanoví smlouva s autorem a naše Podmínky použití.",
    stillHaveQuestions: "Máte další otázky?",
    contactUs: "Kontaktujte nás",
  },
  sitemap: {
    title: "Mapa stránek",
    metaDescription: "Prohlédněte si strukturu stránek EuroTrek.",
    introduction:
      "Níže naleznete seznam hlavních sekcí a stránek dostupných ve službě EuroTrek, aby vám usnadnil navigaci.",
  },
  support: {
    title: "Nápověda a podpora",
    metaDescription:
      "Potřebujete pomoc? Najděte kontaktní informace a podporu pro EuroTrek.",
    introduction:
      "Jsme tu, abychom vám pomohli! Pokud máte dotazy týkající se fungování služby, narazili jste na technický problém nebo máte jiné pochybnosti, využijte dostupné možnosti podpory.",
    faqTitle: "Nejprve zkontrolujte FAQ",
    faqDescription:
      "Mnoho odpovědí na běžné otázky naleznete v naší sekci Často kladené otázky (FAQ).",
    goToFaq: "Přejít na FAQ",
    contactFormTitle: "Kontaktní formulář",
    contactFormDescription:
      "Nejlepší způsob, jak nás kontaktovat ve většině případů, je zaslání zprávy prostřednictvím našeho kontaktního formuláře.",
    goToContact: "Přejít na Kontakt",
    phoneTitle: "Telefonická podpora",
    phoneDescription:
      "V naléhavých technických záležitostech nás můžete kontaktovat telefonicky v hodinách [např. 10:00 - 16:00] od pondělí do pátku.",
    phoneNumber: "Zavolejte nám: [000 000 000]", // Placeholder telefonní číslo ponecháno
    responseInfo:
      "Snažíme se odpovídat na dotazy zaslané prostřednictvím kontaktního formuláře během 1-2 pracovních dnů.",
  },
  // --- KONEC MODIFIKOVANÝCH SEKCÍ ---
};
