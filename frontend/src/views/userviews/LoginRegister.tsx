import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../Styles.css/LoginRegister.css";

const Login: React.FC = () => {
  const [mostrar, setMostrar] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth(); // 👈 accede a login desde el contexto
  const navigate = useNavigate(); // 👈 para redirigir al usuario

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // 👈 redirige a Home o Dashboard
    } catch (err) {
      alert("Error al iniciar sesión");
      console.error(err);
    }
  };

  return (
    <div className="login">
      <h3 className="login-title">Inicia sesión con tu cuenta</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="user-email">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={() => setMostrar(!mostrar)}>
              {mostrar ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>

        <Link to="/forgot-password" className="forgot-password-link">
          <span>¿Olvidaste tu contraseña?</span>
        </Link>

        <button type="submit">Iniciar sesión</button>
        <hr />
        <Link to="/register" className="user-register">
          <span>¿No tienes una cuenta? Crea una aquí</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
