import * as React from 'react';
import { Typography } from '@mui/material';
import theme from '../../../../styles/theme';

const CartProductCardPrice = ({ price }) => (
  <>
    <Typography sx={{ fontFamily: theme.typography.main }}>
      PRICE:
    </Typography>
    <Typography
      variant="h6"
      sx={{
        fontFamily: theme.typography.main,
        color: theme.palette.error.main,
      }}
    >
      {price}
      {' Є'}
    </Typography>
  </>
);

export default CartProductCardPrice;
