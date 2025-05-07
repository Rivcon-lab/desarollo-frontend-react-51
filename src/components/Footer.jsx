import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const footerLinks = [
  { title: 'Inicio', path: '/' },
  { title: 'Noticias', path: '/noticias' },
  { title: 'Servicios', path: '/servicios' },
  { title: 'Contacto', path: '/contacto' },
];

const legalLinks = [
  { title: 'Política de Privacidad', path: '/privacidad' },
  { title: 'Términos y Condiciones', path: '/terminos' },
  { title: 'Mapa del Sitio', path: '/mapa-sitio' },
];

function Footer() {
  const theme = useTheme();

  // URL de Google Maps con la dirección
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Jose+Joaquin+Perez+449+Cholchol';

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Información de Contacto */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Municipalidad de Cholchol
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1, mt: 0.5 }} />
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Typography variant="body2">
                  José Joaquín Pérez 449, Cholchol, Araucanía
                </Typography>
              </Link>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Tel: (45) 273 4200
            </Typography>
            <Typography variant="body2">
              Email: municipalidad@municholchol.cl
            </Typography>
          </Grid>

          {/* Enlaces Rápidos */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.title}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Redes Sociales */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <IconButton
                color="inherit"
                aria-label="Facebook"
                component="a"
                href="https://www.facebook.com/people/Municipalidad-de-Cholchol/100065025870874/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              
              <IconButton
                color="inherit"
                aria-label="Instagram"
                component="a"
                href="https://www.instagram.com/municholchol_oficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="YouTube"
                component="a"
                href="https://www.youtube.com/@MunicipalidaddeCholcholOficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Línea divisoria */}
        <Box
          sx={{
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            my: 3,
          }}
        />

        {/* Copyright y Enlaces Legales */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="center" sx={{
              textAlign: { xs: 'center', md: 'left' }
            }}>
              © {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                gap: 2,
              }}
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.title}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer; 