import React from 'react';
import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import ContactForm from '../components/ContactForm';
import { Container, Box, Typography } from '@mui/material';
const noticias = [
    {
      title: "Nueva plaza inaugurada",
      summary: "La municipalidad inauguró una nueva plaza en el centro.",
      image: "https://source.unsplash.com/random/400x180?park",
    },
    // ...más noticias
  ];
  
  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {noticias.map((n, i) => (
      <NewsCard key={i} {...n} />
    ))}
  </Box>
function Home() {
    return (
      <Container maxWidth="md">
        <Hero />
        <Typography variant="h4" sx={{ my: 3 }}>Noticias recientes</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {noticias.map((n, i) => (
            <NewsCard key={i} {...n} />
          ))}
        </Box>
        <ContactForm />
      </Container>
    );
  }