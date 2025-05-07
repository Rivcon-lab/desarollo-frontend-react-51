import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  Modal,
  IconButton,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';

// Importar imágenes
import alcaldeImage from '../assets/images/otros/alcalde.jpg';
import consejoImage from '../assets/images/otros/consejo.jpg';
import organigramaImage from '../assets/images/otros/ORGANIGRAMA.jpg';
import direccionImage from '../assets/images/otros/direcciones.jpg';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(3),
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
}));

const ImageModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(2),
  maxWidth: '90vw',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const ModalImage = styled('img')({
  maxWidth: '100%',
  maxHeight: 'calc(90vh - 100px)',
  objectFit: 'contain',
});

const ordenanzas = [
  {
    title: 'ORDENANZA MUNICIPAL DE DERECHOS MUNICIPALES POR CONCESIONES, PERMISOS, PROPAGANDA, OCUPACIÓN DE BIENES Y OTROS SERVICIOS',
    link: '#'
  },
  {
    title: 'ORDENANZA MUNICIPAL DE GESTIÓN Y PROTECCIÓN AMBIENTAL',
    link: '#'
  },
  {
    title: 'ORDENANZA MUNICIPAL DE PATENTES CIPA',
    link: '#'
  },
  {
    title: 'ORDENANZA MUNICIPAL DE PARTICIPACIÓN CIUDADANA',
    link: '#'
  },
  {
    title: 'ORDENANZA QUE FIJA PATENTES LIMITADAS DE ALCOHOLES',
    link: '#'
  },
];

const reglamentos = [
  {
    title: 'COSOC 2024-2028',
    link: '#'
  },
  {
    title: 'REGLAMENTO INTERNO MUNICIPAL',
    link: '#'
  },
  {
    title: 'REGLAMENTO DE CONCURSOS PÚBLICOS',
    link: '#'
  },
  {
    title: 'MANUAL DE PROCEDIMIENTO DE ADQUISICIONES',
    link: '#'
  },
  {
    title: 'INSTRUCTIVO DE PROCESOS INTERNOS',
    link: '#'
  },
  {
    title: 'PLAN DE DESARROLLO COMUNAL',
    link: '#'
  },
  {
    title: 'REGLAMENTO DE ASIGNACIÓN DE AYUDAS SOCIALES MUNICIPALIDAD DE CHOLCHOL',
    link: '#'
  },
  {
    title: 'REGLAMENTO DE USO Y CIRCULACIÓN DE VEHICULOS MUNICIPALES Y BITÁCORAS',
    link: '#'
  },
  {
    title: 'REGLAMENTO DE CAPACITACIÓN MUNICIPAL',
    link: '#'
  },
  {
    title: 'PLAN COMUNAL PARA LA REDUCCIÓN DEL RIESGO DE DESASTRES 2024-2027',
    link: '#'
  },
];

const concejales = [
  'BERNARDITA VISCARRA ASTUDILLO',
  'DIEGO MILLAO COLLIO',
  'ISMAEL CAYUL COÑUENAO',
  'ALEJANDRA NATALY MELLICO CONTRERAS',
  'ANDRÉS NAVARRETE PAINEMAL',
  'GONZALO TROPA HUIRCALAF',
];

function Municipio() {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

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
        Municipalidad de Cholchol
      </Typography>

      {/* Sección de Alcalde */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardMedia
                component="img"
                height="400"
                image={alcaldeImage}
                alt="Alcalde Álvaro Labraña Opazo"
                sx={{ objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => handleOpenModal(alcaldeImage)}
              />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              ALCALDE
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
              ÁLVARO LABRAÑA OPAZO
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Sección de Concejo Municipal */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              CONCEJO MUNICIPAL
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardMedia
                component="img"
                height="400"
                image={consejoImage}
                alt="Concejo Municipal"
                sx={{ objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => handleOpenModal(consejoImage)}
              />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={8}>
            <List>
              {concejales.map((concejal, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText primary={concejal} />
                  </ListItem>
                  {index < concejales.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Sección de Organigrama y Dirección */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardMedia
                component="img"
                height="400"
                image={organigramaImage}
                alt="Organigrama Municipal"
                sx={{ objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => handleOpenModal(organigramaImage)}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Organigrama Municipal
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardMedia
                component="img"
                height="400"
                image={direccionImage}
                alt="Dirección Municipal"
                sx={{ objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => handleOpenModal(direccionImage)}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Dirección Municipal
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Box>

      {/* Sección de Enlaces de Utilidad */}
      <Box sx={{ mb: 8 }}>
        <StyledTabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <StyledTab label="Ordenanzas" />
          <StyledTab label="Reglamentos" />
          <StyledTab label="Historia" />
        </StyledTabs>

        <Box sx={{ mt: 3 }}>
          {selectedTab === 0 && (
            <Paper sx={{ p: 3 }}>
              <List>
                {ordenanzas.map((ordenanza, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Link
                            href={ordenanza.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              color: 'inherit',
                              textDecoration: 'none',
                              '&:hover': {
                                color: 'primary.main',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            <DescriptionIcon sx={{ fontSize: 20 }} />
                            {ordenanza.title}
                          </Link>
                        }
                      />
                    </ListItem>
                    {index < ordenanzas.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          )}

          {selectedTab === 1 && (
            <Paper sx={{ p: 3 }}>
              <List>
                {reglamentos.map((reglamento, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Link
                            href={reglamento.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              color: 'inherit',
                              textDecoration: 'none',
                              '&:hover': {
                                color: 'primary.main',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            <DescriptionIcon sx={{ fontSize: 20 }} />
                            {reglamento.title}
                          </Link>
                        }
                      />
                    </ListItem>
                    {index < reglamentos.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          )}

          {selectedTab === 2 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="body1" paragraph>
                Chol Chol o Cholchol (Mapudungún: Lugar de Cardos) es un pueblo y comuna de la zona sur de Chile, de la provincia de Cautín en la región de La Araucanía creada por ley 19.944 del 22 de abril de 2004 al segregarse de la comuna de Nueva Imperial.
              </Typography>
              <Typography variant="body1" paragraph>
                Limita al norte con las comunas de Galvarino y Lumaco, al este con la de Temuco, al oeste con la Comuna de Carahue y al Sur con la Comuna de Nueva Imperial.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Siglo XIX
              </Typography>
              <Typography variant="body1" paragraph>
                Durante el proceso de ocupación de la Araucanía, el 4 de Noviembre de 1881 ocurrió una sublevación Mapuche de la zona de Cholchol, Imperial y Toltén. Entre los días 5 y 6, un grupo de alrededor de 400 hombres, atacó el fuerte de Lumaco, el que fue rechazado por una compañía del batallón Ñuble.
              </Typography>
              <Typography variant="body1" paragraph>
                El Coronel Gregorio Urrutia, jefe de las fuerzas de la Frontera, que se encontraba en Santiago, al enterarse del levantamiento indígena, regresó en tren expreso hasta Angol. Al llegar, se dirigió de inmediato a Traiguén, junto a una columna de 400 hombres, cuando llegó al lugar en que estuvo asentada la antigua ciudad de La Imperial. Se reunieron ahí con otros 250 hombres que venían desde Temuco por el camino de Cautín, además de las fuerzas de Cañete, Lebu, Tomé y Talcahuano venidas desde la costa.
              </Typography>
              <Typography variant="body1" paragraph>
                Los Mapuches se movían por los campos apropiándose de animales, saqueando las misiones, incendiando casas y ajusticiando.
              </Typography>
              <Typography variant="body1" paragraph>
                El Coronel Urrutia al llegar a Cholchol el día 10 de Noviembre, dio instrucciones de construir un fuerte en la misma ruca del toqui Ancamilla, cumpliendo así la amenaza que había hecho de antemano al cabecilla indígena. El 22 de aquel mes se iniciaron los trabajos, dando así comienzo al pueblo que se estableció más tarde con el mismo nombre de CholChol.
              </Typography>
              <Typography variant="body1" paragraph>
                En 1896, un grupo de cuatro misioneros anglicanos de la Sociedad Misionera de América del Sur, liderados por el hijo de Allen F. Gardiner, Allen W. Gardiner y por el canadiense Charles Sadleir, llegó a Cholchol con el objetivo de ampliar la Misión Araucanía que había sido iniciada en la localidad de Quepe, Dirigidos por el pastor William Wilson como superintendente de la misión.
              </Typography>
              <Typography variant="body1" paragraph>
                En 1898 fue establecida la primera escuela con internado de la Localidad, lo que permitió la alfabetización de las comunidades Mapuches locales — en una época con altos índices de pobreza extrema y analfabetismo, para luego educarlos en competencias agrícolas e industriales, impartiendo clases en idioma mapuche y español. Asimismo, construyeron la Iglesia Anglicana La Ascensión perteneciente en la actualidad a la Iglesia Anglicana de Chile y luego en 1933, inauguraron el primer Hospital de CholChol.
              </Typography>
            </Paper>
          )}
        </Box>
      </Box>

      {/* Modal para imágenes */}
      <ImageModal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="image-modal"
      >
        <ModalContent>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleCloseModal} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          {selectedImage && (
            <ModalImage
              src={selectedImage}
              alt="Imagen ampliada"
            />
          )}
        </ModalContent>
      </ImageModal>
    </Container>
  );
}

export default Municipio; 