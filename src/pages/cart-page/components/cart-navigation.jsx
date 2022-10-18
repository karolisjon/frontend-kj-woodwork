import { Box } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../components/custom-button';

const CartNavigation = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6,
    }}
    >
      <CustomButton
        onClick={() => navigate('/product-catalog')}
      >
        <ArrowBackIcon fontSize="small" />
        CATALOG
      </CustomButton>
      <CustomButton
        onClick={() => navigate('/product-catalog')}
      >
        <CheckIcon />
        CHECKOUT
      </CustomButton>
    </Box>
  );
};

export default CartNavigation;
