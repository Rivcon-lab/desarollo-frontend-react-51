import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import ContactForm from '../components/ContactForm';
import { servicesImages, newsImages } from '../assets/images';

/**
 * Datos de ejemplo para las noticias
 * @type {Array<{
 *   id: number,
 *   title: string,
 *   content: string,
 *   imageUrl: string,
 *   category: string,
 *   date: string,
 *   readTime: string
 * }>}
 */
const newsData = [
  {
    id: 1,
    title: 'Taller de Acondicionamiento Físico',
    content: 'Participa en nuestro taller de acondicionamiento físico y mejora tu calidad de vida.',
    imageUrl: newsImages.acondicionamiento,
    category: 'Deportes',
    date: '15 de Marzo, 2024',
    readTime: '3 min',
  },
  {
    id: 2,
    title: 'Taller Comunitario sobre Cambio Climático',
    content: 'PARTICIPA EN EL TALLER COMUNITARIO SOBRE CAMBIO CLIMÁTICO. CONSTRUYAMOS JUNTOS EL PERFIL COMUNAL DE AMENAZAS CLIMÁTICAS DE CHOLCHOL',
    imageUrl: newsImages.tallercambiocli,
    category: 'Medio Ambiente',
    date: '14 de Marzo, 2024',
    readTime: '4 min',
  },
  {
    id: 3,
    title: 'Programa Beca Municipal Educación Año 2025',
    content: 'Conoce los detalles del nuevo programa de becas municipales para el año 2025.',
    imageUrl: newsImages.beca.image1,
    category: 'Educación',
    date: '13 de Marzo, 2024',
    readTime: '5 min',
    additionalImages: [
      newsImages.beca.image2,
      newsImages.beca.image3
    ]
  },
];

/**
 * Datos de ejemplo para los servicios destacados
 * @type {Array<{
 *   id: number,
 *   title: string,
 *   description: string,
 *   imageUrl: string
 * }>}
 */
const featuredServices = [
  {
    id: 1,
    title: 'Atención Ciudadana',
    description: 'Servicio de atención personalizada para trámites y consultas ciudadanas.',
    imageUrl: servicesImages.atencionCiudadana,
  },
  {
    id: 2,
    title: 'Desarrollo Urbano',
    description: 'Gestión y planificación del desarrollo urbano sostenible.',
    imageUrl: servicesImages.desarrolloUrbano,
  },
  {
    id: 3,
    title: 'Cultura y Deporte',
    description: 'Programas culturales y deportivos para toda la comunidad.',
    imageUrl: servicesImages.culturaDeporte,
  },
];

/**
 * Componente principal de la página de inicio
 * @returns {JSX.Element} Componente Home
 */
function Home() {
  const [showAllNews, setShowAllNews] = useState(false);
  const displayedNews = showAllNews ? newsData : newsData.slice(0, 2);

  return (
    <>
      <Hero />
      
      {/* Sección de Servicios Destacados */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 4,
            textAlign: 'center',
          }}
        >
          Servicios Destacados
        </Typography>
        
        <Grid container spacing={4}>
          {featuredServices.map((service) => (
            <Grid item key={service.id} xs={12} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.imageUrl}
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sección de Últimas Noticias */}
      <Container maxWidth="lg" sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 4,
            textAlign: 'center',
          }}
        >
          Últimas Noticias
        </Typography>
        
        <Grid container spacing={4}>
          {displayedNews.map((news) => (
            <Grid item key={news.id} xs={12} md={6}>
              <NewsCard {...news} />
            </Grid>
          ))}
        </Grid>

        {newsData.length > 2 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => setShowAllNews(!showAllNews)}
            >
              {showAllNews ? 'Ver menos' : 'Ver más noticias'}
            </Button>
          </Box>
        )}
      </Container>

      {/* Sección de Contacto */}
      <ContactForm />
    </>
  );
}

export default Home;