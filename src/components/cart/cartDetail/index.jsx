import { Component } from "react";
import "./index.css";
import _ from "lodash";

class CartDetail extends Component {
  render() {
    const { cart } = this.props;
    return <div className="cart-detail">
      <ul>
      {
        _.map(cart, ({ name, quantity, price, imageUrl }, i) =>
          <li key={i} className="cart-product">
            <img alt={name} src={imageUrl} className="image" />
              {name} <span>{quantity}</span> <span>{price}</span>
          </li>
        )
      }
      </ul>
    </div>;
  }

  toggleCartDetail = () => {
    this.setState({ cartDetailVisible: !this.state.cartDetailVisible })
  }
}

export default CartDetail;