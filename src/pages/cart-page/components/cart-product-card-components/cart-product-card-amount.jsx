import * as React from 'react';
import { Typography } from '@mui/material';
import theme from '../../../../styles/theme';

const CartProductCardAmount = ({ amount }) => (
  <>
    <Typography sx={{ fontFamily: theme.typography.main }}>AMOUNT: </Typography>
    <Typography variant="h6" sx={{ fontFamily: theme.typography.main }}>{amount}</Typography>
  </>
);

export default CartProductCardAmount;
