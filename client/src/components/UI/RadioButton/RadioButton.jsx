import React, { Fragment } from "react";
import "./RadioButton.scss";

const RadioButton = ({ title }) => {
  return (
    <Fragment>
      <input className="radio__input" id={title} type="radio" name="method" />
      <div className="radio__button" />
    </Fragment>
  );
};

export default RadioButton;
