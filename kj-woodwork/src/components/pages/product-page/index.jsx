import * as React from 'react';
import { Container } from '@mui/system';
import ProductContext from '../../../contexts/cart-page-context';
import { Typography } from '@mui/material';

const ProductInformation = () => {
  const { product } = React.useContext(ProductContext);

  console.log(product);

  return (
    <Container>
      <Typography variant='h4' component='h4'>Product information</Typography>
      <pre>
        {JSON.stringify({ product }, null, 4)}
      </pre>
    </Container>
  )
}

export default ProductInformation;
