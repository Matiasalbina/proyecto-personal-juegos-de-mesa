import { Router } from "express";
import {
  getProducts,
  getProductsOnSale,
} from "../controllers/productsController";

// ✅ Creamos una instancia de router
const router = Router();

// ✅ Definimos la ruta GET para obtener todos los productos
// Endpoint: /products
router.get("/", getProducts);
router.get("/offers", getProductsOnSale);

// ✅ Exportamos el router para usarlo en app.ts o server.ts
export default router;
