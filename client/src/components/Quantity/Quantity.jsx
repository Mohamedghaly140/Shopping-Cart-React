import { Component } from "react";
import classes from "./Quantity.module.scss";
import Plus from "../Icons/Plus";
import Minus from "../Icons/Minus";

class Quantity extends Component {
  state = {
    qty: 1,
  };

  addQtyHandler = () => {
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  minusQtyHandler = () => {
    if (this.state.qty <= 1) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    const { qty } = this.state;
    const { addToCart, product } = this.props;

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
            onClick={() => addToCart({ ...product, qty })}
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
