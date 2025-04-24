import { pool } from "../db/config"; // Importa la conexión a PostgreSQL desde config.ts

// ✅ Interfaz que define la estructura exacta de un producto
export interface Product {
  id: number;               // Identificador único (PRIMARY KEY)
  name: string;             // Nombre del producto
  description: string;      // Descripción del producto
  price: number;            // Precio del producto
  image_url: string;        // Ruta de la imagen (no se guarda la imagen, solo el enlace)
  category: string[];       // Categorías en un array (por ejemplo: ["eurogames", "destacado"])
}

// ✅ Función que obtiene todos los productos desde la tabla "products"
export async function getAllProducts(): Promise<Product[]> { // Retorna una promesa que contiene un arreglo de productos
  try {
    const result = await pool.query<Product>("SELECT * FROM products"); // Ejecuta la consulta SQL y le indica que espera objetos tipo Product
    return result.rows; // Devuelve los resultados tipados como Product[]
  } catch (error: unknown) { // Captura cualquier tipo de error de forma segura
    console.error("❌ Error al obtener todos los productos:", error); // Muestra el error en consola
    throw error; // Re-lanza el error para que sea manejado en otro lugar (por ejemplo, el controlador)
  }
}

// ✅ Función que obtiene productos filtrados por una categoría específica
export async function getProductsByCategory(category: string): Promise<Product[]> { // El parámetro 'category' debe ser string, y retorna Product[]
  try {
    const result = await pool.query<Product>( // También se tipa como Product[]
      "SELECT * FROM products WHERE $1 = ANY(category)", // Usa PostgreSQL para filtrar si la categoría está dentro del array
      [category] // Pasa el valor como parámetro seguro (evita SQL injection)
    );
    return result.rows; // Devuelve los productos que coincidan con esa categoría
  } catch (error: unknown) {
    console.error(`❌ Error al obtener productos por categoría (${category}):`, error); // Muestra el error con contexto
    throw error;
  }
}
