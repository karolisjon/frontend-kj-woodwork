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
      <Box sx={{ display: 'flex', flexDirection: 'row', my: 2 }}>
        <Box sx={{ width: '70%', backgroundColor: 'red' }}>
          <Typography>PRODUCT DETAILS</Typography>
        </Box>
        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%',
        }}
        >
          <Box sx={{ backgroundColor: 'yellow' }}>
            <Typography>AMOUNT</Typography>
          </Box>
          <Box sx={{ backgroundColor: 'green' }}>
            <Typography>PRICE</Typography>
          </Box>
          <Box sx={{ backgroundColor: 'blue' }}>
            <Typography>TOTAL</Typography>
          </Box>
        </Box>
      </Box>
      <Divider />

      <Box sx={{ display: 'flex', flexDirection: 'row', my: 2 }}>
        <Box sx={{
          display: 'flex', flexDirection: 'row', width: '70%',
        }}
        >
          <img src={productsInCart.img} alt="" height="300px" width="300px" />
          <Box sx={{ ml: 2 }}>
            <Typography>{productsInCart?.title}</Typography>
            <Typography>{productsInCart?.category.title}</Typography>
            <Typography>{productsInCart?.woodType.title}</Typography>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%',
        }}
        >
          <Box>
            <Typography>AMOUNT</Typography>
          </Box>
          <Box>
            <Typography>
              {productsInCart.price}
              Є
            </Typography>
          </Box>
          <Typography>
            {productsInCart.price}
            Є
          </Typography>
        </Box>
      </Box>

      <Divider />

      <pre>
        {JSON.stringify(productsInCart, null, 4)}
      </pre>
    </Container>
  );
};

export default CartPage;
