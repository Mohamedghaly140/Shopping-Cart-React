import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Subscribe from "../UI/Subscribe/Subscribe";
import Copyright from "./Copyright";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const footerLinks = [
      { title: "About Us" },
      { title: "Contact Us" },
      { title: "Track Order" },
      { title: "Terms & Conditions" },
      { title: "Privacy Policy" },
      { title: "Sell With Us" },
      { title: "Shipping And Returns" },
    ];

    const socialMedia = [
      { title: "/YESHTERY", icon: "/images/facebook.svg" },
      { title: "/YESHTERY", icon: "/images/linkedin.svg" },
      { title: "/YESHTERY", icon: "/images/instagram.svg" },
      { title: "/YESHTERY", icon: "/images/twitter.svg" },
    ];

    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md={6}>
              <div>
                <Image
                  className="mb-4"
                  src="/images/brand_logo_yellow.svg"
                  fluid
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
                <p>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut
                  laoreet dolore magna.
                </p>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="subscribe">
                <h3>Subscribe to our newsletter</h3>
                <Subscribe />
              </div>
              <Row>
                <Col>
                  <ul>
                    {footerLinks.map((link) => (
                      <li key={link.title}>
                        <a href=":javascript;">{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col>
                  <ul>
                    {socialMedia.map((link, index) => (
                      <li key={index}>
                        <Image src={link.icon} fluid className="mr-1" />{" "}
                        <a href=":javascript;">{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="my-2" style={{ border: "0.2px solid #999" }} />
          <Copyright />
        </Container>
      </footer>
    );
  }
}

export default Footer;
