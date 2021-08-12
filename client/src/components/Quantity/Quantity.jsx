import React, { Component } from "react";
import Plus from "../Icons/Plus";
import Minus from "../Icons/Minus";

import classes from "./Quantity.module.scss";

class Quantity extends Component {
  state = {
    qty: 1,
  };

  addQtyHandler = () => {
    this.setState(prevState => ({ qty: prevState.qty + 1 }));
  };

  minusQtyHandler = () => {
    const { qty } = this.state;

    if (qty <= 1) return;

    this.setState(prevState => ({ qty: prevState.qty - 1 }));
  };

  addToCartHandler = (product, qty) => {
    this.props.onAddToCart(product, qty);
  };

  render() {
    const { qty } = this.state;
    const { onAddToCart, product } = this.props;

    return (
      <div>
        <div className={classes.counter}>
          <button className={classes.btn} onClick={this.minusQtyHandler}>
            <Minus />
          </button>
          <span>{qty}</span>
          <button className={classes.btn} onClick={this.addQtyHandler}>
            <Plus />
          </button>
        </div>
        <div className={classes.actions}>
          <button
            disabled={qty === 0}
            className={classes.add_to_cart}
            onClick={() => onAddToCart(product, qty)}
          >
            Add To Cart
          </button>
          <button className={classes.pick__up}>Pickup From Store</button>
        </div>
      </div>
    );
  }
}

export default Quantity;
