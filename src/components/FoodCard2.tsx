import { ICartProps } from "../utility/interfaces";
import PlusMinus from "./PlusMinus";

const FoodCard2 = (props: ICartProps) => {
  return (
    <div
      className="food-card"
      style={{
        boxShadow: "9px 6px 17px 4px #3d3c3b33",
      }}
    >
      <img src={props.src} alt={props.title} className="food-image" />
      <div className="food-details">
        <h3 className="food-title">{props.title}</h3>
        <p className="food-price">Price: ${props.price}</p>
        <div className="food-description">
          <p>{props.description}</p>
        </div>
        <PlusMinus
          src={props.src}
          id={props.id}
          title={props.title}
          price={props.price}
          description={props.description}
          quantity={props.quantity}
        />
      </div>
    </div>
  );
};

export default FoodCard2;
