import * as React from 'react';
import {
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import theme from '../../../styles/theme';

const CartProductDetails = ({ productsInCart }) => (

  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    my: 2,
  }}
  >
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '70%',
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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',

    }}
    >
      <Box>
        <Typography sx={{ fontFamily: theme.typography.main }}>QUANTITY: </Typography>
        <Typography sx={{ fontFamily: theme.typography.main }}>2</Typography>
      </Box>
      <Box>
        <Typography sx={{
          fontFamily: theme.typography.main,

        }}
        >
          PRICE:
        </Typography>
        <Typography sx={{ fontFamily: theme.typography.main }}>
          {productsInCart.price}
          {' Є'}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontFamily: theme.typography.main }}>TOTAL: </Typography>
        <Typography sx={{ fontFamily: theme.typography.main }}>
          {productsInCart.price}
          {' Є'}
        </Typography>
      </Box>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton
        sx={{ color: theme.palette.primary.main, '&:hover': { background: 'none' } }}
        onClick={() => console.log('will remove item from the cart in the future')}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  </Box>
);

export default CartProductDetails;
