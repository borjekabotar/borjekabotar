import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <Container>
            <Row>
              <Col sm={2}>
                <StaticImage
                  src="../../static/logos/logo_bn.png"
                  alt="Logo Borj-e Kabotar"
                  width={200}
                  placeholder="blurred"
                  objectFit="contain"
                />
              </Col>
              <Col className="footer" sm={5}>
                <h5>Borj-e Kabotar</h5>
                <h6>
                  Architecture and anthropology of the pigeon towers in the
                  Isfahan province
                </h6>
                <p>
                  Danilo Rosati and Fariba Saiedi Anaraki
                  <br />
                  Nation: Iran <br />
                  Period: 2018 – in progress <br />
                </p>
                <p>
                  Contact <br />
                  <a href="mailto:borjekabotar@gmail.com">
                    borjekabotar@gmail.com
                  </a>
                </p>
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </footer>
      </Wrapper>
    </>
  );
};

//style
const Wrapper = styled.section`
  footer {
    padding: 2rem 2rem;
    background-color: whitesmoke;
    font-family: "Montserrat", sans-serif !important;
    h5,
    h6 {
      font-family: "Montserrat", sans-serif !important;
      color: rgb(43, 20, 5) !important;
      font-size: 1rem !important;
      text-align: left !important;
      font-weight: 400 !important;
      padding-bottom: 0.5rem !important;
      font-style: normal !important;
    }
    .b-and-w {
      margin-top: 2rem;
      filter: invert(100%);
    }
    p {
      text-align: left !important;
      font-size: 0.8rem !important;
      font-weight: 300 !important;
    }
    p a {
      color: rgb(43, 20, 5) !important;
      font-weight: 400 !important;
    }
    .partner img {
      filter: invert(100%);
    }
  }
`;
export default Footer;
