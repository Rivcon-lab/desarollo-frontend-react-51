// Imagen temporal para desarrollo
import dummyImage from './dummy.png';

// Importar las imágenes de servicios
import atencionImage from './services/atencion.png';
import deportesImage from './services/deportes.png';
import urbanoImage from './services/urbano.png';

// Importar las imágenes de noticias
import acondicionamientoImage from './news/acondicionamiento.webp';
import tallercambiocliImage from './news/tallercambiocli.webp';
import beca1Image from './news/bec1.webp';
import beca2Image from './news/bec2.webp';
import beca3Image from './news/bec3.webp';

// Exportar las imágenes organizadas por sección
export const servicesImages = {
  atencionCiudadana: atencionImage,
  desarrolloUrbano: urbanoImage,
  culturaDeporte: deportesImage,
};

export const newsImages = {
  acondicionamiento: acondicionamientoImage,
  tallercambiocli: tallercambiocliImage,
  beca: {
    image1: beca1Image,
    image2: beca2Image,
    image3: beca3Image
  }
};

export const heroImages = {
  main: dummyImage,
  background: dummyImage,
}; 