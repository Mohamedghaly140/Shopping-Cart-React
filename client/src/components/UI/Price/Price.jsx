import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import classes from './Price.module.scss';

export default class Price extends Component {
	render() {
		const { discount } = this.props;

		return (
			<div className={classes.price__container}>
				<div>
					<div className={classes.price}>9,999 L.E</div>
					{discount && (
						<div className={classes.discount__price}>
							<span>9,999 L.E</span>
							<div className={classes.discount__percent}>50%</div>
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
