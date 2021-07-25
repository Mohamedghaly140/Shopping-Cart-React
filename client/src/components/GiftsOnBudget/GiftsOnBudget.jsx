import React, { Component } from "react";
import Section from "../UI/Section/Section";

class GiftsOnBudget extends Component {
  render() {
    const options = [
      { value: "Rate", label: "Rate" },
      { value: "price", label: "Price" },
    ];

    return (
      <Section
        selectOptions={options}
        selectPlaceholder="Fashion"
        buttonTitle="View All"
        title="Gifts On Budget"
        subTitle="Choose your gift within your budget."
      ></Section>
    );
  }
}

export default GiftsOnBudget;
