import * as React from 'react';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AuthForm from '../../auth-form';
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';

const currentDate = moment(new Date());
console.log(currentDate);

const initialValues = {
  fullname: '',
  birthdate: currentDate,
  email: '',
  emailConfirmation: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object({
  fullname: yup.string()
    .required('Your name and surname are mandatory'),
    email: yup.string()
    .required('Email is mandatory')
    .email('Incorrect email format'),
    emailConfirmation: yup.string()
    .required('Email confirmation is mandatory')
    .oneOf([yup.ref('email')], 'Email addresses do not match'),
    password: yup.string()
    .required('Password is mandatory')
    .min(8, 'Your password must contain at least 8 characters')
    .max(30, 'Your password cannot contain more than 30 characters')
    .matches(/[a-z]/, 'Your password must contain at least one lowercase leter')
    .matches(/[A-Z]/, 'Your password must contain at least one capital leter')
    .matches(/[\d]/, 'Your password must contain at least one digit')
    .matches(/[\W]/, 'Your password must contain at least one special character'),
    passwordConfirmation: yup.string()
    .required('Password confirmation is mandatory')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

const RegisterPage = () => {
  const { 
    dirty,
    errors,
    isValid,
    touched,
    handleChange,
    handleBlur,
    // handleSubmit,
   } = useFormik({
    initialValues,
    validationSchema,
  })

  return (
    <AuthForm
      formTitle='register'
      buttonText='register'
      disabled={!dirty || !isValid}
    >
      <TextField
        name='fullname'
        label='Full name'
        variant='standard'
        type='text'
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullname && Boolean(errors.fullname)}
        helperText={touched.fullname && errors.fullname}
      />
      <DesktopDatePicker
        inputFormat="yyyy-MM-DD"
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            name="birthdate"
            label="Birthdate"
            variant="standard"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.birthdate && Boolean(errors.birthdate)}
            helperText={touched.birthdate && errors.birthdate}
          />
        )}
      />
      <TextField
        name='email'
        label='Email'
        variant='standard'
        type='email'
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        name='emailConfirmation'
        label='Email confirmation'
        variant='standard'
        type='email'
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.emailConfirmation && Boolean(errors.emailConfirmation)}
        helperText={touched.emailConfirmation && errors.emailConfirmation}
      />
      <TextField
        name='password'
        label='Password'
        variant='standard'
        type='password'
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <TextField
        name='passwordConfirmation'
        label='Password confirmation'
        variant='standard'
        type='password'
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
        helperText={touched.passwordConfirmation && errors.passwordConfirmation}
      />
    </AuthForm>
  )
}

export default RegisterPage;
