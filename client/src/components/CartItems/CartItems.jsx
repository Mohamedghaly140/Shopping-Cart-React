import React from "react";
import CartItem from "./CartItem/CartItem";
import classes from "./CartItems.module.scss";

const CartItems = ({ cartItems }) => {
  return (
    <div
      className={classes.cartItems}
      style={{ gridTemplateRows: `repeat(${cartItems.length}, auto)` }}
    >
      {cartItems.map(item => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </div>
  );
};

export default CartItems;
