import React, { Fragment, Component } from "react";
import Button from "../UI/Button/Button";
import FlexBox from "../UI/FlexBox/FlexBox";
import FormGroup from "../UI/FormGroup/FormGroup";
import Title from "../UI/CheckoutSection/Title/Title";
import CheckoutSection from "../UI/CheckoutSection/CheckoutSection";

import classes from "./AddressForm.module.scss";

class AddressForm extends Component {
  state = {
    formValid: false,
    address: {
      city: "",
      area: "",
      phone: "",
      title: "",
      country: "",
      flatNum: "",
      lastName: "",
      firstName: "",
      postalCode: "",
      buildingNum: "",
      addressLine1: "",
    },
  };

  inputChangeHandler = event => {
    this.setState(prevState => {
      return {
        ...prevState,
        address: {
          ...prevState.address,
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  selectChangeHandler = (name, selected) => {
    this.setState(prevState => {
      return {
        ...prevState,
        address: {
          ...prevState.address,
          [name]: selected.value,
        },
      };
    });
  };

  onSubmitAddress = event => {
    event.preventDefault();

    const { address } = this.state;

    this.props.onSave(address);
  };

  render() {
    const { title, cityOptions, aresOptions, counteryOptions } = this.props;
    const {
      address: {
        area,
        city,
        phone,
        country,
        flatNum,
        lastName,
        firstName,
        postalCode,
        buildingNum,
        addressLine1,
        addressLine2,
      },
    } = this.state;

    const formInputs = [
      {
        label: "First Name",
        name: "firstName",
        value: firstName,
        onChangeFunc: this.inputChangeHandler,
        type: "text",
      },
      {
        label: "last Name",
        name: "lastName",
        value: lastName,
        onChangeFunc: this.inputChangeHandler,
        type: "text",
      },
      {
        label: "Phone number",
        name: "phone",
        value: phone,
        onChangeFunc: this.inputChangeHandler,
        type: "tel",
      },
      {
        label: "Country",
        name: "country",
        value: country,
        onChangeFunc: this.selectChangeHandler,
        type: "select",
        options: counteryOptions,
      },
      {
        label: "City",
        name: "city",
        value: city,
        onChangeFunc: this.selectChangeHandler,
        type: "select",
        options: cityOptions,
      },
      {
        label: "Area",
        name: "area",
        value: area,
        onChangeFunc: this.selectChangeHandler,
        type: "select",
        options: aresOptions,
      },
      {
        label: "Address Line 1",
        name: "addressLine1",
        value: addressLine1,
        onChangeFunc: this.inputChangeHandler,
        type: "text",
      },
      {
        label: "Address Line 2",
        name: "addressLine2",
        value: addressLine2,
        onChangeFunc: this.inputChangeHandler,
        type: "text",
      },
      {
        label: "Building Number",
        name: "buildingNum",
        value: buildingNum,
        onChangeFunc: this.inputChangeHandler,
        type: "text",
      },
      {
        label: "Flat Number",
        name: "flatNum",
        value: flatNum,
        onChangeFunc: this.inputChangeHandler,
        type: "text",
      },
      {
        label: "Postal Code",
        name: "postalCode",
        value: postalCode,
        onChangeFunc: this.inputChangeHandler,
        type: "text",
      },
    ];

    return (
      <Fragment>
        <Title>{title}</Title>
        <CheckoutSection className={classes.formContainer}>
          <form onSubmit={this.onSubmitAddress}>
            {formInputs.map(input => (
              <FormGroup
                required
                key={input.name}
                name={input.name}
                type={input.type}
                label={input.label}
                value={input.value}
                options={input.options}
                onChange={input.onChangeFunc}
              />
            ))}
            <FlexBox
              className={classes.actions}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button title="Cancel" className={classes.cancel} />
              <Button type="submit" title="Save" className={classes.save} />
            </FlexBox>
          </form>
        </CheckoutSection>
      </Fragment>
    );
  }
}

AddressForm.defaultProps = {
  title: "Add A New Address",
};

export default AddressForm;
