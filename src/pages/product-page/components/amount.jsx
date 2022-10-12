import * as React from 'react';
import { Box, Button, Input } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CustomButton from '../../../components/custom-button';

const Amount = ({
  amount, setAmount, navigate, id, addToCart,
}) => (

  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
      <Button
        sx={{ '&:hover': { backgroundColor: '#fff' }, '&:active': { backgroundColor: '#fff' } }}
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
        sx={{ '&:hover': { backgroundColor: '#fff' }, '&:active': { backgroundColor: '#fff' } }}
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 1}
      >
        <RemoveIcon />
      </Button>
    </Box>

    <CustomButton
      onClick={() => {
        navigate(`/cart/${id}`);
        addToCart({ id });
      }}
    >
      Add to cart
    </CustomButton>
  </Box>
);

export default Amount;
