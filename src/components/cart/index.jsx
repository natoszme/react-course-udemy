import { Component } from "react";
import CartDetail from "./cartDetail";
import "./index.css";
import _ from "lodash";

class Cart extends Component {
  state = {
    cartDetailVisible: false
  };

  render() {
    const { cart } = this.props;
    const totalQuantity = _.sumBy(cart, "quantity");
    return <div>
      <span className="cart-bubble">
        {
          totalQuantity > 0 && <span className="bubbleAlert"> {totalQuantity} </span>
        }
      </span>
      <button className="cart-button" onClick={this.toggleCartDetail}>
        Carrito 
      </button>
      {
        this.state.cartDetailVisible && <CartDetail cart={cart}/>
      }
    </div>;
  }

  toggleCartDetail = () => {
    this.setState({ cartDetailVisible: !this.state.cartDetailVisible })
  }
}

export default Cart;