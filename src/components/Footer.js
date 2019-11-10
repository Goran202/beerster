import React from 'react';
import SocialMedia from './SocialMedia';
import BeerLogo from './BeerLogo';
import NavLinks from './NavLinks';

const Footer = ({ navSelected, onNavbarClick }) => (
  <div className="container">
    <footer className="footer-dark bg-dark">
      <div className="container-fluid">
        <div className="row">
          <BeerLogo />
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLinks navSelected={navSelected} onNavbarClick={onNavbarClick} />{' '}
          </nav>
          <SocialMedia />
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <hr className="light"></hr>
        <h5 className="light">&copy; All rights reserved.</h5>
      </div>
    </footer>
  </div>
);

export default Footer;
