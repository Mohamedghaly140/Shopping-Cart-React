import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import classes from './Product.module.scss';

// Import Components
import PickupInfo from '../UI/PickupInfo/PickupInfo';
import Rating from '../UI/Rating/Rating';
import Price from '../UI/Price/Price';

export class Product extends Component {
	render() {
		return (
			<div className={classes.product}>
				<div className={classes.image__container}>
					<Image fluid src="/images/product2.png" />
					<div className={classes.floating__icon}>
						<Image fluid src="/images/360.svg" />
					</div>
				</div>
				<div className={classes.product__content}>
					<p className={classes.description}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					</p>
					<Price discount={this.props.discount} />
					<div className={classes.rating__container}>
						<Rating /> <span className={classes.rate}>4.2 of 5</span>
					</div>
				</div>
				<PickupInfo />
			</div>
		);
	}
}

export default Product;
