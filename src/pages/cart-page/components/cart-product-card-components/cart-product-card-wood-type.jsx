import * as React from 'react';
import { Typography } from '@mui/material';
import theme from '../../../../styles/theme';

const CartProductCartWoodType = ({ woodType }) => (
  <Typography
    variant="body2"
    sx={{ fontFamily: theme.typography.main, my: 1 }}
  >
    Type of wood:
    {' '}
    {woodType}
  </Typography>
);

export default CartProductCartWoodType;
