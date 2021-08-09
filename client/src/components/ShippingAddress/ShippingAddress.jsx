import React, { Component } from "react";
import Button from "../UI/Button/Button";
import FormGroup from "../UI/FormGroup/FormGroup";
import Title from "../UI/CheckoutSection/Title/Title";
import ReactSelect from "../UI/ReactSelect/ReactSelect";
import CheckoutSection from "../UI/CheckoutSection/CheckoutSection";
import classes from "./ShippingAddress.module.scss";

class ShippingAddress extends Component {
  render() {
    const addressOptios = [{ value: "Cairo", label: "New Cairo Banafsg 3" }];

    const counteryOptios = [
      { value: "Egypt", label: "Egypt" },
      { value: "USA", label: "USA" },
      { value: "UAE", label: "UAE" },
      { value: "KSA", label: "KSA" },
    ];

    const cityOptios = [
      { value: "Giza", label: "Giza" },
      { value: "Cairo", label: "Cairo" },
      { value: "Alexandria", label: "Alexandria" },
      { value: "Shubra El Kheima", label: "Shubra El Kheima" },
    ];

    const aresOptios = [
      { value: "New Cairo", label: "New Cairo" },
      { value: "Nasr City", label: "Nasr City" },
    ];

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
        <Title>Add A New Address</Title>
        <CheckoutSection className={classes.formContainer}>
          <form>
            <FormGroup name="firstName" label="First Name" type="text" />
            <FormGroup name="lastname" label="last Name" type="text" />
            <FormGroup name="phoneNuber" label="Phone number" type="number" />
            <FormGroup
              name="country"
              label="Country"
              type="select"
              options={counteryOptios}
            />
            <FormGroup
              name="city"
              label="City"
              type="select"
              options={cityOptios}
            />
            <FormGroup
              name="area"
              label="Area"
              type="select"
              options={aresOptios}
            />
            <FormGroup name="addressLine1" label="Address Line 1" type="text" />
            <FormGroup name="addressLine2" label="Address Line 2" type="text" />
            <FormGroup
              name="buildingNumber"
              label="Building Number"
              type="number"
            />
            <FormGroup name="flatNumber" label="Flat Number" type="number" />
            <FormGroup name="postalCode" label="Postal Code" type="number" />
            <div className={classes.actions}>
              <Button title="Cancel" className={classes.cancel} />
              <Button type="submit" title="Save" className={classes.save} />
            </div>
          </form>
        </CheckoutSection>
      </div>
    );
  }
}

export default ShippingAddress;
