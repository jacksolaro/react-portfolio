import React from "react";
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
          <li className="nav-item">
            <a className="nav-link" href="google.com">
              CONTACT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="google.com">
              PORTFOLIO
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="google.com">
              <span className="sr-only">(current)</span>ABOUT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
