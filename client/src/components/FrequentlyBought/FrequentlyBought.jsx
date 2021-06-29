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
              className={`${classes.products} row col-12 col-md-12 col-lg-9 col-xl-9 px-3 px-lg-0 px-md-0`}
            >
              <div
                className={`${classes.product__container} col-6 col-md-5 col-lg-5 col-xl-4 px-0 px-md-0 px-lg-0`}
              >
                <Product product={product} />
              </div>
              <div className={classes.icon}>
                <Plus />
              </div>
              <div
                className={`${classes.product__container} col-6 col-md-5 col-lg-5 col-xl-4 px-0 px-md-0 px-lg-0`}
              >
                <Product product={product} />
              </div>
              <div className={classes.icon}>
                <Plus />
              </div>
              <div
                className={`${classes.product__container} col-6 col-md-5 col-lg-5 col-xl-4 px-0 px-md-0 px-lg-0`}
              >
                <Product product={product} />
              </div>
            </div>
            <div
              className={`${classes.buy} col-12 col-md-12 col-lg-3 col-xl-3 px-lg-0 px-md-0`}
            >
              <div className={classes.details}>
                <h4 className={classes.buy__all}>Buy all of them for</h4>
                <div className={classes.price__container}>
                  <p className={classes.price}>9,999 LE</p>
                  <p className={classes.discount__price}>
                    <span className={classes.discount}>9,999 LE</span>
                    <span className={classes.percent}>30% Off</span>
                  </p>
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
