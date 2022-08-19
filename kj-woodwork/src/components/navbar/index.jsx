import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Link from './components';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import theme from '../../styles/theme';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 260;

const navItems = [
  { text: 'Home', to: '/' },
  { text: 'About us', to: '/about-us' },
  { text: 'Product catalog', to: '/product-catalog' },
  { text: 'Log in', to: '/login' },
  { text: 'Register', to: '/register' },
];

const Navbar = (props) => {
  const { window } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'logoFont' }}>
        KJ Woodwork
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ text, to }) => (
          <ListItem key={to} disablePadding>
            <ListItemButton to={to} sx={{ textAlign: 'center' }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{
          justifyContent: { xs: 'space-between' },
        }}>
          <Button
            color="inherit"
            size='large'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuOpenIcon />
          </Button>
          <Typography
            variant="h5"
            component="div"
            onClick={() => navigate('/')}
            sx={{
              flexGrow: 1,
              fontFamily: 'logoFont',
              display: { xs: 'none', sm: 'block' },
              transition: '0.3s ease-in-out',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
          >
            KJ Woodwork
          </Typography>
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            alignSelf: 'stretch',
          }}>
            {navItems.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
          </Box>
          <IconButton
            fontSize='medium'
            sx={{ color: theme.palette.primary.white }}
            onClick={() => navigate('/cart')}
            >
            <ShoppingBagIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
