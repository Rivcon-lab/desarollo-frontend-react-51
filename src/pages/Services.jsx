import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const services = [
  {
    id: 1,
    title: 'Ofertas Laborales',
    description: 'Encuentra oportunidades de trabajo y convocatorias laborales en la Municipalidad.',
    icon: <WorkIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
    link: '#',
  },
  {
    id: 2,
    title: 'Educación',
    description: 'Programas educativos y apoyo escolar para la comunidad.',
    icon: <SchoolIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
    link: '#',
  },
  {
    id: 3,
    title: 'Salud',
    description: 'Servicios de salud y programas de bienestar comunitario.',
    icon: <HealthAndSafetyIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
    link: '#',
  },
  {
    id: 4,
    title: 'Obras Públicas',
    description: 'Información sobre proyectos y mantenimiento de infraestructura.',
    icon: <ConstructionIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
    link: '#',
  },
  {
    id: 5,
    title: 'Biblioteca Municipal',
    description: 'Acceso a recursos educativos y culturales.',
    icon: <LocalLibraryIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
    link: '#',
  },
  {
    id: 6,
    title: 'Deportes',
    description: 'Programas deportivos y actividades recreativas.',
    icon: <SportsSoccerIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
    link: '#',
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <Box sx={{ mb: 6 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar servicios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 1,
            },
          }}
        />
      </Box>

      <Grid container spacing={4}>
        {filteredServices.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
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
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services; 