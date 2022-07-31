import { Container } from '@mui/system';
import * as React from 'react';
import CartContext from '../../../contexts/cart-page-context';
//import CartPageContext from '../../../contexts/cart-page-context';

const CartPage = () => {
  const { cartItems } = React.useContext(CartContext);
  //const cartPageContext = React.useContext(CartPageContext);

  console.log(cartItems);

  return (
    <Container>
    <pre>
      {JSON.stringify({cartItems}, null, 4)}
    </pre>
    </Container>
  )
}

export default CartPage;
