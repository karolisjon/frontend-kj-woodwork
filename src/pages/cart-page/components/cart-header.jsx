import { Typography } from '@mui/material';
import * as React from 'react';
import theme from '../../../styles/theme';

const CartHeader = () => (
  <Typography
    sx={{
      fontFamily: theme.typography.logoFont,
      fontWeight: 400,
      fontSize: {
        xs: 25, sm: 30, md: 40, lg: 50,
      },
      my: 4,
    }}
  >
    My shopping cart
  </Typography>
);

export default CartHeader;
