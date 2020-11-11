import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* <!-- Logo on Nav Bar (Top Left) --> */}
      <a className="navbar-brand" href="index.html">
        JACK SOLARO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <!-- Nav Links (Top Right) --> */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* <!-- Active Nav Item (Current Page) --> */}
          {/* TODO: Format using "active" class for active page */}
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
