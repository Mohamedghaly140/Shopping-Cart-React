import { Component, Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Spinner";

import Home from "./Home";
const SearchResult = lazy(() => import("./SearchResult"));
const ProductDetails = lazy(() => import("./ProductDetails"));
const ShopAllCategories = lazy(() => import("./ShopAllCategories"));

class AppRouter extends Component {
  render() {
    const { addToCart, loading, products } = this.props;

    return (
      <Switch>
        <Route exact path="/">
          <Home loading={loading} products={products} />
        </Route>
        <Suspense fallback={<Spinner />}>
          <Route path="/product/:id">
            <ProductDetails
              products={products}
              addToCart={addToCart}
              loadingProducts={loading}
            />
          </Route>
          <Route path="/result">
            <SearchResult products={products} loadingProducts={loading} />
          </Route>
          <Route path="/shop-all-categories">
            <ShopAllCategories />
          </Route>
        </Suspense>
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default AppRouter;
