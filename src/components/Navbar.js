import React from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <a href="###" className="nav__link">
          <img src={Logo} className="logo" alt="" />
        </a>

        <div className="main__menu">
          <div className="menu__left">
            <a href="##">Introduction</a>
            <a href="##">solution</a>
            <a href="##">Rate plan</a>
          </div>
          <div className="menu__right">
            <a href="##">login</a>
            <a href="##">Apply for free use</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
