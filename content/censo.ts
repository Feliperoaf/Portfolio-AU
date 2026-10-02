import type { Block, CaseStudy, Locale, Section } from './types';
import { desktop, mobile } from './censo-survey';

const base = '/projects/censo';
const ev = (file: string, alt: string, width?: number): Block => ({
  type: 'image',
  src: `${base}/evidence/${file}.jpg`,
  alt,
  width,
});

type Pair = [string, string];
type Rule = { id: string; q: Pair; pass: boolean; body: Pair[] };
type Heuristic = { n: number; name: Pair; def: Pair; rules: Rule[]; images: (l: Locale) => Block[] };

const heuristics: Heuristic[] = [
  {
    n: 1,
    name: [`Mostrar estado del sistema`, `Visibility of system status`],
    def: [`El sistema siempre debe mantener a los usuarios informados sobre lo que está pasando.`, `The system should always keep users informed about what is going on.`],
    rules: [
      {
        id: '1.1',
        q: [`¿El usuario es consciente de su posición actual dentro del recorrido de la página web?`, `Is the user aware of their current position within the website journey?`],
        pass: true,
        body: [
          [
            `Rastro de migas de pan (breadcrumbs). El rastro de migas de pan permite al usuario identificar su ubicación dentro de la estructura del sitio y navegar fácilmente hacia niveles superiores. Generalmente se presenta como una secuencia jerárquica de enlaces ubicada en la parte superior de la página, justo debajo de la navegación principal.`,
            `Breadcrumbs. Breadcrumbs let users identify their location within the site structure and easily navigate to higher levels. They usually appear as a hierarchical sequence of links at the top of the page, right below the main navigation.`,
          ],
          [
            `En el caso evaluado, si bien el componente está presente, su tamaño tipográfico es inferior al recomendado para una lectura cómoda en distintos dispositivos. La buena práctica sugiere una fuente base entre 14 y 16 píxeles, lo que garantiza una adecuada legibilidad en pantallas de distintas resoluciones. Actualmente, el sitio utiliza un tamaño de 13 píxeles, lo que podría afectar la visibilidad y accesibilidad del elemento.`,
            `In the case evaluated, although the component is present, its type size is smaller than recommended for comfortable reading across devices. Good practice suggests a base font between 14 and 16 pixels, which ensures adequate legibility on screens of different resolutions. The site currently uses 13 pixels, which could affect the visibility and accessibility of the element.`,
          ],
          [
            `Marcadores de progreso (indicadores de flujo). El sitio incorpora marcadores de página en la parte superior que permiten al usuario identificar su posición dentro de un proceso o secuencia de pasos. Este recurso resulta especialmente útil en flujos que comprenden múltiples páginas o etapas, ya que brinda referencias visuales claras sobre el avance y las secciones restantes, mejorando la orientación y la percepción de control durante la navegación.`,
            `Progress markers (flow indicators). The site includes page markers at the top that let users identify their position within a process or sequence of steps. This is especially useful in flows with multiple pages or stages, since it provides clear visual references about progress and remaining sections, improving orientation and the sense of control while browsing.`,
          ],
        ],
      },
      {
        id: '1.2',
        q: [`¿Se notifica al usuario sobre los cambios en su viaje en el sitio?`, `Is the user notified of changes in their journey through the site?`],
        pass: false,
        body: [
          [
            `Falta de retroalimentación en redireccionamientos. El sitio no presenta notificaciones emergentes ni mensajes en tiempo real que informen al usuario sobre el redireccionamiento a un sitio externo, como ocurre al acceder al "Verificador de encuestadores".`,
            `Lack of feedback on redirects. The site shows no pop-up notifications or real-time messages informing the user about a redirect to an external site, as happens when accessing the "Interviewer verifier".`,
          ],
          [
            `Una vez dentro de esta sección, no existe una ruta clara de retorno al sitio principal del Censo: el menú de navegación desaparece y el logotipo del INE no es interactivo, lo que rompe la continuidad del flujo y puede generar desorientación o pérdida de contexto.`,
            `Once inside this section there is no clear route back to the main Census site: the navigation menu disappears and the INE logo isn't interactive, which breaks the continuity of the flow and can cause disorientation or loss of context.`,
          ],
        ],
      },
      {
        id: '1.3',
        q: [`¿Es consciente el usuario de los factores que pueden tener un impacto significativo en su experiencia?`, `Is the user aware of the factors that can significantly impact their experience?`],
        pass: false,
        body: [
          [
            `Transparencia y comunicación del sitio. Para que los usuarios comprendan los factores que pueden afectar su experiencia, es esencial que el sitio mantenga una comunicación clara y un diseño transparente que anticipe comportamientos, tiempos de carga o redireccionamientos.`,
            `Site transparency and communication. For users to understand the factors that can affect their experience, the site must keep clear communication and a transparent design that anticipates behaviors, load times or redirects.`,
          ],
          [
            `En la evaluación realizada, se observa que el sitio presenta más factores en contra que a favor, lo que impacta negativamente en la confianza y percepción de control del usuario durante la navegación.`,
            `In this evaluation, the site shows more factors against than in favor, which negatively impacts the user's trust and sense of control while browsing.`,
          ],
          [
            `Observaciones de accesibilidad y navegación: el sitio no cuenta con un buscador, lo que limita la capacidad del usuario para encontrar información de manera rápida.`,
            `Accessibility and navigation observations: the site has no search function, which limits the user's ability to find information quickly.`,
          ],
          [
            `No todas las opciones del menú permiten la interacción mediante "focus", lo que afecta la navegación con teclado y la accesibilidad general.`,
            `Not all menu options support interaction through "focus", which affects keyboard navigation and general accessibility.`,
          ],
          [
            `No se deben utilizar imágenes para representar texto en sitios web, especialmente en plataformas públicas o institucionales que deben garantizar accesibilidad e inclusión digital. Las imágenes que contienen texto no pueden ser interpretadas por lectores de pantalla, lo que dificulta el acceso a la información para personas con discapacidad visual.`,
            `Images should not be used to represent text on websites, especially on public or institutional platforms that must guarantee accessibility and digital inclusion. Images containing text can't be interpreted by screen readers, which makes access to information harder for people with visual disabilities.`,
          ],
          [
            `Además, el uso de imágenes sin texto alternativo (atributo alt) impide ofrecer una experiencia de usuario completa y accesible.`,
            `In addition, using images without alternative text (the alt attribute) prevents a complete, accessible user experience.`,
          ],
        ],
      },
    ],
    images: (l) => [
      ev('h01-a', l === 'es' ? 'Rastro de migas de pan del sitio del Censo' : 'Breadcrumb trail on the Census site', 486),
      ev('h01-b', l === 'es' ? 'Marcadores de progreso en la barra superior' : 'Progress markers in the top bar', 760),
      ev('h01-c', l === 'es' ? 'Redireccionamiento al Verificador de encuestadores sin ruta de retorno' : 'Redirect to the interviewer verifier with no way back'),
      ev('h01-d', l === 'es' ? 'Observaciones de accesibilidad y navegación' : 'Accessibility and navigation observations'),
    ],
  },
  {
    n: 2,
    name: [`Coincidencia entre el sistema y el mundo real`, `Match between system and the real world`],
    def: [`El sistema debe hablar con conceptos familiares para el usuario, haciendo que la información aparezca en un orden natural y lógico.`, `The system should speak in concepts familiar to the user, making information appear in a natural and logical order.`],
    rules: [
      {
        id: '2.1',
        q: [`¿Son fácilmente reconocibles los elementos de la interfaz de usuario y las indicaciones de interacción?`, `Are interface elements and interaction cues easily recognizable?`],
        pass: false,
        body: [
          [`No todos los elementos de la interfaz son reconocibles o se comportan de manera coherente.`, `Not all interface elements are recognizable or behave consistently.`],
          [`Algunos botones no generan una respuesta al hacer clic, lo que confunde al usuario respecto a su funcionalidad.`, `Some buttons give no response when clicked, which confuses users about their functionality.`],
          [`Del mismo modo, los números de teléfono no son interactivos y existen cambios repentinos en el menú de navegación, lo que afecta la consistencia y la predictibilidad del sitio.`, `Likewise, phone numbers aren't interactive and there are sudden changes in the navigation menu, which affects the consistency and predictability of the site.`],
          [`El cambio de color como indicador de interacción ofrece un feedback visual insuficiente. Los elementos interactivos no presentan una diferenciación visual clara frente a los estáticos, lo que dificulta que el usuario identifique acciones posibles y reduce la percepción de interactividad dentro del sitio.`, `Color change as an interaction indicator provides insufficient visual feedback. Interactive elements aren't clearly differentiated from static ones, which makes it harder for users to identify possible actions and reduces the perception of interactivity within the site.`],
        ],
      },
      {
        id: '2.2',
        q: [`¿La experiencia en línea replica la familiaridad de las acciones y comportamientos fuera de línea?`, `Does the online experience replicate the familiarity of offline actions and behaviors?`],
        pass: true,
        body: [
          [`La interfaz está alineada con el modelo mental de los usuarios, replicando la forma en que esperan que funcione el proceso de revisión del sitio según su experiencia y conocimiento del mundo real.`, `The interface is aligned with users' mental model, replicating how they expect the site review process to work based on their experience and real-world knowledge.`],
          [`Esto facilita la comprensión de las acciones disponibles y reduce la carga cognitiva durante la interacción.`, `This makes the available actions easier to understand and reduces cognitive load during interaction.`],
        ],
      },
      {
        id: '2.3',
        q: [`¿El sitio usa siglas, términos técnicos o jerga que necesitan explicación? Si el sitio usa siglas ¿Las explica claramente?`, `Does the site use acronyms, technical terms or jargon that need explanation? If it uses acronyms, does it explain them clearly?`],
        pass: true,
        body: [
          [`El sitio utiliza un lenguaje claro y accesible para los usuarios.`, `The site uses clear, accessible language for users.`],
          [`Evita tecnicismos, jergas y anglicismos al describir acciones, favoreciendo una comunicación directa, cercana y amable que mejora la comprensión y genera confianza en la interacción.`, `It avoids technicalities, jargon and anglicisms when describing actions, favoring direct, friendly communication that improves understanding and builds trust in the interaction.`],
        ],
      },
    ],
    images: (l) => [ev('h02-a', l === 'es' ? 'Página 404 y botones con feedback visual insuficiente' : '404 page and buttons with insufficient visual feedback')],
  },
  {
    n: 3,
    name: [`Control y libertad del usuario`, `User control and freedom`],
    def: [`El usuario debe poder navegar libremente, encontrando fácilmente salidas y rutas alternativas.`, `Users should be able to navigate freely, easily finding exits and alternative routes.`],
    rules: [
      {
        id: '3.1',
        q: [`¿Puede el usuario salir de todos los estados, como ventanas emergente y multimedia?`, `Can the user exit all states, such as pop-ups and multimedia?`],
        pass: true,
        body: [
          [`Aunque la presencia de ventanas emergentes es limitada, su funcionamiento es correcto.`, `Although pop-ups are few, they work correctly.`],
          [`Los videos se reproducen dentro del mismo sitio mediante enlaces integrados a YouTube, evitando redirecciones externas y manteniendo la continuidad de la experiencia del usuario.`, `Videos play within the same site through embedded YouTube links, avoiding external redirects and keeping the user experience continuous.`],
        ],
      },
      {
        id: '3.2',
        q: [`¿Puede el usuario usar las secciones principales del sitio web sin registrarse?`, `Can the user use the main sections of the website without registering?`],
        pass: true,
        body: [[`Sí, el sitio no solicita registro`, `Yes, the site doesn't ask for registration.`]],
      },
      {
        id: '3.3',
        q: [`¿El usuario tiene control sobre su información personal?`, `Does the user have control over their personal information?`],
        pass: true,
        body: [
          [`El sitio no solicita información personal ni requiere la creación de un perfil de usuario.`, `The site doesn't ask for personal information or require creating a user profile.`],
          [`Por lo tanto, no existen instancias en las que el usuario deba gestionar o modificar datos personales, lo que elimina la necesidad de controles específicos sobre esta información.`, `Therefore there are no instances where the user must manage or edit personal data, which removes the need for specific controls over this information.`],
        ],
      },
    ],
    images: (l) => [ev('h03-a', l === 'es' ? 'Videos de YouTube integrados y encuesta de experiencia' : 'Embedded YouTube videos and experience survey')],
  },
  {
    n: 4,
    name: [`Coherencia y estándares`, `Consistency and standards`],
    def: [`Los usuarios no tienen que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo. Se debe seguir un estándar.`, `Users shouldn't have to wonder whether different words, situations or actions mean the same thing. A standard should be followed.`],
    rules: [
      {
        id: '4.1',
        q: [`¿Existe un estándar de diseño consistente para todas las llamadas de acción (CTA) en el sitio?`, `Is there a consistent design standard for all calls to action (CTAs) on the site?`],
        pass: false,
        body: [
          [`No.`, `No.`],
          [`El sitio presenta variaciones en el diseño de los llamados a la acción (CTA), a pesar de ser elementos fundamentales para guiar al usuario hacia objetivos específicos, como leer un contenido, completar un formulario o descargar un archivo.`, `The site shows variations in the design of calls to action (CTAs), even though they are fundamental elements for guiding users toward specific goals, such as reading content, completing a form or downloading a file.`],
          [`La falta de consistencia visual en estos componentes reduce la claridad del recorrido del usuario y debilita la coherencia de marca y la identidad visual del sitio.`, `The lack of visual consistency in these components reduces the clarity of the user journey and weakens brand coherence and the site's visual identity.`],
        ],
      },
      {
        id: '4.2',
        q: [`¿Existe un estándar de diseño coherente para los controles de formulario?`, `Is there a coherent design standard for form controls?`],
        pass: true,
        body: [[`El sitio no contiene formularios`, `The site contains no forms.`]],
      },
      {
        id: '4.3',
        q: [`¿Existe un estándar de diseño consistente para los encabezados?`, `Is there a consistent design standard for headers?`],
        pass: false,
        body: [
          [`No.`, `No.`],
          [`El encabezado no mantiene un diseño consistente en todas las secciones del sitio. En algunas páginas internas (como Noticias y Verificador) desaparece o cambia su estructura, lo que dificulta la navegación y rompe la continuidad de la experiencia del usuario.`, `The header doesn't keep a consistent design across all sections of the site. On some internal pages (such as News and Verifier) it disappears or changes structure, which makes navigation harder and breaks the continuity of the user experience.`],
        ],
      },
    ],
    images: (l) => [
      ev('h04-a', l === 'es' ? 'Variaciones en los llamados a la acción' : 'Variations in calls to action', 691),
      ev('h04-b', l === 'es' ? 'Encabezados inconsistentes entre Noticias y Verificador' : 'Inconsistent headers between News and Verifier'),
    ],
  },
  {
    n: 5,
    name: [`Prevención de errores`, `Error prevention`],
    def: [`Se debe ayudar a los usuarios a no cometer errores. Como añadir una opción de confirmación antes de que se comprometan con la acción.`, `Users should be helped not to make mistakes, for example by adding a confirmation option before they commit to an action.`],
    rules: [
      {
        id: '5.1',
        q: [`¿Existen restricciones útiles que evitan que el usuario cometa los mismos errores?`, `Are there useful constraints that keep the user from making the same mistakes?`],
        pass: true,
        body: [
          [`El sitio muestra advertencias adecuadas ante la entrada errónea de datos o el ingreso de un usuario ya existente en secciones que requieren información sensible, como el Verificador de encuestadores.`, `The site shows appropriate warnings for erroneous data entry or when an existing user signs up, in sections that require sensitive information such as the Interviewer verifier.`],
          [`Estas validaciones refuerzan la confianza del usuario, reducen la tasa de abandono y mejoran la precisión de los datos ingresados.`, `These validations strengthen user trust, reduce the abandonment rate and improve the accuracy of the data entered.`],
        ],
      },
      {
        id: '5.2',
        q: [`¿La guía del usuario incluye sugerencias para evitar acciones incorrectas?`, `Does the user guidance include suggestions to avoid incorrect actions?`],
        pass: true,
        body: [[`Si bien el flujo del minisite del Censo no presenta interfaces que induzcan a error, el sitio principal del INE (al cual se encuentra enlazado) proporciona mensajes y sugerencias claras y amables, orientando al usuario y previniendo acciones incorrectas durante la navegación.`, `Although the Census mini-site flow has no interfaces that lead to errors, the main INE site (which it links to) provides clear, friendly messages and suggestions, guiding the user and preventing incorrect actions while browsing.`]],
      },
      {
        id: '5.3',
        q: [`¿Se le presenta al usuario un formato indulgente para la información?`, `Is the user given a forgiving format for information?`],
        pass: true,
        body: [
          [`El sitio no posee formularios propios, y aquellos que se encuentran enlazados desde el sitio del INE son simples y rápidos de completar.`, `The site has no forms of its own, and those linked from the INE site are simple and quick to complete.`],
          [`Una vez enviados, permiten acceder de inmediato a la información solicitada, sin requerir confirmación por correo electrónico, lo que agiliza el flujo y reduce fricciones en la interacción.`, `Once submitted, they give immediate access to the requested information without requiring email confirmation, which speeds up the flow and reduces friction.`],
        ],
      },
    ],
    images: (l) => [ev('h05-a', l === 'es' ? 'Mensajes de validación en el Verificador de encuestadores y en el sitio del INE' : 'Validation messages in the interviewer verifier and on the INE site')],
  },
  {
    n: 6,
    name: [`Reconocimiento en lugar de recuperación`, `Recognition rather than recall`],
    def: [`Minimizar la carga de memoria del usuario haciendo visibles objetos, acciones y opciones.`, `Minimize the user's memory load by making objects, actions and options visible.`],
    rules: [
      {
        id: '6.1',
        q: [`¿Se le presenta al usuario una lista de productos o páginas vistas recientemente?`, `Is the user shown a list of recently viewed products or pages?`],
        pass: true,
        body: [[`No existe.`, `There isn't one.`], [`El sitio web no lo requiere.`, `The website doesn't need it.`]],
      },
      {
        id: '6.2',
        q: [`¿Se le presenta al usuario contenido personalizado basado en acciones anteriores?`, `Is the user shown personalized content based on previous actions?`],
        pass: true,
        body: [
          [`No.`, `No.`],
          [`El sitio no presenta contenido personalizado basado en acciones previas del usuario, lo cual resulta adecuado considerando que se trata de un sitio principalmente informativo, enfocado en la difusión de datos y orientaciones generales.`, `The site shows no personalized content based on the user's previous actions, which is appropriate given that it is mainly an informational site focused on sharing data and general guidance.`],
        ],
      },
      {
        id: '6.3',
        q: [`¿Se le presentan al usuario elementos de navegación que reducen la carga cognitiva y ayudan a recordar?`, `Is the user shown navigation elements that reduce cognitive load and aid recall?`],
        pass: true,
        body: [
          [`Sí.`, `Yes.`],
          [`El sitio mantiene una estructura coherente y de fácil comprensión, lo que facilita la navegación entre categorías y ayuda al usuario a mantener una clara noción de su ubicación dentro del sitio.`, `The site keeps a coherent, easy-to-understand structure, which makes navigating between categories easier and helps users keep a clear sense of where they are within the site.`],
        ],
      },
    ],
    images: (l) => [
      ev('h06-a', l === 'es' ? 'Menú principal del sitio del Censo' : 'Main menu of the Census site', 897),
      ev('h06-b', l === 'es' ? 'Preguntas frecuentes con ruta de navegación' : 'FAQ page with navigation path', 897),
    ],
  },
  {
    n: 7,
    name: [`Flexibilidad y eficiencia de uso`, `Flexibility and efficiency of use`],
    def: [`La experiencia de la interacción debe funcionar para el usuario experto como para usuarios sin experiencia.`, `The interaction experience should work for expert users as well as for users with no experience.`],
    rules: [
      {
        id: '7.1',
        q: [`¿Se le presenta al usuario atajos para alcanzar objetivos finales?`, `Does the user get shortcuts to reach final goals?`],
        pass: false,
        body: [
          [`No.`, `No.`],
          [`El sitio no ofrece atajos ni herramientas que faciliten el acceso directo a objetivos específicos, como un buscador o accesos rápidos.`, `The site offers no shortcuts or tools that give direct access to specific goals, such as a search function or quick links.`],
          [`Sin embargo, cuenta con una única funcionalidad interactiva destacable: el Verificador INE, que permite al usuario consultar si el RUT de un encuestador se encuentra habilitado oficialmente.`, `However, it has a single notable interactive feature: the INE Verifier, which lets users check whether an interviewer's RUT (national ID number) is officially authorized.`],
        ],
      },
      {
        id: '7.2',
        q: [`¿Puede el usuario personalizar acciones frecuentes?`, `Can the user customize frequent actions?`],
        pass: true,
        body: [
          [`No.`, `No.`],
          [`El sitio no permite la personalización de acciones frecuentes, lo cual es coherente con su naturaleza informativa, ya que no contempla flujos interactivos o tareas repetitivas que requieran personalización.`, `The site doesn't allow customizing frequent actions, which is consistent with its informational nature, since it has no interactive flows or repetitive tasks that require customization.`],
        ],
      },
      {
        id: '7.3',
        q: [`¿Se le presenta al usuario información de contexto para acciones rápidas?`, `Does the user get contextual information for quick actions?`],
        pass: false,
        body: [
          [`No.`, `No.`],
          [`La función de Verificación INE no ofrece información de contexto previa que oriente al usuario sobre su propósito o uso.`, `The INE Verification function offers no prior contextual information guiding the user about its purpose or use.`],
          [`Además, el lenguaje utilizado no es suficientemente claro o amigable, y la herramienta se presenta junto a otros elementos del sitio que no guardan relación, lo que dificulta la comprensión de su función principal.`, `In addition, the language used isn't clear or friendly enough, and the tool is shown next to other site elements it has no relation to, which makes its main function harder to understand.`],
        ],
      },
    ],
    images: (l) => [ev('h07-a', l === 'es' ? 'Bloques de acceso: Verificador INE, Precenso, Preguntas Frecuentes y Resultados Históricos' : 'Access blocks: INE Verifier, Pre-census, FAQ and Historical Results')],
  },
  {
    n: 8,
    name: [`Diseño estético y minimalista`, `Aesthetic and minimalist design`],
    def: [`No debe contener información irrelevante o que no suele utilizar.`, `It shouldn't contain information that is irrelevant or rarely used.`],
    rules: [
      {
        id: '8.1',
        q: [`¿El diseño de la interfaz de usuario es simple y fácil de entender?`, `Is the user interface design simple and easy to understand?`],
        pass: false,
        body: [
          [`Si bien el diseño del sitio cumple su función, existen oportunidades de mejora tanto en el aspecto visual como en la arquitectura de la información.`, `Although the site design fulfils its function, there are opportunities for improvement in both the visual aspect and the information architecture.`],
          [`Actualmente, la presencia de dos menús de navegación genera confusión, dificultando la orientación del usuario. Se recomienda mantener un único encabezado principal con el logo del INE enlazado al inicio, reduciendo así el ruido visual y facilitando la exploración del contenido.`, `Currently, having two navigation menus creates confusion and makes orientation harder. It is recommended to keep a single main header with the INE logo linking to the home page, reducing visual noise and making content easier to explore.`],
          [`Asimismo, la estructura del sitio podría reorganizarse en cinco secciones principales, optimizando la jerarquía y claridad de la información: (1) Información para el público general (Censo y preguntas frecuentes); (2) Precenso (actualmente titulado "Preparación"); (3) Información para censistas (preguntas frecuentes); (4) Contenidos; (5) Contacto.`, `Likewise, the site structure could be reorganized into five main sections, optimizing information hierarchy and clarity: (1) Information for the general public (Census and FAQ); (2) Pre-census (currently titled "Preparación"); (3) Information for census takers (FAQ); (4) Contents; (5) Contact.`],
          [`Desde el punto de vista visual, sería ideal reformular el tamaño y proporción de los bloques de contenido. Aunque la versión de escritorio mantiene una disposición funcional, en resoluciones más pequeñas los márgenes y paddings se pierden, generando una vista móvil poco eficiente: bloques completos con solo un ícono y un título ocupan la totalidad de la pantalla.`, `Visually, it would be ideal to rework the size and proportion of the content blocks. Although the desktop version keeps a functional layout, at smaller resolutions margins and padding are lost, producing an inefficient mobile view: whole blocks with just an icon and a title fill the entire screen.`],
          [`Esto representa una pérdida significativa de espacio útil y dificulta el escaneo visual, que es la forma principal en que los usuarios navegan y procesan la información en sitios web.`, `This represents a significant loss of useful space and makes visual scanning harder, which is the main way users navigate and process information on websites.`],
          [`Hallazgos señalados en la imagen: duplicidad de menús (genera confusión en la navegación y dificulta la orientación del usuario dentro del sitio); bloques de contenido desproporcionados (muestran muy poca información por pantalla, desaprovechando el espacio disponible y afectando la experiencia móvil); elementos sin margen de seguridad (algunos bloques se ubican demasiado cerca del borde, afectando la legibilidad y el equilibrio visual).`, `Findings marked in the image: duplicated menus (create confusion in navigation and make it harder for users to orient themselves within the site); disproportionate content blocks (show very little information per screen, wasting available space and hurting the mobile experience); elements without a safety margin (some blocks sit too close to the edge, affecting legibility and visual balance).`],
        ],
      },
      {
        id: '8.2',
        q: [`¿El usuario tiene claro el significado de todos los íconos y por qué están incluidos en el diseño?`, `Is the meaning of all icons clear to the user, and why they are included in the design?`],
        pass: false,
        body: [
          [`El problema no radica en la iconografía, sino en el lenguaje utilizado para nombrar las secciones. Por ejemplo, el término "Preparación" podría interpretarse como una guía para que las personas se preparen para el censo, cuando en realidad hace referencia al trabajo previo realizado por la institución. Esta falta de claridad puede generar confusión en la comprensión del contenido.`, `The problem isn't the iconography but the language used to name the sections. For example, the term "Preparación" (Preparation) could be read as a guide for people to prepare for the census, when it actually refers to the preliminary work done by the institution. This lack of clarity can create confusion in understanding the content.`],
          [`A nivel de diseño, gran parte del sitio se estructura en cuatro bloques que replican información ya disponible en el menú principal. Este espacio podría aprovecharse mejor destacando, mediante un lenguaje más claro y cercano, la funcionalidad más relevante del sitio: el Verificador INE, herramienta esencial para garantizar la seguridad de los censados.`, `At the design level, much of the site is structured around four blocks that repeat information already available in the main menu. This space could be used better by highlighting, in clearer and friendlier language, the site's most relevant feature: the INE Verifier, an essential tool for guaranteeing the safety of people being surveyed.`],
          [`Además, uno de los elementos del carrusel de tarjetas (Resultados históricos) redirige al usuario fuera del flujo principal del sitio, llevándolo a una página sin retorno directo a la navegación original, lo que interrumpe la experiencia y desorienta al usuario.`, `In addition, one of the cards in the carousel (Historical results) redirects the user outside the main flow of the site, taking them to a page with no direct return to the original navigation, which interrupts the experience and disorients the user.`],
        ],
      },
      {
        id: '8.3',
        q: [`¿Todos los formularios son fáciles de entender y fáciles de completar?`, `Are all forms easy to understand and easy to complete?`],
        pass: true,
        body: [[`El único formulario disponible corresponde al Verificador de encuestadores, que cuenta con un solo campo a completar. Sin embargo, su comportamiento es inconsistente: dependiendo del punto de acceso, puede abrirse dentro del flujo del sitio o en una nueva ventana. Además, se percibe como un elemento externo a la interfaz, ya que carece de menú de navegación y no ofrece una forma clara de volver al sitio principal (breadcrumb o enlace de retorno).`, `The only form available is the Interviewer verifier, which has a single field to fill in. However, its behavior is inconsistent: depending on the access point, it may open within the site flow or in a new window. It is also perceived as external to the interface, since it has no navigation menu and offers no clear way back to the main site (breadcrumb or return link).`]],
      },
    ],
    images: (l) => [
      ev('h08-a', l === 'es' ? 'Duplicidad de menús, bloques desproporcionados y elementos sin margen' : 'Duplicated menus, disproportionate blocks and elements without margins'),
      ev('h08-b', l === 'es' ? 'Menú con títulos poco representativos y redirección desde Resultados históricos' : 'Menu with unrepresentative titles and a redirect from Historical results'),
      ev('h08-c', l === 'es' ? 'Página del INE a la que redirige Resultados históricos' : 'INE page that Historical results redirects to'),
      ev('h08-d', l === 'es' ? 'Verificador de encuestadores sin navegación de retorno' : 'Interviewer verifier with no return navigation'),
    ],
  },
  {
    n: 9,
    name: [`Comunicar errores con claridad`, `Communicate errors clearly`],
    def: [`Los mensajes de error deben ser reconocidos y expresarse en un lenguaje sencillo, indicar con precisión el problema y sugerir una solución de manera constructiva.`, `Error messages should be recognizable and expressed in plain language, indicate the problem precisely and suggest a solution constructively.`],
    rules: [
      {
        id: '9.1',
        q: [`¿El usuario recibe mensajes de error cuando agrega información incorrecta en un control de formulario?`, `Does the user receive error messages when entering incorrect information in a form control?`],
        pass: true,
        body: [[`El usuario recibe un mensaje claro al ingresar un RUT no válido, notificando que este no corresponde a un encuestador registrado.`, `The user receives a clear message when entering an invalid RUT, notifying them that it doesn't correspond to a registered interviewer.`]],
      },
      {
        id: '9.2',
        q: [`¿Se le presentan al usuario mensajes de error legibles que ofrecen información útil sobre cómo rectificar el problema?`, `Does the user get legible error messages that offer useful information on how to fix the problem?`],
        pass: false,
        body: [[`No se entrega al usuario ningún mensaje que indique cómo proceder en caso de que el RUT del encuestador no se encuentre registrado en la base de datos del INE, lo que genera incertidumbre y una posible interrupción en la tarea.`, `The user gets no message indicating how to proceed if the interviewer's RUT isn't registered in the INE database, which creates uncertainty and a possible interruption of the task.`]],
      },
      {
        id: '9.3',
        q: [`¿Se presentan al usuario mensajes de error corteses que no lo culpan del error?`, `Does the user get courteous error messages that don't blame them for the error?`],
        pass: true,
        body: [[`No aplica.`, `Not applicable.`]],
      },
    ],
    images: (l) => [ev('h09-a', l === 'es' ? 'Mensaje de error del Verificador de encuestadores' : 'Interviewer verifier error message', 446)],
  },
  {
    n: 10,
    name: [`Ayuda y documentación`, `Help and documentation`],
    def: [`En ocasiones el usuario necesitará ayuda y documentación. Es preciso que sea fácil de encontrar y que esté orientada a tareas concretas.`, `Sometimes users will need help and documentation. It must be easy to find and focused on concrete tasks.`],
    rules: [
      {
        id: '10.1',
        q: [`¿Se presenta al usuario pasos/directrices claros para usar el servicio del producto?`, `Is the user given clear steps/guidelines for using the product's service?`],
        pass: false,
        body: [
          [`Si consideramos que el objetivo principal del sitio web es informar sobre el proceso del Censo 2024, se puede concluir que esta heurística no se cumple. En primer lugar, el sitio no cuenta con un buscador, lo que limita la capacidad del usuario para encontrar información específica. Además, gran parte de la página principal está compuesta por íconos, enlaces y videos que no entregan directrices claras sobre cómo acceder a contenidos relevantes.`, `Considering that the website's main goal is to inform about the Census 2024 process, we can conclude this heuristic isn't met. First, the site has no search function, which limits the user's ability to find specific information. In addition, much of the home page is made up of icons, links and videos that give no clear guidance on how to reach relevant content.`],
          [`A primera vista, el hero banner es el elemento que ofrece mayor cantidad de información. Sin embargo, presenta problemas de diseño y usabilidad: los botones no mantienen una posición estandarizada y el indicador del carrusel (div) se superpone parcialmente a las áreas clickeables, dificultando la interacción y generando confusión en el usuario.`, `At first glance, the hero banner is the element that offers the most information. However, it has design and usability problems: the buttons don't keep a standardized position and the carousel indicator (div) partially overlaps the clickable areas, hindering interaction and confusing users.`],
        ],
      },
      {
        id: '10.2',
        q: [`¿El usuario tiene accesos de documentación con temas relevantes para ayudar a alcanzar su objetivo?`, `Does the user have access to documentation on relevant topics to help achieve their goal?`],
        pass: true,
        body: [[`El sitio cumple con ofrecer acceso a la documentación necesaria para el usuario.`, `The site does provide access to the documentation the user needs.`]],
      },
      {
        id: '10.3',
        q: [`¿Se presentan al usuario mensajes de error corteses que no lo culpan del error?`, `Does the user get courteous error messages that don't blame them for the error?`],
        pass: true,
        body: [
          [`Se presentan íconos y enlaces a las redes sociales del INE; sin embargo, estos no se abren en una nueva pestaña, lo que obliga al usuario a abandonar el flujo del sitio del Censo. Aunque al hacer hover se observa un leve cambio de color y subrayado, sería recomendable incorporar el color característico de cada marca para reforzar la percepción de que se trata de botones activos.`, `Icons and links to the INE's social networks are shown; however, they don't open in a new tab, which forces users to leave the Census site flow. Although a slight color change and underline appear on hover, it would be advisable to use each brand's characteristic color to reinforce the perception that these are active buttons.`],
          [`El sitio cumple además con entregar información de contacto, incluyendo número telefónico, correo electrónico, horario de atención y un enlace externo para la atención ciudadana.`, `The site also provides contact information, including a phone number, email, opening hours and an external link for citizen support.`],
        ],
      },
    ],
    images: () => [],
  },
];

function make(l: Locale): CaseStudy {
  const t = (p: Pair) => (l === 'es' ? p[0] : p[1]);
  const T = (es: string, en: string) => (l === 'es' ? es : en);
  const idx = l === 'es' ? 0 : 1;

  const heuristicSections: Section[] = heuristics.map((h) => ({
    id: `h${h.n}`,
    title: `${h.n}. ${t(h.name)}`,
    subtitle: t(h.def),
    blocks: [
      {
        type: 'rules',
        items: h.rules.map((r) => ({ id: r.id, question: t(r.q), pass: r.pass, body: r.body.map(t) })),
      },
      ...h.images(l),
    ],
  }));

  const survey = (groups: typeof mobile): Block => ({
    type: 'survey',
    groups: groups.map((g) => ({
      question: g.q[idx],
      items: g.rows.map((r) => ({ quote: r[idx * 2], insight: r[idx * 2 + 1] })),
    })),
  });

  return {
    meta: [
      T('Diseñador UX/UI', 'UX/UI Designer'),
      T('Encargo del Instituto Nacional de Estadísticas (INE), Gobierno de Chile', 'Commissioned by the National Statistics Institute (INE), Government of Chile'),
      '2023',
    ],
    glance: [
      { label: T('Rol', 'Role'), value: T('Diseñador UX/UI', 'UX/UI Designer') },
      { label: T('Cliente', 'Client'), value: T('Instituto Nacional de Estadísticas (INE), Gobierno de Chile', 'National Statistics Institute (INE), Government of Chile') },
      { label: T('Alcance', 'Scope'), value: T('Evaluación heurística del sitio del Censo con las 10 heurísticas de Nielsen (30 reglas), escala SUS y cuestionarios abiertos', 'Heuristic evaluation of the Census website using Nielsen\'s 10 heuristics (30 rules), the SUS scale and open-ended questionnaires') },
      { label: T('Resultado', 'Outcome'), value: T('SUS de 75 en escritorio y 85 en móvil, y 6 recomendaciones finales', 'SUS of 75 on desktop and 85 on mobile, and 6 final recommendations') },
    ],
    toc: [
      { id: 'summary', label: T('Resultados', 'Results') },
      { id: 'context', label: T('Contexto', 'Context') },
      { id: 'method', label: T('Método', 'Method') },
      { id: 'h1', label: T('Hallazgos por heurística', 'Findings by heuristic') },
      { id: 'results', label: T('Resultado heurístico', 'Heuristic results') },
      { id: 'sus', label: 'SUS' },
      { id: 'opinions', label: T('Opiniones', 'User opinions') },
      { id: 'empathy', label: T('Mapa de empatía', 'Empathy map') },
      { id: 'recommendations', label: T('Recomendaciones', 'Recommendations') },
    ],
    hero: {
      src: `${base}/cover.jpg`,
      alt: T('Ilustración de la campaña del Censo 2024', 'Illustration from the Census 2024 campaign'),
    },
    sections: [
      {
        id: 'summary',
        title: T('Resultados en resumen', 'Results at a glance'),
        blocks: [
          {
            type: 'stats',
            items: [
              { value: '30%', label: T('cumplimiento heurístico', 'heuristic compliance') },
              { value: '75', label: T('SUS escritorio', 'SUS desktop') },
              { value: '85', label: T('SUS móvil', 'SUS mobile') },
            ],
          },
        ],
      },
      {
        id: 'about',
        title: T('Sobre el Censo', 'About the Census'),
        blocks: [
          { type: 'p', text: T('El censo en Chile es un recuento de todas las personas, hogares y viviendas del país realizado por el Instituto Nacional de Estadísticas (INE).', 'The census in Chile is a count of all the people, households and homes in the country carried out by the National Statistics Institute (INE).') },
          { type: 'p', text: T('Su objetivo principal es recopilar datos para conocer cuántos somos, cómo vivimos y cómo nos distribuimos geográficamente, información que sirve para actualizar datos sociodemográficos, planificar políticas públicas, distribuir recursos y diseñar programas de desarrollo.', 'Its main goal is to collect data to know how many we are, how we live and how we are distributed geographically, information used to update sociodemographic data, plan public policy, distribute resources and design development programs.') },
          { type: 'p', text: T('Se realiza mediante entrevistas presenciales.', 'It is carried out through in-person interviews.') },
          { type: 'p', text: T('El INE es el organismo encargado de su ejecución, realizó el último censo en 2017, el cual arrojó una población de 17.574.003 personas.', 'The INE is the body in charge of running it; it carried out the last census in 2017, which counted a population of 17,574,003 people.') },
        ],
      },
      {
        id: 'context',
        title: T('Contexto del proyecto', 'Project context'),
        blocks: [
          { type: 'p', text: T('En 2023, el Instituto Nacional de Estadísticas (INE) encargó una evaluación de usabilidad del sitio oficial del Censo de Chile, con el objetivo de detectar oportunidades de mejora en la experiencia de usuario y generar recomendaciones aplicables para optimizar la navegación, la claridad de la información y la accesibilidad del contenido.', 'In 2023, the National Statistics Institute (INE) commissioned a usability evaluation of the official Chile Census website, aiming to detect opportunities to improve the user experience and produce actionable recommendations to optimize navigation, clarity of information and content accessibility.') },
          { type: 'p', text: T('El sitio cumplía una función clave dentro del operativo nacional: informar a la ciudadanía sobre el Precenso 2023, una etapa preparatoria del Censo de Población y Vivienda 2024.', 'The site played a key role in the national operation: informing citizens about the 2023 Pre-census, a preparatory stage of the 2024 Population and Housing Census.') },
          { type: 'p', text: T('Durante este período, el INE desplegó equipos en terreno para registrar viviendas, direcciones y número de residentes en 72 comunas pertenecientes a 11 regiones del país.', 'During this period, the INE deployed field teams to record homes, addresses and number of residents in 72 communes across 11 regions of the country.') },
          { type: 'p', text: T('La evaluación consideró el sitio completo, incluyendo secciones informativas, formularios, canales de contacto y verificadores de identidad de enumeradores, componentes esenciales para fortalecer la confianza ciudadana, la transparencia y el acceso a información oficial.', 'The evaluation covered the whole site, including informational sections, forms, contact channels and census-taker identity verifiers, components essential to strengthening public trust, transparency and access to official information.') },
          { type: 'p', text: T('El estudio combinó una evaluación heurística basada en los 10 principios de Nielsen, utilizando un sistema de ponderación porcentual desarrollado por el equipo UX, junto con la aplicación de la escala SUS (System Usability Scale) y preguntas abiertas para complementar el análisis cuantitativo con percepciones cualitativas.', 'The study combined a heuristic evaluation based on Nielsen\'s 10 principles, using a percentage weighting system developed by the UX team, with the SUS (System Usability Scale) and open-ended questions to complement the quantitative analysis with qualitative perceptions.') },
        ],
      },
      {
        id: 'method',
        title: T('¿Qué es una evaluación heurística?', 'What is a heuristic evaluation?'),
        blocks: [
          { type: 'p', text: T('Para esta evaluación se aplicaron las 10 heurísticas de usabilidad de Jakob Nielsen, un marco ampliamente utilizado en UX Research para detectar problemas de usabilidad desde la perspectiva experta.', 'This evaluation applied Jakob Nielsen\'s 10 usability heuristics, a framework widely used in UX research to detect usability problems from an expert perspective.') },
          { type: 'p', text: T('Estas heurísticas no son reglas rígidas, sino principios de diseño que permiten evaluar la eficacia, eficiencia y satisfacción del usuario al interactuar con una interfaz.', 'These heuristics aren\'t rigid rules but design principles that make it possible to evaluate effectiveness, efficiency and user satisfaction when interacting with an interface.') },
          { type: 'p', text: T('El incumplimiento de estas reglas significa que hay un problema de usabilidad, ayudando a identificar directamente el origen de un problema.', 'Failing these rules means there is a usability problem, helping to identify directly the source of an issue.') },
          { type: 'h3', text: T('Las 10 heurísticas de Nielsen', 'Nielsen\'s 10 heuristics') },
          { type: 'cards', items: heuristics.map((h) => ({ title: `${h.n}. ${t(h.name)}`, text: t(h.def) })) },
          { type: 'h3', text: T('Sistema métrico de evaluación heurística', 'Heuristic evaluation scoring system') },
          { type: 'p', text: T('Para evaluar el cumplimiento de cada heurística, se estableció un sistema métrico basado en tres reglas de usabilidad asociadas a cada principio de Nielsen.', 'To evaluate compliance with each heuristic, a scoring system was set up based on three usability rules associated with each Nielsen principle.') },
          { type: 'p', text: T('Cada regla podía cumplirse total o parcialmente, generando un porcentaje final de adherencia que permitió cuantificar el nivel de cumplimiento y facilitar la comparación entre heurísticas.', 'Each rule could be met fully or partially, producing a final adherence percentage that made it possible to quantify the level of compliance and compare heuristics.') },
          {
            type: 'table',
            tone: true,
            caption: T('3 reglas de usabilidad para cada heurística', '3 usability rules for each heuristic'),
            head: [T('Valores', 'Values'), T('Cumplimiento', 'Compliance')],
            rows: [
              ['75 - 100%', T('Cumplimiento de 3 reglas de usabilidad', 'Compliance with 3 usability rules')],
              ['50% - 74%', T('Cumplimiento de 2 reglas de usabilidad', 'Compliance with 2 usability rules')],
              ['25% - 49%', T('Cumplimiento de 1 regla de usabilidad', 'Compliance with 1 usability rule')],
              ['24 - 0%', T('Cumplimiento de 0 reglas de usabilidad', 'Compliance with 0 usability rules')],
            ],
          },
        ],
      },
      ...heuristicSections,
      {
        id: 'results',
        title: T('Resultado heurística', 'Heuristic results'),
        blocks: [
          {
            type: 'table',
            tone: true,
            head: [T('Criterio de evaluación', 'Evaluation criterion'), T('Puntuación', 'Score'), T('Porcentaje', 'Percentage')],
            rows: heuristics.map((h, i) => {
              const s = ['1/3', '2/3', '3/3', '2/3', '3/3', '3/3', '1/3', '1/3', '2/3', '2/3'][i];
              const pct = s === '3/3' ? '75 - 100%' : s === '2/3' ? '50 - 74%' : '25 - 49%';
              return [`${h.n} ${t(h.name)}`, s, pct];
            }),
          },
          { type: 'h3', text: T('Conclusión general', 'General conclusion') },
          { type: 'p', text: T('El sitio no presenta fallas críticas de usabilidad, pero sí evidencia cuatro hallazgos de baja urgencia y tres de media urgencia que afectan la experiencia de usuario. En conjunto, la heurística alcanza un 30% de cumplimiento, lo que indica una usabilidad Deficiente / Baja tanto a nivel de diseño visual como de estructura informativa.', 'The site has no critical usability failures, but it does show four low-urgency findings and three medium-urgency findings that affect the user experience. Overall, the heuristic reaches 30% compliance, which indicates Deficient / Low usability at both the visual design and information structure levels.') },
          { type: 'h3', text: T('Principales hallazgos', 'Main findings') },
          {
            type: 'list',
            items: [
              T('Falta de retroalimentación clara y oportuna: El sitio no comunica de forma efectiva los estados del sistema, como mensajes de error, indicadores de carga o confirmaciones de acciones, lo que genera incertidumbre y reduce la confianza del usuario.', 'Lack of clear, timely feedback: The site doesn\'t effectively communicate system states, such as error messages, loading indicators or action confirmations, which creates uncertainty and reduces user trust.'),
              T('Deficiencias en accesibilidad y control: La interfaz no ofrece atajos ni funciones que faciliten la navegación, como un buscador o acciones rápidas, limitando la eficiencia tanto de usuarios nuevos como experimentados.', 'Accessibility and control shortcomings: The interface offers no shortcuts or functions that make navigation easier, such as search or quick actions, limiting efficiency for both new and experienced users.'),
              T('Problemas visuales y de arquitectura: El diseño presenta sobrecarga de información y baja jerarquización visual, lo que da una sensación de desorden. Además, la falta de consistencia en estilos y componentes afecta la coherencia general del sitio.', 'Visual and architecture problems: The design shows information overload and weak visual hierarchy, which gives a sense of disorder. In addition, the lack of consistency in styles and components affects the overall coherence of the site.'),
              T('Adaptabilidad limitada: El sitio no se ajusta correctamente a diferentes dispositivos o resoluciones, generando una experiencia inconsistente entre plataformas.', 'Limited adaptability: The site doesn\'t adjust correctly to different devices or resolutions, creating an inconsistent experience across platforms.'),
            ],
          },
          { type: 'p', text: T('En síntesis, el sitio cumple su función informativa básica, pero requiere mejoras en consistencia visual, estructura de navegación y comunicación con el usuario para alcanzar una experiencia más fluida, moderna y confiable.', 'In short, the site fulfils its basic informational function, but it needs improvements in visual consistency, navigation structure and communication with the user to achieve a smoother, more modern and more trustworthy experience.') },
          { type: 'h3', text: T('Escala de interpretación de resultados', 'Results interpretation scale') },
          {
            type: 'table',
            head: [T('% de cumplimiento', '% compliance'), T('Nivel de usabilidad', 'Usability level'), T('Descripción', 'Description')],
            rows: [
              ['0% - 20%', T('Crítica / Muy baja', 'Critical / Very low'), T('El sitio presenta graves problemas de usabilidad. Dificulta la navegación, comprensión y logro de tareas básicas. Requiere rediseño urgente.', 'The site has serious usability problems. It hinders navigation, comprehension and completion of basic tasks. Urgent redesign required.')],
              ['21% - 40%', T('Deficiente / Baja', 'Deficient / Low'), T('Se observan múltiples fricciones en la experiencia. Los problemas afectan la eficiencia y comprensión del usuario. Necesita mejoras significativas.', 'Multiple frictions are seen in the experience. Problems affect user efficiency and comprehension. Significant improvements needed.')],
              ['41% - 60%', T('Aceptable / Media', 'Acceptable / Medium'), T('El sitio cumple parcialmente las heurísticas. La navegación es posible, pero con puntos de confusión o sobrecarga cognitiva. Recomendado optimizar.', 'The site partially meets the heuristics. Navigation is possible, but with points of confusion or cognitive overload. Optimization recommended.')],
              ['61% - 80%', T('Buena / Alta', 'Good / High'), T('Cumple mayoritariamente con las buenas prácticas. Experiencia fluida con detalles menores a corregir para alcanzar un estándar óptimo.', 'Mostly meets good practices. Smooth experience with minor details to fix to reach an optimal standard.')],
              ['81% - 100%', T('Excelente / Óptima', 'Excellent / Optimal'), T('Cumplimiento total de las heurísticas. El sitio ofrece una experiencia clara, accesible y coherente en todos los puntos de interacción.', 'Full compliance with the heuristics. The site offers a clear, accessible and coherent experience at every interaction point.')],
            ],
          },
        ],
      },
      {
        id: 'sus',
        title: T('Sistema de Escala de Usabilidad (SUS)', 'System Usability Scale (SUS)'),
        blocks: [
          { type: 'p', text: T('El Sistema de Escala de Usabilidad (System Usability Scale, por sus siglas en inglés) es una herramienta de medición estándar utilizada para evaluar la usabilidad de sistemas, productos o aplicaciones.', 'The System Usability Scale (SUS) is a standard measurement tool used to evaluate the usability of systems, products or applications.') },
          { type: 'p', text: T('El cuestionario consta de 10 declaraciones sobre la usabilidad, y los usuarios deben expresar su grado de acuerdo o desacuerdo en una escala de cinco puntos (desde "Totalmente en desacuerdo" hasta "Totalmente de acuerdo"). Un puntaje más alto indica una mejor usabilidad y una experiencia más positiva.', 'The questionnaire has 10 statements about usability, and users express their level of agreement or disagreement on a five-point scale (from "Strongly disagree" to "Strongly agree"). A higher score indicates better usability and a more positive experience.') },
          { type: 'p', text: T('Las encuestas representan una herramienta clave para empatizar con los usuarios, comprender sus pensamientos, emociones y comportamientos, y así adaptar la aplicación según sus verdaderas necesidades. La empatía generada a través de este proceso se traduce en mejoras significativas en la relación entre los usuarios y la plataforma, fortaleciendo su confianza y satisfacción.', 'Surveys are a key tool for empathizing with users, understanding their thoughts, emotions and behaviors, and adapting the product to their real needs. The empathy generated through this process translates into significant improvements in the relationship between users and the platform, strengthening their trust and satisfaction.') },
          { type: 'p', text: T('Además, las encuestas permiten obtener información directa de quienes interactúan con la aplicación en contextos reales, entregando una visión clara sobre sus experiencias, opiniones y dificultades. Esta retroalimentación resulta esencial para identificar áreas específicas de mejora, detectar elementos confusos y validar decisiones de diseño con evidencia concreta.', 'Surveys also provide direct information from people who interact with the product in real contexts, giving a clear view of their experiences, opinions and difficulties. This feedback is essential for identifying specific areas for improvement, detecting confusing elements and validating design decisions with concrete evidence.') },
          { type: 'p', text: T('Asimismo, los resultados obtenidos facilitan evaluar la satisfacción general de los usuarios y medir el impacto de las mejoras implementadas, funcionando como una métrica confiable para analizar la efectividad de la experiencia de uso.', 'The results also make it easier to assess overall user satisfaction and measure the impact of implemented improvements, working as a reliable metric to analyze the effectiveness of the user experience.') },
          { type: 'p', text: T('Para este estudio se diseñaron dos cuestionarios con el propósito de conocer las opiniones y necesidades de los usuarios en distintos entornos: "Sitio Censo - versión móvil" y "Sitio Censo - versión escritorio". Ambos instrumentos fueron aplicados con el objetivo de tomar decisiones informadas orientadas a optimizar la usabilidad del sitio, manteniendo al usuario como eje central del proceso de diseño.', 'Two questionnaires were designed for this study to learn users\' opinions and needs in different environments: "Census site - mobile version" and "Census site - desktop version". Both instruments were applied to make informed decisions aimed at optimizing the site\'s usability, keeping the user at the center of the design process.') },
          { type: 'p', text: T('Cada cuestionario incluyó cinco preguntas abiertas sobre percepciones, uso y opinión general del sitio, además de una escala de usabilidad tipo Likert, utilizada para cuantificar la experiencia de los participantes.', 'Each questionnaire included five open-ended questions about perceptions, use and general opinion of the site, plus a Likert-type usability scale used to quantify participants\' experience.') },
          { type: 'stats', items: [{ value: '75', label: T('SUS versión escritorio', 'SUS desktop version') }, { value: '85', label: T('SUS versión móvil', 'SUS mobile version') }] },
        ],
      },
      {
        id: 'opinions',
        title: T('Opiniones de los usuarios', 'User opinions'),
        blocks: [
          { type: 'p', text: T('Después de aplicar ambos cuestionarios, reunimos las respuestas de los usuarios para entender sus percepciones y experiencias en cada entorno. A continuación, se presentan los principales hallazgos obtenidos del estudio, tanto en la versión móvil como en la versión de escritorio del sitio Censo.', 'After applying both questionnaires, we gathered users\' answers to understand their perceptions and experiences in each environment. Below are the main findings of the study, for both the mobile and desktop versions of the Census site. Quotes are translated from Spanish.') },
          { type: 'h3', text: T('Versión móvil', 'Mobile version') },
          survey(mobile),
          { type: 'h3', text: T('Versión escritorio', 'Desktop version') },
          survey(desktop),
        ],
      },
      {
        id: 'empathy',
        title: T('Mapa de empatía', 'Empathy map'),
        blocks: [
          { type: 'p', text: T('El mapa de empatía sintetiza las percepciones y emociones de los usuarios que interactuaron con el sitio del Censo, tanto en su versión móvil como de escritorio. Permite comprender cómo ven, sienten y experimentan la navegación dentro del sitio, identificando frustraciones, necesidades y oportunidades de mejora desde su propia perspectiva.', 'The empathy map synthesizes the perceptions and emotions of users who interacted with the Census site, in both its mobile and desktop versions. It helps us understand how they see, feel and experience navigation within the site, identifying frustrations, needs and opportunities for improvement from their own perspective.') },
          {
            type: 'groups',
            items: [
              {
                title: T('¿Qué piensa y siente?', 'What does the user think and feel?'),
                points: [
                  T('Se siente perdido o confundido por la estructura del sitio y la redundancia de opciones.', 'Feels lost or confused by the site structure and the redundancy of options.'),
                  T('Experimenta frustración leve al no encontrar rápidamente información clave (como fechas del Censo o cómo verificar encuestadores).', 'Experiences mild frustration at not quickly finding key information (such as Census dates or how to verify interviewers).'),
                  T('Percibe falta de orientación y contexto en algunas funciones.', 'Perceives a lack of orientation and context in some functions.'),
                  T('Sin embargo, también valora la claridad tipográfica, la accesibilidad y la intención informativa del sitio.', 'However, also values the typographic clarity, the accessibility and the informational intent of the site.'),
                  T('En general, quiere confiar en la fuente, pero necesita más guía visual y estructural para hacerlo.', 'In general, wants to trust the source but needs more visual and structural guidance to do so.'),
                ],
              },
              {
                title: T('¿Qué ve el usuario?', 'What does the user see?'),
                points: [
                  T('Un sitio con gran cantidad de información pero mal distribuida o jerarquizada.', 'A site with a large amount of information that is poorly distributed or prioritized.'),
                  T('Dos menús (INE y Censo) que confunden por su duplicación y estilo diferente.', 'Two menus (INE and Census) that confuse because of their duplication and different style.'),
                  T('Imágenes y banners muy grandes que dificultan visualizar el contenido.', 'Very large images and banners that make the content hard to view.'),
                  T('Una paleta de colores múltiple, a veces infantil o poco consistente, aunque perciben buena legibilidad general.', 'A multi-color palette, sometimes childish or inconsistent, although they perceive good overall legibility.'),
                  T('Elementos fijos (como "Evalúanos") que interfieren con la navegación o tapan contenidos.', 'Fixed elements (like "Evalúanos") that interfere with navigation or cover content.'),
                ],
              },
              {
                title: T('¿Qué dice y hace?', 'What does the user say and do?'),
                points: [
                  T('Comenta que el sitio es intuitivo pero visualmente mejorable.', 'Says the site is intuitive but visually improvable.'),
                  T('Sugiere mejorar jerarquía, simplificar menús, y hacer más visibles los contenidos clave.', 'Suggests improving hierarchy, simplifying menus and making key content more visible.'),
                  T('Propone incluir un buscador, reducir los tamaños de elementos, y alinear estilos visuales.', 'Proposes adding a search function, reducing element sizes and aligning visual styles.'),
                  T('Destaca positivamente las funciones de accesibilidad (tamaño de letra, contraste) y la claridad del texto.', 'Positively highlights the accessibility features (font size, contrast) and the clarity of the text.'),
                ],
              },
              {
                title: T('¿Qué le frustra?', 'What frustrates the user?'),
                points: [
                  T('La falta de consistencia visual entre secciones.', 'The lack of visual consistency between sections.'),
                  T('Tener que leer demasiado o hacer scroll excesivo para acceder a información relevante.', 'Having to read too much or scroll excessively to reach relevant information.'),
                  T('Múltiples menús y opciones redundantes.', 'Multiple menus and redundant options.'),
                  T('Elementos que tapan o interrumpen la interacción (botón "Evalúanos", banners grandes, etc.).', 'Elements that cover or interrupt interaction ("Evalúanos" button, large banners, etc.).'),
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'pov',
        title: T('Punto de vista (POV)', 'Point of view (POV)'),
        blocks: [
          {
            type: 'list',
            items: [
              T('Los usuarios necesitan una mejor jerarquía de menú porque confunden al usuario en la versión mobile al existir 2 tipos (INE y Censo) en el mismo sitio.', 'Users need a better menu hierarchy because the two types (INE and Census) on the same site confuse them in the mobile version.'),
              T('Los usuarios necesitan información más concisa, porque mucha desorienta al usuario.', 'Users need more concise information, because too much of it disorients them.'),
              T('Los usuarios necesitan que se optimicen las imágenes para una carga del sitio más rápida, porque el exceso de espera hace que lo abandone. Y agregar atributo "alt" a estas en caso de que no carguen.', 'Users need images to be optimized for faster site loading, because excessive waiting makes them leave. And an "alt" attribute should be added to them in case they don\'t load.'),
              T('Los usuarios necesitan una mejor diagramación de los contenidos para poder escanear de forma más rápida la información de la web.', 'Users need better content layout so they can scan the information on the web faster.'),
              T('Los usuarios necesitan un buscador porque ayudaría a encontrar la información de manera rápida y exacta de lo que necesitan.', 'Users need a search function because it would help them find exactly what they need quickly.'),
              T('Los usuarios necesitan iconografía universal porque permitiría deducir de manera inmediata su uso.', 'Users need universal iconography because it would let them deduce its use immediately.'),
              T('Los usuarios necesitan textos e imágenes de tamaño apropiado porque sienten que son muy invasivos al momento de navegar el sitio, en especial en su versión mobile.', 'Users need appropriately sized text and images because they feel they are very invasive when browsing the site, especially in the mobile version.'),
            ],
          },
        ],
      },
      {
        id: 'recommendations',
        title: T('Recomendaciones finales: sitio Censo', 'Final recommendations: Census site'),
        blocks: [
          {
            type: 'groups',
            items: [
              {
                title: T('1. Mejorar coherencia visual y jerarquía de diseño', '1. Improve visual coherence and design hierarchy'),
                points: [
                  T('Simplificar la interfaz reduciendo la cantidad de elementos en pantalla (especialmente la doble barra de menú).', 'Simplify the interface by reducing the number of elements on screen (especially the double menu bar).'),
                  T('Reforzar los márgenes, espaciados y consistencia de estilos en secciones como Ineduca y Redatam para evitar sensación de "sitio descuidado".', 'Reinforce margins, spacing and style consistency in sections such as Ineduca and Redatam to avoid a feeling of a "neglected site".'),
                  T('Revisar la paleta institucional: mantener coherencia con la identidad de gobierno, pero explorar matices o contrastes que aporten calidez y cercanía.', 'Review the institutional palette: keep coherence with government identity, but explore shades or contrasts that add warmth and approachability.'),
                ],
              },
              {
                title: T('2. Optimizar la arquitectura de información', '2. Optimize the information architecture'),
                points: [
                  T('Reorganizar el contenido denso (por ejemplo, las preguntas frecuentes) en bloques más pequeños, con categorías o filtros temáticos.', 'Reorganize dense content (for example, the FAQ) into smaller blocks, with categories or thematic filters.'),
                  T('Priorizar el acceso rápido a los contenidos más demandados mediante enlaces destacados o accesos directos.', 'Prioritize quick access to the most in-demand content through featured links or shortcuts.'),
                  T('Evaluar la fusión o simplificación de menús para reducir la carga cognitiva del usuario.', 'Evaluate merging or simplifying menus to reduce the user\'s cognitive load.'),
                ],
              },
              {
                title: T('3. Aumentar la percepción de modernidad y atractivo visual', '3. Increase the perception of modernity and visual appeal'),
                points: [
                  T('Incorporar elementos visuales sutiles (íconos, ilustraciones o microinteracciones) que den una sensación más actual sin afectar la sobriedad institucional.', 'Add subtle visual elements (icons, illustrations or micro-interactions) that give a more current feel without affecting institutional sobriety.'),
                  T('Mejorar el contraste y uso del color para resaltar información clave sin caer en la saturación.', 'Improve contrast and use of color to highlight key information without falling into saturation.'),
                  T('Revisar el uso de tipografía: mantener buena legibilidad, pero equilibrar tamaños para mejorar la armonía visual.', 'Review typography use: keep good legibility but balance sizes to improve visual harmony.'),
                ],
              },
              {
                title: T('4. Reforzar accesibilidad y experiencia inclusiva', '4. Strengthen accessibility and the inclusive experience'),
                points: [
                  T('Asegurar un tamaño mínimo de fuente adecuado para usuarios con dificultades visuales (validado positivamente en los comentarios).', 'Ensure an adequate minimum font size for users with visual difficulties (positively validated in the comments).'),
                  T('Verificar contraste de colores, estructura de encabezados y navegación por teclado conforme a estándares WCAG.', 'Verify color contrast, heading structure and keyboard navigation according to WCAG standards.'),
                  T('Incluir lenguaje claro y lectura fácil en textos extensos.', 'Include plain language and easy reading in long texts.'),
                ],
              },
              {
                title: T('5. Potenciar la claridad informativa', '5. Boost informational clarity'),
                points: [
                  T('Mantener el tono simple y directo valorado por los usuarios, evitando sobrecarga textual o técnica.', 'Keep the simple, direct tone that users value, avoiding textual or technical overload.'),
                  T('Incluir indicadores visuales o resúmenes en secciones extensas para facilitar la comprensión.', 'Include visual indicators or summaries in long sections to ease comprehension.'),
                  T('Revisar los textos y llamados a la acción para que sean más orientativos y empáticos.', 'Review texts and calls to action so they are more guiding and empathetic.'),
                ],
              },
              {
                title: T('6. Mejorar la retroalimentación al usuario', '6. Improve feedback to the user'),
                points: [
                  T('Implementar estados visuales claros en botones, formularios y procesos interactivos (hover, loading, confirmación).', 'Implement clear visual states in buttons, forms and interactive processes (hover, loading, confirmation).'),
                  T('Incorporar mensajes de error o éxito comprensibles y coherentes con el tono institucional.', 'Add understandable error or success messages consistent with the institutional tone.'),
                ],
              },
            ],
          },
          {
            type: 'quote',
            text: T('Después de que hayas trabajado en un sitio por unas pocas semanas, ya no podrás volver a verlo. Sabes demasiado. La única forma de descubrir si realmente funciona es probarlo.', 'After you\'ve worked on a site for a few weeks, you can no longer see it. You know too much. The only way to find out if it really works is to test it.'),
            cite: 'Steve Krug',
          },
        ],
      },
    ],
  };
}

export const censo: Record<Locale, CaseStudy> = { es: make('es'), en: make('en') };
