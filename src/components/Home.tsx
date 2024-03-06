import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart";
import foodItems from "../data/foodItems.json";
import { ICartProps } from "../utility/interfaces";
import Carousel from "./Carousel";
import Cart from "./Cart";
import FoodCard2 from "./FoodCard2";
import Navbar from "./Navbar";

const Home = () => {
  const cart = useContext(CartContext);
  const cartItems = cart.cartItems;
  const setCartItems = cart.setCartItems;
  const addToCart = (item: ICartProps) => {
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
              addToCart={addToCart}
            />
          ))}
        </div>
        {/* <div className="right"> */}
        <div className="cart">
          <Cart items={cartItems} />
          <hr />
          {/* </div> */}
        </div>
        <button
          className="go-to-checkout"
          onClick={() => navigate("/checkout")}
        >
          Go To Checkout
        </button>
      </div>
    </div>
  );
};

export default Home;
