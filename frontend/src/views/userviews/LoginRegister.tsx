import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles.css/LoginRegister.css";

const Login: React.FC = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="login">
      <h3 className="login-title">Inicia sesion con tu cuenta</h3>
      <form className="login-form">
        <div className="user-email">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="user-password">
          <label htmlFor="password">Contraseña</label>
          <div className="show-password">
            <input
              type={mostrar ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
            />
            <button type="button" onClick={() => setMostrar(!mostrar)}>
              {mostrar ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>
        <Link to="/recuperar-contraseña" className="forgot-password-link">
          <span>¿Olvidaste tu contraseña?</span>
        </Link>

        <button type="submit">Iniciar sesión</button>
        <hr />
        <Link to="register" className="user-register">
          <span>¿No tienes una cuenta? Crea una aquí</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
