import * as React from 'react';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import ProductService from '../../services/product-service';
import theme from '../../styles/theme';
import CustomButton from '../../components/custom-button';

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
      <Box sx={{ display: 'flex', flexDirection: 'row', my: 2 }}>
        <Box sx={{ width: '70%' }}>
          <Typography sx={{ fontFamily: theme.typography.main }}>PRODUCT DETAILS</Typography>
        </Box>
        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%',
        }}
        >
          <Box>
            <Typography sx={{ fontFamily: theme.typography.main }}>AMOUNT</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontFamily: theme.typography.main }}>PRICE</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontFamily: theme.typography.main }}>TOTAL</Typography>
          </Box>
        </Box>
      </Box>
      <Divider />

      <Box sx={{ display: 'flex', flexDirection: 'row', my: 2 }}>
        <Box sx={{
          display: 'flex', flexDirection: 'row', width: '70%',
        }}
        >
          <img src={productsInCart.img} alt="" height="260px" width="260px" />
          <Box sx={{ ml: 2 }}>
            <Typography
              variant="h6"
              component="p"
              sx={{ fontFamily: theme.typography.main, mb: 1 }}
            >
              {productsInCart?.title}
            </Typography>
            {/* <Typography
            variant="body2"
            component="p"
            sx={{  fontFamily: theme.typography.main, my: 1 }}>
              Category:
              {' '}
              {productsInCart?.category.title}
            </Typography>
            <Typography
            variant="body2"
            component="p"
            sx={{  fontFamily: theme.typography.main, my: 1 }}>
              Type of wood:
              {' '}
              {productsInCart?.woodType.title}
            </Typography> */}
          </Box>
        </Box>

        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%',
        }}
        >
          <Box>
            <Typography sx={{ fontFamily: theme.typography.main }}>AMOUNT</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontFamily: theme.typography.main }}>
              {productsInCart.price}
              {' Є'}
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end',
          }}
          >
            <Typography sx={{ fontFamily: theme.typography.main }}>TOTAL</Typography>
            <IconButton
              sx={{ color: theme.palette.primary.main, '&:hover': { background: 'none' } }}
              onClick={() => console.log('will remove item from the cart in the future')}
            >
              <ClearIcon />
            </IconButton>

          </Box>
        </Box>
      </Box>

      <Divider />

      <Box sx={{ width: '20%', mt: 6 }}>
        <CustomButton
          onClick={() => navigate('/product-catalog')}
        >
          <ArrowBackIcon fontSize="small" />
          Back to catalog
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
