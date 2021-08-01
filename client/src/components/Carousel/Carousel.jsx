import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.scss";

class Carousel extends Component {
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

    return (
      <OwlCarousel
        className="owl-theme"
        loop={true}
        margin={0}
        nav={true}
        dots={false}
        center={true}
        autoplay={true}
        navText={[
          `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.794"
                height="12"
                viewBox="0 0 7.794 12"
                >
                <path
                    d="M2843.318,348.013a.393.393,0,0,0,.246-.7l-6.627-5.3,6.627-5.3a.393.393,0,1,0-.491-.613l-7.009,5.607a.393.393,0,0,0,0,.613l7.009,5.608A.392.392,0,0,0,2843.318,348.013Z"
                    transform="translate(-2835.917 -336.013)"
                />
            </svg>`,
          `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.794"
                height="12"
                viewBox="0 0 7.794 12"
                {...props}
                >
                <path
                    d="M3268.211,336.013a.393.393,0,0,0-.246.7l6.627,5.3-6.627,5.3a.393.393,0,0,0,.491.613l7.009-5.608a.393.393,0,0,0,0-.613l-7.009-5.607A.391.391,0,0,0,3268.211,336.013Z"
                    transform="translate(-3267.818 -336.013)"
                />
            </svg> 
          `,
        ]}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        }}
      >
        <div className="item">
          <img
            className="img-fluid"
            src={isMobile ? "/images/slide2@2x.png" : "/images/slide1@2x.png"}
            alt="slide"
          />
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src={isMobile ? "/images/slide2@2x.png" : "/images/slide1@2x.png"}
            alt="slide"
          />
        </div>
      </OwlCarousel>
    );
  }
}

export default Carousel;
