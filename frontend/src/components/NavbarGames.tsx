import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Styles.css/NavbarStyle.css";
import {
  FaInstagram,
  FaUser,
  FaShoppingCart,
  FaDiceD20,
  FaUsers,
  FaGlassCheers,
  FaPowerOff,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Especificamos que puede ser el nombre del dropdown o false
type DropdownType = "Juegos de Mesa" | "Accesorios" | false;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // ← Tipado booleano
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownType>(false); // ← Tipo personalizado para más claridad

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirige al Home después de cerrar sesión
  };

  useEffect(() => {
    // Función que cierra el menú si se hace clic fuera
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".principal-menu")) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick); // ← Importante: limpiamos el listener
  }, []);

  return (
    <nav className="navbarGames">
      <div className="principal-content">
        <div className="social-media">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <span>Síguenos en redes sociales</span>
        </div>
        <div className="logo">
          <Link to="/">
            <img
              src="/images/mundo-ludico-mejorada.png"
              alt="Mundo Lúdico Logo"
            />
          </Link>
        </div>
        <div className="user-cart-icons">
          {user ? (
            <>
              <FaUser />
              <span>Hola, {user.name}</span>
              <a className="logout-icon" onClick={handleLogout}>
                <FaPowerOff />
              </a>
            </>
          ) : (
            <Link
              to="/login"
              aria-label="Iniciar sesión o crear cuenta"
              className="login-link"
            >
              <FaUser title="Iniciar sesión / Crear cuenta" />
              <span>Inicio Sesión</span>
            </Link>
          )}
          <Link to="/cart" aria-label="Ir al carrito de compras">
            <FaShoppingCart title="Carrito de compras" />
          </Link>
          <span>Carrito</span>
        </div>
      </div>

      <div className="principal-menu">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir o cerrar el menú"
        >
          <FaDiceD20 size={28} color="black" />
        </button>

        <div className={`list ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {/* Juegos de Mesa */}
            <li
              className={`dropdown ${
                isDropdownOpen === "Juegos de Mesa" ? "open" : ""
              }`}
              onMouseEnter={() => setIsDropdownOpen("Juegos de Mesa")}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className="dropdown-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(
                    isDropdownOpen === "Juegos de Mesa"
                      ? false
                      : "Juegos de Mesa"
                  );
                }}
              >
                Juegos de Mesa
              </div>

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

            {/* Accesorios */}
            <li
              className={`dropdown ${
                isDropdownOpen === "Accesorios" ? "open" : ""
              }`}
              onMouseEnter={() => setIsDropdownOpen("Accesorios")}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className="dropdown-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(
                    isDropdownOpen === "Accesorios" ? false : "Accesorios"
                  );
                }}
              >
                Accesorios
              </div>

              {isDropdownOpen === "Accesorios" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="accesorios"
                      className="dropdown-link"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      Folders
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <Link to="ofertas" onClick={() => setIsMenuOpen(false)}>
              Ofertas
            </Link>
            <li
              onClick={() => {
                setIsMenuOpen(false);
                const section = document.getElementById("productos-destacados");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Productos Destacados
            </li>

            <li
              onClick={() => {
                setIsMenuOpen(false);
                const section = document.getElementById("novedades");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Novedades
            </li>
            <li onClick={() => setIsMenuOpen(false)}>Nuestro Blog</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
