import { Description } from "@radix-ui/react-toast";

export default {
  // Common
  common: {
    no_photos_data: "Brak danych zdjęć.",
    // --- DODANE ---
    lastUpdated: "Ostatnia aktualizacja",
    placeholderContent:
      "Treść tej sekcji jest w przygotowaniu. Wkrótce zostanie uzupełniona.",
    // --- KONIEC DODANYCH ---
  },
  // Navbar
  navbar: {
    home: "Strona główna",
    destinations: "Podróże",
    about: "O nas",
    contact: "Kontakt",
  },
  // Destinations
  destinations: {
    exploreTitle: "Odkryj Podróże",
    exploreDescription:
      "Przeglądaj naszą kolekcję studenckich zdjęć z podróży po najpiękniejszych miastach Europy.",
    allDestinations: "Wszystkie Podróże",
    lisbon: "Lizbona",
    paris: "Paryż",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Neapol",
    prague: "Praga",
    loadMore: "Załaduj więcej",
    ariaLabel: "Kategorie podróży",
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      location: "Paryż, Francja",
      description:
        "Miasto świateł oczami studenta - uchwycenie czaru paryskiej architektury i kultury.",
    },
    "rome-hero": {
      location: "Neapol, Włochy",
      description:
        "Neapol to miejsce, gdzie życie toczy się w rytmie espresso, rozmów na ulicy i zapachu świeżo wypiekanej pizzy unoszącego się w ciepłym, śródziemnomorskim powietrzu.",
    },
    "lisbon-hero": {
      location: "Lizbona, Portugalia",
      description:
        "Lizbona to miasto pełne światła, gdzie brukowane uliczki wiją się między kolorowymi kamienicami, a życie płynie spokojnie w rytmie fado i aromatu świeżych 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      location: "Frankfurt nad Menem, Niemcy",
      description:
        "Lizbona to miasto pełne światła, gdzie brukowane uliczki wiją się między kolorowymi kamienicami, a życie płynie spokojnie w rytmie fado i aromatu świeżych 'pasteis de nata'.",
    },
  },
  // Photos
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
    },
    "lisbon-belem": {
      title: "Dachy Starego Miasta",
      location: "Lizbona, Portugalia",
      description:
        "Najstarszą dzielnicą Lizbony jest Alfama, wybudowana na zboczu nad Tagiem w czasach panowania Maurów. To właśnie tutaj można poczuć klimat średniowiecznej Lizbony.",
    },
    "lisbon-bele": {
      title: "Wieża Belema",
      location: "Lizbona, Portugalia",
      description: "Średniowieczna twierdza z widokime na ujście rzeki Tagus",
    },
    "boca do inferno": {
      title: "Usta Piekieł",
      location: "Cascais, Portugalia",
      description:
        "Przepaść położona w nadmorskich klifach blisko portugalskiego miasta Cascais",
    },
    "capri-marina": {
      title: "Plaża Luigia u Faraglioni",
      location: "Capri, Włochy",
      description:
        "Usytuowana w Morzu Tyrreńskim, zajmuje 19. miejsce wśród 118 plaż regionu neapolitańskiego.",
    },
    "paris-hero": {
      title: "Wersal – Perła Baroku",
      location: "Paryż, Francja",
      alt: "Pałac Wersalski pod Paryżem",
      description:
        "Wersal jest symbolem francuskiej monarchii absolutnej i jednym z najwspanialszych przykładów barokowej architektury na świecie.",
    },
    "naples-view": {
      title: "Droga nad Morzem Tyrreńskim",
      location: "Neapol, Włochy",
      alt: "Droga u podnóża góry",
      description: "Malownicza trasa wzdłuż wybrzeża.",
    },
    "naples-mummy": {
      title: "Odlew ofiary Wezuwiusza",
      location: "Pompeje, Włochy",
      alt: "Ofiary wybuchu wulkanu",
      description:
        "Odlewy ciał zostały wydobyte w 1863 roku przez archeologa Giuseppe Fiorellego. „Do tej pory nie zostały zinwentaryzowane z powodów etycznych i uczuć, z jakimi zawsze traktowano szczątki ludzkie.",
    },
    "naples-stadion": {
      title: "Amfiteatr w Pompejach",
      location: "Pompeje, Włochy",
      alt: "Część stadionu w starożytnym mieście Pompeje",
      description:
        "Amfiteatr w Pompejach – starożytny rzymski amfiteatr, znajdujący się w Pompejach. Jest najstarszą zachowaną budowlą tego typu.",
    },
    "naples-museum": {
      title: "Mały dar pergamski",
      location: "Neapol, Włochy",
      alt: "Narodowe Muzeum Archeologiczne w Neapolu",
      description:
        "Kopia z II wieku n.e. z greckiego oryginału z II wieku p.n.e.",
    },
    "capri-taras": {
      title: "Capri w pobliżu Marina Piccola",
      location: "Capri, Włochy",
      alt: "Tarasy na Capri",
      description:
        "Uroczy taras na dachu z kaktusami. Większość dachów budynków na Capri jest płaska. A jak widać powyżej, tarasy są założone na niektórych z tych budynków.",
    },
    "capri-street": {
      title: "Ulica handlowa w Capri",
      location: "Capri, Włochy",
      alt: "Sklepy w Capri",
      description:
        "Capri charakteryzuje się urokliwymi uliczkami handlowymi, które zaczynają się od Piazzetty i prowadzą przez Via Camerelle oraz Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port w Marina Grande",
      location: "Capri, Włochy",
      alt: "Zacumowane jachty",
      description:
        "Nosiciele bagaży z głównych hoteli czekają, aby zabrać bagaż na wózku, a Ty możesz wjechać funikularem lub jechać kabrioletem, ponieważ na Capri nie ma ruchu samochodowego.",
    },
    "lisbon-hero": {
      title: "Klasztor Hieronimitów",
      location: "Lizbona, Portugalia",
      alt: "Klasztor Hieronimitów w Belem",
      description:
        "Zbudowany w I połowie XVI w., uważany jest za perłę i kwintesencję stylu manuelińskiego, będącego specyficznym dla Portugalii połączeniem gotyku i renesansu.",
    },
    "paris-eiffel": {
      title: "Wieża Eiffla",
      location: "Paryż, Francja",
      alt: "Wieczorna iluminacja Wieży Eiffla w Paryżu",
      description:
        "Najbardziej znany obiekt architektoniczny Paryża, uznawany za symbol tego miasta i niekiedy całej Francji.",
    },
    "paris-louvre": {
      title: "Luwr",
      location: "Paryż, Francja",
      alt: "Dawny pałac królewski w Paryżu",
      description:
        "Jedno z największych muzeów na świecie, jest też najczęściej odwiedzaną placówką tego typu na świecie.",
    },
    "paris-panteon": {
      title: "Widok Panteon od Place du Pantheon",
      location: "Paryż, Francja",
      alt: "Panteon od Place du Pantheon",
      description:
        "Panteon – budowla w Dzielnicy Łacińskiej w Paryżu, wzniesiona pod koniec XVIII wieku jako kościół pod wezwaniem świętej Genowefy.",
    },
    "paris-snails": {
      title: "Słynne francuskie ślimaki",
      location: "Paryż, Francja",
      alt: "Danie ze ślimaków",
      description:
        "Trudno sobie wyobrazić kuchnię nad Sekwaną, a szczególnie nad Rodanem, bez pysznego ślimaka na talerzu.",
    },
    "frankfurt-hero": {
      title: "Stara Opera (Alte Oper), Frankfurt",
      location: "Frankfurt nad Menem, Niemcy",
      alt: "Stara Opera (Alte Oper), Frankfurt",
      description:
        "Wznosząca się nad malowniczym placem ozdobionym elegancką fontanną znajduje się Opera, posiadająca fasadę w stylu renesansowym.",
    },
    "berlin-gate": {
      title: "Brama Brandenburska",
      location: "Berlin, Niemcy",
      alt: "Brama Brandenburska",
      description:
        "Brama Brandenburska jako symbol Pokoju i Wolności od 3 października 1990, w rocznicę zjednoczenia Niemiec.",
    },
    "berlin-museum": {
      title: "Stare Muzeum",
      location: "Berlin, Niemcy",
      alt: "Stare Muzeum",
      description:
        "Muzeum wybudowano z myślą o udostępnieniu zbiorów sztuki antycznej szerokiej publiczności, na polecenie pruskiego króla Fryderyka Wilhelma III.",
    },
    "berlin-victory-column": {
      title: "Kolumna Zwycięstwa",
      location: "Berlin, Niemcy",
      alt: "Kolumna Zwycięstwa",
      description:
        "Kolumna znajdująca się w parku Großer Tiergarten w Berlinie upamiętniejąca zwycięstwo Prus nad Danią w wojnie duńskiej z 1864.",
    },
    "berlin-music": {
      title: "Pomnik Beethovena Haydna i Mozarta",
      location: "Berlin, Niemcy",
      alt: "Pomnik trzech geniuszy muzycznych",
      description:
        "Plenerowy pomnik kompozytorów klasycznych: Ludwiga van Beethovena, Josepha Haydna i Wolfganga Amadeusza Mozarta w 1904 roku.",
    },
    "prague-bridge": {
      title: "Widok na Wełtawę w Pradze",
      location: "Praga, Czechy",
      alt: "Rzeka Wełtawa w Pradze",
      description:
        "Cała Praga przegląda się w Wełtawie i wdzięczy do niej, jak do magicznego lusterka.",
    },
    "prague-wit": {
      title: "Skarbiec Św. Wita",
      location: "Praga, Czechy",
      alt: "Skarbiec w Pradze",
      description:
        "Artefakty w Skarbcu Katedry Świętego Wita na Hradczanach w Pradze.",
    },
    "prague-dance": {
      title: "Tańczący Dom",
      location: "Praga, Czechy",
      alt: "Ginger i Fred",
      description:
        "Awangardowy budynek projektu pary architektów: Vlado Milunića i Franka Gehry’ego w stylu dekonstruktywistycznym.",
    },
    "prague-kafka": {
      title: "Obrotowa głowa Franza Kafki",
      location: "Praga, Czechy",
      alt: "Głowa Franza Kafki",
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
    image1: {
      title: "Lizbona",
      description: "Klasztor Hieronimitów.",
    },
    image2: {
      title: "Niemcy i Francja",
      description: "Niezapomniana podróż przez Niemcy i Francję.",
    },
    image3: {
      title: "Neapol",
      description: "Niezwykłe krajobrazy Neapolu.",
    },
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
      description: "Odwiedź nasze biuro studenckiego kolektywu",
      address: "University Creative Hub, European Campus, Amsterdam",
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
    pinterest: "Śledź nas na Pintereście",
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

  // --- DODANE SEKCJE DLA NOWYCH STRON INFORMACYJNYCH (Z WYPEŁNIONYMI OGÓLNYMI TREŚCIAMI) ---
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
      "W sprawach dotyczących przetwarzania Twoich danych osobowych lub realizacji swoich praw, skontaktuj się z nami pod adresem: [puaro@vp.pl].",
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
      "Pytania dotyczące niniejszych Warunków Użytkowania prosimy kierować na adres: [puaro@vp.pl].",
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
      "Jeśli napotkasz na bariery dostępności w naszym serwisie, prosimy o kontakt. Twoje uwagi są dla nas cenne. Skontaktuj się z nami pod adresem: [puaro@vp.pl].",
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
      "W razie pytań dotyczących naszej polityki cookies, skontaktuj się z nami: [puaro@vp.pl].",
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
    phoneNumber: "Zadzwoń: [000 000 000]",
    responseInfo:
      "Staramy się odpowiadać na zapytania wysłane przez formularz kontaktowy w ciągu 1-2 dni roboczych.",
  },
  // --- KONIEC ZMODYFIKOWANYCH SEKCJI ---
};
