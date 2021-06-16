import React from "react";
import { Container, Col, Figure } from "react-bootstrap";
import proPic from "./Images/DG-Profile-Pic.jpg";
import "../../../src/App.css";

export const Home = () => {
  return (
    <Container className="main" rounded>
      <Col lg={3}>
        <Figure>
          <Figure.Image
            className="avatar m-auto"
            alt="Dany Grimaldo Picture"
            src={proPic}
            roundedCircle
          />
          <Figure.Caption className="mt-4">
            <i>Graphic Designer / Web Developer</i>
          </Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <div>
          <h1 className="title">
            DANY <br /> GRIMALDO
          </h1>
        </div>
      </Col>
    </Container>
  );
};
