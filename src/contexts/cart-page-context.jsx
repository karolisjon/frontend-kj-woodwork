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

    localStorage.setItem('productsAmountTotal', JSON.stringify(productsAmountTotal));

    return productsAmountTotal;
  }, [cartProducts]);

  const handleAddtoCart = React.useCallback((product) => {
    setCartProducts([...cartProducts, product]);

    localStorage.setItem('cartProductsObj', JSON.stringify([...cartProducts, product]));

    getAmountTotal(product);
  }, [cartProducts, getAmountTotal]);

  const removeFromCart = React.useCallback((id) => {
    const filteredItems = cartProducts.filter((x) => x.id !== id);

    localStorage.removeItem('cartProductsObj');
    localStorage.setItem('cartProductsObj', JSON.stringify(filteredItems));

    // localStorage.removeItem('productsAmountTotal');
    // localStorage.setItem('productsAmountTotal', JSON.stringify(productsAmountTotal));

    setCartProducts(filteredItems);
  }, [cartProducts]);

  const cartContextValue = React.useMemo(() => ({
    cartProducts,
    addToCart: handleAddtoCart,
    removeFromCart,

  }), [cartProducts, handleAddtoCart, removeFromCart]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
