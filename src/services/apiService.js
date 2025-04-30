import apiData from './api.json';

class ApiService {
  // Método para obtener todas las parcelas
  getParcelas() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(apiData.parcelas);
      }, 500); // Simulación de latencia de red
    });
  }

  // Método para obtener parcelas por tipo
  getParcelasByTipo(tipo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(apiData.parcelas[tipo] || []);
      }, 500);
    });
  }

  // Método para obtener servicios
  getServicios() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(apiData.servicios);
      }, 500);
    });
  }

  // Método para obtener información de contacto
  getContacto() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(apiData.contacto);
      }, 500);
    });
  }

  // Método para simular el envío de un formulario de contacto
  enviarFormularioContacto(formData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulación de respuesta exitosa
        resolve({
          success: true,
          message: 'Mensaje enviado exitosamente',
          data: formData
        });
      }, 1000);
    });
  }
}

export default new ApiService(); 