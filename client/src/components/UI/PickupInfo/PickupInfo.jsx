import { Component } from 'react';
import classes from './PickupInfo.module.scss';

export default class PickupInfo extends Component {
	render() {
		return (
			<div>
				<span className={classes.pickup}>Pickup From:</span>
				<span className={classes.pickup__value}>Genena Mall</span>
			</div>
		);
	}
}
