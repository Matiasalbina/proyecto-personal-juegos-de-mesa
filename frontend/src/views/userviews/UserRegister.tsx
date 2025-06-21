import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // 👈 importa el contexto
import "../../Styles.css/Register.css";

const Register = () => {
  const [mostrar, setMostrar] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register } = useAuth(); // 👈 extrae el método del context
  const navigate = useNavigate(); // 👈 para redirigir luego del registro

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await register(name, email, password);
      navigate("/"); // 👈 redirige a home o dashboard
    } catch (err) {
      alert("Error al registrar usuario");
      console.error(err);
    }
  };

  return (
    <div className="register">
      <h3 className="register-title">Crea una cuenta nueva</h3>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="user-email">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="user-email">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            />
            <button type="button" onClick={() => setMostrar(!mostrar)}>
              {mostrar ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>

        <div className="user-password">
          <label htmlFor="confirmPassword">Repite tu contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">
          Registrarme
        </button>

        <hr />
        <p className="register-link">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
