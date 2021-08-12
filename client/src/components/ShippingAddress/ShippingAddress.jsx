import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Address from "../UI/Address/Address";
import AddressForm from "../AddressForm/AddressForm";
import Title from "../UI/CheckoutSection/Title/Title";
import ReactSelect from "../UI/ReactSelect/ReactSelect";
import Button from "../UI/CheckoutSection/Button/Button";
import TermsConditions from "../UI/TermsConditions/TermsConditions";

import classes from "./ShippingAddress.module.scss";

import cityOptions from "../../services/cityOptions.json";
import aresOptions from "../../services/aresOptions.json";
import counteryOptions from "../../services/counteryOptions.json";

const addressOptios = [{ value: "Cairo", label: "New Cairo Banafsg 3" }];

class ShippingAddress extends Component {
  state = {
    address: null,
    formValid: false,
    cityOptions,
    aresOptions,
    addressOptios,
    counteryOptions,
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
      cityOptions,
      aresOptions,
      addressOptios,
      counteryOptions,
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
            aresOptions={aresOptions}
            cityOptions={cityOptions}
            counteryOptions={counteryOptions}
          />
        )}
        <TermsConditions />
        <Button onClick={this.backToCartHandler}>Back to Cart</Button>
      </div>
    );
  }
}

export default withRouter(ShippingAddress);
