import { IPlusMinus } from "../utility/interfaces";

const PlusMinus = (props: IPlusMinus) => {
  return (
    <div className="plus-minus-container">
      <button className="plus-minus-buttons">➖</button>
      <span className="quantity">{props.quantity}</span>
      <button className="plus-minus-buttons">➕</button>
    </div>
  );
};

export default PlusMinus;
