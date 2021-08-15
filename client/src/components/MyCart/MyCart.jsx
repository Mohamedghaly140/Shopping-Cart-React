import React, { Component, Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import CartItem from "../CartItem/CartItem";
import FlexBox from "../UI/FlexBox/FlexBox";
import classes from "./MyCart.module.scss";

export class MyCart extends Component {
  render() {
    const { openCart, toggleCart, cartItems, onRemoveFromCart } = this.props;

    const total = cartItems
      .reduce(
        (prevValue, curItem) => prevValue + curItem.qty * curItem.price,
        0
      )
      .toFixed(3);

    return (
      <Fragment>
        <Backdrop onToggle={toggleCart} open={openCart} />
        <div
          className={`${classes.my__cart} ${
            openCart ? classes.open : classes.close
          }`}
        >
          <div className="d-flex align-items-center justify-content-end mb-2">
            <button className={classes.close} onClick={toggleCart}>
              <img
                className="close img-fluid"
                src="/images/close.svg"
                alt="close"
              />
            </button>
          </div>
          <h2 className={`${classes.title} text-center mb-3`}>My Cart</h2>
          <p className={classes.summary}>Cart Summary</p>
          <FlexBox
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {cartItems.length === 0 ? (
              <p className="my-4">You have no items yet..</p>
            ) : (
              cartItems.map(item => (
                <CartItem
                  key={item.id}
                  product={item}
                  onRemoveFromCart={onRemoveFromCart}
                />
              ))
            )}
          </FlexBox>
          <p className={classes.total}>Total: {total} L.E</p>
          <FlexBox
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <button className={classes.review}>Review Cart</button>
            <button className={classes.checkout}>Complete Checkout</button>
          </FlexBox>
        </div>
      </Fragment>
    );
  }
}

export default MyCart;
