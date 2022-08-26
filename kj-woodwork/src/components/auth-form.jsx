import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import CustomButton from './custom-button';

const AuthForm = ({
  formTitle,
  buttonText,
  children,
  onSubmit,
  disabled = false,
}) => (
  <Paper sx={{
    width: '400px',
    borderRadius: 0,
    mt: 4,
    py: 6,
    px: 4,
  }}
  >
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
    }}
    >
      <Typography component="h1" variant="h3" sx={{ fontFamily: 'logoFont', fontWeight: 500 }}>KJ Woodwork</Typography>
      <Typography component="h2" variant="h5" sx={{ textTransform: 'uppercase' }}>{formTitle}</Typography>
    </Box>
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {children}
      <Box sx={{ mt: 2 }}>
        <CustomButton type="submit" disabled={disabled}>{buttonText}</CustomButton>
      </Box>
    </Box>
  </Paper>
);

export default AuthForm;
