import React from "react";
import CardGames from "../../components/CardGames";
import bitoku from "../../assets/bitoku_prueba.jpg";
import daitoshi from "../../assets/daitoshi.jpg";
import forever from "../../assets/forever-home.jpg";
import "../../Styles.css/ProductosDestacados.css";

// ✅ Componente funcional tipado
const ProductosDestacados: React.FC = () => {
  return (
    <section className="productos-destacados">
      <h2 className="titulo-destacados">Productos Destacados</h2>
      <div className="contenedor-cards">
        <CardGames
          image={bitoku}
          title="Bitoku"
          price={57990}
          button={<button className="add-btn">Añadir</button>}
        />
        <CardGames
          image={daitoshi}
          title="Daitoshi"
          price={39990}
          button={<button className="add-btn">Añadir</button>}
        />
        <CardGames
          image={forever}
          title="Forever Home"
          price={29990}
          button={<button className="add-btn">Añadir</button>}
        />
      </div>
    </section>
  );
};

export default ProductosDestacados;
