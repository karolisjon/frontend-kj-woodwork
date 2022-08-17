import { Box, Link, Paper, TextField, Typography } from '@mui/material';
import * as React from 'react';
import CustomButton from '../../../custom-button';

const LoginPage = () => {
  return (
    <Paper sx={{
      width: '400px',
      borderRadius: 0,
      mt: 4,
      py: 6,
      px: 4,
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 2,
        }}>
        <Typography component='h1' variant='h3' sx={{ fontFamily: 'logoFont', fontWeight: 500 }}>KJ Woodwork</Typography>
        <Typography component='h2' variant='h5' sx={{ textTransform: 'uppercase' }}>Login</Typography>
      </Box>
      <Box 
      component='form' 
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          variant='standard'
          label='Email'
          type='email'
          fullWidth
        />
        <TextField
          variant='standard'
          label='Password'
          type='password'
          fullWidth
        />
        <Link 
        variant='body1'
        sx={{ 
          fontSize: '12px',
          transition: '0.3s ease-in-out',
          '&:hover': {
            cursor: 'pointer'
          } 
           }}>
            Forgot your password?
            </Link>
        <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
          <Typography variant='body1'sx={{ fontSize: '12px' }}>Don&apos;t have an account?</Typography>
          <Link 
          variant='body1'
          sx={{ 
            fontSize: '12px',
            transition: '0.3s ease-in-out',
              '&:hover': {
                cursor: 'pointer'
              } 
            }}>
              Sign up
              </Link>
        </Box>
        <CustomButton>LOGIN</CustomButton>
      </Box>
    </Paper>
  )
}

export default LoginPage;
