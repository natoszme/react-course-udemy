import { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./index.css";
import _ from "lodash";

class Cart extends Component {
  render() {
    const totalQuantity = _.sumBy(this.props.cart, "quantity");
    return <div>
      <span className="cart-bubble">
        {
          totalQuantity > 0 && <span className="bubbleAlert"> {totalQuantity} </span>
        }
      </span>
      <button className="cart-button">
        Carrito 
      </button>
    </div>;
  }
}

export default Cart;