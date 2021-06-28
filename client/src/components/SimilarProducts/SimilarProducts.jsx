import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product/Product";
import httpClient from "../../services/httpClient";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./SimilarProducts.module.scss";

class SimilarProducts extends Component {
  state = {
    products: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    (async () => {
      const { data } = await httpClient.get("/api/products");
      this.setState({ products: data.products, loading: false });
    })();
  }

  render() {
    const { loading, products } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Container className="pt-4">
        <h2
          style={{ color: "#542E90", fontSize: "28px" }}
          className="mb-2 font-weight-bold"
        >
          SimilarProducts
        </h2>
        <p style={{ color: "#575756", fontSize: "22px" }}>
          You may like these products also
        </p>
        <section className={classes.scroll}>
          {products.length === 0 ? (
            <div className="m-auto">
              <h3>There is no products yet</h3>
            </div>
          ) : (
            <Row className="flex-nowrap">
              {products.slice(0, 6).map((product) => (
                <Col
                  key={product.id}
                  className="mb-4"
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Link to={`/product/${product.id}`}>
                    <Product product={product} />
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        </section>
      </Container>
    );
  }
}

export default SimilarProducts;
