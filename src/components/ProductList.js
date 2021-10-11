import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductData from "../data/product.json";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ProductData);
  }, []);
  return (
    <div className="product__list">
      <div className="grid wide">
        <div className="row">
          {data?.map((item, index) => {
            return <ProductItem key={index} item={item} />;
          })}
        </div>
      </div>

      <div className="btn_more">
        <button className="btn btn-custom">see more</button>
      </div>
    </div>
  );
};

export default ProductList;
