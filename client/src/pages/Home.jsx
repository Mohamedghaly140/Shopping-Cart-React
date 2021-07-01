import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Product from "../components/Product/Product";
import Spinner from "../components/UI/Spinner/Spinner";

class Home extends Component {
  render() {
    const { loading, products } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <h2 className="mb-5">Products</h2>
        <section>
          {products.length === 0 ? (
            <div className="m-auto">
              <h3>There is no products yet</h3>
            </div>
          ) : (
            <div className="row">
              {products.map(product => (
                <div
                  key={product.id}
                  className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3"
                >
                  <Link to={`/product/${product.id}`}>
                    <Product product={product} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
