import * as React from 'react';
import { Container } from '@mui/material';
import ProductContext from '../../contexts/product-page-context';

const CartPage = () => {
  const { cartItems } = React.useContext(ProductContext);

  return (
    <Container>
      <pre>
        {JSON.stringify({ cartItems }, null, 4)}
      </pre>
    </Container>
  );
};

export default CartPage;
