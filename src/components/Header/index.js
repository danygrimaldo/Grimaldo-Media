import React from "react";
import { Image } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import gmLogo from "./Assets/grimaldomedia-rgb-logo.png";
import { Home } from "../../pages/Home";
import "./style.css";

export default function Header() {
  return (
    <Router>
      <div className="header-block">
      <a href="/" src={Home}>
        <Image
          className="header-logo"
          src={gmLogo}
          alt="grimaldo-media-logo"
          as={Link}
          to="/"
          href={Home}
          />    
      </a>
        
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
