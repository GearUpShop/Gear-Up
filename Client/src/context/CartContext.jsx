import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const [total, setTotal] = useState(0);

  console.log(cartItems);
  
  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
    // Calculate and update total based on new cart items
    const newTotal = newCartItems.reduce(
      (acc, item) => acc + parseFloat(item.price) * itemQuantities[item.id],
      0
    );
    setTotal(newTotal.toFixed(2));
  };

  const updateItemQuantities = (newItemQuantities) => {
    setItemQuantities(newItemQuantities);
    // Calculate and update total based on new item quantities
    const newTotal = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price) * newItemQuantities[item.id],
      0
    );
    setTotal(newTotal.toFixed(2));
  };

  return (
    <CartContext.Provider value={{ cartItems,setCartItems, itemQuantities,setItemQuantities, total, setTotal, updateCart, updateItemQuantities }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
