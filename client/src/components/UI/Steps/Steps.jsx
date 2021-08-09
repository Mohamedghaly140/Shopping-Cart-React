import React from "react";
import DoneIcon from "../../Icons/Done";
import StepItem from "./StepItem/StepItem";

import classes from "./Steps.module.scss";

const Steps = props => {
  const { shippingAddress, shippingMethod, paymentMethod } = props;

  const stepItems = [
    {
      id: 1,
      title: "Shipping Address",
      selected: shippingAddress.selected,
      checked: shippingAddress.checked,
    },
    {
      id: 2,
      title: "Shipping Method",
      selected: shippingMethod.selected,
      checked: shippingMethod.checked,
    },
    {
      id: 3,
      title: "Payment Method",
      selected: paymentMethod.selected,
      checked: paymentMethod.checked,
    },
  ];

  const finishedStatues = stepItems.map(item => ({
    id: item.id,
    finished: item.checked,
  }));

  return (
    <div className={classes.steps}>
      {stepItems.map((item, idx) => (
        <StepItem
          key={item.id}
          title={item.title}
          checked={item.checked}
          selected={item.selected}
        >
          {item.checked ? <DoneIcon /> : idx + 1}
        </StepItem>
      ))}
      <span
        className={classes.progress}
        style={{
          width:
            finishedStatues[0].finished && !finishedStatues[1].finished
              ? "40%"
              : finishedStatues[0].finished && finishedStatues[1].finished
              ? "80%"
              : 0,
        }}
      />
    </div>
  );
};

export default Steps;
