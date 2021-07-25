import React from "react";
import BrandItem from "../UI/BrandItem/BrandItem";

const BrandsList = ({ brands }) => {
  return brands.map(item => (
    <BrandItem key={item.id} imageUrl={item.imageUrl} title={item.title} />
  ));
};

export default BrandsList;
