import React from "react";
import StoreItem from "../UI/StoreItem/StoreItem";

const ToursList = ({ tours, length = Infinity }) => {
  const locationOptions = [
    { value: "Al Rehab", label: "Al Rehab" },
    { value: "Madinaty", label: "Madinaty" },
    { value: "1st Settlement", label: "1st Settlement" },
    { value: "Madenet Nasr", label: "Madenet Nasr" },
    { value: "Heliopolis", label: "Heliopolis" },
  ];

  return tours
    .slice(0, length)
    .map(item => (
      <StoreItem
        key={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        options={locationOptions}
        storeImageUrl={item.storeImage}
      />
    ));
};

export default ToursList;
