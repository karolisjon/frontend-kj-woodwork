import * as React from 'react';
import { Box } from '@mui/material';

const ContainerAmountPrice = ({ children }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { sm: 'space-between' },
    gap: { sm: 3 },
    mt: { xs: 2, sm: 0 },
  }}
  >
    {children}
  </Box>
);

export default ContainerAmountPrice;
