import * as React from 'react';
import { Container } from '@mui/system';
import CartContext from '../../../contexts/cart-page-context';

const Product = () => {
  const { cartItems } = React.useContext(CartContext);

  console.log(cartItems);

  return (
    <Container>
    <pre>
      {JSON.stringify({cartItems}, null, 4)}
    </pre>
    </Container>
  )
}

export default Product;
