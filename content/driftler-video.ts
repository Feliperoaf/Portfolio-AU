import type { CaseStudy, Locale } from './types';

const base = '/projects/driftler-video';

function make(l: Locale): CaseStudy {
  const T = (es: string, en: string) => (l === 'es' ? es : en);
  return {
    meta: [T('Concepto, guion, generación y montaje', 'Concept, script, generation and edit'), T('Proyecto personal', 'Personal project'), '2026'],
    hero: {
      src: `${base}/00-cover.jpg`,
      alt: T(
        'Cuatro escenas de dos videos: una maleta roja sobre una cama, un hombre mirando un edificio con un cartel «Se alquila», una mujer iluminada por la pantalla de su laptop y un dormitorio compartido de noche',
        'Four scenes from two videos: a red suitcase on a bed, a man looking up at a building with a “Se alquila” sign, a woman lit by her laptop screen and a shared dorm at night'
      ),
    },
    glance: [
      { label: T('Piezas', 'Pieces'), value: T('Dos reels verticales 9:16, de 25 y 22 segundos', 'Two vertical 9:16 reels, 25 and 22 seconds long') },
      { label: T('Objetivo', 'Goal'), value: T('Dar a conocer Driftler a viajeros Working Holiday', 'Make Driftler known to Working Holiday travellers') },
      { label: T('Rol', 'Role'), value: T('Todo el proceso: guion, imágenes, video, sonido y montaje', 'The whole process: script, images, video, sound and edit') },
    ],
    toc: [
      { id: 'pieces', label: T('Las dos piezas', 'The two pieces') },
      { id: 'video-1', label: T('Video 1: el viaje', 'Video 1: the journey') },
      { id: 'video-2', label: T('Video 2: el hostel', 'Video 2: the hostel') },
      { id: 'lessons', label: T('Aprendizajes', 'Lessons') },
    ],
    sections: [
      {
        id: 'pieces',
        title: T('Dos videos para Driftler, hechos con IA generativa', 'Two videos for Driftler, made with generative AI'),
        blocks: [
          { type: 'p', text: T('Dos reels con tonos distintos. El primero muestra el viaje, de la maleta a la ciudad nueva, con el mensaje «nos ayudamos entre todos». El segundo parte de un problema cotidiano: dormir en un hostel compartido. Todo el material visual fue generado con IA.', 'Two reels with different tones. The first shows the journey, from the suitcase to the new city, with the message “we help each other”. The second starts from an everyday problem: sleeping in a shared hostel. All the visuals were generated with AI.') },
          {
            type: 'gallery',
            items: [
              { src: `${base}/final.jpg`, videoSrc: `${base}/final.mp4`, alt: T('Video 1 de Driftler: el viaje', 'Driftler video 1: the journey'), caption: T('Video 1: el viaje. Con locución en español, 25 segundos.', 'Video 1: the journey. With a Spanish voiceover, 25 seconds.') },
              { src: `${base}/v2-final.jpg`, videoSrc: `${base}/v2-final.mp4`, alt: T('Video 2 de Driftler: el hostel', 'Driftler video 2: the hostel'), caption: T('Video 2: el hostel. Sin diálogo, 22 segundos.', 'Video 2: the hostel. No dialogue, 22 seconds.') },
            ],
          },
          { type: 'p', text: T('Herramientas: Gemini y ChatGPT para las imágenes; Claude y Gemini para el guion y los prompts del segundo; Flow (modelo Omni) y Kling 3, desde Artlist, para el video; ElevenLabs para la voz del primero; y EffectCraft para el montaje.', 'Tools: Gemini and ChatGPT for the images; Claude and Gemini for the second one’s script and prompts; Flow (Omni model) and Kling 3, through Artlist, for the video; ElevenLabs for the first one’s voice; and EffectCraft for the edit.') },
        ],
      },
      {
        id: 'video-1',
        title: T('Video 1: el viaje', 'Video 1: the journey'),
        subtitle: T('Alguien cierra la maleta, cruza el mundo y llega a una ciudad donde lo difícil es encontrar arriendo, trabajo y amigos.', 'Someone closes a suitcase, crosses the world and arrives in a city where the hard part is finding housing, work and friends.'),
        blocks: [
          { type: 'h3', text: T('El guion, escena por escena', 'The script, scene by scene') },
          { type: 'p', text: T('Lo armé en una planilla, con una meta de 20 segundos y unas 25 palabras de locución. La tabla muestra cómo quedó en el video final, con los tiempos medidos sobre el render (aproximados, a ±0,5 s).', 'I built it in a spreadsheet, aiming for 20 seconds and about 25 words of voiceover. The table shows how it ended up in the final video, with timings measured on the render (approximate, ±0.5 s).') },
          {
            type: 'table',
            head: [T('Escena', 'Scene'), T('Tiempo', 'Time'), T('Visual', 'Visual'), T('Locución', 'Voiceover')],
            rows: [
              [T('Maleta', 'Suitcase'), '0–3 s', T('Una mano cierra la maleta roja sobre la cama.', 'A hand closes the red suitcase on the bed.'), T('Sin locución.', 'No voiceover.')],
              [T('Aeropuerto', 'Airport'), '3–6 s', T('Un viajero frente al tablero de salidas; un avión cruza al fondo.', 'A traveller in front of the departures board; a plane crosses in the background.'), T('«A veces es difícil tomar la decisión.» (desde ~5 s)', '“Sometimes making the decision is hard.” (from ~5 s)')],
              [T('Vuelo', 'Flight'), '6–8 s', T('Un avión volando, visto desde abajo.', 'A plane flying, seen from below.'), T('Termina la frase anterior.', 'The previous sentence ends.')],
              [T('Aterrizaje', 'Landing'), '8–10 s', T('Un avión aterrizando al atardecer.', 'A plane landing at sunset.'), T('«Dejarlo todo atrás.» (~9–10 s)', '“Leaving everything behind.” (~9–10 s)')],
              [T('Ciudad', 'City'), '10–14 s', T('Un viajero mira un edificio con un cartel «Se alquila».', 'A traveller looks at a building with a “Se alquila” sign.'), T('«Otras veces, lo difícil es encontrar arriendo, trabajo o nuevos amigos.» (~12–16 s)', '“Other times, the hard part is finding housing, work or new friends.” (~12–16 s)')],
              [T('Celular', 'Phone'), '14–17,5 s', T('Una mano sostiene un celular con la web de Driftler.', 'A hand holds a phone showing the Driftler site.'), T('«Driftler,» (~16 s)', '“Driftler,” (~16 s)')],
              [T('Cierre', 'Close'), '17,5–25 s', T('El viajero sentado en la plaza; zoom out cenital hasta ver la ciudad costera. El logo aparece hacia los 19 s.', 'The traveller sitting in the square; an overhead zoom out to the coastal city. The logo appears around 19 s.'), T('«nos ayudamos entre todos.» (~18,5–21,5 s)', '“we help each other.” (~18.5–21.5 s)')],
            ],
          },
          { type: 'note', text: T('El plan era de 20 segundos, con la primera frase en el segundo 0 y texto en pantalla. En el video final la locución entra hacia los 5 s, el cierre se alarga y no hay texto en pantalla. La locución es en español.', 'The plan was 20 seconds, with the first sentence at second 0 and on-screen text. In the final video the voiceover comes in around 5 s, the close runs longer and there is no on-screen text. The voiceover is in Spanish.') },
          { type: 'h3', text: T('Del guion al video', 'From script to video') },
          { type: 'p', text: T('Primero la imagen fija, después el movimiento: una imagen por escena, con el mismo viajero, la misma maleta roja y la misma luz cálida, y luego animada en lugar de generar video desde cero. Para el celular usé una captura real de driftler.com, porque la IA genera texto ilegible.', 'First the still image, then the motion: one image per scene, with the same traveller, the same red suitcase and the same warm light, then animated instead of generating video from scratch. For the phone I used a real capture of driftler.com, because AI generates illegible text.') },
          {
            type: 'gallery',
            items: [
              { src: `${base}/still-1.jpg`, alt: T('Una mano cierra una maleta roja sobre una cama', 'A hand closes a red suitcase on a bed'), caption: T('Gancho: la maleta.', 'Hook: the suitcase.') },
              { src: `${base}/still-2.jpg`, alt: T('Un viajero mira el tablero de salidas de un aeropuerto', 'A traveller looks at an airport departures board'), caption: T('Aeropuerto: el tablero de salidas.', 'Airport: the departures board.') },
              { src: `${base}/still-3.jpg`, alt: T('Un avión visto desde abajo sobre un cielo azul con nubes', 'A plane seen from below against a blue sky with clouds'), caption: T('Vuelo: el avión, visto desde abajo.', 'Flight: the plane, seen from below.') },
              { src: `${base}/still-5.jpg`, alt: T('Un viajero mira un edificio con un cartel «Se alquila»', 'A traveller looks at a building with a “Se alquila” sign'), caption: T('Ciudad: el cartel de arriendo.', 'City: the rental sign.') },
            ],
          },
          { type: 'h3', text: T('Dos modelos, un mismo plano', 'Two models, the same shot') },
          { type: 'p', text: T('Probé los planos en Flow y en Kling 3 para comparar movimiento, luz y detalle.', 'I ran the shots in Flow and in Kling 3 to compare motion, light and detail.') },
          {
            type: 'gallery',
            items: [
              { src: `${base}/clip-kling-1.jpg`, videoSrc: `${base}/clip-kling-1.mp4`, alt: T('Plano de la maleta generado con Kling 3', 'Suitcase shot generated with Kling 3'), caption: T('La maleta, en Kling 3.', 'The suitcase, in Kling 3.') },
              { src: `${base}/clip-flow-1.jpg`, videoSrc: `${base}/clip-flow-1.mp4`, alt: T('Plano de la maleta generado con Flow', 'Suitcase shot generated with Flow'), caption: T('La maleta, en Flow.', 'The suitcase, in Flow.') },
              { src: `${base}/clip-kling-3.jpg`, videoSrc: `${base}/clip-kling-3.mp4`, alt: T('Plano del edificio con el cartel «Se alquila» generado con Kling 3', 'Building shot with the “Se alquila” sign generated with Kling 3'), caption: T('La ciudad, en Kling 3.', 'The city, in Kling 3.') },
              { src: `${base}/clip-flow-3.jpg`, videoSrc: `${base}/clip-flow-3.mp4`, alt: T('Plano del edificio con el cartel «Se alquila» generado con Flow', 'Building shot with the “Se alquila” sign generated with Flow'), caption: T('La ciudad, en Flow.', 'The city, in Flow.') },
            ],
          },
        ],
      },
      {
        id: 'video-2',
        title: T('Video 2: el hostel', 'Video 2: the hostel'),
        subtitle: T('La falsa intimidad de una pantalla a las 3 a.m. frente a la realidad de dormir en un hostel compartido.', 'The false intimacy of a screen at 3 a.m. against the reality of sleeping in a shared hostel.'),
        blocks: [
          { type: 'h3', text: T('La idea', 'The idea') },
          { type: 'p', text: T('Una viajera teclea en la oscuridad, iluminada solo por su laptop. De pronto, un ronquido. Ella desvía la mirada, la cámara se abre y revela que está en la litera de un dormitorio compartido. Los ronquidos suben, la imagen se desenfoca y aparece el logo. Un solo concepto, un solo chiste y una sola emoción, 100 % visual y sonoro, sin diálogo.', 'A traveller types in the dark, lit only by her laptop. Suddenly, a snore. She looks away, the camera opens up and reveals she is in a bunk in a shared dorm. The snoring grows, the image blurs and the logo appears. One concept, one joke and one emotion, 100% visual and sound-based, with no dialogue.') },
          { type: 'h3', text: T('Luz y personaje', 'Light and character') },
          { type: 'p', text: T('La luz unifica todo con una sola regla: la luz principal es el brillo frío de la pantalla, la ambiente es luz de luna azul medianoche con sombras azules, nunca negras, y no hay luces cálidas. Para que la protagonista fuera siempre la misma, generé una hoja de referencia con seis ángulos de su cara, elegí tres imágenes ancla y las adjunté en cada generación, junto con una descripción corta de identidad. La imagen mantiene la cara; el texto solo la refuerza.', 'Light ties everything together with a single rule: the main light is the cool glow of the screen, the ambient one is midnight-blue moonlight with blue shadows, never black, and there are no warm lights. To keep the protagonist the same every time, I generated a reference sheet with six angles of her face, chose three anchor images and attached them to every generation, along with a short identity description. The image holds the face; the text only reinforces it.') },
          {
            type: 'gallery',
            items: [
              { src: `${base}/v2-sheet.jpg`, alt: T('Hoja de referencia de la protagonista con varios ángulos de su cara', 'Reference sheet of the main character with several angles of her face'), caption: T('Hoja de referencia del personaje.', 'Character reference sheet.') },
              { src: `${base}/v2-board-1.jpg`, alt: T('Una mujer teclea en su laptop en la litera, con la cara iluminada por la pantalla', 'A woman types on her laptop in the bunk, her face lit by the screen'), caption: T('Plano 1: ella tecleando, con la cara iluminada por una pantalla que no se ve.', 'Shot 1: her typing, her face lit by a screen we do not see.') },
              { src: `${base}/v2-board-2b.jpg`, alt: T('La mujer con la cabeza hacia atrás y los ojos cerrados, con disgusto', 'The woman with her head back and eyes closed, in disgust'), caption: T('Plano 2B: el disgusto escala.', 'Shot 2B: the disgust escalates.') },
              { src: `${base}/v2-board-3.jpg`, alt: T('Plano amplio de un dormitorio compartido de noche: ella abajo a la derecha y otra persona durmiendo abajo a la izquierda', 'Wide shot of a shared dorm at night: her at the bottom right and another person sleeping at the bottom left'), caption: T('Plano 3: el dormitorio, con ella a la derecha y el que ronca a la izquierda.', 'Shot 3: the dorm, with her on the right and the snorer on the left.') },
            ],
          },
          { type: 'h3', text: T('Clips, sonido y montaje', 'Clips, sound and edit') },
          { type: 'p', text: T('Trabajé un clip a la vez, con prompts de movimiento y un bloque de sonido en cada uno. El ronquido lo sumé en la edición, creciendo hasta el logo. El montaje usa cortes secos, un desenfoque progresivo al final y el logo como capa vectorial nítida, nunca generada por IA.', 'I worked one clip at a time, with motion prompts and a sound block in each one. I added the snoring in the edit, growing until the logo. The edit uses hard cuts, a progressive blur at the end and the logo as a crisp vector layer, never generated by AI.') },
          {
            type: 'gallery',
            items: [
              { src: `${base}/v2-clip-1.jpg`, videoSrc: `${base}/v2-clip-1.mp4`, alt: T('Clip A: ella teclea y mira de reojo', 'Clip A: she types and glances sideways'), caption: T('Clip A: teclea, el tecleo se corta y mira de reojo.', 'Clip A: she types, the typing stops and she glances sideways.') },
              { src: `${base}/v2-clip-3.jpg`, videoSrc: `${base}/v2-clip-3.mp4`, alt: T('Clip C: la cámara se acerca a ella en la litera', 'Clip C: the camera moves in on her in the bunk'), caption: T('Clip C: la cámara se acerca. En la edición se invierte para revelar el dormitorio.', 'Clip C: the camera moves in. In the edit it is flipped to reveal the dorm.') },
              { src: `${base}/v2-clip-4.jpg`, videoSrc: `${base}/v2-clip-4.mp4`, alt: T('Clip D: el dormitorio con quien ronca', 'Clip D: the dorm with the snorer'), caption: T('Clip D: el que ronca saca un brazo y una pierna de la manta.', 'Clip D: the snorer pushes an arm and a leg out of the blanket.') },
            ],
          },
          { type: 'h3', text: T('Lo que salió mal', 'What went wrong') },
          {
            type: 'table',
            head: [T('Problema', 'Problem'), T('Solución', 'Fix')],
            rows: [
              [T('El ancla facial no se parecía a la referencia: la descripción inventada tenía hoyuelos y ojos verdes.', 'The face anchor did not look like the reference: the invented description had dimples and green eyes.'), T('Reescribirla a partir de la foto real.', 'Rewrite it from the real photo.')],
              [T('El clip B se cortaba en el segundo 3: el último fotograma era muy distinto del primero.', 'Clip B cut off at second 3: the last frame was very different from the first.'), T('Usar solo el primer fotograma y resolver con un corte.', 'Use only the first frame and solve it with a cut.')],
              [T('El zoom out no llegaba al encuadre pedido: la cápsula del plano amplio tenía otro diseño que la del primer plano.', 'The zoom out did not reach the requested framing: the pod in the wide shot had a different design from the close-up.'), T('Regenerar la imagen amplia copiando el diseño de la cápsula.', 'Regenerate the wide image copying the pod design.')],
              [T('Los modelos fallan al revelar un cuarto que la cámara no ve.', 'Models fail when revealing a room the camera cannot see.'), T('Generar el clip acercándose y luego invertirlo en la edición.', 'Generate the clip moving in and then flip it in the edit.')],
            ],
          },
          { type: 'h3', text: T('Dos prompts', 'Two prompts') },
          { type: 'code', label: T('Clip A (video, 4 s), con su bloque de sonido', 'Clip A (video, 4 s), with its sound block'), text: 'Locked-off camera, no camera movement. The woman types steadily, the cool blue glow flickering on her face. At 2 s the typing stops abruptly and her fingers freeze. She slowly shifts her eyes, then turns her head toward the left side of the frame, from calm focus to annoyed suspicion. End on a held frame of her annoyed look.\nSound: fast keyboard typing and soft clicks, cut off at 2 s, a beat of silence, then a deep loud snore. No music, no voices.' },
          { type: 'code', label: T('Clip C (video, 4 s, generado al revés)', 'Clip C (video, 4 s, generated in reverse)'), text: 'One continuous shot, strict timing. The camera pushes straight in toward the lower-right bunk pod, as if on a slow dolly on rails, from the wide view of the dorm to a medium close-up of the woman. No zoom, no rotation, no pan, no tilt. From 0 to 3 s the camera pushes in; from 3 to 4 s it is completely locked. During the push-in she tilts her head back against the wall and closes her eyes in exasperation.' },
        ],
      },
      {
        id: 'lessons',
        title: T('Aprendizajes', 'Lessons'),
        subtitle: T('Lo que me llevo de las dos piezas.', 'What I take away from the two pieces.'),
        blocks: [
          {
            type: 'list',
            items: [
              T('Imagen fija primero, movimiento después: da más control que generar el plano completo.', 'Still image first, motion after: it gives more control than generating the whole shot.'),
              T('Un clip, un movimiento. Más de uno produce deformaciones.', 'One clip, one movement. More than one produces distortions.'),
              T('El último fotograma solo funciona si es casi idéntico al primero. Si no, es mejor un corte.', 'The last frame only works if it is almost identical to the first. If not, a cut is better.'),
              T('Las referencias necesitan coherencia de escenografía, no solo de personaje.', 'References need consistent sets, not just characters.'),
              T('Para revelar, generar acercándose e invertir el clip en la edición.', 'To reveal, generate moving in and flip the clip in the edit.'),
              T('Texto y logo se superponen en la edición, nunca se generan con IA.', 'Text and logo are overlaid in the edit, never generated with AI.'),
            ],
          },
        ],
      },
    ],
  };
}

export const driftlerVideo: Record<Locale, CaseStudy> = { es: make('es'), en: make('en') };
