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
import AdminPanel from "./views/AdminPanel";
import GameDetail from "./views/generalviews/GameDetail";
import Footer from "./views/generalviews/Footer";
import Login from "./views/userviews/LoginRegister";
import Register from "./views/userviews/UserRegister";
import ForgotPassword from "./views/userviews/ForgotPassword";
import Ofertas from "./views/generalviews/Ofertas";
import AvatarAssistant from "./components/AvatarAssistant";

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <NavbarGames />
        <AvatarAssistant />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="carousel" element={<CarouselGames />} />
          <Route path="eurogames" element={<EuroGames />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="/juego/:id" element={<GameDetail />} />
          <Route path="familiares" element={<Familiares />} />
          <Route path="parties" element={<Parties />} />
          <Route path="accesorios" element={<Folders />} />
          <Route path="admin" element={<AdminPanel />} />{" "}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
