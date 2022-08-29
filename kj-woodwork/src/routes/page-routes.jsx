import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home-page';
import AboutUs from '../pages/about-us-page';
import ProductCatalog from '../pages/product-catalog-page';
import OrderPage from '../pages/order-page';
import ProductInformation from '../pages/product-page';
import CartPage from '../pages/cart-page';
import MainLayout from '../layouts/main-layout';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';
import AuthLayout from '../layouts/auth-layout';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/product-catalog" element={<ProductCatalog />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/product/:id" element={<ProductInformation />} />

      <Route path="auth/" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="/cart/:id" element={<CartPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
