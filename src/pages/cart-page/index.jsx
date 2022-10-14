import * as React from 'react';
import { Container } from '@mui/material';
import CartProduct from './components/cart-product-details';
import CartPriceTotal from './components/cart-price-total';
import CartHeader from './components/cart-header';
import CartNavigation from './components/cart-navigation';

const CartPage = () => (
  <Container maxWidth="md">
    <CartHeader />
    <CartProduct />
    <CartPriceTotal />
    <CartNavigation />
  </Container>
);
export default CartPage;
