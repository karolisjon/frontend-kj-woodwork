import * as React from 'react';
import { Box, Link, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../custom-button';
import * as yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Email is mandatory')
    .email('Incorrect email format'),
  password: yup.string()
    .required('Password is mandatory')
    .min(8, 'Your password must contain at least 8 characters')
    .max(30, 'Your password cannot contain more than 30 characters')
    .matches(/[a-z]/, 'Your password must contain at least one lowercase leter')
    .matches(/[A-Z]/, 'Your password must contain at least one capital leter')
    .matches(/[\d]/, 'Your password must contain at least one digit')
    .matches(/[\W]/, 'Your password must contain at least one special character')
});

const LoginPage = () => {
  const formSubmission = (values) => {
    console.log(values);
  };

  let navigate = useNavigate();

  const {
    dirty,
    errors,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: formSubmission,
  });

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
          onSubmit={handleSubmit}
        >
          <TextField
            name='email'
            label='Email'
            variant='standard'
            type='email'
            fullWidth
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            name='password'
            label='Password'
            variant='standard'
            type='password'
            fullWidth
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
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
            <Typography variant='body1' sx={{ fontSize: '12px' }}>Don&apos;t have an account?</Typography>
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
          <CustomButton type='submit' disabled={!dirty || !isValid}>LOGIN</CustomButton>
        </Box>
      </Paper>
  )
}

export default LoginPage;
