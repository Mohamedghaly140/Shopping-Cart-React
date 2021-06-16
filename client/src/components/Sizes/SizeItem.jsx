import { Component } from 'react';
import classes from './SizeItem.module.scss';

class SizeItem extends Component {
	render() {
		return (
			<div
				style={{ backgroundColor: this.props.selected ? '#ECECEC' : '#fff' }}
				className={classes.size__item}
			>
				<span>{this.props.size}</span>
			</div>
		);
	}
}

export default SizeItem;
