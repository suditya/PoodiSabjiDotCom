import { useNavigate } from "react-router-dom";
import foodItems from "../data/foodItems.json";
import Carousel from "./Carousel";
import Cart from "./Cart";
import FoodCard2 from "./FoodCard2";
import Navbar from "./Navbar";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import { ICartProps } from "../utility/interfaces";

const Home = () => {
  const cart = useContext(CartContext);
  const cartItems = (cart.cartItems ?? []) as ICartProps[];
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>

      <Carousel />
      <div className="wrapper">
        <div className="food-container">
          {foodItems.map((foodItem) => (
            <FoodCard2
              src={foodItem.src}
              description={foodItem.description}
              title={foodItem.title}
              price={150}
              quantity={foodItem.quantity}
              id={foodItem.id}
            />
          ))}
        </div>
        {/* <div className="right"> */}
        <div className="cart">
          <Cart />
          <hr />
          {/* </div> */}
        </div>
        {cartItems.length > 0 && (
          <button
            style={{ transition: "all 0.5s ease-out" }}
            className="go-to-checkout"
            onClick={() => navigate("/checkout")}
          >
            Go To Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
