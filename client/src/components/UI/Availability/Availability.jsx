import React from "react";
import classes from "./Availability.module.scss";
import Unknown from "../../Icons/Unknown";
import InStock from "../../Icons/InStock";
import OutStock from "../../Icons/OutStock";

const Availability = ({ type }) => {
  let color, icon, title;

  switch (type) {
    case "in-stock":
      color = "#2FAB66";
      icon = <InStock />;
      title = "In Stock";
      break;
    case "out-stock":
      color = "#CE2828";
      icon = <OutStock />;
      title = "Out of Stock";
      break;
    case "Unknown":
      color = "#F29100";
      icon = <Unknown />;
      title = "Availability Unknown";
      break;
    default:
      color = "#F29100";
      icon = <Unknown />;
      title = "Availability Unknown";
  }

  return (
    <div className={classes.availability} style={{ color }}>
      <span className={classes.icon}>{icon}</span>
      <p className={classes.title}>{title}</p>
    </div>
  );
};

export default Availability;
