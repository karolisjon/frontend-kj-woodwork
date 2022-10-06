import * as React from 'react';
import { Box } from '@mui/material';
import theme from '../styles/theme';

const HeaderMain = ({ text }) => (
  <Box
    component="h1"
    sx={{
      pt: 2,
      my: 0,
      color: theme.palette.primary.white,
      fontWeight: 400,
      fontFamily: theme.typography.logoFont,
      fontSize: {
        xs: 45, sm: 70, md: 90, lg: 110,
      },
    }}
  >
    {text}
  </Box>
);

export default HeaderMain;
