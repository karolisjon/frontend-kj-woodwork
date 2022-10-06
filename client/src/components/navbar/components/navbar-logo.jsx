import * as React from 'react';
import { Typography } from '@mui/material';

const NavbarLogo = ({ onClick, label }) => (
  <Typography
    variant="h5"
    component="div"
    onClick={onClick}
    sx={{
      flexGrow: 1,
      fontFamily: 'logoFont',
      display: { xs: 'none', sm: 'block' },
      transition: '0.3s ease-in-out',
      '&:hover': {
        cursor: 'pointer',
      },
    }}
  >
    {label}
  </Typography>
);

export default NavbarLogo;
