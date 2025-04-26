import { Description } from "@radix-ui/react-toast"; // Ponecháno dle požadavku, i když není použito

export default {
  // Common - Běžné
  common: {
    no_photos_data: "Chybí data fotografií.",
    lastUpdated: "Poslední aktualizace",
    placeholderContent: "Obsah této sekce se připravuje. Brzy bude doplněn.",
  },

  routes: {
    home: "",
    destinations: "cesty",
    about: "o-nas",
    contact: "kontakt",
    destinationDetail: "cesta",
    faq: "faq",
    privacy: "zasady-ochrany-osobnich-udaju",
    terms: "podminky-pouziti",
    sitemap: "mapa-stranek",
    accessibility: "pristupnost",
    cookiePolicy: "zasady-cookies",
    support: "podpora",
  },

  // Navbar - Navigační lišta
  navbar: {
    home: "Domů",
    destinations: "Cesty",
    about: "O nás",
    contact: "Kontakt",
  },
  // Destinations - Cíle cest
  destinations: {
    exploreTitle: "Objevte Cesty",
    exploreDescription:
      "Prohlédněte si naši sbírku studentských fotografií z cest po nejkrásnějších městech Evropy.",
    allDestinations: "Všechny Cesty",
    lisbon: "Lisabon",
    paris: "Paříž",
    berlin: "Berlín",
    capri: "Capri",
    naples: "Neapol",
    prague: "Praha",
    loadMore: "Načíst více",
    ariaLabel: "Kategorie cest",
    noMorePhotos: "Pro tuto kategorii již nejsou žádné další fotografie.",
  },
  destinationsData: {
    lisbon: { name: "Lisabon", country: "Portugalsko" },
    paris: { name: "Paříž", country: "Francie" },
    berlin: { name: "Berlín", country: "Německo" },
    capri: { name: "Capri", country: "Itálie" },
    naples: { name: "Neapol", country: "Itálie" },
    prague: { name: "Praha", country: "Česká republika" },
  },
  // Hero Slides - Úvodní snímky
  heroSlides: {
    "paris-hero": {
      location: "Paříž, Francie",
      description:
        "Město světel očima studenta - zachycení kouzla pařížské architektury a kultury.",
    },
    "rome-hero": {
      // Poznámka: V pl.ts je zde Neapol, ne Řím. Překládám kontext Neapole.
      location: "Neapol, Itálie",
      description:
        "Neapol je místo, kde život plyne v rytmu espressa, rozhovorů na ulici a vůně čerstvě upečené pizzy, která se vznáší v teplém středomořském vzduchu.",
    },
    "lisbon-hero": {
      location: "Lisabon, Portugalsko",
      description:
        "Lisabon je město plné světla, kde se dlážděné uličky vinou mezi barevnými domy a život klidně plyne v rytmu fado a vůně čerstvých 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      location: "Frankfurt nad Mohanem, Německo",
      description:
        // Poznámka: V pl.ts je zde zkopírovaný popis z Lisabonu. Překládám tento text.
        "Lisabon je město plné světla, kde se dlážděné uličky vinou mezi barevnými domy a život klidně plyne v rytmu fado a vůně čerstvých 'pasteis de nata'.",
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
      title: "Pohled na Národní divadlo D. Marie II",
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
      description: "Středověká pevnost s výhledem na ústí řeky Tejo.", // Mírně upraveno pro plynulost
    },
    "boca do inferno": {
      title: "Ústa Pekla",
      location: "Cascais, Portugalsko",
      description:
        "Propast nacházející se v pobřežních útesech poblíž portugalského města Cascais.",
    },
    "capri-marina": {
      title: "Pláž Luigia u Faraglioni",
      location: "Capri, Itálie",
      description:
        "Nachází se v Tyrhénském moři, zaujímá 19. místo mezi 118 plážemi neapolského regionu.",
    },
    "paris-hero": {
      // Poznámka: Možný konflikt ID s heroSlides
      title: "Versailles – Perla Baroka",
      location: "Paříž, Francie", // Mělo by být Versailles?
      alt: "Palác Versailles u Paříže",
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
        "Odlitky těl objevil v roce 1863 archeolog Giuseppe Fiorelli. „Dodnes nebyly inventarizovány z etických důvodů a kvůli citům, s jakými se vždy zacházelo s lidskými ostatky.“",
    },
    "naples-stadion": {
      title: "Amfiteátr v Pompejích",
      location: "Pompeje, Itálie",
      alt: "Část stadionu ve starověkém městě Pompeje",
      description:
        "Amfiteátr v Pompejích – starověký římský amfiteátr, nacházející se v Pompejích. Je nejstarší dochovanou stavbou tohoto typu.",
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
      title: "Nákupní ulice na Capri",
      location: "Capri, Itálie",
      alt: "Obchody na Capri",
      description:
        "Capri se vyznačuje půvabnými nákupními uličkami, které začínají na Piazzettě a vedou přes Via Camerelle a Via Le Botteghe.",
    },
    "capri-port": {
      title: "Přístav v Marina Grande",
      location: "Capri, Itálie",
      alt: "Zakotvené jachty",
      description:
        "Nosiči zavazadel z hlavních hotelů čekají, aby vzali zavazadla na vozíku, a vy můžete jet lanovkou nebo kabrioletem, protože na Capri není automobilový provoz.",
    },
    "lisbon-hero": {
      // Poznámka: Možný konflikt ID s heroSlides
      title: "Klášter Jeronýmů",
      location: "Lisabon, Portugalsko",
      alt: "Klášter Jeronýmů v Belému",
      description:
        "Postavený v první polovině 16. století, je považován za perlu a kvintesenci manuelského stylu, který je pro Portugalsko specifickým spojením gotiky a renesance.",
    },
    "paris-eiffel": {
      title: "Eiffelova věž",
      location: "Paříž, Francie",
      alt: "Večerní osvětlení Eiffelovy věže v Paříži",
      description:
        "Nejznámější architektonický objekt Paříže, považovaný za symbol tohoto města a někdy i celé Francie.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "Paříž, Francie",
      alt: "Bývalý královský palác v Paříži",
      description:
        "Jedno z největších muzeí na světě, je také nejnavštěvovanější institucí tohoto typu na světě.",
    },
    "paris-panteon": {
      title: "Pohled na Pantheon z Place du Pantheon",
      location: "Paříž, Francie",
      alt: "Pantheon z Place du Pantheon",
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
    "paris-1": {
      alt: "Pohled na Národní knihovnu na jaře",
      title: "Národní knihovna Francie, pobočka Richelieu, Oválný sál",
      location: "Paříž, Francie",
    },
    "paris-2": {
      alt: "Versailles, Chrám lásky",
      title: "Versailles, Chrám lásky",
      location: "Versailles, Francie",
    },
    "paris-3": {
      alt: "Francouzská zahrada",
      title: "Nádherné historické zahrady",
      location: "Paříž, Francie",
    },
    "paris-4": {
      alt: "Tančící Faun",
      title: "Římský mýtický bůh lesů a kouzelných hvozdů",
      location: "Paříž, Francie",
    },
    "frankfurt-hero": {
      // Poznámka: Možný konflikt ID s heroSlides
      title: "Stará opera (Alte Oper), Frankfurt",
      location: "Frankfurt nad Mohanem, Německo",
      alt: "Stará opera (Alte Oper), Frankfurt",
      description:
        "Tyčící se nad malebným náměstím zdobeným elegantní fontánou se nachází Opera s fasádou v renesančním stylu.",
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
        "Muzeum bylo postaveno s cílem zpřístupnit sbírky antického umění široké veřejnosti na příkaz pruského krále Fridricha Viléma III.",
    },
    "berlin-victory-column": {
      title: "Vítězný sloup (Siegessäule)",
      location: "Berlín, Německo",
      alt: "Vítězný sloup",
      description:
        "Sloup nacházející se v parku Großer Tiergarten v Berlíně připomínající vítězství Pruska nad Dánskem v dánské válce z roku 1864.",
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
      location: "Praha, Česká republika",
      alt: "Řeka Vltava v Praze",
      description:
        "Celá Praha se zhlíží ve Vltavě a lichotí si k ní jako k magickému zrcadlu.",
    },
    "prague-wit": {
      title: "Svatovítský poklad",
      location: "Praha, Česká republika",
      alt: "Pokladnice v Praze",
      description:
        "Artefakty v pokladnici Katedrály svatého Víta na Hradčanech v Praze.",
    },
    "prague-dance": {
      title: "Tančící dům",
      location: "Praha, Česká republika",
      alt: "Ginger a Fred",
      description:
        "Avantgardní budova navržená dvojicí architektů: Vlado Milunićem a Frankem Gehrym ve stylu dekonstruktivismu.",
    },
    "prague-kafka": {
      title: "Otočná hlava Franze Kafky",
      location: "Praha, Česká republika",
      alt: "Hlava Franze Kafky",
      description:
        "David Černý navrhl toto kontroverzní umělecké dílo pro obchodně-kancelářskou budovu 'Quadrio' na Národní třídě.",
    },
  },
  // About Section - O nás
  about: {
    title: "O EuroTrek",
    description1:
      "EuroTrek je kolektivní fotografický deník vytvořený univerzitními studenty studujícími v Polsku. Naším posláním je prezentovat krásu, kulturu a zážitky ze studentských cest prostřednictvím autentické fotografie.",
    description2:
      "Tato platforma slouží jak jako inspirace pro budoucí studenty-cestovatele, tak jako pamětní kniha pro ty, kteří již začali svá evropská dobrodružství. Všechny fotografie jsou pořízeny studenty a ukazují Evropu ze svěží, mladistvé perspektivy.",
    pageTitle: "O Naší Cestě",
    pageDescription1:
      "EuroTrek se zrodil z vášně pro cestovatelskou fotografii a touhy zachytit jedinečné zážitky studentů-objevitelů v nejživějších městech Evropy.",
    pageDescription2:
      "To, co začalo jako malá skupina sdílení fotografií mezi spolužáky studujícími v Polsku, se rozrostlo v platformu spojující studenty-fotografy z různých zemí, prostředí a akademických oborů, kteří sdílejí společnou lásku k objevování a vizuálnímu vyprávění příběhů.",
    pageDescription3:
      "Naši přispěvatelé jsou studenti jako vy, kteří vyvažují svá studia s dobrodružstvími po celém kontinentu a zachycují autentické okamžiky na cestě.",
    mission: {
      title: "Naše Mise",
      description:
        "Inspirovat ke studentským cestám prostřednictvím autentického vizuálního vyprávění příběhů a vytvářet podpůrnou komunitu pro mladé fotografy objevující Evropu.",
    },
    team: {
      title: "Studentský Kolektiv",
      description:
        "Náš tým se skládá výhradně ze studentů-fotografů, spisovatelů a webových vývojářů z univerzit po celém světě. Každý přispěvatel přináší na platformu svou jedinečnou perspektivu a zkušenosti.",
    },
    feature1: {
      title: "Studenti-Fotografové",
      description: "Fotografie pořízené zahraničními studenty z celého světa.",
    },
    feature2: {
      title: "Autentické Zážitky",
      description: "Skutečné okamžiky z cest mimo typické turistické atrakce.",
    },
    feature3: {
      title: "Mnoho Cest",
      description: "Rostoucí sbírka fotografií z celého evropského kontinentu.",
    },
    image1: {
      title: "Lisabon",
      description: "Klášter Jeronýmů.",
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
  // Featured Section - Doporučená sekce
  featured: {
    title: "Doporučeno: Jaro v Paříži",
    description1:
      "Paříž na jaře je snem pro studenty-fotografy. Město ožívá kvetoucími třešněmi, kavárenskými zahrádkami a ideálním světlem pro zachycení ikonických památek.",
    description2:
      "Naše doporučená kolekce ukazuje kouzlo Paříže očima polských studentů, kteří strávili své zahraniční prázdniny ve Městě světel.",
    exploreLink: "Objevte Kolekci Paříž",
    image1Alt: "Eiffelova věž na jaře",
    image2Alt: "Řeka Seina v Paříži",
    image3Alt: "Pařížská kavárna",
    image4Alt: "Muzeum Louvre",
  },
  // Contact Section - Kontaktní sekce
  contact: {
    title: "Kontakt",
    description:
      "Máte dotazy nebo chcete zaslat vlastní studentské fotografie z cest? Rádi se s vámi seznámíme!",
    pageTitle: "Kontaktujte Nás",
    getInTouch: "Jak Vám Můžeme Pomoci?",
    getInTouchDescription:
      "Ať už chcete zaslat své fotografie z cest, máte dotazy ohledně naší platformy, nebo se jen chcete pozdravit, jsme tu, abychom vám pomohli.",
    email: {
      title: "Napište Nám",
      description: "Pro obecné dotazy a zasílání fotografií",
    },
    location: {
      title: "Naše Poloha",
      description: "Navštivte naši kancelář studentského kolektivu",
      address: "University Creative Hub, European Campus, Amsterdam", // Adresa - přeložit nebo nechat?
    },
    phone: {
      title: "Zavolejte Nám",
      description: "Dostupní v pracovní dny od 10:00 do 18:00 SEČ",
    },
    form: {
      name: "Vaše Jméno",
      namePlaceholder: "Zadejte své jméno",
      nameError: "Jméno je povinné",
      email: "Váš Email",
      emailPlaceholder: "Zadejte svůj email",
      emailError: "Je vyžadován platný email",
      subject: "Předmět",
      subjectPlaceholder: "O čem chcete mluvit?",
      subjectError: "Předmět je povinný",
      message: "Zpráva",
      messagePlaceholder: "Sem napište svou zprávu...",
      messageError: "Zpráva musí mít alespoň 10 znaků",
      send: "Odeslat Zprávu",
      sending: "Odesílání...",
      successTitle: "Zpráva Odeslána!",
      successMessage: "Děkujeme za kontakt. Brzy se ozveme.",
    },
  },
  // Footer - Patička
  footer: {
    description:
      "Vizuální cesta Evropou zachycená objektivem studentů objevujících nejkrásnější zákoutí kontinentu.",
    quickLinks: "Rychlé Odkazy",
    resources: "Zdroje",
    parisCollection: "Kolekce Paříž",
    submitPhotos: "Odeslat Fotografie",
    privacyPolicy: "Zásady Ochrany Osobních Údajů",
    termsOfUse: "Podmínky Použití",
    accessibility: "Přístupnost",
    cookiePolicy: "Zásady Cookies",
    cookieSettings: "Nastavení Cookies",
    faq: "Často Kladené Otázky (FAQ)",
    sitemap: "Mapa Stránek",
    support: "Pomoc a Podpora",
    copyright: "Všechna práva vyhrazena.",
    tagline: "Vytvořeno s ❤ studenty, pro studenty.",
    instagram: "Sledujte nás na Instagramu",
    twitter: "Sledujte nás na Twitteru",
    facebook: "Sledujte nás na Facebooku",
    pinterest: "Sledujte nás na Pinterestu",
  },
  // Slider Controls - Ovládání slideru
  slider: {
    previous: "Předchozí snímek",
    next: "Další snímek",
    goToSlide: "Přejít na snímek {{index}}",
  },
  // Lightbox - Prohlížeč fotek
  lightbox: {
    close: "Zavřít prohlížeč",
    previous: "Předchozí fotografie",
    next: "Další fotografie",
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

  // --- Sekce pro nové informační stránky ---
  privacyPolicy: {
    title: "Zásady Ochrany Osobních Údajů",
    metaDescription:
      "Přečtěte si zásady ochrany osobních údajů služby EuroTrek.",
    introduction:
      "Vítejte v zásadách ochrany osobních údajů EuroTrek. Vaše soukromí je pro nás důležité a vynakládáme veškeré úsilí na ochranu vašich osobních údajů v souladu s platnými předpisy, včetně GDPR.",
    section1Title: "1. Jaké informace shromažďujeme?",
    section1Content:
      "Shromažďujeme informace, které nám přímo poskytnete (např. prostřednictvím kontaktního formuláře: jméno, e-mailová adresa, obsah zprávy) a údaje shromažďované automaticky při používání služby (např. IP adresa, typ prohlížeče, informace o zařízení, údaje o aktivitě ve službě pomocí souborů cookie – viz Zásady Cookies).",
    section2Title: "2. Jak používáme vaše informace?",
    section2Content:
      "Vaše údaje používáme k poskytování a zlepšování našich služeb, komunikaci s vámi (odpovědi na dotazy), analýze návštěvnosti stránek, zajištění bezpečnosti služby a plnění právních povinností.",
    contactTitle: "Kontakt ohledně ochrany osobních údajů",
    contactContent:
      "V záležitostech týkajících se zpracování vašich osobních údajů nebo uplatnění vašich práv nás kontaktujte na adrese: [puaro@vp.pl].", // Aktualizujte e-mailovou adresu
  },
  termsOfUse: {
    title: "Podmínky Použití",
    metaDescription: "Přečtěte si podmínky použití služby EuroTrek.",
    introduction:
      "Tyto Podmínky Použití upravují pravidla používání webové služby EuroTrek. Používáním služby souhlasíte s níže uvedenými ustanoveními.",
    section1Title: "1. Obecná pravidla a přijetí podmínek",
    section1Content:
      "Služba EuroTrek je platforma prezentující cestovatelské fotografie. Uživatelé jsou povinni používat službu v souladu se zákonem a dobrými mravy. Je zakázáno zveřejňovat obsah nezákonný, urážlivý nebo porušující práva třetích stran.",
    contactTitle: "Kontakt ohledně Podmínek použití",
    contactContent:
      "Dotazy týkající se těchto Podmínek použití směřujte na adresu: [puaro@vp.pl].", // Aktualizujte e-mailovou adresu
  },
  accessibility: {
    title: "Prohlášení o Přístupnosti",
    metaDescription:
      "Zjistěte více o našem závazku k digitální přístupnosti v EuroTrek.",
    introduction:
      "EuroTrek se snaží zajistit digitální přístupnost služby pro co nejširší okruh uživatelů, včetně osob se zdravotním postižením. Neustále pracujeme na zlepšování rozhraní a uplatňování příslušných standardů přístupnosti, jako jsou WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Naše kroky k přístupnosti",
    section1Content:
      "Snažíme se implementovat řešení jako: používání sémantického kódu HTML, zajištění navigace pomocí klávesnice, odpovídající kontrast barev, alternativní popisy obrázků a testování služby pomocí různých podpůrných technologií.",
    contactTitle: "Zpětná vazba a kontaktní údaje",
    contactContent:
      "Pokud narazíte na bariéry přístupnosti v naší službě, kontaktujte nás prosím. Vaše připomínky jsou pro nás cenné. Kontaktujte nás na adrese: [puaro@vp.pl].", // Aktualizujte e-mailovou adresu
  },
  cookiePolicy: {
    title: "Zásady Cookies",
    metaDescription: "Zjistěte, jak EuroTrek používá soubory cookie.",
    introduction:
      "Naše služba používá soubory cookie (ciasteczka), aby zajistila správné fungování stránky, zlepšila vaše zkušenosti a pro analytické a marketingové účely (s vaším souhlasem).",
    section1Title: "1. Co jsou soubory cookie?",
    section1Content:
      "Soubory cookie jsou malé textové soubory ukládané na vašem zařízení (počítači, smartphonu) při návštěvě webových stránek. Umožňují stránce 'pamatovat' si vaše akce a preference po určitou dobu.",
    section2Title: "2. Jaké typy souborů cookie používáme?",
    section2Content: "Používáme různé typy souborů cookie, včetně:",
    type1:
      "Nezbytné soubory cookie: Nutné pro základní fungování služby (např. relace uživatele). Nevyžadují souhlas.",
    type2:
      "Analytické soubory cookie: Pomáhají nám porozumět, jak uživatelé používají stránku (např. Google Analytics). Vyžadují váš souhlas.",
    type3:
      "Funkční soubory cookie: Umožňují zapamatovat si vaše volby a preference (např. jazyk). Mohou vyžadovat souhlas.",
    type4:
      "Marketingové soubory cookie: Slouží k zobrazování personalizovaných reklam (např. Facebook Pixel). Vyžadují váš souhlas.",
    section3Title: "3. Správa souborů cookie",
    section3Content:
      "Svůj souhlas se soubory cookie můžete kdykoli spravovat pomocí nástroje pro správu souhlasů dostupného na našich stránkách (klikněte na tlačítko 'Nastavení Cookies'). Nastavení souborů cookie můžete také změnit ve svém webovém prohlížeči.",
    settingsError:
      "Nelze otevřít nastavení cookies. Kontaktujte technickou podporu nebo zkuste spravovat nastavení v prohlížeči.",
    settingsInfoPlaceholder:
      "Kliknutím na tlačítko se otevře panel pro správu nastavení souborů cookie.",
    contactTitle: "Kontakt ohledně Zásad cookies",
    contactContent:
      "V případě dotazů ohledně našich zásad cookies nás kontaktujte: [puaro@vp.pl].", // Aktualizujte e-mailovou adresu
  },
  faq: {
    title: "Často Kladené Otázky (FAQ)",
    metaDescription:
      "Najděte odpovědi na nejčastější otázky týkající se EuroTrek.",
    q1: "Otázka 1: Jak mohu zaslat své fotografie?",
    a1: "V současné době shromažďujeme fotografie od spřátelených studentů. Pokud máte zájem o spolupráci, kontaktujte nás prostřednictvím kontaktního formuláře a stručně popište své cesty a portfolio.",
    q2: "Otázka 2: Je používání služby zpoplatněno?",
    a2: "Ne, prohlížení fotografií a obsahu ve službě EuroTrek je pro všechny uživatele zcela zdarma.",
    q3: "Otázka 3: Kdo je vlastníkem autorských práv k fotografiím?",
    a3: "Autorská práva k fotografiím náleží studentům-autorům. EuroTrek má licenci k jejich zveřejnění ve službě. Podrobnosti stanoví smlouva s autorem a naše Podmínky použití.",
    stillHaveQuestions: "Máte další otázky?",
    contactUs: "Kontaktujte nás",
  },
  sitemap: {
    title: "Mapa Stránek",
    metaDescription: "Prohlédněte si strukturu stránek EuroTrek.",
    introduction:
      "Níže naleznete seznam hlavních sekcí a stránek dostupných ve službě EuroTrek, abyste se mohli snadněji orientovat.",
  },
  support: {
    title: "Pomoc a Podpora",
    metaDescription:
      "Potřebujete pomoc? Najděte kontaktní informace a podporu pro EuroTrek.",
    introduction:
      "Jsme tu, abychom vám pomohli! Pokud máte dotazy ohledně fungování služby, narazili jste na technický problém nebo máte jiné pochybnosti, využijte dostupné možnosti podpory.",
    faqTitle: "Nejprve Zkontrolujte FAQ",
    faqDescription:
      "Mnoho odpovědí na běžné otázky naleznete v naší sekci Často Kladených Otázek (FAQ).",
    goToFaq: "Přejít do FAQ",
    contactFormTitle: "Kontaktní Formulář",
    contactFormDescription:
      "Nejlepším způsobem, jak nás kontaktovat ve většině případů, je zaslání zprávy prostřednictvím našeho kontaktního formuláře.",
    goToContact: "Přejít na Kontakt",
    phoneTitle: "Telefonická Podpora",
    phoneDescription:
      "V naléhavých technických záležitostech nás můžete kontaktovat telefonicky v hodinách [např. 10:00 - 16:00] od pondělí do pátku.", // Aktualizujte hodiny
    phoneNumber: "Zavolejte: [000 000 000]", // Aktualizujte telefonní číslo
    responseInfo:
      "Snažíme se odpovídat na dotazy zaslané prostřednictvím kontaktního formuláře během 1-2 pracovních dnů.",
  },
};
