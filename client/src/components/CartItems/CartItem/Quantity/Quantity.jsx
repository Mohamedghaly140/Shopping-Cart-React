import React from "react";
import Plus from "../../../Icons/Plus";
import Minus from "../../../Icons/Minus";
import classes from "./Quantity.module.scss";

const Quantity = ({ qty, id, onUpdate }) => {
  const increaseQtyHandler = id => {
    onUpdate(id, qty + 1);
  };

  const decreaseQtyHandler = id => {
    if (qty <= 1) return;
    onUpdate(id, qty - 1);
  };

  return (
    <div className={classes.quantity}>
      <button className={classes.btn} onClick={() => decreaseQtyHandler(id)}>
        <Minus />
      </button>
      <span>{qty}</span>
      <button className={classes.btn} onClick={() => increaseQtyHandler(id)}>
        <Plus />
      </button>
    </div>
  );
};

export default Quantity;
