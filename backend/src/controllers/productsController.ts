import { Request, Response } from "express"; // ✅ Importamos los tipos de Express para usar tipado en `req` y `res`
import { getAllProducts } from "../models/productModel";

// ✅ Controlador que maneja la solicitud GET para obtener todos los productos
// - `req`: Request → representa la solicitud HTTP entrante
// - `res`: Response → representa la respuesta HTTP a enviar
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts(); // Llama al modelo para obtener todos los productos desde la base de datos
    res.json(products); // Devuelve los productos en formato JSON al cliente
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" }); // Si ocurre un error, responde con estado 500 (Error Interno del Servidor)
  }
};






/*
------------------------------------------------
📄 RESUMEN TÉCNICO - productsController.ts
------------------------------------------------

- Se usa `Request` y `Response` desde Express para proporcionar tipado a los parámetros del controlador.
- La función `getProducts` es asincrónica y devuelve todos los productos al cliente.
- Si la consulta al modelo falla, responde con estado HTTP 500.
- Forma parte del controlador en la arquitectura MVC, actuando como intermediario entre la ruta y el modelo.
*/
