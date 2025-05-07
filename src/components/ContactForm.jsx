import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Alert,
  Paper,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  CircularProgress,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Estilizado del componente Paper con efectos de hover
 * @param {Object} theme - Tema de Material-UI
 */
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

/**
 * Estilizado del componente TextField con efectos de hover
 * @param {Object} theme - Tema de Material-UI
 */
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

/**
 * Componente de formulario de contacto
 * @returns {JSX.Element} Componente ContactForm
 */
function ContactForm() {
  const theme = useTheme();
  
  /**
   * Estado del formulario
   * @type {Object}
   */
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  /**
   * Estado de errores del formulario
   * @type {Object}
   */
  const [errors, setErrors] = useState({});

  /**
   * Estado de éxito del envío
   * @type {boolean}
   */
  const [success, setSuccess] = useState(false);

  /**
   * Estado de carga del formulario
   * @type {boolean}
   */
  const [loading, setLoading] = useState(false);

  /**
   * Estado del snackbar de notificaciones
   * @type {Object}
   */
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  /**
   * Valida un campo específico del formulario
   * @param {string} field - Nombre del campo a validar
   * @param {string} value - Valor del campo
   * @returns {string} Mensaje de error si existe
   */
  const validate = (field, value) => {
    let error = '';
    if (!value) {
      error = 'Este campo es obligatorio';
    } else if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Correo electrónico inválido';
      }
    } else if (field === 'nombre' && value.length < 3) {
      error = 'El nombre debe tener al menos 3 caracteres';
    } else if (field === 'mensaje' && value.length < 10) {
      error = 'El mensaje debe tener al menos 10 caracteres';
    }
    return error;
  };

  /**
   * Maneja el cambio en los campos del formulario
   * @param {Object} e - Evento del input
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  /**
   * Maneja el envío del formulario
   * @param {Object} e - Evento del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {};
    Object.keys(form).forEach((field) => {
      newErrors[field] = validate(field, form[field]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => !err)) {
      try {
        // Simular envío de formulario
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSuccess(true);
        setForm({ nombre: '', email: '', mensaje: '' });
        setSnackbar({
          open: true,
          message: '¡Mensaje enviado correctamente!',
          severity: 'success',
        });
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'Error al enviar el mensaje. Por favor, intente nuevamente.',
          severity: 'error',
        });
      }
    } else {
      setSnackbar({
        open: true,
        message: 'Por favor, corrija los errores en el formulario.',
        severity: 'error',
      });
    }
    setLoading(false);
  };

  /**
   * Maneja el cierre del snackbar
   */
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Contáctanos
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <StyledTextField
              label="Nombre completo"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              error={!!errors.nombre}
              helperText={errors.nombre}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Correo electrónico"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              error={!!errors.mensaje}
              helperText={errors.mensaje}
              fullWidth
              required
              multiline
              rows={4}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon color="primary" sx={{ mt: 1 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={loading}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                position: 'relative',
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <>
                  Enviar mensaje
                  <SendIcon sx={{ ml: 1 }} />
                </>
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </StyledPaper>
  );
}

export default ContactForm;