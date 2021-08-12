import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = ({ product, onRemoveFromCart }) => {
  return (
    <div className={classes.CartItem}>
      <div className={classes.imageContainer}>
        <img
          alt={product.title}
          className="img-fluid"
          src={product.imageUrl.small}
        />
      </div>
      <div>
        <p className={classes.description}>{product.description}</p>
        <div className={classes.info__container}>
          <div>
            <p className={classes.quantity}>Quantity: {product.qty}</p>
            <p className={classes.price}>Price: {product.price}</p>
          </div>
          <button
            className={classes.remove}
            onClick={() => onRemoveFromCart(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
