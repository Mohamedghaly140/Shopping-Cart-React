import { Component } from 'react';
// import httpClient from '../services/httpClient';

class ProductDetails extends Component {
	state = {
		product: null,
		loading: false,
	};

	componentDidMount() {}

	render() {
		return (
			<div>
				ProductDetails
				<p>{this.props.match.params.id}</p>
			</div>
		);
	}
}

export default ProductDetails;
