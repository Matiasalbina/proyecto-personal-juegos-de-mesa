import React, { useState } from 'react';
import "../../Styles.css/ForgotPassword.css";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí va la lógica para enviar email de recuperación
    console.log(`Enviar recuperación a: ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h3>Recupera tu contraseña</h3>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Enviar instrucciones</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
