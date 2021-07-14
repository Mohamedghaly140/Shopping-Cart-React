import React, { Component } from "react";
import Spinner from "../UI/Spinner/Spinner";
import Rating from "../UI/ProductDetailsRating/Rating";
import Price from "../UI/ProductDetailsPrice/ProductDetailsPrice";
import Sizes from "../Sizes/Sizes";
import Colors from "../Colors/Colors";
import Quantity from "../Quantity/Quantity";
import PreviewImages from "./PreviewImages";
import classes from "./ProductDetail.module.scss";

export class ProductDetail extends Component {
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
      imageUrl,
      description,
      rates,
      price,
      rate,
      brand,
      discount,
      discount_price,
      discount_percent,
    } = this.props.product;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
            <div>
              <img className="mb-3 img-fluid" src={brand} alt="brand" />
              <p className={classes.description}>{description}</p>
              <p className={classes.product__type}>Men</p>
              <div className={classes.rate__container}>
                <Rating rating={rate} />{" "}
                <span className={classes.rating}>{rate} of 5</span>
                <span className={classes.rates}>{rates} Rates</span>
              </div>
            </div>
          </div>
          <div
            className={`${classes.preview} 'col-md-6 col-lg-6 col-xl-6 col-xxl-6'`}
          >
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
          <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <img className="mb-3 img-fluid" src={brand} alt="brand" />
              <p className={classes.description}>{description}</p>
              <p className={classes.product__type}>Men</p>
              <div className={classes.rate__container}>
                <Rating rating={rate} />{" "}
                <span className={classes.rating}>{rate} of 5</span>
                <span className={classes.rates}>{rates} Rates</span>
              </div>
            </div>
            <div className="mb-3">
              <Price
                price={price}
                discount={discount}
                discount_price={discount_price}
                discount_percent={discount_percent}
              />
            </div>
            <hr style={{ border: "0.5px solid #D9D9D9" }} />
            <div>
              <h4 className={classes.title}>Size</h4>
              <Sizes />
            </div>
            <hr style={{ border: "0.5px solid #D9D9D9" }} />
            <div className="my-3">
              <h4 className={classes.title}>Color</h4>
              <Colors />
            </div>
            <hr style={{ border: "0.5px solid #D9D9D9" }} />
            <div className="my-3">
              <h4 className={classes.title}>Quantity</h4>
              <Quantity
                addToCart={this.props.addToCart}
                product={this.props.product}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
