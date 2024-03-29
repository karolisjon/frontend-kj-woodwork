import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Badge,
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';
import Link from './components/link';
import theme from '../../styles/theme';
import NavbarDrawer from './components/navbar-drawer';
import NavbarLogo from './components/navbar-logo';
import CartContext from '../../contexts/cart-page-context';

const drawerWidth = 260;

const navitems = [
  { text: 'Home', to: '/' },
  { text: 'About us', to: '/about-us' },
  { text: 'Product catalog', to: '/product-catalog' },
  { text: 'Log in', to: '/auth/login' },
  { text: 'Register', to: '/auth/register' },
];

const Navbar = () => {
  const { cartProducts } = React.useContext(CartContext);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [badgeContent, setBadgeContent] = React.useState(0);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const amount = localStorage.getItem('cartProductsAmount');

  React.useEffect(() => {
    if (amount !== null || amount !== undefined) setBadgeContent(amount);
  }, [cartProducts, amount]);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{
          justifyContent: { xs: 'space-between' },
        }}
        >
          <Button
            color="inherit"
            size="large"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuOpenIcon />
          </Button>
          <NavbarLogo
            onClick={() => navigate('/')}
            label="KJ Woodwork"
          />
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            alignSelf: 'stretch',
          }}
          >
            {navitems.map(({ text, to }) => (
              <Link key={to} to={to}>
                {text}
              </Link>
            ))}
          </Box>
          <IconButton
            fontSize="medium"
            sx={{ color: theme.palette.primary.white }}
            onClick={() => navigate('/cart')}
          >
            <Badge
              color="error"
              badgeContent={badgeContent}
              invisible={cartProducts.length === 0}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ShoppingBagIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <NavbarDrawer
          onClick={handleDrawerToggle}
          navitems={navitems}
          open={drawerOpen}
          onClose={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
