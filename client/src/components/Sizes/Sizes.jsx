import { Component } from "react";
import SizeItem from "./SizeItem";

export class Sizes extends Component {
  state = {
    selected: "xLarge",
  };

  selectSizeHandler = value => {
    this.setState({ selected: value });
    // console.log(value);
  };

  render() {
    const sizes = [
      { id: 1, size: "Small", value: "small" },
      { id: 2, size: "Medium", value: "medium" },
      { id: 3, size: "Large", value: "large" },
      { id: 4, size: "X Large", value: "xLarge" },
      { id: 5, size: "XX Large", value: "xxLarge" },
    ];

    return (
      <div className="d-flex align-items-center justify-content-start">
        {sizes.map(item => (
          <SizeItem
            key={item.id}
            size={item.size}
            value={item.value}
            onSelectSize={this.selectSizeHandler}
            selected={this.state.selected === item.value}
          />
        ))}
      </div>
    );
  }
}

export default Sizes;
