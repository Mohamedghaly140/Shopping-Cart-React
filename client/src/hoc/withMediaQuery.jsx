import React, { Component } from "react";

export const withMediaQuery = WrappedComponent => {
  return class WithMediaQuery extends Component {
    state = {
      viewportWidth: window.innerWidth,
    };

    componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState({ viewportWidth: window.innerWidth });
    };

    render() {
      const { viewportWidth } = this.state;

      const isMobile = Boolean(viewportWidth <= 576);
      const isMobileSm = Boolean(viewportWidth <= 320);
      const isTablet = Boolean(viewportWidth >= 768 && viewportWidth <= 991.98);
      const isTabletLg = Boolean(
        viewportWidth >= 992 && viewportWidth <= 1199.98
      );
      const isDesktop = Boolean(viewportWidth >= 1200);

      return (
        <WrappedComponent
          {...this.props}
          isMobile={isMobile}
          isMobileSm={isMobileSm}
          isTablet={isTablet}
          isTabletLg={isTabletLg}
          isDesktop={isDesktop}
        />
      );
    }
  };
};
