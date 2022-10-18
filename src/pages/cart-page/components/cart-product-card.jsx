import * as React from 'react';
import {
  Box, Button, CardMedia, Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import theme from '../../../styles/theme';

const CartProductCard = ({
  category,
  img,
  price,
  title,
  woodType,
}) => (
  <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
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
      <Box sx={{
        height: 220,
        width: 220,
      }}
      >
        <CardMedia
          component="img"
          src={img}
          alt="product"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box sx={{ ml: 2, textAlign: 'left' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: theme.typography.main,
            fontSize: { xs: 14, sm: 18, md: 22 },
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: theme.typography.main, my: 1 }}
        >
          Category:
          {' '}
          {category}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: theme.typography.main, my: 1 }}
        >
          Type of wood:
          {' '}
          {woodType}
        </Typography>
      </Box>
    </Box>
    <Box sx={{
      display: 'flex',
      flexDirection: { sm: 'column' },
      justifyContent: 'space-between',
      width: { md: '30%' },
    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { sm: 'space-between' },
        gap: { sm: 3 },
        mt: { xs: 2, sm: 0 },
      }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' } }}>
          <Typography sx={{ fontFamily: theme.typography.main }}>AMOUNT: </Typography>
          <Typography variant="h6" sx={{ fontFamily: theme.typography.main }}>10</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' } }}>
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
            {price}
            {' Є'}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Button
          variant="text"
          sx={{ '&:hover': { background: 'none' } }}
          onClick={() => { }}
        >
          <ClearIcon />
          REMOVE
        </Button>
      </Box>
    </Box>
  </Box>
);

export default CartProductCard;
