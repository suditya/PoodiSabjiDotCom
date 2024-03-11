import { useNavigate } from "react-router-dom";
import foodItems from "../data/foodItems.json";
import Carousel from "./Carousel";
import Cart from "./Cart";
import FoodCard2 from "./FoodCard2";
import Navbar from "./Navbar";

const Home = () => {
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
