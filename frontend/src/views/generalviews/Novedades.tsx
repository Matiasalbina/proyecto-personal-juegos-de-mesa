import React from "react";
import { useProducts } from "../../context/productContext";
import CardGames from "../../components/CardGames";
import "../../Styles.css/ProductosDestacados.css";

const ProductosDestacados: React.FC = () => {
  const products = useProducts();

  const destacados = products.filter((product) =>
    product.category.includes("novedad")
  );

  return (
    <section className="productos-destacados">
      <h2 className="titulo-destacados">Novedades</h2>
      <div className="contenedor-cards">
        {destacados.map((product) => (
          <CardGames
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            category={product.category} // ← agregamos esta prop
            contextCategory="novedad"
            button={<button className="add-btn">Añadir</button>}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductosDestacados;
