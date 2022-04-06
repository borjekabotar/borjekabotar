import React from "react";
import styled from "styled-components";
import { Link, withPrefix } from "gatsby";
import { Button, Carousel } from "react-bootstrap";
import Layout from "../templates/Layout";
import Seo from "../components/Seo";
import Image from "../../static/images/sfondo_bk.jpg";

const index = () => {
  return (
    <Layout>
      <Seo
        title="Borj-e Kabotar | Home"
        description="Borj–e Kabotar is a project born to focus on architecture and anthropology of the pigeons towers in the Isfahan province and to study these imposing buildings with a diameter that can reach 20 meters and a height that touches 15 m."
        url="https://www.borjekabotar.com/"
        image={withPrefix(`/images/sfondo_bk.jpg`)}
      >
        <link rel="shortcut icon" href={withPrefix(`/favicon/favicon.ico`)} />
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
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Image} alt="Home" />
            <Carousel.Caption className="d-flex flex-column justify-content-center top-0">
              <h1 className="d-md-inline-block">Borj–e Kabotar</h1>
              <p className="d-md-inline-block align-top">
                Architecture and anthropology of the pigeon towers in the
                Isfahan province
              </p>
              <Link to="/webgis" title="Web GIS">
                <Button variant="link">Explore WebGIS</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  .carousel-inner h1 {
    font-size: 2.5rem !important;
    @media (min-width: 576px) {
      font-size: 2.5rem !important;
    }
    @media (min-width: 768px) {
      font-size: 2.5rem !important;
    }
    @media (min-width: 992px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 1200px) {
      font-size: 3.5rem !important;
    }
  }
  .carousel-inner p {
    font-size: 1.5rem !important;
    @media (min-width: 576px) {
      font-size: 1.5rem !important;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem !important;
    }
    @media (min-width: 992px) {
      font-size: 2rem !important;
    }
    @media (min-width: 1200px) {
      font-size: 2rem !important;
    }
  }
  img {
    width: 50vh;
    height: 100vh;
    object-fit: cover;
    filter: brightness(70%);
    @media (min-width: 576px) {
      width: 50vh;
      height: 100vh;
      object-fit: cover;
      filter: brightness(70%);
    }
    @media (min-width: 768px) {
      width: 50vh;
      height: 100vh;
      object-fit: cover;
      filter: brightness(70%);
    }
    @media (min-width: 992px) {
      max-width: 100%;
      height: 100%;
      filter: brightness(70%);
      object-fit: cover;
    }
    @media (min-width: 1200px) {
      max-width: 100%;
      height: 100%;
      filter: brightness(70%);
      object-fit: cover;
    }
  }
`;

export default index;
