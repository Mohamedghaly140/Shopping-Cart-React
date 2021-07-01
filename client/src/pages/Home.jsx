import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import Spinner from "../components/UI/Spinner/Spinner";

class Home extends Component {
  render() {
    const { loading, products } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Container>
        <h2 className="mb-5">Products</h2>
        <section>
          {products.length === 0 ? (
            <div className="m-auto">
              <h3>There is no products yet</h3>
            </div>
          ) : (
            <Row>
              {products.map(product => (
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

export default withRouter(Home);
