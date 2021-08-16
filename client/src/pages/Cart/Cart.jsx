import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import cartData from "../../services/cartData.json";
import Title from "../../components/UI/Title/Title";
import Summery from "../../components/Summery/Summery";
import SubTitle from "../../components/UI/SubTitle/SubTitle";
import CartItems from "../../components/CartItems/CartItems";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";

import classes from "./Cart.module.scss";

class Cart extends Component {
  checkoutHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const {
      total,
      loading,
      products,
      cartItems,
      onRemoveFromCart,
      onUpdateQuantity,
    } = this.props;

    return (
      <div className="container">
        <section className={classes.cart}>
          <div className={classes.header}>
            <Title>My Cart</Title>
            <SubTitle>Items ({cartItems.length})</SubTitle>
          </div>
          <div className={classes.cart__grid}>
            <CartItems
              cartItems={cartItems}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveFromCart={onRemoveFromCart}
            />
            <Summery
              coupon
              subTotalMain
              subTotal={total}
              onCheckout={this.checkoutHandler}
            />
          </div>
          <SimilarProducts
            loading={loading}
            products={products}
            title="Who Bought These Items Also Bought"
            subTitle="Recommended items that goes along yours."
          />
        </section>
      </div>
    );
  }
}

Cart.defaultProps = {
  cartItems: cartData,
};

export default withRouter(Cart);
