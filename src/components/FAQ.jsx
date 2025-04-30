import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      pregunta: "¿Cuál es el tamaño mínimo de las parcelas?",
      respuesta: "Todas nuestras parcelas tienen un tamaño mínimo de 5000 metros cuadrados, lo que proporciona suficiente espacio para construir y disfrutar de la naturaleza."
    },
    {
      pregunta: "¿Cuál es el precio mínimo de inversión?",
      respuesta: "La inversión inicial comienza desde 1 millón de pesos, lo que hace accesible la adquisición de una parcela en el sur de Chile."
    },
    {
      pregunta: "¿Ofrecen financiamiento?",
      respuesta: "Sí, ofrecemos crédito directo sin necesidad de pasar por bancos, avales o requisitos complicados, facilitando el proceso de adquisición."
    },
    {
      pregunta: "¿Puedo ver la parcela antes de comprar?",
      respuesta: "Sí, ofrecemos un tour virtual que permite explorar y visualizar cada rincón de las parcelas desde la comodidad de tu hogar."
    },
    {
      pregunta: "¿Las parcelas incluyen servicios básicos?",
      respuesta: "Todas nuestras parcelas cuentan con acceso a servicios básicos como agua y electricidad, y algunas incluyen conexión a internet."
    },
    {
      pregunta: "¿Puedo construir mi propia casa?",
      respuesta: "Sí, puedes construir tu propia casa o adquirir una parcela que ya incluya una casa, según tus preferencias y necesidades."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.pregunta}
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              role="region"
              aria-hidden={activeIndex !== index}
            >
              <p>{faq.respuesta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 