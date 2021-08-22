import React, { Component } from "react";
import classes from "./Copyright.module.scss";

class Copyright extends Component {
  render() {
    return (
      <div className={classes.copyright}>
        <p className="mb-2">
          © {new Date().getFullYear()} yeshtery, all rights reserved.
        </p>
        <div className={classes.payments__methods}>
          <img alt="cash" className="img-fluid" src="/images/cash.png" />
          <img alt="visa" className="img-fluid" src="/images/visa.png" />
          <img
            alt="matercard"
            className="img-fluid"
            src="/images/matercard.png"
          />
        </div>
        <p className="d-flex align-items-center justify-content-center mb-0">
          <span className={classes.powered__by}>Powered By</span>{" "}
          <img
            className={`${classes.nasnav__icon} img-fluid`}
            src="/images/nas_nav.svg"
            alt="NasNav"
          />
        </p>
      </div>
    );
  }
}

export default Copyright;
