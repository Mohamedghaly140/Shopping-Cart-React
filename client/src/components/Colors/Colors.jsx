import { Component } from "react";
import ColorItem from "./ColorItem";

export class Colors extends Component {
  state = {
    selected: "black",
  };

  colorSelectHandler = (value) => {
    this.setState({ selected: value });
  };

  render() {
    const colors = [
      { id: 1, color: "/images/black.png", value: "black" },
      { id: 2, color: "/images/red.png", value: "red" },
    ];

    return (
      <div className="d-flex align-items-center justify-content-start">
        {colors.map((item) => (
          <ColorItem
            key={item.id}
            image={item.color}
            value={item.value}
            onSelectColor={this.colorSelectHandler}
            selected={this.state.selected === item.value}
          />
        ))}
      </div>
    );
  }
}

export default Colors;
