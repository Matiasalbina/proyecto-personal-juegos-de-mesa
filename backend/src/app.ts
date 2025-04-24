import express from "express";
import productsRoutes from "./routes/productsRoutes";

const app = express();

app.use(express.json());

// Rutas
app.use("/products", productsRoutes);

export default app;
