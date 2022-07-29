import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar/index';
import HomePage from './components/pages/home-page';
import AboutUs from './components/pages/about-us-page';
import Products from './components/pages/products-page';
import OrderPage from './components/pages/order-page';
import CartContext from './contexts/cart-page-context';
import CartPage from './components/pages/cart-page';

const App = () => (
  <BrowserRouter>
    <CartContext.Provider value={100}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </CartContext.Provider>
  </BrowserRouter>
);

export default App;
