import React from "react";
import Note from "../Note/Note";
import FlexBox from "../UI/FlexBox/FlexBox";
import Title from "../UI/CheckoutSection/Title/Title";
import ButtonBack from "../UI/CheckoutSection/Button/Button";
import PaymentMethodItem from "../UI/PaymentMethodItem/PaymentMethodItem";

import classes from "./PaymentMethod.module.scss";

const PaymentMethod = ({ options, onGoBack }) => {
  return (
    <section>
      <Title>Payment Method</Title>
      <div className={classes.optionsList}>
        {options.map(item => (
          <PaymentMethodItem
            key={item.id}
            title={item.title}
            images={item.images}
          />
        ))}
      </div>
      <FlexBox
        className={classes.note}
        direction="column"
        alignItems="flext-start"
        justifyContent="center"
      >
        <Title>Notes</Title>
        <Note />
        <ButtonBack onClick={onGoBack}>Go Back</ButtonBack>
      </FlexBox>
    </section>
  );
};

export default PaymentMethod;
