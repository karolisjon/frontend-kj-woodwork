import * as React from 'react';
import { Typography } from '@mui/material';
import theme from '../styles/theme';

const HeaderSecondary = ({ text }) => (
  <Typography
    variant="h3"
    component="h3"
    sx={{
      color: theme.palette.primary.white,
      fontWeight: '400',
      fontFamily: theme.typography.logoFont,
    }}
  >
    {text}
  </Typography>
);

export default HeaderSecondary;
