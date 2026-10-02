import type { Block, CaseStudy, Locale } from './types';

const base = '/projects/ux-report/evidence';
const img = (file: string, alt: string, caption?: string, width?: number): Block => ({
  type: 'image',
  src: `${base}/${file}.jpg`,
  alt,
  caption,
  width,
});

function make(l: Locale): CaseStudy {
  const T = (es: string, en: string) => (l === 'es' ? es : en);

  const rec = (n: number, title: string, text: string, file: string, alt: string): Block[] => [
    { type: 'h3', text: `${n}. ${title}` },
    { type: 'p', text },
    img(file, alt),
  ];

  return {
    meta: [
      T('Diseñador UX/UI', 'UX/UI Designer'),
      T('Laika, agencia digital de Dittborn & Unzueta', 'Laika, the digital agency of Dittborn & Unzueta'),
      T('Cliente: Carnes A Punto', 'Client: Carnes A Punto'),
      '2023',
    ],
    glance: [
      { label: T('Rol', 'Role'), value: T('Diseñador UX/UI', 'UX/UI Designer') },
      { label: T('Agencia', 'Agency'), value: T('Laika, agencia digital de Dittborn & Unzueta', 'Laika, the digital agency of Dittborn & Unzueta') },
      { label: T('Cliente', 'Client'), value: T('Carnes A Punto (carnesapunto.cl y carnesadomicilio.cl)', 'Carnes A Punto (carnesapunto.cl and carnesadomicilio.cl)') },
      { label: T('Alcance', 'Scope'), value: T('Levantamiento inicial: mercado y consumidor, rendimiento web de los 2 sitios propios y de 7 competidores, y recomendaciones preliminares', 'Initial review: market and consumer, web performance of the 2 own sites and 7 competitors, and preliminary recommendations') },
      { label: T('Resultado', 'Outcome'), value: T('6 recomendaciones y una hipótesis de Home (una dirección, no un diseño final)', '6 recommendations and a Home hypothesis (a direction, not a final design)') },
    ],
    toc: [
      { id: 'objectives', label: T('Objetivos', 'Objectives') },
      { id: 'market', label: T('Mercado', 'Market') },
      { id: 'consumer', label: T('Consumidor', 'Consumer') },
      { id: 'interest', label: T('Interés por la carne', 'Interest in meat') },
      { id: 'performance', label: T('Rendimiento', 'Performance') },
      { id: 'recommendations', label: T('Recomendaciones', 'Recommendations') },
      { id: 'hypothesis', label: T('Hipótesis', 'Hypothesis') },
      { id: 'conclusion', label: T('Conclusión', 'Conclusion') },
    ],
    hero: {
      src: '/projects/ux-report/cover.jpg',
      alt: T('Sitio web actual de Carnes A Punto', 'Current Carnes A Punto website'),
    },
    sections: [
      {
        id: 'objectives',
        title: T('Objetivos del proyecto', 'Project objectives'),
        subtitle: T('Optimización de la experiencia digital de Carnes a Punto', 'Optimizing the digital experience of Carnes a Punto'),
        blocks: [
          {
            type: 'list',
            items: [
              T('Incrementar las ventas online optimizando el flujo de compra en Carnesapunto.cl y Carnesadomicilio.cl.', 'Increase online sales by optimizing the purchase flow on Carnesapunto.cl and Carnesadomicilio.cl.'),
              T('Aumentar el uso del Quincho potenciando contenidos, visibilidad y propuesta de valor dentro del ecosistema.', 'Increase use of the Quincho (the Prime House event space) by strengthening content, visibility and value proposition within the ecosystem.'),
              T('Mejorar la encontrabilidad de productos optimizando navegación, filtros y arquitectura de información.', 'Improve product findability by optimizing navigation, filters and information architecture.'),
            ],
          },
        ],
      },
      {
        id: 'market',
        title: T('Mercado chileno: alto consumo + fuerte crecimiento digital', 'Chilean market: high consumption + strong digital growth'),
        blocks: [
          { type: 'p', text: T('Chile se mantiene entre los mayores consumidores de carne del mundo (OCDE, 2022).', 'Chile remains among the world\'s largest meat consumers (OECD, 2022).') },
          { type: 'p', text: T('En paralelo, el comercio online sigue creciendo sostenidamente, impulsado por una transformación digital acelerada, mayor seguridad en los canales de pago y plataformas más usables.', 'In parallel, online commerce keeps growing steadily, driven by accelerated digital transformation, greater security in payment channels and more usable platforms.') },
          { type: 'p', text: T('Este contexto favorece directamente la venta de productos cárnicos online, especialmente en modelos de compra rápida y despacho a domicilio.', 'This context directly favors selling meat products online, especially in quick-purchase and home-delivery models.') },
          { type: 'p', text: T('A diferencia de otros productos, la venta de carnes frescas online implica un desafío mayor: requiere conocer profundamente al cliente, sus hábitos de compra y sus expectativas de seguridad e inocuidad.', 'Unlike other products, selling fresh meat online is a bigger challenge: it requires knowing the customer deeply, their buying habits and their expectations of safety and food hygiene.') },
          { type: 'p', text: T('Para diseñar una experiencia confiable y efectiva, es esencial estudiar al usuario real, entender sus fricciones y necesidades, y al mismo tiempo responder a los objetivos de los stakeholders involucrados.', 'To design a trustworthy and effective experience, it is essential to study the real user, understand their frictions and needs, and at the same time respond to the goals of the stakeholders involved.') },
          { type: 'h3', text: T('Retos del mercado para la venta de carne online', 'Market challenges for selling meat online') },
          { type: 'p', text: T('El sector cárnico enfrenta desafíos específicos al migrar al canal digital. Estos son los factores clave que condicionan la experiencia de compra y la confianza del usuario.', 'The meat sector faces specific challenges when moving to the digital channel. These are the key factors that shape the purchase experience and user trust.') },
          {
            type: 'cards',
            items: [
              { title: T('1. Precio como barrera percibida', '1. Price as a perceived barrier'), text: T('Aunque el precio no varía significativamente entre tienda física y online, para muchos consumidores sigue siendo difícil justificar la compra sin ver la calidad del producto.', 'Although price doesn\'t vary significantly between physical and online stores, many consumers still find it hard to justify the purchase without seeing the product\'s quality.') },
              { title: T('2. Logística e inocuidad', '2. Logistics and food safety'), text: T('La cadena de transporte y distribución es el principal reto: los productos frescos dependen de sistemas de envío confiables y consistentes. A pesar de los avances, existen limitaciones que afectan la experiencia.', 'The transport and distribution chain is the main challenge: fresh products depend on reliable, consistent shipping systems. Despite progress, there are limitations that affect the experience.') },
              { title: T('3. Nuevas generaciones impulsando el canal', '3. New generations driving the channel'), text: T('Millennials y Gen Z están más habituados a la compra online y serán quienes aceleren la adopción del canal para productos frescos, incluyendo carnes.', 'Millennials and Gen Z are more used to buying online and will be the ones to accelerate adoption of the channel for fresh products, including meat.') },
              { title: T('4. Necesidad de conocer al cliente', '4. Need to know the customer'), text: T('El e-commerce permite entender con mayor precisión los hábitos y necesidades del consumidor. Esta información es clave para adaptar la plataforma, mejorar la experiencia y responder a los objetivos del negocio.', 'E-commerce makes it possible to understand consumer habits and needs more precisely. This information is key to adapting the platform, improving the experience and meeting business goals.') },
            ],
          },
          {
            type: 'list',
            items: [
              T('Fuente citada: "Chile es uno de los países que más consume carne en el mundo" (Grupo Prensa Digital, 25 de agosto de 2022).', 'Source cited: "Chile is one of the countries that consumes the most meat in the world" (Grupo Prensa Digital, August 25, 2022).'),
              T('Fuente citada: "Seis razones por las que el comercio electrónico continúa al alza en Chile" (Grupo Prensa Digital, 12 de agosto de 2022).', 'Source cited: "Six reasons why e-commerce keeps growing in Chile" (Grupo Prensa Digital, August 12, 2022).'),
            ],
          },
        ],
      },
      {
        id: 'consumer',
        title: T('Consumidor chileno', 'The Chilean consumer'),
        blocks: [
          { type: 'p', text: T('Según el estudio "Preferencias y Tendencias de los Alimentos en Chile, 2021" de Deloitte, es posible identificar patrones que contextualizan el consumo de carnes dentro del mercado chileno. Estos hallazgos permiten comprender mejor hábitos de compra, prioridades del consumidor y frecuencia de consumo de productos frescos.', 'According to Deloitte\'s study "Food Preferences and Trends in Chile, 2021", patterns can be identified that contextualize meat consumption within the Chilean market. These findings help us better understand buying habits, consumer priorities and frequency of consumption of fresh products.') },
          img('deloitte', T('Figuras del estudio de Deloitte sobre presupuesto, frecuencia y canal de compra de alimentos en Chile', 'Figures from the Deloitte study on food budget, purchase frequency and purchase channel in Chile'), T('Fuente: Deloitte, Preferencias y Tendencias de los Alimentos en Chile (2021). N=1019.', 'Source: Deloitte, Food Preferences and Trends in Chile (2021). N=1019.')),
          { type: 'h3', text: T('Insights clave del estudio Deloitte (2021)', 'Key insights from the Deloitte study (2021)') },
          {
            type: 'groups',
            items: [
              { title: T('El peso de la carne', 'The weight of meat'), points: [T('La carne representa el 21% del presupuesto mensual de alimentos en los hogares chilenos, consolidándose como una de las categorías de mayor gasto y prioridad.', 'Meat represents 21% of the monthly food budget in Chilean households, establishing itself as one of the highest-spending, highest-priority categories.')] },
              { title: T('La frecuencia de compra es alta', 'Purchase frequency is high'), points: [T('Al menos 68% de la población compra carne una vez cada dos semanas o más, lo que demuestra un consumo estable y recurrente.', 'At least 68% of the population buys meat once every two weeks or more, which shows stable, recurring consumption.')] },
              {
                title: T('El canal dominante sigue siendo físico', 'The dominant channel is still physical'),
                points: [
                  T('51% compra carne en grandes cadenas de supermercados.', '51% buy meat at large supermarket chains.'),
                  T('25% en supermercados locales.', '25% at local supermarkets.'),
                  T('Solo 2% compra a través de apps o sitios web, lo que revela una gran oportunidad para el canal digital, hoy subdesarrollado.', 'Only 2% buy through apps or websites, which reveals a big opportunity for the digital channel, currently underdeveloped.'),
                ],
              },
              {
                title: T('Los factores de decisión son cada vez más complejos', 'Decision factors are increasingly complex'),
                points: [
                  T('Para una compra satisfactoria, los consumidores requieren información clara y confiable: si el producto es orgánico, información nutricional, origen y procedencia, tipo de corte, certificaciones y manejo en frío, entre otros.', 'For a satisfying purchase, consumers need clear, reliable information: whether the product is organic, nutritional information, origin and provenance, cut type, certifications and cold-chain handling, among others.'),
                  T('Esto obliga a los sitios a ofrecer una ficha técnica completa y transparente.', 'This obliges sites to offer a complete, transparent product sheet.'),
                ],
              },
              { title: T('Oportunidad digital evidente', 'A clear digital opportunity'), points: [T('La baja participación online se explica más por desconfianza y falta de información, que por falta de interés. Una experiencia digital sólida puede capturar un mercado que hoy compra casi exclusivamente de forma física.', 'Low online participation is explained more by distrust and lack of information than by lack of interest. A solid digital experience can capture a market that today buys almost exclusively in person.')] },
              {
                title: T('El desafío UX/UI: construir una experiencia capaz de…', 'The UX/UI challenge: build an experience able to…'),
                points: [
                  T('Generar confianza en productos frescos (transparencia, trazabilidad, calidad).', 'Build trust in fresh products (transparency, traceability, quality).'),
                  T('Ofrecer un flujo de compra simple y seguro.', 'Offer a simple, safe purchase flow.'),
                  T('Informar con claridad para sostener decisiones más conscientes.', 'Inform clearly to support more conscious decisions.'),
                  T('Traducir hábitos tradicionales de compra al entorno digital.', 'Translate traditional buying habits into the digital environment.'),
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'interest',
        title: T('Aumento en el interés por conocimientos relacionados a la carne', 'Growing interest in meat-related knowledge'),
        blocks: [
          { type: 'p', text: T('Durante los últimos años, ha crecido significativamente el interés de los consumidores por aprender más sobre la carne: desde identificar los mejores cortes hasta conocer su preparación ideal según el tipo de parrilla o método de cocción. Medios, marcas y expertos están generando cada vez más contenido educativo que el público busca activamente.', 'In recent years, consumer interest in learning more about meat has grown significantly: from identifying the best cuts to knowing their ideal preparation depending on the type of grill or cooking method. Media, brands and experts are producing more and more educational content that the public actively seeks out.') },
          { type: 'h3', text: T('Tendencias observadas', 'Observed trends') },
          {
            type: 'list',
            items: [
              T('Publicaciones que destacan los mejores cortes parrilleros y cómo seleccionarlos.', 'Posts highlighting the best grilling cuts and how to choose them.'),
              T('Contenido sobre cortes recomendados para cada tipo de parrilla (carbón, gas, eléctrica).', 'Content about recommended cuts for each type of grill (charcoal, gas, electric).'),
              T('Artículos prácticos con tips para preparar un buen asado, incluso en contextos urbanos o con equipos alternativos.', 'Practical articles with tips for preparing a good barbecue, even in urban settings or with alternative equipment.'),
            ],
          },
          { type: 'p', text: T('Estas tendencias evidencian que el consumidor ya no solo compra carne: quiere aprender, experimentar y mejorar su experiencia completa.', 'These trends show that consumers no longer just buy meat: they want to learn, experiment and improve their whole experience.') },
          { type: 'h3', text: T('Insight clave', 'Key insight') },
          { type: 'p', text: T('Los clientes ya no buscan únicamente satisfacer una necesidad alimentaria. Hoy:', 'Customers no longer look only to satisfy a food need. Today they:') },
          {
            type: 'list',
            items: [
              T('Quieren información confiable sobre cada corte.', 'Want reliable information about each cut.'),
              T('Buscan experiencias: maridajes, técnicas, preparaciones y rituales alrededor del asado.', 'Look for experiences: pairings, techniques, preparations and rituals around the barbecue.'),
              T('Se está consolidando una verdadera "cultura parrillera", similar a lo ocurrido en el mundo del vino y la cerveza artesanal.', 'A true "grill culture" is taking shape, similar to what happened in the worlds of wine and craft beer.'),
            ],
          },
          {
            type: 'list',
            items: [
              T('Ejemplos de contenido educativo observado: "La receta del Profesor Klocker, el señor de los asados"; "Parrilla: los 7 cortes de res más usados y cómo prepararlos"; "Fiestas Patrias: ¿Cuáles son los mejores cortes de carne para la parrilla?"; "Expertos en asados eligen los mejores cortes parrilleros"; "Consejos y recetas para salvar el asado con una parrilla eléctrica".', 'Examples of educational content observed: "La receta del Profesor Klocker, el señor de los asados"; "Parrilla: los 7 cortes de res más usados y cómo prepararlos"; "Fiestas Patrias: ¿Cuáles son los mejores cortes de carne para la parrilla?"; "Expertos en asados eligen los mejores cortes parrilleros"; "Consejos y recetas para salvar el asado con una parrilla eléctrica" (Chilean media articles, 2022; titles in Spanish).'),
            ],
          },
        ],
      },
      {
        id: 'performance',
        title: T('Análisis de rendimiento web', 'Web performance analysis'),
        blocks: [
          { type: 'p', text: T('La velocidad de carga es un factor clave en la experiencia del usuario: el 53% de las visitas se abandona si una página tarda más de 3 segundos en cargar. Además, el 52% de los compradores online declara que una carga rápida es determinante para mantener su lealtad hacia un sitio web.', 'Load speed is a key factor in user experience: 53% of visits are abandoned if a page takes more than 3 seconds to load. In addition, 52% of online shoppers say fast loading is decisive for staying loyal to a website.') },
          { type: 'h3', text: T('Rendimiento de los sitios actuales', 'Performance of the current sites') },
          {
            type: 'table',
            tone: true,
            head: [T('Sitio', 'Site'), T('Nota', 'Grade'), 'Performance', 'Structure', T('Tiempo de carga total', 'Fully loaded time')],
            rows: [
              ['Carnes a Punto', 'B', '84%', '73%', '7.5 s'],
              ['Carnes a Domicilio', 'B', '88%', '77%', '2.9 s'],
            ],
          },
          { type: 'h3', text: T('Rendimiento de los sitios de la competencia', 'Performance of competitor sites') },
          {
            type: 'table',
            tone: true,
            head: [T('Sitio', 'Site'), T('Nota', 'Grade'), 'Performance', 'Structure', T('Tiempo de carga total', 'Fully loaded time')],
            rows: [
              ['Meat Me', 'A', '95%', '89%', '3.6 s'],
              ['De la Carne', 'F', '42%', '61%', '10.1 s'],
              ['Azador', 'F', '21%', '58%', '12.4 s'],
              ['Carnes Premium a Domicilio', 'E', '51%', '61%', '5.0 s'],
              ['Corrales del Sur', 'B', '92%', '80%', '6.1 s'],
              ['Carnes.cl', 'B', '84%', '92%', '2.9 s'],
              ['Del Sur', 'E', '49%', '72%', '7.1 s'],
            ],
          },
        ],
      },
      {
        id: 'recommendations',
        title: T('Recomendaciones preliminares', 'Preliminary recommendations'),
        blocks: [
          { type: 'p', text: T('El análisis de estos competidores permite identificar buenas prácticas, oportunidades y brechas que podemos abordar en la propuesta final. Entre ellas destacan:', 'Analyzing these competitors lets us identify good practices, opportunities and gaps that we can address in the final proposal. Among them:') },
          {
            type: 'list',
            items: [
              T('Fuerte enfoque visual en la calidad del producto y experiencia parrillera.', 'A strong visual focus on product quality and the grilling experience.'),
              T('Categorías claras y orientadas a resolver dudas del usuario (cortes, recetas, tiempos de cocción, tipos de parrilla).', 'Clear categories oriented to resolving user questions (cuts, recipes, cooking times, types of grill).'),
              T('Promociones y productos destacados, lo que crea un incentivo inmediato para la compra.', 'Promotions and featured products, which create an immediate incentive to buy.'),
              T('Énfasis en la rapidez y trazabilidad del despacho, un factor clave para el consumidor de carnes frescas.', 'Emphasis on delivery speed and traceability, a key factor for fresh-meat consumers.'),
            ],
          },
          { type: 'p', text: T('Este panorama competitivo evidencia la necesidad de construir un sitio que no solo muestre los productos, sino que también entregue confianza, información clara y contenido que potencie la experiencia culinaria del usuario, diferenciándose mediante calidad, transparencia y una experiencia de compra superior.', 'This competitive landscape shows the need to build a site that doesn\'t just show products but also delivers trust, clear information and content that enhances the user\'s culinary experience, differentiating itself through quality, transparency and a superior purchase experience.') },
          ...rec(1, T('Sugerencias rápidas de compra', 'Quick purchase suggestions'), T('Incorporar módulos destacados como "productos recomendados", "caja del mes" o "cortes de la semana" para facilitar decisiones rápidas y aumentar el ticket promedio.', 'Add highlighted modules such as "recommended products", "box of the month" or "cuts of the week" to make quick decisions easier and raise the average order value.'), 'rec1', T('Ejemplos de módulos de compra rápida en sitios de la competencia', 'Examples of quick-purchase modules on competitor sites')),
          ...rec(2, T('Información clave presentada visualmente', 'Key information presented visually'), T('Integrar recursos gráficos como el mapa de cortes de la vaca, instrucciones simplificadas con íconos y visualizaciones que ayuden a entender mejor el producto.', 'Integrate graphic resources such as the cow cut map, simplified instructions with icons and visualizations that help people understand the product better.'), 'rec2', T('Ejemplos de mapa de cortes e información visual en la competencia', 'Examples of cut maps and visual information on competitor sites')),
          ...rec(3, T('Menú con categorías claras y jerarquizadas', 'Menu with clear, hierarchical categories'), T('Optimizar la arquitectura del menú priorizando categorías según lógica de compra: marcas, origen de la carne, tipo de animal, cortes y formatos. La claridad del menú reduce fricción y acelera la búsqueda.', 'Optimize the menu architecture by prioritizing categories according to purchase logic: brands, meat origin, type of animal, cuts and formats. A clear menu reduces friction and speeds up search.'), 'rec3', T('Ejemplo de menú jerarquizado en un sitio de la competencia', 'Example of a hierarchical menu on a competitor site')),
          ...rec(4, T('Información sobre origen y sustentabilidad', 'Information on origin and sustainability'), T('Destacar información relevante como origen del producto, tipo de alimentación del animal, procesos de producción, certificaciones e incluso cantidad por paquete. Esto aumenta la confianza y mejora la conversión.', 'Highlight relevant information such as product origin, the animal\'s diet, production processes, certifications and even quantity per pack. This increases trust and improves conversion.'), 'rec4', T('Ejemplos de información de origen en fichas de producto', 'Examples of origin information on product pages')),
          ...rec(5, T('Incorporar reseñas y evaluación de compradores', 'Add buyer reviews and ratings'), T('Incluir valoraciones reales, comentarios de clientes y calificaciones por producto aumenta la confianza y reduce la incertidumbre al momento de comprar. Las reseñas permiten al usuario validar la calidad, conocer experiencias previas y tomar decisiones más rápidas y seguras, especialmente en categorías sensibles como alimentos frescos.', 'Including real ratings, customer comments and per-product scores increases trust and reduces uncertainty at the moment of purchase. Reviews let users validate quality, learn from previous experiences and make faster, safer decisions, especially in sensitive categories like fresh food.'), 'rec5', T('Ejemplo de reseñas de clientes en una ficha de producto', 'Example of customer reviews on a product page')),
          ...rec(6, T('Detalles completos y claros del producto', 'Complete, clear product details'), T('Mostrar información precisa y útil sobre cada corte: peso exacto, tipo de corte, textura, nivel de marmoleo, porciones sugeridas, métodos de cocción recomendados y tiempo estimado de preparación. Ayuda al usuario a elegir con seguridad. En productos frescos, la claridad en los detalles reduce fricción, mejora la percepción de calidad y disminuye devoluciones o reclamos.', 'Show precise, useful information about each cut: exact weight, cut type, texture, marbling level, suggested portions, recommended cooking methods and estimated preparation time. It helps users choose with confidence. For fresh products, clear details reduce friction, improve the perception of quality and lower returns or complaints.'), 'rec6', T('Ejemplo de descripción e instrucciones de preparación de un corte', 'Example of a cut\'s description and preparation instructions')),
        ],
      },
      {
        id: 'hypothesis',
        title: T('Hipótesis UX/UI', 'UX/UI hypothesis'),
        blocks: [
          { type: 'p', text: T('La siguiente propuesta de Home se construye a partir de los hallazgos del benchmark, el análisis de competencia y las necesidades detectadas en los usuarios. Esta hipótesis plantea una estructura inicial que prioriza la claridad, la confianza y la rapidez en la toma de decisiones, integrando elementos comunes en los sitios que muestran mejor rendimiento.', 'The following Home proposal is built from the benchmark findings, the competitor analysis and the needs detected in users. This hypothesis sets out an initial structure that prioritizes clarity, trust and speed in decision-making, incorporating elements common to the best-performing sites.') },
          { type: 'h3', text: T('El diseño sugiere', 'The design suggests') },
          {
            type: 'list',
            items: [
              T('Un hero orientado a conversión, con un mensaje claro.', 'A conversion-oriented hero with a clear message.'),
              T('Módulos rápidos de compra, como "Cortes recomendados", "Productos destacados" o "Cajas listas para asar", para reducir la fricción y acelerar la decisión.', 'Quick-purchase modules such as "Recommended cuts", "Featured products" or "Ready-to-grill boxes" to reduce friction and speed up decisions.'),
              T('Recursos visuales educativos, como mapa de cortes e iconografía que explique de manera simple el proceso de compra.', 'Educational visual resources, such as a cut map and iconography that explains the purchase process simply.'),
              T('En el interior, agregar información sobre origen, calidad y sustentabilidad, reforzando la transparencia que hoy exige el usuario.', 'Inside, add information on origin, quality and sustainability, reinforcing the transparency users now demand.'),
              T('Un menú jerarquizado y fácil de navegar, que ordena las categorías según la lógica de compra: tipo de corte, origen, marcas, tipo de animal o formato.', 'A hierarchical, easy-to-navigate menu that orders categories by purchase logic: cut type, origin, brands, type of animal or format.'),
              T('Reseñas y evaluaciones de clientes, integradas como validación social para reforzar la confianza en productos frescos y disminuir la incertidumbre antes de comprar.', 'Customer reviews and ratings, integrated as social proof to reinforce trust in fresh products and reduce uncertainty before buying.'),
              T('Detalles completos del producto, incluyendo peso, nivel de marmoleo, porciones sugeridas, métodos de cocción recomendados y características específicas del corte, para apoyar una decisión informada.', 'Complete product details, including weight, marbling level, suggested portions, recommended cooking methods and cut-specific characteristics, to support an informed decision.'),
            ],
          },
          { type: 'note', text: T('Esta hipótesis no representa un diseño final, sino una dirección estratégica informada por evidencia, pensada para guiar las siguientes etapas de ideación, wireframing y validación con usuarios.', 'This hypothesis is not a final design but a strategic direction informed by evidence, meant to guide the next stages of ideation, wireframing and validation with users.') },
          img('hypothesis', T('Propuesta de Home: wireframe con hero, productos destacados y recetas', 'Home proposal: wireframe with hero, featured products and recipes'), undefined, 560),
        ],
      },
      {
        id: 'conclusion',
        title: T('Conclusión', 'Conclusion'),
        blocks: [
          { type: 'p', text: T('Este levantamiento nos permite comprender las oportunidades reales de mejora y alinear la experiencia digital con las expectativas del consumidor actual.', 'This review lets us understand the real opportunities for improvement and align the digital experience with the expectations of today\'s consumer.') },
          { type: 'p', text: T('Con estos hallazgos y recomendaciones, el siguiente paso es avanzar hacia propuestas de diseño validadas que fortalezcan la conversión, la confianza y el valor de la marca.', 'With these findings and recommendations, the next step is to move toward validated design proposals that strengthen conversion, trust and brand value.') },
        ],
      },
    ],
  };
}

export const uxReport: Record<Locale, CaseStudy> = { es: make('es'), en: make('en') };
