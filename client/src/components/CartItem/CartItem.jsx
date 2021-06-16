import { Component } from 'react';
import { Image } from 'react-bootstrap';
import classes from './CartItem.module.scss';

export class CartItem extends Component {
	render() {
		const { description, qty, imageUrl, price } = this.props.product;

		return (
			<div className={classes.CartItem}>
				<div className={classes.imageContainer}>
					<Image src={imageUrl.small} fluid />
				</div>
				<div>
					<p className={classes.description}>{description}</p>
					<p className={classes.quantity}>Quantity: {qty}</p>
					<div className="d-flex align-items-center justify-content-between flex-row">
						<p className={classes.price}>Price: {price}</p>
						<button className={classes.remove}>Remove</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CartItem;
