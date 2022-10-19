import * as React from 'react';
import { CardMedia } from '@mui/material';

const CartProductCardImage = ({ img }) => (
  <CardMedia
    component="img"
    src={img}
    alt="product"
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
);

export default CartProductCardImage;
