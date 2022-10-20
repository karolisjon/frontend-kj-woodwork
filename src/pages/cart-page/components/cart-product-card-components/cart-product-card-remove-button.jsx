import * as React from 'react';
import { Box, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const CartProductCardRemoveButton = ({ onClick }) => (
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
    <Button
      variant="text"
      sx={{ '&:hover': { background: 'none' } }}
      onClick={onClick}
    >
      <ClearIcon />
      REMOVE
    </Button>
  </Box>
);
export default CartProductCardRemoveButton;
