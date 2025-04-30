import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Terrasol Parcelas</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li className="dropdown">
            <Link to="/parcelas">Parcelas</Link>
            <ul className="dropdown-content">
              <li><Link to="/parcelas/solo-terreno">Solo terreno</Link></li>
              <li><Link to="/parcelas/casa-parcela">Casa en Parcela</Link></li>
            </ul>
          </li>
          <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 