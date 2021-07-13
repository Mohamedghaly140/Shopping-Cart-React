import { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Cart.module.scss";

class Cart extends Component {
  render() {
    const { icon, link, cartItems, toggleCart } = this.props;

    return (
      <button className={classes.cart} onClick={toggleCart}>
        <span className="icon me-0 me-sm-2 position-relative">
          <img className="img-fluid" src={icon} alt="cart" />
          <span className={classes.cart__items}>
            {cartItems.reduce(
              (prevValue, curValue) => prevValue + curValue.qty,
              0
            )}
          </span>
        </span>
        <span className={classes.link}>{link}</span>
      </button>
    );
  }
}

Cart.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Cart;
