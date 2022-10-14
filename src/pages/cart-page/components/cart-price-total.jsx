import * as React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../../../styles/theme';
import CartContext from '../../../contexts/cart-page-context';

const CartPriceTotal = () => {
  const { cartProducts } = React.useContext(CartContext);

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'row', alignItems: 'baseline', my: 4,
    }}
    >
      <Typography variant="h6" sx={{ fontFamily: theme.typography.main }}>TOTAL: </Typography>
      <Typography
        variant="h5"
        sx={{ fontFamily: theme.typography.main, color: theme.palette.error.main }}
      >
        {cartProducts.price}
        {' Є'}
      </Typography>
    </Box>
  );
};

export default CartPriceTotal;
