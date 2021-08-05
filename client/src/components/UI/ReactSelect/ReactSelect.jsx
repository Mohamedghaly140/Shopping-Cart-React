import React, { Component } from "react";
import Select from "react-select";
import "./ReactSelect.scss";

class ReactSelect extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;
    const { options, placeholder, prefix, menuPlacement } = this.props;

    return (
      <Select
        className={`${prefix}-container`}
        classNamePrefix={prefix}
        options={options}
        value={selectedOption}
        onChange={this.handleChange}
        defaultValue={options[0]}
        placeholder={placeholder}
        isSearchable={false}
        maxMenuHeight={200}
        menuPlacement={menuPlacement}
        styles={{
          menu: provided => ({ ...provided, zIndex: 99999999 }),
        }}
      />
    );
  }
}

ReactSelect.defaultProps = {
  prefix: "react__select",
  menuPlacement: "auto",
};

export default ReactSelect;
