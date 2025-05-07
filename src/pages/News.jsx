import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NewsCard from '../components/NewsCard';

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
  // Puedes agregar más noticias aquí
];

const categories = [
  'Todas',
  'Eventos',
  'Infraestructura',
  'Medio Ambiente',
  'Cultura',
  'Deportes',
];

function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredNews = newsData.filter((news) => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 6,
          textAlign: 'center',
        }}
      >
        Noticias
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          backgroundColor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Buscar noticias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              label="Categoría"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {filteredNews.length > 0 ? (
        <Grid container spacing={4}>
          {filteredNews.map((news) => (
            <Grid item key={news.id} xs={12} md={6}>
              <NewsCard {...news} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            No se encontraron noticias que coincidan con tu búsqueda.
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default News; 