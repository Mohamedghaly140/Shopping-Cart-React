import React, { Component } from "react";
import cartData from "../../services/cartData.json";
import Title from "../../components/UI/Title/Title";
import Summery from "../../components/Summery/Summery";
import SubTitle from "../../components/UI/SubTitle/SubTitle";
import CartItems from "../../components/CartItems/CartItems";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import classes from "./Cart.module.scss";

class Cart extends Component {
  render() {
    const { loading, products, cartItems } = this.props;

    const subTotal = cartData.reduce(
      (acc, curItem) => acc + Number(curItem.price) * Number(curItem.qty),
      0
    );

    return (
      <div className="container">
        <section className={classes.cart}>
          <div className={classes.header}>
            <Title>My Cart</Title>
            <SubTitle>Items (2)</SubTitle>
          </div>
          <div className={classes.cart__grid}>
            <CartItems cartItems={cartItems} />
            <Summery price={subTotal} />
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

export default Cart;
