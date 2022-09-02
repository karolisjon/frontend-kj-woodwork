import * as React from 'react';
import { Box } from '@mui/material';

const ContentWrapperSecondary = ({ children }) => (
  <Box sx={{
    width: { lg: '95%', md: '100%' },
    display: 'flex',
    flexDirection: 'column',
    gap: {
      xs: 1, sm: 1, md: 1, lg: 2,
    },
  }}
  >
    {children}
  </Box>
);

export default ContentWrapperSecondary;
