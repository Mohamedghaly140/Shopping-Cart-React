import { Component } from 'react';

// Import Components
import UpperNavbar from './UpperNavbar/UpperNavbar';
import MiddleNavbar from './MiddleNavbar/MiddleNavbar';
import BottomNavbar from './BottomNavbar/BottomNavbar';
import BreadCrumb from './BreadCrumb/BreadCrumb';

export class Navbar extends Component {
	render() {
		return (
			<header>
				<UpperNavbar />
				<MiddleNavbar
					toggleCart={this.props.toggleCart}
					cartItems={this.props.cartItems}
				/>
				<BottomNavbar />
				<BreadCrumb />
			</header>
		);
	}
}

export default Navbar;
