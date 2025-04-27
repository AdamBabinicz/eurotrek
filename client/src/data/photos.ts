export interface HeroImage {
  id: string;
  src: string;
  alt: string; // Zmienione na klucz
  location: string; // Zmienione na klucz
  description: string; // Zmienione na klucz
}

// Dane dla Hero slider ze ZMIENIONYMI polami na klucze
export const heroImages: HeroImage[] = [
  {
    id: "paris-hero", // ID zostaje
    src: "/assets/niemcy-francja/10.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.paris-hero.alt",
    location: "photos.paris-hero.location",
    description: "photos.paris-hero.description",
  },
  {
    id: "lisbon-hero", // ID zostaje
    src: "/assets/lizbona/7.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.lisbon-hero.alt",
    location: "photos.lisbon-hero.location",
    description: "photos.lisbon-hero.description",
  },
  {
    id: "frankfurt-hero", // ID zostaje
    src: "/assets/niemcy-francja/11.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.frankfurt-hero.alt",
    location: "photos.frankfurt-hero.location",
    description: "photos.frankfurt-hero.description",
  },
  // Dodaj ewentualne inne slajdy hero, również używając kluczy
  {
    id: "rome-hero", // Zakładając, że masz taki slajd (był w pl.ts)
    src: "/assets/neapol/3.avif", // Przykładowy obrazek dla Neapolu
    alt: "photos.rome-hero.alt", // Klucz (mimo że ID to rome-hero, klucz w pl.ts był tak nazwany)
    location: "photos.rome-hero.location",
    description: "photos.rome-hero.description",
  },
];

// Interfejs dla zdjęć w galerii (pozostaje bez zmian)
export interface Photo {
  id: string;
  src: string;
  alt?: string; // Zmienione na klucz (opcjonalny)
  title?: string; // Zmienione na klucz (opcjonalny)
  location?: string; // Zmienione na klucz (opcjonalny)
  city?: string;
  isFeatured?: boolean;
}

// Dane dla zdjęć w galerii ze ZMIENIONYMI polami na klucze
export const photos: Photo[] = [
  {
    id: "lisbon-tram", // ID zostaje
    src: "/assets/lizbona/3.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.lisbon-tram.alt",
    title: "photos.lisbon-tram.title",
    location: "photos.lisbon-tram.location",
    city: "lisbon",
  },
  {
    id: "lisbon-belem", // ID zostaje
    src: "/assets/lizbona/4.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.lisbon-belem.alt",
    title: "photos.lisbon-belem.title",
    location: "photos.lisbon-belem.location",
    city: "lisbon",
  },
  {
    id: "lisbon-bele", // ID zostaje (miałeś 'bele' w pl.ts)
    src: "/assets/lizbona/5.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.lisbon-bele.alt",
    title: "photos.lisbon-bele.title",
    location: "photos.lisbon-bele.location",
    city: "lisbon",
  },
  {
    id: "boca do inferno", // ID zostaje (zgodnie z pl.ts)
    src: "/assets/lizbona/cascais/1.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.boca do inferno.alt", // Użyj cudzysłowów, jeśli klucz ma spację
    title: "photos.boca do inferno.title",
    location: "photos.boca do inferno.location",
    city: "lisbon",
  },
  {
    id: "paris-eiffel", // ID zostaje
    src: "/assets/niemcy-francja/6.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.paris-eiffel.alt",
    title: "photos.paris-eiffel.title",
    location: "photos.paris-eiffel.location",
    city: "paris",
  },
  {
    id: "paris-louvre", // ID zostaje
    src: "/assets/niemcy-francja/12.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.paris-louvre.alt",
    title: "photos.paris-louvre.title",
    location: "photos.paris-louvre.location",
    city: "paris",
  },
  {
    id: "paris-panteon", // ID zostaje
    src: "/assets/niemcy-francja/13.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.paris-panteon.alt",
    title: "photos.paris-panteon.title",
    location: "photos.paris-panteon.location",
    city: "paris",
  },
  {
    id: "paris-snails", // ID zostaje
    src: "/assets/niemcy-francja/14.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.paris-snails.alt",
    title: "photos.paris-snails.title",
    location: "photos.paris-snails.location",
    city: "paris",
  },
  // Dodano brakujące w pl.ts, ale które były w oryginalnym photos.ts
  {
    id: "paris-1",
    src: "/path/to/paris1.avif", // Dostosuj ścieżkę
    alt: "photos.paris-1.alt",
    title: "photos.paris-1.title",
    location: "photos.paris-1.location",
    city: "paris",
    isFeatured: true,
  },
  {
    id: "paris-2",
    src: "/path/to/paris2.avif", // Dostosuj ścieżkę
    alt: "photos.paris-2.alt",
    title: "photos.paris-2.title",
    location: "photos.paris-2.location",
    city: "paris",
    isFeatured: true,
  },
  {
    id: "paris-3",
    src: "/path/to/paris3.avif", // Dostosuj ścieżkę
    alt: "photos.paris-3.alt",
    title: "photos.paris-3.title",
    location: "photos.paris-3.location",
    city: "paris",
    isFeatured: true,
  },
  {
    id: "paris-4",
    src: "/path/to/paris4.avif", // Dostosuj ścieżkę
    alt: "photos.paris-4.alt",
    title: "photos.paris-4.title",
    location: "photos.paris-4.location",
    city: "paris",
    isFeatured: true,
  },
  {
    id: "berlin-gate", // ID zostaje
    src: "/assets/niemcy-francja/9.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.berlin-gate.alt",
    title: "photos.berlin-gate.title",
    location: "photos.berlin-gate.location",
    city: "berlin",
  },
  {
    id: "berlin-museum", // ID zostaje
    src: "/assets/niemcy-francja/15.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.berlin-museum.alt",
    title: "photos.berlin-museum.title",
    location: "photos.berlin-museum.location",
    city: "berlin",
  },
  {
    id: "berlin-victory-column", // ID zostaje
    src: "/assets/niemcy-francja/17.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.berlin-victory-column.alt",
    title: "photos.berlin-victory-column.title",
    location: "photos.berlin-victory-column.location",
    city: "berlin",
  },
  {
    id: "berlin-music", // ID zostaje
    src: "/assets/niemcy-francja/20.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.berlin-music.alt",
    title: "photos.berlin-music.title",
    location: "photos.berlin-music.location",
    city: "berlin",
  },
  {
    id: "capri-marina", // ID zostaje
    src: "/assets/neapol/Capri/1.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.capri-marina.alt",
    title: "photos.capri-marina.title",
    location: "photos.capri-marina.location",
    city: "capri",
  },
  {
    id: "capri-taras", // ID zostaje
    src: "/assets/neapol/Capri/2.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.capri-taras.alt",
    title: "photos.capri-taras.title",
    location: "photos.capri-taras.location",
    city: "capri",
  },
  {
    id: "capri-street", // ID zostaje
    src: "/assets/neapol/Capri/5.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.capri-street.alt",
    title: "photos.capri-street.title",
    location: "photos.capri-street.location",
    city: "capri",
  },
  {
    id: "capri-port", // ID zostaje
    src: "/assets/neapol/Capri/6.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.capri-port.alt",
    title: "photos.capri-port.title",
    location: "photos.capri-port.location",
    city: "capri",
  },
  {
    id: "naples-view", // ID zostaje
    src: "/assets/neapol/3.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.naples-view.alt",
    title: "photos.naples-view.title",
    location: "photos.naples-view.location",
    city: "naples",
  },
  {
    id: "naples-mummy", // ID zostaje
    src: "/assets/neapol/4.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.naples-mummy.alt",
    title: "photos.naples-mummy.title",
    location: "photos.naples-mummy.location",
    city: "naples",
  },
  {
    id: "naples-stadion", // ID zostaje
    src: "/assets/neapol/5.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.naples-stadion.alt",
    title: "photos.naples-stadion.title",
    location: "photos.naples-stadion.location",
    city: "naples",
  },
  {
    id: "naples-museum", // ID zostaje
    src: "/assets/neapol/6.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.naples-museum.alt",
    title: "photos.naples-museum.title",
    location: "photos.naples-museum.location",
    city: "naples",
  },
  {
    id: "prague-bridge", // ID zostaje
    src: "/assets/praga/2.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.prague-bridge.alt",
    title: "photos.prague-bridge.title",
    location: "photos.prague-bridge.location",
    city: "prague",
  },
  {
    id: "prague-wit", // ID zostaje
    src: "/assets/praga/4.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.prague-wit.alt",
    title: "photos.prague-wit.title",
    location: "photos.prague-wit.location",
    city: "prague",
  },
  {
    id: "prague-dance", // ID zostaje
    src: "/assets/praga/9.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.prague-dance.alt",
    title: "photos.prague-dance.title",
    location: "photos.prague-dance.location",
    city: "prague",
  },
  {
    id: "prague-kafka", // ID zostaje
    src: "/assets/praga/10.avif",
    // Użyto kluczy odpowiadających strukturze w pl.ts
    alt: "photos.prague-kafka.alt",
    title: "photos.prague-kafka.title",
    location: "photos.prague-kafka.location",
    city: "prague",
  },
];
