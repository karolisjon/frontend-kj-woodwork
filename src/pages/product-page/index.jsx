/* eslint-disable no-unsafe-optional-chaining */
import * as React from 'react';
import {
  Box,
  CardMedia,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
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
                width: '600px',
                height: '400px',
                objectFit: 'cover',
                alignSelf: { xs: 'center' },
              }}
            />
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              justifyContent: { xs: 'space-between' },
              px: { md: 2 },
              py: { xs: 2, md: 0 },
            }}
            >
              <Box>
                <Details product={product} amount={amount} />
              </Box>

              <Box sx={{ display: 'flex', gap: 1, marginTop: 'auto' }}>
                <Amount
                  amount={amount}
                  setAmount={setAmount}
                  navigate={navigate}
                  id={id}
                  addToCart={addToCart}
                  product={product}
                />
              </Box>
            </Box>

          </Box>

          <Box>
            <Typography variant="h5" sx={{ mt: 4, fontFamily: theme.typography.main }}>About the product:</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography component="p" sx={{ mt: 2, mb: 8, fontFamily: theme.typography.main }}>
              {product?.description}
            </Typography>
            <Box sx={{ width: '30%' }}>
              <CustomButton
                onClick={() => navigate('/product-catalog')}
              >
                <ArrowBackIcon fontSize="small" />
                Back to catalog
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductInformation;
