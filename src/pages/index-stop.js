import React from "react";
import styled from "styled-components";
import { Link, withPrefix, graphql } from "gatsby";
import { Carousel } from "react-bootstrap";
import Layout from "../templates/Layout";
import Seo from "../components/Seo";
import Image from "../../static/images/sfondo_bk.jpg";

const index = ({ data }) => {
  const content = data.markdownRemark;
  const pageUrl =
    `${data.site.siteMetadata.siteUrl}${content.fields.slug}`.replace(
      /([^:]\/)\/+/g,
      "$1"
    );
  return (
    <Layout>
      <Seo
        title="Borj-e Kabotar | Pigeon towers in Isfahan"
        description={
          content.frontmatter.description
            ? content.frontmatter.description
            : content.excerpt
        }
        url={pageUrl}
        image={`${withPrefix(`/images/sfondo_bk.jpg`)}`}
      />
      <Wrapper>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Image} alt="Home" />
            <Carousel.Caption className="d-flex flex-column justify-content-center top-0">
              <h1 className="d-md-inline-block">Borj–e Kabotar</h1>
              <p className="d-md-inline-block d-none d-sm-block align-top">
                Architecture and anthropology of the <br></br>pigeon towers in the
                Isfahan province
              </p>

              <div class="box-1">
                <Link to="/webgis" title="Web GIS">
                  <div class="btn btn-one">
                    <span>EXPLORE WEBGIS</span>
                  </div>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/contents/home/" }) {
      html
      fields {
        slug
      }
      frontmatter {
        description
        tags
        title
        url
      }
    }
  }
`;

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
