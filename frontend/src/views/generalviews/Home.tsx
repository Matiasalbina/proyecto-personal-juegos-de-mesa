import React from "react";
import CarouselGames from "../../components/CarouselGames";
import ProductosDestacados from "./ProductosDestacados";
import Novedades from "./Novedades";

// ✅ Componente funcional tipado
const Home: React.FC = () => {
  return (
    <div>
      <CarouselGames />
      <section id="productos-destacados">
        <ProductosDestacados />
      </section>
      <section id="novedades">
        <Novedades />
      </section>
    </div>
  );
};

export default Home;
