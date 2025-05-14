import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../context/productContext";
import { useState } from "react";
import "../../Styles.css/GameDetail.css";

const GameDetail = () => {
  const { id } = useParams();
  const products = useProducts();

  const game = products.find((product) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!game) return <p>Juego no encontrado.</p>;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  return (
    <div className="view-detail">
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link> /{" "}
        <Link to="/juegos-de-mesa">Juegos de Mesa</Link> /{" "}
        <Link to="/eurogames">Eurogames</Link> / <span>{game.name}</span>
      </nav>

      <div className="game-detail">
        <div className="game-image">
          <img src={game.image_url} alt={game.name} />
          <div className="detail-game">
            <h2>{game.name}</h2>
            <strong>${game.price.toLocaleString("es-CL")}</strong>

            <div className="quantity-section">
              <label htmlFor="quantity">Cantidad</label>
              <input
                id="quantity"
                type="number"
                min={1}
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button
                disabled={quantity > game.stock || game.stock === 0}
                className="add-btn"
              >
                🛒 AGREGAR
              </button>

              {game.stock > 0 && (
                <p className="warning">
                  ⚠️ Solo quedan {game.stock} unidades disponibles
                </p>
              )}
              {quantity > game.stock && (
                <p className="error">
                  ⛔ No hay suficientes productos en stock
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="body-detail">
          <h3>Descripción</h3>
          <p>{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
