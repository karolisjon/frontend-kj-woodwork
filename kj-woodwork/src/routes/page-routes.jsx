import * as React from 'react';
import { Route, Routes } from 'react-router-dom'

import HomePage from '../components/pages/home-page';
import AboutUs from '../components/pages/about-us-page';
import ProductCatalog from '../components/pages/product-catalog-page';
import OrderPage from '../components/pages/order-page';
import ProductInformation from '../components/pages/product-page';
import CartPage from '../components/pages/cart-page';
import MainLayout from '../layouts/main-layout';
import LoginPage from '../components/pages/login-page';
import RegisterPage from '../components/pages/register-page';
import AuthLayout from '../layouts/auth-layout';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/product-catalog' element={<ProductCatalog />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/product/:id' element={<ProductInformation />} />

        <Route path='auth/' element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>

        <Route path='/cart' element={<CartPage />} />
      </Route>
    </Routes>
  )
}

export default PageRoutes;
