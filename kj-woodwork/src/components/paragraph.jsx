import * as React from 'react';
import { Box } from '@mui/material';
import theme from '../styles/theme';

const Paragraph = ({ text }) => (
  <Box
    sx={{
      pr: { xs: 0, sm: 2 },
      pl: { xs: 0 },
      color: theme.palette.primary.white,
      fontWeight: 200,
      letterSpacing: '0.01em',
      fontSize: 18,
      fontFamily: theme.typography.main,
    }}
  >
    {text}
  </Box>
);

export default Paragraph;
