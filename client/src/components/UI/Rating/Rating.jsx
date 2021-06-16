import { Component, Fragment } from 'react';
import { Image } from 'react-bootstrap';
import classes from './Rating.module.scss';

export class Rating extends Component {
	render() {
		const rates = [
			{ star: true },
			{ star: true },
			{ star: true },
			{ star: true },
			{ star: false },
		];

		return (
			<div className={classes.rating}>
				{rates.map((item, index) => (
					<Fragment key={index}>
						{item ? (
							<Image
								fluid
								className={classes.rating__item}
								src="/images/star.svg"
							/>
						) : (
							<Image
								fluid
								className={classes.rating__item}
								src="/images/empty_star.svg"
							/>
						)}
					</Fragment>
				))}
			</div>
		);
	}
}

export default Rating;
