// Hero slider images
export interface HeroSlides {
  // id: string;
  // src: string;
  // alt: string;
  // location: string;
  // description: string;
}
export const heroSlides: HeroSlides[] = [
  // {
  //   id: "paris-hero",
  //   src: "/assets/niemcy-francja/10.avif",
  //   alt: "Eiffel Tower in Paris",
  //   location: "Paris, France",
  //   description:
  //     "The city of lights through a student's lens - capturing the magic of Parisian architecture and culture.",
  // },
];
export interface HeroImage {
  id: string;
  src: string;
  alt: string;
  location: string;
  description: string;
}

export const heroImages: HeroImage[] = [
  {
    id: "paris-hero",
    src: "/assets/niemcy-francja/10.avif",
    alt: "Eiffel Tower in Paris",
    location: "Paris, France",
    description:
      "The city of lights through a student's lens - capturing the magic of Parisian architecture and culture.",
  },
  {
    id: "lisbon-hero",
    src: "/assets/lizbona/7.avif",
    alt: "Tram in Lisbon",
    location: "Lisbon, Portugal",
    description:
      "Experience the charm of Portugal's capital - where historic trams meet modern culture.",
  },
  {
    id: "frankfurt-hero",
    src: "/assets/niemcy-francja/11.avif",
    alt: "Old Opera House (Alte Oper), Frankfurt",
    location: "Frankfurt am Main, Germany",
    description:
      "Perched above a picturesque square adorned with a graceful fountain lies the Opera House, sporting a Renaissance-style façade.",
  },
];

// Gallery photos
export interface Photo {
  id: string;
  src: string;
  alt?: string;
  title?: string;
  location?: string;
  city?: string;
}

export const photos: Photo[] = [
  {
    id: "lisbon-tram",
    src: "/assets/lizbona/3.avif",
    alt: "Historic Tram in Lisbon",
    title: "Historic Tram",
    location: "Lisbon, Portugal",
    city: "lisbon",
  },
  {
    id: "lisbon-belem",
    src: "/assets/lizbona/4.avif",
    alt: "Belém Tower in Lisbon",
    title: "Belém Tower",
    location: "Lisbon, Portugal",
    city: "lisbon",
  },
  {
    id: "lisbon-bele",
    src: "/assets/lizbona/5.avif",
    alt: "Belém Tower in Lisbon",
    title: "Belém Tower",
    location: "Lisbon, Portugal",
    city: "lisbon",
  },
  {
    id: "boca do inferno",
    src: "/assets/lizbona/cascais/1.avif",
    alt: "View of Mouth of Hell",
    title: "Mouth of Hell",
    location: "Cascais, Portugal",
    city: "lisbon",
  },
  {
    id: "paris-eiffel",
    src: "/assets/niemcy-francja/6.avif",
    alt: "Eiffel Tower in Paris",
    title: "Eiffel Tower",
    location: "Paris, France",
    city: "paris",
  },
  {
    id: "paris-louvre",
    src: "/assets/niemcy-francja/12.avif",
    alt: "Louvre Museum in Paris",
    title: "Louvre Museum",
    location: "Paris, France",
    city: "paris",
  },
  {
    id: "paris-panteon",
    src: "/assets/niemcy-francja/13.avif",
    alt: "Pantheon in Paris",
    title: "Louvre Museum",
    location: "Paris, France",
    city: "paris",
  },
  {
    id: "paris-snails",
    src: "/assets/niemcy-francja/14.avif",
    alt: "Pantheon in Paris",
    title: "Louvre Museum",
    location: "Paris, France",
    city: "paris",
  },
  {
    id: "berlin-gate",
    src: "/assets/niemcy-francja/9.avif",
    alt: "Brandenburg Gate in Berlin",
    title: "Brandenburg Gate",
    location: "Berlin, Germany",
    city: "berlin",
  },
  {
    id: "berlin-museum",
    src: "/assets/niemcy-francja/15.avif",
    alt: "East Side Gallery in Berlin",
    title: "East Side Gallery",
    location: "Berlin, Germany",
    city: "berlin",
  },
  {
    id: "berlin-victory-column",
    src: "/assets/niemcy-francja/17.avif",
    alt: "East Side Gallery in Berlin",
    title: "East Side Gallery",
    location: "Berlin, Germany",
    city: "berlin",
  },
  {
    id: "berlin-music",
    src: "/assets/niemcy-francja/20.avif",
    alt: "East Side Gallery in Berlin",
    title: "East Side Gallery",
    location: "Berlin, Germany",
    city: "berlin",
  },
  {
    id: "capri-marina",
    src: "/assets/neapol/Capri/1.avif",
    alt: "Marina Grande in Capri",
    title: "Marina Grande",
    location: "Capri, Italy",
    city: "capri",
  },
  {
    id: "capri-taras",
    src: "/assets/neapol/Capri/2.avif",
    alt: "Marina Grande in Capri",
    title: "Marina Grande",
    location: "Capri, Italy",
    city: "capri",
  },
  {
    id: "capri-street",
    src: "/assets/neapol/Capri/5.avif",
    alt: "Marina Grande in Capri",
    title: "Marina Grande",
    location: "Capri, Italy",
    city: "capri",
  },
  {
    id: "capri-port",
    src: "/assets/neapol/Capri/6.avif",
    alt: "Marina Grande in Capri",
    title: "Marina Grande",
    location: "Capri, Italy",
    city: "capri",
  },
  {
    id: "naples-view",
    src: "/assets/neapol/3.avif",
    alt: "View of Naples and Vesuvius",
    title: "Naples Panorama",
    location: "Naples, Italy",
    city: "naples",
  },
  {
    id: "naples-mummy",
    src: "/assets/neapol/4.avif",
    alt: "View of Naples and Vesuvius",
    title: "Naples Panorama",
    location: "Naples, Italy",
    city: "naples",
  },
  {
    id: "naples-stadion",
    src: "/assets/neapol/5.avif",
    alt: "View of Naples and Vesuvius",
    title: "Naples Panorama",
    location: "Naples, Italy",
    city: "naples",
  },
  {
    id: "naples-museum",
    src: "/assets/neapol/6.avif",
    alt: "View of Naples and Vesuvius",
    title: "Naples Panorama",
    location: "Naples, Italy",
    city: "naples",
  },
  {
    id: "prague-bridge",
    src: "/assets/praga/2.avif",
    alt: "Charles Bridge in Prague",
    title: "Charles Bridge",
    location: "Prague, Czech Republic",
    city: "prague",
  },
  {
    id: "prague-wit",
    src: "/assets/praga/4.avif",
    alt: "Charles Bridge in Prague",
    title: "Charles Bridge",
    location: "Prague, Czech Republic",
    city: "prague",
  },
  {
    id: "prague-dance",
    src: "/assets/praga/9.avif",
    alt: "Charles Bridge in Prague",
    title: "Charles Bridge",
    location: "Prague, Czech Republic",
    city: "prague",
  },
  {
    id: "prague-kafka",
    src: "/assets/praga/10.avif",
    alt: "Charles Bridge in Prague",
    title: "Charles Bridge",
    location: "Prague, Czech Republic",
    city: "prague",
  },
];
