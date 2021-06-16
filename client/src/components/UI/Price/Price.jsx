import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import classes from './Price.module.scss';

export default class Price extends Component {
	render() {
		const { discount, price, discount_percent, discount_price } = this.props;

		return (
			<div className={classes.price__container}>
				<div>
					<div className={classes.price}>{price} L.E</div>
					{discount && (
						<div className={classes.discount__price}>
							<span>{discount_price} L.E</span>
							<div className={classes.discount__percent}>
								{discount_percent}%
							</div>
						</div>
					)}
				</div>
				<div>
					<Image fluid src="/images/adidas.svg" />
				</div>
			</div>
		);
	}
}
