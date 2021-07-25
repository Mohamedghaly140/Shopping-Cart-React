import React from "react";
import BrandItem from "../UI/BrandItem/BrandItem";

const BrandsList = ({ brands, selected, onSelectBrand }) => {
  return brands.map(item => (
    <BrandItem
      id={item.id}
      brand={item}
      key={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      onSelectBrand={onSelectBrand}
      selected={selected === item.id}
    />
  ));
};

export default BrandsList;
