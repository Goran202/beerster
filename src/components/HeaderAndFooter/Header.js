import React from "react";
import BeerLogo from "./BeerLogo";
import NavLinks from "./NavLinks";

const Header = ({ navSelected, onNavbarClick }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark sticky-top"
        style={{
          backgroundColor: "black"
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="#/home">
            <BeerLogo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarResponsive"
            style={{
              fontSize: "0.8em",
              textAlign: "left",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "700",
              letterSpacing: "0.1em"
            }}
          >
            <div className="ml-auto">
              <NavLinks
                navSelected={navSelected}
                onNavbarClick={onNavbarClick}
              />{" "}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
