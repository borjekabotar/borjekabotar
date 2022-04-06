import React from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

const Layout = ({ children }) => {
  return (
    <>
      <Seo
        title="Borj-e Kabotar | Home"
        description="The towers for pigeons are widespread in the areas around Isfahan and Golpayegan and even today these buildings characterise the landscape. They are often imposing structures that can sometimes be mistaken for a defensive system. The earliest **towers** in the province of Isfahan date back to the 16th-17th centuries."
        url="https://www.borjekabotar.com/"
        image={withPrefix(`/logos/logo_bn.png`)}
      >
        <link rel="shortcut icon" href={withPrefix("/favicon/favicon.ico")} />
        <link
          rel="icon"
          type="image/x-icon"
          href={withPrefix(`/favicon/favicon.ico`)}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={withPrefix(`/favicon/favicon-16x16.png`)}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={withPrefix(`/favicon/favicon-32x32.png`)}
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="32x32"
          href={withPrefix(`/favicon/apple-touch-icon.png`)}
        />
      </Seo>

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
