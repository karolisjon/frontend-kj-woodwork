/* eslint-disable no-unsafe-optional-chaining */
import * as React from 'react';
import { Box, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductService from '../../services/product-service';
import CartContext from '../../contexts/cart-page-context';
import Amount from './components/product-amount';
import Details from './components/product-details';
import ProductImage from './components/product-image';
import ProductAbout from './components/product-about';
import ProductNavigation from './components/product-navigation';

const ProductInformation = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [amount, setAmount] = React.useState(1);
  const { addToCart } = React.useContext(CartContext);

  React.useEffect(() => {
    (async () => {
      const fetchedProduct = await ProductService.fetchProductById(id);
      setProduct(fetchedProduct);
    })();
  }, [id]);

  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', my: 6 }}>
        <Box sx={{ flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <ProductImage product={product} />
            <Box sx={{ px: { md: 2 }, py: { xs: 2, md: 0 } }}>
              <Details product={product} amount={amount} />
            </Box>
          </Box>
          <Box>
            <ProductAbout product={product} />
            <Amount amount={amount} setAmount={setAmount} product={product} />
            <ProductNavigation id={id} amount={amount} addToCart={addToCart} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductInformation;
