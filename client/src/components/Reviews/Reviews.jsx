import React, { Component } from "react";
import ReviewItem from "./ReviewItem/ReviewItem";

import classes from "./Reviews.module.scss";

const reviews = [
  {
    title: "I Like it!",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad veniam, quis nos",
    user: "John Doe",
  },
  {
    title: "Very Good Product",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad veniam, quis nos",
    user: "John Doe",
  },
  {
    title: "",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad veniam, quis nos",
    user: "John Doe",
  },
  {
    title: "I Like it!",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad veniam, quis nos",
    user: "John Doe",
  },
];

class Reviews extends Component {
  state = {
    viewAll: true,
  };

  viewAllHandler = () => {
    this.setState({ viewAll: false });
  };

  render() {
    const { viewAll } = this.state;

    return (
      <div className={classes.reviews}>
        {reviews.slice(0, viewAll ? 2 : Infinity).map((item, index) => (
          <ReviewItem
            key={index}
            description={item.description}
            user={item.user}
          />
        ))}
        {viewAll && (
          <div className={classes.btn__container}>
            <button className={classes.view__all} onClick={this.viewAllHandler}>
              View All
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Reviews;
