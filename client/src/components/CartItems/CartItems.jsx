import React from "react";
import CartItem from "./CartItem/CartItem";
import EmptyFallback from "../UI/EmptyFallback/EmptyFallback";

import classes from "./CartItems.module.scss";

const CartItems = ({ cartItems, onUpdateQuantity, onRemoveFromCart }) => {
  return (
    <div
      className={classes.cartItems}
      style={{ gridTemplateRows: `repeat(${cartItems.length}, auto)` }}
    >
      {!cartItems.length ? (
        <EmptyFallback centerY>You have no items yet..</EmptyFallback>
      ) : (
        cartItems.map(item => (
          <CartItem
            key={item.id}
            cartItem={item}
            onUpdate={onUpdateQuantity}
            onRemove={onRemoveFromCart}
          />
        ))
      )}
    </div>
  );
};

export default CartItems;
