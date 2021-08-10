import React from "react";
import classes from "./SummeryItem.module.scss";

const SummeryItem = ({ title, price, currency, main }) => {
  return (
    <div className={classes.summeryItem} style={{ marginBottom: main && 0 }}>
      <span className={`${main ? classes.main__label : classes.label}`}>
        {title}
      </span>
      <span className={`${main ? classes.main__price : classes.price}`}>
        {price}{" "}
        <span className={`${main ? classes.main__currency : classes.currency}`}>
          {currency}
        </span>
      </span>
    </div>
  );
};

export default SummeryItem;
