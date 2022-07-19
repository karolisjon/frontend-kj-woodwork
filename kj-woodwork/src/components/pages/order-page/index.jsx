import { Box, Button, MenuItem, Paper, TextField, Typography } from '@mui/material';
import * as React from 'react'

const countries = [
  {
    value: 'Lithuania',
    label: 'LT',
  },
  {
    value: 'Poland',
    label: 'PL',
  },
  {
    value: 'Latvia',
    label: 'LV',
  },
  {
    value: 'Estonia',
    label: 'EE',
  },
  {
    value: 'Germany',
    label: 'DE',
  },
];

const OrderPage = () => {
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [country, setCountry] = React.useState('');

  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          p: 3,
          width: '600px',
          mx: 'auto',
        }}
      >
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography component='h1' variant='h5'>
            Enter your details
          </Typography>
          <TextField
            name='fullname'
            label='Full name'
            variant='standard'
            fullWidth
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
          />
          <TextField
            name='email'
            label='E-mail address'
            variant='standard'
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            select
            name='country'
            label='Country of shipment'
            variant='standard'
            fullWidth
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            {/* <MenuItem>
              <em>None</em>
            </MenuItem> */}
            {countries.map(
              ({ value, label }) => <MenuItem key={label} value={value}>{value}</MenuItem>
            )}
          </TextField>
          <Button
          type='submit'
          variant='contained'
          fullWidth
          >
          Order now
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default OrderPage;
