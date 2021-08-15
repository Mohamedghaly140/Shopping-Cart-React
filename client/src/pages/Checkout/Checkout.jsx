import React, { Component } from "react";
import classes from "./Checkout.module.scss";
import Spinner from "../../components/UI/Spinner/Spinner";
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import ShippingMethod from "../../components/ShippingMethod/ShippingMethod";
import CheckoutHeader from "../../components/UI/CheckoutHeader/CheckoutHeader";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";

import paymentMethodsData from "../../services/paymentMethods.json";
import shippingMethodsData from "../../services/shippingMethods.json";

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
    loading: false,
    paymentMethodsData,
    shippingMethodsData,
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
    const {
      loading,
      paymentMethod,
      shippingMethod,
      shippingAddress,
      paymentMethodsData,
      shippingMethodsData,
    } = this.state;

    const subTitle =
      shippingAddress.selected && !shippingMethod.selected
        ? "Information & Shipping Address"
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

    if (loading) {
      return <Spinner />;
    }

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
              items={this.props.cartItems}
              paymentMethod={paymentMethod}
              shippingMethod={shippingMethod}
              shippingAddress={shippingAddress}
              onCheckout={this.checkoutProcessHandler}
              onUpdateQuantity={this.props.onUpdateQuantity}
              onRemoveFromCart={this.props.onRemoveFromCart}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Checkout;
