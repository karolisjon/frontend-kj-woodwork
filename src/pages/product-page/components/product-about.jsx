import * as React from 'react';
import { Divider, Typography } from '@mui/material';
import theme from '../../../styles/theme';

const ProductAbout = ({ product }) => (
  <>
    <Typography variant="h5" sx={{ mt: 4, fontFamily: theme.typography.main }}>
      About the product:
    </Typography>

    <Divider sx={{ my: 2 }} />

    <Typography component="p" sx={{ my: 2, fontFamily: theme.typography.main }}>
      {product?.description}
    </Typography>

    <Divider sx={{ mb: 4 }} />
  </>
);

export default ProductAbout;
