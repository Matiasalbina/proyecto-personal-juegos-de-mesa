import React, { useState } from "react";
import { useProducts } from "../../context/productContext";
import CardGames from "../../components/CardGames";
import "../../Styles.css/Eurogames.css"; // Usa tu estilo base, puedes hacer uno nuevo si quieres

const Ofertas: React.FC = () => {
  const products = useProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);

  // ✅ Filtra solo productos en oferta y aplica búsqueda y precio máx
  const offers = products
    .filter((product) => product.on_sale)
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        product.price * (1 - product.discount_percent / 100) <= maxPrice
    );

  console.log("🤑 Ofertas filtradas:", offers);

  return (
    <section className="eurogames-section">
      <div className="eurogames-header">
        <h2 className="euro-titulo-destacados">Ofertas</h2>
        <p className="contador-juegos">Hay {offers.length} juegos en oferta</p>
        <div className="filtros-eurogames">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio máx. con descuento"
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : Infinity)
            }
          />
        </div>
      </div>

      <div className="contenedor-cards">
        {offers.map((product) => {
          const finalPrice = Math.round(
            product.price * (1 - product.discount_percent / 100)
          );

          return (
            <CardGames
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.name}
              price={finalPrice} // ✅ Muestra precio con descuento
              category={product.category}
              contextCategory="ofertas" // 🔑 Esto es CLAVE
              discountPercent={product.discount_percent} // 🔑 Esto también
              button={<button className="add-btn">Añadir</button>}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Ofertas;
