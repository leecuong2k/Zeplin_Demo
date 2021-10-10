import React, { useState } from "react";
import Banner from "../components/Banner";
import BestProduct from "../components/BestProduct";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import Happened from "../components/Happened";
import Introduction from "../components/Introduction";
import Issue from "../components/Issue";
import MenuMobile from "../components/MenuMobile";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenuHandler = () => {
    return !isShow ? setIsShow(true) : setIsShow(false);
  };

  return (
    <>
      <MenuMobile isShow={isShow} setIsShow={setIsShow} />
      <Navbar showMenuHandler={showMenuHandler} isShow={isShow} />
      <div className="main">
        <Banner />
        <Introduction />
        <BestProduct />
        <Brand />
        <Issue />
        <Happened />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
