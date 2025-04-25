import React from "react";
import CarouselGames from "../../components/CarouselGames";
import ProductosDestacados from "./ProductosDestacados";

// ✅ Componente funcional tipado
const Home: React.FC = () => {
  return (
    <div>
      <CarouselGames />
      <ProductosDestacados />
    </div>
  );
};

export default Home;
