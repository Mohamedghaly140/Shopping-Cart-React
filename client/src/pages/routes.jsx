import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Spinner";

import Home from "./Home/Home";
const Cart = lazy(() => import("./Cart/Cart"));
const Checkout = lazy(() => import("./Checkout/Checkout"));
const SearchResult = lazy(() => import("./SearchResult/SearchResult"));
const Organization = lazy(() => import("./Organization/Organization"));
const ProductDetails = lazy(() => import("./ProductDetails/ProductDetails"));
const ShopAllCategories = lazy(() =>
  import("./ShopAllCategories/ShopAllCategories")
);

class AppRouter extends Component {
  render() {
    const {
      addToCart,
      loading,
      products,
      gifts,
      brands,
      offers,
      tours,
      categories,
    } = this.props;

    return (
      <Switch>
        <Route exact path="/">
          <Home
            loading={loading}
            gifts={gifts}
            tours={tours}
            brands={brands}
            offers={offers}
            products={products}
            categories={categories}
          />
        </Route>
        <Suspense fallback={<Spinner />}>
          <Route path="/organization">
            <Organization
              offers={offers}
              loading={loading}
              products={products}
            />
          </Route>
          <Route path="/product/:id">
            <ProductDetails
              products={products}
              addToCart={addToCart}
              loadingProducts={loading}
            />
          </Route>
          <Route path="/cart">
            <Cart products={products} loading={loading} />
          </Route>
          <Route path="/checkout">
            <Checkout products={products} loading={loading} />
          </Route>
          <Route path="/result">
            <SearchResult products={products} loading={loading} />
          </Route>
          <Route path="/shop-all-categories">
            <ShopAllCategories loading={loading} categories={categories} />
          </Route>
        </Suspense>
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default AppRouter;
