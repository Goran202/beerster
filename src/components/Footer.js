import React from "react";
import SocialMedia from "./SocialMedia";
import BeerLogo from "./BeerLogo";
import NavLinks from "./NavLinks";

const Footer = ({ navSelected, onNavbarClick }) => (
  <div className='container'>
    <footer
      className='footer-dark'
      style={{
        fontSize: "0.8em",
        textAlign: "left",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "700",
        letterSpacing: "0.1em",
        textTransform: "uppercase"
      }}
    >
      <div className='container-fluid'>
        <div className='row'>
          <BeerLogo />
          <nav
            className='navbar navbar-expand-lg navbar-dark'
            style={{
              textAlign: "center"
            }}
          >
            <NavLinks navSelected={navSelected} onNavbarClick={onNavbarClick} />{" "}
          </nav>
          <SocialMedia />
        </div>
      </div>

      <div className='footer-copyright text-center py-3'>
        <hr
          style={{
            border: "solid 0.5px orange"
          }}
        ></hr>
        <p
          className='light'
          style={{
            fontSize: "0.7em",
            fontWeight: "300",
            textTransform: "none",
            color: "white"
          }}
        >
          &copy; 2018 All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
