import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';
import '../styles/Parcelas.css';

const CasaParcela = () => {
  const [parcelas, setParcelas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarParcelas = async () => {
      try {
        const data = await apiService.getParcelasByTipo('casa-parcela');
        setParcelas(data);
      } catch (error) {
        console.error('Error al cargar las parcelas:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarParcelas();
  }, []);

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(precio);
  };

  if (loading) {
    return (
      <div className="loading">
        <p>Cargando parcelas...</p>
      </div>
    );
  }

  return (
    <div className="parcelas-container">
      <section className="parcelas-hero">
        <h1>Casas en Parcela</h1>
        <p>Tu hogar en medio de la naturaleza</p>
      </section>

      <section className="parcelas-grid">
        {parcelas.map((parcela) => (
          <div key={parcela.id} className="parcela-card">
            <div className="parcela-imagen">
              <img src={parcela.imagen} alt={parcela.nombre} />
            </div>
            <div className="parcela-info">
              <h2>{parcela.nombre}</h2>
              <p className="parcela-ubicacion">{parcela.ubicacion}</p>
              <p className="parcela-tamanio">Tamaño: {parcela.tamanio}</p>
              <div className="parcela-caracteristicas">
                <h3>Características:</h3>
                <ul>
                  {parcela.caracteristicas.map((caracteristica, index) => (
                    <li key={index}>{caracteristica}</li>
                  ))}
                </ul>
              </div>
              <p className="parcela-precio">
                Desde {formatearPrecio(parcela.precio)}
              </p>
              <button className="parcela-cta">
                Solicitar Información
              </button>
            </div>
          </div>
        ))}
      </section>

      {parcelas.length === 0 && !loading && (
        <div className="no-results">
          <p>No hay casas en parcela disponibles en este momento.</p>
        </div>
      )}
    </div>
  );
};

export default CasaParcela; 