import * as React from 'react';
import { Container } from '@mui/system';
import ProductContext from '../../../contexts/cart-page-context';
//import CartPageContext from '../../../contexts/cart-page-context';

const CartPage = () => {
  const { cartItems } = React.useContext(ProductContext);
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
