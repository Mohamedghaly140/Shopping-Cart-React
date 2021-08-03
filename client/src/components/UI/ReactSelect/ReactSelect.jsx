import React, { Component } from "react";
import Select from "react-select";
import "./ReactSelect.scss";

class ReactSelect extends Component {
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
        className={`${className ? className : "react__select"}-container`}
        classNamePrefix={`${className ? className : "react__select"}`}
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

ReactSelect.defaultProps = {
  menuPlacement: "auto",
};

export default ReactSelect;
