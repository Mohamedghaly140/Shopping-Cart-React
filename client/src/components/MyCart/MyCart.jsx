import { Component } from 'react';
import { Image } from 'react-bootstrap';
import Backdrop from '../Backdrop/Backdrop';
import CartItem from '../CartItem/CartItem';
import './MyCart.scss';

export class MyCart extends Component {
	render() {
		const { openCart, toggleCart, cart } = this.props;

		return (
			<>
				<Backdrop toggleCart={toggleCart} openCart={openCart} />
				<div className={`my__cart ${openCart ? 'open' : 'close'}`}>
					<div className="d-flex align-items-center justify-content-end mb-2">
						<div onClick={toggleCart}>
							<Image className="close" src="images/close.svg" fluid />
						</div>
					</div>
					<h2 className="title text-center mb-3">My Cart</h2>
					<p className="summary">Cart Summary</p>
					<div className="d-flex align-items-center justify-content-center flex-column">
						{cart.length === 0 ? (
							<p className="my-4">You have no items yet..</p>
						) : (
							cart.map(item => <CartItem key={item.id} product={item} />)
						)}
					</div>
					<p className="total">
						Total:{' '}
						{cart
							.reduce(
								(prevValue, curValue) =>
									prevValue + curValue.qty * curValue.price,
								0
							)
							.toFixed(3)}{' '}
						L.E
					</p>
					<div className="d-flex align-items-center justify-content-between">
						<button className="review">Review Cart</button>
						<button className="checkout">Complete Checkout</button>
					</div>
				</div>
			</>
		);
	}
}

export default MyCart;
