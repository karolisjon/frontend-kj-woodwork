import * as React from 'react';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AuthForm from '../../auth-form';

const RegisterPage = () => {
  return (
      <AuthForm
        formTitle='register'
        buttonText='register'
      >
        <TextField
          name='fullname'
          label='Full name'
          variant='standard'
          type='text'
          fullWidth
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
            />
          )}
        />
        <TextField
          name='email'
          label='Email'
          variant='standard'
          type='email'
          fullWidth
        />
        <TextField
          name='emailConfirmation'
          label='Email confirmation'
          variant='standard'
          type='email'
          fullWidth
        />
        <TextField
          name='password'
          label='Password'
          variant='standard'
          type='password'
          fullWidth
        />
        <TextField
          name='passwordConfirmation'
          label='Password confirmation'
          variant='standard'
          type='password'
          fullWidth
        />
      </AuthForm>
  )
}

export default RegisterPage;
