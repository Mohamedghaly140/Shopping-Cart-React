import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import BestOffers from "../components/BestOffers/BestOffers";
import BestSellers from "../components/BestSellers/BestSellers";
import Carousel from "../components/Carousel/Carousel";
import ShopCategory from "../components/ShopCategory/ShopCategory";
import PremiumProducts from "../components/PremiumProducts/PremiumProducts";
import Spinner from "../components/UI/Spinner/Spinner";

import shopData from "../services/shop.json";

class Organization extends Component {
  render() {
    const { loading, products, offers } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Carousel />
        <div className="container">
          <BestSellers
            products={products}
            title="Best Sellers"
            subTitle="Check out our best sellers."
          />
          <ShopCategory shops={shopData} />
          <BestSellers
            products={products}
            title="On Sale"
            subTitle="Hurry up! catch these products before the sale ends."
          />
          <BestOffers offers={offers} />
          <PremiumProducts products={products} noLine />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Organization);
