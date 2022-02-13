import React from "react";
import { graphql, withPrefix } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Row, Col, Carousel } from "react-bootstrap";
import Layout from "../templates/ConLayout";

const project = ({ data }) => {
  const towers = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {towers.map(({ node }, k) => {
        return (
          <Helmet key={k}>
            <title>{node.frontmatter.title}</title>
            <meta name="description" content={node.frontmatter.meta} />
            <link rel="canonical" href={node.frontmatter.link} />

            <meta property="og:title" content={node.frontmatter.title} />
            <meta property="og:description" content={node.frontmatter.meta} />
            <meta property="og:url" content={node.frontmatter.link} />
            <meta
              property="og:image"
              content={withPrefix(`static/logos/logo-bn.png`)}
            />

            <meta property="twitter:title" content={node.frontmatter.title} />
            <meta
              property="twitter:description"
              content={node.frontmatter.meta}
            />
            <meta property="twitter:url" content={node.frontmatter.link} />
            <meta
              property="twitter:image"
              content={withPrefix(`static/logos/logo-bn.png`)}
            />
          </Helmet>
        );
      })}

        <div className="bg-image">
          <StaticImage
            src="../../static/images/towers_isfahan.jpg"
            alt=""
            objectFit="cover"
            placeholder="blurred"
          />
          {towers.map(({ node }, k) => {
            return <h2>{node.frontmatter.title}</h2>;
          })}
        </div>

        {towers.map(({ node }, k) => {
          return (
            <Container key={k}>
              <Row className="col-md-10 mx-auto my-5">
                <StaticImage
                  src="../../static/images/survey_pigeon_towers.jpg"
                  objectFit="cover"
                />
              </Row>
              <Row className="col-md-8 mx-auto my-5">
                <Col>
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
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/contents/a-landscape-with-hundreds-of-pigeons-towers/"
        }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            meta
            tags
            title
            link
            img {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  quality: 100
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default project;
