import React, { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = (field, value) => {
    let error = '';
    if (!value) error = 'Este campo es obligatorio';
    if (field === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = 'Correo inválido';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      newErrors[field] = validate(field, form[field]);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).every((err) => !err)) {
      setSuccess(true);
      setForm({ nombre: '', email: '', mensaje: '' });
    } else {
      setSuccess(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ my: 4 }}>
      <TextField
        label="Nombre"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        error={!!errors.nombre}
        helperText={errors.nombre}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Correo electrónico"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Mensaje"
        name="mensaje"
        value={form.mensaje}
        onChange={handleChange}
        error={!!errors.mensaje}
        helperText={errors.mensaje}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Enviar
      </Button>
      {success && <Alert severity="success" sx={{ mt: 2 }}>¡Mensaje enviado correctamente!</Alert>}
    </Box>
  );
}

export default ContactForm;