import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import ContactForm from '../components/ContactForm';

// Datos de ejemplo para las noticias
const newsData = [
  {
    id: 1,
    title: 'Inauguración del Nuevo Centro Comunitario',
    content: 'Se inauguró el nuevo centro comunitario que beneficiará a más de 500 familias del sector.',
    imageUrl: 'https://source.unsplash.com/random/800x600/?community',
    category: 'Eventos',
    date: '15 de Marzo, 2024',
    readTime: '3 min',
  },
  {
    id: 2,
    title: 'Mejoras en la Infraestructura Vial',
    content: 'Se iniciaron las obras de mejoramiento en las principales calles del centro de la ciudad.',
    imageUrl: 'https://source.unsplash.com/random/800x600/?road',
    category: 'Infraestructura',
    date: '14 de Marzo, 2024',
    readTime: '4 min',
  },
  {
    id: 3,
    title: 'Programa de Reciclaje Municipal',
    content: 'Nuevo programa de reciclaje para promover la sustentabilidad en nuestra comunidad.',
    imageUrl: 'https://source.unsplash.com/random/800x600/?recycling',
    category: 'Medio Ambiente',
    date: '13 de Marzo, 2024',
    readTime: '5 min',
  },
];

function Home() {
  const [showAllNews, setShowAllNews] = useState(false);
  const displayedNews = showAllNews ? newsData : newsData.slice(0, 2);

  return (
    <>
      <Hero />
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
      <ContactForm />
    </>
  );
}

export default Home;