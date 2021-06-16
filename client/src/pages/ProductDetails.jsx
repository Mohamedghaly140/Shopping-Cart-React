import { Component } from 'react';
import httpClient from '../services/httpClient';
import Spinner from '../components/UI/Spinner/Spinner';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';

class ProductDetails extends Component {
	state = {
		product: null,
		loading: false,
	};

	componentDidMount() {
		this.setState({ loading: true });
		(async () => {
			const { data } = await httpClient.get(
				`/api/products/${this.props.match.params.id}`
			);
			console.log(data);
			this.setState({ product: data.product, loading: false });
		})();
	}

	render() {
		const { loading, product } = this.state;

		return (
			<div>
				{loading && !product ? (
					<Spinner />
				) : (
					<ProductDetail product={product} />
				)}
				<SimilarProducts />
			</div>
		);
	}
}

export default ProductDetails;
