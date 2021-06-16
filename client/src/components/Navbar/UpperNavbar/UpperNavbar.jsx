import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import classes from './UpperNavbar.module.scss';

// Import Components
import Offer from './Offer/Offer';
import Info from './Info/Info';

export class UpperNavbar extends Component {
	render() {
		return (
			<nav className={classes.upper__navbar}>
				<Container>
					<div className={classes.inner}>
						<span className={classes.menu}>
							<Image src="/images/menu_icon.svg" fluid />
						</span>
						<Image src="/images/brand_logo_black.svg" fluid />
						<Offer />
						<Info />
					</div>
				</Container>
			</nav>
		);
	}
}

export default UpperNavbar;
