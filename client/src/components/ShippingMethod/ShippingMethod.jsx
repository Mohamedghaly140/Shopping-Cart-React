import React from "react";
import Title from "../UI/CheckoutSection/Title/Title";
import ShippingMethodItem from "../UI/ShippingMethodItem/ShippingMethodItem";

const ShippingMethod = ({ options }) => {
  return (
    <section>
      <Title>Shipping Method</Title>
      {options.map(item => (
        <ShippingMethodItem
          key={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          shippingFees={item.shippingFees}
          deliveryTime={item.deliveryTime}
          arrivingDate={item.arrivingDate}
        />
      ))}
    </section>
  );
};

export default ShippingMethod;
