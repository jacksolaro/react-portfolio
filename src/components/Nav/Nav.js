import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/SwipeableDrawer";
import "./Nav.css";

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleDrawer = (anchor, open) => (event) => {
    if (typeof event === "undefined") {
      return;
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="">
      <div className={`nav`}>
        <Link className="nav-logo" to="/">
          JACK SOLARO
        </Link>

        <Drawer
          anchor="right"
          open={isExpanded}
          onClose={toggleDrawer("right", false)}
        >
          <div className="drawer">
            <ul className="drawer__list">
              <Link to="/" className="drawer__item">
                Home
              </Link>
              <Link to="/portfolio" className="drawer__item">
                Portfolio
              </Link>
              <Link to="/#Footer" className="drawer__item">
                Contact
              </Link>
            </ul>
          </div>
        </Drawer>

        {/* <MenuIcon className="nav-hamburger" onClick={openNav}></MenuIcon> */}
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="#footer">
              CONTACT
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
        </ul>
        <div className="nav__hamburger">
          <MenuIcon
            onClick={toggleDrawer("right", true)}
            style={{ color: "#FFFFFF" }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
