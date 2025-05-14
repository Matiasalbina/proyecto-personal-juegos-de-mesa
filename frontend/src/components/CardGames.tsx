import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles.css/CardStyles.css";

// ✅ Definimos la interfaz de props
interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  category?: string[]; // ← nueva prop opcional
  button?: React.ReactNode; // opcional, puede ser un botón o un link JSX
}

// ✅ Usamos React.FC con tipado explícito
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  category,
  button
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/juego/${id}`);
  };

  // ✅ Formato de precio CLP (pesos chilenos)
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <div className="product-card">
      {/* 🔖 Etiquetas */}
      {category?.includes("destacado") && (
        <span className="badge badge-featured">Destacado</span>
      )}
      {category?.includes("novedad") && (
        <span className="badge badge-new">Novedad</span>
      )}
      <img
        src={image}
        alt={title}
        className="product-image"
        onClick={handleClick} // ← al hacer clic va a GameDetail
        style={{ cursor: "pointer" }}
      />
      <div className="product-info">
        <h3>{title}</h3>
        <span className="price">{formattedPrice}</span>
        {button}
      </div>
    </div>
  );
};

export default ProductCard;
