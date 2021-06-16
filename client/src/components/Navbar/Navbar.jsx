import { Component } from 'react';

// Import Components
import UpperNavbar from './UpperNavbar/UpperNavbar';
import MiddleNavbar from './MiddleNavbar/MiddleNavbar';
import BottomNavbar from './BottomNavbar/BottomNavbar';

export class Navbar extends Component {
	render() {
		return (
			<header>
				<UpperNavbar />
				<MiddleNavbar />
				<BottomNavbar />
			</header>
		);
	}
}

export default Navbar;
