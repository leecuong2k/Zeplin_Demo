import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="product__list">
      <div className="grid wide">
        <div className="row">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>

      <div className="btn_more">
        <button className="btn btn-custom">see more</button>
      </div>
    </div>
  );
};

export default ProductList;
