DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price INTEGER,
  image_url TEXT,
  category TEXT[],
  stock INTEGER DEFAULT 0
);

