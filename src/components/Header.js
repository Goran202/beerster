import React from 'react';
import BeerLogo from './BeerLogo';
import NavLinks from './NavLinks';

const Header = ({ navSelected, onNavbarClick }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container">
          <BeerLogo />{' '}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <NavLinks navSelected={navSelected} onNavbarClick={onNavbarClick} />{' '}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
