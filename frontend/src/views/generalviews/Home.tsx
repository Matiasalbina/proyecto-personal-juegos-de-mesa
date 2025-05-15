import React from "react";
import CarouselGames from "../../components/CarouselGames";
import ProductosDestacados from "./ProductosDestacados";
import Footer from "./Footer";

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
