import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

function Hero() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        mb: 4,
        background: 'linear-gradient(90deg, #1976d2 60%, #388e3c 100%)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Bienvenido a la Municipalidad de Cholchol
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Rediseño de la página principal para una mejor experiencia ciudadana.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Conoce más
      </Button>
    </Paper>
  );
}

export default Hero;