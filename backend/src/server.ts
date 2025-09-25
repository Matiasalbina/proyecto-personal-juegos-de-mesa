import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { createTables } from "./db/config";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // ⚠️ Solo ejecuta .sql si está activado
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
    console.error("❌ Error al iniciar el servidor:", error.message);
  }
}

startServer();
