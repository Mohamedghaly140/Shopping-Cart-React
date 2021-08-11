import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Address from "../UI/Address/Address";
import AddressForm from "../AddressForm/AddressForm";
import Title from "../UI/CheckoutSection/Title/Title";
import ReactSelect from "../UI/ReactSelect/ReactSelect";
import Button from "../UI/CheckoutSection/Button/Button";
import TermsConditions from "../UI/TermsConditions/TermsConditions";
import classes from "./ShippingAddress.module.scss";

import counteryOptios from "../../services/counteryOptios.json";
import cityOptios from "../../services/cityOptios.json";
import aresOptios from "../../services/aresOptios.json";

const addressOptios = [{ value: "Cairo", label: "New Cairo Banafsg 3" }];

class ShippingAddress extends Component {
  state = {
    address: null,
    formValid: false,
    cityOptios,
    aresOptios,
    addressOptios,
    counteryOptios,
  };

  saveFormHandler = address => {
    this.setState({ formValid: true, address });
  };

  backHandler = () => {
    this.setState({ formValid: false });
  };

  backToCartHandler = () => {
    this.props.history.push("/cart");
  };

  render() {
    const {
      formValid,
      address,
      cityOptios,
      aresOptios,
      addressOptios,
      counteryOptios,
    } = this.state;

    return (
      <div className={classes.shippingAddress}>
        <Title>Shipping Address</Title>
        <div className={classes.select__address}>
          <ReactSelect
            prefix="select__address"
            options={addressOptios}
            placeholder="Choose your address"
          />
        </div>
        {formValid && address ? (
          <Address address={address} />
        ) : (
          <AddressForm
            title="Add A New Address"
            onSave={this.saveFormHandler}
            aresOptios={aresOptios}
            cityOptios={cityOptios}
            counteryOptios={counteryOptios}
          />
        )}
        <TermsConditions />
        <Button onClick={this.backToCartHandler}>Back to Cart</Button>
      </div>
    );
  }
}

export default withRouter(ShippingAddress);
