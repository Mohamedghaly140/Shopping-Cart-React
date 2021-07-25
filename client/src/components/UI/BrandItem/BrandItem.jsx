import React from "react";
import classes from "./BrandItem.module.scss";

const BrandItem = ({ id, imageUrl, title, selected, onSelectBrand, brand }) => {
  const onSelectBrandHandler = brand => {
    onSelectBrand(brand);
  };

  return (
    <button
      className={`${classes.brandItem} ${selected ? classes.selected : ""}`}
      onClick={() => onSelectBrandHandler(brand)}
    >
      <img className="img-fluid" src={imageUrl} alt={title} />
    </button>
  );
};

export default BrandItem;
