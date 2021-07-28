import React from "react";
import ArrowLeft from "../../../Icons/ArrowLeft";
import ArrowRight from "../../../Icons/ArrowRight";
import classes from "./Offer.module.scss";

const Offer = ({ isHomePage }) => {
  return (
    <div className={`${classes.offer} ${isHomePage && classes.active}`}>
      <ArrowLeft fill={isHomePage ? "#fff" : ""} />
      <p className="mb-0">
        Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
      </p>
      <ArrowRight fill={isHomePage ? "#fff" : ""} />
    </div>
  );
};

export default Offer;
