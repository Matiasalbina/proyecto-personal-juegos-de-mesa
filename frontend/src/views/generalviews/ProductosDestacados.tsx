import { useEffect, useState } from "react";
import CardGames from "../../components/CardGames";
import "../../Styles.css/ProductosDestacados.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
}

const ProductosDestacados: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <section className="productos-destacados">
      <h2 className="titulo-destacados">Productos Destacados</h2>
      <div className="contenedor-cards">
        {products.map((product) => (
          <CardGames
            key={product.id}
            image={product.image_url}
            title={product.name}
            price={product.price}
            button={<button className="add-btn">Añadir</button>}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductosDestacados;
