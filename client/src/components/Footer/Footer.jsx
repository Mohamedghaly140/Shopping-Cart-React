import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Footer.module.scss';

class Footer extends Component {
	render() {
		return (
			<footer className={classes.footer}>
				<Container>Footer</Container>
			</footer>
		);
	}
}

export default Footer;
