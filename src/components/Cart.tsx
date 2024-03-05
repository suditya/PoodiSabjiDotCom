import { ICartItems } from "../utility/interfaces";
import CartBox from "./CartBox";





const Cart = (props: ICartItems) => {
  return (
    <>
      {props.items.map((item) => (
        <CartBox {...item} />
      ))}
    </>
  );
};

export default Cart;
