/* eslint-disable no-unsafe-optional-chaining */
import * as React from 'react';
import {
  Box,
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
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex' }}>
            <Box
              component="img"
              src={product?.img}
              alt=""
              sx={{
                width: '600px',
                height: '400px',
                objectFit: 'cover',
              }}
            />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              px: 2,
              flexGrow: 1,
            }}
            >
              <Typography
                variant="h4"
                sx={{ fontFamily: theme.typography.main }}
              >
                {product?.title}

              </Typography>
              <Typography
                sx={{ my: 1, fontFamily: theme.typography.main }}
              >
                Category:
                {' '}
                {product?.category.title}
              </Typography>
              <Typography sx={{ my: 1, fontFamily: theme.typography.main }}>
                Type of wood:
                {' '}
                {product?.woodType.title}
              </Typography>

              <Box sx={{ marginTop: 'auto' }}>
                <Typography variant="h5" sx={{ my: 1, fontFamily: theme.typography.main }}>
                  Price:
                  {' '}
                  {product?.price * amount}
                  {' €'}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Amount
                    amount={amount}
                    setAmount={setAmount}
                    navigate={navigate}
                    id={id}
                    addToCart={addToCart}
                  />
                </Box>

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
