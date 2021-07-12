import { Component } from "react";
import classes from "./CartItem.module.scss";

export class CartItem extends Component {
  render() {
    const { description, qty, imageUrl, price, title } = this.props.product;

    return (
      <div className={classes.CartItem}>
        <div className={classes.imageContainer}>
          <img className="img-fluid" alt={title} src={imageUrl.small} />
        </div>
        <div>
          <p className={classes.description}>{description}</p>
          <div className={classes.info__container}>
            <div>
              <p className={classes.quantity}>Quantity: {qty}</p>
              <p className={classes.price}>Price: {price}</p>
            </div>
            <button className={classes.remove}>Remove</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
