import { Description } from "@radix-ui/react-toast"; // Esta importación parece no utilizarse en el objeto de traducción en sí, pero se mantiene por si es necesaria en otro lugar.

export default {
  // Common - Común
  common: {
    no_photos_data: "No hay datos de fotos disponibles.",
    lastUpdated: "Última actualización",
    placeholderContent:
      "El contenido de esta sección está actualmente en preparación. Se actualizará pronto.",
  },

  // Routes - Rutas (Slugs de URL)
  routes: {
    // --- Páginas principales (coincidiendo con navbar y sitemap) ---
    home: "", // Vacío para la ruta raíz en el idioma predeterminado (ej. /es/)
    destinations: "viajes", // O "destinos"
    about: "sobre-nosotros", // O "quienes-somos"
    contact: "contacto",

    // --- Rutas de detalle (base para parámetros) ---
    destinationDetail: "viaje", // ej. /es/viaje/lisboa o /es/viaje/:id

    // --- Pie de página y nuevas páginas de información ---
    faq: "faq", // A menudo se mantiene internacional
    privacy: "politica-privacidad",
    terms: "terminos-uso", // O "condiciones-uso"
    sitemap: "mapa-sitio", // O mantener 'sitemap'
    accessibility: "accesibilidad",
    cookiePolicy: "politica-cookies",
    support: "soporte", // O 'ayuda'
  },

  // Navbar - Navegación
  navbar: {
    home: "Inicio",
    destinations: "Viajes", // O "Destinos"
    about: "Sobre Nosotros",
    contact: "Contacto",
  },

  // Destinations - Destinos (Textos UI)
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
  },

  // Destinations Data - Datos de destinos (Nombres y países)
  destinationsData: {
    lisbon: { name: "Lisboa", country: "Portugal" },
    paris: { name: "París", country: "Francia" },
    berlin: { name: "Berlín", country: "Alemania" },
    capri: { name: "Capri", country: "Italia" },
    naples: { name: "Nápoles", country: "Italia" },
    prague: { name: "Praga", country: "República Checa" }, // O "Chequia"
  },

  // Hero Slides - Sliders principales
  heroSlides: {
    "paris-hero": {
      location: "París, Francia",
      description:
        "La ciudad de las luces a través de los ojos de un estudiante: capturando el encanto de la arquitectura y la cultura parisina.",
    },
    "rome-hero": {
      // Nota: Ubicación original era Nápoles
      location: "Nápoles, Italia",
      description:
        "Nápoles es un lugar donde la vida transcurre al ritmo del espresso, las conversaciones en la calle y el aroma de la pizza recién horneada flotando en el cálido aire mediterráneo.",
    },
    "lisbon-hero": {
      location: "Lisboa, Portugal",
      description:
        "Lisboa es una ciudad llena de luz, donde las calles adoquinadas serpentean entre casas coloridas, y la vida fluye tranquilamente al ritmo del fado y el aroma de los 'pasteles de nata' frescos.",
    },
    "frankfurt-hero": {
      location: "Fráncfort del Meno, Alemania",
      // Descripción original mantenida como se solicitó
      description:
        "Lisboa es una ciudad llena de luz, donde las calles adoquinadas serpentean entre casas coloridas, y la vida fluye tranquilamente al ritmo del fado y el aroma de los 'pasteles de nata' frescos.",
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
        "El histórico edificio del teatro es una de las salas más prestigiosas de Portugal y se encuentra en la Plaza Rossio, en el centro de la ciudad.",
    },
    "lisbon-belem": {
      title: "Tejados del Casco Antiguo",
      location: "Lisboa, Portugal",
      description:
        "El barrio más antiguo de Lisboa es Alfama, construido en la ladera sobre el Tajo durante la dominación árabe. Es aquí donde se puede sentir el ambiente de la Lisboa medieval.",
    },
    "lisbon-bele": {
      title: "Torre de Belém",
      location: "Lisboa, Portugal",
      description:
        "Fortaleza medieval con vistas a la desembocadura del río Tajo",
    },
    "boca do inferno": {
      title: "Boca del Infierno",
      location: "Cascais, Portugal",
      description:
        "Un abismo situado en los acantilados costeros cerca de la ciudad portuguesa de Cascais",
    },
    "capri-marina": {
      title: "Playa Luigia en Faraglioni",
      location: "Capri, Italia",
      description:
        "Situada en el Mar Tirreno, ocupa el puesto 19 entre las 118 playas de la región napolitana.",
    },
    "paris-hero": {
      // Clave duplicada como en pl.ts original
      title: "Versalles – Perla del Barroco",
      location: "París, Francia",
      alt: "Palacio de Versalles cerca de París",
      description:
        "Versalles es un símbolo de la monarquía absoluta francesa y uno de los ejemplos más magníficos de la arquitectura barroca del mundo.",
    },
    "naples-view": {
      title: "Carretera sobre el Mar Tirreno",
      location: "Nápoles, Italia",
      alt: "Carretera al pie de la montaña",
      description: "Una ruta pintoresca a lo largo de la costa.",
    },
    "naples-mummy": {
      title: "Molde de una víctima del Vesubio",
      location: "Pompeya, Italia",
      alt: "Víctimas de la erupción volcánica",
      description:
        "Los moldes de los cuerpos fueron excavados en 1863 por el arqueólogo Giuseppe Fiorelli. 'Hasta la fecha no han sido inventariados por razones éticas y la sensibilidad con la que siempre se han tratado los restos humanos.'",
    },
    "naples-stadion": {
      title: "Anfiteatro de Pompeya",
      location: "Pompeya, Italia",
      alt: "Parte del estadio en la antigua ciudad de Pompeya",
      description:
        "El Anfiteatro de Pompeya – un antiguo anfiteatro romano, situado en Pompeya. Es la estructura más antigua de su tipo que se conserva.",
    },
    "naples-museum": {
      title: "Pequeño regalo pergameno",
      location: "Nápoles, Italia",
      alt: "Museo Arqueológico Nacional de Nápoles",
      description:
        "Una copia del siglo II d.C. de un original griego del siglo II a.C.",
    },
    "capri-taras": {
      title: "Capri cerca de Marina Piccola",
      location: "Capri, Italia",
      alt: "Terrazas en Capri",
      description:
        "Una encantadora terraza en la azotea con cactus. La mayoría de los tejados de los edificios en Capri son planos. Y como se ve arriba, se instalan terrazas en algunos de estos edificios.",
    },
    "capri-street": {
      title: "Calle comercial en Capri",
      location: "Capri, Italia",
      alt: "Tiendas en Capri",
      description:
        "Capri se caracteriza por sus encantadoras calles comerciales que comienzan en la Piazzetta y discurren por Via Camerelle y Via Le Botteghe.",
    },
    "capri-port": {
      title: "Puerto en Marina Grande",
      location: "Capri, Italia",
      alt: "Yates amarrados",
      description:
        "Los porteadores de equipaje de los principales hoteles esperan para llevar su equipaje en un carrito, y usted puede tomar el funicular o un descapotable, ya que no hay tráfico de coches en Capri.",
    },
    "lisbon-hero": {
      // Clave duplicada como en pl.ts original
      title: "Monasterio de los Jerónimos",
      location: "Lisboa, Portugal",
      alt: "Monasterio de los Jerónimos en Belém",
      description:
        "Construido en la primera mitad del siglo XVI, es considerado una perla y la quintaesencia del estilo manuelino, una mezcla específica portuguesa de gótico y renacimiento.",
    },
    "paris-eiffel": {
      title: "Torre Eiffel",
      location: "París, Francia",
      alt: "Iluminación nocturna de la Torre Eiffel en París",
      description:
        "El monumento arquitectónico más famoso de París, considerado un símbolo de la ciudad y, a veces, de toda Francia.",
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
        "Es difícil imaginar la cocina del Sena, y especialmente la del Ródano, sin un delicioso caracol en el plato.",
    },
    "paris-1": {
      alt: "Vista de la Biblioteca Nacional en primavera",
      title: "Biblioteca Nacional de Francia, sede Richelieu, Sala Oval",
      location: "París, Francia",
    },
    "paris-2": {
      alt: "Versalles, Templo del Amor",
      title: "Versalles, Templo del Amor",
      location: "Versalles, Francia",
    },
    "paris-3": {
      alt: "Jardín francés",
      title: "Magníficos jardines históricos",
      location: "París, Francia",
    },
    "paris-4": {
      alt: "Fauno danzante",
      title: "Dios mítico romano del bosque y de las arboledas encantadas",
      location: "París, Francia",
    },
    "frankfurt-hero": {
      // Clave duplicada como en pl.ts original
      title: "Alte Oper (Antigua Ópera), Fráncfort",
      location: "Fráncfort del Meno, Alemania",
      alt: "Alte Oper (Antigua Ópera), Fráncfort",
      description:
        "Elevándose sobre una pintoresca plaza adornada con una elegante fuente se encuentra la Ópera, que presenta una fachada de estilo renacentista.",
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
      alt: "Altes Museum (Museo Antiguo)",
      description:
        "El museo fue construido para hacer accesibles al público en general las colecciones de arte antiguo, por encargo del rey prusiano Federico Guillermo III.",
    },
    "berlin-victory-column": {
      title: "Columna de la Victoria",
      location: "Berlín, Alemania",
      alt: "Columna de la Victoria",
      description:
        "Una columna situada en el parque Großer Tiergarten de Berlín que conmemora la victoria de Prusia sobre Dinamarca en la Guerra de los Ducados de 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven-Haydn-Mozart",
      location: "Berlín, Alemania",
      alt: "Monumento a los tres genios musicales",
      description:
        "Un monumento al aire libre a los compositores clásicos Ludwig van Beethoven, Joseph Haydn y Wolfgang Amadeus Mozart, creado en 1904.",
    },
    "prague-bridge": {
      title: "Vista del río Moldava en Praga",
      location: "Praga, República Checa",
      alt: "Río Moldava en Praga",
      description:
        "Toda Praga se refleja en el Moldava y le sonríe, como a un espejo mágico.",
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
        "Un edificio vanguardista diseñado por el dúo de arquitectos Vlado Milunić y Frank Gehry en estilo deconstructivista.",
    },
    "prague-kafka": {
      title: "Cabeza giratoria de Franz Kafka",
      location: "Praga, República Checa",
      alt: "Cabeza de Franz Kafka",
      description:
        "David Černý diseñó esta controvertida obra de arte para el edificio comercial y de oficinas 'Quadrio' en la calle Národní třída.",
    },
  },

  // About Section - Sobre Nosotros
  about: {
    title: "Sobre EuroTrek",
    description1:
      "EuroTrek es un diario fotográfico colectivo creado por estudiantes universitarios que estudian en Polonia. Nuestra misión es mostrar la belleza, la cultura y las experiencias de los viajes estudiantiles a través de la fotografía auténtica.",
    description2:
      "Esta plataforma sirve tanto de inspiración para futuros estudiantes viajeros como de libro de recuerdos para aquellos que ya han emprendido sus aventuras europeas. Todas las fotos son capturadas por estudiantes, ofreciendo una perspectiva fresca y juvenil de Europa.",
    pageTitle: "Sobre Nuestro Viaje",
    pageDescription1:
      "EuroTrek nació de la pasión por la fotografía de viajes y el deseo de capturar las experiencias únicas de los estudiantes exploradores en las ciudades más vibrantes de Europa.",
    pageDescription2:
      "Lo que comenzó como un pequeño grupo de intercambio de fotos entre compañeros de clase que estudiaban en Polonia se ha convertido en una plataforma que conecta a estudiantes fotógrafos de diversos países, orígenes y disciplinas académicas, todos compartiendo un amor común por la exploración y la narración visual.",
    pageDescription3:
      "Nuestros colaboradores son estudiantes como tú, que equilibran sus estudios con aventuras por todo el continente, capturando momentos auténticos por el camino.",
    mission: {
      title: "Nuestra Misión",
      description:
        "Inspirar los viajes estudiantiles a través de la narración visual auténtica y fomentar una comunidad de apoyo para jóvenes fotógrafos que exploran Europa.",
    },
    team: {
      title: "El Colectivo Estudiantil",
      description:
        "Nuestro equipo está formado íntegramente por estudiantes fotógrafos, escritores y desarrolladores web de universidades de todo el mundo. Cada colaborador aporta su perspectiva y experiencia únicas a la plataforma.",
    },
    feature1: {
      title: "Estudiantes Fotógrafos",
      description:
        "Fotos capturadas por estudiantes internacionales de todo el mundo",
    },
    feature2: {
      title: "Experiencias Auténticas",
      description:
        "Momentos de viaje reales más allá de los típicos puntos turísticos",
    },
    feature3: {
      title: "Múltiples Viajes",
      description:
        "Una creciente colección de fotos de todo el continente europeo",
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
      description: "Los impresionantes paisajes de Nápoles.",
    },
  },

  // Featured Section - Destacado
  featured: {
    title: "Destacado: Primavera en París",
    description1:
      "París en primavera es un sueño para los estudiantes fotógrafos. La ciudad cobra vida con cerezos en flor, terrazas de cafés y la luz perfecta para capturar monumentos icónicos.",
    description2:
      "Nuestra colección destacada muestra la magia de París a través de los ojos de estudiantes polacos que pasaron sus vacaciones de estudio en el extranjero en la Ciudad de la Luz.",
    exploreLink: "Explora la Colección de París",
    image1Alt: "Torre Eiffel en Primavera",
    image2Alt: "Río Sena en París",
    image3Alt: "Terraza de Café Parisina",
    image4Alt: "Museo del Louvre",
  },

  // Contact Section - Contacto
  contact: {
    title: "Contáctanos",
    description:
      "¿Tienes preguntas o quieres enviar tus propias fotos de viajes estudiantiles? ¡Nos encantaría saber de ti!",
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
      description: "Visita nuestra oficina del colectivo estudiantil",
      address: "University Creative Hub, European Campus, Amsterdam",
    },
    phone: {
      title: "Llámanos",
      description: "Disponible de lunes a viernes de 10:00 a 18:00 CET",
    },
    form: {
      name: "Tu Nombre",
      namePlaceholder: "Introduce tu nombre",
      nameError: "El nombre es obligatorio",
      email: "Tu Email",
      emailPlaceholder: "Introduce tu email",
      emailError: "Se requiere un email válido",
      subject: "Asunto",
      subjectPlaceholder: "¿De qué te gustaría hablar?",
      subjectError: "El asunto es obligatorio",
      message: "Mensaje",
      messagePlaceholder: "Introduce tu mensaje aquí...",
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
      "Un viaje visual por Europa capturado por estudiantes que exploran los rincones más bellos del continente.",
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
    tagline: "Hecho con ❤ por estudiantes, para estudiantes.",
    instagram: "Síguenos en Instagram",
    twitter: "Síguenos en Twitter",
    facebook: "Síguenos en Facebook",
    pinterest: "Síguenos en Pinterest",
    linkedin: "Síguenos en LinkedIn",
    messenger: "Contáctanos vía Messenger",
  },

  // Slider Controls - Controles del Slider
  slider: {
    previous: "Diapositiva anterior",
    next: "Siguiente diapositiva",
    goToSlide: "Ir a la diapositiva {{index}}",
  },

  // Lightbox - Visor de Imágenes
  lightbox: {
    close: "Cerrar visor",
    previous: "Imagen anterior",
    next: "Siguiente imagen",
  },

  // Theme Toggle - Cambio de Tema
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

  // --- Páginas de Información ---
  privacyPolicy: {
    title: "Política de Privacidad",
    metaDescription: "Lee la política de privacidad del servicio EuroTrek.",
    introduction:
      "Bienvenido a la Política de Privacidad de EuroTrek. Tu privacidad es importante para nosotros y nos comprometemos a proteger tus datos personales de acuerdo con las regulaciones aplicables, incluido el RGPD.",
    section1Title: "1. ¿Qué información recopilamos?",
    section1Content:
      "Recopilamos información que nos proporcionas directamente (p. ej., a través del formulario de contacto: nombre, dirección de correo electrónico, contenido del mensaje) y datos recopilados automáticamente cuando utilizas el servicio (p. ej., dirección IP, tipo de navegador, información del dispositivo, datos de actividad en el servicio mediante cookies – consulta la Política de Cookies).",
    section2Title: "2. ¿Cómo utilizamos tu información?",
    section2Content:
      "Utilizamos tus datos para proporcionar y mejorar nuestros servicios, comunicarnos contigo (responder a consultas), analizar el tráfico del sitio web, garantizar la seguridad del servicio y cumplir con las obligaciones legales.",
    contactTitle: "Contacto sobre privacidad",
    contactContent:
      "Para asuntos relacionados con el procesamiento de tus datos personales o el ejercicio de tus derechos, contáctanos en: [tu-email@ejemplo.com].", // Reemplaza con el email real
  },
  termsOfUse: {
    title: "Términos de Uso",
    metaDescription: "Lee los términos de uso del servicio EuroTrek.",
    introduction:
      "Estos Términos de Uso rigen el uso del servicio web EuroTrek. Al utilizar el servicio, aceptas las siguientes disposiciones.",
    section1Title: "1. Reglas generales y aceptación de los términos",
    section1Content:
      "El servicio EuroTrek es una plataforma que presenta fotografía de viajes. Los usuarios están obligados a utilizar el servicio de acuerdo con la ley y las buenas costumbres. Está prohibido publicar contenido ilegal, ofensivo o que viole los derechos de terceros.",
    contactTitle: "Contacto sobre los Términos de Uso",
    contactContent:
      "Las preguntas sobre estos Términos de Uso deben dirigirse a: [tu-email@ejemplo.com].", // Reemplaza con el email real
  },
  accessibility: {
    title: "Declaración de Accesibilidad",
    metaDescription:
      "Obtén más información sobre nuestro compromiso con la accesibilidad digital en EuroTrek.",
    introduction:
      "EuroTrek se esfuerza por garantizar la accesibilidad digital del servicio para la gama más amplia posible de usuarios, incluidas las personas con discapacidades. Trabajamos continuamente para mejorar la interfaz y aplicar los estándares de accesibilidad relevantes, como las WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Nuestros esfuerzos de accesibilidad",
    section1Content:
      "Nos esforzamos por implementar soluciones como: usar código HTML semántico, garantizar la navegación mediante teclado, contraste de color adecuado, descripciones alternativas para imágenes y probar el servicio utilizando diversas tecnologías de asistencia.",
    contactTitle: "Comentarios e información de contacto",
    contactContent:
      "Si encuentras barreras de accesibilidad en nuestro servicio, contáctanos. Tus comentarios son valiosos para nosotros. Contáctanos en: [tu-email@ejemplo.com].", // Reemplaza con el email real
  },
  cookiePolicy: {
    title: "Política de Cookies",
    metaDescription: "Descubre cómo EuroTrek utiliza las cookies.",
    introduction:
      "Nuestro servicio utiliza cookies para garantizar el correcto funcionamiento del sitio, mejorar tu experiencia y con fines analíticos y de marketing (con tu consentimiento).",
    section1Title: "1. ¿Qué son las cookies?",
    section1Content:
      "Las cookies son pequeños archivos de texto que se guardan en tu dispositivo (ordenador, smartphone) cuando visitas sitios web. Permiten que el sitio 'recuerde' tus acciones y preferencias durante un cierto período.",
    section2Title: "2. ¿Qué tipos de cookies utilizamos?",
    section2Content: "Utilizamos varios tipos de cookies, incluyendo:",
    type1:
      "Cookies necesarias: Esenciales para el funcionamiento básico del servicio (p. ej., sesión de usuario). No requieren consentimiento.",
    type2:
      "Cookies analíticas: Nos ayudan a entender cómo interactúan los usuarios con el sitio (p. ej., Google Analytics). Requieren tu consentimiento.",
    type3:
      "Cookies funcionales: Permiten recordar tus elecciones y preferencias (p. ej., idioma). Pueden requerir consentimiento.",
    type4:
      "Cookies de marketing: Se utilizan para mostrar publicidad personalizada (p. ej., Píxel de Facebook). Requieren tu consentimiento.",
    section3Title: "3. Gestión de cookies",
    section3Content:
      "Puedes gestionar tus consentimientos de cookies en cualquier momento utilizando la herramienta de gestión de consentimiento disponible en nuestro sitio (haz clic en el botón 'Configuración de Cookies'). También puedes cambiar la configuración de cookies en tu navegador web.",
    settingsError:
      "No se pudo abrir la configuración de cookies. Contacta con soporte o intenta gestionar la configuración en tu navegador.",
    settingsInfoPlaceholder:
      "Al hacer clic en el botón se abrirá el panel de gestión de configuración de cookies.",
    contactTitle: "Contacto sobre la Política de Cookies",
    contactContent:
      "Si tienes preguntas sobre nuestra política de cookies, contáctanos en: [tu-email@ejemplo.com].", // Reemplaza con el email real
  },
  faq: {
    title: "Preguntas Frecuentes (FAQ)",
    metaDescription:
      "Encuentra respuestas a las preguntas más comunes sobre EuroTrek.",
    q1: "Pregunta 1: ¿Cómo puedo enviar mis fotos?",
    a1: "Actualmente, recopilamos fotos de estudiantes afiliados. Si estás interesado en colaborar, contáctanos a través del formulario de contacto, describiendo brevemente tus viajes y portafolio.",
    q2: "Pregunta 2: ¿Es gratuito usar el servicio?",
    a2: "Sí, navegar por las fotos y el contenido en el servicio EuroTrek es completamente gratuito para todos los usuarios.",
    q3: "Pregunta 3: ¿Quién posee los derechos de autor de las fotos?",
    a3: "Los derechos de autor de las fotos pertenecen a los estudiantes autores. EuroTrek tiene una licencia para publicarlas en el servicio. Los detalles se especifican en el acuerdo con el autor y en nuestros Términos de Uso.",
    stillHaveQuestions: "¿Aún tienes preguntas?",
    contactUs: "Contáctanos",
  },
  sitemap: {
    title: "Mapa del Sitio",
    metaDescription: "Explora la estructura del sitio EuroTrek.",
    introduction:
      "A continuación se muestra una lista de las principales secciones y páginas disponibles en el servicio EuroTrek para ayudarte a navegar.",
  },
  support: {
    title: "Ayuda y Soporte",
    metaDescription:
      "¿Necesitas ayuda? Encuentra información de contacto y soporte para EuroTrek.",
    introduction:
      "¡Estamos aquí para ayudar! Si tienes preguntas sobre cómo funciona el servicio, encontraste un problema técnico o tienes otras inquietudes, utiliza las opciones de soporte disponibles.",
    faqTitle: "Consulta primero las FAQ",
    faqDescription:
      "Muchas respuestas a preguntas comunes se pueden encontrar en nuestra sección de Preguntas Frecuentes (FAQ).",
    goToFaq: "Ir a FAQ",
    contactFormTitle: "Formulario de Contacto",
    contactFormDescription:
      "La mejor manera de contactarnos para la mayoría de las consultas es enviando un mensaje a través de nuestro formulario de contacto.",
    goToContact: "Ir a Contacto",
    phoneTitle: "Soporte Telefónico",
    phoneDescription:
      "Para problemas técnicos urgentes, puedes contactarnos por teléfono durante [ej. 10:00 AM - 4:00 PM] de lunes a viernes.",
    phoneNumber: "Llamar: [Tu Número de Teléfono]", // Reemplaza con el número de teléfono real
    responseInfo:
      "Nos esforzamos por responder a las consultas enviadas a través del formulario de contacto en 1-2 días hábiles.",
  },
};
