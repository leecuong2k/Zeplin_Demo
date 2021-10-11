import React from "react";
import icon1 from "../assets/images/producticon-01.png";
import icon2 from "../assets/images/producticon-02.png";
import icon3 from "../assets/images/producticon-03.png";
import product1 from "../assets/images/best-image-01.png";
import product2 from "../assets/images/best-image-02.png";
import product3 from "../assets/images/best-image-03.png";
import iconGo from "../assets/images/go-icon.png";
import ProductList from "./ProductList";
import { NavLink } from "react-router-dom";

const BestProduct = () => {
  return (
    <div className="best__product">
      <div className="product__suggest">
        <div className="heading">
          <h2 className="title">Best Product</h2>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first{" "}
          </p>
        </div>
        <div className="product__show">
          <div className="grid wide">
            <div className="row no-gutters">
              <div className="col l-4 m-12 c-12">
                <div
                  className="product__item"
                  style={{ backgroundImage: `url(${product1})` }}
                >
                  <img src={icon1} alt="" />
                  <div className="caption">
                    <span>How to create mobile-optimized</span>
                    <NavLink to="###">
                      <img src={iconGo} alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-12 c-12">
                <div
                  className="product__item"
                  style={{ backgroundImage: `url(${product2})` }}
                >
                  <img src={icon2} alt="" />
                  <div className="caption">
                    <span>How to create mobile-optimized</span>
                    <NavLink to="###">
                      <img src={iconGo} alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-12 c-12">
                <div
                  className="product__item"
                  style={{ backgroundImage: `url(${product3})` }}
                >
                  <img src={icon3} alt="" />
                  <div className="caption">
                    <span>How to create mobile-optimized</span>
                    <NavLink to="###">
                      <img src={iconGo} alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductList />
    </div>
  );
};

export default BestProduct;
