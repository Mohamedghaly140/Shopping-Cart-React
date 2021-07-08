import { Component, Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import CartItem from "../CartItem/CartItem";
import classes from "./MyCart.module.scss";

export class MyCart extends Component {
  render() {
    const { openCart, toggleCart, cart } = this.props;

    return (
      <Fragment>
        <Backdrop onToggle={toggleCart} open={openCart} />
        <div
          className={`${classes.my__cart} ${
            openCart ? classes.open : classes.close
          }`}
        >
          <div className="d-flex align-items-center justify-content-end mb-2">
            <button onClick={toggleCart}>
              <img
                className="close img-fluid"
                src="/images/close.svg"
                alt="close"
              />
            </button>
          </div>
          <h2 className={`${classes.title} text-center mb-3`}>My Cart</h2>
          <p className={classes.summary}>Cart Summary</p>
          <div className="d-flex align-items-center justify-content-center flex-column">
            {cart.length === 0 ? (
              <p className="my-4">You have no items yet..</p>
            ) : (
              cart.map(item => <CartItem key={item.id} product={item} />)
            )}
          </div>
          <p className={classes.total}>
            Total:{" "}
            {cart
              .reduce(
                (prevValue, curValue) =>
                  prevValue + curValue.qty * curValue.price,
                0
              )
              .toFixed(3)}{" "}
            L.E
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <button className={classes.review}>Review Cart</button>
            <button className={classes.checkout}>Complete Checkout</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MyCart;
