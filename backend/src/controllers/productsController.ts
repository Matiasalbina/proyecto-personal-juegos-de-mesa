import { Request, Response } from "express"; // Tipos de Express para req/res
import { getAllProducts, Product } from "../models/productModel"; // Función que obtiene productos desde la DB

// ✅ Controlador para manejar GET /products
export const getProducts = async (
  req: Request,         // Tipado de la solicitud HTTP
  res: Response<Product[] | { error: string }>         // Tipado de la respuesta HTTP
): Promise<void> => {   // Tipo de retorno explícito: una promesa sin valor (void)
  try {
    const products: Product [] = await getAllProducts(); // Consulta los productos desde el modelo
    res.status(200).json(products);          // Respuesta 200 OK con datos en JSON
  } catch (error: unknown) {                 // Tipado estricto del error
    if (error instanceof Error) {
      console.error("❌ Error en getProducts:", error.message); // Log con mensaje detallado
      res.status(500).json({ error: error.message });           // Envía mensaje exacto del error
    } else {
      res.status(500).json({ error: "Error inesperado al obtener productos" }); // Fallback por si no es instancia de Error
    }
  }
};


