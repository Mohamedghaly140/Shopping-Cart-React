import React, { Component } from "react";
import Select from "react-select";
import "./SelectBox.scss";

class SelectBox extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;
    const { options, placeholder, menuPlacement = "auto" } = this.props;

    return (
      <Select
        className="select__box-container"
        classNamePrefix="select__box"
        options={options}
        value={selectedOption}
        onChange={this.handleChange}
        defaultValue={options[0]}
        placeholder={placeholder}
        isSearchable={false}
        menuPlacement={menuPlacement}
        styles={{
          menu: provided => ({ ...provided, zIndex: 99999999 }),
        }}
      />
    );
  }
}

export default SelectBox;
