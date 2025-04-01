import { useState } from "react";
import "../Styles.css/NavbarStyle.css";
import { FaInstagram } from "react-icons/fa";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FaDiceD20, FaUsers, FaGlassCheers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Estado para controlar si el menú principal está abierto o cerrado (modo responsive)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para controlar cuál dropdown está abierto
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /**
   * Función que cierra el menú y los dropdowns si el usuario hace clic fuera del área del menú.
   * Solo se ejecuta en dispositivos móviles o pantallas pequeñas.
   */
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".principal-menu")) {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  // Agrega un listener para detectar clics fuera del menú y cerrarlo
  window.addEventListener("click", handleOutsideClick);

  return (
    <nav className="navbarGames">
      {/* Sección superior con redes sociales e iconos de usuario y carrito */}
      <div className="principal-content">
        <div className="social-media">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <span>Síguenos en redes sociales</span>
        </div>
        <div className="user-cart-icons">
          <a href="/login">
            <FaUser title="Iniciar sesión / Crear cuenta" />
          </a>
          <span>Inicio Sesión</span>
          <a href="/cart">
            <FaShoppingCart title="Carrito de compras" />
          </a>
          <span>Carrito</span>
        </div>
      </div>

      {/* Menú de navegación principal */}
      <div className="principal-menu">
        {/* Botón para abrir/cerrar el menú en modo responsive */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaDiceD20 size={28} color="black" />
        </button>

        {/* Lista de navegación */}
        <div className={`list ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {/* 🔹 Dropdown: Juegos de Mesa */}
            <li
              className={`dropdown ${isDropdownOpen ? "open" : ""}`}
              onMouseEnter={() => setIsDropdownOpen("Juegos de Mesa")}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className="dropdown-toggle"
                onClick={(e) => {
                  e.stopPropagation(); // Evita que se cierre todo el menú al hacer clic dentro
                  setIsDropdownOpen(
                    isDropdownOpen === "Juegos de Mesa"
                      ? false
                      : "Juegos de Mesa"
                  );
                }}
              >
                Juegos de Mesa
              </div>

              {/* Desplegable: Juegos de Mesa */}
              {isDropdownOpen === "Juegos de Mesa" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="eurogames"
                      className="dropdown-link"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <FaDiceD20 /> Eurogames
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="familiares"
                      className="dropdown-link"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <FaUsers /> Familiares
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="parties"
                      className="dropdown-link"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <FaGlassCheers /> Parties
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* 🔹 Dropdown: Accesorios */}
            <li
              className={`dropdown ${isDropdownOpen ? "open" : ""}`}
              onMouseEnter={() => setIsDropdownOpen("Accesorios")}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className="dropdown-toggle"
                onClick={(e) => {
                  e.stopPropagation(); // Evita que se cierre todo el menú al hacer clic dentro
                  setIsDropdownOpen(
                    isDropdownOpen === "Accesorios" ? false : "Accesorios"
                  );
                }}
              >
                Accesorios
              </div>

              {/* Desplegable: Accesorios */}
              {isDropdownOpen === "Accesorios" && (
                <ul className="dropdown-menu">
                  <li><Link
                      to="accesorios"
                      className="dropdown-link"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      Folders
                    </Link></li>
                </ul>
              )}
            </li>

            {/* Otras opciones del menú sin dropdown */}
            <li onClick={() => setIsMenuOpen(false)}>Ofertas</li>
            <li onClick={() => setIsMenuOpen(false)}>Productos Destacados</li>
            <li onClick={() => setIsMenuOpen(false)}>Novedades</li>
            <li onClick={() => setIsMenuOpen(false)}>Nuestro Blog</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
