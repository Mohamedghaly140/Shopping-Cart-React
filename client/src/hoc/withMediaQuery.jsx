import React, { PureComponent } from "react";

function currentWidth() {
  return {
    isMobile: window.innerWidth <= 576,
    isMobileSm: window.innerWidth <= 320,
    isTablet: window.innerWidth >= 768 && window.innerWidth <= 992,
    isTabletLg: window.innerWidth >= 992 && window.innerWidth <= 1200,
    isDesktop: window.innerWidth >= 1200,
  };
}

export const withMediaQuery = WrappedComponent => {
  return class WithMediaQuery extends PureComponent {
    state = currentWidth();

    componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState(currentWidth());
    };

    render() {
      const { isMobile, isMobileSm, isTablet, isTabletLg, isDesktop } =
        this.state;

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
