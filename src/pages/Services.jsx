import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const services = [
  {
    id: 1,
    title: 'Trámites Municipales',
    description: 'Realiza tus trámites municipales de manera rápida y eficiente.',
    icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
    image: 'https://source.unsplash.com/random/800x600/?office',
  },
  {
    id: 2,
    title: 'Educación',
    description: 'Programas educativos y apoyo escolar para la comunidad.',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    image: 'https://source.unsplash.com/random/800x600/?school',
  },
  {
    id: 3,
    title: 'Salud',
    description: 'Servicios de salud y programas de bienestar comunitario.',
    icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
    image: 'https://source.unsplash.com/random/800x600/?health',
  },
  {
    id: 4,
    title: 'Obras Públicas',
    description: 'Información sobre proyectos y mantenimiento de infraestructura.',
    icon: <ConstructionIcon sx={{ fontSize: 40 }} />,
    image: 'https://source.unsplash.com/random/800x600/?construction',
  },
  {
    id: 5,
    title: 'Biblioteca Municipal',
    description: 'Acceso a recursos educativos y culturales.',
    icon: <LocalLibraryIcon sx={{ fontSize: 40 }} />,
    image: 'https://source.unsplash.com/random/800x600/?library',
  },
  {
    id: 6,
    title: 'Deportes',
    description: 'Programas deportivos y actividades recreativas.',
    icon: <SportsSoccerIcon sx={{ fontSize: 40 }} />,
    image: 'https://source.unsplash.com/random/800x600/?sports',
  },
];

function Services() {
  const theme = useTheme();

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
        Servicios Municipales
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          mb: 8,
          textAlign: 'center',
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        Descubre todos los servicios que ofrecemos para mejorar la calidad de vida de nuestra comunidad.
      </Typography>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <ServiceCard>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box
                  sx={{
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: 600 }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    mt: 'auto',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    },
                  }}
                >
                  Más información
                </Button>
              </CardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services; 