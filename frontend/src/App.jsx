import "./index.css"; // Importa los estilos globales
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarGames from "./components/NavbarGames";
import EuroGames from "./views/generalviews/EuroGames";
import Familiares from "./views/generalviews/Familiares";

function App() {
  return (
    <div className="container">
      <header className="header">
        <NavbarGames />
        <Routes>
          <Route path="eurogames" element={<EuroGames />} />
          <Route path="familiares" element={<Familiares />} />
        </Routes>
      </header>
      <main className="main"></main>
      <footer className="footer">© 2025 Tienda Juegos</footer>
    </div>
  );
}

export default App;
