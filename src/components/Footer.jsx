import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li><FaPhone /> <a href="tel:+56950186583">+56 9 5018 6583</a></li>
            <li><FaWhatsapp /> <a href="https://wa.me/56950186583">WhatsApp</a></li>
            <li><FaEnvelope /> <a href="mailto:contacto@terrasolparcelas.cl">contacto@terrasolparcelas.cl</a></li>
            <li><FaMapMarkerAlt /> Entre Talca y la Región de Los Lagos</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/tuparcelaenelsurdechile" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/terrasol_parcelas" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Terrasol Parcelas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 