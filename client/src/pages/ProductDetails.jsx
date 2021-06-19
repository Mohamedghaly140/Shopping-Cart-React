import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import httpClient from '../services/httpClient';
import Spinner from '../components/UI/Spinner/Spinner';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';

class ProductDetails extends Component {
	state = {
		product: null,
		loading: false,
	};

	fetchAndSetProduct() {
		try {
			this.setState({ loading: true });
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
		if (+prevProps.match.params.id !== +this.props.match.params.id) {
			this.fetchAndSetProduct();
		}
	}

	render() {
		const { loading, product } = this.state;
		const { addToCart } = this.props;

		return (
			<div>
				{loading && !product ? (
					<Spinner />
				) : (
					<ProductDetail product={product} addToCart={addToCart} />
				)}
				<SimilarProducts />
			</div>
		);
	}
}

export default withRouter(ProductDetails);
