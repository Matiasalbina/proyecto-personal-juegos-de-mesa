import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production"; // ← ahora sí

// ✅ Configurar conexión segura para Render
export const pool: Pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

export async function createTables(): Promise<void> {
  const files: string[] = ["gamestable.sql", "seed_games.sql"];

  for (const file of files) {
    try {
      const filePath: string = path.resolve(__dirname, file); // ✅ Ruta relativa a carpeta sql
      const sql: string = fs.readFileSync(filePath, "utf-8");
      await pool.query(sql);
      console.log(`✅ Archivo '${file}' ejecutado correctamente.`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`❌ Error al ejecutar '${file}':`, error.message);
      } else {
        console.error(`❌ Error desconocido al ejecutar '${file}'.`);
      }
    }
  }
}
