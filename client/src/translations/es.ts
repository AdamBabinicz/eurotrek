import { Description } from "@radix-ui/react-toast"; // Mantener la importación

export default {
  // Common / Común
  common: {
    no_photos_data: "No hay datos de fotos disponibles.",
    // --- AÑADIDO ---
    lastUpdated: "Última actualización",
    placeholderContent:
      "El contenido de esta sección se está preparando. Se actualizará pronto.",
    // --- FIN AÑADIDO ---
  },
  // Navbar / Barra de navegación
  navbar: {
    home: "Inicio",
    destinations: "Destinos",
    about: "Sobre nosotros",
    contact: "Contacto",
  },
  // Destinations / Destinos
  destinations: {
    exploreTitle: "Descubre Destinos",
    exploreDescription:
      "Explora nuestra colección de fotos de viajes de estudiantes por las ciudades más bellas de Europa.",
    allDestinations: "Todos los Destinos",
    lisbon: "Lisboa",
    paris: "París",
    berlin: "Berlín",
    capri: "Capri",
    naples: "Nápoles",
    prague: "Praga",
    loadMore: "Cargar más",
    ariaLabel: "Categorías de destinos",
  },
  // Hero Slides / Diapositivas principales
  heroSlides: {
    "paris-hero": {
      location: "París, Francia",
      description:
        "La Ciudad de la Luz a través de los ojos de un estudiante: capturando el encanto de la arquitectura y la cultura parisinas.",
    },
    "rome-hero": {
      location: "Nápoles, Italia",
      description:
        "Nápoles es un lugar donde la vida transcurre al ritmo del espresso, las conversaciones en la calle y el aroma de la pizza recién horneada flotando en el cálido aire mediterráneo.",
    },
    "lisbon-hero": {
      location: "Lisboa, Portugal",
      description:
        "Lisboa es una ciudad llena de luz, donde las calles adoquinadas serpentean entre casas de colores, y la vida fluye tranquilamente al ritmo del fado y el aroma de los frescos 'pastéis de nata'.",
    },
    "frankfurt-hero": {
      location: "Fráncfort del Meno, Alemania",
      // Manteniendo la descripción de la plantilla PL, aunque describe Lisboa
      description:
        "Lisboa es una ciudad llena de luz, donde las calles adoquinadas serpentean entre casas de colores, y la vida fluye tranquilamente al ritmo del fado y el aroma de los frescos 'pastéis de nata'.",
    },
  },
  // Photos / Fotos
  photos: {
    view: "Ver foto {{title}}",
    noPhotos: "Aún no hay fotos disponibles para este destino.",
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
        "El barrio más antiguo de Lisboa es Alfama, construido en una ladera sobre el Tajo durante la dominación árabe. Es aquí donde se puede sentir el ambiente de la Lisboa medieval.",
    },
    "lisbon-bele": {
      title: "Torre de Belém",
      location: "Lisboa, Portugal",
      description:
        "Fortaleza medieval con vistas a la desembocadura del río Tajo", // Corrección del error tipográfico 'widokime'
    },
    "boca do inferno": {
      title: "Boca del Infierno",
      location: "Cascais, Portugal",
      description:
        "Un abismo situado en los acantilados costeros cerca de la ciudad portuguesa de Cascais",
    },
    "capri-marina": {
      title: "Playa Luigia ai Faraglioni",
      location: "Capri, Italia",
      description:
        "Situada en el Mar Tirreno, ocupa el puesto 19 entre las 118 playas de la región napolitana.",
    },
    "paris-hero": {
      // Nota: Conflicto con heroSlides, pero traducción tal cual.
      title: "Versalles – Perla del Barroco",
      location: "París, Francia", // Técnicamente cerca de París
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
      alt: "Víctimas de la erupción volcánica",
      description:
        "Los moldes de los cuerpos fueron excavados en 1863 por el arqueólogo Giuseppe Fiorelli. 'Hasta la fecha no han sido inventariados por razones éticas y por la sensibilidad con la que siempre se han tratado los restos humanos.'",
    },
    "naples-stadion": {
      title: "Anfiteatro de Pompeya",
      location: "Pompeya, Italia",
      alt: "Parte del estadio en la antigua ciudad de Pompeya",
      description:
        "El Anfiteatro de Pompeya – un antiguo anfiteatro romano, ubicado en Pompeya. Es la estructura conservada más antigua de este tipo.",
    },
    "naples-museum": {
      title: "Pequeño donario pergaménico", // Traducción directa, se refiere a esculturas específicas
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
        "Una encantadora terraza en la azotea con cactus. La mayoría de los tejados de los edificios en Capri son planos. Y como se ve arriba, se han establecido terrazas en algunos de estos edificios.",
    },
    "capri-street": {
      title: "Calle comercial en Capri",
      location: "Capri, Italia",
      alt: "Tiendas en Capri",
      description:
        "Capri se caracteriza por sus encantadoras calles comerciales, que comienzan en la Piazzetta y conducen a través de Via Camerelle y Via Le Botteghe.",
    },
    "capri-port": {
      title: "Puerto en Marina Grande",
      location: "Capri, Italia",
      alt: "Yates atracados",
      description:
        "Los porteadores de equipaje de los hoteles principales esperan para llevar su equipaje en un carrito, y puede tomar el funicular o viajar en un taxi descapotable, ya que no hay tráfico de automóviles en Capri.",
    },
    "lisbon-hero": {
      // Nota: Conflicto con heroSlides, pero traducción tal cual.
      title: "Monasterio de los Jerónimos",
      location: "Lisboa, Portugal",
      alt: "Monasterio de los Jerónimos en Belém",
      description:
        "Construido en la primera mitad del siglo XVI, se considera la joya y la quintaesencia del estilo manuelino, una mezcla específica portuguesa de gótico y renacimiento.",
    },
    "paris-eiffel": {
      title: "Torre Eiffel",
      location: "París, Francia",
      alt: "Iluminación nocturna de la Torre Eiffel en París",
      description:
        "El monumento arquitectónico más famoso de París, considerado un símbolo de esta ciudad y, a veces, de toda Francia.",
    },
    "paris-louvre": {
      title: "Museo del Louvre",
      location: "París, Francia",
      alt: "Antiguo palacio real en París",
      description:
        "Uno de los museos más grandes del mundo, también es la institución de este tipo más visitada del mundo.",
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
        "Es difícil imaginar la cocina del Sena, y especialmente la del Ródano, sin deliciosos caracoles en el plato.",
    },
    "frankfurt-hero": {
      // Nota: Conflicto con heroSlides, pero traducción tal cual.
      title: "Ópera Antigua (Alte Oper), Fráncfort",
      location: "Fráncfort del Meno, Alemania",
      alt: "Ópera Antigua (Alte Oper), Fráncfort",
      description:
        "Elevándose sobre una pintoresca plaza adornada con una elegante fuente se encuentra la Ópera, que posee una fachada de estilo renacentista.",
    },
    "berlin-gate": {
      title: "Puerta de Brandeburgo",
      location: "Berlín, Alemania",
      alt: "Puerta de Brandeburgo",
      description:
        "La Puerta de Brandeburgo como símbolo de Paz y Libertad desde el 3 de octubre de 1990, aniversario de la reunificación alemana.",
    },
    "berlin-museum": {
      title: "Museo Antiguo (Altes Museum)",
      location: "Berlín, Alemania",
      alt: "Museo Antiguo",
      description:
        "El museo fue construido para hacer accesibles al público en general las colecciones de arte antiguo, por orden del rey prusiano Federico Guillermo III.",
    },
    "berlin-victory-column": {
      title: "Columna de la Victoria (Siegessäule)",
      location: "Berlín, Alemania",
      alt: "Columna de la Victoria",
      description:
        "Columna ubicada en el parque Großer Tiergarten en Berlín que conmemora la victoria de Prusia sobre Dinamarca en la Guerra de los Ducados de 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven, Haydn y Mozart",
      location: "Berlín, Alemania",
      alt: "Monumento a los tres genios musicales",
      description:
        "Monumento al aire libre a los compositores clásicos Ludwig van Beethoven, Joseph Haydn y Wolfgang Amadeus Mozart, de 1904.",
    },
    "prague-bridge": {
      title: "Vista del río Moldava en Praga",
      location: "Praga, República Checa",
      alt: "Río Moldava en Praga",
      description:
        "Toda Praga se refleja en el Moldava y le halaga, como a un espejo mágico.",
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
  // About Section / Sobre nosotros
  about: {
    title: "Sobre EuroTrek",
    description1:
      "EuroTrek es un diario fotográfico colectivo creado por estudiantes universitarios que estudian en Polonia. Nuestra misión es mostrar la belleza, la cultura y las experiencias de los viajes de estudiantes a través de la fotografía auténtica.",
    description2:
      "Esta plataforma sirve tanto de inspiración para futuros estudiantes viajeros como de libro de recuerdos para aquellos que ya han iniciado sus aventuras europeas. Todas las fotos son tomadas por estudiantes, mostrando Europa desde una perspectiva fresca y juvenil.",
    pageTitle: "Sobre Nuestro Viaje",
    pageDescription1:
      "EuroTrek nació de la pasión por la fotografía de viajes y el deseo de capturar las experiencias únicas de los estudiantes exploradores en las ciudades más vibrantes de Europa.",
    pageDescription2:
      "Lo que comenzó como un pequeño grupo que compartía fotos entre compañeros de clase que estudiaban en Polonia, se ha convertido en una plataforma que conecta a estudiantes fotógrafos de diversos países, orígenes y disciplinas académicas que comparten un amor común por la exploración y la narración visual.",
    pageDescription3:
      "Nuestros colaboradores son estudiantes como tú, que equilibran sus estudios con aventuras por todo el continente, capturando momentos auténticos en el camino.",
    mission: {
      title: "Nuestra Misión",
      description:
        "Inspirar los viajes de estudiantes a través de la narración visual auténtica y fomentar una comunidad de apoyo para jóvenes fotógrafos que exploran Europa.",
    },
    team: {
      title: "El Colectivo Estudiantil",
      description:
        "Nuestro equipo está compuesto exclusivamente por estudiantes fotógrafos, escritores y desarrolladores web de universidades de todo el mundo. Cada colaborador aporta su perspectiva y experiencia únicas a la plataforma.",
    },
    feature1: {
      title: "Fotógrafos Estudiantes",
      description:
        "Fotos capturadas por estudiantes de intercambio de todo el mundo",
    },
    feature2: {
      title: "Experiencias Auténticas",
      description:
        "Momentos de viaje reales más allá de los típicos lugares turísticos",
    },
    feature3: {
      title: "Múltiples Destinos",
      description:
        "Una creciente colección de imágenes de todo el continente europeo",
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
      description: "Los extraordinarios paisajes de Nápoles.",
    },
  },
  // Featured Section / Destacado
  featured: {
    title: "Destacado: Primavera en París",
    description1:
      "París en primavera es un sueño para los estudiantes fotógrafos. La ciudad cobra vida con cerezos en flor, terrazas de cafés y la luz perfecta para capturar monumentos icónicos.",
    description2:
      "Nuestra colección destacada muestra la magia de París a través de los ojos de estudiantes polacos que pasaron sus vacaciones de intercambio en la Ciudad de la Luz.",
    exploreLink: "Explora la Colección París",
    image1Alt: "Torre Eiffel en primavera",
    image2Alt: "Río Sena en París",
    image3Alt: "Escena de café parisino",
    image4Alt: "Museo del Louvre",
  },
  // Contact Section / Contacto
  contact: {
    title: "Contacto",
    description:
      "¿Tienes preguntas o quieres enviar tus propias fotos de viajes de estudiantes? ¡Nos encantaría saber de ti!",
    pageTitle: "Ponte en Contacto",
    getInTouch: "¿Cómo Podemos Ayudarte?",
    getInTouchDescription:
      "Ya sea que quieras enviar tus fotos de viaje, tengas preguntas sobre nuestra plataforma o simplemente quieras saludar, estamos aquí para ayudarte.",
    email: {
      title: "Escríbenos",
      description: "Para consultas generales y envío de fotos",
    },
    location: {
      title: "Nuestra Ubicación",
      description: "Visita nuestra oficina del colectivo estudiantil",
      address: "University Creative Hub, European Campus, Amsterdam", // Dirección de marcador de posición mantenida
    },
    phone: {
      title: "Llámanos",
      description: "Disponibles los días laborables de 10:00 a 18:00 CET",
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
      messagePlaceholder: "Escribe tu mensaje aquí...",
      messageError: "El mensaje debe tener al menos 10 caracteres",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje Enviado!",
      successMessage:
        "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    },
  },
  // Footer / Pie de página
  footer: {
    description:
      "Un viaje visual por Europa capturado a través del objetivo de estudiantes que exploran los rincones más bellos del continente.",
    quickLinks: "Enlaces Rápidos",
    resources: "Recursos",
    parisCollection: "Colección París",
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
  },
  // Slider Controls / Controles del deslizador
  slider: {
    previous: "Diapositiva anterior",
    next: "Siguiente diapositiva",
    goToSlide: "Ir a la diapositiva {{index}}",
  },
  // Lightbox / Visor de imágenes
  lightbox: {
    close: "Cerrar visor",
    previous: "Imagen anterior",
    next: "Siguiente imagen",
  },
  // Theme Toggle / Cambio de tema
  theme: {
    toggleLight: "Cambiar a modo claro",
    toggleDark: "Cambiar a modo oscuro",
  },
  // Language / Idioma
  language: {
    changeLanguage: "Cambiar idioma",
  },
  // Home / Inicio
  home: {
    heroAriaLabel: "Destinos destacados",
  },

  // --- SECCIONES AÑADIDAS PARA NUEVAS PÁGINAS DE INFORMACIÓN (CON CONTENIDO DE MARCADOR DE POSICIÓN GENÉRICO) ---
  privacyPolicy: {
    title: "Política de Privacidad",
    metaDescription: "Lee la política de privacidad del servicio EuroTrek.",
    introduction:
      "Bienvenido a la Política de Privacidad de EuroTrek. Tu privacidad es importante para nosotros y nos comprometemos a proteger tus datos personales de acuerdo con las regulaciones aplicables, incluido el RGPD.",
    section1Title: "1. ¿Qué información recopilamos?",
    section1Content:
      "Recopilamos información que nos proporcionas directamente (p. ej., a través del formulario de contacto: nombre, dirección de correo electrónico, contenido del mensaje) y datos recopilados automáticamente cuando utilizas el servicio (p. ej., dirección IP, tipo de navegador, información del dispositivo, datos de actividad en el servicio mediante cookies – ver Política de Cookies).",
    section2Title: "2. ¿Cómo utilizamos tu información?",
    section2Content:
      "Utilizamos tus datos para proporcionar y mejorar nuestros servicios, comunicarnos contigo (responder a consultas), analizar el tráfico del sitio web, garantizar la seguridad del servicio y cumplir con las obligaciones legales.",
    contactTitle: "Contacto de Privacidad",
    contactContent:
      "Para asuntos relacionados con el tratamiento de tus datos personales o el ejercicio de tus derechos, por favor contáctanos en: [puaro@vp.pl].", // Email de marcador de posición mantenido
  },
  termsOfUse: {
    title: "Términos de Uso",
    metaDescription: "Lee los términos de uso del servicio EuroTrek.",
    introduction:
      "Estos Términos de Uso regulan tu uso del sitio web EuroTrek. Al utilizar el servicio, aceptas las siguientes disposiciones.",
    section1Title: "1. Reglas generales y aceptación de los términos",
    section1Content:
      "El servicio EuroTrek es una plataforma que muestra fotografía de viajes. Los usuarios están obligados a utilizar el servicio de acuerdo con la ley y las buenas costumbres. Está prohibido publicar contenido ilegal, ofensivo o que viole los derechos de terceros.",
    contactTitle: "Contacto de Términos de Uso",
    contactContent:
      "Las preguntas sobre estos Términos de Uso deben dirigirse a: [puaro@vp.pl].", // Email de marcador de posición mantenido
  },
  accessibility: {
    title: "Declaración de Accesibilidad",
    metaDescription:
      "Conoce nuestro compromiso con la accesibilidad digital en EuroTrek.",
    introduction:
      "EuroTrek se esfuerza por garantizar la accesibilidad digital del servicio para la gama más amplia posible de usuarios, incluidas las personas con discapacidades. Trabajamos continuamente para mejorar la interfaz de usuario y aplicar los estándares de accesibilidad relevantes, como las WCAG (Web Content Accessibility Guidelines).",
    section1Title: "1. Nuestros esfuerzos de accesibilidad",
    section1Content:
      "Nuestro objetivo es implementar soluciones como: usar código HTML semántico, garantizar la navegación por teclado, proporcionar un contraste de color adecuado, texto alternativo para las imágenes y probar el servicio con diversas tecnologías de asistencia.",
    contactTitle: "Comentarios e Información de Contacto",
    contactContent:
      "Si encuentras barreras de accesibilidad en nuestro servicio, por favor contáctanos. Tus comentarios son valiosos para nosotros. Contáctanos en: [puaro@vp.pl].", // Email de marcador de posición mantenido
  },
  cookiePolicy: {
    title: "Política de Cookies",
    metaDescription: "Aprende cómo EuroTrek utiliza las cookies.",
    introduction:
      "Nuestro servicio utiliza cookies para garantizar el correcto funcionamiento del sitio, mejorar tu experiencia y con fines analíticos y de marketing (con tu consentimiento).",
    section1Title: "1. ¿Qué son las cookies?",
    section1Content:
      "Las cookies son pequeños archivos de texto que se guardan en tu dispositivo (ordenador, smartphone) cuando visitas sitios web. Permiten que el sitio 'recuerde' tus acciones y preferencias durante un período de tiempo.",
    section2Title: "2. ¿Qué tipos de cookies utilizamos?",
    section2Content: "Utilizamos varios tipos de cookies, incluyendo:",
    type1:
      "Cookies esenciales: Necesarias para el funcionamiento básico del servicio (p. ej., sesión de usuario). No requieren consentimiento.",
    type2:
      "Cookies analíticas: Nos ayudan a entender cómo los usuarios interactúan con el sitio (p. ej., Google Analytics). Requieren tu consentimiento.",
    type3:
      "Cookies funcionales: Permiten recordar tus elecciones y preferencias (p. ej., idioma). Pueden requerir consentimiento.",
    type4:
      "Cookies de marketing: Se utilizan para mostrar publicidad personalizada (p. ej., Facebook Pixel). Requieren tu consentimiento.",
    section3Title: "3. Gestión de Cookies",
    section3Content:
      "Puedes gestionar tus consentimientos de cookies en cualquier momento utilizando la herramienta de gestión de consentimiento disponible en nuestro sitio (haz clic en el botón 'Configuración de Cookies'). También puedes cambiar la configuración de las cookies en tu navegador web.",
    settingsError:
      "No se puede abrir la configuración de cookies. Por favor, contacta con soporte o intenta gestionar la configuración en tu navegador.",
    settingsInfoPlaceholder:
      "Al hacer clic en el botón se abrirá el panel de gestión de configuración de cookies.",
    contactTitle: "Contacto de Política de Cookies",
    contactContent:
      "Si tienes preguntas sobre nuestra política de cookies, por favor contáctanos: [puaro@vp.pl].", // Email de marcador de posición mantenido
  },
  faq: {
    title: "Preguntas Frecuentes (FAQ)",
    metaDescription:
      "Encuentra respuestas a las preguntas más comunes sobre EuroTrek.",
    q1: "Pregunta 1: ¿Cómo puedo enviar mis fotos?",
    a1: "Actualmente, recopilamos fotos de estudiantes asociados. Si estás interesado en colaborar, por favor contáctanos a través del formulario de contacto, describiendo brevemente tus viajes y tu portafolio.",
    q2: "Pregunta 2: ¿Es gratuito usar el servicio?",
    a2: "Sí, navegar por las fotos y el contenido en el servicio EuroTrek es completamente gratuito para todos los usuarios.",
    q3: "Pregunta 3: ¿Quién posee los derechos de autor de las fotos?",
    a3: "Los derechos de autor de las fotos pertenecen a los estudiantes autores. EuroTrek posee una licencia para publicarlas en el servicio. Los detalles se especifican en el acuerdo con el autor y en nuestros Términos de Uso.",
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
      "¡Estamos aquí para ayudar! Si tienes preguntas sobre cómo funciona el servicio, has encontrado un problema técnico o tienes otras inquietudes, por favor utiliza las opciones de soporte disponibles.",
    faqTitle: "Consulta primero las FAQ",
    faqDescription:
      "Muchas respuestas a preguntas comunes se pueden encontrar en nuestra sección de Preguntas Frecuentes (FAQ).",
    goToFaq: "Ir a FAQ",
    contactFormTitle: "Formulario de Contacto",
    contactFormDescription:
      "La mejor manera de contactarnos para la mayoría de los asuntos es enviando un mensaje a través de nuestro formulario de contacto.",
    goToContact: "Ir a Contacto",
    phoneTitle: "Soporte Telefónico",
    phoneDescription:
      "Para asuntos técnicos urgentes, puedes contactarnos por teléfono durante [p. ej., 10:00 AM - 4:00 PM] de lunes a viernes.",
    phoneNumber: "Llámanos: [000 000 000]", // Número de teléfono de marcador de posición mantenido
    responseInfo:
      "Nos esforzamos por responder a las consultas enviadas a través del formulario de contacto en un plazo de 1-2 días hábiles.",
  },
  // --- FIN DE LAS SECCIONES MODIFICADAS ---
};
