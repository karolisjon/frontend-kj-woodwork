import * as React from 'react';
import {
  Box,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductService from '../../services/product-service';
import theme from '../../styles/theme';
import CustomButton from '../../components/custom-button';
import CartProductDetails from './components/cart-product-details';

const CartPage = () => {
  const { id } = useParams();
  const [productsInCart, setProductsInCart] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const fetchedProduct = await ProductService.fetchProductById(id);
      setProductsInCart(fetchedProduct);
    })();
  }, [id]);

  return (
    <Container>
      <Typography
        sx={{
          fontFamily: theme.typography.logoFont,
          fontWeight: 400,
          fontSize: {
            xs: 25, sm: 30, md: 40, lg: 50,
          },
          my: 4,
        }}
      >
        My shopping cart
      </Typography>
      <Divider />
      <CartProductDetails productsInCart={productsInCart} />
      <Divider />
      <CartProductDetails productsInCart={productsInCart} />
      <Divider />
      <CartProductDetails productsInCart={productsInCart} />
      <Divider />
      <Box sx={{ width: '14%', mt: 6 }}>
        <CustomButton
          onClick={() => navigate('/product-catalog')}
        >
          <ArrowBackIcon fontSize="small" />
          CATALOG
        </CustomButton>
      </Box>

      <pre>
        {JSON.stringify({
          title: productsInCart.title,
          // description: productsInCart.category.title,
          // woodType: productsInCart.woodType.title,
          price: productsInCart.price,
        }, null, 4)}
      </pre>
    </Container>
  );
};

export default CartPage;
