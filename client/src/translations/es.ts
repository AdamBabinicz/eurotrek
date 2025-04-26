import { Description } from "@radix-ui/react-toast"; // Mantenido según solicitud, aunque no se use

export default {
  // Common - Común
  common: {
    no_photos_data: "No hay datos de fotos.",
    lastUpdated: "Última actualización",
    placeholderContent:
      "El contenido de esta sección está en preparación. Se actualizará pronto.",
  },

  routes: {
    home: "",
    destinations: "viajes", // Ruta de ejemplo
    about: "sobre-nosotros", // Ruta de ejemplo
    contact: "contacto", // Ruta de ejemplo
    destinationDetail: "viaje", // Ruta de ejemplo
    faq: "faq", // Ruta de ejemplo
    privacy: "politica-privacidad", // Ruta de ejemplo
    terms: "terminos-uso", // Ruta de ejemplo
    sitemap: "mapa-sitio", // Ruta de ejemplo
    accessibility: "accesibilidad", // Ruta de ejemplo
    cookiePolicy: "politica-cookies", // Ruta de ejemplo
    support: "soporte", // Ruta de ejemplo
  },

  // Navbar - Barra de navegación
  navbar: {
    home: "Inicio",
    destinations: "Viajes",
    about: "Sobre nosotros",
    contact: "Contacto",
  },
  // Destinations - Destinos
  destinations: {
    exploreTitle: "Descubre Viajes",
    exploreDescription:
      "Explora nuestra colección de fotos de viajes de estudiantes por las ciudades más bellas de Europa.",
    allDestinations: "Todos los Viajes",
    lisbon: "Lisboa",
    paris: "París",
    berlin: "Berlín",
    capri: "Capri",
    naples: "Nápoles",
    prague: "Praga",
    loadMore: "Cargar más",
    ariaLabel: "Categorías de viajes",
    noMorePhotos: "No hay más fotos para cargar en esta categoría.",
  },
  destinationsData: {
    lisbon: { name: "Lisboa", country: "Portugal" },
    paris: { name: "París", country: "Francia" },
    berlin: { name: "Berlín", country: "Alemania" },
    capri: { name: "Capri", country: "Italia" },
    naples: { name: "Nápoles", country: "Italia" },
    prague: { name: "Praga", country: "República Checa" },
  },
  // Hero Slides - Diapositivas principales
  heroSlides: {
    "paris-hero": {
      location: "París, Francia",
      description:
        "La ciudad de las luces a través de la lente de un estudiante: capturando el encanto de la arquitectura y la cultura parisina.",
    },
    "rome-hero": {
      // Nota: pl.ts tiene Nápoles aquí, no Roma. Traduciendo el contexto de Nápoles.
      location: "Nápoles, Italia",
      description:
        "Nápoles es un lugar donde la vida fluye al ritmo del espresso, las conversaciones en la calle y el olor a pizza recién horneada que flota en el cálido aire mediterráneo.",
    },
    "lisbon-hero": {
      location: "Lisboa, Portugal",
      description:
        "Lisboa es una ciudad llena de luz, donde las calles adoquinadas serpentean entre casas de colores y la vida transcurre tranquilamente al ritmo del fado y el aroma de los 'pasteis de nata' frescos.",
    },
    "frankfurt-hero": {
      location: "Fráncfort del Meno, Alemania",
      description:
        // Nota: pl.ts copió la descripción de Lisboa aquí. Traduciendo ese texto.
        "Lisboa es una ciudad llena de luz, donde las calles adoquinadas serpentean entre casas de colores y la vida transcurre tranquilamente al ritmo del fado y el aroma de los 'pasteis de nata' frescos.",
    },
  },
  // Photos - Fotos
  photos: {
    view: "Ver foto {{title}}",
    noPhotos: "Aún no hay fotos disponibles para este viaje.",
    "paris-sunset": {
      title: "Atardecer en París",
      location: "París, Francia",
      alt: "Torre Eiffel al atardecer en París",
    },
    "lisbon-tram": {
      title: "Vista del Teatro Nacional D. Maria II",
      location: "Lisboa, Portugal",
      description:
        "El histórico edificio del teatro es una de las salas más prestigiosas de Portugal y se encuentra en la Plaza de Rossio, en el centro de la ciudad.",
    },
    "lisbon-belem": {
      title: "Tejados del Casco Antiguo",
      location: "Lisboa, Portugal",
      description:
        "El barrio más antiguo de Lisboa es Alfama, construido en la ladera sobre el Tajo durante la dominación musulmana. Es aquí donde se puede sentir el ambiente de la Lisboa medieval.",
    },
    "lisbon-bele": {
      title: "Torre de Belém",
      location: "Lisboa, Portugal",
      description:
        "Fortaleza medieval con vistas a la desembocadura del río Tajo.",
    },
    "boca do inferno": {
      title: "Boca del Infierno",
      location: "Cascais, Portugal",
      description:
        "Un abismo situado en los acantilados costeros cerca de la ciudad portuguesa de Cascais.",
    },
    "capri-marina": {
      title: "Playa Luigia en los Farallones", // Asumiendo nombre común
      location: "Capri, Italia",
      description:
        "Situada en el Mar Tirreno, ocupa el puesto 19 entre las 118 playas de la región napolitana.",
    },
    "paris-hero": {
      // Nota: Posible conflicto de ID con heroSlides
      title: "Versalles – Perla del Barroco",
      location: "París, Francia", // ¿Debería ser Versalles?
      alt: "Palacio de Versalles cerca de París",
      description:
        "Versalles es un símbolo de la monarquía absoluta francesa y uno de los ejemplos más magníficos de la arquitectura barroca en el mundo.",
    },
    "naples-view": {
      title: "Carretera sobre el Mar Tirreno",
      location: "Nápoles, Italia",
      alt: "Carretera al pie de la montaña",
      description: "Ruta pintoresca a lo largo de la costa.",
    },
    "naples-mummy": {
      title: "Molde de una víctima del Vesubio",
      location: "Pompeya, Italia",
      alt: "Víctimas de la erupción del volcán",
      description:
        "Los moldes de los cuerpos fueron excavados en 1863 por el arqueólogo Giuseppe Fiorelli. 'Hasta la fecha, no han sido inventariados por razones éticas y por los sentimientos con los que siempre se han tratado los restos humanos'.",
    },
    "naples-stadion": {
      title: "Anfiteatro de Pompeya",
      location: "Pompeya, Italia",
      alt: "Parte del estadio en la antigua ciudad de Pompeya",
      description:
        "El Anfiteatro de Pompeya – un antiguo anfiteatro romano, situado en Pompeya. Es la estructura conservada más antigua de este tipo.",
    },
    "naples-museum": {
      title: "Pequeño donario pergameno", // Término común para el grupo escultórico
      location: "Nápoles, Italia",
      alt: "Museo Arqueológico Nacional de Nápoles",
      description:
        "Copia del siglo II d.C. de un original griego del siglo II a.C.",
    },
    "capri-taras": {
      title: "Capri cerca de Marina Piccola",
      location: "Capri, Italia",
      alt: "Terrazas en Capri",
      description:
        "Una encantadora terraza en la azotea con cactus. La mayoría de los tejados de los edificios en Capri son planos. Y como se ve arriba, se establecen terrazas en algunos de estos edificios.",
    },
    "capri-street": {
      title: "Calle comercial en Capri",
      location: "Capri, Italia",
      alt: "Tiendas en Capri",
      description:
        "Capri se caracteriza por encantadoras calles comerciales que comienzan en la Piazzetta y conducen a través de Via Camerelle y Via Le Botteghe.",
    },
    "capri-port": {
      title: "Puerto en Marina Grande",
      location: "Capri, Italia",
      alt: "Yates amarrados",
      description:
        "Los porteadores de equipaje de los principales hoteles esperan para llevar el equipaje en un carrito, y puedes tomar el funicular o un taxi descapotable, ya que no hay tráfico de coches en Capri.",
    },
    "lisbon-hero": {
      // Nota: Posible conflicto de ID con heroSlides
      title: "Monasterio de los Jerónimos",
      location: "Lisboa, Portugal",
      alt: "Monasterio de los Jerónimos en Belém",
      description:
        "Construido en la primera mitad del siglo XVI, es considerado la perla y quintaesencia del estilo manuelino, una combinación específica portuguesa de gótico y renacimiento.",
    },
    "paris-eiffel": {
      title: "Torre Eiffel",
      location: "París, Francia",
      alt: "Iluminación nocturna de la Torre Eiffel en París",
      description:
        "El monumento arquitectónico más famoso de París, reconocido como símbolo de esta ciudad y, a veces, de toda Francia.",
    },
    "paris-louvre": {
      title: "Museo del Louvre",
      location: "París, Francia",
      alt: "Antiguo palacio real en París",
      description:
        "Uno de los museos más grandes del mundo, es también la institución de este tipo más visitada del mundo.",
    },
    "paris-panteon": {
      title: "Vista del Panteón desde la Place du Panthéon",
      location: "París, Francia",
      alt: "Panteón desde la Place du Panthéon",
      description:
        "El Panteón – un edificio en el Barrio Latino de París, erigido a finales del siglo XVIII como iglesia dedicada a Santa Genoveva.",
    },
    "paris-snails": {
      title: "Famosos caracoles franceses",
      location: "París, Francia",
      alt: "Plato de caracoles",
      description:
        "Es difícil imaginar la cocina del Sena, y especialmente del Ródano, sin un delicioso caracol en el plato.",
    },
    "paris-1": {
      alt: "Vista de la Biblioteca Nacional en primavera",
      title: "Biblioteca Nacional de Francia, sede Richelieu, Sala Oval",
      location: "París, Francia",
    },
    "paris-2": {
      alt: "Versalles, Templo del amor",
      title: "Versalles, Templo del amor",
      location: "Versalles, Francia",
    },
    "paris-3": {
      alt: "Jardín francés",
      title: "Magníficos jardines históricos",
      location: "París, Francia",
    },
    "paris-4": {
      alt: "Fauno danzante",
      title: "Dios mítico romano del bosque y las arboledas encantadas",
      location: "París, Francia",
    },
    "frankfurt-hero": {
      // Nota: Posible conflicto de ID con heroSlides
      title: "Alte Oper (Ópera Antigua), Fráncfort",
      location: "Fráncfort del Meno, Alemania",
      alt: "Alte Oper (Ópera Antigua), Fráncfort",
      description:
        "Elevándose sobre una pintoresca plaza adornada con una elegante fuente se encuentra la Ópera, con una fachada de estilo renacentista.",
    },
    "berlin-gate": {
      title: "Puerta de Brandeburgo",
      location: "Berlín, Alemania",
      alt: "Puerta de Brandeburgo",
      description:
        "La Puerta de Brandeburgo como símbolo de Paz y Libertad desde el 3 de octubre de 1990, aniversario de la reunificación alemana.",
    },
    "berlin-museum": {
      title: "Altes Museum (Museo Antiguo)",
      location: "Berlín, Alemania",
      alt: "Altes Museum",
      description:
        "El museo fue construido con el objetivo de hacer accesibles las colecciones de arte antiguo al público en general, por orden del rey prusiano Federico Guillermo III.",
    },
    "berlin-victory-column": {
      title: "Columna de la Victoria (Siegessäule)",
      location: "Berlín, Alemania",
      alt: "Columna de la Victoria",
      description:
        "La columna situada en el parque Großer Tiergarten de Berlín conmemora la victoria de Prusia sobre Dinamarca en la Guerra de los Ducados de 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven, Haydn y Mozart",
      location: "Berlín, Alemania",
      alt: "Monumento a los tres genios musicales",
      description:
        "Monumento al aire libre a los compositores clásicos: Ludwig van Beethoven, Joseph Haydn y Wolfgang Amadeus Mozart, erigido en 1904.",
    },
    "prague-bridge": {
      title: "Vista del río Moldava en Praga",
      location: "Praga, República Checa",
      alt: "Río Moldava en Praga",
      description:
        "Toda Praga se refleja en el Moldava y se engalana para él, como ante un espejo mágico.",
    },
    "prague-wit": {
      title: "Tesoro de San Vito",
      location: "Praga, República Checa",
      alt: "Tesoro en Praga",
      description:
        "Artefactos en el Tesoro de la Catedral de San Vito en el Castillo de Praga.",
    },
    "prague-dance": {
      title: "Casa Danzante",
      location: "Praga, República Checa",
      alt: "Ginger y Fred",
      description:
        "Edificio vanguardista diseñado por la pareja de arquitectos Vlado Milunić y Frank Gehry en estilo deconstructivista.",
    },
    "prague-kafka": {
      title: "Cabeza giratoria de Franz Kafka",
      location: "Praga, República Checa",
      alt: "Cabeza de Franz Kafka",
      description:
        "David Černý diseñó esta controvertida obra de arte para el edificio comercial y de oficinas 'Quadrio' en la calle Národní třída.",
    },
  },
  // About Section - Sobre nosotros
  about: {
    title: "Sobre EuroTrek",
    description1:
      "EuroTrek es un diario fotográfico colectivo creado por estudiantes universitarios que estudian en Polonia. Nuestra misión es mostrar la belleza, la cultura y las experiencias de los viajes de estudiantes a través de la fotografía auténtica.",
    description2:
      "Esta plataforma sirve tanto de inspiración para futuros estudiantes viajeros como de libro de recuerdos para aquellos que ya han comenzado sus aventuras europeas. Todas las fotos son tomadas por estudiantes, mostrando Europa desde una perspectiva fresca y juvenil.",
    pageTitle: "Sobre Nuestro Viaje",
    pageDescription1:
      "EuroTrek nació de la pasión por la fotografía de viajes y el deseo de capturar las experiencias únicas de los estudiantes exploradores en las ciudades más vibrantes de Europa.",
    pageDescription2:
      "Lo que comenzó como un pequeño grupo que compartía fotos entre compañeros de clase que estudiaban en Polonia se ha convertido en una plataforma que conecta a estudiantes fotógrafos de diversos países, orígenes y disciplinas académicas que comparten un amor común por la exploración y la narración visual.",
    pageDescription3:
      "Nuestros colaboradores son estudiantes como tú, que equilibran sus estudios con aventuras por todo el continente, capturando momentos auténticos en el camino.",
    mission: {
      title: "Nuestra Misión",
      description:
        "Inspirar los viajes de estudiantes a través de la narración visual auténtica y fomentar una comunidad de apoyo para jóvenes fotógrafos que exploran Europa.",
    },
    team: {
      title: "Colectivo Estudiantil",
      description:
        "Nuestro equipo está formado íntegramente por estudiantes fotógrafos, escritores y desarrolladores web de universidades de todo el mundo. Cada colaborador aporta su perspectiva y experiencia únicas a la plataforma.",
    },
    feature1: {
      title: "Estudiantes Fotógrafos",
      description:
        "Fotos tomadas por estudiantes internacionales de todo el mundo",
    },
    feature2: {
      title: "Experiencias Auténticas",
      description:
        "Momentos reales de viaje más allá de las típicas atracciones turísticas",
    },
    feature3: {
      title: "Muchos Viajes",
      description:
        "Una colección creciente de fotos de todo el continente europeo",
    },
    image1: {
      title: "Lisboa",
      description: "Monasterio de los Jerónimos.",
    },
    image2: {
      title: "Alemania y Francia",
      description: "Un viaje inolvidable por Alemania y Francia.",
    },
    image3: {
      title: "Nápoles",
      description: "Paisajes extraordinarios de Nápoles.",
    },
  },
  // Featured Section - Sección destacada
  featured: {
    title: "Destacado: Primavera en París",
    description1:
      "París en primavera es un sueño para los estudiantes fotógrafos. La ciudad cobra vida con cerezos en flor, terrazas de cafés y la luz perfecta para capturar monumentos icónicos.",
    description2:
      "Nuestra colección destacada muestra el encanto de París a través de los ojos de estudiantes polacos que pasaron sus vacaciones de estudios en el extranjero en la Ciudad de la Luz.",
    exploreLink: "Explora la Colección de París",
    image1Alt: "Torre Eiffel en primavera",
    image2Alt: "Río Sena en París",
    image3Alt: "Café parisino",
    image4Alt: "Museo del Louvre",
  },
  // Contact Section - Sección de contacto
  contact: {
    title: "Contacto",
    description:
      "¿Tienes preguntas o quieres enviar tus propias fotos de viajes de estudiantes? ¡Nos encantaría saber de ti!",
    pageTitle: "Ponte en Contacto",
    getInTouch: "¿Cómo Podemos Ayudarte?",
    getInTouchDescription:
      "Ya sea que quieras enviar tus fotos de viaje, tengas preguntas sobre nuestra plataforma o simplemente quieras saludar, estamos aquí para ayudarte.",
    email: {
      title: "Envíanos un Email",
      description: "Para consultas generales y envío de fotos",
    },
    location: {
      title: "Nuestra Ubicación",
      description: "Visita la oficina de nuestro colectivo estudiantil",
      address: "University Creative Hub, European Campus, Amsterdam", // ¿Traducir o mantener la dirección?
    },
    phone: {
      title: "Llámanos",
      description: "Disponibles los días laborables de 10:00 a 18:00 CET",
    },
    form: {
      name: "Tu Nombre",
      namePlaceholder: "Ingresa tu nombre",
      nameError: "El nombre es obligatorio",
      email: "Tu Email",
      emailPlaceholder: "Ingresa tu email",
      emailError: "Se requiere un email válido",
      subject: "Asunto",
      subjectPlaceholder: "¿De qué te gustaría hablar?",
      subjectError: "El asunto es obligatorio",
      message: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      messageError: "El mensaje debe tener al menos 10 caracteres",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje Enviado!",
      successMessage:
        "Gracias por contactarnos. Nos pondremos en contacto pronto.",
    },
  },
  // Footer - Pie de página
  footer: {
    description:
      "Un viaje visual por Europa capturado a través de la lente de estudiantes que exploran los rincones más bellos del continente.",
    quickLinks: "Enlaces Rápidos",
    resources: "Recursos",
    parisCollection: "Colección de París",
    submitPhotos: "Enviar Fotos",
    privacyPolicy: "Política de Privacidad",
    termsOfUse: "Términos de Uso",
    accessibility: "Accesibilidad",
    cookiePolicy: "Política de Cookies",
    cookieSettings: "Configuración de Cookies",
    faq: "Preguntas Frecuentes (FAQ)",
    sitemap: "Mapa del Sitio",
    support: "Ayuda y Soporte",
    copyright: "Todos los derechos reservados.",
    tagline: "Creado con ❤ por estudiantes, para estudiantes.",
    instagram: "Síguenos en Instagram",
    twitter: "Síguenos en Twitter",
    facebook: "Síguenos en Facebook",
    pinterest: "Síguenos en Pinterest",
  },
  // Slider Controls - Controles del deslizador
  slider: {
    previous: "Diapositiva anterior",
    next: "Diapositiva siguiente",
    goToSlide: "Ir a la diapositiva {{index}}",
  },
  // Lightbox - Visor de fotos
  lightbox: {
    close: "Cerrar visor",
    previous: "Foto anterior",
    next: "Foto siguiente",
  },
  // Theme Toggle - Cambiador de tema
  theme: {
    toggleLight: "Cambiar a modo claro",
    toggleDark: "Cambiar a modo oscuro",
  },
  // Language - Idioma
  language: {
    changeLanguage: "Cambiar idioma",
  },
  // Home - Inicio
  home: {
    heroAriaLabel: "Destinos destacados",
  },

  // --- Secciones para nuevas páginas de información ---
  privacyPolicy: {
    title: "Política de Privacidad",
    metaDescription: "Lee la política de privacidad del servicio EuroTrek.",
    introduction:
      "Bienvenido a la Política de Privacidad de EuroTrek. Tu privacidad es importante para nosotros y nos esforzamos por proteger tus datos personales de acuerdo con las regulaciones aplicables, incluido el RGPD.",
    section1Title: "1. ¿Qué información recopilamos?",
    section1Content:
      "Recopilamos información que nos proporcionas directamente (p. ej., a través del formulario de contacto: nombre, dirección de correo electrónico, contenido del mensaje) y datos recopilados automáticamente al usar el servicio (p. ej., dirección IP, tipo de navegador, información del dispositivo, datos sobre la actividad en el servicio mediante cookies – ver Política de Cookies).",
    section2Title: "2. ¿Cómo utilizamos tu información?",
    section2Content:
      "Utilizamos tus datos para proporcionar y mejorar nuestros servicios, comunicarnos contigo (responder a consultas), analizar el tráfico del sitio, garantizar la seguridad del servicio y cumplir con las obligaciones legales.",
    contactTitle: "Contacto sobre privacidad",
    contactContent:
      "Para asuntos relacionados con el tratamiento de tus datos personales o el ejercicio de tus derechos, contáctanos en: [puaro@vp.pl].", // Actualizar dirección de correo electrónico
  },
  termsOfUse: {
    title: "Términos de Uso",
    metaDescription: "Lee los términos de uso del servicio EuroTrek.",
    introduction:
      "Estos Términos de Uso rigen las reglas para usar el servicio en línea EuroTrek. Al usar el servicio, aceptas las siguientes disposiciones.",
    section1Title: "1. Reglas generales y aceptación de los términos",
    section1Content:
      "El servicio EuroTrek es una plataforma que presenta fotografía de viajes. Los usuarios están obligados a utilizar el servicio de acuerdo con la ley y las buenas costumbres. Está prohibido publicar contenido ilegal, ofensivo o que infrinja los derechos de terceros.",
    contactTitle: "Contacto sobre los Términos de Uso",
    contactContent:
      "Las preguntas sobre estos Términos de Uso deben dirigirse a: [puaro@vp.pl].", // Actualizar dirección de correo electrónico
  },
  accessibility: {
    title: "Declaración de Accesibilidad",
    metaDescription:
      "Conoce nuestro compromiso con la accesibilidad digital en EuroTrek.",
    introduction:
      "EuroTrek se esfuerza por garantizar la accesibilidad digital del servicio para la gama más amplia posible de usuarios, incluidas las personas con discapacidad. Trabajamos constantemente para mejorar la interfaz y aplicar los estándares de accesibilidad relevantes, como las WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Nuestras acciones para la accesibilidad",
    section1Content:
      "Nos esforzamos por implementar soluciones como: el uso de código HTML semántico, garantizar la navegación por teclado, contraste de color adecuado, texto alternativo para imágenes y probar el servicio utilizando diversas tecnologías de asistencia.",
    contactTitle: "Comentarios y datos de contacto",
    contactContent:
      "Si encuentras barreras de accesibilidad en nuestro servicio, por favor contáctanos. Tus comentarios son valiosos para nosotros. Contáctanos en: [puaro@vp.pl].", // Actualizar dirección de correo electrónico
  },
  cookiePolicy: {
    title: "Política de Cookies",
    metaDescription: "Descubre cómo EuroTrek utiliza las cookies.",
    introduction:
      "Nuestro servicio utiliza cookies para garantizar el correcto funcionamiento del sitio, mejorar tu experiencia y con fines analíticos y de marketing (con tu consentimiento).",
    section1Title: "1. ¿Qué son las cookies?",
    section1Content:
      "Las cookies son pequeños archivos de texto que se guardan en tu dispositivo (ordenador, smartphone) al visitar sitios web. Permiten que el sitio 'recuerde' tus acciones y preferencias durante un período de tiempo.",
    section2Title: "2. ¿Qué tipos de cookies utilizamos?",
    section2Content: "Utilizamos diferentes tipos de cookies, incluyendo:",
    type1:
      "Cookies necesarias: Esenciales para el funcionamiento básico del servicio (p. ej., sesión de usuario). No requieren consentimiento.",
    type2:
      "Cookies analíticas: Nos ayudan a comprender cómo los usuarios utilizan el sitio (p. ej., Google Analytics). Requieren tu consentimiento.",
    type3:
      "Cookies funcionales: Permiten recordar tus elecciones y preferencias (p. ej., idioma). Pueden requerir consentimiento.",
    type4:
      "Cookies de marketing: Se utilizan para mostrar publicidad personalizada (p. ej., Píxel de Facebook). Requieren tu consentimiento.",
    section3Title: "3. Gestión de cookies",
    section3Content:
      "Puedes gestionar tus consentimientos de cookies en cualquier momento utilizando la herramienta de gestión de consentimiento disponible en nuestro sitio (haz clic en el botón 'Configuración de Cookies'). También puedes cambiar la configuración de cookies en tu navegador web.",
    settingsError:
      "No se puede abrir la configuración de cookies. Contacta con el soporte técnico o intenta gestionar la configuración en tu navegador.",
    settingsInfoPlaceholder:
      "Al hacer clic en el botón se abrirá el panel de gestión de configuración de cookies.",
    contactTitle: "Contacto sobre la Política de Cookies",
    contactContent:
      "Si tienes preguntas sobre nuestra política de cookies, contáctanos en: [puaro@vp.pl].", // Actualizar dirección de correo electrónico
  },
  faq: {
    title: "Preguntas Frecuentes (FAQ)",
    metaDescription:
      "Encuentra respuestas a las preguntas más comunes sobre EuroTrek.",
    q1: "Pregunta 1: ¿Cómo puedo enviar mis fotos?",
    a1: "Actualmente recopilamos fotos de estudiantes asociados. Si estás interesado en colaborar, contáctanos a través del formulario de contacto, describiendo brevemente tus viajes y portafolio.",
    q2: "Pregunta 2: ¿El uso del servicio es de pago?",
    a2: "No, navegar por las fotos y el contenido del servicio EuroTrek es completamente gratuito para todos los usuarios.",
    q3: "Pregunta 3: ¿Quién posee los derechos de autor de las fotos?",
    a3: "Los derechos de autor de las fotos pertenecen a los estudiantes autores. EuroTrek posee una licencia para su publicación en el servicio. Los detalles se especifican en el acuerdo con el autor y en nuestros Términos de Uso.",
    stillHaveQuestions: "¿Aún tienes preguntas?",
    contactUs: "Contáctanos",
  },
  sitemap: {
    title: "Mapa del Sitio",
    metaDescription: "Explora la estructura del sitio EuroTrek.",
    introduction:
      "A continuación se muestra una lista de las principales secciones y páginas disponibles en el servicio EuroTrek para facilitar tu navegación.",
  },
  support: {
    title: "Ayuda y Soporte",
    metaDescription:
      "¿Necesitas ayuda? Encuentra información de contacto y soporte para EuroTrek.",
    introduction:
      "¡Estamos aquí para ayudar! Si tienes preguntas sobre el funcionamiento del servicio, encontraste un problema técnico o tienes otras inquietudes, utiliza las opciones de soporte disponibles.",
    faqTitle: "Consulta Primero las FAQ",
    faqDescription:
      "Muchas respuestas a preguntas comunes se pueden encontrar en nuestra sección de Preguntas Frecuentes (FAQ).",
    goToFaq: "Ir a FAQ",
    contactFormTitle: "Formulario de Contacto",
    contactFormDescription:
      "La mejor manera de contactarnos para la mayoría de los asuntos es enviando un mensaje a través de nuestro formulario de contacto.",
    goToContact: "Ir a Contacto",
    phoneTitle: "Soporte Telefónico",
    phoneDescription:
      "Para asuntos técnicos urgentes, puedes contactarnos por teléfono durante [p. ej., 10:00 - 16:00] de lunes a viernes.", // Actualizar horario
    phoneNumber: "Llama: [000 000 000]", // Actualizar número de teléfono
    responseInfo:
      "Nos esforzamos por responder a las consultas enviadas a través del formulario de contacto en un plazo de 1-2 días hábiles.",
  },
};
