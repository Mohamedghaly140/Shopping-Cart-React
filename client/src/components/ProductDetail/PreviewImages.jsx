import React, { Component } from "react";
import { Image } from "react-bootstrap";
import classes from "./ProductDetail.module.scss";

export class PreviewImages extends Component {
  render() {
    const { onPreviewImage } = this.props;

    const previewImages = [
      { id: 1, imageUrl: "/images/product1_thumb1.png" },
      { id: 2, imageUrl: "/images/product1_thumb2.png" },
      { id: 3, imageUrl: "/images/product1_thumb2.png" },
      { id: 4, imageUrl: "/images/product1_thumb3.png" },
    ];

    return (
      <div className={classes.slider}>
        <Image src="/images/arrow_left@2x.svg" fluid />
        <div className={classes.images__container}>
          {previewImages.map(item => (
            <div key={item.id} className={classes.image__container}>
              <Image
                fluid
                src={item.imageUrl}
                onClick={() => onPreviewImage(item.imageUrl)}
              />
            </div>
          ))}
        </div>
        <Image src="/images/arrow_right@2x.svg" fluid />
      </div>
    );
  }
}

export default PreviewImages;
