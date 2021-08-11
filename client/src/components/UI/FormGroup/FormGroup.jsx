import React from "react";
import ReactSelect from "../ReactSelect/ReactSelect";
import classes from "./FormGroup.module.scss";

const FormGroup = ({
  name,
  type,
  label,
  value,
  options,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor={name} className={classes.label}>
        {required && "*"} {label}
      </label>
      {type === "select" ? (
        <div className={classes.select__address}>
          <ReactSelect
            name={name}
            value={value}
            options={options}
            onChange={onChange}
            prefix="select__address"
            placeholder={placeholder}
          />
        </div>
      ) : (
        <input
          required
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={classes.input}
        />
      )}
    </div>
  );
};

FormGroup.defaultProps = {
  type: "text",
};

export default FormGroup;
