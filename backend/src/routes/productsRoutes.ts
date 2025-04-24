// ✅ Importamos Router desde Express
import { Router } from "express";

// ✅ Importamos el controlador que maneja la obtención de productos
import { getProducts } from "../controllers/productsController";

// ✅ Creamos una instancia de router
const router = Router();

// ✅ Definimos la ruta GET para obtener todos los productos
// Endpoint: /products
router.get("/", getProducts);

// ✅ Exportamos el router para usarlo en app.ts o server.ts
export default router;


/*
------------------------------------------------
📄 RESUMEN TÉCNICO - productsRoutes.ts
------------------------------------------------

- Usa `Router` de Express para definir rutas agrupadas relacionadas a productos.
- Conecta la ruta `GET /products` con el controlador `getProducts`.
- Este archivo se importa luego en `app.ts` o `server.ts` y se monta con una ruta base (por ejemplo, `/products`).
*/
