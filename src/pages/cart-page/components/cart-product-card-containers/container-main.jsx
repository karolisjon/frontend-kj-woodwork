import * as React from 'react';
import { Box } from '@mui/material';

const ContainerMain = ({ children }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    textAlign: { xs: 'right' },
    my: 2,
  }}
  >
    {children}
  </Box>
);

export default ContainerMain;
