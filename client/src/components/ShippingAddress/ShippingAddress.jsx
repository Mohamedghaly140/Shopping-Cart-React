import React, { Component } from "react";
import AddressForm from "../AddressForm/AddressForm";
import Address from "../UI/Address/Address";
import Title from "../UI/CheckoutSection/Title/Title";
import Button from "../UI/CheckoutSection/Button/Button";
import ReactSelect from "../UI/ReactSelect/ReactSelect";
import TermsConditions from "../UI/TermsConditions/TermsConditions";
import classes from "./ShippingAddress.module.scss";

const address = {
  title: "Home",
  city: "Cairo",
  flatNum: "13",
  country: "Egypt",
  buildingNum: "13",
  area: "Heliopolis",
  phone: "01112868708",
  addressLine1: "13th Heliopolis Street",
};

class ShippingAddress extends Component {
  render() {
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
        {false ? (
          <AddressForm title="Add A New Address" />
        ) : (
          <Address address={address} />
        )}
        <TermsConditions />
        <Button>Back to Cart</Button>
      </div>
    );
  }
}

export default ShippingAddress;
