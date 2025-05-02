import express from "express";
import productsRoutes from "./routes/productsRoutes";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();

app.use(express.json());

// Rutas
app.use("/products", productsRoutes);
app.use("/api", uploadRoutes);

export default app;
