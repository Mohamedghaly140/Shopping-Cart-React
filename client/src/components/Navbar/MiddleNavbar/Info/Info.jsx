import { Component } from 'react';
import classes from './Info.module.scss';

// Import Components
import InfoItem from '../../../UI/InfoItem/InfoItem';

class Info extends Component {
	state = {
		infoLinks: [
			{ id: 1, icon: '/images/shopping_bag.svg', link: 'Cart' },
			{ id: 2, icon: '/images/favourite.svg', link: 'Wishlist' },
			{ id: 3, icon: '/images/user.svg', link: 'Login' },
		],
	};

	render() {
		const { infoLinks } = this.state;

		return (
			<div className={classes.info}>
				{infoLinks.map(item => (
					<InfoItem key={item.id} icon={item.icon} link={item.link} />
				))}
			</div>
		);
	}
}

export default Info;
