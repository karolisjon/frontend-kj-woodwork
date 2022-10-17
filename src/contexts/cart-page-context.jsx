import * as React from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = React.useState([]);

  const getAmountTotal = React.useCallback((product) => {
    const products = [...cartProducts, product];
    const productAmounts = products.map(({ amount }) => amount);

    const productsAmountTotal = productAmounts.reduce(
      (prevAmount, currentAmount) => prevAmount + currentAmount,
      0,
    );

    console.log('productsAmountSum', productsAmountTotal);
  }, [cartProducts]);

  const handleAddtoCart = React.useCallback((product) => {
    setCartProducts([...cartProducts, product]);

    localStorage.setItem('cartProductsObj', JSON.stringify([...cartProducts, product]));

    getAmountTotal(product);
  }, [cartProducts, getAmountTotal]);

  const cartContextValue = React.useMemo(() => ({
    cartProducts,
    addToCart: handleAddtoCart,

  }), [cartProducts, handleAddtoCart]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
