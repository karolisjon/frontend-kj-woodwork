import * as React from 'react';
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
// import { useParams } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import theme from '../../../styles/theme';
import CartContext from '../../../contexts/cart-page-context';
import ProductService from '../../../services/product-service';

const CartProduct = () => {
  // const { id } = useParams();
  const { cartProducts: cartProductsData } = React.useContext(CartContext);
  const [cartProducts, setCartProducts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      // const productId = localStorage.getItem('productId');
      const productsObj = localStorage.getItem('cartProductsObj');
      const retrievedProducts = JSON.parse(productsObj);

      if (productsObj) {
        Object.values(retrievedProducts).forEach(async (x) => {
          const fetchedProduct = await ProductService.fetchProductById(x.id);
          setCartProducts([...cartProducts, fetchedProduct]);
        });
      }
    }
    )();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(cartProducts);

  return (
    <>
      <Divider />

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
          sx={{ fontFamily: theme.typography.main, my: 1 }}
        >
          Category:
          {' '}
          {cartProducts?.category.title}
        </Typography> */}
            {/* <Typography
          variant="body2"
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
              <Typography variant="h6" sx={{ fontFamily: theme.typography.main }}>10</Typography>
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
              onClick={() => {}}
            >
              <ClearIcon />
              REMOVE
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />

      <pre>
        {JSON.stringify(cartProductsData, null, 4)}
      </pre>
    </>
  );
};

export default CartProduct;
