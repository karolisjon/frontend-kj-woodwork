import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar/index';
import HomePage from './components/pages/home-page';
import AboutUs from './components/pages/about-us-page';
import ProductCatalog from './components/pages/product-catalog-page';
import OrderPage from './components/pages/order-page';
import ProductInformation from './components/pages/product-page';
import CartPage from './components/pages/cart-page';
import ProductContext from './contexts/cart-page-context';

const App = () => {
  const [product, setProduct] = React.useState([]);

  const productContextValue = React.useMemo(() => ({
    openProduct: (item) => setProduct([item]),
    product,
  }), [product]);

  return (
    <BrowserRouter>
      <ProductContext.Provider value={productContextValue}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/product-catalog' element={<ProductCatalog />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/product/:id' element={<ProductInformation />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
