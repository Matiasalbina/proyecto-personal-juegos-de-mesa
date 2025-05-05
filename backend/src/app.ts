import express from "express";
import cors from "cors"; // 👈 importar cors
import productsRoutes from "./routes/productsRoutes";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();

app.use(cors()); // ✅ habilitar CORS antes de cualquier otra cosa
app.use(express.json());

// Rutas
app.use("/products", productsRoutes);
app.use("/api", uploadRoutes);

export default app;
