import { Component } from 'react';
import './Backdrop.scss';

class Backdrop extends Component {
	render() {
		const { openCart, toggleCart } = this.props;

		return (
			<div
				onClick={toggleCart}
				className={`backdrop ${openCart ? 'open' : 'close'}`}
			>
				{this.props.children}
			</div>
		);
	}
}

export default Backdrop;
