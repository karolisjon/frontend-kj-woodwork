import * as React from 'react';

const ProductContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const productContextValue = React.useMemo(() => ({
    cartItems,
    addToCart: (item) => { setCartItems(item); },

  }), [cartItems]);

  return (
    <ProductContext.Provider value={productContextValue}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
