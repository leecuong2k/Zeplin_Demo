import React from "react";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import snsIcon1 from "../assets/images/snsicon-01.png";
import snsIcon2 from "../assets/images/snsicon-02.png";
import snsIcon3 from "../assets/images/snsicon-03.png";

const MenuMobile = ({ isShow, setIsShow }) => {
  return (
    <div
      className="menu__mobile"
      style={
        isShow
          ? { opacity: "1", visibility: "visible" }
          : { opacity: "0", visibility: "hidden" }
      }
    >
      <div
        className="menu__content"
        style={
          isShow
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(100%)" }
        }
      >
        <div className="content__top">
          <h4>What happened</h4>
          <button onClick={() => setIsShow(false)}>
            <MdClose />
          </button>
        </div>

        <div className="content__center">
          <div className="menu__list">
            <NavLink to="##">Introduction</NavLink>
            <NavLink to="##">Solution</NavLink>
            <NavLink to="##">Rate plan</NavLink>
            <NavLink to="##">Login</NavLink>
            <NavLink to="##">Apply for free use</NavLink>
          </div>
        </div>

        <div className="content__bottom">
          <h4>Contact</h4>
          <div className="contact">
            <NavLink to="##">
              <img src={snsIcon1} alt="" />
            </NavLink>

            <NavLink to="##">
              <img src={snsIcon2} alt="" />
            </NavLink>

            <NavLink to="##">
              <img src={snsIcon3} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
