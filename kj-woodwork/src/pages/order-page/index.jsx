import * as React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
// import CartPageContext from '../../../contexts/cart-page-context';

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
  {
    value: 'Denmark',
    label: 'DK',
  },
  {
    value: 'Sweden',
    label: 'SE',
  },
  {
    value: 'Norway',
    label: 'NO',
  },
  {
    value: 'Finland',
    label: 'FI',
  },
];

const OrderPage = () => {
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [city, setCity] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [houseNr, setHouseNr] = React.useState('');
  const [apartmentNr, setApartmentNr] = React.useState('');
  const [termsAndConditions, setTermsAndConditions] = React.useState(true);

  // const cartPageContext = React.useContext(CartPageContext);
  // console.log('Order, cartPageContext: ', cartPageContext);

  return (
    <Box sx={{ mt: 4 }}>
      <Paper
        elevation={2}
        sx={{
          p: 3,
          width: '500px',
          mx: 'auto',
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography component="h1" variant="h5">
            Enter your details
          </Typography>
          <TextField
            name="fullname"
            label="Full name"
            variant="standard"
            fullWidth
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
          />
          <TextField
            name="email"
            label="E-mail address"
            variant="standard"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            name="mobile"
            label="Phone number"
            variant="standard"
            fullWidth
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
          <TextField
            select
            name="country"
            label="Country of shipment"
            variant="standard"
            fullWidth
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            {countries.map(
              ({ value, label }) => <MenuItem key={label} value={value}>{value}</MenuItem>,
            )}
          </TextField>
          <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%',
          }}
          >
            <TextField
              name="city"
              label="City"
              variant="standard"
              fullWidth
              value={city}
              onChange={(event) => setCity(event.target.value)}
              sx={{ width: '40%' }}
            />
            <TextField
              name="zip"
              label="Postal / Zip code"
              variant="standard"
              fullWidth
              value={zip}
              onChange={(event) => setZip(event.target.value)}
              sx={{ width: '40%' }}
            />
          </Box>
          <TextField
            name="street"
            label="Street name"
            variant="standard"
            fullWidth
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
          <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%',
          }}
          >
            <TextField
              name="house"
              label="House number"
              variant="standard"
              fullWidth
              value={houseNr}
              onChange={(event) => setHouseNr(event.target.value)}
              sx={{ width: '40%' }}
            />
            <TextField
              name="apartment"
              label="Apartment number"
              variant="standard"
              fullWidth
              value={apartmentNr}
              onChange={(event) => setApartmentNr(event.target.value)}
              sx={{ width: '40%' }}
            />
          </Box>
          <FormGroup sx={{ alignSelf: 'flex-start' }}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={termsAndConditions}
                  // eslint-disable-next-line max-len
                  onChange={(_, newTermsAndConditions) => setTermsAndConditions(newTermsAndConditions)}
                />
              )}
              label="I agree with terms and conditions"
            />
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            fullWidth
          >
            Order now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderPage;
