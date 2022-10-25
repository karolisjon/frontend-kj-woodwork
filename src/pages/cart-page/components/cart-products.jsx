import * as React from 'react';
import {
  Box,
  Divider,
} from '@mui/material';
import CartContext from '../../../contexts/cart-page-context';
import ProductService from '../../../services/product-service';
import CartProductCard from './cart-product-card';

const CartProducts = ({ amount }) => {
  const { removeFromCart } = React.useContext(CartContext);
  const [cartProducts, setCartProducts] = React.useState([]);

  const productsObj = localStorage.getItem('cartProductsObj');

  React.useEffect(() => {
    (async () => {
      const retrievedProducts = JSON.parse(productsObj);

      if (productsObj) {
        const values = await Promise.all(
          Object.values(retrievedProducts).map((x) => ProductService.fetchProductById(x.id)),
        );
        setCartProducts(values);
      }
    }
    )();
  }, [productsObj]);

  return (
    <>
      <Divider variant="fullWidth" />
      <Box>
        {
          cartProducts.map(({
            category,
            id,
            img,
            price,
            title,
            woodType,
          }) => (
            <Box key={id}>
              <CartProductCard
                amount={amount}
                category={category.title}
                img={img}
                price={price}
                title={title}
                woodType={woodType.title}
                removeFromCart={() => removeFromCart(id)}
              />
              <Divider />
            </Box>
          ))
        }
      </Box>
    </>
  );
};

export default CartProducts;
