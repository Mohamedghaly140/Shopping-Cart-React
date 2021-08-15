import React from "react";
import Summery from "../Summery/Summery";
import Title from "../UI/CheckoutSection/Title/Title";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import EmptyFallback from "../UI/EmptyFallback/EmptyFallback";

import classes from "./CheckoutItems.module.scss";

const CheckoutItems = ({
  items,
  onCheckout,
  paymentMethod,
  shippingMethod,
  shippingAddress,
  onUpdateQuantity,
  onRemoveFromCart,
}) => {
  const subTotal = items.reduce(
    (acc, curItem) => acc + Number(curItem.price) * Number(curItem.qty),
    0
  );

  const subTotalMain =
    shippingAddress.selected &&
    !shippingMethod.selected &&
    !paymentMethod.selected;

  const grandTotalMain = shippingAddress.selected && shippingMethod.selected;

  const shippingFees =
    shippingAddress.selected && shippingMethod.selected && 25;

  const grandTotal =
    shippingAddress.selected && shippingMethod.selected && subTotal + 25;

  return (
    <section className={classes.checkoutItems}>
      <Title>Items</Title>
      <div
        className={classes.items__list}
        style={{ gridTemplateRows: `repeat(${items.length}, auto)` }}
      >
        {!items.length ? (
          <EmptyFallback>You have no items yet..</EmptyFallback>
        ) : (
          items.map(item => (
            <CheckoutItem
              item={item}
              key={item.id}
              onRemove={onRemoveFromCart}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))
        )}
      </div>
      <Summery
        subTotal={subTotal}
        buttonTitle="Continue"
        shipping={shippingFees}
        grandTotal={grandTotal}
        onCheckout={onCheckout}
        subTotalMain={subTotalMain}
        grandTotalMain={grandTotalMain}
      />
    </section>
  );
};

export default CheckoutItems;
