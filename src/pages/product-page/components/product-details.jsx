/* eslint-disable no-unsafe-optional-chaining */
import { Typography } from '@mui/material';
import React from 'react';
import theme from '../../../styles/theme';

const Details = ({ product }) => (
  <>
    <Typography
      variant="h4"
      sx={{ fontFamily: theme.typography.main }}
    >
      {product?.title}

    </Typography>
    <Typography
      sx={{ my: 1, fontFamily: theme.typography.main }}
    >
      Category:
      {' '}
      {product?.category.title}
    </Typography>
    <Typography sx={{ my: 1, fontFamily: theme.typography.main }}>
      Type of wood:
      {' '}
      {product?.woodType.title}
    </Typography>
  </>
);

export default Details;
