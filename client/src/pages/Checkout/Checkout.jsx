import React, { Component } from "react";
import classes from "./Checkout.module.scss";
import cartDara from "../../services/cartData.json";
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";
import ShippingMethod from "../../components/ShippingMethod/ShippingMethod";
import CheckoutHeader from "../../components/UI/CheckoutHeader/CheckoutHeader";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";

import paymentMethodsData from "../../services/paymentMethods.json";
import shippingMethodsData from "../../services/shippingMethods.json";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";

class Checkout extends Component {
  state = {
    shippingAddress: {
      selected: true,
      checked: false,
    },
    shippingMethod: {
      selected: false,
      checked: false,
    },
    paymentMethod: {
      selected: false,
      checked: false,
    },
  };

  // componentDidMount() {
  //   const checkoutState = JSON.parse(localStorage.getItem("checkoutState"));
  //   if (checkoutState) {
  //     this.setState(checkoutState);
  //   }
  // }

  // Persist Checkout State
  // componentDidUpdate() {
  //   localStorage.setItem("checkoutState", JSON.stringify(this.state));
  // }

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

  goBackToAddressHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        shippingAddress: {
          selected: true,
          checked: false,
        },
        shippingMethod: {
          selected: false,
        },
      };
    });
  };

  goBackToShippingMethodHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        shippingMethod: {
          selected: true,
          checked: false,
        },
        paymentMethod: {
          selected: false,
        },
      };
    });
  };

  checkoutProcessHandler = () => {
    const { shippingAddress, shippingMethod, paymentMethod } = this.state;

    if (shippingAddress.selected && !shippingAddress.checked) {
      this.finishAddressHandler();
      this.goToShippingMethodHandler();
      return;
    }

    if (
      shippingMethod.selected &&
      !shippingMethod.checked &&
      shippingAddress.checked
    ) {
      this.finishShippingMethodHandler();
      this.goToPaymentMethodHandler();
      return;
    }

    if (
      paymentMethod.selected &&
      !paymentMethod.checked &&
      shippingMethod.checked
    ) {
      this.finishPaymentMethodHandler();
    }
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

    const showAddress = shippingAddress.selected && !shippingAddress.checked;

    const showMethod =
      shippingAddress.checked &&
      shippingMethod.selected &&
      !shippingMethod.checked;

    const showPayment =
      shippingAddress.checked &&
      shippingMethod.checked &&
      paymentMethod.selected &&
      !paymentMethod.checked;

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
            {showAddress && <ShippingAddress />}
            {showMethod && (
              <ShippingMethod
                options={shippingMethodsData}
                onGoBack={this.goBackToAddressHandler}
              />
            )}
            {showPayment && (
              <PaymentMethod
                options={paymentMethodsData}
                onGoBack={this.goBackToShippingMethodHandler}
              />
            )}
            <CheckoutItems
              items={cartDara}
              paymentMethod={paymentMethod}
              shippingMethod={shippingMethod}
              shippingAddress={shippingAddress}
              onCheckout={this.checkoutProcessHandler}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Checkout;
