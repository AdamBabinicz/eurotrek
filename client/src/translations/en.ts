import { Description } from "@radix-ui/react-toast"; // This import might not be needed directly in the translations file, but keeping it as per the original structure.

export default {
  // Common
  common: {
    no_photos_data: "No photo data available.",
  },
  // Navbar
  navbar: {
    home: "Home",
    destinations: "Destinations",
    about: "About Us",
    contact: "Contact",
  },
  // Destinations
  destinations: {
    exploreTitle: "Explore Destinations",
    exploreDescription:
      "Browse our collection of student travel photos from Europe's most beautiful cities.",
    allDestinations: "All Destinations",
    lisbon: "Lisbon",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Naples",
    prague: "Prague",
    loadMore: "Load More",
    ariaLabel: "Destination categories",
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      location: "Paris, France",
      description:
        "The City of Lights through a student's eyes - capturing the charm of Parisian architecture and culture.",
    },
    "rome-hero": {
      // Key points to Naples based on original PL content
      location: "Naples, Italy",
      description:
        "Naples is a place where life pulses to the rhythm of espresso, street conversations, and the scent of freshly baked pizza drifting in the warm Mediterranean air.",
    },
    "lisbon-hero": {
      location: "Lisbon, Portugal",
      description:
        "Lisbon is a city full of light, where cobblestone streets wind between colorful houses, and life flows calmly to the rhythm of fado and the aroma of fresh 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      // Using the more accurate description from photos["frankfurt-hero"]
      location: "Frankfurt am Main, Germany",
      description:
        "Rising above a picturesque square adorned with an elegant fountain is the Old Opera House (Alte Oper), boasting a Renaissance-style facade.",
    },
  },
  // Photos
  photos: {
    view: "View photo {{title}}",
    noPhotos: "No photos are available for this destination yet.",
    "paris-sunset": {
      title: "Paris Sunset",
      location: "Paris, France",
      alt: "Eiffel Tower at sunset in Paris",
    },
    "lisbon-tram": {
      title: "View of the D. Maria II National Theatre",
      location: "Lisbon, Portugal",
      description:
        "The historic theatre building is one of Portugal's most prestigious venues and is located in Rossio Square in the city center.",
    },
    "lisbon-belem": {
      // Key likely refers to Alfama based on description
      title: "Old Town Rooftops",
      location: "Lisbon, Portugal",
      description:
        "Lisbon's oldest district is Alfama, built on the hillside above the Tagus River during the Moorish rule. It's here you can feel the atmosphere of medieval Lisbon.",
    },
    "lisbon-bele": {
      // Key likely refers to Belém Tower
      title: "Belém Tower",
      location: "Lisbon, Portugal",
      description:
        "Medieval fortress overlooking the mouth of the Tagus River.",
    },
    "boca do inferno": {
      title: "Mouth of Hell (Boca do Inferno)",
      location: "Cascais, Portugal",
      description:
        "A chasm located in the seaside cliffs near the Portuguese town of Cascais.",
    },
    "capri-marina": {
      // Key likely refers to Faraglioni based on description
      title: "Luigi ai Faraglioni Beach",
      location: "Capri, Italy",
      description:
        "Situated in the Tyrrhenian Sea, it ranks 19th among the 118 beaches of the Neapolitan region.",
    },
    "paris-hero": {
      // Key likely refers to Versailles based on description
      title: "Versailles – Pearl of the Baroque",
      location: "Versailles, France", // Corrected location
      alt: "Palace of Versailles near Paris",
      description:
        "Versailles is a symbol of French absolute monarchy and one of the most magnificent examples of Baroque architecture in the world.",
    },
    "naples-view": {
      title: "Road by the Tyrrhenian Sea",
      location: "Naples, Italy",
      alt: "Road at the foot of a mountain",
    },
    "naples-mummy": {
      title: "Cast of a Vesuvius Victim",
      location: "Pompeii, Italy",
      alt: "Victims of the volcano eruption",
      description:
        "The body casts were discovered in 1863 by archaeologist Giuseppe Fiorelli. 'To date, they have not been inventoried for ethical reasons and the sentiments with which human remains have always been treated.'",
    },
    "naples-stadion": {
      title: "Amphitheatre in Pompeii",
      location: "Pompeii, Italy",
      alt: "Part of the stadium in the ancient city of Pompeii",
      description:
        "The Amphitheatre of Pompeii – an ancient Roman amphitheater located in Pompeii. It is the oldest surviving structure of its kind.",
    },
    "naples-museum": {
      title: "The Lesser Attalid Dedication (Gauls)",
      location: "Naples, Italy",
      alt: "National Archaeological Museum in Naples",
      description:
        "A 2nd-century AD copy of a Greek original from the 2nd century BC.",
    },
    "capri-taras": {
      title: "Capri near Marina Piccola",
      location: "Capri, Italy",
      alt: "Terraces on Capri",
      description:
        "A charming rooftop terrace with cacti. Most building roofs on Capri are flat. And as seen above, terraces are established on some of these buildings.",
    },
    "capri-street": {
      title: "Shopping Street in Capri",
      location: "Capri, Italy",
      alt: "Shops in Capri",
      description:
        "Capri is characterized by charming shopping streets that start from the Piazzetta and lead through Via Camerelle and Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port in Marina Grande",
      location: "Capri, Italy",
      alt: "Moored yachts",
      description:
        "Porters from the main hotels wait to take your luggage on a trolley, and you can take the funicular or ride in a convertible taxi, as there is no car traffic on Capri.",
    },
    "lisbon-hero": {
      // Key likely refers to Jerónimos Monastery based on description
      title: "Jerónimos Monastery",
      location: "Lisbon, Portugal",
      alt: "Jerónimos Monastery in Belém",
      description:
        "Built in the first half of the 16th century, it is considered the pearl and quintessence of the Manueline style, a uniquely Portuguese blend of Gothic and Renaissance.",
    },
    "paris-eiffel": {
      title: "Eiffel Tower",
      location: "Paris, France",
      alt: "Evening illumination of the Eiffel Tower in Paris",
      description:
        "The most famous architectural landmark of Paris, considered a symbol of the city and sometimes of all France.",
    },
    "paris-louvre": {
      title: "Louvre Museum",
      location: "Paris, France",
      alt: "Former royal palace in Paris",
      description:
        "One of the world's largest museums, it is also the most visited museum of its kind globally.",
    },
    "paris-panteon": {
      title: "View of the Panthéon from Place du Panthéon",
      location: "Paris, France",
      alt: "The Panthéon from Place du Panthéon",
      description:
        "The Panthéon – a building in the Latin Quarter of Paris, erected in the late 18th century as a church dedicated to Saint Genevieve.",
    },
    "paris-snails": {
      title: "Famous French Snails (Escargots)",
      location: "Paris, France",
      alt: "Dish of snails",
      description:
        "It's hard to imagine French cuisine, especially along the Rhône, without a delicious snail on the plate.",
    },
    "frankfurt-hero": {
      // Key refers to Alte Oper based on description
      title: "Old Opera House (Alte Oper), Frankfurt",
      location: "Frankfurt am Main, Germany",
      alt: "Old Opera House (Alte Oper), Frankfurt",
      description:
        "Rising above a picturesque square adorned with an elegant fountain is the Old Opera House, boasting a Renaissance-style facade.",
    },
    "berlin-gate": {
      title: "Brandenburg Gate",
      location: "Berlin, Germany",
      alt: "Brandenburg Gate",
      description:
        "The Brandenburg Gate as a symbol of Peace and Freedom since October 3, 1990, the anniversary of German reunification.",
    },
    "berlin-museum": {
      title: "Altes Museum (Old Museum)",
      location: "Berlin, Germany",
      alt: "Altes Museum (Old Museum)",
      description:
        "The museum was built by order of the Prussian King Frederick William III to make the collections of ancient art accessible to the general public.",
    },
    "berlin-victory-column": {
      title: "Victory Column (Siegessäule)",
      location: "Berlin, Germany",
      alt: "Victory Column",
      description:
        "The column located in the Großer Tiergarten park in Berlin commemorates Prussia's victory over Denmark in the Danish War of 1864.",
    },
    "berlin-music": {
      title: "Beethoven-Haydn-Mozart Memorial",
      location: "Berlin, Germany",
      alt: "Memorial to the three musical geniuses",
      description:
        "An outdoor memorial to the classical composers Ludwig van Beethoven, Joseph Haydn, and Wolfgang Amadeus Mozart, dedicated in 1904.",
    },
    "prague-bridge": {
      title: "View of the Vltava River in Prague",
      location: "Prague, Czech Republic",
      alt: "Vltava River in Prague",
    },
    "prague-wit": {
      title: "St. Vitus Treasury",
      location: "Prague, Czech Republic",
      alt: "Treasury in Prague",
      description:
        "Artifacts in the Treasury of St. Vitus Cathedral at Prague Castle in Prague.",
    },
    "prague-dance": {
      title: "Dancing House",
      location: "Prague, Czech Republic",
      alt: "Ginger and Fred",
      description:
        "An avant-garde building designed by the architectural pair Vlado Milunić and Frank Gehry in the deconstructivist style.",
    },
    "prague-kafka": {
      title: "Rotating Head of Franz Kafka",
      location: "Prague, Czech Republic",
      alt: "Head of Franz Kafka",
      description:
        "David Černý designed this controversial piece of art for the 'Quadrio' shopping and office building on Národní třída street.",
    },
  },
  // About Section
  about: {
    title: "About EuroTrek",
    description1:
      "EuroTrek is a collective photo journal created by university students studying across Europe (originally focused on Poland). Our mission is to showcase the beauty, culture, and experiences of student travel through authentic photography.", // Adjusted slightly for broader context
    description2:
      "This platform serves as both inspiration for future student travelers and a memory book for those who have already embarked on their European adventures. All photos are captured by students, showing Europe through a fresh, youthful lens.",
    pageTitle: "About Our Journey",
    pageDescription1:
      "EuroTrek was born from a passion for travel photography and a desire to capture the unique experiences of student explorers in Europe's most vibrant cities.",
    pageDescription2:
      "What started as a small group sharing photos among classmates studying in Poland has grown into a platform connecting student photographers from diverse countries, backgrounds, and academic disciplines, all sharing a common love for discovery and visual storytelling.",
    pageDescription3:
      "Our contributors are students just like you, balancing their studies with adventures across the continent, capturing authentic moments along the way.",
    mission: {
      title: "Our Mission",
      description:
        "To inspire student travel through authentic visual storytelling and foster a supportive community for young photographers exploring Europe.",
    },
    team: {
      title: "The Student Collective",
      description:
        "Our team is composed entirely of student photographers, writers, and web developers from universities worldwide. Each contributor brings their unique perspective and experience to the platform.",
    },
    feature1: {
      title: "Student Photographers",
      description:
        "Photos captured by study abroad students from around the globe.",
    },
    feature2: {
      title: "Authentic Experiences",
      description: "Real travel moments beyond the typical tourist sights.",
    },
    feature3: {
      title: "Multiple Destinations",
      description:
        "A growing collection of photos from across the European continent.",
    },
    image1: {
      title: "Lisbon",
      description: "Jerónimos Monastery.",
    },
    image2: {
      title: "Germany & France",
      description: "An unforgettable journey through Germany and France.",
    },
    image3: {
      title: "Naples",
      description: "The extraordinary landscapes of Naples.",
    },
  },
  // Featured Section
  featured: {
    title: "Featured: Springtime in Paris",
    description1:
      "Paris in the spring is a dream for student photographers. The city comes alive with cherry blossoms, sidewalk cafes, and perfect light for capturing iconic landmarks.",
    description2:
      "Our featured collection showcases the magic of Paris through the eyes of students who spent their study abroad semester in the City of Light.", // Adjusted context slightly
    exploreLink: "Explore the Paris Collection",
    image1Alt: "Eiffel Tower in spring",
    image2Alt: "Seine River in Paris",
    image3Alt: "Parisian sidewalk cafe",
    image4Alt: "Louvre Museum",
  },
  // Contact Section
  contact: {
    title: "Contact",
    description:
      "Have questions or want to submit your own student travel photos? We'd love to hear from you!",
    pageTitle: "Get In Touch",
    getInTouch: "How Can We Help?",
    getInTouchDescription:
      "Whether you want to submit your travel photos, have questions about our platform, or just want to say hello, we're here to help.",
    email: {
      title: "Email Us",
      description: "For general inquiries and photo submissions",
    },
    location: {
      title: "Our Location",
      description: "Visit our student collective's hub",
      address: "University Creative Hub, European Campus, Amsterdam", // Kept as is, assuming it's a specific place name
    },
    phone: {
      title: "Call Us",
      description: "Available weekdays 10 AM - 6 PM CET",
    },
    form: {
      name: "Your Name",
      namePlaceholder: "Enter your name",
      nameError: "Name is required",
      email: "Your Email",
      emailPlaceholder: "Enter your email address",
      emailError: "Valid email is required",
      subject: "Subject",
      subjectPlaceholder: "What would you like to talk about?",
      subjectError: "Subject is required",
      message: "Message",
      messagePlaceholder: "Type your message here...",
      messageError: "Message must be at least 10 characters",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thanks for reaching out. We'll be in touch soon.",
    },
  },
  // Footer
  footer: {
    description:
      "A visual journey through Europe captured by the lens of students exploring the continent's finest corners.",
    quickLinks: "Quick Links",
    resources: "Resources",
    parisCollection: "Paris Collection",
    submitPhotos: "Submit Photos",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    accessibility: "Accessibility",
    copyright: "© {{year}} EuroTrek. All rights reserved.", // Added year placeholder
    tagline: "Crafted with ❤ by students, for students.",
    instagram: "Follow us on Instagram",
    twitter: "Follow us on Twitter",
    facebook: "Follow us on Facebook",
    pinterest: "Follow us on Pinterest",
  },
  // Slider Controls
  slider: {
    previous: "Previous slide",
    next: "Next slide",
    goToSlide: "Go to slide {{index}}",
  },
  // Lightbox
  lightbox: {
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
  },
  // Theme Toggle
  theme: {
    toggleLight: "Switch to light mode",
    toggleDark: "Switch to dark mode",
  },
  // Language
  language: {
    changeLanguage: "Change language",
  },
  // Home
  home: {
    heroAriaLabel: "Featured destinations",
  },
};
