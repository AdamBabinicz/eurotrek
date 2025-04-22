import { Description } from "@radix-ui/react-toast";

export default {
  // Common
  common: {
    no_photos_data: "Brak danych zdjęć.",
    // --- DODANE ---
    lastUpdated: "Ostatnia aktualizacja",
    placeholderContent:
      "[PLACEHOLDER] Treść tej sekcji jest w przygotowaniu. Wkrótce zostanie uzupełniona.",
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
      // Klucz sugeruje Rzym, ale opis Neapol - warto sprawdzić
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
      // Opis dotyczy Lizbony - BŁĄD KOPIOWANIA? Powinien być o Frankfurcie.
      description: "[PLACEHOLDER] Opis dla Frankfurt hero slide.",
    },
  },
  // Photos
  photos: {
    view: "Zobacz zdjęcie {{title}}",
    noPhotos: "Nie ma jeszcze dostępnych zdjęć dla tej podróży.",
    // --- Sprawdź czy nie ma duplikatów kluczy jak 'paris-hero', 'lisbon-hero', 'frankfurt-hero' ---
    // --- Istniejące zdjęcia ... ---
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
    // ... reszta zdjęć bez zmian ...
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
    pageTitle: "O Naszej Podróży", // Tytuł dla strony /about
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
    title: "Kontakt", // Używane na stronie głównej
    description:
      "Masz pytania lub chcesz przesłać własne studenckie zdjęcia z podróży? Chętnie Cię poznamy!",
    pageTitle: "Skontaktuj Się", // Używane na stronie /contact
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
      address: "University Creative Hub, European Campus, Amsterdam", // Zmień na prawdziwy adres lub usuń
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
    submitPhotos: "Prześlij Zdjęcia", // Ten link był w sugestiach, ale nie ma go w kodzie - dodać?
    privacyPolicy: "Polityka Prywatności",
    termsOfUse: "Warunki Użytkowania",
    accessibility: "Dostępność",
    // --- DODANE KLUCZE FOOTERA ---
    cookiePolicy: "Polityka Cookies",
    cookieSettings: "Ustawienia Cookies",
    faq: "FAQ",
    sitemap: "Mapa Strony",
    support: "Pomoc / Wsparcie",
    // --- KONIEC DODANYCH KLUCZY FOOTERA ---
    copyright: "Wszelkie prawa zastrzeżone.",
    tagline: "Stworzone z ❤ przez studentów, dla studentów.",
    instagram: "Śledź nas na Instagramie", // Używane jako aria-label
    twitter: "Śledź nas na Twitterze", // Używane jako aria-label
    facebook: "Śledź nas na Facebooku", // Używane jako aria-label
    linkedin: "Śledź nas na LinkedIn", // Dodaj aria-label dla LinkedIn
    messenger: "Skontaktuj się przez Messenger", // Dodaj aria-label dla Messenger
    pinterest: "Śledź nas na Pintereście", // Czy używasz Pinteresta? Jeśli nie, usuń.
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
