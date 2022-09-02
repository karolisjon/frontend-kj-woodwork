import * as React from 'react';
import { Button } from '@mui/material';
import theme from '../../../styles/theme';

const HomePageButton = ({ label, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      width: { xs: '100% ', md: 300 },
      height: 50,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.white,
      borderRadius: 0,
      border: `1px solid ${theme.palette.primary.white}`,
      letterSpacing: '0.1em',
      fontSize: 14,
      fontFamily: theme.typography.main,
      textTransform: 'uppercase',
    }}
  >
    {label}
  </Button>
);

export default HomePageButton;
