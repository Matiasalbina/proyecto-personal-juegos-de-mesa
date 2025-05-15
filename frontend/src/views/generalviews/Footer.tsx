import React from "react";
import "../../Styles.css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import AccordionSection from "../../components/AccordionSection";

const Footer: React.FC = () => {
  return (
    <section className="section-footer">
      <div className="suscribe">
        <div className="last-new">
          <h4>Infórmate de nuestras últimas noticias y ofertas especiales</h4>
        </div>
        <div className="newsletter">
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              SUSCRIBIRSE
            </button>
          </form>
          <p className="newsletter-note">
            Puedes darte de baja en cualquier momento. Para ello, consulta
            nuestra información de contacto en el aviso legal.
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className="bussines-information">
        <div className="productos">
          <AccordionSection title="PRODUCTOS">
            <ul>
              <li>
                <Link to="ofertas">Ofertas</Link>
              </li>
              <li>
                <Link to="novedades">Novedades</Link>
              </li>
              <li>
                <Link to="lomasvendido">Lo más vendido</Link>
              </li>
            </ul>
          </AccordionSection>
        </div>
        <div className="nuestra-empresa">
          <AccordionSection title="NUESTRA EMPRESA">
            <ul>
              <li>
                <Link to="/terminos">Términos y condiciones</Link>
              </li>
              <li>
                <Link to="/despachos">Despachos</Link>
              </li>
              <li>
                <Link to="/faq">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/contacto">Contacta con nosotros</Link>
              </li>
            </ul>
          </AccordionSection>
        </div>
        <div className="tu-cuenta">
          <AccordionSection title="TU CUENTA">
            <ul>
              <li>
                <Link to="/cuenta/personal">Información personal</Link>
              </li>
              <li>
                <Link to="/cuenta/pedidos">Pedidos</Link>
              </li>
              <li>
                <Link to="/cuenta/direcciones">Direcciones</Link>
              </li>
              <li>
                <Link to="/cuenta/cupones">Cupones de descuento</Link>
              </li>
              <li>
                <Link to="/cuenta/alertas">Mis alertas</Link>
              </li>
            </ul>
          </AccordionSection>
        </div>
        <div className="tienda">
          <AccordionSection title="INFORMACIÓN DE LA TIENDA">
            <ul>
              <li>Escríbenos al +569 50987525</li>
              <li>
                <Link to="tienda/correo">
                  Envíanos un correo a mundoludico@gmail.com
                </Link>
              </li>
            </ul>
          </AccordionSection>
        </div>
      </div>
    </section>
  );
};

export default Footer;
