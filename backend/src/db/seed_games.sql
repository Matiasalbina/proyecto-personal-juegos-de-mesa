INSERT INTO products (name, price, description, image_url, category)
VALUES
  (
    'La Oscuridad Asfixiante',
    74990,
    'Juego de terror con mecánicas innovadoras.',
    '/uploads/la-oscuridad-asfixiante.jpg',
    'novedad'
  ),
  (
    'Reinos Rodados Relanzados',
    59990,
    'Juego de estrategia con dados y escritura.',
    '/uploads/reinos-rodados-relanzados.jpg',
    'más vendido'
  ),
  (
    'Proyecto Arrecife',
    62990,
    'Juego de exploración marina.',
    '/uploads/proyecto-arrecife.jpg',
    'novedad'
  ),
  (
    'Bitoku',
    62990,
    'Juego de construcción de motor.',
    '/uploads/bitoku_prueba.jpg',
    'novedad'
  );

UPDATE products
SET category = ARRAY['eurogames', 'destacado']
WHERE name = 'Reinos Rodados Relanzados';


SELECT * FROM products;