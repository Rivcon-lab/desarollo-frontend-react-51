import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
    mensaje: '',
    terminos: false,
    servicio: 'parcela'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.direccion.trim()) {
      newErrors.direccion = 'La dirección es requerida';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }
    
    if (!formData.terminos) {
      newErrors.terminos = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulación de envío de formulario
      setIsSubmitted(true);
      setIsSuccess(true);
      
      // Simulación de error
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'error' : ''}
          />
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className={errors.direccion ? 'error' : ''}
          />
          {errors.direccion && <span className="error-message">{errors.direccion}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="servicio">Servicio de interés</label>
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
          >
            <option value="parcela">Parcela</option>
            <option value="casa-parcela">Casa en Parcela</option>
            <option value="tour-virtual">Tour Virtual</option>
            <option value="credito">Crédito Directo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className={errors.mensaje ? 'error' : ''}
          />
          {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            checked={formData.terminos}
            onChange={handleChange}
            className={errors.terminos ? 'error' : ''}
          />
          <label htmlFor="terminos">
            Acepto los términos y condiciones
          </label>
          {errors.terminos && <span className="error-message">{errors.terminos}</span>}
        </div>

        <button type="submit" className="submit-button">
          Enviar Mensaje
        </button>

        {isSubmitted && (
          <div className={`submission-message ${isSuccess ? 'success' : 'error'}`}>
            {isSuccess ? 'Mensaje enviado exitosamente' : 'Mensaje no enviado, presenta error'}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 