import React, { useState } from "react";
import { Route } from "react-router";
import Footer from "../components/Footer";
import MenuMobile from "../components/MenuMobile";
import Navbar from "../components/Navbar";

const HomeTemplate = (props) => {
  const [isShow, setIsShow] = useState(false);
  const showMenuHandler = () => {
    return !isShow ? setIsShow(true) : setIsShow(false);
  };
  const { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <MenuMobile isShow={isShow} setIsShow={setIsShow} />
            <Navbar showMenuHandler={showMenuHandler} isShow={isShow} />

            <Component {...propsRoute} />

            <Footer />
          </>
        );
      }}
    />
  );
};

export default HomeTemplate;
