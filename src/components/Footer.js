import React from 'react';
import Header from './Header';
import SocialMedia from './SocialMedia';

const Footer = () => (
  <div className="container">
    <footer className="footer-dark bg-dark">
      <div className="container-fluid">
        <div className="row jumbotrone">
          <Header />
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
