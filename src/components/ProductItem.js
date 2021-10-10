import React from "react";
import itemImg1 from "../assets/images/img-01.png";
import iconHeart from "../assets/images/hearticon.png";

const ProductItem = () => {
  return (
    <div className="col l-2-4 m-6 c-12">
      <a href="###" className="item">
        <div className="item__img">
          <img src={itemImg1} alt="" />
        </div>
        <div className="item__info">
          <h4>[what happen] How to create</h4>
          <div className="detail">
            <span>2,500 won</span>
            <p>
              <img src={iconHeart} alt="" />
              236
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;
