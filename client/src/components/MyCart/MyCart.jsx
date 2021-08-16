import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import FlexBox from "../UI/FlexBox/FlexBox";
import Backdrop from "../Backdrop/Backdrop";
import EmptyFallback from "../UI/EmptyFallback/EmptyFallback";

import classes from "./MyCart.module.scss";

const MyCart = ({
  total,
  history,
  openCart,
  cartItems,
  toggleCart,
  onRemoveFromCart,
}) => {
  const checkoutHandler = () => {
    toggleCart();
    history.push("/checkout");
  };

  const reviewCartHandler = () => {
    toggleCart();
    history.push("/cart");
  };

  return (
    <Fragment>
      <Backdrop onToggle={toggleCart} open={openCart} />
      <div
        className={`${classes.my__cart} ${
          openCart ? classes.open : classes.close
        }`}
      >
        <FlexBox
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          className={classes.closeBtnContainer}
        >
          <button className={classes.close} onClick={toggleCart}>
            <img
              className="close img-fluid"
              src="/images/close.svg"
              alt="close"
            />
          </button>
        </FlexBox>
        <h2 className={classes.title}>My Cart</h2>
        <p className={classes.summary}>Cart Summary</p>
        <FlexBox direction="column" alignItems="center" justifyContent="center">
          {cartItems.length === 0 ? (
            <EmptyFallback>You have no items yet..</EmptyFallback>
          ) : (
            cartItems.map(item => (
              <CartItem
                key={item.id}
                product={item}
                onRemove={onRemoveFromCart}
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
          <button className={classes.review} onClick={reviewCartHandler}>
            Review Cart
          </button>
          <button className={classes.checkout} onClick={checkoutHandler}>
            Complete Checkout
          </button>
        </FlexBox>
      </div>
    </Fragment>
  );
};

export default withRouter(MyCart);
