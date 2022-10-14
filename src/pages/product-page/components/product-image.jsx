import { CardMedia } from '@mui/material';
import * as React from 'react';

const ProductImage = ({ product }) => (
  <CardMedia
    component="img"
    src={product?.img}
    alt=""
    sx={{
      width: { xs: '100%', md: '70%' },
      height: { xs: '100%', sm: '100%' },
      objectFit: 'cover',
      alignSelf: { xs: 'center' },
    }}
  />
);

export default ProductImage;
