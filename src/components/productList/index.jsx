import { Component } from "react";
import Product from "../product";
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

class ProductList extends Component {
  render() {
    return <div className="product-list">
      {_.map(products, product =>
        <Product
          addToCart={this.props.addToCart}
          key={product.name}
          product={product}
        />
      )}
    </div>;
  }
}

export default ProductList;