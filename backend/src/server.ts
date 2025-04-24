import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { createTables } from "./db/config";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await createTables(); // 👷 Crear tablas primero
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
  }
}

startServer();
