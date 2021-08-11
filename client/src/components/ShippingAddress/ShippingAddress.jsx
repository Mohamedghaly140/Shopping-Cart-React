import React, { Component } from "react";
import AddressForm from "../AddressForm/AddressForm";
import Address from "../UI/Address/Address";
import Title from "../UI/CheckoutSection/Title/Title";
import Button from "../UI/CheckoutSection/Button/Button";
import ReactSelect from "../UI/ReactSelect/ReactSelect";
import TermsConditions from "../UI/TermsConditions/TermsConditions";
import classes from "./ShippingAddress.module.scss";

class ShippingAddress extends Component {
  state = {
    formValid: false,
    address: null,
  };

  saveFormHandler = address => {
    this.setState({ formValid: true, address });
  };

  backHandler = () => {
    this.setState({ formValid: false });
  };

  render() {
    const { formValid, address } = this.state;
    const addressOptios = [{ value: "Cairo", label: "New Cairo Banafsg 3" }];

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
          />
        )}
        <TermsConditions />
        <Button onClick={this.backHandler}>Back to Cart</Button>
      </div>
    );
  }
}

export default ShippingAddress;
