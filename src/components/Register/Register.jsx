import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../blocks/auth.css';

function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData.email, formData.password);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Registro</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />
        <button className="auth__submit" type="submit">
          Registrarse
        </button>
      </form>
      <div className="auth__signin">
        <p>¿Ya eres miembro?<Link to="/signin" className="auth__signin-link">Inicia sesión aquí</Link></p>
      </div>
    </div>
  );
}

export default Register;