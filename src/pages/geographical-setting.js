import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { GatsbySeo } from "gatsby-plugin-next-seo";
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
      {geography.map(({ node }, k) => {
        return (
          <GatsbySeo
            key={k}
            title="Borj-e Kabotar | Geographical Setting"
            description={node.frontmatter.description}
            canonical="https://www.borjekabotar.com/geo/"
          />
        );
      })}

      <div className="bg-image">
        <StaticImage
          src="../../static/images/geo_setting_background.jpg"
          alt="Geographical Setting"
          objectFit="cover"
          style={{ width: "300vh", height: "50vh" }}
        />
        {geography.map(({ node }, k) => {
          return <h2 key={k}>{node.frontmatter.title}</h2>;
        })}
      </div>

      {geography.map(({ node }, k) => {
        return (
          <Container key={k}>
            <Row className="col-md-8 mx-auto my-5">
              <Col className="post-content">
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </Col>
            </Row>
          </Container>
        );
      })}
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
