import React from "react";
import Quantity from "../../CartItems/CartItem/Quantity/Quantity";
import classes from "./CheckoutItem.module.scss";

const CheckoutItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className={classes.checkoutItem}>
      <div className={classes.image}>
        <img src={item.imageUrl.small} alt={item.title} />
      </div>
      <div className={classes.details}>
        <h6 className={classes.title}>{item.title || item.description}</h6>
        <p className={classes.price}>{item.price}</p>
        <div className={classes.actions}>
          <Quantity
            item={item}
            qty={item.qty}
            onUpdateQuantity={onUpdateQuantity}
          />
          <button className={classes.remove} onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
