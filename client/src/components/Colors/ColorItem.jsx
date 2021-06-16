import { Component } from 'react';
import { Image } from 'react-bootstrap';
import classes from './ColorItem.module.scss';

class ColorItem extends Component {
	render() {
		return (
			<div
				style={{ border: this.props.selected ? '1px solid #542E90' : 'none' }}
				className={classes.color__item}
			>
				<Image src={this.props.image} fluid />
			</div>
		);
	}
}

export default ColorItem;
