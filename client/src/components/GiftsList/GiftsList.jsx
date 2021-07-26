import React from "react";
import GiftItem from "../UI/GiftItem/GiftItem";
// import classes from "./style.css";

const GiftsList = ({ gifts, length = Infinity }) => {
  const firstItem = gifts.shift();
  console.log(firstItem);

  // const rows = new Array(Math.ceil(gifts.slice(0, length).length / 2));

  // for (let i = 0; i < rows.length; i++) {
  //   rows[i] = { items: gifts.slice(i * 2, i * 2 + 2) };
  // }

  // const giftsList = rows.map((item, i) => (
  //   <Fragment key={i}>
  //     <div style={divStyle}>
  //       {item.items.map(item => (
  //         <GiftItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
  //       ))}
  //     </div>
  //   </Fragment>
  // ));

  // return (
  //   <Fragment>
  //     <GiftItem
  //       className={classes.gift__item}
  //       title={firstItem.title}
  //       imageUrl={firstItem.imageUrl}
  //     />
  //     {giftsList}
  //   </Fragment>
  // );

  return gifts.map(item => (
    <GiftItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
  ));
};

export default React.memo(GiftsList);

// const divStyle = {
//   display: "grid",
//   gridRowGap: "32px",
// };
