import React from "react";
import { useProducts } from "../../context/productContext";
import CardGames from "../../components/CardGames";
import "../../Styles.css/Eurogames.css";

const EuroGames: React.FC = () => {
  const products = useProducts();

  // Solo productos que contienen la categoría "eurogames"
  const eurogames = products.filter((product) => product.category.includes("eurogames"));

  return (
    <section className="eurogames-section">
      <h2 className="euro-titulo-destacados">Eurogames</h2>

      <div className="contenedor-cards">
        {eurogames.map((product) => (
          <CardGames
            key={product.id}
            image={product.image_url}
            title={product.name}
            price={product.price}
            button={<button className="add-btn">Añadir</button>}
          />
        ))}
      </div>
    </section>
  );
};

export default EuroGames;
