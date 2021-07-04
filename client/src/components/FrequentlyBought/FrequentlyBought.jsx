import React, { Component } from "react";
import classes from "./FrequentlyBought.module.scss";
import Product from "../Product/Product";
import Plus from "../Icons/Plus";
import Spinner from "../UI/Spinner/Spinner";

export class FrequentlyBought extends Component {
  render() {
    const { product } = this.props;

    if (!product) {
      return <Spinner />;
    }

    return (
      <section className="py-md-5 py-lg-5">
        <div className="container">
          <h2 className={classes.title}>Frequently Bought Together</h2>
          <p className={classes.sub__title}>
            Users who buy this item usually buy.
          </p>
          <div className="row mx-0">
            <div
              className={`${classes.products} row col-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 px-3 px-lg-0 px-xl-0 px-xxl-0 px-md-0`}
            >
              <div
                className={`${classes.product__container} col-12 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-4 px-0 px-md-0 px-lg-0 px-xl-0 px-xxl-0`}
              >
                <Product product={product} />
              </div>
              <div className={classes.icon}>
                <Plus />
              </div>
              <div
                className={`${classes.product__container} col-12 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-4 px-0 px-md-0 px-lg-0 px-xl-0 px-xxl-0`}
              >
                <Product product={product} />
              </div>
              <div className={classes.icon}>
                <Plus />
              </div>
              <div
                className={`${classes.product__container} col-12 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-4 px-0 px-md-0 px-lg-0 px-xl-0 px-xxl-0`}
              >
                <Product product={product} />
              </div>
            </div>
            <div
              className={`${classes.buy} col-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 offset-xxl-1 px-lg-0 px-xl-0 px-xxl-0 px-md-0`}
            >
              <div className={classes.details}>
                <h4 className={classes.buy__all}>Buy all of them for</h4>
                <div className={classes.price__container}>
                  <p className={classes.price}>{product.price} LE</p>
                  {product.discount_price && (
                    <p className={classes.discount__price}>
                      <span className={classes.discount}>
                        {product.discount_price} LE
                      </span>
                      <span className={classes.percent}>
                        {product.discount_percent}% Off
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <div className={classes.actions}>
                <button className={classes.add__to__cart}>Add To Cart</button>
                <button className={classes.pick__up}>Pickup From Store</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FrequentlyBought;
