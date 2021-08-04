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
    const { options, placeholder, className, menuPlacement } = this.props;

    return (
      <Select
        className={`${className ? className : "select__box"}-container`}
        classNamePrefix={`${className ? className : "select__box"}`}
        options={options}
        value={selectedOption}
        onChange={this.handleChange}
        defaultValue={options[0]}
        placeholder={placeholder}
        isSearchable={false}
        maxMenuHeight={150}
        menuPlacement={menuPlacement}
        styles={{
          menu: provided => ({ ...provided, zIndex: 99999999 }),
        }}
      />
    );
  }
}

SelectBox.defaultProps = {
  menuPlacement: "auto",
};

export default SelectBox;
