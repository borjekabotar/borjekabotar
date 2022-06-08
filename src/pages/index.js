import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Logo from "../../static/logos/logo_bn.png";

const UnderCostruction = () => {
  return (
    <div>
      <Wrapper>
        <Container className="mx-auto">
        <img
          alt="Logo Borj-e Kabotar"
          src={Logo}
          width={300}
          className="center"
        />
        <h1>
        Borj-e Kabotar project
        </h1>
        <h2>
        The website is under construction, we will give more updates soon!
        </h2>
        </Container>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
}
h1 {
  padding-top: 3rem;
  font-family: "Cinzel Decorative";
  text-align: center;
}
h2 
{
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
`
export default UnderCostruction;
