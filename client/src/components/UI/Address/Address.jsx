import React from "react";
import Button from "../../UI/Button/Button";
import AddressTitle from "./AddressTitle/AddressTitle";
import CheckoutSection from "../CheckoutSection/CheckoutSection";
import AddressDescription from "./AddressDescription/AddressDescription";

import classes from "./Address.module.scss";

const Address = ({ address }) => {
  return (
    <CheckoutSection className={classes.address}>
      <AddressTitle>{address.title} Address</AddressTitle>
      <AddressDescription>
        {`${address.addressLine1} - ${address.buildingNum} - ${address.flatNum}`}
      </AddressDescription>
      <AddressDescription>{address.area}</AddressDescription>
      <AddressDescription>{`${address.city} ${address.country}`}</AddressDescription>
      <AddressDescription>{address.phone}</AddressDescription>
      <div className={classes.actions}>
        <Button className={classes.delete} title="delete" />
        <Button className={classes.edit} title="edit" />
      </div>
    </CheckoutSection>
  );
};

export default Address;
