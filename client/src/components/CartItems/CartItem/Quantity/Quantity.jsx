import React, { Component } from "react";
import Minus from "../../../Icons/Minus";
import Plus from "../../../Icons/Plus";
import classes from "./Quantity.module.scss";

class Quantity extends Component {
  state = {
    qty: this.props.qty,
  };

  addQtyHandler = () => {
    this.setState(prevState => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  minusQtyHandler = () => {
    const { qty } = this.state;

    if (qty <= 1) return;

    this.setState(prevState => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    const { qty } = this.state;

    return (
      <div className={classes.quantity}>
        <button className={classes.btn} onClick={this.minusQtyHandler}>
          <Minus />
        </button>
        <span>{qty}</span>
        <button className={classes.btn} onClick={this.addQtyHandler}>
          <Plus />
        </button>
      </div>
    );
  }
}

export default Quantity;
