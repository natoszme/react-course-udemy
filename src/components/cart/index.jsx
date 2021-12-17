import { Component } from "react";
import CartDetail from "./cartDetail";
import "./index.css";
import _ from "lodash";

class Cart extends Component {
  state = {
    cartDetailIsVisible: false
  };

  render() {
    const { cart } = this.props;
    const totalQuantity = _.sumBy(cart, "quantity");
    return <div>
      <span className="cart-bubble">
        {
          totalQuantity > 0 && <span className="bubble-alert"> {totalQuantity} </span>
        }
      </span>
      <button className="cart-button" onClick={this.toggleCartDetailVisibility}>
        Carrito 
      </button>
      {
        this.state.cartDetailIsVisible && <CartDetail cart={cart}/>
      }
    </div>;
  }

  toggleCartDetailVisibility = () => {
    this.setState({ cartDetailIsVisible: !this.state.cartDetailIsVisible })
  }
}

export default Cart;