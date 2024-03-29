import React from "react";
import { graphql, withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import Layout from "../templates/ConLayout";
import { Container, Row, Col } from "react-bootstrap";

const project = ({ data }) => {
  const survey = data.markdownRemark;
  const pageUrl =
    `${data.site.siteMetadata.siteUrl}${survey.fields.slug}`.replace(
      /([^:]\/)\/+/g,
      "$1"
    );
  return (
    <Layout>
      <Seo
        title="Borj-e Kabotar | Survey"
        description={
          survey.frontmatter.description
            ? survey.frontmatter.description
            : survey.excerpt
        }
        url={pageUrl}
        image={`${withPrefix(`/images/survey_test.jpg`)}`}
      />

      <div className="bg-image">
        <StaticImage
          src="../../static/images/survey_test.jpg"
          alt="News"
          objectFit="cover"
          style={{
            gridArea: "1/1",
            height: "400px",
            width: "100%",
            position: "relative",
          }}
        />

        <h1>{survey.frontmatter.title}</h1>
      </div>

      <Container>
        <Row className="col-md-8 mx-auto my-5">
          <Col className="post-content">
            <div dangerouslySetInnerHTML={{ __html: survey.html }} />
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
        regex: "/contents/survey-of-the-pigeons-towers-in-the-isfahan-province/"
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
