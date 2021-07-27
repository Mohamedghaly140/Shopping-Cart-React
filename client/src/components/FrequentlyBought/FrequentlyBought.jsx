import React, { Component } from "react";
import classes from "./FrequentlyBought.module.scss";
import Product from "../Product/Product";
import Plus from "../Icons/Plus";
import Spinner from "../UI/Spinner/Spinner";
import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";

export class FrequentlyBought extends Component {
  render() {
    const { product } = this.props;

    if (!product) {
      return <Spinner />;
    }

    return (
      <section className="py-md-5 py-lg-5">
        <div className="container">
          <Title>Frequently Bought Together</Title>
          <SubTitle>Users who buy this item usually buy.</SubTitle>
          <div className={classes.section}>
            <div className={classes.products}>
              <Product product={product} />
              <div className={classes.icon}>
                <Plus />
              </div>
              <Product product={product} />
              <div className={classes.icon}>
                <Plus />
              </div>
              <Product product={product} />
            </div>
            <div className={classes.buy}>
              <div className={classes.details}>
                <h4 className={classes.buy__all}>Buy all of them for</h4>
                <div className={classes.price__container}>
                  <p className={classes.price}>{product.price} LE</p>
                  {product.discount_price && (
                    <p className={classes.discount__price}>
                      <span className={classes.discount}>
                        &nbsp;&nbsp;{product.discount_price} LE&nbsp;&nbsp;
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
