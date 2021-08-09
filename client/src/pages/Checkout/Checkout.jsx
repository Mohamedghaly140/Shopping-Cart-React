import React, { Component } from "react";
import classes from "./Checkout.module.scss";
import CheckoutHeader from "../../components/UI/CheckoutHeader/CheckoutHeader";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";

class Checkout extends Component {
  state = {
    shippingAddress: {
      selected: true,
      checked: true,
    },
    shippingMethod: {
      selected: true,
      checked: false,
    },
    paymentMethod: {
      selected: false,
      checked: false,
    },
  };

  finishAddressHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        shippingAddress: {
          selected: true,
          checked: true,
        },
      };
    });
  };

  goToShippingMethodHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        shippingMethod: {
          selected: true,
        },
      };
    });
  };

  finishShippingMethodHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        shippingMethod: {
          selected: true,
          checked: true,
        },
      };
    });
  };

  goToPaymentMethodHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        paymentMethod: {
          selected: true,
        },
      };
    });
  };

  finishPaymentMethodHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        paymentMethod: {
          selected: true,
          checked: true,
        },
      };
    });
  };

  render() {
    const { shippingAddress, shippingMethod, paymentMethod } = this.state;

    const subTitle =
      shippingAddress.selected && !shippingMethod.selected
        ? "Information & shipping address"
        : shippingAddress.selected &&
          shippingMethod.selected &&
          !paymentMethod.selected
        ? "Shipping Method"
        : "Payment Method";

    return (
      <section className={classes.checkout}>
        <div className="container">
          <CheckoutHeader
            title="Checkout"
            subTitle={subTitle}
            paymentMethod={paymentMethod}
            shippingMethod={shippingMethod}
            shippingAddress={shippingAddress}
          />
          <div className={classes.checkout__container}>
            <ShippingAddress />
          </div>
        </div>
      </section>
    );
  }
}

export default Checkout;
