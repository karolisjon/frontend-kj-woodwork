import * as React from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = React.useState([]);

  const cartContextValue = React.useMemo(() => ({
    productsInCart,
    addToCart: (item) => { setProductsInCart(item); },

  }), [productsInCart]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
