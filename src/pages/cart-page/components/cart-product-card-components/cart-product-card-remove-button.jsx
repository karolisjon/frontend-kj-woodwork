import * as React from 'react';
import { Box, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CartContext from '../../../../contexts/cart-page-context';

const CartProductCardRemoveButton = () => {
  const { removeFromCart } = React.useContext(CartContext);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
      <Button
        variant="text"
        sx={{ '&:hover': { background: 'none' } }}
        onClick={removeFromCart}
      >
        <ClearIcon />
        REMOVE
      </Button>
    </Box>
  );
};
export default CartProductCardRemoveButton;
