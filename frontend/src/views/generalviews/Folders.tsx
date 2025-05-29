import React, { useState } from "react";
import { useProducts } from "../../context/productContext";
import CardGames from "../../components/CardGames";
import "../../Styles.css/FolderGames.css";

const Folders: React.FC = () => {
  const products = useProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);

  const folders = products
    .filter((product) => product.category.includes("folders"))
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => product.price <= maxPrice);

  return (
    <section className="folders-section">
      {/* Título y filtros alineados en flex */}
      <div className="folders-header">
        <h2 className="euro-titulo-destacados">Folders</h2>
        <p className="contador-juegos">
          Hay {folders.length} juegos disponibles
        </p>
        <div className="filtros-folders">
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
        {folders.map((product) => (
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

export default Folders;
