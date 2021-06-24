import React from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import proPic from "./Images/DG-Profile-Pic.jpg";
import { SocialIcon } from "react-social-icons";
import "../../../src/App.css";
import page4 from "./Images/portfolioPage_4.jpg";
import page5 from "./Images/portfolioPage_5.jpg";
import page6 from "./Images/portfolioPage_6.jpg";
import page7 from "./Images/portfolioPage_7.jpg";
// import page8 from "./Images/portfolioPage_8.jpg";
// import PDFviewer from "../../components/PDFviewer";
import twregMock from "./Images/twregweb-mock.jpg";
import pxtbMock from "./Images/pxtb-mock.jpg";
import cfsMock from "./Images/cfs-mock.jpg";

// import thumbnail from "./Images/portfolio-thumbnail.png";
// import { Portfolio } from "../../pages/Portfolio";

export const Home = () => {
  return (
    <Container className="main">
      <Row>
        <Col className="p-4" lg={4}>
          <Figure className=" m-2 stats">
            <Figure.Image
              className="profile"
              alt="Dany Grimaldo Picture"
              src={proPic}
              roundedCircle
            />
          </Figure>
          <div>
            <h1 className="title">
              DANY <br /> GRIMALDO
            </h1>
          </div>
          <SocialIcon
            className="mr-2"
            url="mailto:danygrimaldo@gmail.com"
            bgColor="#13294B"
            fgColor="#9CDBD9"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            className="mr-2"
            url="https://www.linkedin.com/in/dany-grimaldo"
            bgColor="#13294B"
            fgColor="#9CDBD9"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            className="mr-2"
            url="https://github.com/danygrimaldo"
            bgColor="#13294B"
            fgColor="#9CDBD9"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            className="mr-2"
            url="https://www.instagram.com/grimaldomedia"
            bgColor="#13294B"
            fgColor="#9CDBD9"
            target="_blank"
            rel="noopener noreferrer"
          />

          <hr class="rounded" />
          <Row>
            <Container>
              <p>
                <i>
                  <b>Graphic Design</b>
                </i>
                <br />
                Hello there, I am a freelance designer with over 10 years of
                experience with Adobe Creative Suites (Photoshop, Illustrator,
                and InDesign) and print production. I am an Art Institute of
                Atlanta graduate, with strengths in typography, photo editing,
                and overall brand design.
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
                enjoy futbol, football, and basketball and baseball during the
                playoff season. My wife and I live with our cat, Teddy, in the
                Vinings area. In our free time, we enjoy listening to music,
                attending art and music events, cooking peruvian and mexican
                dishes and also meeting up with friends.
              </p>
            </Container>
          </Row>
        </Col>
        <Col className="px-4" lg={8}>
          <Row className="mb-5">
            {/* <PDFviewer /> */}
            <Image src={page4} width="100%" />
            <Image src={page5} width="100%" />
            <Image src={page6} width="100%" />
            <Image src={page7} width="100%" />
          </Row>

          <hr class="rounded" />
          <Row>
            <Container className="p-4">
              <strong>
                <h2>Web Design Portfolio</h2>
              </strong>
              <br />
              <Image src={twregMock} width="100%" />
              <p>
                <b>The Wiley Real Estate Group</b>
                <br />
                <a
                  href={"http://www.wileyrealestate.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.wileyrealestate.com
                </a>
                <br />
                <p>
                  As the marketing coordinator at The Wiley Real Estate Group{" "}
                  {"(TWREG)"}, a family owned commercial real estate business, I
                  was tasked with creating a website using ReactJS in order to
                  be compatible with Buildout's plugin features. I either
                  created or editied all of the artwork and photography.
                </p>
                <br />
                <Image src={pxtbMock} width="100%" />
                <b>Painted By The Bee</b>
                <br />
                www.paintedbythebee.com - NOT YET LIVE
                {/* <a
                  href={"https://www.paintedbythebee.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.paintedbythebee.com
                </a> */}
                <br />
                <p>
                  Painted by the Bee, a DIY chalk paint boutique, is my wife's
                  local small business in Smyrna, Georgia. I created this site
                  to provide additional resources for customers who may need
                  tutorials, sign up for workshop sessions, browse for color
                  swatches, and see what projects are available for sale.
                </p>
                <br />
                <Image src={cfsMock} width="100%" />
                <b>Campfire Stories</b>
                <br />
                <a
                  href={"https://campfirestories.herokuapp.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  campfirestories.herokuapp.com
                </a>
                <br />
                <p>
                  While attending my Full-Stack Web Development Coding Bootcamp
                  at Georgia Tech, my final project was done as a group. The
                  idea was to create your profile and begin your custom journey
                  through storylines with various plots and twist depending on
                  the user's choice! This project is still in development with
                  additional features and stories. Feel free to sign up and play
                  along.
                </p>
              </p>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
