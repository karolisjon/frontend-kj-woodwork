import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/material';
import CustomButton from '../../../components/custom-button';

const ProductNavigation = ({ id, amount, addToCart }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <CustomButton
        sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}
        onClick={() => {
          addToCart({ id, amount });
        }}
      >
        <CheckIcon />
        Add to cart
      </CustomButton>

      <CustomButton
        sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}
        onClick={() => navigate('/product-catalog')}
      >
        <ArrowBackIcon fontSize="small" />
        Back to catalog
      </CustomButton>
    </Box>
  );
};

export default ProductNavigation;
