import React, { Component } from "react";
import classes from "./ProductDetail.module.scss";

class PreviewImages extends Component {
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
        <img
          className={`${classes.arrow_left} 'img-fluid'`}
          src="/images/arrow_left@2x.svg"
          alt="arrow_left"
        />
        <div className={classes.images__container}>
          {previewImages.map(item => (
            <div key={item.id} className={classes.image__container}>
              <img
                alt="preview images"
                className="img-fluid"
                src={item.imageUrl}
                onClick={() => onPreviewImage(item.imageUrl)}
              />
            </div>
          ))}
        </div>
        <img
          className={`${classes.arrow_right} 'img-fluid'`}
          src="/images/arrow_right@2x.svg"
          alt="arrow_right"
        />
      </div>
    );
  }
}

export default PreviewImages;
