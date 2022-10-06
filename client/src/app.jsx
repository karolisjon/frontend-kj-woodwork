import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/cart-page-context';
import PageRoutes from './routes/page-routes';

const App = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <BrowserRouter>
      <CartProvider>
        <PageRoutes />
      </CartProvider>
    </BrowserRouter>
  </LocalizationProvider>
);

export default App;
