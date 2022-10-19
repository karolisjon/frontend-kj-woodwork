import * as React from 'react';
import {
  Box,
  Divider,
} from '@mui/material';
// import CartContext from '../../../contexts/cart-page-context';
import ProductService from '../../../services/product-service';
import CartProductCard from './cart-product-card';

const CartProducts = () => {
  // const { cartProducts: cartProductsData } = React.useContext(CartContext);
  const [cartProducts, setCartProducts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const productsObj = localStorage.getItem('cartProductsObj');
      const retrievedProducts = JSON.parse(productsObj);

      if (productsObj) {
        const values = await Promise.all(
          Object.values(retrievedProducts).map((x) => ProductService.fetchProductById(x.id)),
        );
        setCartProducts(values);
      }
    }
    )();
  }, []);

  console.log('cartProducts', cartProducts);

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
            <>
              <CartProductCard
                category={category.title}
                key={id.toString()}
                img={img}
                price={price}
                title={title}
                woodType={woodType.title}
              />
              <Divider />
            </>
          ))
        }
      </Box>
      {/* <pre>
        {JSON.stringify(cartProductsData, null, 4)}
      </pre> */}
    </>
  );
};

export default CartProducts;
