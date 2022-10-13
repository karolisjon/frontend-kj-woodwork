import * as React from 'react';
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ProductService from '../../services/product-service';
import theme from '../../styles/theme';
import CustomButton from '../../components/custom-button';
// import CartProductDetails from './components/cart-product-details';
import CartContext from '../../contexts/cart-page-context';

const CartPage = () => {
  const { id } = useParams();
  const { cartProducts: cartProductsData } = React.useContext(CartContext);
  const [cartProducts, setCartProducts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const productId = localStorage.getItem('productId');
      if (productId) {
        const fetchedProduct = await ProductService.fetchProductById(productId);
        setCartProducts(fetchedProduct);
        console.log('fetchedProduct', fetchedProduct);
        console.log('id', productId);
      }
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
      {/* <CartProductDetails cartProducts={cartProductsData} /> */}

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'row', sm: 'row' },
        justifyContent: 'space-between',
        textAlign: { xs: 'right' },
        my: 2,
      }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
        >
          <CardMedia
            component="img"
            src={cartProducts.img}
            alt=""
            sx={{
              width: { xs: '70%', sm: '45%', md: '35%' },
              objectFit: 'cover',
            }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: theme.typography.main,
                mb: 1,
                textAlign: 'left',
                fontSize: { xs: 14, sm: 18, md: 22 },
              }}
            >
              {cartProducts?.title}
            </Typography>
            {/* <Typography
              variant="body2"
              component="p"
              sx={{ fontFamily: theme.typography.main, my: 1 }}
            >
              Category:
              {' '}
              {cartProducts?.category.title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontFamily: theme.typography.main, my: 1 }}
            >
              Type of wood:
              {' '}
              {cartProducts?.woodType.title}
            </Typography> */}
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: { md: '30%' },
        }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 3 },
            textAlign: { sm: 'right' },
          }}
          >
            <Box>
              <Typography sx={{ fontFamily: theme.typography.main }}>AMOUNT: </Typography>
              <Typography variant="h6" sx={{ fontFamily: theme.typography.main }}>{cartProductsData.amount}</Typography>
            </Box>
            <Box>
              <Typography sx={{
                fontFamily: theme.typography.main,

              }}
              >
                PRICE:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: theme.typography.main,
                  color: theme.palette.error.main,
                }}
              >
                {cartProducts.price}
                {' Є'}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="text"
              sx={{ '&:hover': { background: 'none' } }}
              onClick={() => console.log('will remove item from the cart in the future')}
            >
              <ClearIcon />
              REMOVE
            </Button>
          </Box>

        </Box>

      </Box>

      <Divider />

      <Box sx={{
        display: 'flex', flexDirection: 'row', alignItems: 'baseline', my: 4,
      }}
      >
        <Typography variant="h6" sx={{ fontFamily: theme.typography.main }}>TOTAL: </Typography>
        <Typography variant="h5" sx={{ fontFamily: theme.typography.main, color: theme.palette.error.main }}>
          {cartProducts.price}
          {' Є'}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
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
        {JSON.stringify(cartProductsData, null, 4)}
      </pre>
    </Container>
  );
};

export default CartPage;
