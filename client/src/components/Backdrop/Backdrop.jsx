import { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.scss";

class BackDrop extends Component {
  render() {
    const { openCart, toggleCart } = this.props;

    return (
      <div
        onClick={toggleCart}
        className={`${classes.backdrop} ${
          openCart ? classes.open : classes.close
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

class Backdrop extends Component {
  render() {
    const { openCart, toggleCart } = this.props;

    return (
      <Fragment>
        {ReactDOM.createPortal(
          <BackDrop openCart={openCart} toggleCart={toggleCart} />,
          document.getElementById("backdrop")
        )}
      </Fragment>
    );
  }
}

export default Backdrop;
