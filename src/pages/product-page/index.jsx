/* eslint-disable no-unsafe-optional-chaining */
import * as React from 'react';
import {
  Box,
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
import CustomButton from '../../components/custom-button';
import ProductService from '../../services/product-service';
import CartContext from '../../contexts/cart-page-context';
import theme from '../../styles/theme';
import Amount from './components/amount';
import Details from './components/details';

const ProductInformation = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [amount, setAmount] = React.useState(1);
  const navigate = useNavigate();
  const { addToCart } = React.useContext(CartContext);

  React.useEffect(() => {
    (async () => {
      const fetchedProduct = await ProductService.fetchProductById(id);

      console.log('PRODUCT INFORMATION COMPONENT: ID: ', id);

      setProduct(fetchedProduct);
    })();
  }, [id]);

  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', my: 6 }}>
        <Box sx={{ flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <CardMedia
              component="img"
              src={product?.img}
              alt=""
              sx={{
                width: { xs: '100%', md: '70%' },
                height: { xs: '100%', sm: '100%' },
                objectFit: 'cover',
                alignSelf: { xs: 'center' },
              }}
            />
            <Box sx={{ px: { md: 2 }, py: { xs: 2, md: 0 } }}>
              <Details product={product} amount={amount} />
            </Box>

          </Box>

          <Box>
            <Typography variant="h5" sx={{ mt: 4, fontFamily: theme.typography.main }}>
              About the product:
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography component="p" sx={{ my: 2, fontFamily: theme.typography.main }}>
              {product?.description}
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Amount
              amount={amount}
              setAmount={setAmount}
              navigate={navigate}
              id={id}
              addToCart={addToCart}
              product={product}
            />

            <CustomButton
              sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}
              onClick={() => navigate('/product-catalog')}
            >
              <ArrowBackIcon fontSize="small" />
              Back to catalog
            </CustomButton>

          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductInformation;
