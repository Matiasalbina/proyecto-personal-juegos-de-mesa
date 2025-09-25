import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { createTables } from "./db/config";

// 👇 Asegura number
const PORT: number = parseInt(process.env.PORT ?? "3000", 10);

async function startServer() {
  try {
    // Ejecutar .sql solo si lo pides explícitamente
    if (process.env.RUN_SQL === "true") {
      await createTables();
      console.log("✅ Tablas y seeds creados");
    } else {
      console.log("↪️ Saltando creación de tablas (RUN_SQL=false)");
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
    });
  } catch (error: any) {
    console.error("❌ Error al iniciar el servidor:", error?.message || error);
  }
}

startServer();
