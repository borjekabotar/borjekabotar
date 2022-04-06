import React from "react";
import { graphql, withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";

const project = ({ data }) => {
  const bibliography = data.markdownRemark;
  const pageUrl =
    `${data.site.siteMetadata.siteUrl}${bibliography.fields.slug}`.replace(
      /([^:]\/)\/+/g,
      "$1"
    );
  return (
    <Layout>
      <Seo
        title="Borj-e Kabotar | Pubblications"
        description={
          bibliography.frontmatter.description
            ? bibliography.frontmatter.description
            : bibliography.excerpt
        }
        url={pageUrl}
        image={`${withPrefix(`/images/pubblications_background.jpg`)}`}
      />

      <div className="bg-image">
        <StaticImage
          src="../../static/images/pubblications_background.jpg"
          alt="Pubblication"
          objectFit="cover"
          style={{ width: "300vh", height: "50vh", filter: "brightness(60%)" }}
        />
        <h1>{bibliography.frontmatter.title}</h1>
      </div>

      <Container>
        <Row className="col-md-8 mx-auto my-5">
          <Col className="post-content">
            <div dangerouslySetInnerHTML={{ __html: bibliography.html }} />
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
      fileAbsolutePath: { regex: "/contents/bibliography-of-pigeon-towers/" }
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
