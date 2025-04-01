import React from "react";
import "../Styles.css/CarouselStyle.css";
import bitoku from "../assets/bitoku_prueba.jpg";
import daitoshi from "../assets/daitoshi.jpg";
import foreverHome from "../assets/forever-home.jpg";

function CarouselGames() {
  return (
    <div className="custom-carousel">
      <div className="carousel-track">
        <div className="carousel-slide">
          <img src={bitoku} alt="Bitoku" />
        </div>
        <div className="carousel-slide">
          <img src={daitoshi} alt="Daitoshi" />
        </div>
        <div className="carousel-slide">
          <img src={foreverHome} alt="Forever Home" />
        </div>
      </div>
    </div>
  );
}

export default CarouselGames;
