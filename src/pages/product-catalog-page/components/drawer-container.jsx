import * as React from 'react';
import { Box } from '@mui/material';

const DrawerContainer = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: 'calc(100vh - 64px)',
      gap: 6,
      p: 4,
    }}
  >
    {children}
  </Box>
);

export default DrawerContainer;
