import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../assets/images/logos/LOGOCOLOR.png';

const pages = [
  { title: 'Inicio', path: '/' },
  { title: 'Noticias', path: '/noticias' },
  { title: 'Municipio', path: '/municipio' },
  { title: 'Servicios', path: '/servicios' },
  { title: 'Contacto', path: '/contacto' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="sticky"
      sx={{
        backgroundColor: '#f5f5f5', // Fondo claro
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo y texto para pantallas grandes */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              color: '#1a237e', // Color azul oscuro para el texto
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Box
              component="img"
              src={logoImage}
              alt="Logo Municipalidad de Cholchol"
              sx={{
                height: 90,
                mr: 2,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
              }}
            >
              MUNICIPALIDAD DE CHOLCHOL
            </Typography>
          </Box>

          {/* Menú hamburguesa para móvil */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu de navegación"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem
                onClick={handleCloseNavMenu}
                component="a"
                href="#"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                }}
              >
                <Typography textAlign="center">Webmail</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo para móvil */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Box
              component="img"
              src={logoImage}
              alt="Logo Municipalidad de Cholchol"
              sx={{
                height: 90,
                mr: isSmallMobile ? 0 : 2,
              }}
            />
            {!isSmallMobile && (
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                }}
              >
                MUNICIPALIDAD DE CHOLCHOL
              </Typography>
            )}
          </Box>

          {/* Menú para pantallas grandes */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#1a237e', // Color azul oscuro para los botones
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(26, 35, 126, 0.1)', // Hover en tono azul claro
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
            <Button
              component="a"
              href="#"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: theme.palette.primary.main,
                display: 'block',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(26, 35, 126, 0.1)',
                },
              }}
            >
              Webmail
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;