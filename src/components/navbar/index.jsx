import { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Cart from "../cart";
import "./index.css";
import _ from "lodash";

class ShopNavbar extends Component {
  render() {
    return <Navbar>
      <h2>Shop</h2>
      <Cart cart={this.props.cart}/>
    </Navbar>;
  }
}

export default ShopNavbar;