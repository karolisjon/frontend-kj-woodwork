import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter } from 'react-router-dom';
import ProductContext from './contexts/product-page-context';
import PageRoutes from './routes/page-routes';

const App = () => {
  const [product, setProduct] = React.useState([]);

  const productContextValue = React.useMemo(() => ({
    openProduct: (item) => setProduct([item]),
    product,
  }), [product]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <ProductContext.Provider value={productContextValue}>
          <PageRoutes />
        </ProductContext.Provider>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
