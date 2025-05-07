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
import { newsImages } from '../assets/images';

// Datos de las noticias
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

const categories = [
  'Todas',
  'Deportes',
  'Medio Ambiente',
  'Educación',
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