import * as React from 'react';
import { Typography } from '@mui/material';
import theme from '../../../../styles/theme';

const CartProductCardTitle = ({ title }) => (
  <Typography
    variant="h6"
    sx={{
      fontFamily: theme.typography.main,
      fontSize: { xs: 14, sm: 18, md: 22 },
      mb: 1,
    }}
  >
    {title}
  </Typography>
);

export default CartProductCardTitle;
