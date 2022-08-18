import { Box } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const AuthLayout = () => {
  return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0',
      }}>
        <Navbar />
        <Outlet />
      </Box>
  )
}

export default AuthLayout;
