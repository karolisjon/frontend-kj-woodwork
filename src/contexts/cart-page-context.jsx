import * as React from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = React.useState([]);

  const handleAddtoCart = React.useCallback((product) => {
    setCartProducts([...cartProducts, product]);
    localStorage.setItem('productId', product.id);
  }, [cartProducts]);

  const cartContextValue = React.useMemo(() => ({
    cartProducts,
    addToCart: handleAddtoCart,

  }), [cartProducts, handleAddtoCart]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
