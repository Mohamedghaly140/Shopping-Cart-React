import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product/Product';
import httpClient from '../services/httpClient';
import Spinner from '../components/UI/Spinner/Spinner';

class Home extends Component {
	state = {
		products: [],
		loading: false,
	};

	componentDidMount() {
		this.setState({ loading: true });
		(async () => {
			const { data } = await httpClient.get('/api/products');
			this.setState({ products: data.products, loading: false });
		})();
	}

	render() {
		const { loading, products } = this.state;

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
									xs={12}
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

export default Home;
