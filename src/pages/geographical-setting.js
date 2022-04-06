import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";

const project = ({ data }) => {
  const geography = data.markdownRemark;
  const pageUrl =
    `${data.site.siteMetadata.siteUrl}${geography.fields.slug}`.replace(
      /([^:]\/)\/+/g,
      "$1"
    );
  return (
    <Layout>
      <Seo
        title={geography.frontmatter.title}
        description={
          geography.frontmatter.sommario
            ? geography.frontmatter.sommario
            : geography.excerpt
        }
        // https://stackoverflow.com/a/24381515
        url={pageUrl}
        image="../../static/images/geo_setting_background.jpg"
      />
      <div className="bg-image">
        <StaticImage
          src="../../static/images/geo_setting_background.jpg"
          alt="Geographical Setting"
          objectFit="cover"
          style={{ width: "300vh", height: "50vh" }}
        />
        <h1>{geography.frontmatter.title}</h1>
      </div>

      <Container>
        <Row className="col-md-8 mx-auto my-5">
          <Col className="post-content">
            <div dangerouslySetInnerHTML={{ __html: geography.html }} />
          </Col>
        </Row>
      </Container>
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
      fileAbsolutePath: {
        regex: "/contents/the-province-and-the-oasis-of-isfahan/"
      }
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

export default project;
