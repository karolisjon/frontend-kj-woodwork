import * as React from 'react';
import { Box, Paper, TextField, Typography } from '@mui/material';
import CustomButton from '../../../custom-button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const RegisterPage = () => {
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
        <Typography component='h2' variant='h5' sx={{ textTransform: 'uppercase' }}>Register</Typography>
      </Box>
      <Box
        component='form'
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          name='fullname'
          label='Full name'
          variant='standard'
          type='text'
          fullWidth
        />
          <DesktopDatePicker
            inputFormat="yyyy/MM/dd"
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
          <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
          </Box>
          <CustomButton type='submit'>Register</CustomButton>
      </Box>
    </Paper>
  )
}

export default RegisterPage;
