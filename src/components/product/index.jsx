import _ from "lodash";
import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css"

class Product extends Component {
  render() {
    const { product: { name, price, imageUrl }, addToCart } = this.props;
    return <Card style={{ width: '18rem' }} className="product">
      <Card.Img variant="top" />
      <Card.Body>
        <img src={imageUrl} className="product-image"/>
        <Card.Title>{_.upperFirst(name)}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={(() => addToCart({ name, price, imageUrl }))}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  }
}

export default Product;