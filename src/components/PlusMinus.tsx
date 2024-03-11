import { useContext, useEffect } from "react";
import { CartContext } from "../context/cart";
import axios from "axios";
import { BACKEND_DEV_URL, isNullOrUndefined } from "../utility/common";
import { getEmailId, isLoggedIn } from "../services/users";
import { ICartProps } from "../utility/interfaces";

const PlusMinus = (props: ICartProps) => {
  const cart = useContext(CartContext);
  const cartItems = cart.cartItems;
  const email = localStorage.getItem("LoggedInEmail");
  useEffect(() => {
    if (isLoggedIn() && cartItems && cartItems.length > 0) {
      console.log("sending request to backend", cartItems);
      axios
        .post(BACKEND_DEV_URL + "/add-to-cart", {
          cartItems,
          email,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("backend error: " + err);
        });
      // console.log(response, "after updating cart");
    }
  }, [cart.cartItems, cartItems, email]);

  const addToCart = async () => {
    const item = props;
    const updatedItems = [...(cart.cartItems ?? [])];
    let existingItemIndex = -1;
    if (updatedItems.length > 0) {
      existingItemIndex = updatedItems.findIndex((it) => it.id === item.id);
    }
    if (existingItemIndex !== -1) {
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
      };
      updatedItems[existingItemIndex].quantity += 1;
    } else {
      updatedItems.push(item);
    }
    cart.setCartItems(updatedItems);
    console.log(cartItems);
  };

  const incrementQuantity = () => {
    const updatedCartItems = cart.cartItems.map((item) => {
      if (item.id === props.id) {
        item.quantity += 1;
      }
      return item;
    });

    cart.setCartItems(updatedCartItems);
    console.log(cartItems);
  };

  const decrementQuantity = () => {
    if (
      cart.cartItems === undefined ||
      cart.cartItems.length === 0 ||
      cart.cartItems === null
    ) {
      cart.cartItems = [];
    }
    const updatedCartItems =
      cart.cartItems.map((item) => {
        if (item.id === props.id) {
          item.quantity -= 1;
        }
        return item;
      }) ?? [];

    cart.setCartItems(updatedCartItems);
    console.log(cartItems);
  };

  const getQuantityFromCartItems = () => {
    if (
      isNullOrUndefined(cart) ||
      isNullOrUndefined(cart.cartItems) ||
      cart.cartItems.length == 0
    )
      return 0;
    const item = cart.cartItems.find((it) => it.id === props.id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="plus-minus-container" style={{ display: "flex" }}>
      {getQuantityFromCartItems() > 0 ? (
        <>
          <button
            // style={{ backgroundColor: "white", color: "black" }}
            className="plus-minus-buttons"
            onClick={() => decrementQuantity()}
          >
            ➖
          </button>
          <button className="quantity">{getQuantityFromCartItems()}</button>
          <button
            className="plus-minus-buttons"
            onClick={() => incrementQuantity()}
          >
            ➕
          </button>
        </>
      ) : (
        <button onClick={() => addToCart()}>Add To Cart</button>
      )}
    </div>
  );
};

export default PlusMinus;
