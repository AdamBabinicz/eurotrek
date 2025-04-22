import { Description } from "@radix-ui/react-toast"; // Keeping the import as requested

export default {
  // Common
  common: {
    no_photos_data: "No photo data available.",
    // --- ADDED ---
    lastUpdated: "Last updated",
    placeholderContent:
      "The content for this section is currently being prepared. It will be updated soon.",
    // --- END ADDED ---
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
    exploreTitle: "Discover Destinations",
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
      location: "Naples, Italy", // Note: Location is Naples, key is rome-hero
      description:
        "Naples is a place where life unfolds to the rhythm of espresso, street conversations, and the scent of freshly baked pizza wafting through the warm Mediterranean air.",
    },
    "lisbon-hero": {
      location: "Lisbon, Portugal",
      description:
        "Lisbon is a city full of light, where cobbled streets wind between colorful houses, and life flows peacefully to the rhythm of fado and the aroma of fresh 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      location: "Frankfurt am Main, Germany",
      // Translated the Polish text provided, even though it's identical to Lisbon's
      description:
        "Lisbon is a city full of light, where cobbled streets wind between colorful houses, and life flows peacefully to the rhythm of fado and the aroma of fresh 'pasteis de nata'.",
    },
  },
  // Photos
  photos: {
    view: "View photo {{title}}",
    noPhotos: "There are no photos available for this destination yet.",
    "paris-sunset": {
      title: "Sunset in Paris",
      location: "Paris, France",
      alt: "Eiffel Tower at sunset in Paris",
    },
    "lisbon-tram": {
      title: "View of the D. Maria II National Theatre",
      location: "Lisbon, Portugal",
      description:
        "The historic theatre building is one of Portugal's most prestigious venues and is located on Rossio Square in the city center.",
    },
    "lisbon-belem": {
      title: "Old Town Rooftops",
      location: "Lisbon, Portugal",
      description:
        "The oldest district in Lisbon is Alfama, built on a slope above the Tagus during the Moorish rule. It's here that you can feel the atmosphere of medieval Lisbon.",
    },
    "lisbon-bele": {
      // Assuming 'bele' might be a typo for 'belem-tower', translated based on content
      title: "Belém Tower",
      location: "Lisbon, Portugal",
      description: "Medieval fortress overlooking the mouth of the Tagus River",
    },
    "boca do inferno": {
      title: "Mouth of Hell",
      location: "Cascais, Portugal",
      description:
        "A chasm located in the coastal cliffs near the Portuguese town of Cascais",
    },
    "capri-marina": {
      title: "Luigi ai Faraglioni Beach",
      location: "Capri, Italy",
      description:
        "Located in the Tyrrhenian Sea, it ranks 19th among the 118 beaches in the Neapolitan region.",
    },
    "paris-hero": {
      // Note: This key conflicts with heroSlides, but translating as is.
      title: "Versailles – Pearl of the Baroque",
      location: "Paris, France", // Technically near Paris, but keeping location as provided
      alt: "Palace of Versailles near Paris",
      description:
        "Versailles is a symbol of the French absolute monarchy and one of the most magnificent examples of Baroque architecture in the world.",
    },
    "naples-view": {
      title: "Road by the Tyrrhenian Sea",
      location: "Naples, Italy",
      alt: "Road at the foot of a mountain",
      description: "Picturesque route along the coast.",
    },
    "naples-mummy": {
      title: "Cast of a Vesuvius Victim",
      location: "Pompeii, Italy",
      alt: "Victims of the volcanic eruption",
      description:
        "The body casts were excavated in 1863 by archaeologist Giuseppe Fiorelli. 'To date, they have not been inventoried due to ethical reasons and the sensitivity always afforded to human remains.'",
    },
    "naples-stadion": {
      title: "Amphitheatre of Pompeii",
      location: "Pompeii, Italy",
      alt: "Part of the stadium in the ancient city of Pompeii",
      description:
        "The Amphitheatre of Pompeii is an ancient Roman amphitheatre located in Pompeii. It is the oldest surviving structure of its type.",
    },
    "naples-museum": {
      title: "The Small Pergamon Gift", // Direct translation, refers to specific sculptures
      location: "Naples, Italy",
      alt: "National Archaeological Museum in Naples",
      description:
        "A 2nd-century AD copy of a Greek original from the 2nd century BC.",
    },
    "capri-taras": {
      title: "Capri near Marina Piccola",
      location: "Capri, Italy",
      alt: "Terraces in Capri",
      description:
        "A charming rooftop terrace with cacti. Most building roofs in Capri are flat. And as seen above, terraces are established on some of these buildings.",
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
        "Luggage porters from the main hotels wait to take your luggage on a trolley, and you can take the funicular or ride in a convertible taxi, as there is no car traffic in Capri.",
    },
    "lisbon-hero": {
      // Note: This key conflicts with heroSlides, but translating as is.
      title: "Jerónimos Monastery",
      location: "Lisbon, Portugal",
      alt: "Jerónimos Monastery in Belém",
      description:
        "Built in the first half of the 16th century, it is considered the jewel and quintessence of the Manueline style, a specific Portuguese blend of Gothic and Renaissance.",
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
      title: "Famous French Snails",
      location: "Paris, France",
      alt: "Dish of snails",
      description:
        "It's hard to imagine cuisine on the Seine, and especially on the Rhône, without delicious snails on the plate.",
    },
    "frankfurt-hero": {
      // Note: This key conflicts with heroSlides, but translating as is.
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
      alt: "Altes Museum (Old Museum)",
      description:
        "The museum was built to make collections of ancient art accessible to the general public, commissioned by the Prussian King Frederick William III.",
    },
    "berlin-victory-column": {
      title: "Victory Column",
      location: "Berlin, Germany",
      alt: "Victory Column",
      description:
        "A column located in the Großer Tiergarten park in Berlin commemorating Prussia's victory over Denmark in the Second Schleswig War of 1864.",
    },
    "berlin-music": {
      title: "Beethoven–Haydn–Mozart Memorial",
      location: "Berlin, Germany",
      alt: "Memorial to the three musical geniuses",
      description:
        "An outdoor memorial to classical composers Ludwig van Beethoven, Joseph Haydn, and Wolfgang Amadeus Mozart, completed in 1904.",
    },
    "prague-bridge": {
      title: "View of the Vltava River in Prague",
      location: "Prague, Czech Republic",
      alt: "Vltava River in Prague",
      description:
        "All of Prague reflects itself in the Vltava and charms it, like a magic mirror.",
    },
    "prague-wit": {
      title: "Treasury of St. Vitus Cathedral",
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
        "An avant-garde building designed by the architectural duo Vlado Milunić and Frank Gehry in the deconstructivist style.",
    },
    "prague-kafka": {
      title: "Rotating Head of Franz Kafka",
      location: "Prague, Czech Republic",
      alt: "Head of Franz Kafka",
      description:
        "David Černý designed this controversial work of art for the 'Quadrio' shopping and office building on Národní třída street.",
    },
  },
  // About Section
  about: {
    title: "About EuroTrek",
    description1:
      "EuroTrek is a collective photo journal created by university students studying in Poland. Our mission is to showcase the beauty, culture, and experiences of student travel through authentic photography.",
    description2:
      "This platform serves as both inspiration for future student travelers and a memory book for those who have already embarked on their European adventures. All photos are taken by students, showing Europe through a fresh, youthful perspective.",
    pageTitle: "About Our Journey",
    pageDescription1:
      "EuroTrek was born from a passion for travel photography and a desire to capture the unique experiences of student explorers in Europe's most vibrant cities.",
    pageDescription2:
      "What started as a small group sharing photos among classmates studying in Poland has grown into a platform connecting student photographers from diverse countries, backgrounds, and academic disciplines who share a common love for exploration and visual storytelling.",
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
        "Our team consists entirely of student photographers, writers, and web developers from universities around the world. Each contributor brings their unique perspective and expertise to the platform.",
    },
    feature1: {
      title: "Student Photographers",
      description:
        "Photos captured by study abroad students from around the globe",
    },
    feature2: {
      title: "Authentic Experiences",
      description: "Real travel moments beyond the typical tourist spots",
    },
    feature3: {
      title: "Multiple Destinations",
      description:
        "A growing collection of images from across the European continent",
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
      description: "The stunning landscapes of Naples.",
    },
  },
  // Featured Section
  featured: {
    title: "Featured: Springtime in Paris",
    description1:
      "Paris in the spring is a dream for student photographers. The city comes alive with cherry blossoms, café terraces, and the perfect light for capturing iconic landmarks.",
    description2:
      "Our featured collection showcases the magic of Paris through the eyes of Polish students who spent their study abroad breaks in the City of Light.",
    exploreLink: "Explore the Paris Collection",
    image1Alt: "Eiffel Tower in spring",
    image2Alt: "Seine River in Paris",
    image3Alt: "Parisian cafe scene",
    image4Alt: "Louvre Museum",
  },
  // Contact Section
  contact: {
    title: "Contact",
    description:
      "Have questions or want to submit your own student travel photos? We'd love to hear from you!",
    pageTitle: "Get in Touch",
    getInTouch: "How Can We Help?",
    getInTouchDescription:
      "Whether you want to submit your travel photos, have questions about our platform, or just want to say hello, we're here to assist.",
    email: {
      title: "Email Us",
      description: "For general inquiries and photo submissions",
    },
    location: {
      title: "Our Location",
      description: "Visit our student collective office",
      address: "University Creative Hub, European Campus, Amsterdam", // Placeholder address
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
      emailError: "A valid email is required",
      subject: "Subject",
      subjectPlaceholder: "What would you like to talk about?",
      subjectError: "Subject is required",
      message: "Message",
      messagePlaceholder: "Type your message here...",
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
    previous: "Previous image",
    next: "Next image",
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

  // --- ADDED SECTIONS FOR NEW INFO PAGES (WITH GENERIC PLACEHOLDER CONTENT) ---
  privacyPolicy: {
    title: "Privacy Policy",
    metaDescription: "Read the privacy policy for the EuroTrek service.",
    introduction:
      "Welcome to the EuroTrek Privacy Policy. Your privacy is important to us, and we are committed to protecting your personal data in accordance with applicable regulations, including GDPR.",
    section1Title: "1. What information do we collect?",
    section1Content:
      "We collect information you provide directly to us (e.g., via the contact form: name, email address, message content) and data collected automatically when you use the service (e.g., IP address, browser type, device information, service activity data via cookies – see Cookie Policy).",
    section2Title: "2. How do we use your information?",
    section2Content:
      "We use your data to provide and improve our services, communicate with you (respond to inquiries), analyze website traffic, ensure the security of the service, and fulfill legal obligations.",
    contactTitle: "Privacy Contact",
    contactContent:
      "For matters concerning the processing of your personal data or exercising your rights, please contact us at: [puaro@vp.pl].", // Placeholder email kept
  },
  termsOfUse: {
    title: "Terms of Use",
    metaDescription: "Read the terms of use for the EuroTrek service.",
    introduction:
      "These Terms of Use govern your use of the EuroTrek website. By using the service, you accept the following provisions.",
    section1Title: "1. General rules and acceptance of terms",
    section1Content:
      "The EuroTrek service is a platform showcasing travel photography. Users are obliged to use the service in accordance with the law and good practices. Publishing unlawful, offensive content or content that violates third-party rights is prohibited.",
    contactTitle: "Terms of Use Contact",
    contactContent:
      "Questions regarding these Terms of Use should be directed to: [puaro@vp.pl].", // Placeholder email kept
  },
  accessibility: {
    title: "Accessibility Statement",
    metaDescription:
      "Learn about our commitment to digital accessibility at EuroTrek.",
    introduction:
      "EuroTrek strives to ensure digital accessibility for the widest possible range of users, including people with disabilities. We continuously work to improve the user interface and apply relevant accessibility standards, such as WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Our accessibility efforts",
    section1Content:
      "We aim to implement solutions such as: using semantic HTML code, ensuring keyboard navigation, providing adequate color contrast, alternative text for images, and testing the service with various assistive technologies.",
    contactTitle: "Feedback and Contact Information",
    contactContent:
      "If you encounter accessibility barriers on our service, please contact us. Your feedback is valuable to us. Contact us at: [puaro@vp.pl].", // Placeholder email kept
  },
  cookiePolicy: {
    title: "Cookie Policy",
    metaDescription: "Learn how EuroTrek uses cookies.",
    introduction:
      "Our service uses cookies to ensure the proper functioning of the site, improve your experience, and for analytical and marketing purposes (with your consent).",
    section1Title: "1. What are cookies?",
    section1Content:
      "Cookies are small text files saved on your device (computer, smartphone) when you visit websites. They allow the site to 'remember' your actions and preferences for a period of time.",
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
      "Cannot open cookie settings. Please contact support or try managing settings in your browser.",
    settingsInfoPlaceholder:
      "Clicking the button will open the cookie settings management panel.",
    contactTitle: "Cookie Policy Contact",
    contactContent:
      "If you have questions about our cookie policy, please contact us: [puaro@vp.pl].", // Placeholder email kept
  },
  faq: {
    title: "Frequently Asked Questions (FAQ)",
    metaDescription:
      "Find answers to the most common questions about EuroTrek.",
    q1: "Question 1: How can I submit my photos?",
    a1: "Currently, we collect photos from associated students. If you are interested in collaborating, please contact us via the contact form, briefly describing your travels and portfolio.",
    q2: "Question 2: Is using the service free?",
    a2: "Yes, browsing photos and content on the EuroTrek service is completely free for all users.",
    q3: "Question 3: Who owns the copyright to the photos?",
    a3: "Copyright for the photos belongs to the student authors. EuroTrek holds a license to publish them on the service. Details are specified in the agreement with the author and our Terms of Use.",
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
      "We're here to help! If you have questions about how the service works, encountered a technical issue, or have other concerns, please use the available support options.",
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
    phoneNumber: "Call us: [000 000 000]", // Placeholder phone number kept
    responseInfo:
      "We strive to respond to inquiries submitted via the contact form within 1-2 business days.",
  },
  // --- END OF MODIFIED SECTIONS ---
};
