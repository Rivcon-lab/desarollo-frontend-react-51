import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  CardActions,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
}));

function NewsCard({ 
  title = "Noticia Destacada",
  content = "Aquí va el contenido de la noticia más reciente o importante.",
  imageUrl = "https://source.unsplash.com/random/800x600/?city",
  category = "Noticias",
  date = "15 de Marzo, 2024",
  readTime = "5 min"
}) {
  const theme = useTheme();

  return (
    <StyledCard>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={title}
          sx={{
            objectFit: 'cover',
          }}
        />
        <CategoryChip label={category} />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 600,
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {content}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'text.secondary',
            fontSize: '0.875rem',
          }}
        >
          <AccessTimeIcon fontSize="small" />
          <Typography variant="body2">{readTime} de lectura</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2">{date}</Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box>
          <IconButton size="small" aria-label="compartir">
            <ShareIcon />
          </IconButton>
          <IconButton size="small" aria-label="guardar">
            <BookmarkBorderIcon />
          </IconButton>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Leer más
        </Typography>
      </CardActions>
    </StyledCard>
  );
}

export default NewsCard;