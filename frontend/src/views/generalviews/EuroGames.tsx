import React, { useState } from "react";
import { useProducts } from "../../context/productContext";
import CardGames from "../../components/CardGames";
import "../../Styles.css/Eurogames.css";

const EuroGames: React.FC = () => {
  const products = useProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);

  const eurogames = products
    .filter((product) => product.category.includes("eurogames"))
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => product.price <= maxPrice);

    console.log("🔎 Producto completo:", eurogames);


  return (
    <section className="eurogames-section">
      {/* Título y filtros alineados en flex */}
      <div className="eurogames-header">
        <h2 className="euro-titulo-destacados">Eurogames</h2>
        <p className="contador-juegos">Hay {eurogames.length} juegos disponibles</p>
        <div className="filtros-eurogames">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio máx."
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : Infinity)
            }
          />
        </div>
      </div>

      <div className="contenedor-cards">
        {eurogames.map((product) => (
          <CardGames
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            category={product.category}
            button={<button className="add-btn">Añadir</button>}
          />
        ))}
      </div>
    </section>
  );
};

export default EuroGames;
