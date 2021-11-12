import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css"
import _ from "lodash";

const products = [
  {
    name: "tomate",
    price: 10,
    imageUrl: "https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Corona-1.jpg"
  },
  {
    name: "lechuga",
    price: 15,
    imageUrl: "https://okdiario.com/img/recetas/2016/09/18/lechuga-boston.jpg"
  }
];

class Navbar extends Component {
  render() {
    return <div className="product-list">
      {_.map(products, this.product)}
    </div>;
  }

  product = ({ name, price, imageUrl }, i) => {
    return <Card style={{ width: '18rem' }} className="product">
      <Card.Img variant="top" />
      <Card.Body>
        <img src={imageUrl} className="product-image"/>
        <Card.Title>{_.upperFirst(name)}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={(() => this.props.addToCart({ name, price }))}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  }
}

export default Navbar;