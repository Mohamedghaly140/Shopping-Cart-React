import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Spinner";
import ProductList from "../components/ProductList/ProductList";

class Home extends Component {
  render() {
    const { loading, products } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap mb-2 mb-md-5">
          <h2>Products</h2>
          <Link
            to={`/result?search=${encodeURIComponent("Black T-Shirt tshit")}`}
            className="fw-bold"
            style={{ color: "#542e90" }}
          >
            Search For Black T-Shirt
          </Link>
          <Link
            to="/shop-all-categories"
            className="fw-bold"
            style={{ color: "#542e90" }}
          >
            Shop All
          </Link>
        </div>
        <section>
          <ProductList products={products} />
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
