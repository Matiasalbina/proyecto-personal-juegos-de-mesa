import React from "react";
import { useProducts } from "../../context/productContext";
import CardGames from "../../components/CardGames";
import "../../Styles.css/ProductosDestacados.css";

const ProductosDestacados: React.FC = () => {
  const products = useProducts();

  const destacados = products.filter((product) =>
    product.category.includes("destacado")
  );

  return (
    <section className="productos-destacados">
      <h2 className="titulo-destacados">Productos Destacados</h2>
      <div className="contenedor-cards">
        {destacados.map((product) => (
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

export default ProductosDestacados;
