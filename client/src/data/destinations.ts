export interface Destination {
  id: string;
  nameKey: string;
  countryKey: string;
  descriptionKey?: string;
  slugs: {
    pl: string;
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    cs: string;
  };
}

// Tablica z danymi destynacji
export const destinations: Destination[] = [
  {
    id: "lisbon",
    nameKey: "destinationsData.lisbon.name",
    countryKey: "destinationsData.lisbon.country",
    descriptionKey: "destinationsData.lisbon.description",
    slugs: {
      pl: "lizbona",
      en: "lisbon",
      de: "lissabon",
      es: "lisboa",
      fr: "lisbonne",
      it: "lisbona",
      cs: "lisabon",
    },
  },
  {
    id: "paris",
    nameKey: "destinationsData.paris.name",
    countryKey: "destinationsData.paris.country",
    descriptionKey: "destinationsData.paris.description",
    slugs: {
      pl: "paryz",
      en: "paris",
      de: "paris",
      es: "paris",
      fr: "paris",
      it: "parigi",
      cs: "pariz",
    },
  },
  {
    id: "berlin",
    nameKey: "destinationsData.berlin.name",
    countryKey: "destinationsData.berlin.country",
    descriptionKey: "destinationsData.berlin.description",
    slugs: {
      pl: "berlin",
      en: "berlin",
      de: "berlin",
      es: "berlin",
      fr: "berlin",
      it: "berlino",
      cs: "berlin",
    },
  },
  {
    id: "capri",
    nameKey: "destinationsData.capri.name",
    countryKey: "destinationsData.capri.country",
    descriptionKey: "destinationsData.capri.description",
    slugs: {
      pl: "capri",
      en: "capri",
      de: "capri",
      es: "capri",
      fr: "capri",
      it: "capri",
      cs: "capri",
    },
  },
  {
    id: "naples",
    nameKey: "destinationsData.naples.name",
    countryKey: "destinationsData.naples.country",
    descriptionKey: "destinationsData.naples.description",
    slugs: {
      pl: "neapol",
      en: "naples",
      de: "neapel",
      es: "napoles",
      fr: "naples",
      it: "napoli",
      cs: "neapol",
    },
  },
  {
    id: "prague",
    nameKey: "destinationsData.prague.name",
    countryKey: "destinationsData.prague.country",
    descriptionKey: "destinationsData.prague.description",
    slugs: {
      pl: "praga",
      en: "prague",
      de: "prag",
      es: "praga",
      fr: "prague",
      it: "praga",
      cs: "praha",
    },
  },
];

/**
 * Znajduje destynację na podstawie jej zlokalizowanego slugu i kodu języka.
 * @param slug - Zlokalizowany slug (np. "lizbona", "paris").
 * @param lang - Kod języka (np. "pl", "en").
 * @returns Obiekt Destination lub undefined, jeśli nie znaleziono.
 */

export const findDestinationBySlug = (
  slug: string,
  lang: string
): Destination | undefined => {
  const isValidLang = lang in destinations[0].slugs;
  if (!isValidLang) {
    console.warn(`Język "${lang}" nie jest obsługiwany w slugach destynacji.`);
    return undefined;
  }
  return destinations.find(
    (dest) => dest.slugs[lang as keyof Destination["slugs"]] === slug
  );
};

/**
 * Znajduje destynację na podstawie jej unikalnego ID.
 * @param id - Wewnętrzny identyfikator destynacji (np. "lisbon").
 * @returns Obiekt Destination lub undefined, jeśli nie znaleziono.
 */

export const findDestinationById = (id: string): Destination | undefined => {
  return destinations.find((dest) => dest.id === id);
};

/**
 * Pobiera zlokalizowany slug dla danej destynacji i języka.
 * @param destinationId - Wewnętrzny ID destynacji.
 * @param lang - Kod języka.
 * @returns Zlokalizowany slug lub pusty string, jeśli nie znaleziono.
 */

export const getSlugForDestination = (
  destinationId: string,
  lang: string
): string => {
  const destination = findDestinationById(destinationId);
  if (!destination) return "";

  const isValidLang = lang in destination.slugs;
  if (!isValidLang) {
    console.warn(
      `Język "${lang}" nie jest obsługiwany w slugach dla destynacji ID: ${destinationId}. Zwracam domyślny slug 'en'.`
    );

    return destination.slugs.en || "";
  }

  return destination.slugs[lang as keyof Destination["slugs"]] || "";
};
