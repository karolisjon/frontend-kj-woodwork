import * as React from 'react';
import {
  Box,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductService from '../../services/product-service';
import theme from '../../styles/theme';

const CartPage = () => {
  const { id } = useParams();
  const [productsInCart, setProductsInCart] = React.useState([]);

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

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>

        <Box sx={{ flexGrow: 1 }}>
          <Typography>PRODUCT DETAILS</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>AMOUNT</Typography>
          <Typography>PRICE</Typography>
          <Typography>TOTAL</Typography>
        </Box>
      </Box>

      <pre>
        {JSON.stringify(productsInCart, null, 4)}
      </pre>
    </Container>
  );
};

export default CartPage;
