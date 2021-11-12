import { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./index.css";
import _ from "lodash";

class ShopNavbar extends Component {
  render() {
    const totalQuantity = _.sumBy(this.props.cart, "quantity");
    return <Navbar expand="lg">
      <Navbar.Brand>Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Button variant="outline-success">Carrito {totalQuantity > 0 && <span >{totalQuantity}</span> }</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}

export default ShopNavbar;