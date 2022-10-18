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
        src={img}
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
            {price}
            {' Є'}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
