import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.precio * item.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
