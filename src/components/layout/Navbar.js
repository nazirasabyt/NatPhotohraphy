import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.PNG";
import "../../sass/main.scss";

const NavBar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <NavLink to="/" className="logo">
            <img className="logo__img" src={logo} />
          </NavLink>

          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink className="menu__link" to="/about">
                  About me
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__link" to="/gallery">
                  My Work
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__link" to="/proccess">
                  The Experience
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="button">
            <div className="button__rectangle">
              <NavLink className="button__link" to="/contact">
                Contact me
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
