import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// ✅ Creamos una instancia del Pool de PostgreSQL con tipos claros
export const pool: Pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export async function createTables(): Promise<void> { // Declara una función asincrónica que no retorna nada (void)
  const files: string[] = ["gamestable.sql", "seed_games.sql"]; // Declara un array de strings con tipo explícito

  for (const file of files) { // 'file' toma tipo string automáticamente por inferencia
    try {
      const filePath: string = path.join(__dirname, file); // 'filePath' es una string que indica la ruta del archivo
      const sql: string = fs.readFileSync(filePath, "utf-8"); // 'sql' es una string con el contenido del archivo SQL
      await pool.query(sql); // Ejecuta la consulta, el tipado lo proporciona pg (pool.query espera una string)
      console.log(`✅ Archivo '${file}' ejecutado correctamente.`); // No requiere tipado, solo imprime
    } catch (error: unknown) { // 'error' es de tipo unknown por seguridad (no asumimos que es Error)
      if (error instanceof Error) { // Verificamos que realmente sea una instancia de Error
        console.error(`❌ Error al ejecutar '${file}':`, error.message); // Podemos acceder a .message porque es Error
      } else {
        console.error(`❌ Error desconocido al ejecutar '${file}'.`); // Si no es Error, no accedemos a propiedades
      }
    }
  }
}
