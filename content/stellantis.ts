import type { CaseStudy, Locale } from './types';

const ig = (code: string) => `https://www.instagram.com/p/${code}/`;
const base = '/projects/stellantis';

function make(l: Locale): CaseStudy {
  const T = (es: string, en: string) => (l === 'es' ? es : en);
  return {
    meta: [
      T('Director de arte y productor gráfico', 'Art Director and Graphic Producer'),
      T('Dittborn & Unzueta, Chile', 'Dittborn & Unzueta, Chile'),
      '2020 – 2021',
    ],
    hero: { src: `${base}/jeep-01.jpg`, alt: T('Jeep Renegade blanco subiendo un camino de montaña con nieve', 'White Jeep Renegade climbing a snowy mountain road') },
    sections: [
      {
        id: 'about',
        title: T('Redes sociales de marcas Stellantis en Chile', 'Social media for Stellantis brands in Chile'),
        blocks: [
          { type: 'p', text: T('Trabajé como director de arte y productor gráfico en las redes sociales de varias marcas de Stellantis en Chile, entre ellas RAM, Dodge, Jeep y Alfa Romeo, en la agencia Dittborn & Unzueta.', 'I worked as art director and graphic producer on the social media of several Stellantis brands in Chile, including RAM, Dodge, Jeep and Alfa Romeo, at the agency Dittborn & Unzueta.') },
          { type: 'p', text: T('A continuación se muestran piezas de Jeep y RAM, publicadas en las cuentas oficiales @jeepchile y @ramchile entre 2020 y 2021.', 'Below are pieces for Jeep and RAM, published on the official @jeepchile and @ramchile accounts between 2020 and 2021.') },
        ],
      },
      {
        id: 'jeep',
        title: 'Jeep',
        subtitle: T('Renegade, Wrangler y una activación de invierno con Valle Nevado', 'Renegade, Wrangler and a winter activation with Valle Nevado'),
        blocks: [
          {
            type: 'gallery',
            note: T('El carrusel se muestra con su primera imagen.', 'The carousel is shown with its first image.'),
            items: [
              { src: `${base}/jeep-01.jpg`, alt: T('Jeep Renegade blanco en un camino de montaña con nieve', 'White Jeep Renegade on a snowy mountain road'), date: '2020-06-18', href: ig('CBjmv3DBlUf'), caption: T('Disfruta de la comodidad y tecnología de #JeepRenegade con los controles de audio integrados al volante. #jeep #offroad #renegade #jeepchile', 'Enjoy the comfort and technology of the #JeepRenegade with audio controls built into the steering wheel. #jeep #offroad #renegade #jeepchile') },
              { src: `${base}/jeep-02.jpg`, href: ig('CRHFq0cLz7t'), alt: T('Pieza de Jeep en Valle Nevado', 'Jeep piece at Valle Nevado'), date: '2021-07-09', videoSrc: '/projects/stellantis/jeep-02.mp4', caption: T('Mantengamos vivo nuestro espíritu aventurero junto a @Valle_Nevado 🏂 #WinterIsJeep', 'Let\'s keep our adventurous spirit alive with @Valle_Nevado 🏂 #WinterIsJeep') },
              { src: `${base}/jeep-03.jpg`, href: ig('CUIMXCLgg7V'), alt: T('Pieza de Jeep Wrangler', 'Jeep Wrangler piece'), date: '2021-09-22', caption: T('No importa donde te lleve el mundo, siempre vas de frente con el audaz #JeepWrangler ⚡', 'No matter where the world takes you, you always go straight ahead with the bold #JeepWrangler ⚡') },
            ],
          },
        ],
      },
      {
        id: 'ram',
        title: 'RAM',
        subtitle: T('RAM 1000, RAM 1500 y RAM 2500', 'RAM 1000, RAM 1500 and RAM 2500'),
        blocks: [
          {
            type: 'gallery',
            items: [
              { src: `${base}/ram-01.jpg`, href: ig('CQ_W7KTFCy1'), alt: T('Pick up RAM 1500 gris frente a un paisaje de montañas', 'Gray RAM 1500 pickup in front of a mountain landscape'), date: '2021-07-06', caption: T('Carga hasta 803 Kg. y realiza tu trabajo sin problemas. Sólo #RAM1500, te entregará esa seguridad. Guarda esta publicación para que puedas revisarla cuando estés buscando tu próxima Pick Up RAM. 😉 #PickUp #RAMChile', 'Carry up to 803 kg and do your job without problems. Only the #RAM1500 will give you that security. Save this post so you can review it when you\'re looking for your next RAM pickup. 😉 #PickUp #RAMChile') },
              { src: `${base}/ram-02.jpg`, href: ig('CSeoZT7BStA'), alt: T('Pieza de la RAM 2500', 'RAM 2500 piece'), date: '2021-08-12', videoSrc: '/projects/stellantis/ram-02.mp4', caption: T('Con la #RAM2500 podrás cargar lo que creías imposible. ¿Listo para llevar tus tareas a cabo?', 'With the #RAM2500 you can haul what you thought was impossible. Ready to get your tasks done?') },
              { src: `${base}/ram-03.jpg`, href: ig('CWa3XH1jSWU'), alt: T('Pieza de la RAM 1000', 'RAM 1000 piece'), date: '2021-11-18', videoSrc: '/projects/stellantis/ram-03.mp4', caption: T('Sin duda, cuando tienes una #RAM1000, ¡lo tienes todo!', 'No doubt, when you have a #RAM1000, you have it all!') },
            ],
          },
        ],
      },
    ],
  };
}

export const stellantis: Record<Locale, CaseStudy> = { es: make('es'), en: make('en') };
