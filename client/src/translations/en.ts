export default {
  // Common
  common: {
    no_photos_data: "No photo data available.",
    lastUpdated: "Last updated",
    placeholderContent:
      "[PLACEHOLDER] Content for this section is under preparation and will be available soon.",
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
      // Note: Key suggests Rome, but description is for Naples. Keeping content as is.
      location: "Naples, Italy",
      description:
        "Naples is a place where life moves to the rhythm of espresso, street conversations, and the smell of freshly baked pizza wafting through the warm Mediterranean air.",
    },
    "lisbon-hero": {
      location: "Lisbon, Portugal",
      description:
        "Lisbon is a city full of light, where cobblestone streets wind between colorful buildings, and life flows peacefully to the rhythm of fado and the aroma of fresh 'pasteis de nata'.",
    },
    "frankfurt-hero": {
      location: "Frankfurt am Main, Germany",
      // Note: Original PL description was wrong. Using placeholder.
      description: "[PLACEHOLDER] Description for Frankfurt hero slide.",
    },
  },
  // Photos
  photos: {
    view: "View photo {{title}}",
    noPhotos: "No photos available for this destination yet.",
    // --- TODO: Translate all photo titles, alts, and descriptions ---
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
    // ... translate other photo entries like lisbon-belem, lisbon-bele, boca do inferno etc. ...
    "prague-kafka": {
      title: "Rotating Head of Franz Kafka",
      location: "Prague, Czech Republic",
      alt: "Head of Franz Kafka",
      description:
        "David Černý designed this controversial artwork for the 'Quadrio' shopping and office building on Národní třída street.", // Corrected designer name based on common knowledge
    },
    // Add translations for all other photo entries here
  },
  // About Section
  about: {
    title: "About EuroTrek",
    description1:
      "EuroTrek is a collective photo journal created by university students studying in Poland. Our mission is to showcase the beauty, culture, and experiences of student travel through authentic photography.",
    description2:
      "This platform serves as both inspiration for future student travelers and a memory book for those who have already embarked on their European adventures. All photos are taken by students, showing Europe through a fresh, youthful perspective.",
    pageTitle: "About Our Journey", // Title for the /about page
    pageDescription1:
      "EuroTrek was born from a passion for travel photography and a desire to capture the unique experiences of student explorers in Europe's most vibrant cities.",
    pageDescription2:
      "What started as a small photo-sharing group among classmates studying in Poland has grown into a platform connecting student photographers from diverse countries, backgrounds, and academic disciplines, all sharing a common love for exploration and visual storytelling.",
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
        "Our team consists exclusively of student photographers, writers, and web developers from universities around the world. Each contributor brings their unique perspective and experience to the platform.",
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
        "A growing collection of photos from across the European continent",
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
      description: "The stunning landscapes of Naples.",
    },
  },
  // Featured Section
  featured: {
    title: "Featured: Spring in Paris",
    description1:
      "Paris in the springtime is a dream for student photographers. The city comes alive with cherry blossoms, sidewalk cafes, and the perfect light for capturing iconic landmarks.",
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
    title: "Contact", // Used on the homepage section
    description:
      "Have questions or want to submit your own student travel photos? We'd love to hear from you!",
    pageTitle: "Get In Touch", // Used on the /contact page
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
      address: "University Creative Hub, European Campus, Amsterdam", // Change to real address or remove
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
      messagePlaceholder: "Enter your message here...",
      messageError: "Message must be at least 10 characters",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thank you for reaching out. We'll be in touch soon.",
    },
  },
  // Footer
  footer: {
    description:
      "A visual journey through Europe captured through the lens of students discovering the continent's most beautiful corners.",
    quickLinks: "Quick Links",
    resources: "Resources",
    parisCollection: "Paris Collection",
    submitPhotos: "Submit Photos", // If you have this functionality
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    accessibility: "Accessibility",
    // --- ADDED FOOTER KEYS ---
    cookiePolicy: "Cookie Policy",
    cookieSettings: "Cookie Settings",
    faq: "FAQ",
    sitemap: "Sitemap",
    support: "Help / Support",
    // --- END ADDED FOOTER KEYS ---
    copyright: "All rights reserved.",
    tagline: "Made with ❤ by students, for students.",
    instagram: "Follow us on Instagram", // Used as aria-label
    twitter: "Follow us on Twitter", // Used as aria-label
    facebook: "Follow us on Facebook", // Used as aria-label
    linkedin: "Follow us on LinkedIn", // Used as aria-label
    messenger: "Contact us via Messenger", // Used as aria-label
    pinterest: "Follow us on Pinterest", // If you use Pinterest
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
  // --- ADDED SECTIONS FOR NEW INFO PAGES (WITH GENERAL CONTENT TRANSLATED) ---
  privacyPolicy: {
    title: "Privacy Policy",
    metaDescription: "Read the EuroTrek service privacy policy.",
    introduction:
      "Welcome to the EuroTrek Privacy Policy. Your privacy is important to us, and we make every effort to protect your personal data in accordance with applicable regulations, including GDPR.",
    section1Title: "1. What information do we collect?",
    section1Content:
      "We collect information that you provide directly to us (e.g., through the contact form: name, email address, message content) and data collected automatically when you use the service (e.g., IP address, browser type, device information, activity data via cookies – see Cookie Policy).",
    section2Title: "2. How do we use your information?",
    section2Content:
      "We use your data to provide and improve our services, communicate with you (respond to inquiries), analyze website traffic, ensure service security, and fulfill legal obligations.",
    // ADD SECTIONS HERE ON: Legal basis for processing, Data sharing, Data transfer outside EEA (if applicable), User rights (access, rectification, erasure, etc.), Data security, Data retention period.
    contactTitle: "Privacy Contact Information",
    contactContent:
      "For matters concerning the processing of your personal data or exercising your rights, please contact us at: [puaro@vp.pl].", // Use your actual privacy contact email
  },
  termsOfUse: {
    title: "Terms of Use",
    metaDescription: "Read the EuroTrek service terms of use.",
    introduction:
      "These Terms of Use govern the use of the EuroTrek website. By using the service, you accept the following provisions.",
    section1Title: "1. General Rules and Acceptance of Terms",
    section1Content:
      "The EuroTrek service is a platform presenting travel photography. Users are obliged to use the service in accordance with the law and good practice. Publishing illegal, offensive content or content violating third-party rights is prohibited.",
    // ADD SECTIONS HERE ON: Intellectual property rights (site content, photos), User responsibility, Service liability (disclaimers), Photo submission rules (if applicable), Changes to terms, Governing law and dispute resolution.
    contactTitle: "Contact Regarding Terms of Use",
    contactContent:
      "Questions regarding these Terms of Use should be directed to: [puaro@vp.pl].", // Use your actual contact email
  },
  accessibility: {
    title: "Accessibility Statement",
    metaDescription:
      "Learn about our commitment to digital accessibility at EuroTrek.",
    introduction:
      "EuroTrek strives to ensure digital accessibility for the widest possible range of users, including people with disabilities. We are constantly working to improve the user interface and apply relevant accessibility standards, such as WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Our Accessibility Efforts",
    section1Content:
      "We aim to implement solutions such as: using semantic HTML code, ensuring keyboard navigation, providing adequate color contrast, alternative text for images, and testing the service with various assistive technologies.",
    // ADD SECTIONS HERE ON: Conformance status (e.g., partially conformant with WCAG 2.1 AA), Non-accessible areas (if any, and why), Preparation of this statement (date, assessment method), Planned improvements.
    contactTitle: "Feedback and Contact Information",
    contactContent:
      "If you encounter accessibility barriers on our service, please contact us. Your feedback is valuable to us. Contact us at: [puaro@vp.pl].", // Use your actual accessibility contact email
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
      "Necessary cookies: Essential for the basic functioning of the service (e.g., user session). They do not require consent.",
    type2:
      "Analytical cookies: Help us understand how users interact with the site (e.g., Google Analytics). They require your consent.",
    type3:
      "Functional cookies: Allow remembering your choices and preferences (e.g., language). They may require consent.",
    type4:
      "Marketing cookies: Used to display personalized advertising (e.g., Facebook Pixel). They require your consent.",
    // ADD SECTIONS HERE ON: Detailed list of cookies used (name, provider, purpose, expiration), Third-party cookies (if used).
    section3Title: "3. Managing Cookies",
    section3Content:
      "You can manage your cookie consents at any time using the consent management tool available on our site (click the 'Cookie Settings' button). You can also change cookie settings in your web browser.",
    settingsError:
      "Could not open cookie settings. Please contact support or try managing settings in your browser.",
    settingsInfoPlaceholder:
      "Clicking the button will open the cookie settings management panel.",
    contactTitle: "Contact Regarding Cookie Policy",
    contactContent:
      "If you have questions about our cookie policy, please contact us: [puaro@vp.pl].", // Use your actual contact email
  },
  faq: {
    title: "Frequently Asked Questions (FAQ)",
    metaDescription: "Find answers to common questions about EuroTrek.",
    q1: "Question 1: How can I submit my photos?",
    a1: "We are currently collecting photos from affiliated students. If you are interested in collaborating, please contact us via the contact form, briefly describing your travels and portfolio.",
    q2: "Question 2: Is using the service free?",
    a2: "Yes, browsing photos and content on the EuroTrek service is completely free for all users.",
    q3: "Question 3: Who owns the copyright to the photos?",
    a3: "Copyright for the photos belongs to the student authors. EuroTrek holds a license to publish them on the service. Details are specified in the agreement with the author and our Terms of Use.",
    // Add more relevant Q&A for your service
    stillHaveQuestions: "Still have questions?",
    contactUs: "Contact Us",
  },
  sitemap: {
    title: "Sitemap",
    metaDescription: "Browse the structure of the EuroTrek website.",
    introduction:
      "Below is a list of the main sections and pages available on the EuroTrek service to help you navigate.",
  },
  support: {
    title: "Help & Support",
    metaDescription:
      "Need help? Find contact information and support for EuroTrek.",
    introduction:
      "We're here to help! If you have questions about how the service works, encountered a technical problem, or have other concerns, please use the available support options.",
    faqTitle: "Check the FAQ First",
    faqDescription:
      "Many answers to common questions can be found in our Frequently Asked Questions (FAQ) section.",
    goToFaq: "Go to FAQ",
    contactFormTitle: "Contact Form",
    contactFormDescription:
      "The best way to contact us for most matters is by sending a message through our contact form.",
    goToContact: "Go to Contact",
    phoneTitle: "Phone Support", // If you offer it
    phoneDescription:
      "For urgent technical issues, you can contact us by phone during [e.g., 10:00 AM - 4:00 PM] Monday to Friday.",
    phoneNumber: "Call Us: [000 000 000]", // Insert number or remove phone section
    responseInfo:
      "We strive to respond to inquiries submitted via the contact form within 1-2 business days.",
  },
  // --- END OF ADDED SECTIONS ---
};
