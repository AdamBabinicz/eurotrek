export default {
  // Common
  common: {
    no_photos_data: "No hay datos de fotos.",
    lastUpdated: "Última actualización",
    placeholderContent:
      "El contenido de esta sección está actualmente en preparación. Se actualizará pronto.",
    no_alt_text: "Imagen", // Texto alternativo predeterminado
    no_title: "Sin título", // Título predeterminado
    no_location: "Ubicación desconocida", // Ubicación predeterminada
    photo_not_found: "No se pudo cargar la imagen", // Si src es incorrecto o la imagen no existe
  },

  routes: {
    // Rutas URL en español - verificar si son apropiadas
    home: "",
    destinations: "viajes", // Ejemplo
    about: "sobre-nosotros", // Ejemplo
    contact: "contacto", // Ejemplo
    destinationDetail: "viaje", // Ejemplo
    faq: "faq", // Mantener faq es común
    privacy: "politica-privacidad", // Ejemplo
    terms: "terminos-uso", // Ejemplo
    sitemap: "mapa-sitio", // Ejemplo
    accessibility: "accesibilidad", // Ejemplo
    cookiePolicy: "politica-cookies", // Ejemplo
    support: "soporte", // Ejemplo
  },

  // Navbar
  navbar: {
    home: "Inicio",
    destinations: "Viajes",
    about: "Sobre nosotros",
    contact: "Contacto",
    mainNavLabel: "Navegación principal",
    goToHome: "Ir a la página de inicio",
    toggleMenu: "Abrir/Cerrar menú",
    mobileMenuTitle: "Menú",
  },
  // Destinations List Page
  destinationsListPage: {
    title: "Nuestros Viajes",
    metaDescription:
      "Descubre todos los lugares increíbles que ofrecemos en EuroTrek.",
    header: "Descubre Nuestros Viajes",
  },
  // Destinations general terms
  destinations: {
    exploreTitle: "Explora Viajes",
    exploreDescription:
      "Navega por nuestra colección de fotos de viajes de estudiantes de las ciudades más bellas de Europa.",
    lisbon: "Lisboa",
    paris: "París",
    berlin: "Berlín",
    capri: "Capri",
    naples: "Nápoles",
    prague: "Praga",
    loadMore: "Cargar más",
    ariaLabel: "Categorías de viajes",
    noMorePhotos: "No hay más fotos para cargar en esta categoría",
  },
  // Specific destination data
  destinationsData: {
    lisbon: { name: "Lisboa", country: "Portugal" },
    paris: { name: "París", country: "Francia" },
    berlin: { name: "Berlín", country: "Alemania" },
    capri: { name: "Capri", country: "Italia" },
    naples: {
      name: "Nápoles",
      country: "Italia",
      description:
        "Nápoles, una vibrante ciudad del sur de Italia, situada en la Bahía de Nápoles. Famosa por su rica historia, arte, cultura, arquitectura, música y gastronomía.", // Traducción automática
    },
    prague: { name: "Praga", country: "República Checa" },
  },
  // Hero Slides
  heroSlides: {
    "paris-hero": {
      title: "Versalles - Perla del Barroco",
      alt: "Palacio de Versalles cerca de París",
      location: "Versalles, Francia",
      description:
        "La ciudad de las luces a través de la lente de un estudiante - capturando la magia de la arquitectura y cultura parisina.", // Traducción automática
    },
    "rome-hero": {
      title: "Carretera sobre el Mar Tirreno",
      alt: "Vista de la costa y el Vesubio en Nápoles",
      location: "Nápoles, Italia",
      description:
        "Nápoles es un lugar donde la vida fluye al ritmo del espresso, las conversaciones en la calle y el aroma de la pizza recién horneada flotando en el cálido aire mediterráneo.", // Traducción automática
    },
    "lisbon-hero": {
      title: "Monasterio de los Jerónimos",
      alt: "Monasterio de los Jerónimos en Belém, Lisboa",
      location: "Lisboa, Portugal",
      description:
        "Lisboa es una ciudad llena de luz, donde las calles empedradas serpentean entre casas de colores, y la vida fluye tranquilamente al ritmo del fado y el aroma de los 'pastéis de nata' frescos.", // Traducción automática
    },
    "frankfurt-hero": {
      title: "Antigua Ópera (Alte Oper)",
      alt: "Edificio de la Antigua Ópera en Frankfurt",
      location: "Fráncfort del Meno, Alemania",
      description:
        "Descubre Fráncfort del Meno, donde los relucientes rascacielos del distrito bancario crean un extraordinario contraste con la histórica Opernplatz (Plaza de la Ópera).", // Traducción automática
    },
  },
  // Photos
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
      alt: "Vista de la Plaza Rossio en Lisboa",
    },
    "lisbon-belem": {
      title: "Tejados del Casco Antiguo",
      location: "Lisboa, Portugal",
      description:
        "El barrio más antiguo de Lisboa es Alfama, construido en la ladera sobre el río Tajo durante el dominio árabe. Es aquí donde se puede sentir la atmósfera de la Lisboa medieval.",
      alt: "Vista de los tejados rojos de Alfama en Lisboa",
    },
    "lisbon-bele": {
      title: "Torre de Belém",
      location: "Lisboa, Portugal",
      description:
        "Fortaleza medieval con vistas a la desembocadura del río Tajo",
      alt: "Torre de Belém junto al río Tajo en Lisboa",
    },
    "boca do inferno": {
      title: "Boca del Infierno",
      location: "Cascais, Portugal",
      description:
        "Un abismo situado en los acantilados costeros cerca de la ciudad portuguesa de Cascais",
      alt: "Formación rocosa Boca del Infierno en Cascais",
    },
    "capri-marina": {
      title: "Playa Luigia en Faraglioni",
      location: "Capri, Italia",
      description:
        "Situada en el Mar Tirreno, ocupa el puesto 19 entre las 118 playas de la región napolitana.",
      alt: "Playa Luigia y formaciones rocosas Faraglioni en Capri",
    },
    "paris-hero": {
      title: "Versalles – Perla del Barroco",
      location: "Versalles, Francia",
      alt: "Palacio de Versalles y jardines",
      description:
        "Versalles es el símbolo de la monarquía absoluta francesa y uno de los ejemplos más magníficos de la arquitectura barroca del mundo.",
    },
    "naples-view": {
      title: "Carretera sobre el Mar Tirreno",
      location: "Nápoles, Italia",
      alt: "Carretera al pie del Monte Vesubio",
      description: "Ruta pintoresca a lo largo de la costa.",
    },
    "naples-mummy": {
      title: "Molde de una víctima del Vesubio",
      location: "Pompeya, Italia",
      alt: "Molde de yeso del cuerpo de una víctima de la erupción del Vesubio",
      description:
        "Los moldes de los cuerpos fueron excavados en 1863 por el arqueólogo Giuseppe Fiorelli. 'Hasta la fecha, no han sido inventariados por razones éticas y los sentimientos con los que siempre se han tratado los restos humanos.'",
    },
    "naples-stadion": {
      title: "Anfiteatro de Pompeya",
      location: "Pompeya, Italia",
      alt: "Ruinas del anfiteatro en la antigua ciudad de Pompeya",
      description:
        "El Anfiteatro de Pompeya – un antiguo anfiteatro romano situado en Pompeya. Es la estructura más antigua de su tipo que se conserva.",
    },
    "naples-museum": {
      title: "Pequeño donativo pergameno", // O "Gálata moribundo"
      location: "Nápoles, Italia",
      alt: "Escultura del 'Gálata moribundo' en el Museo Arqueológico Nacional de Nápoles",
      description:
        "Copia del siglo II d.C. de un original griego del siglo II a.C.",
    },
    "capri-taras": {
      title: "Capri cerca de Marina Piccola",
      location: "Capri, Italia",
      alt: "Terraza mirador con cactus en Capri",
      description:
        "Una encantadora terraza en la azotea con cactus. La mayoría de los tejados de los edificios en Capri son planos. Y como se ve arriba, se establecen terrazas en algunos de estos edificios.",
    },
    "capri-street": {
      title: "Calle comercial en Capri",
      location: "Capri, Italia",
      alt: "Estrecha calle comercial con tiendas en Capri",
      description:
        "Capri se caracteriza por sus encantadoras calles comerciales que parten de la Piazzetta y discurren por Via Camerelle y Via Le Botteghe.",
    },
    "capri-port": {
      title: "Puerto en Marina Grande",
      location: "Capri, Italia",
      alt: "Barcos y yates atracados en el puerto de Marina Grande en Capri",
      description:
        "Los porteadores de equipaje de los principales hoteles esperan para llevar el equipaje en un carrito, y usted puede tomar el funicular o un taxi descapotable, ya que no hay tráfico de coches en Capri.",
    },
    "lisbon-hero": {
      title: "Monasterio de los Jerónimos",
      location: "Lisboa, Portugal",
      alt: "Fachada del Monasterio de los Jerónimos en Belém",
      description:
        "Construido en la primera mitad del siglo XVI, se considera la perla y la quintaesencia del estilo manuelino, una mezcla específica portuguesa de gótico y renacimiento.",
    },
    "paris-eiffel": {
      title: "Torre Eiffel",
      location: "París, Francia",
      alt: "Iluminación nocturna de la Torre Eiffel contra el cielo",
      description:
        "El monumento arquitectónico más famoso de París, considerado un símbolo de la ciudad y, a veces, de toda Francia.",
    },
    "paris-louvre": {
      title: "Louvre",
      location: "París, Francia",
      alt: "Pirámide de cristal frente al Palacio del Louvre en París",
      description:
        "Uno de los museos más grandes del mundo, es también la institución de este tipo más visitada del mundo.",
    },
    "paris-panteon": {
      title: "Vista del Panteón desde la Place du Pantheon",
      location: "París, Francia",
      alt: "Fachada del Panteón en París vista desde la plaza",
      description:
        "Panteón – un edificio en el Barrio Latino de París, erigido a finales del siglo XVIII como iglesia dedicada a Santa Genoveva.",
    },
    "paris-snails": {
      title: "Famosos caracoles franceses",
      location: "París, Francia",
      alt: "Plato de caracoles a la borgoñona preparados",
      description:
        "Es difícil imaginar la cocina del Sena, y especialmente del Ródano, sin un delicioso caracol en el plato.",
    },
    "paris-1": {
      title: "Biblioteca Nacional de Francia, sede Richelieu, Sala Oval",
      location: "París, Francia",
      alt: "Interior de la Sala Oval de la Biblioteca Nacional de Francia",
    },
    "paris-2": {
      title: "Versalles, Templo del Amor",
      location: "Versalles, Francia",
      alt: "Templo del Amor en los jardines de Versalles",
    },
    "paris-3": {
      title: "Magníficos jardines históricos", // Podría ser más específico, ej. Jardín de las Tullerías
      location: "París, Francia",
      alt: "Paseo en un jardín francés en París",
    },
    "paris-4": {
      title: "Fauno danzante", // Mejor que la descripción
      location: "París, Francia",
      alt: "Escultura del Fauno danzante",
    },
    "frankfurt-hero": {
      title: "Antigua Ópera (Alte Oper), Fráncfort",
      location: "Fráncfort del Meno, Alemania",
      alt: "Edificio de la Antigua Ópera en Fráncfort de noche",
      description:
        "Elevándose sobre una pintoresca plaza adornada con una elegante fuente se encuentra la Ópera, que presenta una fachada de estilo renacentista.",
    },
    "berlin-gate": {
      title: "Puerta de Brandeburgo",
      location: "Berlín, Alemania",
      alt: "Puerta de Brandeburgo de noche",
      description:
        "La Puerta de Brandeburgo como símbolo de Paz y Libertad desde el 3 de octubre de 1990, aniversario de la reunificación alemana.",
    },
    "berlin-museum": {
      title: "Museo Antiguo",
      location: "Berlín, Alemania",
      alt: "Columnata frente al Museo Antiguo en Berlín",
      description:
        "El museo fue construido para hacer accesibles al público en general las colecciones de arte antiguo, por orden del rey prusiano Federico Guillermo III.",
    },
    "berlin-victory-column": {
      title: "Columna de la Victoria",
      location: "Berlín, Alemania",
      alt: "Estatua dorada en la cima de la Columna de la Victoria en Berlín",
      description:
        "La columna ubicada en el parque Großer Tiergarten de Berlín conmemora la victoria de Prusia sobre Dinamarca en la Guerra de los Ducados de 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven, Haydn y Mozart",
      location: "Berlín, Alemania",
      alt: "Monumento a los tres compositores en el parque Tiergarten",
      description:
        "Un monumento al aire libre a los compositores clásicos Ludwig van Beethoven, Joseph Haydn y Wolfgang Amadeus Mozart, que data de 1904.",
    },
    "prague-bridge": {
      title: "Vista del río Moldava en Praga",
      location: "Praga, República Checa",
      alt: "Puente de Carlos sobre el río Moldava en Praga al atardecer",
      description:
        "Toda Praga se refleja en el Moldava y coquetea con él como si fuera un espejo mágico.",
    },
    "prague-wit": {
      title: "Tesoro de San Vito",
      location: "Praga, República Checa",
      alt: "Relicario en el Tesoro de la Catedral de San Vito",
      description:
        "Artefactos en el Tesoro de la Catedral de San Vito en el Castillo de Praga.",
    },
    "prague-dance": {
      title: "Casa Danzante",
      location: "Praga, República Checa",
      alt: "Edificio moderno Casa Danzante en Praga",
      description:
        "Un edificio vanguardista diseñado por la pareja de arquitectos Vlado Milunić y Frank Gehry en estilo deconstructivista.",
    },
    "prague-kafka": {
      title: "Cabeza giratoria de Franz Kafka",
      location: "Praga, República Checa",
      alt: "Escultura cinética Cabeza de Franz Kafka en Praga",
      description:
        "David Černý diseñó esta controvertida obra de arte para el edificio comercial y de oficinas 'Quadrio' en la calle Národní třída.",
    },
  },
  // About Section
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
      "Lo que comenzó como un pequeño grupo de intercambio de fotos entre compañeros de clase que estudiaban en Polonia se convirtió en una plataforma que conecta a estudiantes fotógrafos de diversos países, orígenes y disciplinas académicas que comparten un amor común por la exploración y la narración visual.",
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
        "Nuestro equipo está compuesto en su totalidad por estudiantes fotógrafos, escritores y desarrolladores web de universidades de todo el mundo. Cada colaborador aporta su perspectiva y experiencia únicas a la plataforma.",
    },
    feature1: {
      title: "Estudiantes Fotógrafos",
      description:
        "Fotos tomadas por estudiantes internacionales de todo el mundo",
    },
    feature2: {
      title: "Experiencias Auténticas",
      description:
        "Momentos reales de viaje más allá de los típicos lugares turísticos",
    },
    feature3: {
      title: "Muchos Viajes",
      description:
        "Una creciente colección de fotos de todo el continente europeo",
    },
    image1: { title: "Lisboa", description: "Monasterio de los Jerónimos." },
    image2: {
      title: "Alemania y Francia",
      description: "Un viaje inolvidable por Alemania y Francia.",
    },
    image3: {
      title: "Nápoles",
      description: "Paisajes extraordinarios de Nápoles.",
    },
  },
  // Featured Section
  featured: {
    title: "Destacado: Primavera en París",
    description1:
      "París en primavera es un sueño para los estudiantes fotógrafos. La ciudad cobra vida con cerezos en flor, terrazas de cafés y la luz perfecta para capturar monumentos icónicos.",
    description2:
      "Nuestra colección destacada muestra la magia de París a través de los ojos de estudiantes polacos que pasaron sus vacaciones de estudio en el extranjero en la Ciudad de la Luz.",
    exploreLink: "Explora la Colección de París",
    image1Alt: "Torre Eiffel en primavera",
    image2Alt: "Río Sena en París",
    image3Alt: "Café parisino",
    image4Alt: "Museo del Louvre",
  },
  // Contact Section
  contact: {
    title: "Contacto",
    description:
      "¿Tienes preguntas o quieres enviar tus propias fotos de viajes de estudiantes? ¡Nos encantaría saber de ti!",
    pageTitle: "Ponte en Contacto",
    getInTouch: "¿Cómo Podemos Ayudar?",
    getInTouchDescription:
      "Ya sea que quieras enviar tus fotos de viaje, tengas preguntas sobre nuestra plataforma o simplemente quieras saludar, estamos aquí para ayudar.",
    email: {
      title: "Envíanos un Correo",
      description: "Para consultas generales y envío de fotos",
    },
    location: {
      title: "Nuestra Ubicación",
      description:
        "Visita nuestra oficina del colectivo estudiantil (con cita previa)",
      address: "Universidad de Gdansk, ul. Bażyńskiego 8, 80-309 Gdansk",
    },
    phone: {
      title: "Llámanos",
      description: "Disponible de lunes a viernes de 10 AM a 6 PM CET",
    },
    form: {
      name: "Tu Nombre",
      namePlaceholder: "Ingresa tu nombre",
      nameError: "El nombre es obligatorio",
      email: "Tu Correo Electrónico",
      emailPlaceholder: "Ingresa tu correo electrónico",
      emailError: "Se requiere un correo electrónico válido",
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
  // Footer
  footer: {
    description:
      "Un viaje visual por Europa capturado por la lente de estudiantes que exploran los rincones más bellos del continente.",
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
  },
  // Slider Controls
  slider: {
    previous: "Diapositiva anterior",
    next: "Diapositiva siguiente",
    goToSlide: "Ir a la diapositiva {{index}}",
  },
  // Lightbox
  lightbox: {
    close: "Cerrar visor",
    previous: "Foto anterior",
    next: "Foto siguiente",
  },
  // Theme Toggle
  theme: {
    toggleLight: "Cambiar a modo claro",
    toggleDark: "Cambiar a modo oscuro",
  },
  // Language
  language: {
    changeLanguage: "Cambiar idioma",
  },
  // Home
  home: {
    heroAriaLabel: "Destinos destacados",
  },

  // --- SECTIONS FOR INFO PAGES ---
  privacyPolicy: {
    title: "Política de Privacidad",
    metaDescription: "Lee la política de privacidad del servicio EuroTrek.",
    introduction:
      "Bienvenido a la Política de Privacidad de EuroTrek. Tu privacidad es importante para nosotros y nos comprometemos a proteger tus datos personales de acuerdo con las leyes aplicables, incluido el RGPD.",
    section1Title: "1. ¿Qué información recopilamos?",
    section1Content:
      "Recopilamos la información que nos proporcionas directamente (p. ej., a través del formulario de contacto: nombre, dirección de correo electrónico, contenido del mensaje) y los datos recopilados automáticamente cuando utilizas el servicio (p. ej., dirección IP, tipo de navegador, información del dispositivo, datos de actividad del servicio a través de cookies - consulta la Política de Cookies).",
    section2Title: "2. ¿Cómo utilizamos tu información?",
    section2Content:
      "Utilizamos tus datos para proporcionar y mejorar nuestros servicios, comunicarnos contigo (responder a consultas), analizar el tráfico del sitio web, garantizar la seguridad del servicio y cumplir con las obligaciones legales.",
    contactTitle: "Contacto de Privacidad",
    contactContent:
      "Para asuntos relacionados con el procesamiento de tus datos personales o el ejercicio de tus derechos, contáctanos en: puaro@vp.pl",
  },
  termsOfUse: {
    title: "Términos de Uso",
    metaDescription: "Lee los términos de uso del servicio EuroTrek.",
    introduction:
      "Estos Términos de Uso rigen el uso del sitio web de EuroTrek. Al utilizar el servicio, aceptas las siguientes disposiciones.",
    section1Title: "1. Reglas Generales y Aceptación de los Términos",
    section1Content:
      "El servicio EuroTrek es una plataforma que muestra fotografía de viajes. Los usuarios están obligados a utilizar el servicio de acuerdo con la ley y las buenas prácticas. Está prohibido publicar contenido ilegal, ofensivo o que viole los derechos de terceros.",
    contactTitle: "Contacto de Términos de Uso",
    contactContent:
      "Las preguntas sobre estos Términos de Uso deben dirigirse a: puaro@vp.pl",
  },
  accessibility: {
    title: "Declaración de Accesibilidad",
    metaDescription:
      "Conoce nuestro compromiso con la accesibilidad digital en EuroTrek.",
    introduction:
      "EuroTrek se esfuerza por garantizar la accesibilidad digital del servicio para la audiencia más amplia posible, incluidas las personas con discapacidades. Trabajamos continuamente para mejorar la interfaz de usuario y aplicar los estándares de accesibilidad relevantes, como las Pautas de Accesibilidad al Contenido Web (WCAG).",
    section1Title: "1. Nuestros Esfuerzos de Accesibilidad",
    section1Content:
      "Nuestro objetivo es implementar soluciones como: usar código HTML semántico, garantizar la navegación por teclado, proporcionar un contraste de color adecuado, texto alternativo para imágenes y probar el servicio con diversas tecnologías de asistencia.",
    contactTitle: "Comentarios e Información de Contacto",
    contactContent:
      "Si encuentras barreras de accesibilidad en nuestro servicio, por favor contáctanos. Tus comentarios son valiosos para nosotros. Contáctanos en: puaro@vp.pl",
  },
  cookiePolicy: {
    title: "Política de Cookies",
    metaDescription: "Aprende cómo EuroTrek utiliza las cookies.",
    introduction:
      "Nuestro servicio utiliza cookies para garantizar el correcto funcionamiento del sitio, mejorar tu experiencia y para fines analíticos y de marketing (con tu consentimiento).",
    section1Title: "1. ¿Qué son las cookies?",
    section1Content:
      "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, smartphone) cuando visitas sitios web. Permiten que el sitio 'recuerde' tus acciones y preferencias durante un período de tiempo.",
    section2Title: "2. ¿Qué tipos de cookies utilizamos?",
    section2Content: "Utilizamos varios tipos de cookies, incluyendo:",
    type1:
      "Cookies esenciales: Necesarias para el funcionamiento básico del servicio (p. ej., sesión de usuario). No requieren consentimiento.",
    type2:
      "Cookies analíticas: Nos ayudan a entender cómo los usuarios interactúan con el sitio (p. ej., Google Analytics). Requieren tu consentimiento.",
    type3:
      "Cookies funcionales: Permiten recordar tus elecciones y preferencias (p. ej., idioma). Pueden requerir consentimiento.",
    type4:
      "Cookies de marketing: Se utilizan para mostrar publicidad personalizada (p. ej., Píxel de Facebook). Requieren tu consentimiento.",
    section3Title: "3. Gestión de Cookies",
    section3Content:
      "Puedes gestionar tus consentimientos de cookies en cualquier momento utilizando la herramienta de gestión de consentimientos disponible en nuestro sitio (haz clic en el botón 'Configuración de Cookies'). También puedes cambiar la configuración de cookies en tu navegador web.",
    settingsError:
      "No se pudo abrir la configuración de cookies. Contacta con el soporte técnico o intenta gestionar la configuración en tu navegador.",
    settingsInfoPlaceholder:
      "Al hacer clic en el botón se abrirá el panel de gestión de configuración de cookies.",
    contactTitle: "Contacto de Política de Cookies",
    contactContent:
      "Si tienes preguntas sobre nuestra política de cookies, contáctanos: puaro@vp.pl",
  },
  faq: {
    title: "Preguntas Frecuentes (FAQ)",
    metaDescription:
      "Encuentra respuestas a las preguntas más comunes sobre EuroTrek.",
    q1: "Pregunta 1: ¿Cómo puedo enviar mis fotos?",
    a1: "Actualmente, recopilamos fotos de estudiantes afiliados. Si estás interesado en colaborar, contáctanos a través del formulario de contacto, describiendo brevemente tus viajes y portafolio.",
    q2: "Pregunta 2: ¿Es gratuito el uso del servicio?",
    a2: "Sí, navegar por las fotos y el contenido del servicio EuroTrek es completamente gratuito para todos los usuarios.",
    q3: "Pregunta 3: ¿Quién posee los derechos de autor de las fotos?",
    a3: "Los derechos de autor de las fotos pertenecen a los estudiantes autores. EuroTrek tiene una licencia para publicarlas en el servicio. Los detalles se especifican en el acuerdo con el autor y en nuestros Términos de Uso.",
    stillHaveQuestions: "¿Aún tienes preguntas?",
    contactUs: "Contáctanos",
  },
  sitemap: {
    title: "Mapa del Sitio",
    metaDescription: "Navega por la estructura del sitio EuroTrek.",
    introduction:
      "A continuación se muestra una lista de las principales secciones y páginas disponibles en el servicio EuroTrek para ayudarte a navegar.",
  },
  support: {
    title: "Ayuda y Soporte",
    metaDescription:
      "¿Necesitas ayuda? Encuentra información de contacto y soporte para EuroTrek.",
    introduction:
      "¡Estamos aquí para ayudar! Si tienes preguntas sobre cómo funciona el servicio, has encontrado un problema técnico o tienes otras inquietudes, utiliza las opciones de soporte disponibles.",
    faqTitle: "Consulta Primero las Preguntas Frecuentes",
    faqDescription:
      "Muchas respuestas a preguntas comunes se pueden encontrar en nuestra sección de Preguntas Frecuentes (FAQ).",
    goToFaq: "Ir a Preguntas Frecuentes",
    contactFormTitle: "Formulario de Contacto",
    contactFormDescription:
      "La mejor manera de contactarnos para la mayoría de los asuntos es enviando un mensaje a través de nuestro formulario de contacto.",
    goToContact: "Ir a Contacto",
    phoneTitle: "Soporte Telefónico",
    phoneDescription:
      "Para asuntos técnicos urgentes, puedes contactarnos por teléfono durante [ej. 10:00 AM - 4:00 PM] de lunes a viernes.",
    phoneNumber: "Llama: +34 000 000 000", // Número de ejemplo
    responseInfo:
      "Nos esforzamos por responder a las consultas enviadas a través del formulario de contacto dentro de 1-2 días hábiles.",
  },
};
