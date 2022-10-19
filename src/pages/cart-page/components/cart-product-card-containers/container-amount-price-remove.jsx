import * as React from 'react';
import { Box } from '@mui/material';

const ContainerAmountPriceRemove = ({ children }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: { sm: 'column' },
    justifyContent: 'space-between',
    width: { md: '30%' },
  }}
  >
    {children}
  </Box>
);

export default ContainerAmountPriceRemove;
