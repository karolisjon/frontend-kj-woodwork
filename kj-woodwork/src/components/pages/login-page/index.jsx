import * as React from 'react';
import { Box, Link, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../custom-button';

const initialVals = {
  email: '',
  password: '',
};

const LoginPage = () => {
  let navigate = useNavigate();
  const { 
    values, dirty, errors, isValid,
    handleChange,
  } = useFormik({
    initialValues: initialVals,
    validate: ({ email, password }) => {
      let fieldErrors = {};
      
      if (email === '') {
        fieldErrors.email = 'Email is mandatory';
      }

      if (password === '') { 
        fieldErrors.password = 'Password is mandatory';
      }

    return fieldErrors;
    }
  });
  
  return (
    <Paper sx={{
      width: '400px',
      borderRadius: 0,
      mt: 4,
      py: 6,
      px: 4,
    }}>
      <Paper component='pre' sx={{ position: 'fixed', top: '80px', left: '50px', p: 2 }}>
        {JSON.stringify({ values, dirty, errors }, null, 2)}
      </Paper>

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
          name='email'
          label='Email'
          variant='standard'
          type='email'
          fullWidth
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          name='password'
          label='Password'
          variant='standard'
          type='password'
          fullWidth
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
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
            }}
            onClick={() => navigate('/register')}
            >
              Sign up
              </Link>
        </Box>
        <CustomButton disabled={!dirty || !isValid}>LOGIN</CustomButton>
      </Box>
    </Paper>
  )
}

export default LoginPage;
