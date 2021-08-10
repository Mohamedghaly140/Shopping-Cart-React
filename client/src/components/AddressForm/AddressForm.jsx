import React, { Fragment } from "react";
import Button from "../UI/Button/Button";
import FormGroup from "../UI/FormGroup/FormGroup";
import Title from "../UI/CheckoutSection/Title/Title";
import CheckoutSection from "../UI/CheckoutSection/CheckoutSection";

import classes from "./AddressForm.module.scss";

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

const AddressForm = ({ title }) => {
  return (
    <Fragment>
      <Title>{title}</Title>
      <CheckoutSection className={classes.formContainer}>
        <form>
          <FormGroup name="firstName" label="First Name" />
          <FormGroup name="lastname" label="last Name" />
          <FormGroup name="phoneNuber" label="Phone number" type="tel" />
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
          <FormGroup name="addressLine1" label="Address Line 1" />
          <FormGroup name="addressLine2" label="Address Line 2" />
          <FormGroup name="buildingNumber" label="Building Number" />
          <FormGroup name="flatNumber" label="Flat Number" />
          <FormGroup name="postalCode" label="Postal Code" />
          <div className={classes.actions}>
            <Button title="Cancel" className={classes.cancel} />
            <Button type="submit" title="Save" className={classes.save} />
          </div>
        </form>
      </CheckoutSection>
    </Fragment>
  );
};

AddressForm.defaultProps = {
  title: "Add A New Address",
};

export default AddressForm;
