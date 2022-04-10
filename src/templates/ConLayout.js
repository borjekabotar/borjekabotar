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
    color: rgb(60, 116, 190);
    text-decoration: none;
  }
  .col img {
    width: 100%;
  }
  .bg-image {
    position: relative;
    margin: auto;

    /* .col.post-content img {
      width: 330px !important;
      @media (min-width: 576px) {
        width: 400px !important;
      }
      @media (min-width: 768px) {
        width: 400px !important;
      }
      @media (min-width: 992px) {
        width: 730px !important;
      }
      @media (min-width: 1200px) {
        width: 730px !important;
      } */

    h1 {
      font-family: "Montserrat";
      position: absolute;
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      color: white;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);

      @media (min-width: 576px) {
        font-size: 2.5rem;
      }

      @media (min-width: 768px) {
        font-size: 2.5rem;
      }

      @media (min-width: 992px) {
        font-size: 2.5rem;
      }

      @media (min-width: 1200px) {
        font-size: 3.5rem;
      }
    }
  }
  h4 {
    color: rgb(43,20,5)!important;
    font-weight: 400;
  }
  h6 {
    text-align: center !important;
    font-style: italic;
    font-weight: 200;
    font-size: 1rem;
    padding-bottom: 2rem;
    color: gray;
  }
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

export default Layout;
