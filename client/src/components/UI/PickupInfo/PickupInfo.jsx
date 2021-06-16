import { Component, Fragment } from 'react';
import classes from './PickupInfo.module.scss';

export default class PickupInfo extends Component {
	render() {
		const { pickup_place, pickup_info } = this.props;

		return (
			<Fragment>
				{pickup_place && (
					<div className="d-flex align-items-center justify-content-center">
						<span className={classes.pickup}>Pickup From: </span>
						<span className={classes.pickup__value}>{pickup_place}</span>
					</div>
				)}
				{pickup_info && (
					<div className="d-flex align-items-center justify-content-between px-2">
						<div>
							<span className={classes.pickup}>From: </span>
							<span className={classes.pickup__value}>{pickup_info.from}</span>
						</div>
						<div>
							<span className={classes.pickup}>To: </span>
							<span className={classes.pickup__value}>
								{pickup_info.countery}
							</span>
						</div>
						<div>
							<span className={classes.pickup}>To: </span>
							<span className={classes.pickup__value}>
								{pickup_info.delivery_in}
							</span>
						</div>
					</div>
				)}
			</Fragment>
		);
	}
}
