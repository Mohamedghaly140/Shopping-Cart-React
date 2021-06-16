import { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Subscribe.scss';

class Subscribe extends Component {
	render() {
		return (
			<div className="subscribe">
				<input type="email" placeholder="Enter Your Mail" />
				<button className="send">
					Subscribe <Image className="ml-1" src="/images/send.svg" fluid />
				</button>
			</div>
		);
	}
}

export default Subscribe;
