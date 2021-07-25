import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Spinner";
import ProductList from "../components/ProductList/ProductList";
import Banner from "../components/Banner/Banner";
import BestOffers from "../components/BestOffers/BestOffers";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import ShopByBrand from "../components/ShopByBrand/ShopByBrand";
import VirtualTour from "../components/VirtualTour/VirtualTour";

class Home extends Component {
  render() {
    const { loading, products } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Banner />
        <div className="container">
          <ShopByCategory />
          <BestOffers />
          <ShopByBrand />
          <VirtualTour />

          <section className="mt-5">
            <ProductList products={products} />
          </section>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Home);
