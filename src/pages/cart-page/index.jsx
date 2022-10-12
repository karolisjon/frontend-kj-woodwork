import * as React from 'react';
import {
  Box,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
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
    <Container maxWidth="md">
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

      <Box sx={{
        display: 'flex', flexDirection: 'row', alignItems: 'baseline', my: 4,
      }}
      >
        <Typography variant="h6" sx={{ fontFamily: theme.typography.main }}>TOTAL: </Typography>
        <Typography variant="h5" sx={{ fontFamily: theme.typography.main, color: theme.palette.error.main }}>
          {productsInCart.price}
          {' Є'}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <CustomButton
          onClick={() => navigate('/product-catalog')}
        >
          <ArrowBackIcon fontSize="small" />
          CATALOG
        </CustomButton>
        <CustomButton
          onClick={() => navigate('/product-catalog')}
        >
          <CheckIcon />
          CHECKOUT
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
