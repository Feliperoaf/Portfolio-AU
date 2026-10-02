import type { CaseStudy, Locale } from './types';

const ig = (code: string) => `https://www.instagram.com/p/${code}/`;

function make(l: Locale): CaseStudy {
  const T = (es: string, en: string) => (l === 'es' ? es : en);
  const alt = T('Pieza de Capel Pisco para Instagram', 'Capel Pisco piece for Instagram');
  return {
    meta: [T('Director de arte y productor gráfico', 'Art Director and Graphic Producer'), 'Dittborn & Unzueta, Chile', '2020 – 2021'],
    hero: { src: '/projects/capel/01.jpg', alt: T('Botella de Capel Doble Destilado Especial 1.5L', 'Bottle of Capel Doble Destilado Especial 1.5L') },
    sections: [
      {
        id: 'about',
        title: T('Contenido para Instagram', 'Instagram content'),
        blocks: [
          { type: 'p', text: T('Trabajé como director de arte y productor gráfico de los contenidos de redes sociales de la marca, en la agencia Dittborn & Unzueta, en Chile. Estas son piezas publicadas en la cuenta oficial @capelpisco entre junio de 2020 y marzo de 2021: lanzamiento de producto, contenido de conversación con la comunidad y mensajes de fechas conmemorativas.', 'I worked as art director and graphic producer for the brand\'s social media content, at the agency Dittborn & Unzueta in Chile. These are pieces published on the official @capelpisco account between June 2020 and March 2021: a product launch, community conversation content and messages for commemorative dates.') },
        ],
      },
      {
        id: 'pieces',
        title: T('Piezas', 'Pieces'),
        blocks: [
          {
            type: 'gallery',
            items: [
              { src: '/projects/capel/02.jpg', href: ig('CBRWWMOpK3Q'), alt, date: '2020-06-10', videoSrc: '/projects/capel/02.mp4', caption: T('Deja que el autocorrector haga lo suyo y responde con la primera palabra que aparezca. 😏 Solo respuestas incorrectas. #QuedateEnCasa', 'Let autocorrect do its thing and answer with the first word that shows up. 😏 Wrong answers only. #QuedateEnCasa') },
              { src: '/projects/capel/01.jpg', href: ig('CKkLR6XHTqq'), alt: T('Botella de Capel Doble Destilado Especial 1.5L sobre fondo amarillo', 'Bottle of Capel Doble Destilado Especial 1.5L on a yellow background'), date: '2021-01-27', videoSrc: '/projects/capel/01.mp4', caption: T('Ahora pasar de largo se transportó a las casas. Nuevo Capel 1.5L 😎 Hecho para durar de 22 PM a 5 AM. 👌 #ConsumoResponsable', 'Now staying up all night has moved into homes. New Capel 1.5L 😎 Made to last from 22 PM to 5 AM. 👌 #ConsumoResponsable') },
              { src: '/projects/capel/03.jpg', href: ig('CL7k59PhONP'), alt, date: '2021-03-02', videoSrc: '/projects/capel/03.mp4', caption: T('Este 2021 parece una toma 2 del 2020, ¿cuál es tu mejor consejo para superarlo con dignidad? 🤔 #ConsumoResponsable', 'This 2021 feels like a second take of 2020. What is your best advice for getting through it with dignity? 🤔 #ConsumoResponsable') },
              { src: '/projects/capel/04.jpg', href: ig('CMsfE7VBjS4'), alt, date: '2021-03-21', videoSrc: '/projects/capel/04.mp4', caption: T('Todos, todas y todes somos parte del cambio 👦🏽👩🏽‍🦰👳🏾‍♂️👩🏾‍🦱👱‍♀️👧🏿👵🏻 #DíaEliminaciónDeLaDiscriminaciónRacial', 'All of us, todos, todas y todes, are part of the change 👦🏽👩🏽‍🦰👳🏾‍♂️👩🏾‍🦱👱‍♀️👧🏿👵🏻 #DíaEliminaciónDeLaDiscriminaciónRacial') },
            ],
          },
        ],
      },
    ],
  };
}

export const capel: Record<Locale, CaseStudy> = { es: make('es'), en: make('en') };
