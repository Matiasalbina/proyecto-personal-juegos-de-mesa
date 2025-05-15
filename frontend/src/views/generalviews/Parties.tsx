import React, { useState } from "react";
import { useProducts } from "../../context/productContext";
import CardGames from "../../components/CardGames";
import "../../Styles.css/Partiegames.css";

const PartieGames: React.FC = () => {
  const products = useProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);

  const partiegames = products
    .filter((product) => product.category.includes("parties"))
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => product.price <= maxPrice);

  return (
    <section className="partiegames-section">
      {/* Título y filtros alineados en flex */}
      <div className="partiegames-header">
        <h2 className="partie-titulo-destacados">Partiegames</h2>
        <p className="contador-juegos">Hay {partiegames.length} juegos disponibles</p>
        <div className="filtros-partiegames">
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
        {partiegames.map((product) => (
          <CardGames
            key={product.id}
            id={product.id}
            image={product.image_url}
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

export default PartieGames;