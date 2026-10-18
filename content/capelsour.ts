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
      {
        id: 'originals',
        title: T('Stories y posts originales', 'Original stories and posts'),
        blocks: [
          { type: 'p', text: T('Material original de Capel Sour y Capel Mix, tal como se produjo para Instagram: stories verticales y posts animados.', 'Original Capel Sour and Capel Mix material, as produced for Instagram: vertical stories and animated posts.') },
          {
            type: 'gallery',
            items: [
              { src: '/projects/capelsour/04.jpg', alt: T('Story animada con un cóctel de cítricos y hojas visto desde arriba, sobre un fondo dividido en rosa y verde.', 'Animated story with a citrus cocktail and leaves seen from above, on a background split into pink and green.'), caption: T('Story animada: cóctel con rodajas de cítrico y hojas sobre un fondo dividido en rosa y verde.', 'Animated story: a cocktail with citrus slices and leaves on a background split into pink and green.'), videoSrc: '/projects/capelsour/04.mp4' },
              { src: '/projects/capelsour/05.jpg', alt: T('Story de Navidad con dos copas brindando frente a un árbol de Navidad y el logo de Capel Sour y Mix.', 'Christmas story with two glasses toasting in front of a Christmas tree and the Capel Sour & Mix logo.'), caption: T('Story del 24 de diciembre: «Porque sabemos que esta noche es NocheBuena, ¡qué mejor que brindar con un Capel Sour y Mix! ¡Feliz Navidad!»', 'Story for 24 December: “Because we know tonight is Christmas Eve, what better than a toast with a Capel Sour & Mix! Merry Christmas!”'), videoSrc: '/projects/capelsour/05.mp4' },
              { src: '/projects/capelsour/06.jpg', alt: T('Post animado de un calendario de marzo de 2021 con imanes, recibos y botellas de Capel Mix, con el 31 marcado.', 'Animated post of a March 2021 calendar with magnets, receipts and Capel Mix bottles, with the 31st marked.'), date: '2021-03-31', caption: T('Post de fin de mes: en el calendario, el 31 dice «¡Fin de mes! Una copita de Sour, 19:00 pm».', 'End-of-month post: on the calendar, the 31st reads “End of the month! A little glass of Sour, 7:00 pm”.'), videoSrc: '/projects/capelsour/06.mp4' },
              { src: '/projects/capelsour/07.jpg', alt: T('Story con una botella de Capel Sour Pisco Sour sobre un podio, con un chorro de limón que se expande.', 'Story with a Capel Sour Pisco Sour bottle on a podium, with a splash of lemon bursting out.'), caption: T('Story de verano: «El sour para acompañar tu verano. Está a la vuelta de la esquina».', 'Summer story: “The sour to go with your summer. It’s just around the corner.”'), videoSrc: '/projects/capelsour/07.mp4' },
              { src: '/projects/capelsour/08.jpg', alt: T('Story de Capel Sour Maracuyá Light con botellas de varios sabores sobre fondo amarillo, con maracuyá, limón y mango.', 'Capel Sour Passion Fruit Light story with bottles of several flavours on a yellow background, with passion fruit, lemon and mango.'), caption: T('Story de Capel Sour Maracuyá Light: «Sabor intenso».', 'Capel Sour Passion Fruit Light story: “Intense flavour”.'), videoSrc: '/projects/capelsour/08.mp4' },
              { src: '/projects/capelsour/09.jpg', alt: T('Story con botellas de Capel Sour y Capel Mix alineadas en filas sobre un fondo verde lima.', 'Story with Capel Sour and Capel Mix bottles lined up in rows on a lime green background.'), caption: T('Story de venta: «Listas y heladitas para llevártelas a casa. ¡Pide las tuyas acá!»', 'Sales story: “Ready and ice cold to take home. Order yours here!”'), videoSrc: '/projects/capelsour/09.mp4' },
              { src: '/projects/capelsour/10.jpg', alt: T('Story de Capel Mix Piña Colada con dos botellas, una piña y dos copas servidas sobre estantes naranjas.', 'Capel Mix Piña Colada story with two bottles, a pineapple and two served glasses on orange shelves.'), caption: T('Story de Capel Mix Piña Colada, con las botellas y los cócteles servidos.', 'Capel Mix Piña Colada story, with the bottles and the served cocktails.'), videoSrc: '/projects/capelsour/10.mp4' },
              { src: '/projects/capelsour/11.jpg', alt: T('Post animado de una botella de Capel Sour Pisco Sour frente a una playa, bajo hojas de palmera.', 'Animated post of a Capel Sour Pisco Sour bottle in front of a beach, under palm leaves.'), caption: T('Post animado de Pisco Sour con un fondo de playa y palmeras.', 'Animated Pisco Sour post with a beach and palm tree background.'), videoSrc: '/projects/capelsour/11.mp4' },
              { src: '/projects/capelsour/12.jpg', alt: T('Story con una botella de Capel Sour Limón Sutil sobre una ola, con dos limones y el texto «Esto si es #verano».', 'Story with a Capel Sour Limón Sutil bottle over a wave, with two lemons and the text “Esto si es #verano”.'), caption: T('Story de verano: «Esto si es #verano».', 'Summer story: “Esto si es #verano”.') },
              { src: '/projects/capelsour/13.jpg', alt: T('Post con una botella de Capel Sour Pisco Sour Limón Sutil entre hojas, con medio limón y el texto «Hecho con jugo natural de Limón».', 'Post with a Capel Sour Pisco Sour Limón Sutil bottle among leaves, with half a lemon and the text “Hecho con jugo natural de Limón”.'), caption: T('Post: «Hecho con jugo natural de Limón».', 'Post: “Hecho con jugo natural de Limón” (made with natural lemon juice).') },
            ],
          },
        ],
      },
    ],
  };
}

export const capelsour: Record<Locale, CaseStudy> = { es: make('es'), en: make('en') };
