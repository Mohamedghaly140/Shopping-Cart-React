import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Title from "../components/UI/Title/Title";
import SubTitle from "../components/UI/SubTitle/SubTitle";
import Categories from "../components/Categories/Categories";

class ShopAllCategories extends Component {
  render() {
    return (
      <div className="container">
        <Title>Shop All Categories</Title>
        <SubTitle>Find what you are looking for by category.</SubTitle>
        <section>
          <Categories />
        </section>
      </div>
    );
  }
}

export default withRouter(ShopAllCategories);
