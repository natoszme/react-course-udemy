import { Component } from "react";
import _ from "lodash";

const products = [
  {
    name: "tomatoe",
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
    console.log({ props: this.props })
    return <div>
      {_.map(products, this.product)}
    </div>;
  }

  product = ({ name, price, imageUrl }, i) => {
    return <div key={i}>
      <img src={imageUrl} />
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={(() => this.props.addToCart({ name, price }))}>
        Agregar al carrito
      </button>
    </div>;
  }
}

export default Navbar;