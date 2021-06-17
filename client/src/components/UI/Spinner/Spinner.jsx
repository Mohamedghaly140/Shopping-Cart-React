import { Component } from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

export class Spinner extends Component {
	render() {
		return (
			<div
				className="d-flex align-items-center justify-content-center m-auto"
				style={{ height: '400px' }}
			>
				<BootstrapSpinner animation="border" role="status" variant="dark" />
			</div>
		);
	}
}

export default Spinner;
