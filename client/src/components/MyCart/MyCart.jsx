import { Component } from 'react';
import { Image } from 'react-bootstrap';
import Backdrop from '../Backdrop/Backdrop';
import './MyCart.scss';

export class MyCart extends Component {
	render() {
		const { openCart, toggleCart } = this.props;

		return (
			<Backdrop toggleCart={toggleCart} openCart={openCart}>
				<div className={`my__cart ${openCart ? 'open' : 'close'}`}>
					<div className="d-flex align-items-center justify-content-end mb-2">
						<div onClick={toggleCart}>
							<Image
								onClick={toggleCart}
								className="close"
								src="/images/close.svg"
								fluid
							/>
						</div>
					</div>
					<h2 className="title">My Cart</h2>
					<p className="summary">Cart Summary</p>
				</div>
			</Backdrop>
		);
	}
}

export default MyCart;
