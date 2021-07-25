import React from "react";
import StoreItem from "../UI/StoreItem/StoreItem";

const ToursList = ({ tours, length = Infinity }) => {
  const options = [
    { value: "vans", label: "Vans" },
    { value: "adidas", label: "Adidas" },
  ];

  return tours
    .slice(0, length)
    .map(item => (
      <StoreItem
        key={item.id}
        options={options}
        title={item.title}
        imageUrl={item.imageUrl}
        storeImageUrl={item.storeImage}
      />
    ));
};

export default ToursList;
