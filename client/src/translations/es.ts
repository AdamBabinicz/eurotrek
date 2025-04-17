import { Description } from "@radix-ui/react-toast"; // Manteniendo la importación original

export default {
  // Common / Común
  common: {
    no_photos_data: "No hay datos de fotos disponibles.",
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
    exploreTitle: "Explora Destinos",
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
        "La Ciudad de la Luz a través de los ojos de un estudiante: capturando el encanto de la arquitectura y la cultura parisina.",
    },
    "rome-hero": {
      // La clave apunta a Nápoles según el contenido original polaco
      location: "Nápoles, Italia",
      description:
        "Nápoles es un lugar donde la vida late al ritmo del espresso, las conversaciones en la calle y el aroma de la pizza recién horneada flotando en el cálido aire mediterráneo.",
    },
    "lisbon-hero": {
      location: "Lisboa, Portugal",
      description:
        "Lisboa es una ciudad llena de luz, donde las calles adoquinadas serpentean entre casas de colores y la vida fluye tranquilamente al ritmo del fado y el aroma de los 'pastéis de nata' frescos.",
    },
    "frankfurt-hero": {
      // Usando la descripción más precisa de photos["frankfurt-hero"]
      location: "Fráncfort del Meno, Alemania",
      description:
        "Elevándose sobre una pintoresca plaza adornada con una elegante fuente se encuentra la Antigua Ópera (Alte Oper), con una fachada de estilo renacentista.",
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
      // La clave probablemente se refiere a Alfama según la descripción
      title: "Tejados del Casco Antiguo",
      location: "Lisboa, Portugal",
      description:
        "El barrio más antiguo de Lisboa es Alfama, construido en la ladera sobre el Tajo durante la dominación árabe. Es aquí donde se puede sentir la atmósfera de la Lisboa medieval.",
    },
    "lisbon-bele": {
      // La clave probablemente se refiere a la Torre de Belém
      title: "Torre de Belém",
      location: "Lisboa, Portugal",
      description:
        "Fortaleza medieval con vistas a la desembocadura del río Tajo.",
    },
    "boca do inferno": {
      title: "Boca do Inferno",
      location: "Cascais, Portugal",
      description:
        "Una sima situada en los acantilados costeros cerca de la ciudad portuguesa de Cascais.",
    },
    "capri-marina": {
      // La clave probablemente se refiere a Faraglioni según la descripción
      title: "Playa Luigia ai Faraglioni",
      location: "Capri, Italia",
      description:
        "Situada en el Mar Tirreno, ocupa el puesto 19 entre las 118 playas de la región napolitana.",
    },
    "paris-hero": {
      // La clave probablemente se refiere a Versalles según la descripción
      title: "Versalles – Perla del Barroco",
      location: "Versalles, Francia", // Ubicación corregida
      alt: "Palacio de Versalles cerca de París",
      description:
        "Versalles es un símbolo de la monarquía absoluta francesa y uno de los ejemplos más magníficos de la arquitectura barroca en el mundo.",
    },
    "naples-view": {
      title: "Carretera junto al Mar Tirreno",
      location: "Nápoles, Italia",
      alt: "Carretera al pie de una montaña",
    },
    "naples-mummy": {
      title: "Molde de una víctima del Vesubio",
      location: "Pompeya, Italia",
      alt: "Víctimas de la erupción del volcán",
      description:
        "Los moldes de los cuerpos fueron descubiertos en 1863 por el arqueólogo Giuseppe Fiorelli. 'Hasta la fecha, no han sido inventariados por razones éticas y por los sentimientos con los que siempre se han tratado los restos humanos'.",
    },
    "naples-stadion": {
      title: "Anfiteatro de Pompeya",
      location: "Pompeya, Italia",
      alt: "Parte del estadio en la antigua ciudad de Pompeya",
      description:
        "El Anfiteatro de Pompeya – un antiguo anfiteatro romano situado en Pompeya. Es la estructura conservada más antigua de su tipo.",
    },
    "naples-museum": {
      title: "Pequeño Donario de Pérgamo (Gálatas)",
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
        "Capri se caracteriza por sus encantadoras calles comerciales que parten de la Piazzetta y recorren Via Camerelle y Via Le Botteghe.",
    },
    "capri-port": {
      title: "Puerto en Marina Grande",
      location: "Capri, Italia",
      alt: "Yates amarrados",
      description:
        "Los porteadores de los principales hoteles esperan para llevar tu equipaje en un carrito, y puedes tomar el funicular o ir en un taxi descapotable, ya que no hay tráfico de coches en Capri.",
    },
    "lisbon-hero": {
      // La clave probablemente se refiere al Monasterio de los Jerónimos según la descripción
      title: "Monasterio de los Jerónimos",
      location: "Lisboa, Portugal",
      alt: "Monasterio de los Jerónimos en Belém",
      description:
        "Construido en la primera mitad del siglo XVI, es considerado la perla y quintaesencia del estilo manuelino, una mezcla singularmente portuguesa de gótico y renacimiento.",
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
        "Uno de los museos más grandes del mundo, es también el museo más visitado de su tipo a nivel mundial.",
    },
    "paris-panteon": {
      title: "Vista del Panteón desde la Place du Panthéon",
      location: "París, Francia",
      alt: "El Panteón desde la Place du Panthéon",
      description:
        "El Panteón – un edificio en el Barrio Latino de París, erigido a finales del siglo XVIII como iglesia dedicada a Santa Genoveva.",
    },
    "paris-snails": {
      title: "Famosos Caracoles Franceses (Escargots)",
      location: "París, Francia",
      alt: "Plato de caracoles",
      description:
        "Es difícil imaginar la cocina francesa, especialmente a lo largo del Ródano, sin un delicioso caracol en el plato.",
    },
    "frankfurt-hero": {
      // La clave se refiere a la Alte Oper según la descripción
      title: "Antigua Ópera (Alte Oper), Fráncfort",
      location: "Fráncfort del Meno, Alemania",
      alt: "Antigua Ópera (Alte Oper), Fráncfort",
      description:
        "Elevándose sobre una pintoresca plaza adornada con una elegante fuente se encuentra la Antigua Ópera, con una fachada de estilo renacentista.",
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
        "El museo fue construido por orden del rey prusiano Federico Guillermo III para hacer accesibles al público general las colecciones de arte antiguo.",
    },
    "berlin-victory-column": {
      title: "Columna de la Victoria (Siegessäule)",
      location: "Berlín, Alemania",
      alt: "Columna de la Victoria",
      description:
        "La columna situada en el parque Großer Tiergarten de Berlín conmemora la victoria de Prusia sobre Dinamarca en la Guerra de los Ducados de 1864.",
    },
    "berlin-music": {
      title: "Monumento a Beethoven-Haydn-Mozart",
      location: "Berlín, Alemania",
      alt: "Monumento a los tres genios musicales",
      description:
        "Un monumento al aire libre a los compositores clásicos Ludwig van Beethoven, Joseph Haydn y Wolfgang Amadeus Mozart, inaugurado en 1904.",
    },
    "prague-bridge": {
      title: "Vista del río Moldava en Praga",
      location: "Praga, República Checa",
      alt: "Río Moldava en Praga",
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
        "Un edificio vanguardista diseñado por la pareja de arquitectos Vlado Milunić y Frank Gehry en estilo deconstructivista.",
    },
    "prague-kafka": {
      title: "Cabeza giratoria de Franz Kafka",
      location: "Praga, República Checa",
      alt: "Cabeza de Franz Kafka",
      description:
        "David Černý diseñó esta controvertida obra de arte para el edificio comercial y de oficinas 'Quadrio' en la calle Národní třída.",
    },
  },
  // About Section / Sección Sobre nosotros
  about: {
    title: "Sobre EuroTrek",
    description1:
      "EuroTrek es un diario fotográfico colectivo creado por estudiantes universitarios que estudian en Europa (originalmente centrado en Polonia). Nuestra misión es mostrar la belleza, la cultura y las experiencias de los viajes estudiantiles a través de la fotografía auténtica.", // Contexto ligeramente ajustado
    description2:
      "Esta plataforma sirve tanto de inspiración para futuros estudiantes viajeros como de libro de recuerdos para aquellos que ya han emprendido sus aventuras europeas. Todas las fotos son capturadas por estudiantes, mostrando Europa a través de una lente fresca y juvenil.",
    pageTitle: "Sobre Nuestro Viaje",
    pageDescription1:
      "EuroTrek nació de la pasión por la fotografía de viajes y el deseo de capturar las experiencias únicas de los estudiantes exploradores en las ciudades más vibrantes de Europa.",
    pageDescription2:
      "Lo que comenzó como un pequeño grupo compartiendo fotos entre compañeros de clase que estudiaban en Polonia ha crecido hasta convertirse en una plataforma que conecta a estudiantes fotógrafos de diversos países, orígenes y disciplinas académicas, todos compartiendo un amor común por el descubrimiento y la narración visual.",
    pageDescription3:
      "Nuestros colaboradores son estudiantes como tú, que equilibran sus estudios con aventuras por todo el continente, capturando momentos auténticos en el camino.",
    mission: {
      title: "Nuestra Misión",
      description:
        "Inspirar los viajes estudiantiles a través de la narración visual auténtica y fomentar una comunidad de apoyo para jóvenes fotógrafos que exploran Europa.",
    },
    team: {
      title: "El Colectivo Estudiantil",
      description:
        "Nuestro equipo está compuesto en su totalidad por estudiantes fotógrafos, escritores y desarrolladores web de universidades de todo el mundo. Cada colaborador aporta su perspectiva y experiencia únicas a la plataforma.",
    },
    feature1: {
      title: "Fotógrafos Estudiantes",
      description:
        "Fotos capturadas por estudiantes de intercambio de todo el mundo.",
    },
    feature2: {
      title: "Experiencias Auténticas",
      description:
        "Momentos reales de viaje más allá de los lugares turísticos típicos.",
    },
    feature3: {
      title: "Múltiples Destinos",
      description:
        "Una colección creciente de fotos de todo el continente europeo.",
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
  // Featured Section / Sección Destacada
  featured: {
    title: "Destacado: Primavera en París",
    description1:
      "París en primavera es un sueño para los estudiantes fotógrafos. La ciudad cobra vida con cerezos en flor, cafés con terraza y una luz perfecta para capturar monumentos icónicos.",
    description2:
      "Nuestra colección destacada muestra la magia de París a través de los ojos de estudiantes que pasaron su semestre de intercambio en la Ciudad de la Luz.", // Contexto ligeramente ajustado
    exploreLink: "Explora la Colección de París",
    image1Alt: "Torre Eiffel en primavera",
    image2Alt: "Río Sena en París",
    image3Alt: "Café con terraza parisino",
    image4Alt: "Museo del Louvre",
  },
  // Contact Section / Sección de Contacto
  contact: {
    title: "Contacto",
    description:
      "¿Tienes preguntas o quieres enviar tus propias fotos de viajes de estudiantes? ¡Nos encantaría saber de ti!",
    pageTitle: "Ponte en Contacto",
    getInTouch: "¿Cómo Podemos Ayudarte?",
    getInTouchDescription:
      "Ya sea que quieras enviar tus fotos de viaje, tengas preguntas sobre nuestra plataforma o simplemente quieras saludar, estamos aquí para ayudar.",
    email: {
      title: "Envíanos un Correo Electrónico",
      description: "Para consultas generales y envío de fotos",
    },
    location: {
      title: "Nuestra Ubicación",
      description: "Visita el centro de nuestro colectivo estudiantil",
      address: "University Creative Hub, European Campus, Amsterdam", // Mantenido como está, asumiendo que es un nombre de lugar específico
    },
    phone: {
      title: "Llámanos",
      description: "Disponible de lunes a viernes de 10 AM a 6 PM HEC", // CET -> HEC (Hora de Europa Central)
    },
    form: {
      name: "Tu Nombre",
      namePlaceholder: "Introduce tu nombre",
      nameError: "El nombre es obligatorio",
      email: "Tu Correo Electrónico",
      emailPlaceholder: "Introduce tu dirección de correo electrónico",
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
  // Footer / Pie de página
  footer: {
    description:
      "Un viaje visual por Europa capturado por la lente de estudiantes que exploran los mejores rincones del continente.",
    quickLinks: "Enlaces Rápidos",
    resources: "Recursos",
    parisCollection: "Colección de París",
    submitPhotos: "Enviar Fotos",
    privacyPolicy: "Política de Privacidad",
    termsOfUse: "Términos de Uso",
    accessibility: "Accesibilidad",
    copyright: "© {{year}} EuroTrek. Todos los derechos reservados.", // Placeholder de año añadido
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
    close: "Cerrar",
    previous: "Foto anterior",
    next: "Siguiente foto",
  },
  // Theme Toggle / Selector de tema
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
};
