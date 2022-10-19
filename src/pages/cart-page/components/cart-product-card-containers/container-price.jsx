import * as React from 'react';
import { Box } from '@mui/material';

const ContainerPrice = ({ children }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'row', sm: 'column' },
    alignItems: { xs: 'center', sm: 'inherit' },
  }}
  >
    {children}
  </Box>
);

export default ContainerPrice;
