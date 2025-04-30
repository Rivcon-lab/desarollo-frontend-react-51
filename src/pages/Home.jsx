import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Tu Parcela en el Sur de Chile</h1>
          <p>Invierte en la naturaleza y la tranquilidad del centro sur de Chile</p>
          <button className="cta-button">Conoce Nuestras Parcelas</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Parcelas de 5000m²</h3>
          <p>Desde 1 millón de pesos</p>
        </div>
        <div className="feature-card">
          <h3>Tour Virtual</h3>
          <p>Explora tus futuras propiedades desde casa</p>
        </div>
        <div className="feature-card">
          <h3>Crédito Directo</h3>
          <p>Sin bancos ni avales</p>
        </div>
      </section>

      <section className="about-preview">
        <h2>Terrasol Parcelas</h2>
        <p>
          Emergemos como un referente en el mercado inmobiliario de la zona centro sur de Chile,
          ofreciendo una oportunidad única para aquellos que buscan invertir en la naturaleza
          y la tranquilidad de este idílico paisaje.
        </p>
      </section>

      <section className="cta-section">
        <h2>¿Listo para comenzar tu sueño?</h2>
        <button className="cta-button">Contáctanos</button>
      </section>
    </div>
  );
};

export default Home; 