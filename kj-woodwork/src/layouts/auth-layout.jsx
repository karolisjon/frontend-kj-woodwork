import { Box } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0',
      }}>
        <Outlet />
      </Box>
  )
}

export default AuthLayout;
