// [quote ES, insight ES, quote EN, insight EN]
type Row = [string, string, string, string];
type Group = { q: [string, string]; rows: Row[] };

export const mobile: Group[] = [
  {
    q: [
      `¿A qué dificultades te enfrentas al revisar el sitio web? ¿Cómo te hace sentir esto?`,
      `What difficulties do you face when browsing the website? How does that make you feel?`,
    ],
    rows: [
      [
        `Las imágenes son tan grandes que no se alcanza a ver toda la información en la pantalla y el hecho de que se muestren 2 menús lo hacen confuso al momento de navegar`,
        `Problemas de jerarquía visual y navegación. La composición genera confusión y obliga al usuario a realizar más esfuerzo para orientarse dentro del sitio.`,
        `The images are so large that you can't see all the information on the screen, and having 2 menus makes it confusing to navigate`,
        `Visual hierarchy and navigation problems. The composition creates confusion and forces users to make more effort to orient themselves within the site.`,
      ],
      [
        `Lo único que me confundió levemente fue ver la hamburguesa arriba y otro botón de menú amarillo. Al abrir ambos me di cuenta que no eran del mismo contenido.`,
        `Duplicidad de elementos de navegación genera confusión leve. Falta coherencia visual e informativa entre los menús.`,
        `The only thing that slightly confused me was seeing the hamburger icon at the top and another yellow menu button. When I opened both I realized they didn't have the same content.`,
        `Duplicated navigation elements cause mild confusion. There is a lack of visual and informational consistency between the menus.`,
      ],
      [
        `En general creo que es un sitio bastante intuitivo, siendo fácil la búsqueda de información que uno pudiese llegar a requerir, pero algo que me costó fue identificar el botón para ajustar letra, tamaño, el formato en el fondo`,
        `Buena intuitividad general, pero hay déficit de visibilidad en herramientas de accesibilidad (ajustes de texto y formato).`,
        `Overall I think it's a fairly intuitive site, and it's easy to find whatever information you might need, but something I struggled with was identifying the button to adjust font, size and background format`,
        `Good overall intuitiveness, but accessibility tools (text and format settings) lack visibility.`,
      ],
      [
        `Aparentemente ninguna, pero me hace sentir normal por ser lo que se esperaría de cualquier sitio web de algún órgano de la administración del Estado.`,
        `Expectativa cumplida, pero sin generar una experiencia destacable. El sitio cumple lo básico, sin exceder las expectativas del usuario.`,
        `Apparently none, but it feels normal because it's what you would expect from any website of a government body.`,
        `Expectations met, but without creating a remarkable experience. The site delivers the basics without exceeding user expectations.`,
      ],
      [
        `En general es bastante amigable, pero a veces siento que no puedo acceder a una visión general del sitio como para orientarme sobre la ruta a seguir de acuerdo a lo que esté buscando`,
        `Experiencia amigable pero poco estructurada. Falta una visión global del contenido que ayude a planificar la navegación.`,
        `Overall it's quite friendly, but sometimes I feel I can't get an overview of the site to orient myself on which path to follow for what I'm looking for`,
        `A friendly but loosely structured experience. A global view of the content is missing to help users plan their navigation.`,
      ],
      [
        `Parece simple de navegar, el menu principal esta un poco apretado de opciones y le faltan margenes al contenido general`,
        `Buena simplicidad de navegación, pero problemas de espaciado y legibilidad afectan la claridad visual.`,
        `It seems simple to navigate, the main menu is a bit crowded with options and the general content lacks margins`,
        `Good navigation simplicity, but spacing and legibility problems affect visual clarity.`,
      ],
      [
        `No percibí grandes dificultades. Lo único si es que quizás se siente como harta información.`,
        `Experiencia fluida y sin grandes fricciones, aunque existe ligera sobrecarga informativa.`,
        `I didn't notice major difficulties. The only thing is that it perhaps feels like a lot of information.`,
        `A smooth experience without major friction, although there is slight information overload.`,
      ],
    ],
  },
  {
    q: [
      `¿Qué propuesta harías para resolver los desafíos mencionados?`,
      `What proposal would you make to solve the challenges mentioned?`,
    ],
    rows: [
      [
        `Que el diseño en mobile adapte las imágenes para que no ocupen tanto espacio`,
        `Problemas de adaptabilidad en versión móvil. Las imágenes ocupan demasiado espacio y afectan la legibilidad y el flujo de navegación.`,
        `That the mobile design adapts the images so they don't take up so much space`,
        `Adaptability problems in the mobile version. Images take up too much space and affect legibility and navigation flow.`,
      ],
      [
        `Utilizar una simbología más universal, como las de Word con la a minúscula y que se va agrandando, o bien el engranaje de ajustes`,
        `Necesidad de iconografía más reconocible y estándar. Los usuarios buscan símbolos familiares que refuercen la comprensión inmediata de las funciones.`,
        `Use more universal symbols, like the ones in Word with a lowercase "a" that grows larger, or the settings gear`,
        `Need for more recognizable, standard iconography. Users look for familiar symbols that reinforce immediate understanding of functions.`,
      ],
      [
        `Quizás esos contenidos del botón amarillo pueden estar como barra y seleccionables. No sé, no soy experta, pero tampoco es algo que me dificultó la navegación o entendimiento del sitio y contenidos. No lo encuentro terrible, solo pensé que eran el mismo contenido`,
        `Confusión leve en elementos duplicados, pero el impacto en la usabilidad es bajo. El usuario propone una mejora visual sin percibir una falla crítica.`,
        `Maybe those contents of the yellow button could be a selectable bar. I don't know, I'm not an expert, but it didn't make navigation or understanding of the site and its content difficult either. I don't find it terrible, I just thought it was the same content`,
        `Mild confusion over duplicated elements, but the impact on usability is low. The user proposes a visual improvement without perceiving a critical failure.`,
      ],
      [
        `Creo que concentraría más la información para que las personas accedan a los puntos que deseen o puedan buscar la información. Y así no saturarlo en la primera página.`,
        `Exceso de información en la página principal. Se sugiere una mayor jerarquización y organización del contenido para evitar saturar al usuario.`,
        `I think I would concentrate the information more so that people can reach the points they want or search for the information. That way the first page isn't saturated.`,
        `Too much information on the home page. Greater hierarchy and content organization are suggested to avoid overwhelming the user.`,
      ],
      [
        `Quizás hacer alguna zona tipo banner que sea modo resumen o que sintetice un poco las opciones disponibles en el sitio`,
        `Necesidad de una vista general o punto de orientación. Los usuarios buscan una síntesis inicial que facilite comprender la estructura del sitio.`,
        `Maybe create a banner-type area in summary mode that condenses the options available on the site`,
        `Need for an overview or orientation point. Users look for an initial synthesis that makes the structure of the site easier to understand.`,
      ],
    ],
  },
  {
    q: [
      `¿Consideras necesario hacer alguna modificación al diseño del sitio? (aumentar tamaño de las letras, modificar los botones, etc.)`,
      `Do you think any modification to the site design is needed? (increase font size, change the buttons, etc.)`,
    ],
    rows: [
      [
        `El menú de censo en mobile`,
        `Problemas de navegación en versión móvil. El menú no funciona de manera intuitiva o clara, dificultando la exploración en pantallas pequeñas.`,
        `The Census menu on mobile`,
        `Navigation problems in the mobile version. The menu doesn't work intuitively or clearly, making exploration difficult on small screens.`,
      ],
      [
        `El boton de "evalúennos" se ve un poco invasivo`,
        `Elemento intrusivo en la interfaz. El botón flotante afecta la percepción visual y genera distracción o molestia.`,
        `The "evalúennos" (rate us) button looks a bit invasive`,
        `Intrusive interface element. The floating button affects visual perception and creates distraction or annoyance.`,
      ],
      [
        `Considero que causa cierta molesta el hecho de que aparezca a mano derecha la pestaña verde que indica "evalúanos", el resto esta bien.`,
        `Problemas de jerarquía visual y saturación. El botón de evaluación compite con otros elementos y distrae de las tareas principales.`,
        `I find it somewhat annoying that the green tab saying "evalúanos" (rate us) appears on the right-hand side; the rest is fine.`,
        `Visual hierarchy and saturation problems. The rating button competes with other elements and distracts from the main tasks.`,
      ],
      [
        `Aumentar tamaño de letras de la comunas clasificada para el presenso`,
        `Necesidad de mejorar la legibilidad. El tamaño de fuente es insuficiente en secciones específicas, lo que afecta la accesibilidad visual.`,
        `Increase the font size of the communes listed for the pre-census`,
        `Need to improve legibility. Font size is insufficient in specific sections, which affects visual accessibility.`,
      ],
      [
        `Creo que el menú que se despliega del botón amarillo menú, hay dos contenidos con flecha hacia abajo para abrir y justo me tapaba esas flechas el botón para evaluar. Quizás se le puede poner opacidad o que las flechas queden al lado del texto y así no lo cubre. Porque al bajar las pude ver y entender que habían más contenidos para abrir`,
        `Problemas de jerarquía visual y saturación. El botón de evaluación compite con otros elementos y distrae de las tareas principales.`,
        `I think the menu that opens from the yellow menu button has two items with a down arrow to expand, and the rating button was covering those arrows. Maybe it could have some opacity or the arrows could sit next to the text so it doesn't cover them. Because when I scrolled down I could see them and understand there was more content to open`,
        `Visual hierarchy and saturation problems. The rating button competes with other elements and distracts from the main tasks.`,
      ],
    ],
  },
  {
    q: [
      `¿Qué es lo que menos te gusta del sitio y por qué?`,
      `What do you like least about the site and why?`,
    ],
    rows: [
      [
        `Que el tamaño de los iconos sea demasiado grande`,
        `Escala desproporcionada de elementos gráficos. Los íconos ocupan demasiado espacio, afectando la lectura y jerarquía visual.`,
        `That the icons are too large`,
        `Disproportionate scale of graphic elements. Icons take up too much space, affecting reading and visual hierarchy.`,
      ],
      [
        `Lo del boton invasivo`,
        `Elemento flotante molesto. Reafirma el problema del botón "Evalúanos", percibido como una interrupción visual y funcional.`,
        `The invasive button`,
        `Annoying floating element. It reaffirms the problem with the "Evalúanos" (rate us) button, perceived as a visual and functional interruption.`,
      ],
      [
        `Tanta variedad de color, me parece que queda un poco infantil, si bien es super llamativo encuentro que se ve desordenado.`,
        `Paleta cromática incoherente. El exceso de colores resta profesionalismo y afecta la percepción de orden y seriedad institucional.`,
        `So many different colors; it feels a bit childish, and although it's very eye-catching I find it looks messy.`,
        `Incoherent color palette. Too many colors reduce professionalism and affect the perception of order and institutional seriousness.`,
      ],
      [
        `Que utilice demasiado espacio el cuadro con los enlaces de redes sociales y el cuadro con las noticias más importantes. Creo que lo primero es algo intuitivo y lo segundo no es relevante.`,
        `Prioridad de contenido mal distribuida. Se destacan elementos secundarios que distraen del propósito principal del sitio.`,
        `That the box with social media links and the box with the most important news use too much space. I think the first is intuitive and the second isn't relevant.`,
        `Poorly distributed content priority. Secondary elements are emphasized and distract from the main purpose of the site.`,
      ],
      [
        `Las letras pequeñas, dificulta la visión`,
        `Problema de accesibilidad visual. El tamaño de fuente insuficiente afecta la lectura y la inclusión de usuarios con baja visión.`,
        `The small letters make it hard to see`,
        `Visual accessibility problem. Insufficient font size affects reading and the inclusion of users with low vision.`,
      ],
      [
        `Me parecen muy grandes algunos botones por lo que se puede acceder a poca información en un mismo scroll, pero eso mismo lo hace más amigable e inclusivo para personas con visión reducida`,
        `Compromiso entre visibilidad y accesibilidad. Aunque limita la densidad de información, el tamaño beneficia la usabilidad para personas con visión reducida.`,
        `Some buttons seem very large, so little information is reachable in a single scroll, but that same thing makes it friendlier and more inclusive for people with reduced vision`,
        `A trade-off between visibility and accessibility. Although it limits information density, the size benefits usability for people with reduced vision.`,
      ],
      [
        `Quizás en algunas partes no se distingue una categoría de otra porque ocupan el mismo color.`,
        `Falta de diferenciación visual. La repetición cromática genera confusión sobre la estructura jerárquica y navegación.`,
        `Maybe in some parts one category can't be told apart from another because they use the same color.`,
        `Lack of visual differentiation. Color repetition creates confusion about the hierarchical structure and navigation.`,
      ],
    ],
  },
  {
    q: [
      `¿Qué es lo que más te gusta del sitio y por qué?`,
      `What do you like most about the site and why?`,
    ],
    rows: [
      [
        `Que cuenta con opciones para cambiar los colores y el tamaño del texto`,
        `Accesibilidad y personalización. Los usuarios valoran las herramientas que permiten ajustar el sitio a sus necesidades visuales, mejorando la inclusión y la comodidad de uso.`,
        `That it has options to change the colors and the text size`,
        `Accessibility and personalization. Users value tools that let them adjust the site to their visual needs, improving inclusion and comfort of use.`,
      ],
      [
        `Que es rápido de encontrar la información que necesitas`,
        `Eficiencia en la búsqueda. El usuario percibe una arquitectura de información clara que facilita el acceso rápido a los contenidos relevantes.`,
        `That it's quick to find the information you need`,
        `Search efficiency. The user perceives a clear information architecture that makes quick access to relevant content easier.`,
      ],
      [
        `La forma de visualizar los resultados del Censo 2017, aunque tuve problemas con los de los años 1992 y 2002.`,
        `Visualización de datos atractiva, pero inconsistente. Se valora el formato de presentación, aunque existen fallas de acceso o carga en datos históricos.`,
        `The way the 2017 Census results are displayed, although I had problems with the ones for 1992 and 2002.`,
        `Attractive but inconsistent data visualization. The presentation format is valued, although there are access or loading failures in historical data.`,
      ],
      [
        `Muy detallado y colores vivos`,
        `Estética llamativa y nivel de detalle. Los colores y la profundidad del contenido generan una sensación de dinamismo e interés.`,
        `Very detailed and vivid colors`,
        `Eye-catching aesthetics and level of detail. The colors and depth of content create a sense of dynamism and interest.`,
      ],
      [
        `Que es súper sencilla y fácil de usar`,
        `Simplicidad y claridad. Se destaca una experiencia de usuario fluida y sin fricciones, reforzando la percepción de accesibilidad cognitiva.`,
        `That it's super simple and easy to use`,
        `Simplicity and clarity. A smooth, frictionless user experience stands out, reinforcing the perception of cognitive accessibility.`,
      ],
      [
        `Lo fácil de manipular y comprender`,
        `Usabilidad intuitiva. Los usuarios valoran que la navegación y las acciones dentro del sitio sean comprensibles sin requerir instrucciones.`,
        `How easy it is to handle and understand`,
        `Intuitive usability. Users value that navigation and actions within the site are understandable without needing instructions.`,
      ],
      [
        `Creo que es fácil de entender y poder encontrar la información. No es difícil navegar en él, a pesar de ser info dura y compleja, creo que se resuelve súper bien.`,
        `Claridad en la comunicación de información compleja. El diseño facilita la comprensión de contenidos técnicos o "duros", simplificando la experiencia del usuario.`,
        `I think it's easy to understand and to find the information. It isn't hard to navigate, despite being dense and complex information; I think it's resolved really well.`,
        `Clarity in communicating complex information. The design makes technical or "hard" content easier to understand, simplifying the user experience.`,
      ],
      [
        `Se ve bastante ordenado y ofrece información interesante. Los colores y letras no saturan tanto y siguen una misma línea.`,
        `Consistencia visual y balance cromático. Se percibe un diseño ordenado, legible y armónico que favorece la lectura prolongada.`,
        `It looks quite tidy and offers interesting information. The colors and lettering aren't too saturated and follow a single line.`,
        `Visual consistency and chromatic balance. The design is perceived as tidy, legible and harmonious, which supports extended reading.`,
      ],
    ],
  },
];

export const desktop: Group[] = [
  {
    q: [
      `¿A qué dificultades te enfrentas al revisar el sitio web? ¿Cómo te hace sentir esto?`,
      `What difficulties do you face when browsing the website? How does that make you feel?`,
    ],
    rows: [
      [
        `Cuenta con 2 menús principales, uno del INE y otro sobre Censo, los botones del menú de Censo se repiten abajo como botones en cards. Ninguno de los menús comparte la misma línea gráfica, uno funciona al pasar el mouse por encima y el otro al hacer clic. Al revisar uno de los dropdown del menú del censo y luego al pasar el mouse sobre uno del INE, queda el menú Censo sobre el del INE.`,
        `Inconsistencia visual y funcional en la navegación. La duplicidad de menús y diferencias en la interacción generan confusión y sensación de falta de cohesión visual.`,
        `It has 2 main menus, one for the INE and another for the Census; the Census menu buttons are repeated below as card buttons. Neither menu shares the same graphic style, one works on hover and the other on click. When I open one of the Census menu dropdowns and then hover over an INE one, the Census menu stays on top of the INE one.`,
        `Visual and functional inconsistency in navigation. Duplicated menus and differences in interaction create confusion and a feeling of visual disconnection.`,
      ],
      [
        `Ante todo, me gustaría saber cuando de realizará el censo, esa información no está tan clara en el sitio (a pesar de que las redes sociales hacen mención al 2024, pero es fácil de pasar por alto). Fuera de eso me sentí un poco perdido en general. Siento que mucho recae en la sección de preguntas frecuentes, por ej: hace mención incluso al rango de fechas de cuando se hará, pero no lo vi hasta visitar por segunda vez esa sección.`,
        `Falta de jerarquía informativa y visibilidad del contenido clave. El usuario no encuentra fácilmente la información principal (fecha del censo), lo que indica una deficiencia en la priorización de contenido y una dependencia excesiva de las preguntas frecuentes.`,
        `Above all, I'd like to know when the census will take place; that information isn't very clear on the site (even though the social networks mention 2024, it's easy to overlook). Apart from that I felt a bit lost in general. I feel a lot rests on the FAQ section; for example, it even mentions the date range for when it will happen, but I didn't see it until I visited that section a second time.`,
        `Lack of information hierarchy and visibility of key content. The user can't easily find the main information (the census date), which indicates poor content prioritization and excessive reliance on the FAQ.`,
      ],
      [
        `Tiene mucha información que está distribuida por distintas partes del sitio haciendo que sea frustrante el buscar información en específico`,
        `Sobrecarga y dispersión del contenido. El usuario percibe desorganización y fragmentación de la información, lo que genera frustración y aumenta el esfuerzo cognitivo.`,
        `It has a lot of information spread across different parts of the site, which makes looking for specific information frustrating`,
        `Content overload and dispersion. The user perceives disorganization and fragmentation of information, which creates frustration and increases cognitive effort.`,
      ],
      [
        `Al ingresar al módulo verificador INE no encontré la forma de volver desde la misma interfaz, tuve que usar el back del navegador. A pesar que es común usar esa forma de navegar a algunos usuarios les podría dar desconfianza hacer click en él y perder alguna información.`,
        `Falta de control y retorno dentro del flujo. La navegación dentro del módulo verificador rompe la experiencia del sitio y genera inseguridad al usuario, al no ofrecer un camino claro de regreso.`,
        `When I entered the INE verifier module I couldn't find a way back from the interface itself; I had to use the browser's back button. Although that's a common way to navigate, some users might distrust clicking it and losing some information.`,
        `Lack of control and return within the flow. Navigation inside the verifier module breaks the site experience and makes the user feel insecure by not offering a clear way back.`,
      ],
      [
        `Como desafío tiene hartos ítems en el menú. Me hace sentir que debo leer harto, a veces no se tiene mucho tiempo para ello.`,
        `Menú sobrecargado y poco escaneable. El usuario percibe un exceso de opciones, lo que genera sensación de fatiga visual y desincentiva la exploración rápida del sitio.`,
        `The challenge is that it has a lot of menu items. It makes me feel I have to read a lot, and sometimes there isn't much time for that.`,
        `Overloaded menu that is hard to scan. The user perceives too many options, which creates visual fatigue and discourages quick exploration of the site.`,
      ],
      [
        `Parece simple de navegar, el menu principal esta un poco apretado de opciones y le faltan margenes al contenido general`,
        `Diseño con buena intención estructural, pero con fallas espaciales. El usuario reconoce la simplicidad del flujo general, pero señala problemas en la composición visual y la densidad del menú.`,
        `It seems simple to navigate, the main menu is a bit crowded with options and the general content lacks margins`,
        `A design with good structural intent but spatial flaws. The user recognizes the simplicity of the overall flow but points out problems in visual composition and menu density.`,
      ],
      [
        `El banner de censo se ve muy grande`,
        `Escala visual poco optimizada. Los elementos destacados (como el banner) ocupan demasiado espacio, desplazando información relevante y afectando la jerarquía visual.`,
        `The Census banner looks very large`,
        `Poorly optimized visual scale. Featured elements (like the banner) take up too much space, pushing relevant information down and affecting visual hierarchy.`,
      ],
    ],
  },
  {
    q: [
      `¿Qué propuesta harías para resolver los desafíos mencionados?`,
      `What proposal would you make to solve the challenges mentioned?`,
    ],
    rows: [
      [
        `Que los titulos sean mas descriptivos sobre la información que contienen o un buscador.`,
        `El usuario quiere encontrar la información más rápido y sin tener que explorar demasiado. Valora la claridad y orientación dentro del sitio.`,
        `That the titles be more descriptive of the information they contain, or a search function.`,
        `The user wants to find information faster without having to explore too much. They value clarity and orientation within the site.`,
      ],
      [
        `Disminuiría los ítems de menú, agrupándolos si fuera posible o sintetizando.`,
        `Hay una búsqueda de simplificación cognitiva; el usuario se siente sobrecargado visualmente o informativamente y busca una navegación más limpia y jerárquica.`,
        `I would reduce the menu items, grouping them where possible or condensing them.`,
        `There is a search for cognitive simplification; the user feels visually or informationally overloaded and looks for cleaner, more hierarchical navigation.`,
      ],
      [
        `Alinear estilos gráficos, dejar un solo menú activo al pasar el mouse, para que no estén ambos activos a la vez. Quizás poner la opción Censo en el menú principal para indicar ubicación actual del usuario. Que se dé a entender que Censo es un minisitio dentro del INE.`,
        `El usuario tiene un ojo técnico o analítico; busca consistencia visual e interacción coherente. Siente que falta una estructura lógica entre INE y Censo.`,
        `Align graphic styles and keep only one menu active on hover so both aren't active at once. Maybe put the Census option in the main menu to indicate the user's current location. Make it clear that Census is a mini-site within the INE.`,
        `The user has a technical or analytical eye; they look for visual consistency and coherent interaction. They feel a logical structure between the INE and the Census is missing.`,
      ],
      [
        `Intentaría que información como cuando se hará este censo, esté mucho más visible al inicio de la página, incluso destacaría como reconocer a los censistas, hay un módulo que habla que escaneando un código QR puedo verificar al entrevistador, llegué allí casi por accidente. Por último, yo separaría el sitio en 2 grandes secciones de entrevistador y entrevistado.`,
        `El usuario valora la claridad jerárquica y el foco en tareas. Busca una organización más narrativa y funcional (distinguir roles y objetivos).`,
        `I would try to make information like when the census will happen much more visible at the top of the page, and I'd even highlight how to recognize census takers; there's a module saying that by scanning a QR code I can verify the interviewer, and I got there almost by accident. Finally, I would split the site into 2 main sections: interviewer and interviewee.`,
        `The user values hierarchical clarity and a task focus. They look for a more narrative and functional organization (distinguishing roles and goals).`,
      ],
      [
        `Bajar las resoluciones o peso de imágenes para mejor carga. Otro tema, son los colores, muchos colores incluso el azul no es el mismo en un banner y en la imagen del carrusel.`,
        `El usuario percibe falta de profesionalismo visual o cuidado técnico. La inconsistencia cromática genera ruido visual y pérdida de confianza.`,
        `Lower the resolution or weight of the images for better loading. Another issue is the colors: many colors, and even the blue isn't the same in a banner and in the carousel image.`,
        `The user perceives a lack of visual professionalism or technical care. Chromatic inconsistency creates visual noise and loss of trust.`,
      ],
      [
        `Un asistente de voz`,
        `Puede leerse como ironía o una exageración, reflejando frustración por la falta de usabilidad o por la cantidad de pasos requeridos para encontrar información.`,
        `A voice assistant`,
        `It can be read as irony or exaggeration, reflecting frustration at the lack of usability or at the number of steps required to find information.`,
      ],
    ],
  },
  {
    q: [
      `¿Consideras necesario hacer alguna modificación al diseño del sitio? (aumentar tamaño de las letras, modificar los botones, etc.)`,
      `Do you think any modification to the site design is needed? (increase font size, change the buttons, etc.)`,
    ],
    rows: [
      [
        `Los colores no me convencen mucho, entiendo que tal vez sea una paleta de colores por los de gobierno, pero no me convencen. A nivel general, siento que algo le falta, el sitio es muy simple en su diseño (pero no de buena manera).`,
        `El usuario percibe falta de identidad visual y pobreza estética. Aunque entiende las restricciones institucionales, siente que el sitio no transmite modernidad ni carácter.`,
        `I'm not very convinced by the colors; I understand it may be a palette tied to government, but they don't convince me. Overall I feel something is missing, the site is very simple in its design (but not in a good way).`,
        `The user perceives a lack of visual identity and aesthetic poverty. Although they understand the institutional constraints, they feel the site doesn't convey modernity or character.`,
      ],
      [
        `El sitio tiene una doble barra de menú, con muchas opciones y no sé si podría llegar a lo que quiero.`,
        `El usuario experimenta confusión estructural y sobrecarga visual. La duplicidad de menús afecta la orientación y la percepción de eficiencia en la navegación.`,
        `The site has a double menu bar with many options and I'm not sure I could get to what I want.`,
        `The user experiences structural confusion and visual overload. Duplicated menus affect orientation and the perception of navigation efficiency.`,
      ],
      [
        `En la sección de ineduca hay secciones descuadradas (diseño), ejemplo: en 'redatam' no hay márgenes entre el footer y la información.`,
        `Muestra atención al detalle y percepción de errores visuales. El usuario siente que faltan ajustes de maquetación y consistencia en el diseño.`,
        `In the ineduca section some sections are misaligned (design); for example, in 'redatam' there are no margins between the footer and the information.`,
        `It shows attention to detail and perception of visual errors. The user feels that layout adjustments and design consistency are missing.`,
      ],
      [
        `El diseño del sitio se ve muy básico.`,
        `El usuario espera un diseño más elaborado o profesional. Siente que la simplicidad actual no se percibe como minimalismo intencionado, sino como falta de trabajo visual.`,
        `The site design looks very basic.`,
        `The user expects a more elaborate or professional design. They feel the current simplicity isn't perceived as intentional minimalism but as a lack of visual work.`,
      ],
      [
        `Creo que el sitio es muy cuadrado.`,
        `El usuario expresa una crítica suave o estética: percibe rigidez visual o falta de dinamismo, pero no necesariamente como un problema funcional.`,
        `I think the site is very square.`,
        `The user expresses a mild or aesthetic criticism: they perceive visual rigidity or a lack of dynamism, but not necessarily as a functional problem.`,
      ],
    ],
  },
  {
    q: [
      `¿Qué es lo que menos te gusta del sitio y por qué?`,
      `What do you like least about the site and why?`,
    ],
    rows: [
      [
        `Siento que es un sitio con información extensa, que hay que leer bastante.`,
        `El usuario percibe sobrecarga cognitiva. La cantidad de texto o contenido obliga a leer demasiado, lo que puede afectar la eficiencia y la motivación de exploración.`,
        `I feel it's a site with extensive information that requires a lot of reading.`,
        `The user perceives cognitive overload. The amount of text or content forces too much reading, which can affect efficiency and the motivation to explore.`,
      ],
      [
        `Algunas cosas me parecen muy grandes y hay muchas opciones de menú.`,
        `Hay problemas de jerarquía visual y saturación. El tamaño excesivo y el número de opciones dificultan la orientación y el escaneo rápido de la información.`,
        `Some things seem very large and there are many menu options.`,
        `There are visual hierarchy and saturation problems. Excessive size and the number of options make orientation and quick scanning of information harder.`,
      ],
      [
        `Cuenta con muchas opciones, lo que podría hacer que el usuario se pierda un poco. Muchas tonalidades de azul, lo que hace que el sitio maneje al menos 3 colores, podrían jerarquizarse o utilizar no más de 2.`,
        `El usuario detecta falta de consistencia visual y exceso de opciones, lo que genera confusión y dispersión de foco. Sugiere una simplificación cromática y estructural.`,
        `It has many options, which could make users get a bit lost. Many shades of blue, which means the site uses at least 3 colors; they could be prioritized or no more than 2 used.`,
        `The user detects a lack of visual consistency and too many options, which creates confusion and a scattered focus. They suggest chromatic and structural simplification.`,
      ],
      [
        `Siento que está bien el sitio, solo tiene pequeñas cosas que se podrían mejorar, en cuanto a colores siento que está bien en 'armonía' pero se podría mejorar cambiando algunos colores para llamar más la atención en ciertos anuncios.`,
        `El usuario valora el diseño general pero propone mejorar la jerarquía visual para destacar información clave. Muestra una percepción equilibrada: no hay rechazo, sino oportunidades de refinamiento.`,
        `I feel the site is fine, it just has small things that could be improved; as for colors I think it's fine in 'harmony' but it could improve by changing some colors to draw more attention to certain announcements.`,
        `The user values the overall design but proposes improving visual hierarchy to highlight key information. A balanced perception: there is no rejection, only opportunities for refinement.`,
      ],
      [
        `El diseño se puede mejorar por algo más vistoso.`,
        `El usuario percibe el sitio como visualmente plano o poco atractivo. Sugiere que falta dinamismo o modernidad estética.`,
        `The design could be improved with something more eye-catching.`,
        `The user perceives the site as visually flat or unattractive. They suggest a lack of dynamism or aesthetic modernity.`,
      ],
      [
        `En general, sentirme perdido dentro del sitio, no ayuda que por ejemplo al ingresar a Preparación > Prueba censal, el menú después me diga que estoy en Inicio > Censo > Prueba censal. Eso incluye el contenido mismo, tener una sensación de '¿qué estoy viendo exactamente?', por ejemplo la sección Prueba censal, no entiendo bien cuál era su propósito directo y cuál es la diferencia con el Pre censo.`,
        `Problemas de orientación del usuario. La estructura y los breadcrumbs generan confusión jerárquica y semántica sobre el contenido.`,
        `In general, feeling lost within the site. It doesn't help that, for example, when I enter Preparación > Prueba censal, the menu then tells me I'm in Inicio > Censo > Prueba censal. That includes the content itself, having a sense of 'what exactly am I looking at?'; for example, the Prueba censal section, I don't quite understand its direct purpose and how it differs from the Pre-census.`,
        `User orientation problems. The structure and breadcrumbs create hierarchical and semantic confusion about the content.`,
      ],
      [
        `Me costó encontrar el ingreso como usuario de la página (una caja o icono) y que las redes sociales estén al principio como información y no tengan una función específica.`,
        `El usuario detecta problemas de usabilidad y jerarquía funcional. Elementos importantes están mal ubicados o no comunican su propósito claramente.`,
        `I had trouble finding the user login (a box or icon), and the social networks sit at the top as information without a specific function.`,
        `The user detects usability and functional hierarchy problems. Important elements are poorly placed or don't communicate their purpose clearly.`,
      ],
    ],
  },
  {
    q: [
      `¿Qué es lo que más te gusta del sitio y por qué?`,
      `What do you like most about the site and why?`,
    ],
    rows: [
      [
        `A pesar de todo el sitio tiene mucha información, hay bastante info relevante que es útil, solo que está toda acumulada en esta gran sección de preguntas frecuentes.`,
        `El usuario valora la riqueza de contenido, pero detecta problemas de distribución y jerarquización, especialmente en Preguntas Frecuentes, lo que afecta la accesibilidad de la información.`,
        `Despite everything, the site has a lot of information; there is plenty of relevant, useful info, it's just all piled into this large FAQ section.`,
        `The user values the richness of content but detects distribution and hierarchy problems, especially in the FAQ, which affects the accessibility of information.`,
      ],
      [
        `El orden que tiene, se ve muy parecido a una página del gobierno, la paleta de colores está bien cuidada, no es saturada ni muy amplia.`,
        `Se valora la consistencia institucional y la sobriedad cromática. El diseño transmite confianza y familiaridad al alinearse con la identidad gubernamental.`,
        `The order it has; it looks very much like a government page, and the color palette is well kept, neither saturated nor too broad.`,
        `Institutional consistency and chromatic sobriety are valued. The design conveys trust and familiarity by aligning with government identity.`,
      ],
      [
        `Estéticamente funciona, aunque puede mejorar.`,
        `El usuario aprueba el diseño general, pero percibe margen de mejora visual. Existe una base estética sólida, aunque no completamente satisfactoria.`,
        `Aesthetically it works, although it can improve.`,
        `The user approves of the overall design but perceives room for visual improvement. There is a solid aesthetic base, though not entirely satisfactory.`,
      ],
      [
        `La información que entrega.`,
        `El contenido es percibido como relevante y útil, destacando el valor informativo por sobre lo visual o estructural.`,
        `The information it provides.`,
        `The content is perceived as relevant and useful, highlighting informational value over the visual or structural.`,
      ],
      [
        `Que tiene diferentes tamaños de letra, ayuda al uso de las personas mayores que tienen desgaste visual.`,
        `Se valora la inclusión y accesibilidad, especialmente hacia personas con limitaciones visuales, destacando una decisión de diseño empática y funcional.`,
        `That it has different font sizes, which helps older people with visual wear.`,
        `Inclusion and accessibility are valued, especially for people with visual limitations, highlighting an empathetic and functional design decision.`,
      ],
      [
        `La disposición de la información, como también los elementos más frecuentados. Buen desarrollo en líneas generales.`,
        `Se percibe una estructura funcional y jerarquizada correctamente, con buen equilibrio entre contenido y navegación. Refleja satisfacción general.`,
        `The arrangement of information, as well as the most frequently visited elements. Good development overall.`,
        `A functional, correctly prioritized structure is perceived, with a good balance between content and navigation. It reflects general satisfaction.`,
      ],
      [
        `Es simple y claro en lo demás que muestra.`,
        `El sitio transmite claridad y simplicidad en la presentación de contenido, generando una experiencia intuitiva y sin fricción cognitiva.`,
        `It's simple and clear in everything else it shows.`,
        `The site conveys clarity and simplicity in how it presents content, creating an intuitive experience without cognitive friction.`,
      ],
      [
        `Que los textos son fáciles de leer por el tamaño de la fuente.`,
        `El usuario valora la legibilidad y accesibilidad tipográfica, lo que refuerza la percepción de usabilidad inclusiva y comodidad visual.`,
        `That the texts are easy to read because of the font size.`,
        `The user values legibility and typographic accessibility, which reinforces the perception of inclusive usability and visual comfort.`,
      ],
    ],
  },
];
