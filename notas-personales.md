# 📝 Con windows + . aparecen los emojis

# 📝 Notas Personales – Proyecto Juegos de Mesa

## 🧱 Crear tablas y base de datos

- 🗂️ Puedo organizar todos los scripts SQL dentro de una carpeta (`src/db/`)
- 📝 Ahí creo archivos como: `cafes.sql`, `accesorios.sql`, `blog.sql`, etc.
- 📂 También puedo tener un archivo `init.sql` para crear la base de datos (si lo necesito)

## 🧱 ¿Qué hace el modelo (model)?

- Se conecta a la tabla products
- Ejecuta consultas SQL (como SELECT, INSERT, UPDATE, DELETE)
- Se comunica con el controlador (controller) para entregar datos al frontend

---

## ⚙️ Ejecutar scripts automáticamente

- 🔄 En `config.js` puedo crear una función `async` para leer todos los `.sql` usando `fs`
- 🧠 Esa función recorre los archivos SQL y ejecuta cada uno con `pool.query(sql)`

```js
const sql = await fs.readFile("src/db/cafes.sql", "utf8");
await pool.query(sql);

