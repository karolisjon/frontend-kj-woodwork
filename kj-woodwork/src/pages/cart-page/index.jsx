import * as React from 'react';
import { Container } from '@mui/material';
import CartContext from '../../contexts/cart-page-context';

const CartPage = () => {
  const { cartItems } = React.useContext(CartContext);

  return (
    <Container>
      <pre>
        {JSON.stringify({ cartItems }, null, 4)}
      </pre>
    </Container>
  );
};

export default CartPage;
