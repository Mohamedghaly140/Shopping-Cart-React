import React, { Component } from "react";
import { withMediaQuery } from "../../hoc/withMediaQuery";

import Caption from "./Caption/Caption";

import classes from "./Banner.module.scss";

class Banner extends Component {
  render() {
    const { bannerUrl, isMobile } = this.props;

    return (
      <div
        className={classes.banner}
        style={{
          backgroundImage: `url(${
            isMobile ? bannerUrl.small : bannerUrl.large
          })`,
        }}
      >
        <Caption />
      </div>
    );
  }
}

export default withMediaQuery(Banner);
