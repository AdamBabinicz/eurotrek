import { Description } from "@radix-ui/react-toast"; // Kept as requested, though unused

export default {
  // Common
  common: {
    no_photos_data: "No photo data available.",
    lastUpdated: "Last updated",
    placeholderContent:
      "The content of this section is under preparation. It will be updated soon.",
  },

  routes: {
    home: "",
    destinations: "travels", // Example route
    about: "about-us", // Example route
    contact: "contact", // Example route
    destinationDetail: "travel", // Example route
    faq: "faq", // Example route
    privacy: "privacy-policy", // Example route
    terms: "terms-of-use", // Example route
    sitemap: "sitemap", // Example route
    accessibility: "accessibility", // Example route
    cookiePolicy: "cookie-policy", // Example route
    support: "support", // Example route
  },

  // Navbar
  navbar: {
    home: "Home",
    destinations: "Travels",
    about: "About Us",
    contact: "Contact",
  },
  // Destinations
  destinations: {
    exploreTitle: "Discover Travels",
    exploreDescription:
      "Browse our collection of student travel photos from the most beautiful cities in Europe.",
    allDestinations: "All Travels",
    lisbon: "Lisbon",
    paris: "Paris",
    berlin: "Berlin",
    capri: "Capri",
    naples: "Naples",
    prague: "Prague",
    loadMore: "Load More",
    ariaLabel: "Travel categories",
    noMorePhotos: "There are no more photos to load for this category.",
  },
  destinationsData: {
    lisbon: { name: "Lisbon", country: "Portugal" },
    paris: { name: "Paris", country: "France" },
    berlin: { name: "Berlin", country: "Germany" },
    capri: { name: "Capri", country: "Italy" },
    naples: { name: "Naples", country: "Italy" },
    prague: { name: "Prague", country: "Czech Republic" },
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      location: "Paris, France",
      description:
        "The city of lights through a student's lens - capturing the charm of Parisian architecture and culture.",
    },
    "rome-hero": {
      // Note: pl.ts has Naples here, not Rome. Translating the Naples context.
      location: "Naples, Italy",
      description:
        "Naples is a place where life flows to the rhythm of espresso, street conversations, and the smell of freshly baked pizza wafting through the warm Mediterranean air.",
    },
    "lisbon-hero": {
      location: "Lisbon, Portugal",
      description:
        "Lisbon is a city full of light, where cobblestone streets wind between colorful houses, and life flows peacefully to the rhythm of fado and the aroma of fresh 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      location: "Frankfurt am Main, Germany",
      description:
        // Note: pl.ts copied the Lisbon description here. Translating that text.
        "Lisbon is a city full of light, where cobblestone streets wind between colorful houses, and life flows peacefully to the rhythm of fado and the aroma of fresh 'pasteis de nata'.",
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
      title: "View of the D. Maria II National Theatre",
      location: "Lisbon, Portugal",
      description:
        "The historic theatre building is one of Portugal's most prestigious venues and is located in Rossio Square in the city center.",
    },
    "lisbon-belem": {
      title: "Roofs of the Old Town",
      location: "Lisbon, Portugal",
      description:
        "The oldest district of Lisbon is Alfama, built on the hillside above the Tagus during the Moorish rule. It is here that you can feel the atmosphere of medieval Lisbon.",
    },
    "lisbon-bele": {
      title: "Belém Tower",
      location: "Lisbon, Portugal",
      description:
        "Medieval fortress overlooking the mouth of the Tagus River.", // Slightly rephrased for flow
    },
    "boca do inferno": {
      title: "Mouth of Hell",
      location: "Cascais, Portugal",
      description:
        "A chasm located in the coastal cliffs near the Portuguese town of Cascais.",
    },
    "capri-marina": {
      title: "Luigi ai Faraglioni Beach", // Assuming common name
      location: "Capri, Italy",
      description:
        "Located in the Tyrrhenian Sea, it ranks 19th among the 118 beaches of the Neapolitan region.",
    },
    "paris-hero": {
      // Note: Potential ID conflict with heroSlides
      title: "Versailles – Pearl of the Baroque",
      location: "Paris, France", // Should this be Versailles?
      alt: "Palace of Versailles near Paris",
      description:
        "Versailles is a symbol of the French absolute monarchy and one of the most magnificent examples of Baroque architecture in the world.",
    },
    "naples-view": {
      title: "Road by the Tyrrhenian Sea",
      location: "Naples, Italy",
      alt: "Road at the foot of the mountain",
      description: "Picturesque route along the coast.",
    },
    "naples-mummy": {
      title: "Cast of a Vesuvius victim",
      location: "Pompeii, Italy",
      alt: "Victims of the volcano eruption",
      description:
        "The body casts were excavated in 1863 by archaeologist Giuseppe Fiorelli. 'To date, they have not been inventoried for ethical reasons and due to the sentiments with which human remains have always been treated.'",
    },
    "naples-stadion": {
      title: "Amphitheatre in Pompeii",
      location: "Pompeii, Italy",
      alt: "Part of the stadium in the ancient city of Pompeii",
      description:
        "The Amphitheatre of Pompeii – an ancient Roman amphitheater located in Pompeii. It is the oldest surviving structure of its kind.",
    },
    "naples-museum": {
      title: "Small Pergamene gift", // Common term for the statue group
      location: "Naples, Italy",
      alt: "National Archaeological Museum in Naples",
      description:
        "Copy from the 2nd century AD of a Greek original from the 2nd century BC.",
    },
    "capri-taras": {
      title: "Capri near Marina Piccola",
      location: "Capri, Italy",
      alt: "Terraces on Capri",
      description:
        "A charming rooftop terrace with cacti. Most roofs of buildings on Capri are flat. And as seen above, terraces are established on some of these buildings.",
    },
    "capri-street": {
      title: "Shopping street in Capri",
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
        "Luggage porters from the main hotels wait to take luggage on a trolley, and you can take the funicular or a convertible taxi, as there is no car traffic on Capri.",
    },
    "lisbon-hero": {
      // Note: Potential ID conflict with heroSlides
      title: "Jerónimos Monastery",
      location: "Lisbon, Portugal",
      alt: "Jerónimos Monastery in Belém",
      description:
        "Built in the first half of the 16th century, it is considered the pearl and quintessence of the Manueline style, a specific Portuguese combination of Gothic and Renaissance.",
    },
    "paris-eiffel": {
      title: "Eiffel Tower",
      location: "Paris, France",
      alt: "Evening illumination of the Eiffel Tower in Paris",
      description:
        "The most famous architectural landmark of Paris, recognized as a symbol of the city and sometimes of all of France.",
    },
    "paris-louvre": {
      title: "Louvre Museum",
      location: "Paris, France",
      alt: "Former royal palace in Paris",
      description:
        "One of the largest museums in the world, it is also the most visited museum of its kind globally.",
    },
    "paris-panteon": {
      title: "View of the Panthéon from Place du Panthéon",
      location: "Paris, France",
      alt: "Panthéon from Place du Panthéon",
      description:
        "The Panthéon – a building in the Latin Quarter of Paris, erected in the late 18th century as a church dedicated to Saint Genevieve.",
    },
    "paris-snails": {
      title: "Famous French snails",
      location: "Paris, France",
      alt: "Dish of snails",
      description:
        "It's hard to imagine cuisine on the Seine, and especially on the Rhône, without a delicious snail on the plate.",
    },
    "paris-1": {
      alt: "View of the National Library in spring",
      title: "National Library of France, Richelieu site, Oval Room",
      location: "Paris, France",
    },
    "paris-2": {
      alt: "Versailles, Temple of Love",
      title: "Versailles, Temple of Love",
      location: "Versailles, France",
    },
    "paris-3": {
      alt: "French garden",
      title: "Magnificent historical gardens",
      location: "Paris, France",
    },
    "paris-4": {
      alt: "Dancing Faun",
      title: "Roman mythical god of the forest and enchanted groves",
      location: "Paris, France",
    },
    "frankfurt-hero": {
      // Note: Potential ID conflict with heroSlides
      title: "Old Opera House (Alte Oper), Frankfurt",
      location: "Frankfurt am Main, Germany",
      alt: "Old Opera House (Alte Oper), Frankfurt",
      description:
        "Rising above a picturesque square adorned with an elegant fountain stands the Opera House, featuring a Renaissance-style facade.",
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
      alt: "Altes Museum",
      description:
        "The museum was built with the aim of making the collections of ancient art accessible to the general public, by order of the Prussian King Frederick William III.",
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
        "Outdoor memorial to the classical composers: Ludwig van Beethoven, Joseph Haydn, and Wolfgang Amadeus Mozart, erected in 1904.",
    },
    "prague-bridge": {
      title: "View of the Vltava River in Prague",
      location: "Prague, Czech Republic",
      alt: "Vltava River in Prague",
      description:
        "All of Prague reflects itself in the Vltava and graces it, as if to a magic mirror.",
    },
    "prague-wit": {
      title: "St. Vitus Treasury",
      location: "Prague, Czech Republic",
      alt: "Treasury in Prague",
      description:
        "Artifacts in the Treasury of St. Vitus Cathedral at Prague Castle.",
    },
    "prague-dance": {
      title: "Dancing House",
      location: "Prague, Czech Republic",
      alt: "Ginger and Fred",
      description:
        "An avant-garde building designed by the architect couple Vlado Milunić and Frank Gehry in the deconstructivist style.",
    },
    "prague-kafka": {
      title: "Rotating Head of Franz Kafka",
      location: "Prague, Czech Republic",
      alt: "Head of Franz Kafka",
      description:
        "David Černý designed this controversial work of art for the 'Quadrio' shopping and office building on Národní třída.",
    },
  },
  // About Section
  about: {
    title: "About EuroTrek",
    description1:
      "EuroTrek is a collective photographic journal created by university students studying in Poland. Our mission is to showcase the beauty, culture, and experiences of student travel through authentic photography.",
    description2:
      "This platform serves as both an inspiration for future student travelers and a memory book for those who have already begun their European adventures. All photos are taken by students, showing Europe through a fresh, youthful perspective.",
    pageTitle: "About Our Journey",
    pageDescription1:
      "EuroTrek was born from a passion for travel photography and a desire to capture the unique experiences of student explorers in Europe's most vibrant cities.",
    pageDescription2:
      "What started as a small group sharing photos among classmates studying in Poland has grown into a platform connecting student photographers from diverse countries, backgrounds, and academic disciplines who share a common love for exploration and visual storytelling.",
    pageDescription3:
      "Our contributors are students like you, balancing their studies with adventures across the continent, capturing authentic moments along the way.",
    mission: {
      title: "Our Mission",
      description:
        "To inspire student travel through authentic visual storytelling and foster a supportive community for young photographers exploring Europe.",
    },
    team: {
      title: "Student Collective",
      description:
        "Our team consists entirely of student photographers, writers, and web developers from universities around the world. Each contributor brings their unique perspective and experience to the platform.",
    },
    feature1: {
      title: "Student Photographers",
      description:
        "Photos taken by international students from around the world",
    },
    feature2: {
      title: "Authentic Experiences",
      description: "Real travel moments beyond the typical tourist attractions",
    },
    feature3: {
      title: "Many Travels",
      description:
        "A growing collection of photos from across the European continent",
    },
    image1: {
      title: "Lisbon",
      description: "Jerónimos Monastery.",
    },
    image2: {
      title: "Germany and France",
      description: "An unforgettable journey through Germany and France.",
    },
    image3: {
      title: "Naples",
      description: "Extraordinary landscapes of Naples.",
    },
  },
  // Featured Section
  featured: {
    title: "Featured: Spring in Paris",
    description1:
      "Paris in spring is a dream for student photographers. The city comes alive with cherry blossoms, café terraces, and perfect light for capturing iconic landmarks.",
    description2:
      "Our featured collection showcases the charm of Paris through the eyes of Polish students who spent their study abroad holidays in the City of Light.",
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
      description: "Visit our student collective office",
      address: "University Creative Hub, European Campus, Amsterdam", // Translate or keep address?
    },
    phone: {
      title: "Call Us",
      description: "Available on weekdays from 10:00 AM to 6:00 PM CET",
    },
    form: {
      name: "Your Name",
      namePlaceholder: "Enter your name",
      nameError: "Name is required",
      email: "Your Email",
      emailPlaceholder: "Enter your email",
      emailError: "A valid email is required",
      subject: "Subject",
      subjectPlaceholder: "What would you like to talk about?",
      subjectError: "Subject is required",
      message: "Message",
      messagePlaceholder: "Enter your message here...",
      messageError: "Message must be at least 10 characters",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage:
        "Thank you for contacting us. We'll get back to you soon.",
    },
  },
  // Footer
  footer: {
    description:
      "A visual journey through Europe captured through the lens of students exploring the continent's most beautiful corners.",
    quickLinks: "Quick Links",
    resources: "Resources",
    parisCollection: "Paris Collection",
    submitPhotos: "Submit Photos",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    accessibility: "Accessibility",
    cookiePolicy: "Cookie Policy",
    cookieSettings: "Cookie Settings",
    faq: "Frequently Asked Questions (FAQ)",
    sitemap: "Sitemap",
    support: "Help & Support",
    copyright: "All rights reserved.",
    tagline: "Created with ❤ by students, for students.",
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

  // --- Sections for new info pages ---
  privacyPolicy: {
    title: "Privacy Policy",
    metaDescription: "Read the privacy policy of the EuroTrek service.",
    introduction:
      "Welcome to the EuroTrek Privacy Policy. Your privacy is important to us, and we strive to protect your personal data in accordance with applicable regulations, including GDPR.",
    section1Title: "1. What information do we collect?",
    section1Content:
      "We collect information that you provide directly to us (e.g., through the contact form: name, email address, message content) and data collected automatically when using the service (e.g., IP address, browser type, device information, data about activity on the service using cookies – see Cookie Policy).",
    section2Title: "2. How do we use your information?",
    section2Content:
      "We use your data to provide and improve our services, communicate with you (respond to inquiries), analyze site traffic, ensure service security, and fulfill legal obligations.",
    contactTitle: "Contact regarding privacy",
    contactContent:
      "For matters concerning the processing of your personal data or exercising your rights, please contact us at: [puaro@vp.pl].", // Update email address
  },
  termsOfUse: {
    title: "Terms of Use",
    metaDescription: "Read the terms of use of the EuroTrek service.",
    introduction:
      "These Terms of Use govern the rules for using the EuroTrek online service. By using the service, you accept the following provisions.",
    section1Title: "1. General rules and acceptance of terms",
    section1Content:
      "The EuroTrek service is a platform presenting travel photography. Users are obliged to use the service in accordance with the law and good practice. Publishing unlawful, offensive, or third-party rights infringing content is prohibited.",
    contactTitle: "Contact regarding Terms of Use",
    contactContent:
      "Questions regarding these Terms of Use should be directed to: [puaro@vp.pl].", // Update email address
  },
  accessibility: {
    title: "Accessibility Statement",
    metaDescription:
      "Learn about our commitment to digital accessibility at EuroTrek.",
    introduction:
      "EuroTrek strives to ensure digital accessibility of the service for the widest possible range of users, including people with disabilities. We are constantly working to improve the interface and apply relevant accessibility standards, such as WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Our actions for accessibility",
    section1Content:
      "We strive to implement solutions such as: using semantic HTML code, ensuring keyboard navigation, adequate color contrast, alternative text for images, and testing the service using various assistive technologies.",
    contactTitle: "Feedback and contact details",
    contactContent:
      "If you encounter accessibility barriers on our service, please contact us. Your feedback is valuable to us. Contact us at: [puaro@vp.pl].", // Update email address
  },
  cookiePolicy: {
    title: "Cookie Policy",
    metaDescription: "Learn how EuroTrek uses cookies.",
    introduction:
      "Our service uses cookies to ensure the proper functioning of the site, improve your experience, and for analytical and marketing purposes (with your consent).",
    section1Title: "1. What are cookies?",
    section1Content:
      "Cookies are small text files saved on your device (computer, smartphone) when visiting websites. They allow the site to 'remember' your actions and preferences for a period of time.",
    section2Title: "2. What types of cookies do we use?",
    section2Content: "We use different types of cookies, including:",
    type1:
      "Necessary cookies: Essential for the basic functioning of the service (e.g., user session). Do not require consent.",
    type2:
      "Analytical cookies: Help us understand how users use the site (e.g., Google Analytics). Require your consent.",
    type3:
      "Functional cookies: Allow remembering your choices and preferences (e.g., language). May require consent.",
    type4:
      "Marketing cookies: Used to display personalized advertising (e.g., Facebook Pixel). Require your consent.",
    section3Title: "3. Managing cookies",
    section3Content:
      "You can manage your cookie consents at any time using the consent management tool available on our site (click the 'Cookie Settings' button). You can also change cookie settings in your web browser.",
    settingsError:
      "Cannot open cookie settings. Contact technical support or try managing settings in your browser.",
    settingsInfoPlaceholder:
      "Clicking the button will open the cookie settings management panel.",
    contactTitle: "Contact regarding Cookie Policy",
    contactContent:
      "If you have questions about our cookie policy, please contact us: [puaro@vp.pl].", // Update email address
  },
  faq: {
    title: "Frequently Asked Questions (FAQ)",
    metaDescription:
      "Find answers to the most common questions about EuroTrek.",
    q1: "Question 1: How can I submit my photos?",
    a1: "We currently collect photos from associated students. If you are interested in collaboration, please contact us via the contact form, briefly describing your travels and portfolio.",
    q2: "Question 2: Is using the service paid?",
    a2: "No, browsing photos and content on the EuroTrek service is completely free for all users.",
    q3: "Question 3: Who owns the copyright to the photos?",
    a3: "The copyright to the photos belongs to the student authors. EuroTrek holds a license for their publication on the service. Details are specified in the agreement with the author and our Terms of Use.",
    stillHaveQuestions: "Still have questions?",
    contactUs: "Contact us",
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
      "Need help? Find contact information and support for EuroTrek.",
    introduction:
      "We are here to help! If you have questions about the service's operation, encountered a technical problem, or have other concerns, please use the available support options.",
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
      "For urgent technical matters, you can contact us by phone during [e.g., 10:00 AM - 4:00 PM] Monday to Friday.", // Update hours
    phoneNumber: "Call: [000 000 000]", // Update phone number
    responseInfo:
      "We strive to respond to inquiries sent via the contact form within 1-2 business days.",
  },
};
