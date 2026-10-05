import type { CaseStudy, Locale } from './types';

const base = '/projects/driftler';

function make(l: Locale): CaseStudy {
  const T = (es: string, en: string) => (l === 'es' ? es : en);
  return {
    meta: [T('Diseño y desarrollo', 'Design and development'), T('Proyecto personal', 'Personal project'), '2026'],
    hero: {
      src: `${base}/cover.jpg`,
      alt: T(
        'Portada de Driftler: titular «El coraje de migrar, la fuerza de unirse» sobre fondo amarillo y un pase de embarque Working Holiday',
        'Driftler home page: the headline “The courage to migrate, the strength to unite” on a yellow background next to a Working Holiday boarding pass'
      ),
    },
    glance: [
      { label: T('Rol', 'Role'), value: T('Diseño de producto, UX/UI, identidad visual y desarrollo', 'Product design, UX/UI, visual identity and development') },
      { label: T('Tipo', 'Type'), value: T('Proyecto personal, en línea en driftler.com', 'Personal project, live at driftler.com') },
      { label: T('Para', 'For'), value: T('Viajeros con visa Working Holiday', 'Travellers on a Working Holiday visa') },
      { label: T('Cómo', 'How'), value: T('Hecho por mí de punta a punta, programando con IA (vibe coding) sobre bases de programación, UX/UI y diseño', 'Built by me end to end, coding with AI (vibe coding) on a foundation of programming, UX/UI and design') },
    ],
    toc: [
      { id: 'idea', label: T('La idea', 'The idea') },
      { id: 'decisions', label: T('Decisiones de producto', 'Product decisions') },
      { id: 'identity', label: T('Identidad visual', 'Visual identity') },
      { id: 'screens', label: T('Pantallas', 'Screens') },
      { id: 'process', label: T('Cómo lo hice', 'How I built it') },
    ],
    sections: [
      {
        id: 'idea',
        title: T('Un tablón de avisos hecho por y para viajeros', 'A bulletin board made by and for travellers'),
        blocks: [
          { type: 'p', text: T('Driftler es la comunidad Working Holiday: un tablón donde quienes viajan publican y encuentran alojamiento, trabajo temporal y compañeros de ruta. Sin algoritmo ni relleno: lo que la gente publica es lo que ves.', 'Driftler is the Working Holiday community: a board where travellers post and find accommodation, temporary work and travel companions. No algorithm, no filler: what people post is what you see.') },
          { type: 'p', text: T('Su idea central es que nadie viaja solo. Quienes ya recorrieron el camino ayudan a quienes recién llegan, con un cuarto libre, un dato de trabajo o un consejo sobre un trámite.', 'Its core idea is that nobody travels alone. People who have already walked the road help the ones who just arrived, with a spare room, a tip about a job or advice on paperwork.') },
        ],
      },
      {
        id: 'decisions',
        title: T('Decisiones de producto', 'Product decisions'),
        subtitle: T('Cada regla busca que la información sea fresca y que viajar sea más seguro.', 'Every rule aims to keep information fresh and make travelling safer.'),
        blocks: [
          {
            type: 'cards',
            items: [
              { title: T('Los avisos caducan', 'Ads expire'), text: T('Cada aviso dura 30 días como máximo y luego desaparece. Quien publica elige cuánto tiempo estará visible, así no quedan cuartos ocupados ni trabajos de hace meses.', 'Every ad lasts 30 days at most and then disappears. The poster chooses how long it stays visible, so there are no rooms already taken or jobs from months ago.') },
              { title: T('Explorar sin cuenta', 'Browse without an account'), text: T('Se ve el aviso completo sin registrarse. La cuenta, gratuita, sirve para guardar avisos, seguir destinos y contactar.', 'The full ad is visible without signing up. The free account is for saving ads, following destinations and getting in touch.') },
              { title: T('Privacidad por defecto', 'Private by default'), text: T('El correo nunca se muestra. De ti solo se comparte tu WhatsApp, cuando contactas o te contactan.', 'Your email is never shown. Only your WhatsApp is shared, when you contact someone or they contact you.') },
              { title: T('Categorías concretas', 'Concrete categories'), text: T('Alojamiento, trabajo, social y rutas, y otro. Se filtra por categoría o se busca por palabra clave o ciudad.', 'Accommodation, work, social and routes, and other. Filter by category or search by keyword or city.') },
              { title: T('Destinos y favoritos', 'Destinations and favourites'), text: T('Se sigue un país para ver lo último de ese lugar en la sección «Para ti» y se guardan avisos con una estrella.', 'You follow a country to see its latest ads in the “For you” section, and save ads with a star.') },
              { title: T('Consejos para viajar tranquilo', 'Tips to travel safely'), text: T('Una guía visible advierte contra pagos por adelantado, depósitos sin contrato y cobros por dar trabajo.', 'A visible guide warns against upfront payments, deposits without a contract and fees for giving someone a job.') },
            ],
          },
          { type: 'h3', text: T('El flujo, en cuatro pasos', 'The flow, in four steps') },
          {
            type: 'list',
            items: [
              T('Explora sin cuenta: filtra por categoría o busca por palabra clave o ciudad.', 'Browse without an account: filter by category or search by keyword or city.'),
              T('Crea tu cuenta: nombre, correo y contraseña, en un minuto.', 'Create your account: name, email and password, in a minute.'),
              T('Sigue destinos y guarda lo que te interesa.', 'Follow destinations and save what interests you.'),
              T('Contacta por WhatsApp con el aviso ya adjunto, o publica el tuyo con hasta 5 fotos y los días que durará.', 'Get in touch on WhatsApp with the ad already attached, or post your own with up to 5 photos and how many days it will run.'),
            ],
          },
        ],
      },
      {
        id: 'identity',
        title: T('Identidad visual: el Working Holiday Pass', 'Visual identity: the Working Holiday Pass'),
        blocks: [
          { type: 'p', text: T('El concepto gráfico es un pase de embarque con timbres de pasaporte, que remite a la llegada a un país nuevo. Cada sección de la web cambia de color, como los sellos en un pasaporte, sobre una base amarilla cálida.', 'The graphic concept is a boarding pass with passport stamps, evoking arrival in a new country. Each section of the site changes colour, like stamps in a passport, over a warm yellow base.') },
          {
            type: 'swatches',
            items: [
              { hex: '#FFD23F', name: T('Amarillo ruta', 'Route yellow'), use: T('Fondo principal', 'Main background') },
              { hex: '#EE4B2B', name: T('Rojo sello', 'Stamp red'), use: T('Acciones principales y énfasis', 'Primary actions and emphasis') },
              { hex: '#18130F', name: T('Tinta', 'Ink'), use: T('Texto y botones oscuros', 'Text and dark buttons') },
            ],
          },
          {
            type: 'cards',
            items: [
              { title: 'Instrument Serif', text: T('Titulares grandes, con la palabra clave en cursiva y de otro color.', 'Large headlines, with the key word in italics and a different colour.') },
              { title: 'Instrument Sans', text: T('Texto de lectura y botones.', 'Reading text and buttons.') },
              { title: 'DM Mono', text: T('Etiquetas, como el «Working Holiday Pass N.º 0001» y los datos del pase.', 'Labels, such as “Working Holiday Pass No. 0001” and the pass details.') },
            ],
          },
        ],
      },
      {
        id: 'screens',
        title: T('Pantallas', 'Screens'),
        blocks: [
          { type: 'image', src: `${base}/home-sections.jpg`, alt: T('Página de inicio completa: titular con el pase de embarque, franja de categorías, secciones «Los avisos caducan» y «Nadie se salva solo», lista de lo que ofrece y llamado a unirse', 'Full home page: headline with the boarding pass, category ticker, the “Ads expire” and “Nobody saves themselves alone” sections, the list of what it offers and a call to join'), caption: T('Inicio: promesa, reglas del juego y categorías.', 'Home: the promise, the rules of the game and the categories.') },
          { type: 'image', src: `${base}/como-funciona.jpg`, alt: T('Página «Cómo funciona Driftler» sobre fondo naranja, con el resumen de tres puntos', 'The “How Driftler works” page on an orange background, with the three-point summary'), caption: T('Cómo funciona: lo esencial en tres líneas, antes de los cuatro pasos.', 'How it works: the essentials in three lines, before the four steps.') },
          { type: 'image', src: `${base}/mobile.jpg`, alt: T('Portada de Driftler en móvil con el titular, dos botones y el pase de embarque', 'Driftler home page on mobile with the headline, two buttons and the boarding pass'), caption: T('En móvil: menú compacto y llamado a crear cuenta siempre a mano.', 'On mobile: compact menu and a create-account button always within reach.'), width: 380 },
        ],
      },
      {
        id: 'process',
        title: T('Cómo lo hice', 'How I built it'),
        blocks: [
          { type: 'p', text: T('Diseñé y construí Driftler yo solo, de punta a punta: producto, interfaz, identidad visual y código. Lo desarrollé programando con IA (vibe coding), apoyado en mis fundamentos de programación, UX/UI y diseño, que vienen de mis estudios y de mi experiencia laboral.', 'I designed and built Driftler on my own, end to end: product, interface, visual identity and code. I developed it by coding with AI (vibe coding), relying on my fundamentals in programming, UX/UI and design, which come from my studies and work experience.') },
          { type: 'p', text: T('Es un proyecto vivo: ya está en línea en driftler.com y crece a medida que la comunidad publica sus primeros avisos.', 'It is a living project: it is already online at driftler.com and grows as the community posts its first ads.') },
        ],
      },
    ],
  };
}

export const driftler: Record<Locale, CaseStudy> = { es: make('es'), en: make('en') };
