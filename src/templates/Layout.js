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
      text-align: left;
    }

    p {
      font-size: 2rem;
      text-align: left;
    }
  }
  div[class*="box"] {
    height: 15.33%;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .btn {
    line-height: 35px;
    height: 50px;
    text-align: center;
    width: 200px;
    cursor: pointer;
  }
  .btn-one {
    color: #FFF;
    transition: all 0.3s;
    position: relative;
  }
  .btn-one span {
    transition: all 0.3s;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  .btn-one::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255,255,255,0.5);
    border-bottom-color: rgba(255,255,255,0.5);
    transform: scale(0.1, 1);
  }
  .btn-one:hover span {
    letter-spacing: 2px;
    color: #FFF;
  }
  .btn-one:hover::before {
    opacity: 1; 
    transform: scale(1, 1); 
    color: #FFF;
  }
  .btn-one::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255,255,255,0.1);
  }
  .btn-one:hover::after {
    opacity: 0; 
    transform: scale(0.1, 1);
  }
  .carousel-indicators,
  .carousel-control-next,
  .carousel-control-prev {
    visibility: hidden;
  }
`;

export default Layout;
