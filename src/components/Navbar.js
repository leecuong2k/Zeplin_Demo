import React from "react";
import Logo from "../assets/images/logo.svg";
import { VscThreeBars } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Navbar = ({ showMenuHandler }) => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavLink to="###" className="nav__link">
          <img src={Logo} className="logo" alt="" />
        </NavLink>

        <div className="main__menu">
          <button onClick={showMenuHandler}>
            <VscThreeBars />
          </button>
          <div className="menu__left">
            <NavLink to="##">Introduction</NavLink>
            <NavLink to="##">solution</NavLink>
            <NavLink to="##">Rate plan</NavLink>
          </div>
          <div className="menu__right">
            <NavLink to="##">login</NavLink>
            <NavLink to="##">Apply for free use</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
