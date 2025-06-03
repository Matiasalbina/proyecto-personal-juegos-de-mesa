import React from "react";
import { useProducts } from "../context/productContext";
import "../Styles.css/CarouselStyle.css";

const CarouselGames: React.FC = () => {
  const products = useProducts();

  // 🔎 Filtramos los productos con categoría "novedad" o "destacado"
  const featuredOrNew = products.filter(product =>
    product.category.includes("novedad") || product.category.includes("destacado")
  );

  // 🔀 Mezclamos aleatoriamente y mostramos 5
  const images = [...featuredOrNew]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <div className="custom-carousel">
      <div className="carousel-track">
        {images.map((product, index) => (
          <div className="carousel-slide" key={index}>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselGames;
