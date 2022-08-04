import * as React from 'react';
import { Container } from '@mui/system';
import {
  Box,
  Button,
  Divider,
  Input,
  Typography
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductInformation = () => {
  const { id } = useParams();
  const [product, setData] = React.useState(null);
  let navigate = useNavigate();

  React.useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:8000/items/${id}`);
      const productDetails = await response.json();
      // isprovokuoja persikrovima
      setData(productDetails);
      console.log(productDetails);
    }

    fetchProduct()

  }, [id]);

  //console.log({ product: product.title });

  return (
    <Container>
      {/* <Typography variant='h4' component='h4'>Product information {id}</Typography> */}
      <Box sx={{ display: 'flex', my: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex' }}>
            <Box
              component='img'
              src='https://www.arlberry.com/wp-content/uploads/2014/01/Mia-Marquez-1-744x496.jpg'
              alt=''
              sx={{
                width: '600px',
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
              <Typography variant='h4' component='h4' >Dining table</Typography>
              <Typography component='subtitle' sx={{ my: 1, fontStyle: 'italic' }}>Furniture</Typography>
              <Typography variant='body2' component='p' sx={{ my: 1 }}>Type of wood: Maple</Typography>
              <Box sx={{ marginTop: 'auto' }}>
                <Typography variant='h5' component='h5' sx={{ my: 1 }}>569 EUR</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>

                  <Button sx={theme => ({
                    height: '50px',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.white,
                    borderRadius: '0',
                    letterSpacing: '0.1em',
                    fontSize: '14px',
                    transition: '0.3s ease-in-out',
                  })}>+
                  </Button>
                  <Input />
                  <Button sx={theme => ({
                    height: '50px',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.white,
                    borderRadius: '0',
                    letterSpacing: '0.1em',
                    fontSize: '14px',
                    transition: '0.3s ease-in-out',
                  })}>-
                  </Button>
                  <Button sx={theme => ({
                    width: '100%',
                    height: '50px',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.white,
                    borderRadius: '0',
                    letterSpacing: '0.1em',
                    fontSize: '14px',
                    transition: '0.3s ease-in-out',
                  })}>Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
          <Typography variant='h5' component='h4' sx={{ mt: 4 }}>About the product:</Typography>
          <Divider sx={{ my: 2 }}></Divider>
            <Typography component='p' sx={{ mt: 2, mb: 8 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat commodi quia dicta suscipit impedit possimus eum doloribus iste ab,
              veniam mollitia iusto deleniti qui, magnam voluptate harum aliquam quidem enim quas!
              Esse mollitia nesciunt quod consequatur culpa nostrum! Repudiandae quam in modi
              sequi voluptas velit blanditiis fugiat ipsa? At, magnam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat commodi quia dicta suscipit impedit possimus eum doloribus iste ab,
              veniam mollitia iusto deleniti qui, magnam voluptate harum aliquam quidem enim quas!
              Esse mollitia nesciunt quod consequatur culpa nostrum! Repudiandae quam in modi
              sequi voluptas velit blanditiis fugiat ipsa? At, magnam.
            </Typography>
            {/* <Divider sx={{ my: 2 }}></Divider> */}
            <Box sx={{ width: '20%' }}>
              <Button 
              sx={theme => ({
                width: '100%',
                height: '50px',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.white,
                borderRadius: '0',
                letterSpacing: '0.1em',
                fontSize: '14px',
                transition: '0.3s ease-in-out',
              })}
              onClick={() => navigate('/product-catalog')}
              >
                <ArrowBackIcon fontSize='small' />
                Back to catalog
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>





      <Box>
        <pre>
          {JSON.stringify(product, null, 4)}
        </pre>
      </Box>
    </Container >
  )
}

export default ProductInformation;
