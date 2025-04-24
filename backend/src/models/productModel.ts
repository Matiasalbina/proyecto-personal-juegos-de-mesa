import { pool } from "../db/config"; // Importa el pool de conexión a PostgreSQL

// Obtiene todos los productos de la base de datos
export async function getAllProducts(): Promise<any[]> { // Retorna una promesa que contiene un arreglo de productos
  try {
    const result = await pool.query("SELECT * FROM products"); // Ejecuta consulta para obtener todos los registros
    return result.rows; // Devuelve las filas como arreglo de objetos
  } catch (error: unknown) { // Captura cualquier error (tipado seguro)
    console.error("❌ Error al obtener todos los productos:", error); // Muestra el error en consola
    throw error; // Re-lanza el error para manejarlo en el controlador
  }
}

// Obtiene productos que contengan una categoría específica
export async function getProductsByCategory(category: string): Promise<any[]> { // Parámetro tipado, retorno igual
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE $1 = ANY(category)", // Filtra usando array de categorías
      [category] // Inserta el valor de forma segura
    );
    return result.rows; // Devuelve solo los productos filtrados
  } catch (error: unknown) {
    console.error(`❌ Error al obtener productos por categoría (${category}):`, error); // Muestra error con categoría
    throw error;
  }
}
