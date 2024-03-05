import "../styles/CartBox.css";
import PlusMinus from "./PlusMinus";

const CartBox = ({ title, price, description, quantity, src }) => {
  return (
    <div className="cart-box-container">
      <div className="food-description">
        <div className="food">
          <img src={src} alt="" style={{ width: "100px", objectFit: "fill" }} />
        </div>
        <div className="description">
          <div className="title">
            <p style={{ fontSize: "18px", fontWeight: "600" }}>{title}</p>
            <p>{description}</p>
            <p>Medium | New Hard Tossed</p>
          </div>
        </div>
      </div>
      <div className="quantity-price-container">
        <div className="quantity">
          <PlusMinus quantity={quantity}></PlusMinus>
        </div>
        <div className="total-price">$ {quantity * Number(price)}</div>
      </div>
    </div>
  );
};

export default CartBox;
