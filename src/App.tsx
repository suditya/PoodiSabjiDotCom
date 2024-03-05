import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Cart from "./components/Cart";
import FoodCard from "./components/FoodCard";
import Navbar from "./components/Navbar";
import foodItems from "./data/foodItems.json";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Nova+Mono&family=Tektur&display=swap')
</style>;

interface IProps {
  id: string;
  src: string;
  description: string;
  title: string;
  price: string;
  addToCart: (item: IProps) => void;
  quantity: number;
}

const App = () => {
  const [cartItems, setCartItems] = useState([] as IProps[]); // cartItems

  const addToCart = (item: IProps) => {
    const updatedItems = [...cartItems];
    console.log(updatedItems, "before addToCart");
    const existingItemIndex = updatedItems.findIndex((it) => it.id === item.id);
    if (existingItemIndex !== -1) {
      // console.log("already exist", existingItemIndex);
      console.log(updatedItems[existingItemIndex].quantity);
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
      };
      updatedItems[existingItemIndex].quantity += 1;
      console.log(updatedItems[existingItemIndex].quantity);
    } else {
      console.log("did not find");
      updatedItems.push(item);
    }
    console.log(updatedItems, "after addToCart");
    setCartItems(updatedItems);
  };

  return (
    <div>
      <Navbar></Navbar>

      <Carousel />
      <div className="wrapper">
        <div className="food-contianer">
          {foodItems.map((foodItem) => (
            <FoodCard
              src={foodItem.src}
              description={foodItem.description}
              title={foodItem.title}
              price={"150"}
              quantity={foodItem.quantity}
              id={foodItem.id}
              addToCart={addToCart}
            />
          ))}
        </div>
        {/* <div className="right"> */}
        <div className="cart">
          <Cart items={cartItems} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
