import React, { useState } from "react";
import { useProducts } from "../../context/productContext";
import CardGames from "../../components/CardGames";
import "../../Styles.css/Familiares.css";

const Familiares: React.FC = () => {
  const products = useProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);

  const familiares = products
  .filter((product) => product.category.includes("familiares"))
  .filter ((product) =>
    product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )
  .filter((product) => product.price <= maxPrice);

  return (
    <section className="familiares-section">
      <div className="familiares-header">
        <h2 className="familiares-titulo">Familiares</h2>
        <p className="contador-familiares-juegos">Hay {familiares.length} juegos disponibles</p>
        <div className="filtros-familiares">
          <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
           />
           <input
           type="number"
           placeholder="Precio"
           onChange={(e) =>
            setMaxPrice(e.target.value ? Number(e.target.value) : Infinity)
           }
           />
        </div>
      </div>

      <div className="contenedor-cards">
        {familiares.map((product) => (
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

export default Familiares;