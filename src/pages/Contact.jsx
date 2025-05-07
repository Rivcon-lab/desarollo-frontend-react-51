import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactForm from '../components/ContactForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactInfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  '& svg': {
    fontSize: '2rem',
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '400px',
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  marginTop: theme.spacing(4),
}));

function Contact() {
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
        Contacto
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
        Estamos aquí para ayudarte. Contáctanos para cualquier consulta o sugerencia.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <ContactInfoCard elevation={3}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
              Información de Contacto
            </Typography>

            <InfoItem>
              <LocationOnIcon />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Dirección
                </Typography>
                <Typography variant="body2">
                  Av. Principal 123, Cholchol
                </Typography>
              </Box>
            </InfoItem>

            <InfoItem>
              <PhoneIcon />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Teléfono
                </Typography>
                <Typography variant="body2">
                  +56 9 1234 5678
                </Typography>
              </Box>
            </InfoItem>

            <InfoItem>
              <EmailIcon />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Correo Electrónico
                </Typography>
                <Typography variant="body2">
                  contacto@cholchol.cl
                </Typography>
              </Box>
            </InfoItem>

            <InfoItem>
              <AccessTimeIcon />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Horario de Atención
                </Typography>
                <Typography variant="body2">
                  Lunes a Viernes: 8:30 - 17:30
                </Typography>
              </Box>
            </InfoItem>
          </ContactInfoCard>
        </Grid>

        <Grid item xs={12} md={7}>
          <ContactForm />
        </Grid>
      </Grid>

      <MapContainer>
        {/* Aquí puedes integrar un mapa de Google Maps o similar */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1234567890123!2d-72.12345678901234!3d-38.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzI0LjUiUyA3MsKwMDcnMjQuNSJX!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
    </Container>
  );
}

export default Contact; 