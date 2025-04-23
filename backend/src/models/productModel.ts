// Importamos la conexión a la base de datos desde el archivo de configuración (config.ts)
import { pool } from "../db/config";

// ✅ Función TypeScript que obtiene todos los productos desde la base de datos
// - Es una función asincrónica (async)
// - Devuelve un arreglo de productos desde la tabla "products"
export async function getAllProducts() {
  const result = await pool.query("SELECT * FROM products");
  return result.rows; // Retorna las filas obtenidas (los productos)
}

// ✅ Función TypeScript que obtiene productos filtrados por categoría
// - category: string ← ✅ Aquí se indica el tipo con TypeScript (parámetro tipado)
export async function getProductsByCategory(category: string) {
  const result = await pool.query(
    // Se usa PostgreSQL con ANY() para buscar si la categoría existe en el array
    "SELECT * FROM products WHERE $1 = ANY(category)",
    [category] // ← El valor se inyecta de forma segura para evitar SQL injection
  );
  return result.rows; // Devuelve solo los productos que coinciden con esa categoría
}

/* 
------------------------------------------------
📄 RESUMEN TÉCNICO - productModel.ts
------------------------------------------------

- `export async function`: funciones exportadas asincrónicas que permiten operaciones con la base de datos.

- `category: string`: declaración de tipo en TypeScript para el parámetro, asegura que se reciba una cadena (string).

- `pool.query(...)`: ejecuta una consulta SQL utilizando la conexión del pool de PostgreSQL configurado previamente.

- `ANY(category)`: operador de PostgreSQL para buscar si un valor existe dentro de un array de texto (TEXT[]).

- `result.rows`: devuelve un arreglo con los resultados obtenidos por la consulta SQL.

Este archivo forma parte del modelo (Model) en una arquitectura MVC. Se encarga de acceder y devolver los datos de la tabla "products".
*/
