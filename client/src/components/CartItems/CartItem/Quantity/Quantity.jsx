import React from "react";
import Plus from "../../../Icons/Plus";
import Minus from "../../../Icons/Minus";
import classes from "./Quantity.module.scss";

const Quantity = ({ qty, item, onUpdateQuantity }) => {
  return (
    <div className={classes.quantity}>
      <button
        className={classes.btn}
        onClick={() => onUpdateQuantity(item, "-")}
      >
        <Minus />
      </button>
      <span>{qty}</span>
      <button
        className={classes.btn}
        onClick={() => onUpdateQuantity(item, "+")}
      >
        <Plus />
      </button>
    </div>
  );
};

export default Quantity;
