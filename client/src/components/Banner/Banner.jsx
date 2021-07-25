import React, { Component } from "react";

import Caption from "./Caption/Caption";

import classes from "./Banner.module.scss";

class Banner extends Component {
  render() {
    return (
      <div className={classes.banner}>
        <Caption />
      </div>
    );
  }
}

export default Banner;
