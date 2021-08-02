import React, { Component } from "react";
import Sizes from "../Sizes/Sizes";
import Colors from "../Colors/Colors";
import Quantity from "../Quantity/Quantity";
import PreviewImages from "./PreviewImages";
import Spinner from "../UI/Spinner/Spinner";
import DetailItem from "../UI/DetailItem/DetailItem";
import Price from "../UI/ProductDetailsPrice/ProductDetailsPrice";
import ProductDetailsItem from "../UI/ProductDetailsItem/ProductDetailsItem";

import classes from "./ProductDetail.module.scss";

class ProductDetail extends Component {
  state = {
    imageUrl: null,
    loading: false,
  };

  previewImageHandler = imageUrl => {
    this.setState({ imageUrl });
  };

  render() {
    if (!this.props.product) {
      return <Spinner />;
    }

    const {
      rate,
      type,
      brand,
      rates,
      price,
      discount,
      imageUrl,
      description,
      discount_price,
      discount_percent,
    } = this.props.product;

    return (
      <div className={`${classes.productDetail} container`}>
        <div className={classes.row}>
          <ProductDetailsItem
            className="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none"
            brandImage={brand}
            description={description}
            type={type}
            rate={rate}
            rates={rates}
          />
          <div className={classes.preview}>
            <div className={classes.main__image}>
              {this.state.loading ? (
                <Spinner />
              ) : (
                <img
                  className="img-fluid"
                  alt="product"
                  style={{ flexGrow: "1", maxHeight: "100%" }}
                  ref={this.imageRef}
                  src={
                    this.state.imageUrl ? this.state.imageUrl : imageUrl.large
                  }
                />
              )}
              <span>
                <img className="img-fluid" src="/images/360@2x.svg" alt="360" />
              </span>
            </div>
            <PreviewImages onPreviewImage={this.previewImageHandler} />
          </div>
          <div className="">
            <ProductDetailsItem
              className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block"
              brandImage={brand}
              description={description}
              type={type}
              rate={rate}
              rates={rates}
            />
            <DetailItem line noMargin>
              <Price
                price={price}
                discount={discount}
                discount_price={discount_price}
                discount_percent={discount_percent}
              />
            </DetailItem>
            <DetailItem title="Size" line>
              <Sizes />
            </DetailItem>
            <DetailItem title="Color" line>
              <Colors />
            </DetailItem>
            <DetailItem title="Quantity">
              <Quantity
                product={this.props.product}
                addToCart={this.props.addToCart}
              />
            </DetailItem>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
