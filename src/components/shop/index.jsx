import { Component } from "react";
import Navbar from "../navbar";
import ProductList from "../productList";
import _ from "lodash";

class Shop extends Component {
  state = {
    cart: []
  }

  render() {
    return <div>
      <Navbar cart={this.state.cart}/>
      <ProductList addToCart={this.addToCart}/>
    </div>
  }

  addToCart = product => {
    let cart = _.cloneDeep(this.state.cart);
    let productToUpdate = _.find(cart, { name: product.name });
    
    if (productToUpdate)
      productToUpdate.quantity++;
    else
      cart = _.concat(cart, { ...product, quantity: 1 });

    this.setState({ cart });
  }
}

export default Shop;