import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Title from "../../components/UI/Title/Title";
import Spinner from "../../components/UI/Spinner/Spinner";
import SubTitle from "../../components/UI/SubTitle/SubTitle";
import Categories from "../../components/Categories/Categories";

class ShopAllCategories extends Component {
  render() {
    const { loading, categories } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="container pt-4 pt-md-5">
        <Title>Shop All Categories</Title>
        <SubTitle>Find what you are looking for by category.</SubTitle>
        <Categories categories={categories} />
      </div>
    );
  }
}

export default withRouter(ShopAllCategories);
