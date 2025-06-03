import express from "express";
import cors from "cors";
import productsRoutes from "./routes/productsRoutes";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();

// Detectar si estamos en producción
const allowedOrigins = [
  "http://localhost:5173", // desarrollo local
  "https://proyecto-personal-juegos-de-mesa-frontend.onrender.com", // producción
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por CORS"));
      }
    },
  })
);

app.use(express.json());

// Rutas
app.use("/products", productsRoutes);
app.use("/api", uploadRoutes);

export default app;
