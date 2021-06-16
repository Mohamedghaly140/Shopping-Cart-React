import { Component } from 'react';
import { Image } from 'react-bootstrap';
import classes from './Quantity.module.scss';

class Quantity extends Component {
	state = {
		qty: 0,
	};

	addQtyHandler = () => {
		this.setState(prevState => {
			return {
				qty: prevState.qty + 1,
			};
		});
	};

	minusQtyHandler = () => {
		if (this.state.qty <= 0) {
			return;
		}
		this.setState(prevState => {
			return {
				qty: prevState.qty - 1,
			};
		});
	};

	render() {
		const { qty } = this.state;
		const { addToCart, product } = this.props;

		return (
			<div>
				<div className={classes.counter}>
					<button className={classes.btn} onClick={this.minusQtyHandler}>
						<Image src="/images/minus.svg" fluid />
					</button>
					<span>{qty}</span>
					<button className={classes.btn} onClick={this.addQtyHandler}>
						<Image src="/images/plus.svg" fluid />
					</button>
				</div>
				<div className="actions mt-4">
					<button
						disabled={qty === 0}
						className={classes.add_to_cart}
						onClick={() => addToCart({ ...product, qty })}
					>
						Add To Cart
					</button>
					<button className={classes.pick__up}>Pickup From Store</button>
				</div>
			</div>
		);
	}
}

export default Quantity;
