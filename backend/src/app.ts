import express from "express";
import cors from "cors";
import productsRoutes from "./routes/productsRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import userRoutes from "./routes/userRoutes";
import gemini from "./routes/geminiRoutes";
import ttsRoutes from "./routes/ttsRoutes";

const app = express();

// ✅ CORS libre (solo para desarrollo)
app.use(cors());
app.use(express.json());

// ✅ Rutas
app.use("/products", productsRoutes);
app.use("/api", uploadRoutes);
app.use("/api/users", userRoutes);
app.use("/api/gemini", gemini);
app.use(express.static("public"));
app.use("/api/tts", ttsRoutes);

export default app;
