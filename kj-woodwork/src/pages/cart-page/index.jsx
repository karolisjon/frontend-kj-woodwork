import * as React from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductService from '../../services/product-service';
// import CartContext from '../../contexts/cart-page-context';

const CartPage = () => {
  const { id } = useParams();
  const [productsInCart, setProductsInCart] = React.useState([]);
  // const { cartItems } = React.useContext(CartContext);

  React.useEffect(() => {
    (async () => {
      const fetchedProduct = await ProductService.fetchProductById(id);
      setProductsInCart(fetchedProduct);
    })();
  }, [id]);

  return (
    <Container>
      <pre>
        {JSON.stringify({ productsInCart }, null, 4)}
      </pre>
    </Container>
  );
};

export default CartPage;
