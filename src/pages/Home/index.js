import React from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import proPic from "./Images/DG-Profile-Pic.jpg";
import { SocialIcon } from "react-social-icons";
import "../../../src/App.css";
import page1 from "./Images/Portfolio-thumbs.jpg";
import page2 from "./Images/Portfolio-thumbs2.jpg";
import page3 from "./Images/Portfolio-thumbs3.jpg";
import page4 from "./Images/Portfolio-thumbs4.jpg";
import page5 from "./Images/Portfolio-thumbs5.jpg";
import page6 from "./Images/Portfolio-thumbs6.jpg";
import page7 from "./Images/Portfolio-thumbs7.jpg";
import page8 from "./Images/Portfolio-thumbs8.jpg";
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
                comfortable building my applications using ReactJS library. My
                passion for technology continues to evolve even after completing
                the course.
                <br />
                <br />
                <i>
                  <b>Hobbies</b>
                </i>
                <br />I am an Atlanta, Georgia native and an avid sports fan. I
                enjoy soccer and football. My wife and I live with our cat,
                Teddy, in the Vinings area. In our free time, we enjoy listening
                to music, attending art and music events, cooking peruvian and
                mexican dishes and also meeting up with friends.
              </p>
            </Container>
          </Row>
        </Col>
        <Col className="px-4" xs={12} lg={8}>
          <Row>
            <strong>
              <h2>Graphic Design Portfolio</h2>
            </strong>
            {/* <PDFviewer /> */}
          </Row>
          <Row className="mb-2">
            <Image
              className="portfolioThumbnails"
              src={page1}
              alt="Painted By The Bee intro"
              fluid
            />
            <Image
              className="portfolioThumbnails"
              src={page2}
              alt="Painted By The Bee projects"
              fluid
            />

            <p className="p-2">
              This small business shop specializes mainly in painting home decor
              using Annie Sloan Chalk Paint®. The previous owner registered the
              business under The Bird and the Bee, however the new young
              entrepreneur wanted to find a name better suited for her craft,
              without losing clientele. I pitched the idea of calling it
              "Painted By The Bee" and she immediately fell in love with it.
              After a few sketches of bees and paint image references, I
              designed an icon that symbolized both a bee and a brush.
            </p>
            <Image
              className="portfolioThumbnails"
              src={page3}
              alt="Atlanta NightHawks FC intro"
              fluid
            />

            <Image
              className="portfolioThumbnails"
              src={page4}
              alt="Atlanta NightHawks FC projects"
              fluid
            />
            <p className="p-2">
              In 2013, my friends and I started a team at a local soccer league.
              For the most part, we all played on the same team since we were
              young teenagers so naturally, I wanted something that would look
              legit. It was my way of trying to get everyone excited and proud
              to play every week. I someday hope to push this idea further and
              start a club that would develop youth players into playing at some
              of the most prestigious and competitive levels.
            </p>
            <Image
              className="portfolioThumbnails"
              src={page5}
              alt="Gemelos Shaved Ice intro"
              fluid
            />
            <Image
              className="portfolioThumbnails"
              src={page6}
              alt="Gemelos Shaved Ice projects"
              fluid
            />
            <p className="p-2">
              "Illustrative, bright and fun" were the words used to describe
              what this client was looking for in his brand. Gemelos, which is
              spanish for twins, lead to the idea of having two identical
              illustrations form into one logo. I chose to use bright pastel
              colors, to keep it playful and fruitful, along with a font that
              would match its' personality. After a few rounds of revisions and
              thumbnails, the client was thrilled when I presented him with this
              one.
            </p>
            <Image
              className="portfolioThumbnails"
              src={page7}
              alt="Tato Libre intro"
              fluid
            />
            <Image
              className="portfolioThumbnails"
              src={page8}
              alt="Tato Libre projects"
              fluid
            />
            <p className="p-2">
              On April 10, 2019, my brother Renato Grimaldo passed away from
              pancreatic cancer at the age of 28. He was such a lover of coffee
              and we often discussed how we should start a coffee club.
              Unfortunately we never had the opportunity to do that, so I
              dedicated my last project to him. "Tato" was the nickname I gave
              him when we were toddlers, and Libre in spanish means "to be
              free". I illustrated a simplified torch similar to the one seen on
              the Statue of Liberty and formed it into the shape of a reusable
              coffee cup. The "T" was designed to be a bit script-like, to play
              on the illusion of smoke, but I also purposely had it form the
              shape of a cancer ribbon flying away with the wind.
            </p>
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
