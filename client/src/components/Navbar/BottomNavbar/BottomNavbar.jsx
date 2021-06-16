import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import classes from './BottomNavbar.module.scss';

export class BottomNavbar extends Component {
	render() {
		const links = [
			{ title: 'Men', active: false },
			{ title: 'Women', active: false },
			{ title: 'Unisex', active: false },
			{ title: 'Kids', active: false },
			{ title: 'Best Sellers', active: false },
			{ title: 'New Arrivals', active: false },
			{ title: 'Offers', active: true },
		];

		return (
			<nav className={classes.bottom__nav}>
				<Container>
					<ul className={classes.links__list}>
						{links.map((link, index) => (
							<li key={index} className={classes.list__item}>
								<a
									href=":javascript;"
									className={classes.nav__link}
									style={{ color: link.active && '#f11133' }}
								>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</Container>
			</nav>
		);
	}
}

export default BottomNavbar;
