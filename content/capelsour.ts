import type { CaseStudy, Locale } from './types';

const ig = (code: string) => `https://www.instagram.com/p/${code}/`;

function make(l: Locale): CaseStudy {
  const T = (es: string, en: string) => (l === 'es' ? es : en);
  return {
    meta: [T('Director de arte y productor gráfico', 'Art Director and Graphic Producer'), 'Dittborn & Unzueta, Chile', '2020 – 2021'],
    hero: { src: '/projects/capelsour/02.jpg', alt: T('Cóctel Capel Sour con ilustraciones a mano alzada', 'Capel Sour cocktail with hand-drawn annotations') },
    sections: [
      {
        id: 'about',
        title: T('Contenido para Instagram', 'Instagram content'),
        blocks: [
          { type: 'p', text: T('Trabajé como director de arte y productor gráfico de los contenidos de redes sociales de la marca, en la agencia Dittborn & Unzueta, en Chile. Estas son piezas de Capel Sour, la línea de cócteles de Capel, publicadas en la cuenta @capel_sour entre diciembre de 2020 y mayo de 2021.', 'I worked as art director and graphic producer for the brand\'s social media content, at the agency Dittborn & Unzueta in Chile. These are pieces for Capel Sour, Capel\'s cocktail line, published on the @capel_sour account between December 2020 and May 2021.') },
        ],
      },
      {
        id: 'pieces',
        title: T('Piezas', 'Pieces'),
        blocks: [
          {
            type: 'gallery',
            items: [
              { src: '/projects/capelsour/03.jpg', href: ig('CI6qJZYF-ZO'), alt: T('Capel Sour Limón', 'Capel Sour Lemon'), date: '2020-12-17', caption: T('Así de refrescante es nuestro Capel Sour Limón 🍋💦 ¿Y si nos sumergimos en su suave sabor?', 'That\'s how refreshing our Capel Sour Lemon is 🍋💦 What if we dive into its smooth flavor?') },
              { src: '/projects/capelsour/02.jpg', href: ig('COv41lrhRYC'), alt: T('Cóctel Capel Sour con ilustraciones: limón, risas, llamadas de amigas y momentos increíbles', 'Capel Sour cocktail with annotations: lemon, laughter, calls with friends and incredible moments'), date: '2021-05-11', caption: T('Limón, risas y @Capelpisco estos fueron los ingredientes elegidos para crear el Sour perfecto ✨ 😍 #CapelSourYMix', 'Lemon, laughter and @Capelpisco: these were the ingredients chosen to create the perfect Sour ✨ 😍 #CapelSourYMix') },
              { src: '/projects/capelsour/01.jpg', href: ig('CPbmnZcHVVs'), alt: T('Pieza de Capel Sour para Instagram', 'Capel Sour piece for Instagram'), date: '2021-05-28', videoSrc: '/projects/capelsour/01.mp4', caption: T('Team cítricos o team dulces 🤭 ¡Prueba ambas variedades para decidir! No te arrepentirás 😉', 'Team citrus or team sweet 🤭 Try both varieties to decide! You won\'t regret it 😉') },
            ],
          },
        ],
      },
    ],
  };
}

export const capelsour: Record<Locale, CaseStudy> = { es: make('es'), en: make('en') };
