import React, { Component } from "react";
import classes from "./ExploreButton.module.scss";

class ExploreButton extends Component {
  render() {
    return (
      <button {...this.props} className={classes.exploreButton}>
        {this.props.children}
      </button>
    );
  }
}

export default ExploreButton;
