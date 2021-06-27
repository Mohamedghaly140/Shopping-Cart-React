import React, { Component } from "react";
import { Image } from "react-bootstrap";
import classes from "./ProductDetail.module.scss";

export class PreviewImages extends Component {
  render() {
    return (
      <div className={classes.slider}>
        <Image src="/images/arrow_left@2x.svg" fluid />
        <div className={classes.image__container}>
          <Image src="/images/product1_thumb1.png" fluid />
        </div>
        <div className={classes.image__container}>
          <Image src="/images/product1_thumb2.png" fluid />
        </div>
        <div className={classes.image__container}>
          <Image src="/images/product1_thumb3.png" fluid />
        </div>
        <div className={classes.image__container}>
          <Image src="/images/product1_thumb3.png" fluid />
        </div>
        <Image src="/images/arrow_right@2x.svg" fluid />
      </div>
    );
  }
}

export default PreviewImages;
