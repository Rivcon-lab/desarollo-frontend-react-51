import React, { useState } from 'react';
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
  CircularProgress,
  Modal,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Estilizado del componente Card con efectos de hover
 * @param {Object} theme - Tema de Material-UI
 */
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

/**
 * Estilizado del chip de categoría
 * @param {Object} theme - Tema de Material-UI
 */
const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
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

/**
 * Componente de tarjeta de noticia
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título de la noticia
 * @param {string} props.content - Contenido de la noticia
 * @param {string} props.imageUrl - URL de la imagen de la noticia
 * @param {string} props.category - Categoría de la noticia
 * @param {string} props.date - Fecha de publicación
 * @param {string} props.readTime - Tiempo estimado de lectura
 * @param {string[]} props.additionalImages - URLs de las imágenes adicionales
 * @returns {JSX.Element} Componente NewsCard
 */
function NewsCard({ 
  title = "Noticia Destacada",
  content = "Aquí va el contenido de la noticia más reciente o importante.",
  imageUrl = "https://source.unsplash.com/random/800x600/?city",
  category = "Noticias",
  date = "15 de Marzo, 2024",
  readTime = "5 min",
  additionalImages = []
}) {
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const allImages = [imageUrl, ...additionalImages];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  /**
   * Maneja el evento de compartir la noticia
   */
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: content,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback para navegadores que no soportan la API Web Share
      navigator.clipboard.writeText(window.location.href);
      // Aquí se podría agregar un snackbar o toast para notificar al usuario
    }
  };

  /**
   * Maneja el evento de guardar la noticia
   */
  const handleBookmark = () => {
    // Implementación del guardado de noticias
    console.log('Noticia guardada:', title);
  };

  return (
    <>
      <StyledCard>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="200"
            image={allImages[currentImageIndex]}
            alt={title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onClick={handleOpenModal}
            sx={{
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              cursor: 'pointer',
            }}
          />
          {!imageLoaded && (
            <Box
              sx={{
                height: 200,
                bgcolor: 'grey.200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress size={40} />
            </Box>
          )}
          <CategoryChip label={category} />
          {allImages.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                display: 'flex',
                gap: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                sx={{
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                sx={{
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
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
            <IconButton 
              size="small" 
              aria-label="compartir"
              onClick={handleShare}
            >
              <ShareIcon />
            </IconButton>
            <IconButton 
              size="small" 
              aria-label="guardar"
              onClick={handleBookmark}
            >
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
          <ModalImage
            src={allImages[currentImageIndex]}
            alt={title}
          />
          {allImages.length > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                startIcon={<ArrowBackIosNewIcon />}
                onClick={handlePrevImage}
                variant="contained"
              >
                Anterior
              </Button>
              <Button
                endIcon={<ArrowForwardIosIcon />}
                onClick={handleNextImage}
                variant="contained"
              >
                Siguiente
              </Button>
            </Box>
          )}
        </ModalContent>
      </ImageModal>
    </>
  );
}

export default NewsCard;