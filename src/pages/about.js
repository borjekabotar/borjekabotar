import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import Seo from "../components/Seo";
import styled from "styled-components";
import Layout from "../templates/ConLayout";
import { Row, Col, Card, CardGroup } from "react-bootstrap";
import { FaUniversity, FaLinkedin, FaFlickr } from "react-icons/fa";
import { SiAcademia, SiResearchgate } from "react-icons/si";

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
        <Wrapper>
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
                    <Card.Text className="position">
                      Project Co-Director
                    </Card.Text>
                    <Card.Text>
                      <a href="https://www.linkedin.com/company/rilievi-srl/about/">
                        <FaLinkedin></FaLinkedin>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Fariba Saiedi Anaraki</Card.Title>
                    <Card.Text className="position">
                      Project Co-Director
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title></Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title></Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          <Row className="col-md-8 mx-auto my-5">
            <Col>
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Title>Francesca Adesso</Card.Title>
                    <Card.Text className="position">
                      Junior 3D Modeler
                    </Card.Text>
                    <Card.Text>
                      <a href="https://unipd.academia.edu/FrancescaAdesso">
                        <SiAcademia></SiAcademia>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Domizia D'Erasmo</Card.Title>
                    <Card.Text className="position">Web Developer</Card.Text>
                    <Card.Text>
                      <a href="https://www.linkedin.com/in/domizia-d-erasmo-927087195/">
                        <FaLinkedin></FaLinkedin>
                      </a>
                      <a href="https://uniroma1.academia.edu/domiziaderasmo">
                        <SiAcademia></SiAcademia>
                      </a>
                      <a href="https://www.researchgate.net/profile/Domizia_Derasmo">
                        <SiResearchgate></SiResearchgate>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Edoardo Ferrari</Card.Title>
                    <Card.Text className="position">Architect</Card.Text>
                    <Card.Text>
                      <a href="https://www.linkedin.com/in/edoardo-paolo-ferrari-1b456866/?originalSubdomain=it">
                        <FaLinkedin></FaLinkedin>
                      </a>
                      <a href="https://oxfordbrookes.academia.edu/EdoardoPaoloFerrari">
                        <SiAcademia></SiAcademia>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Noemi Giovino</Card.Title>
                    <Card.Text className="position">Content Creator</Card.Text>
                    <Card.Text>
                      <a href="https://uniroma1.academia.edu/NoemiGiovino">
                        <SiAcademia></SiAcademia>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          <Row className="col-md-8 mx-auto my-5">
            <Col>
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Title>Amir Jamshidi</Card.Title>
                    <Card.Text className="position">Translator</Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Gaetano Pezzella</Card.Title>
                    <Card.Text className="position">Photographer</Card.Text>
                    <Card.Text>
                      <a href="https://www.flickr.com/people/gaetanopezzella/">
                        <FaFlickr></FaFlickr>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Giuseppe Salemi</Card.Title>
                    <Card.Text className="position">3D Survey</Card.Text>
                    <Card.Text>
                      <a href="https://independent.academia.edu/GiuseppeSalemi">
                        <SiAcademia></SiAcademia>
                      </a>
                      <a
                        href="https://www.unipd.it/en/contatti/rubrica/?ruolo=1&amp;checkout=cerca&amp;persona=SALEMI&amp;key=EEE3D26B4A
C1B31663488DE77B308B21"
                      >
                        <FaUniversity></FaUniversity>
                      </a>
                      <a href="https://www.researchgate.net/profile/Giuseppe-Salemi-2">
                        <SiResearchgate></SiResearchgate>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Ilaria Elisea Scerrato</Card.Title>
                    <Card.Text className="position">
                      Social Anthropologist
                    </Card.Text>
                    <Card.Text>
                      <a href="https://www.linkedin.com/in/ilaria-scerrato-2505a36b/">
                        <FaLinkedin></FaLinkedin>
                      </a>
                      <a href="https://independent.academia.edu/IlariaScerrato">
                        <SiAcademia></SiAcademia>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Wrapper>
      </Layout>
    </div>
  );
};

const Wrapper = styled.section`
  h2 {
    margin-bottom: 3rem;
  }
  a {
    padding-right: 1rem;
    color: black;
  }
  a:hover {
    color: #6c512a;
  }
`;

export default team;
