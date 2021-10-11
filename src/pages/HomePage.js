import React, { useState } from "react";
import Banner from "../components/Banner";
import BestProduct from "../components/BestProduct";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import Happened from "../components/Happened";
import Introduction from "../components/Introduction";
import Issue from "../components/Issue";

const HomePage = () => {
  return (
    <>
      <div className="main">
        <Banner />
        <Introduction />
        <BestProduct />
        <Brand />
        <Issue />
        <Happened />
      </div>
    </>
  );
};

export default HomePage;
