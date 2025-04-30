import React from 'react';
import '../styles/Nosotros.css';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <section className="nosotros-hero">
        <h1>Sobre Terrasol Parcelas</h1>
        <p className="subtitle">Un referente en el mercado inmobiliario del centro sur de Chile</p>
      </section>

      <section className="nosotros-content">
        <div className="nosotros-info">
          <h2>Nuestra Historia</h2>
          <p>
            Terrasol Parcelas emerge como un referente en el mercado inmobiliario de la zona
            centro sur de Chile, ofreciendo una oportunidad única para aquellos que buscan invertir
            en la naturaleza y la tranquilidad de este idílico paisaje.
          </p>
          <p>
            Especializados en la venta de parcelas de 5000 metros cuadrados, facilitamos el acceso
            a la propiedad de tierras con una inversión inicial accesible, comenzando desde tan
            solo 1 millón de pesos.
          </p>
        </div>

        <div className="nosotros-features">
          <div className="feature">
            <h3>Innovación</h3>
            <p>
              Ofrecemos tours virtuales de las parcelas, permitiendo a nuestros clientes explorar
              y visualizar cada rincón de sus futuras propiedades desde la comodidad de sus hogares.
            </p>
          </div>

          <div className="feature">
            <h3>Soluciones Integrales</h3>
            <p>
              Además de parcelas, ofrecemos la opción de adquirir propiedades que incluyen casas,
              proporcionando una alternativa llave en mano para aquellos que desean una vida en
              armonía con la naturaleza.
            </p>
          </div>

          <div className="feature">
            <h3>Financiamiento Accesible</h3>
            <p>
              Conscientes de las barreras financieras tradicionales, ofrecemos crédito directo
              sin necesidad de pasar por bancos, avales o requisitos complicados.
            </p>
          </div>
        </div>

        <div className="nosotros-vision">
          <h2>Nuestra Visión</h2>
          <p>
            En Terrasol Parcelas, no solo ofrecemos tierras, sino también un estilo de vida.
            Con un enfoque en la transparencia, la comodidad y la accesibilidad financiera,
            nos posicionamos como un aliado confiable para aquellos que desean invertir en su
            futuro, tanto en términos de patrimonio como de calidad de vida.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Nosotros; 