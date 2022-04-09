import React from "react";
import { graphql, withPrefix } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";

const news = ({ data }) => {
  const content = data.markdownRemark;
  const pageUrl =
    `${data.site.siteMetadata.siteUrl}${content.fields.slug}`.replace(
      /([^:]\/)\/+/g,
      "$1"
    );
  return (
    <Layout>
      <Seo
        title="Borj-e Kabotar | News"
        description={
          content.frontmatter.description
            ? content.frontmatter.description
            : content.excerpt
        }
        url={pageUrl}
        image={`${withPrefix(`/images/news_background.jpg`)}`}
      />
      <Wrapper>
        <div className="bg-image">
          <StaticImage
            src="../../static/images/news_background.jpg"
            alt="News"
            objectFit="cover"
            style={{
              gridArea: "1/1",
              height: "400px",
              width: "100%",
              position: "relative",
              filter: "brightness(60%)"
            }}
          />
          <h1>{content.frontmatter.title}</h1>
        </div>

        <Container>
          <Row className="col-md-8 mx-auto my-5">
            <Col className="post-content">
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            </Col>
          </Row>
        </Container>
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
    markdownRemark(
      fileAbsolutePath: { regex: "/contents/news-borj-e-kabotar/" }
    ) {
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
  img[alt="conference-rosati-scerrato"] {
    width: 400px;
    margin: auto;
  }
`;

export default news;
