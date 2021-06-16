import { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Spinner from '../UI/Spinner/Spinner';
import Rating from '../UI/Rating/Rating';
import Price from '../UI/Price/Price';
import Sizes from '../Sizes/Sizes';
import Colors from '../Colors/Colors';
import Quantity from '../Quantity/Quantity';
import PreviewImages from './PreviewImages';
import classes from './ProductDetail.module.scss';

export class ProductDetail extends Component {
	render() {
		if (!this.props.product) {
			return <Spinner />;
		}

		const {
			imageUrl,
			description,
			rates,
			price,
			discount,
			discount_price,
			discount_percent,
		} = this.props.product;

		return (
			<Container className={classes.product__details}>
				<Row>
					<Col lg={6}>
						<div className={classes.main__image}>
							<Image src={imageUrl.large} fluid />
							<span>
								<Image src="/images/360@2x.svg" fluid />
							</span>
						</div>
						<PreviewImages />
					</Col>
					<Col lg={6}>
						<Image className="mb-3" src="/images/adidas.svg" fluid />
						<p className="description">{description}</p>
						<p style={{ color: '#a7a9ac' }}>Men</p>
						<div className="d-flex align-items-center justify-content-start">
							<Rating /> <span className={classes.rating}>4.2 of 5</span>
							<span className={classes.rates}>{rates} Rates</span>
						</div>
						<div className="my-3">
							<Price
								price={price}
								discount={discount}
								discount_price={discount_price}
								discount_percent={discount_percent}
								inline
							/>
						</div>
						<hr style={{ border: '0.5px solid #D9D9D9' }} />
						<div>
							<h4 className={classes.title}>Size</h4>
							<Sizes />
						</div>
						<hr style={{ border: '0.5px solid #D9D9D9' }} />
						<div className="my-3">
							<h4 className={classes.title}>Color</h4>
							<Colors />
						</div>
						<hr style={{ border: '0.5px solid #D9D9D9' }} />
						<div className="my-3">
							<h4 className={classes.title}>Quantity</h4>
							<Quantity
								addToCart={this.props.addToCart}
								product={this.props.product}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ProductDetail;
