import React from "react";
import SelectBox from "../SelectBox/SelectBox";

import classes from "./StoreItem.module.scss";

const StoreItem = ({ title, storeImageUrl, imageUrl, options }) => {
  return (
    <div className={classes.storeItem}>
      <img className={classes.storeImageUrl} src={storeImageUrl} alt={title} />
      <div className={classes.caption}>
        <div className={classes.brand}>
          <img className="img-fluid" src={imageUrl} alt={title} />
        </div>
        <p className={classes.title}>{title} Store</p>
      </div>
      <div className={classes.actions}>
        <div className={classes.select__container}>
          <SelectBox options={options} placeholder="Choose Branch" />
        </div>
        <button className={classes.start__shopping}>Start Shopping</button>
      </div>
    </div>
  );
};

export default StoreItem;
