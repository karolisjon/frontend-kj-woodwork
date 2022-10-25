import * as React from 'react';
import { Box } from '@mui/material';
import CartProductCardImage from './cart-product-card-components/cart-product-card-image';
import CartProductCardTitle from './cart-product-card-components/cart-product-card-title';
import CartProductCardCategory from './cart-product-card-components/cart-product-card-category';
import CartProductCartWoodType from './cart-product-card-components/cart-product-card-wood-type';
import CartProductCardAmount from './cart-product-card-components/cart-product-card-amount';
import CartProductCardPrice from './cart-product-card-components/cart-product-card-price';
import CartProductCardRemoveButton from './cart-product-card-components/cart-product-card-remove-button';
import ContainerMain from './cart-product-card-containers/container-main';
import ContainerPrice from './cart-product-card-containers/container-price';
import ContainerAmount from './cart-product-card-containers/container-amount';
import ContainerAmountPrice from './cart-product-card-containers/container-amount-price';
import ContainerAmountPriceRemove from './cart-product-card-containers/container-amount-price-remove';

const CartProductCard = ({
  count,
  category,
  img,
  price,
  title,
  woodType,
  removeFromCart,
}) => (
  <ContainerMain>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
      <Box sx={{ height: 220, width: { xs: '100%', sm: '220px' } }}>
        <CartProductCardImage img={img} />
      </Box>
      <Box sx={{ textAlign: 'left', ml: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 0 } }}>
        <CartProductCardTitle title={title} />
        <CartProductCardCategory category={category} />
        <CartProductCartWoodType woodType={woodType} />
      </Box>
    </Box>
    <ContainerAmountPriceRemove>
      <ContainerAmountPrice>
        <ContainerAmount>
          <CartProductCardAmount amount={count} />
        </ContainerAmount>
        <ContainerPrice>
          <CartProductCardPrice price={price} />
        </ContainerPrice>
      </ContainerAmountPrice>
      <CartProductCardRemoveButton onClick={removeFromCart} />
    </ContainerAmountPriceRemove>
  </ContainerMain>
);

export default CartProductCard;
