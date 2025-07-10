import { Request, Response } from "express";
import {
  getAllProducts,
  Product,
  getOfferProducts,
} from "../models/productModel";
import Redis from "ioredis";

// 🔑 Conexión a Redis (ajusta a tu host/puerto si usas Docker)
const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: 6379,
});

// ✅ Controlador GET /products con caché Redis
export const getProducts = async (
  req: Request,
  res: Response<Product[] | { error: string }>
): Promise<void> => {
  const cacheKey = "products:all";

  try {
    // 1️⃣ Intenta leer de Redis
    const cached = await redis.get(cacheKey);

    if (cached) {
      console.log("✅ Productos desde Redis:", cached);
      res.status(200).json(JSON.parse(cached));
      return; // Termina aquí si cache HIT
    }

    // 2️⃣ Si no hay cache, consulta DB
    const products: Product[] = await getAllProducts();
    console.log("🧪 Productos desde la base de datos:", products);

    // 3️⃣ Guarda en Redis con expiración de 60 seg
    await redis.set(cacheKey, JSON.stringify(products), "EX", 60);

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

export const getProductsOnSale = async (
  req: Request,
  res: Response<Product[] | { error: string }>
): Promise<void> => {
  const cacheKey = "products:offers";

  try {
    // Intenta leer de Redis
    const cached = await redis.get(cacheKey);

    if (cached) {
      console.log("✅ Ofertas desde Redis:", cached);
      res.status(200).json(JSON.parse(cached));
      return;
    }

    // Si no hay cache, consulta DB
    const offers = await getOfferProducts();
    console.log("🧪 Ofertas desde la base de datos:", offers);

    // Guarda en Redis con expiración de 60 seg
    await redis.set(cacheKey, JSON.stringify(offers), "EX", 60);

    res.status(200).json(offers);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Error en getProductsOnSale:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error inesperado al obtener ofertas" });
    }
  }
};
