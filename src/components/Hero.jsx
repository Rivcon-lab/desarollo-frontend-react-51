import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import heroBackground from '../assets/images/hero/PLAZAYFRONTISMUNICIPALIDAD1.webp';
import { heroImages } from '../assets/images';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  padding: theme.spacing(8, 0),
  overflow: 'hidden',
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '1.5rem',
  },
}));

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeroSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Bienvenido a la Municipalidad de Cholchol
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontWeight: 400,
              }}
            >
              Trabajando juntos por una comunidad más fuerte y unida
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                to="/municipio"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    transition: 'transform 0.2s',
                  },
                }}
              >
                Conoce más
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component={Link}
                to="/servicios"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Servicios
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundColor: 'rgba(41, 41, 41, 0.45)',
                borderRadius: 4,
                p: 3,
                backdropFilter: 'blur(2px)',
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Información de Contacto
              </Typography>
              <InfoItem>
                <LocationOnIcon />
                <Typography>José Joaquín Pérez 449</Typography>
              </InfoItem>
              <InfoItem>
                <PhoneIcon />
                <Typography>(45) 273 4200</Typography>
              </InfoItem>
              <InfoItem>
                <EmailIcon />
                <Typography>municipalidad@municholchol.cl</Typography>
              </InfoItem>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
}

export default Hero;