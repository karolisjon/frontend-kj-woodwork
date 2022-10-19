import * as React from 'react';
import { Container } from '@mui/material';
import CartProducts from './components/cart-products';
import CartPriceTotal from './components/cart-price-total';
import CartHeader from './components/cart-header';
import CartNavigation from './components/cart-navigation';

const CartPage = () => (
  <Container maxWidth="md">
    <CartHeader />
    <CartProducts />
    <CartPriceTotal />
    <CartNavigation />
  </Container>
);
export default CartPage;
