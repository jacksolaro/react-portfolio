import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./Nav.css";

function Nav() {
  // const [show, handleShow] = useState(false);
  const [expandNav, handleExpandNav] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("click", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  const openNav = () => {
    handleExpandNav(!expandNav);
  };

  return (
    <nav className="">
      <div className={`nav ${expandNav && "responsive"}`}>
        <Link className="nav-logo" to="/">
          JACK SOLARO
        </Link>
        <MenuIcon className="nav-hamburger" onClick={openNav}></MenuIcon>
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
