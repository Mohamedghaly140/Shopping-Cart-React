import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Spinner from "../../components/UI/Spinner/Spinner";
import BestOffers from "../../components/BestOffers/BestOffers";
import ShopByBrand from "../../components/ShopByBrand/ShopByBrand";
import VirtualTour from "../../components/VirtualTour/VirtualTour";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import GiftsOnBudget from "../../components/GiftsOnBudget/GiftsOnBudget";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";
import PremiumProducts from "../../components/PremiumProducts/PremiumProducts";

import bannerSm from "../../images/banner.png";
import bannerLg from "../../images/banner@2x.png";

class Home extends Component {
  render() {
    const { loading, products, gifts, brands, offers, tours, categories } =
      this.props;

    const banner = {
      large: bannerLg,
      small: bannerSm,
    };

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Banner bannerUrl={banner} />
        <div className="container">
          <ShopByCategory categories={categories} />
          <BestOffers offers={offers} />
          <ShopByBrand brands={brands} />
          <VirtualTour tours={tours} />
          <PremiumProducts products={products} />
          <GiftsOnBudget gifts={gifts} />
          <VideoPlayer />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Home);
