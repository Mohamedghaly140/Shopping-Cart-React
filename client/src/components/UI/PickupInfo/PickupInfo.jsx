import React, { Component, Fragment } from "react";
import classes from "./PickupInfo.module.scss";

class PickupInfo extends Component {
  render() {
    const { pickup_place, pickup_info } = this.props;

    return (
      <Fragment>
        {pickup_place && (
          <div
            className={classes.pickup__info}
            style={{ justifyContent: "center" }}
          >
            <span className={`${classes.pickup} me-1`}>Pickup From: </span>
            <span className={classes.pickup__value}>{pickup_place}</span>
          </div>
        )}
        {pickup_info && (
          <div
            className={classes.pickup__info}
            style={{ justifyContent: "space-between", paddingInline: "0.5rem" }}
          >
            <div>
              <span className={classes.pickup}>From: </span>
              <span className={classes.pickup__value}>{pickup_info.from}</span>
            </div>
            <div>
              <span className={classes.pickup}>To: </span>
              <span className={classes.pickup__value}>
                {pickup_info.countery}
              </span>
            </div>
            <div>
              <span className={classes.pickup}>To: </span>
              <span className={classes.pickup__value}>
                {pickup_info.delivery_in}
              </span>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default PickupInfo;
