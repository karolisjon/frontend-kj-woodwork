import * as React from 'react';
import { 
  Box, 
  Link, 
  TextField, 
  Typography 
} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import AuthForm from '../../auth-form';

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
  const onSubmit = (values) => {
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
    onSubmit,
  });

  return (
      <AuthForm
        formTitle='login'
        buttonText='login'
        onSubmit={handleSubmit}
        disabled={!dirty || !isValid}
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
      </AuthForm>
  )
}

export default LoginPage;
