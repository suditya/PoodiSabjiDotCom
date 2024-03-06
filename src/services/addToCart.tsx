import { useContext } from "react";
import { CartContext } from "../context/cart";
import { ICartProps } from "../utility/interfaces";

const cart = useContext(CartContext);
const cartItems = cart.cartItems;
const setCartItems = cart.setCartItems;
export const addToCart = (item: ICartProps) => {
  const updatedItems = [...cartItems];
  // console.log(updatedItems, "before addToCart");
  const existingItemIndex = updatedItems.findIndex((it) => it.id === item.id);
  if (existingItemIndex !== -1) {
    console.log("already exist", existingItemIndex);
    // console.log(updatedItems[existingItemIndex].quantity);
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
    };
    updatedItems[existingItemIndex].quantity += 1;
    // console.log(updatedItems[existingItemIndex].quantity);
  } else {
    // console.log("did not find");
    item.quantity += 1;
    console.log(item);
    updatedItems.push(item, "this is the first time item is added");
  }
  // console.log(updatedItems, "after addToCart");
  setCartItems(updatedItems);
};
