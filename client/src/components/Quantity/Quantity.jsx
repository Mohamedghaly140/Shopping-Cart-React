import { Component } from 'react';
import { Image } from 'react-bootstrap';
import classes from './Quantity.module.scss';

class Quantity extends Component {
	render() {
		return (
			<div>
				<div className={classes.counter}>
					<button className={classes.btn}>
						<Image src="/images/minus.svg" fluid />
					</button>
					<span>1</span>
					<button className={classes.btn}>
						<Image src="/images/plus.svg" fluid />
					</button>
				</div>
				<div className="actions mt-4">
					<button className={classes.add_to_cart}>Add To Cart</button>
					<button className={classes.pick__up}>Pickup From Store</button>
				</div>
			</div>
		);
	}
}

export default Quantity;
