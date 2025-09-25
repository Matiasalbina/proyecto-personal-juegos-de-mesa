import { Request, Response } from "express";
import {
  getAllProducts,
  getOfferProducts,
  Product,
} from "../models/productModel";
import { redis } from "../db/Redis"; // 👈 Redis centralizado

// ✅ Controlador GET /products con caché Redis
export const getProducts = async (
  req: Request,
  res: Response<Product[] | { error: string }>
): Promise<void> => {
  const cacheKey = "products:all";

  try {
    if (redis) {
      const cached = await redis.get(cacheKey);
      if (cached) {
        console.log("✅ Productos desde Redis");
        res.status(200).json(JSON.parse(cached));
        return;
      }
    }

    const products: Product[] = await getAllProducts();
    console.log("🧪 Productos desde la base de datos:", products);

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

// ✅ Controlador GET /products/offers con caché Redis
export const getProductsOnSale = async (
  req: Request,
  res: Response<Product[] | { error: string }>
): Promise<void> => {
  const cacheKey = "products:offers";

  try {
    if (redis) {
      const cached = await redis.get(cacheKey);
      if (cached) {
        console.log("✅ Ofertas desde Redis");
        res.status(200).json(JSON.parse(cached));
        return;
      }
    }

    const offers: Product[] = await getOfferProducts();
    console.log("🧪 Ofertas desde la base de datos:", offers);

    if (redis) {
      await redis.set(cacheKey, JSON.stringify(offers), "EX", 60);
    }

    res.status(200).json(offers);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Error en getProductsOnSale:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      res
        .status(500)
        .json({ error: "Error inesperado al obtener productos en oferta" });
    }
  }
};
