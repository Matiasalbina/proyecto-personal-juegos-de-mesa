import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

/*
📄 RESUMEN TÉCNICO - config.ts

- Usa `import` para traer módulos (forma compatible con TypeScript y ES Modules).
- `process.env.DB_PORT` se convierte explícitamente a tipo `number`, lo que facilita la inferencia de tipos.
- Al usar este archivo en TypeScript, los tipos de `pg` (gracias a @types/pg) ofrecen autocompletado y validación de propiedades como `Pool`, `query`, etc.
- Este archivo exporta una instancia de Pool que se reutiliza en todo el proyecto para consultas SQL.
*/
