import { Component } from 'react';
import ColorItem from './ColorItem';

export class Colors extends Component {
	render() {
		return (
			<div className="d-flex align-items-center justify-content-start">
				<ColorItem image="images/black.png" selected />
				<ColorItem image="images/red.png" />
			</div>
		);
	}
}

export default Colors;
