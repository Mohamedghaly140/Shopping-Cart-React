import { Component } from 'react';
import SizeItem from './SizeItem';

export class Sizes extends Component {
	render() {
		return (
			<div className="d-flex align-items-center justify-content-start">
				<SizeItem size="Small" />
				<SizeItem size="Medium" />
				<SizeItem size="Large" />
				<SizeItem size="X Large" selected />
				<SizeItem size="XX Large" />
			</div>
		);
	}
}

export default Sizes;
