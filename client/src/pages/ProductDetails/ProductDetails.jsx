import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import httpClient from "../../services/httpClient";
import Spinner from "../../components/UI/Spinner/Spinner";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import ProductReview from "../../components/ProductReview/ProductReview";
import FrequentlyBought from "../../components/FrequentlyBought/FrequentlyBought";

class ProductDetails extends Component {
  state = {
    product: null,
    loading: true,
  };

  fetchAndSetProduct() {
    try {
      (async () => {
        const { data } = await httpClient.get(
          `/api/products/${this.props.match.params.id}`
        );

        this.setState({ product: data.product, loading: false });
      })();
    } catch (err) {
      console.log(err.response.data.message);
      this.setState({ loading: false, product: null });
    }
  }

  componentDidMount() {
    this.fetchAndSetProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (+this.props.match.params.id !== +prevProps.match.params.id) {
      this.fetchAndSetProduct();
    }
  }

  render() {
    const { loading, product } = this.state;
    const { onAddToCart, loadingProducts, products } = this.props;

    return (
      <Fragment>
        {loading && !product ? (
          <Spinner />
        ) : (
          <ProductDetail product={product} onAddToCart={onAddToCart} />
        )}
        <ProductReview />
        {loading && !product ? (
          <Spinner />
        ) : (
          <FrequentlyBought product={product} addToCart={onAddToCart} />
        )}
        <SimilarProducts loading={loadingProducts} products={products} />
      </Fragment>
    );
  }
}

export default withRouter(ProductDetails);
