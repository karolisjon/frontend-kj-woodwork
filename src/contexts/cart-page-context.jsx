import * as React from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = React.useState([]);

  const getCartProductsAmount = React.useCallback((product) => {
    const products = [...cartProducts, product];
    const productAmounts = products.map(({ amount }) => amount);

    const cartProductsAmount = productAmounts.reduce(
      (prevAmount, currentAmount) => prevAmount + currentAmount,
      0,
    );

    localStorage.setItem('cartProductsAmount', JSON.stringify(cartProductsAmount));
  }, [cartProducts]);

  const handleAddtoCart = React.useCallback((product) => {
    setCartProducts([...cartProducts, product]);

    localStorage.setItem('cartProductsObj', JSON.stringify([...cartProducts, product]));

    getCartProductsAmount(product);
  }, [cartProducts, getCartProductsAmount]);

  const removeFromCart = React.useCallback((id) => {
    const filteredProducts = cartProducts.filter((x) => x.id !== id);
    localStorage.removeItem('cartProductsObj');
    localStorage.setItem('cartProductsObj', JSON.stringify(filteredProducts));

    const filteredProductsAmounts = filteredProducts.map(({ amount }) => amount);
    const cartProductAmount = filteredProductsAmounts.reduce((sum, amount) => amount + sum, 0);

    localStorage.removeItem('cartProductsAmount');
    localStorage.setItem('cartProductAmount', JSON.stringify(cartProductAmount));

    setCartProducts(filteredProducts);
  }, [cartProducts]);

  const cartContextValue = React.useMemo(() => ({
    cartProducts,
    addToCart: handleAddtoCart,
    removeFromCart,
    getCartProductsAmount,

  }), [cartProducts, handleAddtoCart, removeFromCart, getCartProductsAmount]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
