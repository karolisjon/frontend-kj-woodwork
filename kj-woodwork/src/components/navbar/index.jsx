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
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Link from './components';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import theme from '../../styles/theme';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
  { text: 'Home', to: '/' },
  { text: 'Meet our team', to: '/meet-our-team' },
  { text: 'Products', to: '/products' },
];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        <Toolbar>
          <IconButton
            color="inherit"
            size='large'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuOpenIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            KJ Woodwork
          </Typography>
          <Box sx={{
            display: { xs: 'none', sm: 'flex' },
            alignSelf: 'stretch',
          }}>
            {navItems.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
          </Box>
          <IconButton>
            <ShoppingBagIcon 
            fontSize='medium' 
            onClick={() => navigate('/cart')}
            sx={{ color: theme.palette.primary.white }}>
            </ShoppingBagIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
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

// Navbar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Navbar;
