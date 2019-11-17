import React from "react";
import logo from "../../assets/logo.png";
import symbol from "../../assets/symbol.png";

const BeerLogo = () => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand" href="#/home">
        <img src={symbol} alt="symbol"></img>
        <img src={logo} alt="logo"></img>
      </a>
    </>
  );
};

export default BeerLogo;
