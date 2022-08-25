import * as React from 'react';
import { Container } from '@mui/system';
import {
  Box,
  Divider,
  Input,
  Typography
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonAmmount from './components/button-amount';
import CustomButton from '../../custom-button';

const ProductInformation = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [amount, setAmount] = React.useState(1);
  let navigate = useNavigate();

  React.useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:8000/products/${id}`);
      const productDetails = await response.json();

      setProduct(productDetails);
    }

    fetchProduct();

  }, [id]);


  return (
    <Container>
      <Box sx={{ display: 'flex', my: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex' }}>
            <Box
              component='img'
              src={product?.img}
              alt=''
              sx={{
                width: '600px',
                height: '400px',
                objectFit: 'cover',
              }}
            >
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              px: 2,
              flexGrow: 1
            }}>
              <Typography variant='h4' component='h4'>{product?.title}</Typography>
              <Typography component='subtitle' sx={{ my: 1, fontStyle: 'italic' }}>Category: {product?.category}</Typography>
              {product?.measurements && (
                <Typography variant='body2' component='p' sx={{ my: 1 }}>Measurements: {product?.measurements}</Typography>
              )}
              <Typography variant='body2' component='p' sx={{ my: 1 }}>Type of wood: {product?.wood}</Typography>
              <Typography variant='body2' component='p' sx={{ my: 1 }}>Product no: {product?.id}</Typography>

              {product?.inStock
               ? <Typography variant='body2' component='p' sx={{ my: 1 }}>Currently in stock: yes</Typography>
               : <Typography variant='body2' component='p' sx={{ my: 1 }}>Currently in stock: no</Typography>
               }

              <Box sx={{ marginTop: 'auto' }}>
                <Typography variant='h5' component='h5' sx={{ my: 1 }}>Price: {product?.price * amount}.00 €</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <ButtonAmmount
                    onClick={() => setAmount(amount + 1)}
                  >
                    +
                  </ButtonAmmount>
                  <Input
                    disableUnderline
                    readOnly
                    value={amount}
                    sx={{ p: 0, fontSize: '1.5rem' }}
                    inputProps={{
                      style: {
                        padding: 0,
                        width: 40,
                        textAlign: 'center',
                      },
                    }}
                  />
                  <ButtonAmmount
                    onClick={() => setAmount(amount - 1)}
                    disabled={amount === 1}
                  >
                    -
                  </ButtonAmmount>
                  <CustomButton
                    onClick={() => console.log('added to cart')}
                  >
                    Add to cart
                  </CustomButton>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant='h5' component='h4' sx={{ mt: 4 }}>About the product:</Typography>
            <Divider sx={{ my: 2 }}></Divider>
            <Typography component='p' sx={{ mt: 2, mb: 8 }}>
              {product?.description}
            </Typography>
            <Box sx={{ width: '20%' }}>
              <CustomButton
                onClick={() => navigate('/product-catalog')}
              >
                <ArrowBackIcon fontSize='small' />
                Back to catalog
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container >
  )
}

export default ProductInformation;
