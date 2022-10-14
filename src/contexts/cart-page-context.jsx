import * as React from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = React.useState([]);

  const getProductAmount = React.useCallback((product) => {
    const products = [...cartProducts, product];
    const productAmounts = products.map(({ amount }) => amount);
    console.log(productAmounts);

    const productsAmountSum = productAmounts.reduce(
      (prevAmount, currentAmount) => prevAmount + currentAmount,
      0,
    );

    console.log('productsAmountSum', productsAmountSum);
  }, [cartProducts]);

  const handleAddtoCart = React.useCallback((product) => {
    setCartProducts([...cartProducts, product]);

    if (cartProducts.find((x) => x.id === product.id)) {
      console.log('id is in the cart already');
      getProductAmount(product);
    }

    localStorage.setItem('productId', product.id);
  }, [cartProducts, getProductAmount]);

  const cartContextValue = React.useMemo(() => ({
    cartProducts,
    addToCart: handleAddtoCart,
    removeProduct: () => console.log('cartProducts', cartProducts),

  }), [cartProducts, handleAddtoCart]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
