import { Request, Response } from "express";
import {
  getAllProducts,
  Product,
  getOfferProducts,
} from "../models/productModel";
import { redis } from "../db/Redis"; // 👈 importa el redis centralizado

// ✅ Controlador GET /products con caché Redis
export const getProducts = async (
  req: Request,
  res: Response<Product[] | { error: string }>
): Promise<void> => {
  const cacheKey = "products:all";

  try {
    // 1️⃣ Intenta leer de Redis si está activo
    if (redis) {
      const cached = await redis.get(cacheKey);
      if (cached) {
        console.log("✅ Productos desde Redis");
        res.status(200).json(JSON.parse(cached));
        return;
      }
    }

    // 2️⃣ Si no hay cache, consulta DB
    const products: Product[] = await getAllProducts();
    console.log("🧪 Productos desde la base de datos:", products);

    // 3️⃣ Guarda en Redis si está activo
    if (redis) {
      await redis.set(cacheKey, JSON.stringify(products), "EX", 60);
    }

    res.status(200).json(products);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Error en getProducts:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error inesperado al obtener productos" });
    }
  }
};
