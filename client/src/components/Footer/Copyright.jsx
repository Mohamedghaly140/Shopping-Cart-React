import { Component } from 'react';
import { Image } from 'react-bootstrap';

class Copyright extends Component {
	render() {
		return (
			<div className="d-flex align-items-center justify-content-between pt-4">
				<p className="mb-0">© 2021 yeshtery, all rights reserved.</p>
				<div>
					<Image src="images/cash.png" fluid />
					<Image className="mx-3" src="images/visa.png" fluid />
					<Image src="images/matercard.png" fluid />
				</div>
				<p className="mb-0">
					<span className="d-inline-block">Powered By</span>{' '}
					<Image src="images/nas_nav.svg" fluid />
				</p>
			</div>
		);
	}
}

export default Copyright;
