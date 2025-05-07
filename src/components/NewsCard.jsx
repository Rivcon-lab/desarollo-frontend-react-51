import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function NewsCard() {
  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Typography variant="h5">Noticia Destacada</Typography>
        <Typography variant="body2" color="text.secondary">
          Aquí va el contenido de la noticia más reciente o importante.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NewsCard;