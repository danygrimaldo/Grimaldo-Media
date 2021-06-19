import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../../../src/App.css";

export default function Footer() {
  return (
    <Row className="footer" sticky>
      <Col className="grimaldoMedia">
        &copy; Powered by Grimaldo Media {new Date().getFullYear()}
      </Col>
      <Col className="socialMedia">
        <SocialIcon
          className="m-4 auto"
          url="https://www.instagram.com/grimaldomedia"
          bgColor="#13294b"
          fgColor="#9cdbd9"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Col>
    </Row>
  );
}
