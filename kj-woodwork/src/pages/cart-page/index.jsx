import * as React from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductService from '../../services/product-service';

const CartPage = () => {
  const [productInCart, setProductInCart] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      const fetchedProduct = await ProductService.fetchProductById(id);
      setProductInCart(fetchedProduct);
    })();
  }, [id]);

  return (
    <Container>
      <pre>
        {JSON.stringify({ productInCart }, null, 4)}
      </pre>
    </Container>
  );
};

export default CartPage;
