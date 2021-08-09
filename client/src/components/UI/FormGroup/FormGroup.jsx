import React from "react";
import ReactSelect from "../ReactSelect/ReactSelect";
import classes from "./FormGroup.module.scss";

const FormGroup = ({ name, label, type, options, placeholder }) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      {type === "select" ? (
        <div className={classes.select__address}>
          <ReactSelect
            options={options}
            prefix="select__address"
            placeholder={placeholder}
          />
        </div>
      ) : (
        <input type={type} className={classes.input} id={name} name={name} />
      )}
    </div>
  );
};

FormGroup.defaultProps = {
  type: "text",
};

export default FormGroup;
