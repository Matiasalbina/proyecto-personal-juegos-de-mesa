import { pool } from "../db/config"; // asegúrate de que esto apunte a tu conexión pg

export async function getAllProducts() {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
}

export async function getProductsByCategory(category: string) {
  const result = await pool.query(
    "SELECT * FROM products WHERE $1 = ANY(category)",
    [category]
  );
  return result.rows;
}
