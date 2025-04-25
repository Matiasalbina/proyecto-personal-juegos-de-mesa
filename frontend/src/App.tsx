import "./index.css"; // Importa los estilos globales
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarGames from "./components/NavbarGames";
import EuroGames from "./views/generalviews/EuroGames";
import Familiares from "./views/generalviews/Familiares";
import Home from "./views/generalviews/Home";
import CarouselGames from "./components/CarouselGames";
import Parties from "./views/generalviews/Parties";
import Folders from "./views/generalviews/Folders";
import React from "react"; // ✅ Import necesario para TSX

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <NavbarGames />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="carousel" element={<CarouselGames />} />
          <Route path="eurogames" element={<EuroGames />} />
          <Route path="familiares" element={<Familiares />} />
          <Route path="parties" element={<Parties />} />
          <Route path="accesorios" element={<Folders />} />
        </Routes>
      </main>
      <footer className="footer">© 2025 Tienda Juegos</footer>
    </div>
  );
};

export default App;
