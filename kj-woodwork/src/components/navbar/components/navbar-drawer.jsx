import * as React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import theme from '../../../styles/theme';

const NavbarDrawer = ({
  onClick,
  navitems,
  open,
  onClose,
  drawerWidth,
}) => (
  <Drawer
    variant="temporary"
    open={open}
    onClose={onClose}
    sx={{
      display: { xs: 'block' },
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.white,
      },

    }}
  >
    <Box
      onClick={onClick}
      sx={{ textAlign: 'center' }}
    >
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'logoFont' }}>
        KJ Woodwork
      </Typography>
      <Divider sx={{ backgroundColor: theme.palette.primary.white }} />
      <List
        navitems={navitems}
      >
        {navitems.map(({ text, to }) => (
          <ListItem key={to} disablePadding>
            <ListItemButton
              to={to}
              sx={{
                textAlign: 'center',
                textTransform: 'uppercase',
                '&: hover': {
                  borderBottom: '1px solid white',
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>

);

export default NavbarDrawer;
