import { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import classes from './Cart.module.scss';

class Cart extends Component {
	render() {
		const { icon, link, cartItems, toggleCart } = this.props;

		return (
			<div className={classes.cart} onClick={toggleCart}>
				<span className="icon mr-2 position-relative">
					<Image src={icon} fluid />
					<span className={classes.cart__items}>{cartItems}</span>
				</span>
				<span className="link">{link}</span>
			</div>
		);
	}
}

Cart.propTypes = {
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Cart;
