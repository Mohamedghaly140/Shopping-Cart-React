import React from "react";
import classes from "./BrandItem.module.scss";

const BrandItem = ({ index, imageUrl, title, selected, onSelectBrand }) => {
  const onSelectBrandHandler = index => {
    onSelectBrand(index);
  };

  return (
    <button
      className={`${classes.brandItem} ${selected ? classes.selected : ""}`}
      onClick={() => onSelectBrandHandler(index)}
    >
      <img className="img-fluid" src={imageUrl} alt={title} />
    </button>
  );
};

export default BrandItem;
