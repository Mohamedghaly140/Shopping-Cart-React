import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import classes from './MiddleNavbar.module.scss';

// Import Components
import Info from './Info/Info';
import Search from '../../UI/Search/Search';

export class MiddleNavbar extends Component {
	render() {
		return (
			<nav className={classes.middle__navbar}>
				<Container>
					<div className={classes.inner}>
						<Search />
						<Image src="/images/adidas.svg" fluid />
						<Info toggleCart={this.props.toggleCart} />
					</div>
				</Container>
			</nav>
		);
	}
}

export default MiddleNavbar;
