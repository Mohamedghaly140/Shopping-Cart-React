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
      tours,
      total,
      gifts,
      brands,
      offers,
      loading,
      products,
      cartItems,
      categories,
      onAddToCart,
      onRemoveFromCart,
      onUpdateQuantity,
    } = this.props;

    return (
      <Switch>
        <Route exact path="/">
          <Home
            gifts={gifts}
            tours={tours}
            brands={brands}
            offers={offers}
            loading={loading}
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
              onAddToCart={onAddToCart}
              loadingProducts={loading}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Route>
          <Route path="/cart">
            <Cart
              total={total}
              loading={loading}
              products={products}
              cartItems={cartItems}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              total={total}
              loading={loading}
              products={products}
              cartItems={cartItems}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveFromCart={onRemoveFromCart}
            />
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
