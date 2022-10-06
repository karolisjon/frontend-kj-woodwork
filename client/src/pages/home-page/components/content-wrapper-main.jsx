import * as React from 'react';
import { Box } from '@mui/material';

const ContentWrapperMain = ({ children }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: { xs: 1 },
  }}
  >
    {children}
  </Box>
);

export default ContentWrapperMain;
