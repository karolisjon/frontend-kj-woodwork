import * as React from 'react';
import { Container } from '@mui/system';
import ProductContext from '../../../contexts/product-page-context';
//import ProductContext from '../../../contexts/product-page-context';

const CartPage = () => {
  const { cartItems } = React.useContext(ProductContext);
  //const productPageContext = React.useContext(ProductContext);

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
