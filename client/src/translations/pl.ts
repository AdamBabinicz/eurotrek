import { Description } from "@radix-ui/react-toast"; // Nadal nieużywany, ale zgodnie z życzeniem

export default {
  // Common
  common: {
    no_photos_data: "Brak danych zdjęć.",
    lastUpdated: "Ostatnia aktualizacja",
    placeholderContent:
      "Treść tej sekcji jest w przygotowaniu. Wkrótce zostanie uzupełniona.",
    // Klucze fallback dla zdjęć
    no_alt_text: "Zdjęcie",
    no_title: "Bez tytułu",
    no_location: "Nieznana lokalizacja",
    photo_not_found: "Nie można załadować zdjęcia",
  },

  routes: {
    home: "",
    destinations: "podroze", // Mimo usunięcia trasy, slug może być potrzebny gdzieś indziej
    about: "o-nas",
    contact: "kontakt",
    destinationDetail: "podroz",
    faq: "faq",
    privacy: "polityka-prywatnosci",
    terms: "regulamin",
    sitemap: "mapa-strony",
    accessibility: "dostepnosc",
    cookiePolicy: "polityka-cookies",
    support: "pomoc",
  },

  // Navbar
  navbar: {
    home: "Strona główna",
    destinations: "Podróże",
    about: "O nas",
    contact: "Kontakt",
    mainNavLabel: "Główna nawigacja",
    goToHome: "Przejdź do strony głównej",
    toggleMenu: "Otwórz/Zamknij menu",
    mobileMenuTitle: "Menu",
  },
  // Destinations (dla strony listy, jeśli kiedyś powstanie)
  destinationsListPage: {
    title: "Nasze Podróże",
    metaDescription:
      "Odkryj wszystkie niesamowite miejsca, które oferujemy w EuroTrek.",
    header: "Odkryj Nasze Podróże",
  },
  // Destinations (ogólne terminy)
  destinations: {
    exploreTitle: "Odkryj Podróże",
    exploreDescription:
      "Przeglądaj naszą kolekcję studenckich zdjęć z podróży po najpiękniejszych miastach Europy.",
    lisbon: "Lizbona",
    paris: "Paryż",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Neapol",
    prague: "Praga",
    loadMore: "Załaduj więcej",
    ariaLabel: "Kategorie podróży",
    noMorePhotos: "Nie ma więcej zdjęć do załadowania dla tej kategorii",
  },
  // Dane specyficzne dla destynacji
  destinationsData: {
    lisbon: { name: "Lizbona", country: "Portugalia" },
    paris: { name: "Paryż", country: "Francja" },
    berlin: { name: "Berlin", country: "Niemcy" },
    capri: { name: "Capri", country: "Włochy" },
    naples: {
      name: "Neapol",
      country: "Włochy",
      description:
        "Neapol, tętniące życiem miasto w południowych Włoszech, położone nad Zatoką Neapolitańską. Słynie z bogatej historii, sztuki, kultury, architektury, muzyki i gastronomii.",
    },
    prague: { name: "Praga", country: "Czechy" },
  },
  // Hero Slides (z uzupełnionymi/poprawionymi alt i tytułami)
  heroSlides: {
    "paris-hero": {
      title: "Wersal - perła baroku",
      alt: "Pałac Wersalski pod Paryżem",
      location: "Wersal, Francja", // Poprawiono lokalizację
      description:
        "Miasto świateł oczami studenta - uchwycenie czaru paryskiej architektury i kultury.",
    },
    "rome-hero": {
      title: "Droga nad Morzem Tyrreńskim",
      alt: "Widok na wybrzeże i Wezuwiusz w Neapolu",
      location: "Neapol, Włochy",
      description:
        "Neapol to miejsce, gdzie życie toczy się w rytmie espresso, rozmów na ulicy i zapachu świeżo wypiekanej pizzy unoszącego się w ciepłym, śródziemnomorskim powietrzu.",
    },
    "lisbon-hero": {
      title: "Klasztor Hieronimitów",
      alt: "Klasztor Hieronimitów w Belem, Lizbona",
      location: "Lizbona, Portugalia",
      description:
        "Lizbona to miasto pełne światła, gdzie brukowane uliczki wiją się między kolorowymi kamienicami, a życie płynie spokojnie w rytmie fado i aromatu świeżych 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      title: "Stara Opera (Alte Oper)",
      alt: "Budynek Starej Opery we Frankfurcie",
      location: "Frankfurt nad Menem, Niemcy",
      description:
        "Odkryj Frankfurt nad Menem, gdzie lśniące wieżowce dzielnicy bankowej tworzą niezwykły kontrast z historycznym Opernplatz (Plac Operowy).",
    },
  },
  // Photos (z uzupełnionymi/poprawionymi alt)
  photos: {
    view: "Zobacz zdjęcie {{title}}",
    noPhotos: "Nie ma jeszcze dostępnych zdjęć dla tej podróży.",
    "paris-sunset": {
      title: "Zachód słońca w Paryżu",
      location: "Paryż, Francja",
      alt: "Wieża Eiffla o zachodzie słońca w Paryżu",
    },
    "lisbon-tram": {
      title: "Widok na Teatr Narodowy D. Marii II",
      location: "Lizbona, Portugalia",
      description:
        "Zabytkowy budynek teatru jest jednym z najbardziej prestiżowych sal Portugalii i znajduje się na placu Rossio w centrum miasta.",
      alt: "Żółty, zabytkowy tramwaj na placu Rossio w Lizbonie", // Uzupełniono alt
    },
    "lisbon-belem": {
      title: "Dachy Starego Miasta",
      location: "Lizbona, Portugalia",
      description:
        "Najstarszą dzielnicą Lizbony jest Alfama, wybudowana na zboczu nad Tagiem w czasach panowania Maurów. To właśnie tutaj można poczuć klimat średniowiecznej Lizbony.",
      alt: "Widok na czerwone dachy Alfamy w Lizbonie", // Uzupełniono alt
    },
    "lisbon-bele": {
      title: "Wieża Belema",
      location: "Lizbona, Portugalia",
      description: "Średniowieczna twierdza z widokime na ujście rzeki Tagus",
      alt: "Wieża Belem nad rzeką Tag w Lizbonie", // Uzupełniono alt
    },
    "boca do inferno": {
      title: "Usta Piekieł",
      location: "Cascais, Portugalia",
      description:
        "Przepaść położona w nadmorskich klifach blisko portugalskiego miasta Cascais",
      alt: "Skalna formacja Usta Piekieł w Cascais", // Uzupełniono alt
    },
    "capri-marina": {
      title: "Plaża Luigia u Faraglioni",
      location: "Capri, Włochy",
      description:
        "Usytuowana w Morzu Tyrreńskim, zajmuje 19. miejsce wśród 118 plaż regionu neapolitańskiego.",
      alt: "Plaża Luigia i formacje skalne Faraglioni na Capri", // Uzupełniono alt
    },
    "paris-hero": {
      title: "Wersal – Perła Baroku",
      location: "Wersal, Francja", // Poprawiono lokalizację
      alt: "Pałac Wersalski i ogrody",
      description:
        "Wersal jest symbolem francuskiej monarchii absolutnej i jednym z najwspanialszych przykładów barokowej architektury na świecie.",
    },
    "naples-view": {
      title: "Droga nad Morzem Tyrreńskim",
      location: "Neapol, Włochy",
      alt: "Droga u podnóża góry Wezuwiusz",
      description: "Malownicza trasa wzdłuż wybrzeża.",
    },
    "naples-mummy": {
      title: "Odlew ofiary Wezuwiusza",
      location: "Pompeje, Włochy",
      alt: "Gipsowy odlew ciała ofiary wybuchu Wezuwiusza",
      description:
        "Odlewy ciał zostały wydobyte w 1863 roku przez archeologa Giuseppe Fiorellego. „Do tej pory nie zostały zinwentaryzowane z powodów etycznych i uczuć, z jakimi zawsze traktowano szczątki ludzkie.",
    },
    "naples-stadion": {
      title: "Amfiteatr w Pompejach",
      location: "Pompeje, Włochy",
      alt: "Ruiny amfiteatru w starożytnym mieście Pompeje",
      description:
        "Amfiteatr w Pompejach – starożytny rzymski amfiteatr, znajdujący się w Pompejach. Jest najstarszą zachowaną budowlą tego typu.",
    },
    "naples-museum": {
      title: "Mały dar pergamski",
      location: "Neapol, Włochy",
      alt: "Rzeźba 'Umierający Gal' w Narodowym Muzeum Archeologicznym w Neapolu",
      description:
        "Kopia z II wieku n.e. z greckiego oryginału z II wieku p.n.e.",
    },
    "capri-taras": {
      title: "Capri w pobliżu Marina Piccola",
      location: "Capri, Włochy",
      alt: "Taras widokowy z kaktusami na Capri",
      description:
        "Uroczy taras na dachu z kaktusami. Większość dachów budynków na Capri jest płaska. A jak widać powyżej, tarasy są założone na niektórych z tych budynków.",
    },
    "capri-street": {
      title: "Ulica handlowa w Capri",
      location: "Capri, Włochy",
      alt: "Wąska ulica handlowa ze sklepami w Capri",
      description:
        "Capri charakteryzuje się urokliwymi uliczkami handlowymi, które zaczynają się od Piazzetty i prowadzą przez Via Camerelle oraz Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port w Marina Grande",
      location: "Capri, Włochy",
      alt: "Łodzie i jachty zacumowane w porcie Marina Grande na Capri",
      description:
        "Nosiciele bagaży z głównych hoteli czekają, aby zabrać bagaż na wózku, a Ty możesz wjechać funikularem lub jechać kabrioletem, ponieważ na Capri nie ma ruchu samochodowego.",
    },
    "lisbon-hero": {
      title: "Klasztor Hieronimitów",
      location: "Lizbona, Portugalia",
      alt: "Fasada Klasztoru Hieronimitów w Belem",
      description:
        "Zbudowany w I połowie XVI w., uważany jest za perłę i kwintesencję stylu manuelińskiego, będącego specyficznym dla Portugalii połączeniem gotyku i renesansu.",
    },
    "paris-eiffel": {
      title: "Wieża Eiffla",
      location: "Paryż, Francja",
      alt: "Wieczorna iluminacja Wieży Eiffla na tle nieba",
      description:
        "Najbardziej znany obiekt architektoniczny Paryża, uznawany za symbol tego miasta i niekiedy całej Francji.",
    },
    "paris-louvre": {
      title: "Luwr",
      location: "Paryż, Francja",
      alt: "Szklana piramida przed pałacem Luwr w Paryżu",
      description:
        "Jedno z największych muzeów na świecie, jest też najczęściej odwiedzaną placówką tego typu na świecie.",
    },
    "paris-panteon": {
      title: "Widok Panteon od Place du Pantheon",
      location: "Paryż, Francja",
      alt: "Fasada Panteonu w Paryżu widziana z placu",
      description:
        "Panteon – budowla w Dzielnicy Łacińskiej w Paryżu, wzniesiona pod koniec XVIII wieku jako kościół pod wezwaniem świętej Genowefy.",
    },
    "paris-snails": {
      title: "Słynne francuskie ślimaki",
      location: "Paryż, Francja",
      alt: "Talerz z przygotowanymi ślimakami po burgundzku",
      description:
        "Trudno sobie wyobrazić kuchnię nad Sekwaną, a szczególnie nad Rodanem, bez pysznego ślimaka na talerzu.",
    },
    "paris-1": {
      title: "Narodowa Biblioteka Francji, oddział Richelieu, sala Owalna",
      location: "Paryż, Francja",
      alt: "Wnętrze Sali Owalnej Biblioteki Narodowej Francji",
    },
    "paris-2": {
      title: "Wersal, Świątynia miłości",
      location: "Wersal, Francja",
      alt: "Świątynia Miłości w ogrodach Wersalu",
    },
    "paris-3": {
      title: "Wspaniałe historyczne ogrody",
      location: "Paryż, Francja",
      alt: "Alejka spacerowa w ogrodzie francuskim w Paryżu",
    },
    "paris-4": {
      title: "Rzymski mityczny bóg lasu i zaczarowanych kniei",
      location: "Paryż, Francja",
      alt: "Rzeźba Tańczącego Fauna",
    },
    "frankfurt-hero": {
      title: "Stara Opera (Alte Oper), Frankfurt",
      location: "Frankfurt nad Menem, Niemcy",
      alt: "Budynek Starej Opery we Frankfurcie nocą",
      description:
        "Wznosząca się nad malowniczym placem ozdobionym elegancką fontanną znajduje się Opera, posiadająca fasadę w stylu renesansowym.",
    },
    "berlin-gate": {
      title: "Brama Brandenburska",
      location: "Berlin, Niemcy",
      alt: "Brama Brandenburska nocą",
      description:
        "Brama Brandenburska jako symbol Pokoju i Wolności od 3 października 1990, w rocznicę zjednoczenia Niemiec.",
    },
    "berlin-museum": {
      title: "Stare Muzeum",
      location: "Berlin, Niemcy",
      alt: "Kolumnada przed Starym Muzeum w Berlinie",
      description:
        "Muzeum wybudowano z myślą o udostępnieniu zbiorów sztuki antycznej szerokiej publiczności, na polecenie pruskiego króla Fryderyka Wilhelma III.",
    },
    "berlin-victory-column": {
      title: "Kolumna Zwycięstwa",
      location: "Berlin, Niemcy",
      alt: "Złota figura na szczycie Kolumny Zwycięstwa w Berlinie",
      description:
        "Kolumna znajdująca się w parku Großer Tiergarten w Berlinie upamiętniejąca zwycięstwo Prus nad Danią w wojnie duńskiej z 1864.",
    },
    "berlin-music": {
      title: "Pomnik Beethovena Haydna i Mozarta",
      location: "Berlin, Niemcy",
      alt: "Pomnik trzech kompozytorów w parku Tiergarten",
      description:
        "Plenerowy pomnik kompozytorów klasycznych: Ludwiga van Beethovena, Josepha Haydna i Wolfganga Amadeusza Mozarta w 1904 roku.",
    },
    "prague-bridge": {
      title: "Widok na Wełtawę w Pradze",
      location: "Praga, Czechy",
      alt: "Most Karola nad Wełtawą w Pradze o zmierzchu",
      description:
        "Cała Praga przegląda się w Wełtawie i wdzięczy do niej, jak do magicznego lusterka.",
    },
    "prague-wit": {
      title: "Skarbiec Św. Wita",
      location: "Praga, Czechy",
      alt: "Relikwiarz w Skarbcu Katedry Św. Wita",
      description:
        "Artefakty w Skarbcu Katedry Świętego Wita na Hradczanach w Pradze.",
    },
    "prague-dance": {
      title: "Tańczący Dom",
      location: "Praga, Czechy",
      alt: "Nowoczesny budynek Tańczący Dom w Pradze",
      description:
        "Awangardowy budynek projektu pary architektów: Vlado Milunića i Franka Gehry’ego w stylu dekonstruktywistycznym.",
    },
    "prague-kafka": {
      title: "Obrotowa głowa Franza Kafki",
      location: "Praga, Czechy",
      alt: "Kinetyczna rzeźba Głowa Franza Kafki w Pradze",
      description:
        "David Ern zaprojektował to kontrowersyjne dzieło sztuki dla budynku handlowo-biurowego 'Quadrio' przy ulicy Národní třída.",
    },
  },
  // About Section
  about: {
    title: "O EuroTrek",
    description1:
      "EuroTrek to kolektywny dziennik fotograficzny stworzony przez studentów uniwersyteckich studiujących w Polsce. Naszą misją jest prezentowanie piękna, kultury i doświadczeń podróży studenckich poprzez autentyczną fotografię.",
    description2:
      "Ta platforma służy zarówno jako inspiracja dla przyszłych studentów-podróżników, jak i księga wspomnień dla tych, którzy już rozpoczęli swoje europejskie przygody. Wszystkie zdjęcia są wykonane przez studentów, ukazujących Europę przez świeżą, młodzieńczą perspektywę.",
    pageTitle: "O Naszej Podróży",
    pageDescription1:
      "EuroTrek narodził się z pasji do fotografii podróżniczej i pragnienia uchwycenia unikalnych doświadczeń studentów-odkrywców w najbardziej tętniących życiem miastach Europy.",
    pageDescription2:
      "To, co zaczęło się jako mała grupa dzielenia się zdjęciami wśród kolegów z klasy studiujących w Polsce, przekształciło się w platformę łączącą studentów-fotografów z różnych krajów, środowisk i dyscyplin akademickich, którzy dzielą wspólną miłość do odkrywania i wizualnego opowiadania historii.",
    pageDescription3:
      "Nasi współpracownicy to studenci tacy jak Ty, którzy równoważą swoje studia z przygodami po całym kontynencie, uwieczniając autentyczne momenty po drodze.",
    mission: {
      title: "Nasza Misja",
      description:
        "Inspirować do podróży studenckich poprzez autentyczne wizualne opowiadanie historii i tworzyć wspierającą społeczność dla młodych fotografów odkrywających Europę.",
    },
    team: {
      title: "Studencki Kolektyw",
      description:
        "Nasz zespół składa się wyłącznie ze studentów-fotografów, pisarzy i programistów internetowych z uniwersytetów na całym świecie. Każdy współpracownik wnosi swoją unikalną perspektywę i doświadczenie do platformy.",
    },
    feature1: {
      title: "Studenci-Fotografowie",
      description:
        "Zdjęcia wykonane przez studentów z zagranicy z całego świata",
    },
    feature2: {
      title: "Autentyczne Doświadczenia",
      description:
        "Prawdziwe momenty podróży poza typowymi atrakcjami turystycznymi",
    },
    feature3: {
      title: "Wiele Podróży",
      description: "Rosnąca kolekcja zdjęć z całego kontynentu europejskiego",
    },
    image1: { title: "Lizbona", description: "Klasztor Hieronimitów." },
    image2: {
      title: "Niemcy i Francja",
      description: "Niezapomniana podróż przez Niemcy i Francję.",
    },
    image3: { title: "Neapol", description: "Niezwykłe krajobrazy Neapolu." },
  },
  // Featured Section
  featured: {
    title: "Polecane: Wiosna w Paryżu",
    description1:
      "Paryż wiosną to marzenie dla studentów-fotografów. Miasto ożywa kwitnącymi wiśniami, kawiarnianymi ogródkami i idealnym światłem do uchwycenia ikonicznych zabytków.",
    description2:
      "Nasza polecana kolekcja pokazuje czar Paryża oczami polskich studentów, którzy spędzili swoje wakacje za granicą w Mieście Światła.",
    exploreLink: "Odkryj Kolekcję Paryż",
    image1Alt: "Wieża Eiffla wiosną",
    image2Alt: "Rzeka Sekwana w Paryżu",
    image3Alt: "Paryska kawiarnia",
    image4Alt: "Muzeum Luwr",
  },
  // Contact Section
  contact: {
    title: "Kontakt",
    description:
      "Masz pytania lub chcesz przesłać własne studenckie zdjęcia z podróży? Chętnie Cię poznamy!",
    pageTitle: "Skontaktuj Się",
    getInTouch: "Jak Możemy Ci Pomóc?",
    getInTouchDescription:
      "Niezależnie od tego, czy chcesz przesłać swoje zdjęcia z podróży, masz pytania dotyczące naszej platformy, czy po prostu chcesz się przywitać, jesteśmy tu, aby pomóc.",
    email: {
      title: "Napisz do Nas",
      description: "W sprawie ogólnych zapytań i przesyłania zdjęć",
    },
    location: {
      title: "Nasza Lokalizacja",
      description: "Odwiedź nas (po umówieniu)",
      address: "Uniwersytet Gdański, ul. Bażyńskiego 8, 80-309 Gdańsk",
    },
    phone: {
      title: "Zadzwoń do Nas",
      description: "Dostępni w dni powszednie od 10:00 do 18:00 CET",
    },
    form: {
      name: "Twoje Imię",
      namePlaceholder: "Wpisz swoje imię",
      nameError: "Imię jest wymagane",
      email: "Twój Email",
      emailPlaceholder: "Wpisz swój email",
      emailError: "Wymagany jest prawidłowy email",
      subject: "Temat",
      subjectPlaceholder: "O czym chcesz porozmawiać?",
      subjectError: "Temat jest wymagany",
      message: "Wiadomość",
      messagePlaceholder: "Wpisz swoją wiadomość tutaj...",
      messageError: "Wiadomość musi zawierać co najmniej 10 znaków",
      send: "Wyślij Wiadomość",
      sending: "Wysyłanie...",
      successTitle: "Wiadomość Wysłana!",
      successMessage: "Dziękujemy za kontakt. Odezwiemy się wkrótce.",
    },
  },
  // Footer
  footer: {
    description:
      "Wizualna podróż przez Europę uchwycona obiektywem studentów, którzy odkrywają najpiękniejsze zakątki kontynentu.",
    quickLinks: "Szybkie Linki",
    resources: "Zasoby",
    parisCollection: "Kolekcja Paryż",
    submitPhotos: "Prześlij Zdjęcia",
    privacyPolicy: "Polityka Prywatności",
    termsOfUse: "Warunki Użytkowania",
    accessibility: "Dostępność",
    cookiePolicy: "Polityka Cookies",
    cookieSettings: "Ustawienia Cookies",
    faq: "Najczęściej Zadawane Pytania (FAQ)",
    sitemap: "Mapa Strony",
    support: "Pomoc i Wsparcie",
    copyright: "Wszelkie prawa zastrzeżone.",
    tagline: "Stworzone z ❤ przez studentów, dla studentów.",
    instagram: "Śledź nas na Instagramie",
    twitter: "Śledź nas na Twitterze",
    facebook: "Śledź nas na Facebooku",
    pinterest: "Śledź nas na Pintereście", // Zostawione, jeśli planujesz dodać
  },
  // Slider Controls
  slider: {
    previous: "Poprzedni slajd",
    next: "Następny slajd",
    goToSlide: "Przejdź do slajdu {{index}}",
  },
  // Lightbox
  lightbox: {
    close: "Zamknij przeglądarkę",
    previous: "Poprzednie zdjęcie",
    next: "Następne zdjęcie",
  },
  // Theme Toggle
  theme: {
    toggleLight: "Przełącz na tryb jasny",
    toggleDark: "Przełącz na tryb ciemny",
  },
  // Language
  language: {
    changeLanguage: "Zmień język",
  },
  // Home
  home: {
    heroAriaLabel: "Polecane destynacje",
  },

  // --- SEKCJE DLA STRON INFORMACYJNYCH ---
  privacyPolicy: {
    title: "Polityka Prywatności",
    metaDescription: "Przeczytaj politykę prywatności serwisu EuroTrek.",
    introduction:
      "Witamy w polityce prywatności EuroTrek. Twoja prywatność jest dla nas ważna i dokładamy wszelkich starań, aby chronić Twoje dane osobowe zgodnie z obowiązującymi przepisami, w tym RODO.",
    section1Title: "1. Jakie informacje zbieramy?",
    section1Content:
      "Gromadzimy informacje, które nam bezpośrednio przekazujesz (np. przez formularz kontaktowy: imię, adres e-mail, treść wiadomości) oraz dane zbierane automatycznie podczas korzystania z serwisu (np. adres IP, typ przeglądarki, informacje o urządzeniu, dane o aktywności w serwisie za pomocą plików cookie – zobacz Politykę Cookies).",
    section2Title: "2. Jak wykorzystujemy Twoje informacje?",
    section2Content:
      "Twoje dane wykorzystujemy w celu świadczenia i ulepszania naszych usług, komunikacji z Tobą (odpowiedzi na zapytania), analizy ruchu na stronie, zapewnienia bezpieczeństwa serwisu oraz wypełniania obowiązków prawnych.",
    contactTitle: "Kontakt w sprawie prywatności",
    contactContent:
      "W sprawach dotyczących przetwarzania Twoich danych osobowych lub realizacji swoich praw, skontaktuj się z nami pod adresem: puaro@vp.pl",
  },
  termsOfUse: {
    title: "Warunki Użytkowania",
    metaDescription: "Przeczytaj warunki użytkowania serwisu EuroTrek.",
    introduction:
      "Niniejsze Warunki Użytkowania regulują zasady korzystania z serwisu internetowego EuroTrek. Korzystając z serwisu, akceptujesz poniższe postanowienia.",
    section1Title: "1. Zasady ogólne i akceptacja warunków",
    section1Content:
      "Serwis EuroTrek jest platformą prezentującą fotografie podróżnicze. Użytkownicy zobowiązani są do korzystania z serwisu zgodnie z prawem i dobrymi obyczajami. Zabronione jest publikowanie treści niezgodnych z prawem, obraźliwych lub naruszających prawa osób trzecich.",
    contactTitle: "Kontakt w sprawie Warunków Użytkowania",
    contactContent:
      "Pytania dotyczące niniejszych Warunków Użytkowania prosimy kierować na adres: puaro@vp.pl",
  },
  accessibility: {
    title: "Oświadczenie o Dostępności",
    metaDescription:
      "Dowiedz się o naszym zaangażowaniu w dostępność cyfrową w EuroTrek.",
    introduction:
      "EuroTrek dąży do zapewnienia dostępności cyfrowej serwisu dla jak najszerszego grona użytkowników, w tym osób z niepełnosprawnościami. Stale pracujemy nad ulepszaniem interfejsu i stosowaniem odpowiednich standardów dostępności, takich jak WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Nasze działania na rzecz dostępności",
    section1Content:
      "Staramy się wdrażać rozwiązania takie jak: stosowanie semantycznego kodu HTML, zapewnienie nawigacji za pomocą klawiatury, odpowiedni kontrast kolorów, opisy alternatywne dla obrazów oraz testowanie serwisu z użyciem różnych technologii wspomagających.",
    contactTitle: "Informacje zwrotne i dane kontaktowe",
    contactContent:
      "Jeśli napotkasz na bariery dostępności w naszym serwisie, prosimy o kontakt. Twoje uwagi są dla nas cenne. Skontaktuj się z nami pod adresem: puaro@vp.pl",
  },
  cookiePolicy: {
    title: "Polityka Cookies",
    metaDescription: "Dowiedz się, jak EuroTrek wykorzystuje pliki cookie.",
    introduction:
      "Nasz serwis wykorzystuje pliki cookie (ciasteczka), aby zapewnić prawidłowe działanie strony, ulepszyć Twoje doświadczenia oraz w celach analitycznych i marketingowych (za Twoją zgodą).",
    section1Title: "1. Czym są pliki cookie?",
    section1Content:
      "Pliki cookie to małe pliki tekstowe zapisywane na Twoim urządzeniu (komputerze, smartfonie) podczas odwiedzania stron internetowych. Pozwalają stronie 'pamiętać' Twoje akcje i preferencje przez pewien czas.",
    section2Title: "2. Jakich rodzajów plików cookie używamy?",
    section2Content: "Używamy różnych typów plików cookie, w tym:",
    type1:
      "Niezbędne pliki cookie: Konieczne do podstawowego funkcjonowania serwisu (np. sesja użytkownika). Nie wymagają zgody.",
    type2:
      "Analityczne pliki cookie: Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony (np. Google Analytics). Wymagają Twojej zgody.",
    type3:
      "Funkcjonalne pliki cookie: Umożliwiają zapamiętanie Twoich wyborów i preferencji (np. język). Mogą wymagać zgody.",
    type4:
      "Marketingowe pliki cookie: Służą do wyświetlania spersonalizowanych reklam (np. Facebook Pixel). Wymagają Twojej zgody.",
    section3Title: "3. Zarządzanie plikami cookie",
    section3Content:
      "Możesz zarządzać swoimi zgodami na pliki cookie w dowolnym momencie za pomocą narzędzia do zarządzania zgodami dostępnego na naszej stronie (kliknij przycisk 'Ustawienia Cookies'). Możesz również zmienić ustawienia plików cookie w swojej przeglądarce internetowej.",
    settingsError:
      "Nie można otworzyć ustawień cookies. Skontaktuj się z pomocą techniczną lub spróbuj zarządzać ustawieniami w przeglądarce.",
    settingsInfoPlaceholder:
      "Kliknięcie przycisku otworzy panel zarządzania ustawieniami plików cookie.",
    contactTitle: "Kontakt w sprawie Polityki Cookies",
    contactContent:
      "W razie pytań dotyczących naszej polityki cookies, skontaktuj się z nami: puaro@vp.pl",
  },
  faq: {
    title: "Najczęściej Zadawane Pytania (FAQ)",
    metaDescription:
      "Znajdź odpowiedzi na najczęstsze pytania dotyczące EuroTrek.",
    q1: "Pytanie 1: Jak mogę przesłać swoje zdjęcia?",
    a1: "Obecnie zbieramy zdjęcia od zaprzyjaźnionych studentów. Jeśli jesteś zainteresowany współpracą, skontaktuj się z nami poprzez formularz kontaktowy, opisując krótko swoje podróże i portfolio.",
    q2: "Pytanie 2: Czy korzystanie z serwisu jest płatne?",
    a2: "Nie, przeglądanie zdjęć i treści w serwisie EuroTrek jest całkowicie darmowe dla wszystkich użytkowników.",
    q3: "Pytanie 3: Kto jest właścicielem praw autorskich do zdjęć?",
    a3: "Prawa autorskie do zdjęć należą do studentów-autorów. EuroTrek posiada licencję na ich publikację w serwisie. Szczegóły określa umowa z autorem oraz nasze Warunki Użytkowania.",
    stillHaveQuestions: "Masz inne pytania?",
    contactUs: "Skontaktuj się z nami",
  },
  sitemap: {
    title: "Mapa Strony",
    metaDescription: "Przeglądaj strukturę strony EuroTrek.",
    introduction:
      "Poniżej znajduje się lista głównych sekcji i stron dostępnych w serwisie EuroTrek, aby ułatwić Ci nawigację.",
  },
  support: {
    title: "Pomoc i Wsparcie",
    metaDescription:
      "Potrzebujesz pomocy? Znajdź informacje kontaktowe i wsparcie dla EuroTrek.",
    introduction:
      "Jesteśmy tutaj, aby pomóc! Jeśli masz pytania dotyczące działania serwisu, napotkałeś problem techniczny lub masz inne wątpliwości, skorzystaj z dostępnych opcji wsparcia.",
    faqTitle: "Sprawdź Najpierw FAQ",
    faqDescription:
      "Wiele odpowiedzi na powszechne pytania znajdziesz w naszej sekcji Najczęściej Zadawanych Pytań (FAQ).",
    goToFaq: "Przejdź do FAQ",
    contactFormTitle: "Formularz Kontaktowy",
    contactFormDescription:
      "Najlepszym sposobem na kontakt w większości spraw jest wysłanie wiadomości przez nasz formularz kontaktowy.",
    goToContact: "Przejdź do Kontaktu",
    phoneTitle: "Wsparcie Telefoniczne",
    phoneDescription:
      "W pilnych sprawach technicznych możesz skontaktować się telefonicznie w godzinach [np. 10:00 - 16:00] od poniedziałku do piątku.",
    phoneNumber: "Zadzwoń: +48 000 000 000", // Zmieniono placeholder
    responseInfo:
      "Staramy się odpowiadać na zapytania wysłane przez formularz kontaktowy w ciągu 1-2 dni roboczych.",
  },
};
