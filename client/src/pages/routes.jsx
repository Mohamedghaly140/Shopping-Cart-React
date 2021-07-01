import { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Spinner";

import Home from "./Home";
const ProductDetails = lazy(() => import("./ProductDetails"));

class AppRouter extends Component {
  render() {
    const { addToCart, loading, products } = this.props;

    return (
      <BrowserRouter>
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
          </Suspense>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
