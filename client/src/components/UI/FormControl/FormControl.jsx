import React from "react";
import classes from "./FormControl.module.scss";

const FormControl = props => {
  return (
    <div className={classes.form__control}>
      <label className={classes.form__label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        className={classes.form__input}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormControl;
