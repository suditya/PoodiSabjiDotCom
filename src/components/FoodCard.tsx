import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface IProps {
  id: string;
  price: string;
  src: string;
  description: string;
  title: string;
  addToCart: (item: IProps) => void;
  quantity: number;
}

function FoodCard(props: IProps) {
  function handleAddToCart() {
    console.log(props);
    props.addToCart(props);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        style={{ height: "250px", objectFit: "cover" }}
        variant="top"
        src={props.src}
      />
      <Card.Body>
        <Card.Title>
          {props.title} ₹{props.price ?? "0"}
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart 
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
