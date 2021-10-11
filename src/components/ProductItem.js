import React from "react";
import { NavLink } from "react-router-dom";
import iconHeart from "../assets/images/hearticon.png";

const ProductItem = ({ item }) => {
  return (
    <div className="col l-2-4 m-6 c-12">
      <NavLink to="###" className="item">
        <div className="item__img">
          <img src={item.img} alt="" />
        </div>
        <div className="item__info">
          <h4>{item.title}</h4>
          <div className="detail">
            <span>{item.price} won</span>
            <p>
              <img src={iconHeart} alt="" />
              {item.like}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductItem;
