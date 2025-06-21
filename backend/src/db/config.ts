import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// ✅ Crear conexión usando solo DATABASE_URL
export const pool: Pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

export async function createTables(): Promise<void> {
  const files: string[] = ["gamestable.sql", "seed_games.sql", "userstable.sql"];

  for (const file of files) {
    try {
      const filePath: string = path.resolve(__dirname, file); // ✅ Ruta relativa desde dist/db
      const sql: string = fs.readFileSync(filePath, "utf-8");
      await pool.query(sql);
      console.log(`✅ Archivo '${file}' ejecutado correctamente.`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`❌ Error al ejecutar '${file}':`, error.message);
        console.error("Detalle completo:", error);
      } else {
        console.error(`❌ Error desconocido al ejecutar '${file}'.`);
      }
    }
  }
}
