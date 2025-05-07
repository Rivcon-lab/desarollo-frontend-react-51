import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsCard from './components/NewsCard';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Hero />
        {/* Aquí podrías mapear NewsCard para mostrar varias noticias */}
        <NewsCard />
        <ContactForm />
      </Container>
    </>
  );
}

export default App;