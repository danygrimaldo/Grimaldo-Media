import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import proPic from "./Images/DG-Profile-Pic.jpg";
import "../../../src/App.css";

export const Home = () => {
  return (
    <Container className="main">
      <Row>
        <Col className="stats" lg={4}>
          <Figure>
            <Figure.Image
              className="profile"
              alt="Dany Grimaldo Picture"
              src={proPic}
              roundedCircle
            />
            <Figure.Caption className="caption">
              <i>Graphic / Web Designer </i>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col lg={8}>
          <div>
            <h1 className="title">
              DANY <br /> GRIMALDO
            </h1>
          </div>
          <Row>
            <Container className="p-4">
              <strong>
                <h2>About Me</h2>
              </strong>
              <br />
              <p>
                <i>
                  <b>Graphic Design</b>
                </i>
                <br />
                Hello there, I am a freelance designer with over 10 years of
                experience with Adobe Creative Suites (Photoshop, Illustrator,
                and InDesign) and print production as a Prepress Technician.
                <br />
                <br />
                <i>
                  <b>Web Design</b>
                </i>
                <br />
                During the 2020 pandemic I was laid off and decided to enroll at
                Georgia Tech's Full-Stack Web Development Bootcamp. I was
                introduced to HTML, CSS, and Javascript languages. I am most
                comfortable building my applications using ReactJS frameworks.
                My passion for technology continues to evolve even after
                completing the course.
                <br />
                <br />
                <i>
                  <b>Hobbies</b>
                </i>
                <br />I am an Atlanta, Georgia native and an avid sports fan. I
                enjoy futbol, football, and a little bit of basketball and
                baseball during the playoff season. My wife and I live with our
                cat, Teddy, in the Vinings area. In our free time, we enjoy
                listening to music, attending art events, and meeting up with
                friends.
              </p>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
