import React from "react";

export const UiContext = React.createContext({
  scrolled: false,
  changeHandlerFalse: () => {},
  changeHandlerTrue: () => {},
});

class UiContextProvider extends React.Component {
  state = {
    scrolled: false,
  };

  changeHandlerFalse = () => {
    this.setState({ scrolled: false });
  };

  changeHandlerTrue = () => {
    this.setState({ scrolled: true });
  };

  render() {
    const { scrolled } = this.state;

    const vlaues = {
      scrolled,
      changeHandlerTrue: this.changeHandlerTrue,
      changeHandlerFalse: this.changeHandlerFalse,
    };

    return (
      <UiContext.Provider value={vlaues}>
        {this.props.children}
      </UiContext.Provider>
    );
  }
}

export default UiContextProvider;
