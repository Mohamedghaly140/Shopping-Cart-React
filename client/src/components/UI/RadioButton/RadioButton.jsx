import React, { Fragment } from "react";
import "./RadioButton.scss";

const RadioButton = ({ title, value }) => {
  return (
    <Fragment>
      <input
        id={title}
        type="radio"
        name="method"
        value={value}
        className="radio__input"
      />
      <div className="radio__button" />
    </Fragment>
  );
};

export default RadioButton;
