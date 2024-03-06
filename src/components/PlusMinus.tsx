import { useContext } from "react";
import { CartContext } from "../context/cart";

const PlusMinus = (props) => {
  const cart = useContext(CartContext);

  const addToCart = () => {
    const item = props;
    const updatedItems = [...cart.cartItems];
    const existingItemIndex = updatedItems.findIndex((it) => it.id === item.id);

    if (existingItemIndex !== -1) {
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
      };
      updatedItems[existingItemIndex].quantity += 1;
    } else {
      updatedItems.push(item);
    }

    cart.setCartItems(updatedItems);
  };

  const incrementQuantity = () => {
    const updatedCartItems = cart.cartItems.map((item) => {
      if (item.id === props.id) {
        item.quantity += 1;
      }
      return item;
    });

    cart.setCartItems(updatedCartItems);
  };

  const decrementQuantity = () => {
    const updatedCartItems = cart.cartItems.map((item) => {
      if (item.id === props.id && item.quantity > 0) {
        item.quantity -= 1;
      }
      return item;
    });

    cart.setCartItems(updatedCartItems);
  };

  const getQuantityFromCartItems = () => {
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
