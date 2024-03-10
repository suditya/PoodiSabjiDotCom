// PlaceOrder.jsx
import { useContext, useState } from "react";
import OrderConfirmation from "./OrderConfirmation";
import { CartContext } from "../context/cart";
import "../styles/PlaceOrder.css"; // Import the CSS file
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cart = useContext(CartContext);

  const handlePlaceOrder = () => {
    // Perform order placement logic (API calls, updates, etc.)

    // Set the orderPlaced state to true when the order is successfully placed.
    setOrderPlaced(true);
    // setTimeout(() => {
    //   // cart.setCartItems([]);
    //   // navigate("/");
    // }, 2000);
  };

  const getTotalPrice = () => {
    let sum = 0;
    for (const item of cart.cartItems) {
      sum += item.price * item.quantity;
    }
    return sum;
  };

  return (
    <>
      <Navbar />
      <div className="place-order-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total: ${getTotalPrice()}</p>
          <button onClick={() => navigate("/payment")}>Place Order</button>
        </div>
      </div>
      {orderPlaced && <OrderConfirmation />}
    </>
  );
};

export default PlaceOrder;
