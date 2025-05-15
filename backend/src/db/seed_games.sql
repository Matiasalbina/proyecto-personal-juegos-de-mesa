
DELETE FROM products;

INSERT INTO products
  (name, price, description, image_url, category, stock)
VALUES
  (
    'La Oscuridad Asfixiante',
    74990,
    'La Oscuridad Asfixiante es un juego de 2 a 5 jugadores, con temática de terror, reglas de movimiento oculto y una innovadora mecánica de línea de visión que enfrenta a un jugador contra el resto. Un jugador adopta el papel del adversario, cuyo objetivo es evitar que los demás (los investigadores) escapen. Mientras tanto, el objetivo de los investigadores consiste en sobrevivir, ya sea escapando o luchando. Hay una amplia variedad de investigadores y adversarios para elegir, cada uno con sus propias habilidades especiales. Mientras los investigadores se mueven por el tablero en busca de evidencias de actividad paranormal, utilizan sus linternas para revelar fichas ocultas en el minimapa del adversario, al mismo tiempo que gestionan su vigor y la carga de sus linternas. Entretanto, el adversario merodea en secreto por el tablero, intentando evitar que los investigadores escapen. ¿Trataréis de hallar un medio de escapar a escondidas o lucharéis contra el adversario? Tendrás que decidir si tus investigadores permanecen juntos para protegerse las espaldas, o se dividen y corren hacia la salida. En cualquier caso, tendrán que ser rápidos: cuanto más dure la partida, ¡más posibilidades tendrá el adversario de acabar con ellos!',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/la-oscuridad-asfixiante.jpg',
    ARRAY
   ['eurogames', 'novedad'],
   5
  ),

(
    'Reinos Rodados Relanzados',
    59990,
    'En Reinos rodados relanzados, los jugadores compiten para conseguir la mayor cantidad de estrellas en una serie de      minijuegos durante 3 rondas. Este es un juego de mecánica «roll and write», lo que significa que los jugadores   escribirán en los componentes del juego usando rotuladores de borrado en seco. En cada turno, todos los jugadores usan  los resultados de 2 dados en sus cartas de reino para generar recursos y obtener estrellas.
     Reinos rodados relanzados permite partidas de 1 a 6 jugadores, pero puedes combinar varias copias para jugar con cualquier número de jugadores. Se puede jugar fácilmente de forma remota y/o asincrónica, ya que no hay interacción directa entre los jugadores.
     También puedes combinar esta caja con el juego Reinos rodados original para aumentar la variedad. Este nuevo conjunto básico presenta una caja lo bastante grande como para contener todos los reinos y expansiones publicados.',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/reinos-rodados-relanzados.jpg',
    ARRAY['eurogames', 'destacado'],
    5
  ),

(
    'Proyecto Arrecife',
    62990,
    'A pesar de cubrir menos del 1% del fondo del océano, se estima que los arrecifes de coral albergan aproximadamente el 25% de todas las especies marinas. Por desgracia, estas vibrantes ciudades submarinas están muriendo. El cambio climático y su efecto en el aumento de la temperatura del mar están devastando las coloridas algas que prestan a los arrecifes de coral sus tonos brillantes, lo que provoca el blanqueamiento de los corales. Además, otras amenazas, como la contaminación (en sus diversas formas insidiosas) y la sobrepesca, alteran el delicado equilibrio de los ecosistemas de arrecifes.\n\nPor ello, científicos de diversos campos, junto con investigadores que estudian la complejidad ecológica y la importancia de los arrecifes, están colaborando para abordar los innumerables desafíos a los que se enfrenta estos ecosistemas. Tu tarea consiste en asumir el mando de un barco científico y emprender un viaje de conservación de los arrecifes. Contrata a la mejor tripulación, limpia el océano y devuelve a los arrecifes su antiguo esplendor.',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/proyecto-arrecife.jpg',
    ARRAY['eurogames', 'novedad', 'destacado'],
    5
  ),

(
    'Bitoku',
    62990,
    'En una época ancestral que el hombre ha olvidado, un gran espíritu habitaba en el bosque. Su mera presencia lo envolvía todo de vida, abundancia y paz. Cada cierto tiempo el gran espíritu marchaba para siempre, y entonces surgía un espíritu bitoku digno de sucederle, para preservar la armonía del bosque.\n\nSe trata de un bosque primordial y milenario, que se extiende desde las Llanuras del Temblor hasta la falda de las montañas Akaishi. En estas montañas nace el río sagrado Kurirakugan, el cual, con su curso caudaloso, cruza el bosque hasta desembocar en los acantilados de Zarpa de Mar. El bosque, que no tiene más nombre que este pues los demás bosques se llaman así por él, es uno de los cinco corazones del mundo. Se dice que en lo más profundo de su espesura, las almas perdidas encuentran solaz y trascienden, o se pierden y dejan de existir tan pronto como se olvida el último recuerdo de su existencia. Jamás existió un sitio igual; seres mágicos y espirituales habitaban este bosque, que hoy es recordado como una leyenda, como un cuento para niños.\n\nHa llegado el momento de que el gran espíritu marche del bosque y de que uno de los bitoku sea elegido como su sucesor. Eres uno de esos espíritus, pero… ¿puedes demostrar que solo tú eres digno de este increíble honor?\n\nBitoku se juega en cuatro rondas que representan los cuatro últimos años que le quedan al gran espíritu. Cada una de estas rondas, a su vez, se divide en cuatro fases o estaciones (primavera, verano, otoño e invierno). Al finalizar el invierno de la cuarta ronda, se acaba la partida y se resuelve la ascensión. Durante la partida, en su turno los jugadores realizan acciones con el objetivo de obtener puntos de virtud (PV). Cuando un jugador gana PV, avanza por el camino del espíritu (el marcador de PV que discurre alrededor del tablero). Durante la ascensión, los jugadores pueden ganar PV adicionales si completan determinados objetivos. El jugador que avance más por el camino del espíritu será el ganador y se convertirá en el nuevo gran espíritu.',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/bitoku_prueba.jpg',
    ARRAY['eurogames', 'novedad', 'destacado'],
    5
  ),
(
  'Daitoshi',
  59990,
  'Por fin hemos perfeccionado el poder del vapor, ¡y ya podemos utilizarlo en nuestro beneficio! Vivimos en una era de progreso sin precedentes, y los nuevos inventos propulsados por vapor se desarrollan más rápido que nunca. Las ciudades crecen, el comercio florece y estamos desarrollando nuestra máquina más ambiciosa: un artilugio gigante que traerá aún más progreso a la ciudad. Sí, se están talando algunos árboles, y el río no fluye tan caudaloso como antes, pero sigue habiendo abundancia de árboles y agua, y podemos utilizar el espacio extra para ampliar nuestra ciudad... y no es que las viejas criaturas de esos bosques puedan hacer nada al respecto.\n\nEn tu turno en Daitoshi, produces o mueves a tu magnate a un nuevo distrito en el que podrás enviar a tus trabajadores a trabajar, ordenar la explotación de hexágonos de bosque o río para alimentar tu interminable necesidad de vapor, y realizar una acción para expandirte y mostrar tu grandeza a la ciudad.\n\nEstas acciones no sólo te ayudarán en tu búsqueda de reconocimiento, sino que ayudarán a todos los habitantes de la gran ciudad. Expandirás la ciudad y electrificarás sus distritos, descubrirás y desarrollarás nuevos inventos propulsados por vapor y comerciarás con ciudades lejanas. Puede que incluso ayudes a la ciudad a construir su gigantesco proyecto: la megamáquina. Puede que talen algunos bosques y se sequen algunos ríos, pero en tu generosidad, ayudarás a los trabajadores desplazados de esas zonas dándoles nuevos puestos de trabajo a tu servicio.\n\nViejas leyendas sugieren que los bosques y los ríos están custodiados por Yōkai, pero el progreso no puede detenerse por culpa de algunos viejos cuentos de hadas. Aunque, por si acaso, podría ser prudente participar en algunos proyectos de reforestación y ocultar tu participación en el abuso de los recursos naturales.',
  'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/daitoshi.jpg',
    ARRAY['eurogames', 'destacado'],
    5
  ),
(
  'Forever Home',
  47990,
  'Bienvenido a “Forever Home”, el juego de patrones y rompecabezas sobre segundas oportunidades para perros sin hogar.\n\nUsando una combinación de colocación de fichas, colección de conjuntos y selección, tú y tus amigos asumen el papel de trabajadores del refugio. Se turnan para llevar perros a tu refugio, completar cartas de entrenamiento y emparejar cachorros con nuevas familias. Competirán por valiosos reconocimientos del refugio, así como ganarán reputación por entrenar y encontrar hogares a los perros bajo su cuidado. ¡Al final del juego, el trabajador del refugio con más reputación gana!',
  'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/forever-home.jpg',
    ARRAY['eurogames', 'novedad'],
    5
  ),
(
    'exploding kittens el juego de tablero',
    29990,
    'Uno de los juegos de cartas más vendidos de todos los tiempos, ahora convertido en juego de tablero.\n\nPero nunca antes había visto un tablero como este.\n\n¡Voltea el tablero 3D para sabotear a los otros jugadores!\n\nPrepara trampas, sé más inteligente que tus rivales e intenta no explotar.\n\nJuega cartas, adelanta a los demás, y cruza la línea de meta en primer lugar.\n\n¡Las casillas cambian mientras juegas!',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/familiares/1746720170848-exploding-kittens-el-juego-de-tablero.jpg',
    ARRAY['familiares', 'destacado'],
    5
  ),
(
    'fritanga',
    13990,
    'Ambientado en el universo de Blind Business, Fritanga es un juego para amantes de la cocina donde la zona de juego es… ¡una freidora! Los jugadores toman el control de varios alimentos e intentan sobrevivir a toda costa, saltando de un lado a otro de la cesta de la freidora. Cuando un jugador no puede moverse, cae en el aceite hirviendo, se fríe y (desafortunadamente) se elimina del juego. Debes utilizar todas las cartas que recojas para sobrevivir y no quedar deliciosamente maltratado.\n\nFritanga tiene tres modos de juego: todos contra todos, apto para 2 a 6 jugadores; el modo contra el chef, una versión semi-cooperativa para grupos de 3 a 7 jugadores, en el que uno será el chef e intentará freír al resto de jugadores; y el modo por equipos, en el que dos grupos iguales compiten para ganar. Cada modo de juego tiene algunas cartas diferentes para personalizar la experiencia.\n\nTras preparar el tablero central con nueve cartas, que representan espacios en la parrilla de la freidora, los jugadores comienzan sus turnos, que se dividen en dos fases: jugar cartas y moverse. La primera fase te permite jugar tantas cartas como quieras, con el objetivo de mejorar la posición en la freidora o molestar y atacar a tus rivales. La segunda fase te permite alejarte 1-2 cartas. En ese momento, se revela la carta que alcanzaste y luego se activa un efecto o puedes reclamar esa carta para usarla más tarde.
',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/familiares/1746721035853-fritanga.jpg',
    ARRAY['familiares', 'novedad'],
    5
  ),
(
    'fish and katz',
    24990,
    'Los simpáticos vendedores de Jagalchi, el famoso mercado de pescado coreano, tienen tanto trabajo que a veces necesitan descansar un poquito. Y mientras ellos se echan la siesta, sus fieles gatos se ponen zarpas a la obra para dirigir la pescadería. Pero por mucho que estos gatos quieran a sus dueños, un pez es un pez.\n\n¿Qué podría salir mal?',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/familiares/1746721051599-fish-and-katz.jpg',
    ARRAY['familiares', 'novedad'],
    5
  ),
  (
  '¡PAREN LA NAVE!',
  24990,
  '¿Cuántas judías hay en una lata de judías? ¿Cuánto duró el beso más largo?\n\nDe esto va Paren la nave, un juego de mesa familiar para niños y adultos en el que todas las respuestas son números. Incluye preguntas sobre todo tipo de temas, desde perritos calientes hasta Harry Potter.\n\nLo mejor: ¡no necesitas saber la respuesta! A diferencia de otros juegos familiares de preguntas y respuestas, no necesitas acertar la pregunta para ganar puntos. Solo tienes que acercarte a la respuesta correcta… ¡sin pasarte!',
  'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/parties/1747241273401-paren-la-nave.jpg',
  ARRAY['parties', 'novedad'],
  5
),
(
  'PREGUNTADOS 2',
  24990,
  '¡Vuelve la famosa App de móvil nuevamente en juego de mesa! Divertido juego de preguntas y respuestas. En esta segunda entrega existen seis categorías diferentes para poner a prueba tu conocimiento y ¡desafiar a tus amigos!\n\nAdemás se incorporan 3 modos de juegos distintos:\n\nPreguntados clásico: el objetivo del juego es conseguir los 6 personajes correspondientes a las diferentes categorías.\n\nDuelo de torres: 2 jugadores o equipos compiten por construir la torre más alta, contestando el mayor número de preguntas en cada categoría.\n\nDesafío: Ser el primer jugador en cumplir 5 desafíos. Esta modalidad solo utiliza las cartas de preguntas y las cartas de desafíos.',
  'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/parties/1747241287904-preguntados-2.jpg',
  ARRAY['parties', 'destacado'],
  5
),
(
  'TIERLIST',
  19990,
  'En TIERLIST, el desafío es crear una lista de preferencias sobre tus amigos y descubrir cuánto sabéis realmente los unos de los otros. ¿Qué artículo erróneo comprarías en una tienda online? ¿Qué te asustaría más al llegar a casa? ¿Cuál sería el mejor superpoder para ti?\n\nDiseñado desde 4 a 10 jugadores, TIERLIST es el juego de fiesta ideal para disfrutar de momentos divertidos y a la vez profundizar en el conocimiento mutuo. ¡Prepárate para risas, revelaciones y una competencia amistosa mientras cada uno intenta demostrar cuánto conoce a sus amigos!',
  'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/parties/1747241296611-tierlist.jpg',
  ARRAY['parties', 'novedad'],
  2
);




SELECT *
FROM products;