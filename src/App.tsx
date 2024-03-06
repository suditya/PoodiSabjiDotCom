import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Cart from "./components/Cart";
import FoodCard from "./components/FoodCard";
import Navbar from "./components/Navbar";
import { CartContext } from "./context/cart";
import foodItems from "./data/foodItems.json";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CarouselPractice from "./components/CarouselPractice";
import PlaceOrder from "./components/PlaceOrder";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Nova+Mono&family=Tektur&display=swap')
</style>;

interface IProps {
  id: string;
  src: string;
  description: string;
  title: string;
  price: number;
  addToCart: (item: IProps) => void;
  quantity: number;
}

const App = () => {
  // // const [cartItems, setCartItems] = useState([] as IProps[]); // cartItems
  // const cart = useContext(CartContext);
  // const cartItems = cart.cartItems;
  // const setCartItems = cart.setCartItems;
  // const addToCart = (item: IProps) => {
  //   const updatedItems = [...cartItems];
  //   // console.log(updatedItems, "before addToCart");
  //   const existingItemIndex = updatedItems.findIndex((it) => it.id === item.id);
  //   if (existingItemIndex !== -1) {
  //     console.log("already exist", existingItemIndex);
  //     // console.log(updatedItems[existingItemIndex].quantity);
  //     updatedItems[existingItemIndex] = {
  //       ...updatedItems[existingItemIndex],
  //     };
  //     updatedItems[existingItemIndex].quantity += 1;
  //     // console.log(updatedItems[existingItemIndex].quantity);
  //   } else {
  //     // console.log("did not find");
  //     item.quantity += 1;
  //     console.log(item);
  //     updatedItems.push(item, "this is the first time item is added");
  //   }
  //   // console.log(updatedItems, "after addToCart");
  //   setCartItems(updatedItems);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/practice" element={<CarouselPractice />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        {/* <Route ={<Home />} /> */}
        {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
