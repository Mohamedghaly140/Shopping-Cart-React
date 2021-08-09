import React from "react";
import classes from "./StepItem.module.scss";

const StepItem = ({ children, checked, selected, title }) => {
  return (
    <div className={classes.stepItem}>
      <div
        className={classes.item}
        style={{
          borderColor: selected && "#542e90",
          background: checked && "#542e90",
        }}
      >
        <span className={classes.body} style={{ color: selected && "#000" }}>
          {children}
        </span>
      </div>
      <h6
        className={classes.title}
        style={{ color: selected && "#000", fontWeight: selected && "600" }}
      >
        {title}
      </h6>
    </div>
  );
};

export default StepItem;
