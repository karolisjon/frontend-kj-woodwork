import * as React from 'react';
import { Container } from '@mui/system';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ProductInformation = () => {
  const { id } = useParams();
  const [product, setData] = React.useState(null);

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
      <Typography variant='h4' component='h4'>Product information {id}</Typography>



      <Box sx={{ display: 'flex', mb: 4 }}>
        <Box>
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
            // px: 4, 
            py: 1,
            flexGrow: 1
          }}>
            <Typography variant='h5' component='h6'>Dining table</Typography>
            <Typography component='subtitle' sx={{ my: 1 }}>Furniture</Typography>
            <Typography component='subtitle' sx={{ my: 1 }}>Type of wood: Maple</Typography>
            <Typography component='p' sx={{ my: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat commodi quia dicta suscipit impedit possimus eum doloribus iste ab,
              veniam mollitia iusto deleniti qui, magnam voluptate harum aliquam quidem enim quas!
              Esse mollitia nesciunt quod consequatur culpa nostrum! Repudiandae quam in modi
              sequi voluptas velit blanditiis fugiat ipsa? At, magnam.
              <Divider sx={{ my: 1 }}></Divider>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat commodi quia dicta suscipit impedit possimus eum doloribus iste ab,
              veniam mollitia iusto deleniti qui, magnam voluptate harum aliquam quidem enim quas!
            </Typography>
            <Typography component='subtitle' sx={{ my: 1 }}>569 EUR</Typography>
            <Button sx={theme => ({
              width: '100%',
              height: '50px',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.white,
              borderRadius: '0',
              letterSpacing: '0.1em',
              fontSize: '14px',
              transition: '0.3s ease-in-out',
            })}>Add to cart</Button>
          </Box>
        </Box>
      </Box>




      <Box sx={{ display: 'flex', mb: 4 }}>
        <Box>
          <Box
            component='img'
            src='https://www.wright20.com/items/index/2000/157_1_modern_design_march_2011_sam_maloof_dining_chairs_pair__wright_auction.jpg'
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
            // px: 4, 
            py: 1,
            flexGrow: 1
          }}>
            <Typography variant='h5' component='h6'>Dining table</Typography>
            <Typography component='subtitle' sx={{ my: 1 }}>Furniture</Typography>
            <Typography component='subtitle' sx={{ my: 1 }}>Type of wood: Maple</Typography>
            <Typography component='p' sx={{ my: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat commodi quia dicta suscipit impedit possimus eum doloribus iste ab,
              veniam mollitia iusto deleniti qui, magnam voluptate harum aliquam quidem enim quas!
              Esse mollitia nesciunt quod consequatur culpa nostrum! Repudiandae quam in modi
              sequi voluptas velit blanditiis fugiat ipsa? At, magnam.
              <Divider sx={{ my: 1 }}></Divider>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat commodi quia dicta suscipit impedit possimus eum doloribus iste ab,
              veniam mollitia iusto deleniti qui, magnam voluptate harum aliquam quidem enim quas!
            </Typography>
            <Typography component='subtitle' sx={{ my: 1 }}>569 EUR</Typography>
            <Button sx={theme => ({
              width: '100%',
              height: '50px',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.white,
              borderRadius: '0',
              letterSpacing: '0.1em',
              fontSize: '14px',
              transition: '0.3s ease-in-out',
            })}>Add to cart</Button>
          </Box>
        </Box>
      </Box>








      <Box sx={{ mt: 30 }}>
        <pre>
          {JSON.stringify(product, null, 4)}
        </pre>
      </Box>
    </Container >
  )
}

export default ProductInformation;
