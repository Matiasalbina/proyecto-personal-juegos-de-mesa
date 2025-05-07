
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
    ARRAY['eurogames', 'novedad']
  ),
   (
  'Forever Home',
  47990,
  'Juego de estrategia con dados y escritura',
  'https://imagenes-juegos-matias.s3.us-east-2.amazonaws.com/forever-home.jpg',
    ARRAY['eurogames', 'novedad']
  );



SELECT *
FROM products;