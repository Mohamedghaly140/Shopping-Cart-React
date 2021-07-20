import React from "react";
import OfferItem from "../UI/OfferItem/OfferItem";

const OffersList = props => {
	const { offers } = props;

	return offers.map(item => (
		<OfferItem
			key={item.id}
			title={item.title}
			brand={item.brand}
			imageUrl={item.imageUrl}
			description={item.description}
		/>
	));
};

export default OffersList;
