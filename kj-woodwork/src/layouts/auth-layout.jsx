import { Box } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const AuthLayout = () => {
  return (
    <Container>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Navbar />
        <Outlet />
      </Box>
    </Container>
  )
}

export default AuthLayout;
