import * as React from 'react';
import {
  Box,
  Button,
  CardMedia,
  Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import theme from '../../../styles/theme';

const CartProductDetails = ({ productsInCart }) => (

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
        src={productsInCart.img}
        alt=""
        sx={{
          width: { xs: '70%', sm: '45%', md: '35%' },
          // height: { xs: '100%', sm: '40%', md: '30%' },
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
          {productsInCart?.title}
        </Typography>
        {/* <Typography
          variant="body2"
          component="p"
          sx={{ fontFamily: theme.typography.main, my: 1 }}
        >
          Category:
          {' '}
          {productsInCart?.category.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ fontFamily: theme.typography.main, my: 1 }}
        >
          Type of wood:
          {' '}
          {productsInCart?.woodType.title}
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
          <Typography variant="h6" sx={{ fontFamily: theme.typography.main }}>2</Typography>
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
            {productsInCart.price}
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
);

export default CartProductDetails;
