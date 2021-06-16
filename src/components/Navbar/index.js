import React from "react";
import { Navbar, Image } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import gmLogo from "./Assets/grimaldomedia-rgb-logo.png";
import { Home } from "../../pages/Home";
import "./style.css";

export default function NavBar() {
  return (
    <Router>
      <div className="nav-block">
        <Navbar collapseOnSelect expand="lg" sticky="top">
          <Navbar.Brand className="mr-auto" href="/">
            <Image
              className="nav-logo"
              src={gmLogo}
              alt="grimaldo-media-logo"
              as={Link}
              to="home"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/about" className="activeLink">
                about
              </Nav.Link>
              <Nav.Link href="/portfolio" className="inactiveLink">
                portfolio
              </Nav.Link>
              <Nav.Link href="/contact" className="inactiveLink">
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Switch>
        <Route
          path="/home"
          render={(props) => (
            <Home
              {...props}
              timestamp={new Date().toString()}
              key={props.location.key}
            />
          )}
        />
        {/* <Route
            path="/portfolio"
            render={(props) => (
              <Portfolio
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/services"
            render={(props) => (
              <Services
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/workshops"
            render={(props) => (
              <Workshops
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/chalk-paint"
            render={(props) => (
              <ChalkPaint
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          /> */}
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              timestamp={new Date().toString()}
              key={props.location.key}
            />
          )}
        />
        <Route
          exact
          path="*"
          render={(props) => (
            <Home
              {...props}
              timestamp={new Date().toString()}
              key={props.location.key}
            />
          )}
        />
      </Switch>
    </Router>
  );
}
