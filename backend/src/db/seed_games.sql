
DELETE FROM products;

INSERT INTO products
  (name, price, description, image_url, category)
VALUES
  (
    'La Oscuridad Asfixiante',
    74990,
    'Juego de terror con mecánicas innovadoras.',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/la-oscuridad-asfixiante.jpg',
    ARRAY['eurogames', 'novedad']
  ),
(
    'Reinos Rodados Relanzados',
    59990,
    'Juego de estrategia con dados y escritura.',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/reinos-rodados-relanzados.jpg',
    ARRAY['eurogames', 'destacado']
  ),
(
    'Proyecto Arrecife',
    62990,
    'Juego de exploración marina.',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/proyecto-arrecife.jpg',
    ARRAY['eurogames', 'novedad']
  ),
(
    'Bitoku',
    62990,
    'Juego de construcción de motor.',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/bitoku_prueba.jpg',
    ARRAY['eurogames', 'novedad']
  ),
  (
  'Daitoshi',
  59990,
  'Juego de construcción de motor',
  'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/daitoshi.jpg',
    ARRAY['eurogames', 'destacado']
  ),
   (
  'Forever Home',
  47990,
  'Juego de estrategia con dados y escritura',
  'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/forever-home.jpg',
    ARRAY['eurogames', 'novedad']
  ),
  (
    'exploding kittens el juego de tablero',
    29990,
    'Juego familiar de cartas',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/familiares/1746720170848-exploding-kittens-el-juego-de-tablero.jpg',
    ARRAY['familiares', 'destacado']
  ),
  (
    'fritanga',
    13990,
    'Juego familiar de cartas',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/familiares/1746721035853-fritanga.jpg',
    ARRAY['familiares']
  ),
  (
    'fish and katz',
    24990,
    'Juego familiar de cartas',
    'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/familiares/1746721051599-fish-and-katz.jpg',
    ARRAY['familiares']
  );



SELECT *
FROM products;