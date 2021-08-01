import React from "react";
import ArrowLeft from "../../../Icons/ArrowLeft";
import ArrowRight from "../../../Icons/ArrowRight";
import classes from "./Offer.module.scss";

const Offer = ({ isMainNav }) => {
  return (
    <div className={`${classes.offer} ${isMainNav && classes.active}`}>
      <ArrowLeft fill={isMainNav ? "#fff" : ""} />
      <p className="mb-0">
        Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
      </p>
      <ArrowRight fill={isMainNav ? "#fff" : ""} />
    </div>
  );
};

export default Offer;
