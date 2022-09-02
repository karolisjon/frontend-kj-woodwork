import * as React from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

const NavbarDrawer = ({ onClick, navItems }) => (
  <Box
    onClick={onClick}
    sx={{ textAlign: 'center' }}
  >
    <Typography variant="h6" sx={{ my: 2, fontFamily: 'logoFont' }}>
      KJ Woodwork
    </Typography>
    <Divider />
    <List
      navItems={navItems}
    >
      {navItems.map(({ text, to }) => (
        <ListItem key={to} disablePadding>
          <ListItemButton to={to} sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default NavbarDrawer;
