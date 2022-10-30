import React from "react";
import { NavLink } from "react-router-dom";
import line1 from "../../assets/logo/line1.png";
import line2 from "../../assets/logo/line2.png";
import logo from "../../assets/logo/logo.PNG";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__line-left">
        <img src={line1} />
      </div>
      <div className="footer__line-right">
        <img src={line2} />
      </div>
      <div className="footer__container">
        <img src={logo} />
        <div className="footer__container-links">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/about">
            About
          </NavLink>
          <NavLink className="link" to="/gallery">
            My work
          </NavLink>
          <NavLink className="link" to="/contact">
            Shooting Day
          </NavLink>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </div>
        <p>Copyright 2021. Natalia Chmielevska</p>
      </div>
    </div>
  );
};

export default Footer;
