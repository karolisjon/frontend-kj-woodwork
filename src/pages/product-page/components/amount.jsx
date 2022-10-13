/* eslint-disable no-unsafe-optional-chaining */
import * as React from 'react';
import {
  Box, Button, Input, Typography,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CustomButton from '../../../components/custom-button';
import theme from '../../../styles/theme';

const Amount = ({
  amount, setAmount, navigate, id, addToCart, product,
}) => (

  <Box sx={{
    display: 'flex', flexDirection: 'column', gap: 1, mb: 1,
  }}
  >

    <Typography variant="h5" sx={{ fontFamily: theme.typography.main }}>
      Price:
      {' '}
      {product?.price * amount}
      {' €'}
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>

      <Button
        sx={{ '&:hover': { backgroundColor: '#fff' } }}
        onClick={() => setAmount(amount + 1)}
      >
        <AddIcon />
      </Button>

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

      <Button
        sx={{ '&:hover': { backgroundColor: '#fff' } }}
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 1}
      >
        <RemoveIcon />
      </Button>
    </Box>

    <CustomButton
      sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}
      onClick={() => {
        navigate(`/cart/${id}`);
        addToCart({ id });
      }}
    >
      <CheckIcon />
      Add to cart
    </CustomButton>
  </Box>
);

export default Amount;
