import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props: unknown) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
