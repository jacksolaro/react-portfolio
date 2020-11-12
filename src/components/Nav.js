import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className="">
      <div className={`nav ${show && "nav_black"}`}>
        <a className="nav-logo" href="index.html">
          JACK SOLARO
        </a>
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              ABOUT
            </Link>
          </li>
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
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
