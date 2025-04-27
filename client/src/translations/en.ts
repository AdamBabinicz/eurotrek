export default {
  // Common
  common: {
    no_photos_data: "No photo data.",
    lastUpdated: "Last Updated",
    placeholderContent:
      "The content for this section is currently being prepared. It will be updated soon.",
    no_alt_text: "Image", // Default alt text
    no_title: "Untitled", // Default title
    no_location: "Unknown location", // Default location
    photo_not_found: "Could not load image", // When src is wrong or image doesn't exist
  },

  routes: {
    // English URL slugs
    home: "",
    destinations: "travels", // Keep consistent or use English term
    about: "about-us",
    contact: "contact",
    destinationDetail: "travel", // Keep consistent or use English term
    faq: "faq",
    privacy: "privacy-policy",
    terms: "terms-of-use",
    sitemap: "sitemap",
    accessibility: "accessibility",
    cookiePolicy: "cookie-policy",
    support: "support",
  },

  // Navbar
  navbar: {
    home: "Home",
    destinations: "Travels",
    about: "About Us",
    contact: "Contact",
    mainNavLabel: "Main navigation",
    goToHome: "Go to homepage",
    toggleMenu: "Open/Close menu",
    mobileMenuTitle: "Menu",
  },
  // Destinations List Page
  destinationsListPage: {
    title: "Our Travels",
    metaDescription: "Discover all the amazing places we feature at EuroTrek.",
    header: "Discover Our Travels",
  },
  // Destinations general terms
  destinations: {
    exploreTitle: "Explore Travels",
    exploreDescription:
      "Browse our collection of student travel photos from Europe's most beautiful cities.",
    lisbon: "Lisbon",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Naples",
    prague: "Prague",
    loadMore: "Load More",
    ariaLabel: "Travel categories",
    noMorePhotos: "No more photos to load for this category",
  },
  // Specific destination data
  destinationsData: {
    lisbon: { name: "Lisbon", country: "Portugal" },
    paris: { name: "Paris", country: "France" },
    berlin: { name: "Berlin", country: "Germany" },
    capri: { name: "Capri", country: "Italy" },
    naples: {
      name: "Naples",
      country: "Italy",
      description:
        "Naples, a vibrant city in southern Italy, situated on the Bay of Naples. It's famous for its rich history, art, culture, architecture, music, and gastronomy.",
    },
    prague: { name: "Prague", country: "Czech Republic" },
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      title: "Versailles - Pearl of the Baroque",
      alt: "Palace of Versailles near Paris",
      location: "Versailles, France",
      description:
        "The city of lights through a student's lens - capturing the magic of Parisian architecture and culture.",
    },
    "rome-hero": {
      title: "Road above the Tyrrhenian Sea",
      alt: "View of the coast and Vesuvius in Naples",
      location: "Naples, Italy",
      description:
        "Naples is a place where life flows to the rhythm of espresso, street conversations, and the scent of freshly baked pizza wafting through the warm Mediterranean air.",
    },
    "lisbon-hero": {
      title: "Jerónimos Monastery",
      alt: "Jerónimos Monastery in Belém, Lisbon",
      location: "Lisbon, Portugal",
      description:
        "Lisbon is a city full of light, where cobblestone streets wind between colorful houses, and life flows peacefully to the rhythm of fado and the aroma of fresh 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      title: "Old Opera House (Alte Oper)",
      alt: "Old Opera House building in Frankfurt",
      location: "Frankfurt am Main, Germany",
      description:
        "Discover Frankfurt am Main, where the gleaming skyscrapers of the banking district create an extraordinary contrast with the historic Opernplatz (Opera Square).",
    },
  },
  // Photos
  photos: {
    view: "View photo {{title}}",
    noPhotos: "There are no photos available for this trip yet.",
    "paris-sunset": {
      title: "Sunset in Paris",
      location: "Paris, France",
      alt: "Eiffel Tower at sunset in Paris",
    },
    "lisbon-tram": {
      title: "View of the National Theatre D. Maria II",
      location: "Lisbon, Portugal",
      description:
        "The historic theater building is one of Portugal's most prestigious halls and is located in Rossio Square in the city center.",
      alt: "Yellow historic tram in Rossio Square, Lisbon",
    },
    "lisbon-belem": {
      title: "Roofs of the Old Town",
      location: "Lisbon, Portugal",
      description:
        "The oldest district of Lisbon is Alfama, built on the slope above the Tagus River during the Moorish rule. It is here that you can feel the atmosphere of medieval Lisbon.",
      alt: "View of the red roofs of Alfama in Lisbon",
    },
    "lisbon-bele": {
      title: "Belém Tower",
      location: "Lisbon, Portugal",
      description: "Medieval fortress overlooking the mouth of the Tagus River",
      alt: "Belém Tower by the Tagus River in Lisbon",
    },
    "boca do inferno": {
      title: "Mouth of Hell",
      location: "Cascais, Portugal",
      description:
        "A chasm located in the seaside cliffs near the Portuguese town of Cascais",
      alt: "Mouth of Hell rock formation in Cascais",
    },
    "capri-marina": {
      title: "Luigia Beach at Faraglioni",
      location: "Capri, Italy",
      description:
        "Situated in the Tyrrhenian Sea, it ranks 19th among the 118 beaches of the Neapolitan region.",
      alt: "Luigia Beach and Faraglioni rock formations on Capri",
    },
    "paris-hero": {
      title: "Versailles – Pearl of the Baroque",
      location: "Versailles, France",
      alt: "Palace of Versailles and gardens",
      description:
        "Versailles is the symbol of French absolute monarchy and one of the most magnificent examples of Baroque architecture in the world.",
    },
    "naples-view": {
      title: "Road above the Tyrrhenian Sea",
      location: "Naples, Italy",
      alt: "Road at the foot of Mount Vesuvius",
      description: "Picturesque route along the coast.",
    },
    "naples-mummy": {
      title: "Cast of a Vesuvius victim",
      location: "Pompeii, Italy",
      alt: "Plaster cast of a victim's body from the Vesuvius eruption",
      description:
        "The body casts were excavated in 1863 by archaeologist Giuseppe Fiorelli. 'To date, they have not been inventoried for ethical reasons and the sentiments with which human remains have always been treated.'",
    },
    "naples-stadion": {
      title: "Amphitheatre in Pompeii",
      location: "Pompeii, Italy",
      alt: "Ruins of the amphitheatre in the ancient city of Pompeii",
      description:
        "The Amphitheatre of Pompeii – an ancient Roman amphitheatre located in Pompeii. It is the oldest surviving structure of its kind.",
    },
    "naples-museum": {
      title: "Small Pergamene gift", // Or "Dying Gaul"
      location: "Naples, Italy",
      alt: "'Dying Gaul' sculpture in the National Archaeological Museum of Naples",
      description:
        "A 2nd-century AD copy of a Greek original from the 2nd century BC.",
    },
    "capri-taras": {
      title: "Capri near Marina Piccola",
      location: "Capri, Italy",
      alt: "Viewing terrace with cacti on Capri",
      description:
        "A charming rooftop terrace with cacti. Most building roofs on Capri are flat. And as seen above, terraces are established on some of these buildings.",
    },
    "capri-street": {
      title: "Shopping street in Capri",
      location: "Capri, Italy",
      alt: "Narrow shopping street with shops in Capri",
      description:
        "Capri is characterized by charming shopping streets that start from the Piazzetta and lead through Via Camerelle and Via Le Botteghe.",
    },
    "capri-port": {
      title: "Port in Marina Grande",
      location: "Capri, Italy",
      alt: "Boats and yachts docked in the Marina Grande port on Capri",
      description:
        "Luggage porters from the main hotels wait to take luggage on a trolley, and you can take the funicular or a convertible taxi, as there is no car traffic on Capri.",
    },
    "lisbon-hero": {
      title: "Jerónimos Monastery",
      location: "Lisbon, Portugal",
      alt: "Façade of the Jerónimos Monastery in Belém",
      description:
        "Built in the first half of the 16th century, it is considered the pearl and quintessence of the Manueline style, a specific Portuguese blend of Gothic and Renaissance.",
    },
    "paris-eiffel": {
      title: "Eiffel Tower",
      location: "Paris, France",
      alt: "Evening illumination of the Eiffel Tower against the sky",
      description:
        "The most famous architectural landmark of Paris, considered a symbol of the city and sometimes of all France.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "Paris, France",
      alt: "Glass pyramid in front of the Louvre Palace in Paris",
      description:
        "One of the world's largest museums, it is also the most visited institution of its kind in the world.",
    },
    "paris-panteon": {
      title: "View of the Pantheon from Place du Pantheon",
      location: "Paris, France",
      alt: "Façade of the Pantheon in Paris viewed from the square",
      description:
        "Pantheon – a building in the Latin Quarter of Paris, erected at the end of the 18th century as a church dedicated to Saint Genevieve.",
    },
    "paris-snails": {
      title: "Famous French snails",
      location: "Paris, France",
      alt: "Plate of prepared Burgundy snails",
      description:
        "It's hard to imagine cuisine on the Seine, and especially on the Rhône, without a delicious snail on the plate.",
    },
    "paris-1": {
      title: "National Library of France, Richelieu site, Oval Room",
      location: "Paris, France",
      alt: "Interior of the Oval Room at the National Library of France",
    },
    "paris-2": {
      title: "Versailles, Temple of Love",
      location: "Versailles, France",
      alt: "Temple of Love in the gardens of Versailles",
    },
    "paris-3": {
      title: "Magnificent historic gardens", // Can be more specific, e.g., Tuileries Garden
      location: "Paris, France",
      alt: "Walking path in a French garden in Paris",
    },
    "paris-4": {
      title: "Dancing Faun", // Better than the description
      location: "Paris, France",
      alt: "Sculpture of the Dancing Faun",
    },
    "frankfurt-hero": {
      title: "Old Opera House (Alte Oper), Frankfurt",
      location: "Frankfurt am Main, Germany",
      alt: "Old Opera House building in Frankfurt at night",
      description:
        "Rising above a picturesque square adorned with an elegant fountain is the Opera House, featuring a Renaissance-style façade.",
    },
    "berlin-gate": {
      title: "Brandenburg Gate",
      location: "Berlin, Germany",
      alt: "Brandenburg Gate at night",
      description:
        "The Brandenburg Gate as a symbol of Peace and Freedom since October 3, 1990, the anniversary of German reunification.",
    },
    "berlin-museum": {
      title: "Old Museum",
      location: "Berlin, Germany",
      alt: "Colonnade in front of the Old Museum in Berlin",
      description:
        "The museum was built to make the collections of ancient art accessible to the general public, commissioned by the Prussian King Frederick William III.",
    },
    "berlin-victory-column": {
      title: "Victory Column",
      location: "Berlin, Germany",
      alt: "Golden statue atop the Victory Column in Berlin",
      description:
        "The column located in the Großer Tiergarten park in Berlin commemorates Prussia's victory over Denmark in the Danish War of 1864.",
    },
    "berlin-music": {
      title: "Beethoven–Haydn–Mozart Memorial",
      location: "Berlin, Germany",
      alt: "Memorial to the three composers in Tiergarten park",
      description:
        "An outdoor memorial to the classical composers Ludwig van Beethoven, Joseph Haydn, and Wolfgang Amadeus Mozart, dating from 1904.",
    },
    "prague-bridge": {
      title: "View of the Vltava River in Prague",
      location: "Prague, Czech Republic",
      alt: "Charles Bridge over the Vltava River in Prague at dusk",
      description:
        "All of Prague reflects in the Vltava and flirts with it as if it were a magic mirror.",
    },
    "prague-wit": {
      title: "St. Vitus Treasury",
      location: "Prague, Czech Republic",
      alt: "Reliquary in the St. Vitus Treasury",
      description:
        "Artifacts in the Treasury of St. Vitus Cathedral at Prague Castle.",
    },
    "prague-dance": {
      title: "Dancing House",
      location: "Prague, Czech Republic",
      alt: "Modern Dancing House building in Prague",
      description:
        "An avant-garde building designed by the architect couple Vlado Milunić and Frank Gehry in the deconstructivist style.",
    },
    "prague-kafka": {
      title: "Rotating Head of Franz Kafka",
      location: "Prague, Czech Republic",
      alt: "Kinetic sculpture Head of Franz Kafka in Prague",
      description:
        "David Černý designed this controversial artwork for the 'Quadrio' shopping and office building on Národní třída street.",
    },
  },
  // About Section
  about: {
    title: "About EuroTrek",
    description1:
      "EuroTrek is a collective photo journal created by university students studying in Poland. Our mission is to showcase the beauty, culture, and experiences of student travel through authentic photography.",
    description2:
      "This platform serves as both inspiration for future student travelers and a memory book for those who have already begun their European adventures. All photos are taken by students, showing Europe through a fresh, youthful perspective.",
    pageTitle: "About Our Journey",
    pageDescription1:
      "EuroTrek was born from a passion for travel photography and a desire to capture the unique experiences of student explorers in Europe's most vibrant cities.",
    pageDescription2:
      "What started as a small photo-sharing group among classmates studying in Poland grew into a platform connecting student photographers from diverse countries, backgrounds, and academic disciplines who share a common love for exploration and visual storytelling.",
    pageDescription3:
      "Our contributors are students just like you, balancing their studies with adventures across the continent, capturing authentic moments along the way.",
    mission: {
      title: "Our Mission",
      description:
        "To inspire student travel through authentic visual storytelling and foster a supportive community for young photographers exploring Europe.",
    },
    team: {
      title: "Student Collective",
      description:
        "Our team is composed entirely of student photographers, writers, and web developers from universities worldwide. Each contributor brings their unique perspective and expertise to the platform.",
    },
    feature1: {
      title: "Student Photographers",
      description:
        "Photos taken by international students from around the globe",
    },
    feature2: {
      title: "Authentic Experiences",
      description: "Real travel moments beyond the typical tourist spots",
    },
    feature3: {
      title: "Many Travels",
      description:
        "A growing collection of photos from across the European continent",
    },
    image1: { title: "Lisbon", description: "Jerónimos Monastery." },
    image2: {
      title: "Germany & France",
      description: "An unforgettable trip through Germany and France.",
    },
    image3: {
      title: "Naples",
      description: "Extraordinary landscapes of Naples.",
    },
  },
  // Featured Section
  featured: {
    title: "Featured: Springtime in Paris",
    description1:
      "Paris in the spring is a dream for student photographers. The city comes alive with cherry blossoms, café terraces, and the perfect light for capturing iconic landmarks.",
    description2:
      "Our featured collection showcases the magic of Paris through the eyes of Polish students who spent their study abroad holidays in the City of Light.",
    exploreLink: "Explore the Paris Collection",
    image1Alt: "Eiffel Tower in spring",
    image2Alt: "Seine River in Paris",
    image3Alt: "Parisian cafe",
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
      description: "Visit our student collective office (by appointment)",
      address: "University of Gdansk, ul. Bażyńskiego 8, 80-309 Gdansk",
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
      emailPlaceholder: "Enter your email",
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
    cookiePolicy: "Cookie Policy",
    cookieSettings: "Cookie Settings",
    faq: "FAQ",
    sitemap: "Sitemap",
    support: "Help & Support",
    copyright: "All rights reserved.",
    tagline: "Made with ❤ by students, for students.",
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
    close: "Close viewer",
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

  // --- SECTIONS FOR INFO PAGES ---
  privacyPolicy: {
    title: "Privacy Policy",
    metaDescription: "Read the privacy policy for the EuroTrek service.",
    introduction:
      "Welcome to the EuroTrek Privacy Policy. Your privacy is important to us, and we are committed to protecting your personal data in accordance with applicable laws, including GDPR.",
    section1Title: "1. What information do we collect?",
    section1Content:
      "We collect information that you provide directly to us (e.g., via the contact form: name, email address, message content) and data collected automatically when you use the service (e.g., IP address, browser type, device information, service activity data via cookies – see Cookie Policy).",
    section2Title: "2. How do we use your information?",
    section2Content:
      "We use your data to provide and improve our services, communicate with you (respond to inquiries), analyze website traffic, ensure service security, and fulfill legal obligations.",
    contactTitle: "Privacy Contact",
    contactContent:
      "For matters regarding the processing of your personal data or exercising your rights, please contact us at: puaro@vp.pl",
  },
  termsOfUse: {
    title: "Terms of Use",
    metaDescription: "Read the terms of use for the EuroTrek service.",
    introduction:
      "These Terms of Use govern the use of the EuroTrek website. By using the service, you accept the following provisions.",
    section1Title: "1. General Rules and Acceptance of Terms",
    section1Content:
      "The EuroTrek service is a platform showcasing travel photography. Users are obliged to use the service in accordance with the law and good practices. Publishing content that is unlawful, offensive, or violates the rights of third parties is prohibited.",
    contactTitle: "Terms of Use Contact",
    contactContent:
      "Questions regarding these Terms of Use should be directed to: puaro@vp.pl",
  },
  accessibility: {
    title: "Accessibility Statement",
    metaDescription:
      "Learn about our commitment to digital accessibility at EuroTrek.",
    introduction:
      "EuroTrek strives to ensure digital accessibility for the widest possible audience, including people with disabilities. We are continually working to improve the user interface and apply relevant accessibility standards, such as the Web Content Accessibility Guidelines (WCAG).",
    section1Title: "1. Our Accessibility Efforts",
    section1Content:
      "We aim to implement solutions such as: using semantic HTML code, ensuring keyboard navigation, providing adequate color contrast, alternative text for images, and testing the service with various assistive technologies.",
    contactTitle: "Feedback and Contact Information",
    contactContent:
      "If you encounter accessibility barriers on our service, please contact us. Your feedback is valuable to us. Contact us at: puaro@vp.pl",
  },
  cookiePolicy: {
    title: "Cookie Policy",
    metaDescription: "Learn how EuroTrek uses cookies.",
    introduction:
      "Our service uses cookies to ensure the proper functioning of the site, improve your experience, and for analytical and marketing purposes (with your consent).",
    section1Title: "1. What are cookies?",
    section1Content:
      "Cookies are small text files stored on your device (computer, smartphone) when you visit websites. They allow the site to 'remember' your actions and preferences for a period of time.",
    section2Title: "2. What types of cookies do we use?",
    section2Content: "We use various types of cookies, including:",
    type1:
      "Essential cookies: Necessary for the basic functioning of the service (e.g., user session). They do not require consent.",
    type2:
      "Analytical cookies: Help us understand how users interact with the site (e.g., Google Analytics). They require your consent.",
    type3:
      "Functional cookies: Allow remembering your choices and preferences (e.g., language). May require consent.",
    type4:
      "Marketing cookies: Used to display personalized advertising (e.g., Facebook Pixel). They require your consent.",
    section3Title: "3. Managing Cookies",
    section3Content:
      "You can manage your cookie consents at any time using the consent management tool available on our site (click the 'Cookie Settings' button). You can also change cookie settings in your web browser.",
    settingsError:
      "Could not open cookie settings. Contact technical support or try managing settings in your browser.",
    settingsInfoPlaceholder:
      "Clicking the button will open the cookie settings management panel.",
    contactTitle: "Cookie Policy Contact",
    contactContent:
      "If you have questions about our cookie policy, please contact us: puaro@vp.pl",
  },
  faq: {
    title: "Frequently Asked Questions (FAQ)",
    metaDescription:
      "Find answers to the most common questions about EuroTrek.",
    q1: "Question 1: How can I submit my photos?",
    a1: "Currently, we collect photos from affiliated students. If you are interested in collaborating, please contact us via the contact form, briefly describing your travels and portfolio.",
    q2: "Question 2: Is using the service free?",
    a2: "Yes, browsing photos and content on the EuroTrek service is completely free for all users.",
    q3: "Question 3: Who owns the copyright to the photos?",
    a3: "The copyright for the photos belongs to the student authors. EuroTrek holds a license to publish them on the service. Details are specified in the agreement with the author and our Terms of Use.",
    stillHaveQuestions: "Still have questions?",
    contactUs: "Contact Us",
  },
  sitemap: {
    title: "Sitemap",
    metaDescription: "Browse the structure of the EuroTrek site.",
    introduction:
      "Below is a list of the main sections and pages available on the EuroTrek service to help you navigate.",
  },
  support: {
    title: "Help & Support",
    metaDescription:
      "Need assistance? Find contact information and support for EuroTrek.",
    introduction:
      "We are here to help! If you have questions about how the service works, encountered a technical problem, or have other concerns, please use the available support options.",
    faqTitle: "Check the FAQ First",
    faqDescription:
      "Many answers to common questions can be found in our Frequently Asked Questions (FAQ) section.",
    goToFaq: "Go to FAQ",
    contactFormTitle: "Contact Form",
    contactFormDescription:
      "The best way to contact us for most matters is by sending a message through our contact form.",
    goToContact: "Go to Contact",
    phoneTitle: "Phone Support",
    phoneDescription:
      "For urgent technical matters, you can contact us by phone during [e.g., 10:00 AM - 4:00 PM] Monday to Friday.",
    phoneNumber: "Call: +1 000-000-0000", // Example number
    responseInfo:
      "We strive to respond to inquiries sent via the contact form within 1-2 business days.",
  },
};
