import React from "react";
import "../Styles.css/CardStyles.css";

// ✅ Definimos la interfaz de props
interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  button?: React.ReactNode; // opcional, puede ser un botón o un link JSX
}

// ✅ Usamos React.FC con tipado explícito
const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, button }) => {
  // Validación extra por seguridad (aunque el tipado ya ayuda a prevenir esto)
  if (!image || !title || typeof price !== "number") {
    return (
      <div className="product-card error">
        <p>No se han cargado correctamente las props del producto.</p>
      </div>
    );
  }

  // ✅ Formato de precio CLP (pesos chilenos)
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
