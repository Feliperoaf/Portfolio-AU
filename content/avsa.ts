import type { CaseStudy, Locale } from './types';

const base = '/projects/avsa';
const HEADER_CROP = 900 / 2800;

const es: CaseStudy = {
  meta: ['Diseñador UX/UI', 'Laika, agencia digital de Dittborn & Unzueta', '2023'],
  glance: [
    { label: 'Rol', value: 'Diseñador UX/UI' },
    { label: 'Agencia', value: 'Laika, agencia digital de Dittborn & Unzueta' },
    { label: 'Contexto', value: 'Sitio web de AVSA Rent a Car, en Chiloé' },
    { label: 'Alcance', value: 'Landing de una página: sistema visual, componentes reutilizables, textos reescritos, un FAQ nuevo y contacto directo, en versión escritorio y móvil' },
    { label: 'Resultado', value: 'Una interfaz más ordenada, comprensible y coherente con las necesidades reales del usuario' },
    { label: 'Límite', value: 'Sin investigación UX, entrevistas ni pruebas con usuarios' },
  ],
  toc: [
    { id: 'context', label: 'Contexto' },
    { id: 'scope', label: 'Alcance' },
    { id: 'process', label: 'Proceso' },
    { id: 'ui', label: 'Diseño UI' },
    { id: 'before', label: 'Antes' },
    { id: 'desktop', label: 'Escritorio' },
    { id: 'mobile', label: 'Móvil' },
  ],
  hero: { src: `${base}/cover.jpg`, alt: 'AVSA Rent a Car: pantallas móviles del rediseño' },
  sections: [
    {
      id: 'context',
      title: 'Contexto del proyecto',
      blocks: [
        { type: 'p', text: 'El cliente requería rediseñar su sitio web para modernizarlo visualmente, reforzar la identidad territorial de Chiloé y mejorar la claridad del servicio ofrecido.' },
        { type: 'p', text: 'El encargo consistió en desarrollar una landing informativa con navegación por secciones utilizando anclas, centrada principalmente en el diseño UI, con aplicación de principios de usabilidad y buenas prácticas de lectura.' },
        { type: 'p', text: 'Este proyecto no contempló investigación UX, entrevistas ni pruebas con usuarios. El diseño se realizó priorizando claridad visual, consistencia y una experiencia de navegación intuitiva.' },
        { type: 'p', text: 'Aunque el enfoque principal del proyecto fue diseño UI, durante el proceso se realizaron mejoras clave en contenido y estructura informativa que aportaron significativamente a la experiencia del usuario.' },
      ],
    },
    {
      id: 'scope',
      title: 'Alcance del diseño',
      blocks: [
        { type: 'h3', text: 'Diseño UI' },
        { type: 'list', items: ['Sistema visual completo: colores, tipografías, espaciado, iconografía.', 'Componentes reutilizables.', 'Diseño responsive para escritorio y móvil.'] },
        { type: 'h3', text: 'Reorganización del contenido' },
        { type: 'p', text: 'El sitio original contaba con textos poco claros, desactualizados y con inconsistencias de tono. Se reescribieron los textos principales:' },
        { type: 'list', items: ['Hero / Mensaje de valor', 'Sección Nosotros', 'Sección de Flota', 'Módulo de Leasing Operativo', 'Términos y Condiciones'] },
        { type: 'p', text: 'Objetivo de incluir esta mejora dentro del rediseño:' },
        { type: 'list', items: ['Clarificar la propuesta de valor de AVSA.', 'Mejorar la comprensión del servicio sin añadir complejidad.', 'Generar un tono coherente y profesional en todo el sitio.', 'Hacer la lectura más simple, directa y alineada con la identidad visual.'] },
        { type: 'h3', text: 'Ajustes de usabilidad' },
        { type: 'p', text: 'Entre los principales ajustes se incluyen:' },
        { type: 'list', items: [
          'Mejor legibilidad mediante ajustes tipográficos y mayor contraste.',
          'Jerarquía visual más clara para facilitar la comprensión inmediata de la oferta y los pasos para arrendar.',
          'Llamados a la acción más visibles y consistentes, orientados a mejorar la conversión.',
          'Integración de imágenes relevantes que apoyan la comprensión del servicio.',
          'Incorporación de un FAQ, inexistente en la versión anterior, para reducir fricción y resolver dudas clave.',
          'Canal de contacto directo para simplificar el proceso de arriendo y disminuir pasos innecesarios.',
          'Mejoras básicas de accesibilidad, como alineación, espaciados, etiquetas claras y elementos interactivos distinguibles.',
        ] },
      ],
    },
    {
      id: 'limits',
      title: 'Limitaciones',
      blocks: [{ type: 'note', text: 'El proyecto no incluyó investigación UX, entrevistas, testing o benchmarks profundos.' }],
    },
    {
      id: 'process',
      title: 'Proceso de diseño',
      blocks: [
        { type: 'p', text: 'Se decidió trabajar bajo los principios de:' },
        { type: 'cards', items: [
          { title: 'Diseño Visual First (UI-driven)', text: 'Ya que el cliente requería modernización y claridad visual.' },
          { title: 'Consistency over novelty', text: 'Privilegiar patrones conocidos de navegación.' },
          { title: 'Simplicidad', text: 'Un "one page" de estructura ligera, lectura rápida, secciones delimitadas.' },
          { title: 'Narrativa territorial', text: 'Uso de fotografías del entorno para reforzar identidad local y apariencia "outdoor".' },
        ] },
        { type: 'h3', text: 'Usabilidad y accesibilidad' },
        { type: 'p', text: 'Aunque no existió investigación UX, se incorporaron buenas prácticas:' },
        { type: 'cards', items: [
          { title: 'Ley de Jakob', text: 'Se mantuvieron patrones reconocidos de navegación, especialmente en booking.' },
          { title: 'Ley de Fitts', text: 'Botones y CTAs con áreas clickeables amplias.' },
          { title: 'Contraste AA', text: 'Uso asegurado de texto legible sobre fondos oscuros y claros.' },
          { title: 'Ley de proximidad', text: 'Agrupación de contenido relacionado para lectura rápida.' },
          { title: 'Escaneabilidad', text: 'Estructura con bloques independientes para evitar ruido visual.' },
          { title: 'Navegación persistente (menú lateral)', text: 'Ayuda a no perder contexto en un sitio one-page extenso.' },
        ] },
      ],
    },
    {
      id: 'ui',
      title: 'Diseño UI',
      subtitle: 'Mejora de la identidad y legibilidad',
      blocks: [
        { type: 'h3', text: 'Tipografía' },
        { type: 'typescale', family: 'DM Sans', weights: 'Medium · Semi Bold · Bold', rows: [
          { label: 'H1', font: 'DM Sans Bold/Medium', size: '50/60' },
          { label: 'H2', font: 'DM Sans Bold', size: '48/20' },
          { label: 'H3', font: 'DM Sans Bold', size: '32/24' },
          { label: 'Body 1', font: 'DM Sans Bold', size: '18/60' },
          { label: 'Body 2', font: 'DM Sans Medium', size: '16/60' },
          { label: 'Button', font: 'DM Sans Bold', size: '24/14' },
        ] },
        { type: 'h3', text: 'Paleta de colores' },
        { type: 'swatches', items: [
          { hex: '#1A1A1A', name: 'Neutral Black', use: 'Texto base. Textos principales, títulos, contenido.' },
          { hex: '#FFFFFF', name: 'Base Surface', use: 'Fondo general. Fondo del sitio, secciones primarias.' },
          { hex: '#171F14', name: 'Deep Olive Neutral', use: 'Fondo de formularios y menú activo, secciones de contraste, módulos oscuros de contenido.' },
          { hex: '#F8E2DF', name: 'Soft Accent Tint', use: 'FAQ, bloques informativos suaves, tarjetas de soporte.' },
          { hex: '#CC433C', name: 'Primary Accent Red', use: 'Botones primarios, iconos, llamados a la acción, indicadores visuales.' },
        ] },
        { type: 'h3', text: 'Botones' },
        { type: 'buttons', items: [
          { label: 'ENVIAR', variant: 'dark', states: [
            { state: 'Default', bg: '#171F14', text: '#FFFFFF' },
            { state: 'Hover', bg: '#171F14', text: '#FFFFFF' },
            { state: 'Focus', bg: '#171F14', text: '#FFFFFF', ring: '#CC433C' },
          ] },
          { label: 'Reservar', variant: 'light', states: [
            { state: 'Default', bg: '#E7E7E7', text: '#171F14' },
            { state: 'Hover', bg: '#D7D7D7', text: '#171F14' },
            { state: 'Focus', bg: '#E7E7E7', text: '#171F14', ring: '#CC433C' },
          ] },
        ] },
      ],
    },
    {
      id: 'before',
      title: 'Pantallas antiguas',
      blocks: [
        { type: 'p', text: 'Pantallas del sitio antes del proceso de rediseño.' },
        { type: 'image', src: `${base}/old-screens.webp`, alt: 'Sitio original de AVSA antes del rediseño', cropTop: HEADER_CROP },
      ],
    },
    {
      id: 'desktop',
      title: 'Versión escritorio',
      blocks: [
        { type: 'p', text: 'Optimizada para una experiencia amplia, visual y cómoda en escritorio.' },
        { type: 'image', src: `${base}/desktop.webp`, alt: 'Rediseño de AVSA en escritorio', cropTop: HEADER_CROP },
      ],
    },
    {
      id: 'mobile',
      title: 'Versión móvil',
      blocks: [
        { type: 'p', text: 'Diseñada para una navegación clara y accesible en pantallas pequeñas.' },
        { type: 'image', src: `${base}/mobile.webp`, alt: 'Rediseño de AVSA en móvil', cropTop: HEADER_CROP },
      ],
    },
  ],
};

const en: CaseStudy = {
  meta: ['UX/UI Designer', 'Laika, the digital agency of Dittborn & Unzueta', '2023'],
  glance: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Agency', value: 'Laika, the digital agency of Dittborn & Unzueta' },
    { label: 'Context', value: 'Website for AVSA Rent a Car, in Chiloé' },
    { label: 'Scope', value: 'One-page landing: visual system, reusable components, rewritten copy, a new FAQ and direct contact, in desktop and mobile versions' },
    { label: 'Outcome', value: 'A more orderly, understandable interface that fits the real needs of users' },
    { label: 'Limit', value: 'No UX research, interviews or user testing' },
  ],
  toc: [
    { id: 'context', label: 'Context' },
    { id: 'scope', label: 'Scope' },
    { id: 'process', label: 'Process' },
    { id: 'ui', label: 'UI design' },
    { id: 'before', label: 'Before' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'mobile', label: 'Mobile' },
  ],
  hero: { src: `${base}/cover.jpg`, alt: 'AVSA Rent a Car: mobile screens of the redesign' },
  sections: [
    {
      id: 'context',
      title: 'Project context',
      blocks: [
        { type: 'p', text: "The client needed to redesign their website to modernize its look, reinforce the territorial identity of Chiloé and make the service clearer." },
        { type: 'p', text: 'The brief was to build an informative landing page with section-based anchor navigation, focused mainly on UI design and applying usability principles and good reading practices.' },
        { type: 'p', text: 'This project did not include UX research, interviews or user testing. The design prioritized visual clarity, consistency and an intuitive browsing experience.' },
        { type: 'p', text: 'Although the main focus was UI design, key improvements to content and information structure were made along the way, contributing significantly to the user experience.' },
      ],
    },
    {
      id: 'scope',
      title: 'Design scope',
      blocks: [
        { type: 'h3', text: 'UI design' },
        { type: 'list', items: ['A complete visual system: colors, typography, spacing, iconography.', 'Reusable components.', 'Responsive design for desktop and mobile.'] },
        { type: 'h3', text: 'Content restructuring' },
        { type: 'p', text: 'The original site had unclear, outdated copy with inconsistent tone. The main texts were rewritten:' },
        { type: 'list', items: ['Hero / value message', 'About section', 'Fleet section', 'Operating Leasing module', 'Terms and Conditions'] },
        { type: 'p', text: 'Why this improvement was included in the redesign:' },
        { type: 'list', items: ["Clarify AVSA's value proposition.", 'Improve understanding of the service without adding complexity.', 'Create a consistent, professional tone across the whole site.', 'Make reading simpler, more direct and aligned with the visual identity.'] },
        { type: 'h3', text: 'Usability adjustments' },
        { type: 'p', text: 'The main adjustments include:' },
        { type: 'list', items: [
          'Better legibility through typographic adjustments and higher contrast.',
          'Clearer visual hierarchy for immediate understanding of the offer and the steps to rent.',
          'More visible, consistent calls to action aimed at improving conversion.',
          'Relevant imagery that supports understanding of the service.',
          'An FAQ, which the previous version lacked, to reduce friction and answer key questions.',
          'A direct contact channel to simplify the rental process and remove unnecessary steps.',
          'Basic accessibility improvements such as alignment, spacing, clear labels and distinguishable interactive elements.',
        ] },
      ],
    },
    {
      id: 'limits',
      title: 'Limitations',
      blocks: [{ type: 'note', text: 'The project did not include UX research, interviews, testing or in-depth benchmarking.' }],
    },
    {
      id: 'process',
      title: 'Design process',
      blocks: [
        { type: 'p', text: 'We decided to work under these principles:' },
        { type: 'cards', items: [
          { title: 'Visual First design (UI-driven)', text: 'The client needed modernization and visual clarity.' },
          { title: 'Consistency over novelty', text: 'Favor familiar navigation patterns.' },
          { title: 'Simplicity', text: 'A lightweight one-page structure, quick reading and clearly delimited sections.' },
          { title: 'Territorial storytelling', text: 'Photographs of the surroundings to reinforce local identity and an "outdoor" feel.' },
        ] },
        { type: 'h3', text: 'Usability and accessibility' },
        { type: 'p', text: 'Although there was no UX research, good practices were applied:' },
        { type: 'cards', items: [
          { title: "Jakob's Law", text: 'Familiar navigation patterns were kept, especially in booking.' },
          { title: "Fitts's Law", text: 'Buttons and CTAs with large clickable areas.' },
          { title: 'AA contrast', text: 'Readable text guaranteed on both dark and light backgrounds.' },
          { title: 'Law of proximity', text: 'Related content is grouped for quick reading.' },
          { title: 'Scannability', text: 'Independent blocks to avoid visual noise.' },
          { title: 'Persistent navigation (side menu)', text: 'Helps users keep their context on a long one-page site.' },
        ] },
      ],
    },
    {
      id: 'ui',
      title: 'UI design',
      subtitle: 'Improving identity and legibility',
      blocks: [
        { type: 'h3', text: 'Typography' },
        { type: 'typescale', family: 'DM Sans', weights: 'Medium · Semi Bold · Bold', rows: [
          { label: 'H1', font: 'DM Sans Bold/Medium', size: '50/60' },
          { label: 'H2', font: 'DM Sans Bold', size: '48/20' },
          { label: 'H3', font: 'DM Sans Bold', size: '32/24' },
          { label: 'Body 1', font: 'DM Sans Bold', size: '18/60' },
          { label: 'Body 2', font: 'DM Sans Medium', size: '16/60' },
          { label: 'Button', font: 'DM Sans Bold', size: '24/14' },
        ] },
        { type: 'h3', text: 'Color palette' },
        { type: 'swatches', items: [
          { hex: '#1A1A1A', name: 'Neutral Black', use: 'Base text. Main text, headings, content.' },
          { hex: '#FFFFFF', name: 'Base Surface', use: 'General background. Site background, primary sections.' },
          { hex: '#171F14', name: 'Deep Olive Neutral', use: 'Form and active-menu background, contrast sections, dark content modules.' },
          { hex: '#F8E2DF', name: 'Soft Accent Tint', use: 'FAQ, soft informational blocks, support cards.' },
          { hex: '#CC433C', name: 'Primary Accent Red', use: 'Primary buttons, icons, calls to action, visual indicators.' },
        ] },
        { type: 'h3', text: 'Buttons' },
        { type: 'buttons', items: [
          { label: 'SEND', variant: 'dark', states: [
            { state: 'Default', bg: '#171F14', text: '#FFFFFF' },
            { state: 'Hover', bg: '#171F14', text: '#FFFFFF' },
            { state: 'Focus', bg: '#171F14', text: '#FFFFFF', ring: '#CC433C' },
          ] },
          { label: 'Book', variant: 'light', states: [
            { state: 'Default', bg: '#E7E7E7', text: '#171F14' },
            { state: 'Hover', bg: '#D7D7D7', text: '#171F14' },
            { state: 'Focus', bg: '#E7E7E7', text: '#171F14', ring: '#CC433C' },
          ] },
        ] },
      ],
    },
    {
      id: 'before',
      title: 'Previous screens',
      blocks: [
        { type: 'p', text: 'Screens of the site before the redesign process (original site in Spanish).' },
        { type: 'image', src: `${base}/old-screens.webp`, alt: 'Original AVSA site before the redesign', cropTop: HEADER_CROP },
      ],
    },
    {
      id: 'desktop',
      title: 'Desktop version',
      blocks: [
        { type: 'p', text: 'Optimized for a spacious, visual and comfortable desktop experience (interface in Spanish).' },
        { type: 'image', src: `${base}/desktop.webp`, alt: 'AVSA redesign on desktop', cropTop: HEADER_CROP },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile version',
      blocks: [
        { type: 'p', text: 'Designed for clear, accessible navigation on small screens (interface in Spanish).' },
        { type: 'image', src: `${base}/mobile.webp`, alt: 'AVSA redesign on mobile', cropTop: HEADER_CROP },
      ],
    },
  ],
};

export const avsa: Record<Locale, CaseStudy> = { es, en };
