import * as React from 'react';
import { Typography } from '@mui/material';
import theme from '../../../../styles/theme';

const CartProductCardCategory = ({ category }) => (
  <Typography
    variant="body2"
    sx={{ fontFamily: theme.typography.main, my: 1 }}
  >
    Category:
    {' '}
    {category}
  </Typography>
);

export default CartProductCardCategory;
