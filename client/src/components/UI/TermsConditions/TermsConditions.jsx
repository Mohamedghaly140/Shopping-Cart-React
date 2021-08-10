import React from "react";
import { Link } from "react-router-dom";

import classes from "./TermsConditions.module.scss";

const TermsConditions = ({ terms }) => {
  return (
    <p className={classes.terms}>
      {terms} <Link className={classes.link}>terms and conditions</Link>
    </p>
  );
};

TermsConditions.defaultProps = {
  terms:
    "By placing your order, you acknowledge and agree to have read, understood, and approved our",
};

export default TermsConditions;
