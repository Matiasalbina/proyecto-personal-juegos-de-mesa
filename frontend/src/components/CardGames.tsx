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
  contextCategory?: string; // 👈 NUEVA PROP
  discountPercent?: number; // 👈 Nuevo: descuento
  button?: React.ReactNode; // opcional, puede ser un botón o un link JSX
}

// ✅ Usamos React.FC con tipado explícito
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  category,
  contextCategory, // 👈 NUEVA PROP
  discountPercent = 0, // Valor por defecto
  button,
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

  // ✅ Calcula precio original solo si aplica
  const originalPrice =
    discountPercent > 0
      ? new Intl.NumberFormat("es-CL", {
          style: "currency",
          currency: "CLP",
          minimumFractionDigits: 0,
        }).format(Math.round(price / (1 - discountPercent / 100)))
      : null;

  return (
    <div className="product-card">
      {/* 🔖 Etiquetas */}
      {contextCategory === "destacado" && category?.includes("destacado") && (
        <span className="badge badge-featured">Destacado</span>
      )}
      {contextCategory === "novedad" && category?.includes("novedad") && (
        <span className="badge badge-new">Novedad</span>
      )}
      {/* Si no se pasa contextCategory, se pueden mostrar ambas como antes */}
      {!contextCategory && category?.includes("destacado") && (
        <span className="badge badge-featured">Destacado</span>
      )}
      {!contextCategory && category?.includes("novedad") && (
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
        {/* ✅ Precio con tachado solo en Ofertas */}
        {contextCategory === "ofertas" && discountPercent > 0 ? (
          <p>
            <span className="original-price">{originalPrice}</span>{" "}
            <span className="price">{formattedPrice}</span>
          </p>
        ) : (
          <span className="price">{formattedPrice}</span>
        )}
        {button}
      </div>
    </div>
  );
};

export default ProductCard;
