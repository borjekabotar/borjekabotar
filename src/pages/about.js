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
            alt="News"
            objectFit="cover"
            style={{
              gridArea: "1/1",
              height: "400px",
              width: "100%",
              position: "relative",
              filter: "brightness(60%)",
            }}
          />
          <h1>About</h1>
        </div>
        <Row className="col-md-8 mx-auto my-5">
          <h2>Team</h2>
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Danilo Rosati</Card.Title>
                  <Card.Text className="position">Project Director</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Fariba Saiedi Anaraki</Card.Title>
                  <Card.Text className="position">Project Director</Card.Text>
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
        <Row className="col-md-8 mx-auto my-5">
          <Col>
            <h3>Credits</h3>
            <p>
              The website and the webGIS have been created by{" "}
              <a href="https://www.linkedin.com/in/domizia-d-erasmo-927087195/">
                Domizia D'Erasmo 
              </a>
              and <a href="https://uniroma1.academia.edu/NoemiGiovino"> Noemi Giovino</a>.
            </p>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default team;
