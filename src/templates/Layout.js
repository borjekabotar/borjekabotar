import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  a {
    text-decoration: none !important;
  }
  blockquote {
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Cinzel Decorative";
  }
  p,
  li {
    font-family: "Montserrat", sans-serif;
  }
  .col {
    h3,
    h4 {
      font-family: "Montserrat", sans-serif;
    }
  }
  .carousel-item {
    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 2rem;
    }
  }
  .btn-link {
    font-family: "Montserrat" !important;
    background-color: rgba(204, 119, 34, 0.7) !important;
    color: rgb(255, 255, 255) !important;
    padding: 1rem !important;
    border: none !important;
    font-size: 2rem !important;
    text-decoration: none !important;

    &:hover {
      background-color: rgba(204, 119, 34, 0.7);
      border: none;
      font-weight: 700;
    }
  }

  .carousel-indicators,
  .carousel-control-next,
  .carousel-control-prev {
    visibility: hidden;
  }
`;

export default Layout;
