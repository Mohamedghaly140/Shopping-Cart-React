import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = ({ product, currency, onRemove }) => {
  return (
    <div className={classes.CartItem}>
      <div className={classes.imageContainer}>
        <img
          alt={product.title}
          className="img-fluid"
          src={product.imageUrl.small}
        />
      </div>
      <div className={classes.productDetails}>
        <p className={classes.description}>
          {product.title || product.description}
        </p>
        <div className={classes.info__container}>
          <div>
            <p className={classes.quantity}>Quantity: {product.qty}</p>
            <p className={classes.price}>
              {product.price}{" "}
              <span className={classes.currency}>{currency}</span>
            </p>
          </div>
          <button
            className={classes.remove}
            onClick={() => onRemove(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  currency: "L.E",
};

export default CartItem;
