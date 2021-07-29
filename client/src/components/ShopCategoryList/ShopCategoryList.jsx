import React from "react";
import ShopItem from "../UI/ShopItem/ShopItem";

const ShopCategoryList = ({ shops }) => {
  return shops.map(item => (
    <ShopItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
  ));
};

export default ShopCategoryList;
