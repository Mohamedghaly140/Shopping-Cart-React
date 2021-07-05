import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Title from "../components/UI/Title/Title";
import SubTitle from "../components/UI/SubTitle/SubTitle";

class ShopAllCategories extends Component {
  render() {
    return (
      <section className="py-4">
        <div className="container">ShopAllCategories</div>
      </section>
    );
  }
}

export default withRouter(ShopAllCategories);
