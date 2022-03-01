import React from 'react'
import { graphql } from "gatsby";
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import { GatsbySeo } from "gatsby-plugin-next-seo";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";

const news = ({data}) => {
  const content = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Wrapper>
        {content.map(({ node }, k) => {
          return (
            <GatsbySeo
              key={k}
              title="Borj-e Kabotar | News"
              description={node.frontmatter.description}
              canonical="https://www.borjekabotar.com/news/"
            />
          );
        })}

        <div className="bg-image">
          <StaticImage
            src="../../static/images/news_background.jpg"
            alt="News"
            objectFit="cover"
            style={{ width: "300vh", height: "50vh" }}
          />
          {content.map(({ node }, k) => {
            return <h2 key={k}>{node.frontmatter.title}</h2>;
          })}
        </div>

        {content.map(({ node }, k) => {
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
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contents/news-borj-e-kabotar/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            description
            tags
            title
            url
          }
        }
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

export default news