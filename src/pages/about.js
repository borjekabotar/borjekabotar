import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../templates/ConLayout";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

const team = () => {
  return (
    <div>
      <Layout>
        <Seo
          title="Borj-e Kabotar | About"
          description=""
          url="https://borjekabotar.com/about/"
          image={`${withPrefix(`/images/towers_isfahan.jpg`)}`}
        />      
        <div className="bg-image">
          <StaticImage
            src="../../static/images/towers_isfahan.jpg"
            alt="about borj-e kabotar"
            title="about borj-e kabotar"
            objectFit="cover"
            style={{
              gridArea: "1/1",
              height: "400px",
              width: "100%",
            }}
          />
          <h2>Team</h2>
        </div>
        <Row className="col-md-8 mx-auto my-5">
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Danilo Rosati</Card.Title>
                  <Card.Text className="position">
                    Principal Investigator
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Fariba Saiedi Anaraki</Card.Title>
                  <Card.Text className="position">
                    Principal Investigator
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Ilaria Elisea Scerrato</Card.Title>
                  <Card.Text className="position">
                    Social Anthropologist
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};


export default team;
