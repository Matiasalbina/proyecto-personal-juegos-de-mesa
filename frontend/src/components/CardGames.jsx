import React from "react";
import "../Styles.css/CardStyles.css";

const ProductCard = ({ image, title, price, button }) => {
  // Validación básica: si falta alguna prop esencial, mostramos un mensaje de error.
  // Esto evita que el componente se rompa si recibe datos incompletos o incorrectos.
  if (!image || !title || typeof price !== "number") {
    return (
      <div className="product-card error">
        <p>No se han cargado correctamente las props del producto.</p>
      </div>
    );
  }

  // Formateador estilo chileno (CLP)
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <span className="price">{formattedPrice}</span>
        {button}
      </div>
    </div>
  );
};

export default ProductCard;

// ProductCard.jsx
// Este componente representa una tarjeta de producto reutilizable para mostrar información de un juego de mesa u otro artículo en una tienda online.
// Estructura:
// - Recibe por props:
//   - image: la URL o ruta local de la imagen del producto.
//   - title: el nombre o título del producto.
//   - price: el precio del producto.
//   - button: un botón personalizado (por ejemplo, "Agregar al carrito") que puede tener cualquier funcionalidad.
// - La tarjeta se divide en:
//   - Una imagen del producto.
//   - Un contenedor con el título, el precio y el botón.
// Estilos:
// - Los estilos están definidos en un archivo externo: 'Styles.css/CardStyles.css'.
// Reutilización:
// - Este componente es reutilizable y puede ser utilizado en distintas secciones como "Productos Destacados", "Ofertas", "Novedades", etc.
