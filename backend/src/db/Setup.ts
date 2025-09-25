// src/db/setup.ts
import { pool } from "./config";
import fs from "fs";
import path from "path";

async function run(file: string) {
  const sql = fs.readFileSync(path.join(__dirname, file), "utf8"); // lee dist/db/*.sql
  await pool.query(sql);
  console.log("✅ Ejecutado", file);
}

(async () => {
  try {
    await run("gamestable.sql");
    await run("seed_games.sql");
    await run("userstable.sql");
    process.exit(0);
  } catch (e: any) {
    console.error("❌ Error en setup:", e?.message || e);
    process.exit(1);
  }
})();
