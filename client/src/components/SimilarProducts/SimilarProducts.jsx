import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product/Product";
import httpClient from "../../services/httpClient";
import Spinner from "../../components/UI/Spinner/Spinner";
import ArrowRight from "../Icons/ArrowRight";
import ArrowLeft from "../Icons/ArrowLeft";

import classes from "./SimilarProducts.module.scss";

class SimilarProducts extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

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

  slideLeftHandler = () => {
    this.sliderRef.current.scrollBy({
      left: -50,
      behavior: "smooth",
    });
  };

  slideRightHandler = () => {
    this.sliderRef.current.scrollBy({
      left: +50,
      behavior: "smooth",
    });
  };

  render() {
    const { loading, products } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Container className="pt-4">
        <h2 className={classes.title}>SimilarProducts</h2>
        <p className={classes.sub__title}>You may like these products also</p>
        <section className={classes.scroll}>
          <div className={classes.left__arrow} onClick={this.slideLeftHandler}>
            <span>
              <ArrowLeft />
            </span>
          </div>
          <div
            className={classes.right__arrow}
            onClick={this.slideRightHandler}
          >
            <span>
              <ArrowRight />
            </span>
          </div>
          {products.length === 0 ? (
            <div className="m-auto">
              <h3>There is no products yet</h3>
            </div>
          ) : (
            <Row className={classes.row__container} ref={this.sliderRef}>
              {products.slice(0, 5).map((product) => (
                <Col
                  key={product.id}
                  className="mb-4"
                  xs={6}
                  sm={6}
                  md={6}
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
