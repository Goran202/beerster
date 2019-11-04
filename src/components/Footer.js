import React from 'react';
import logo from '../assets/logo.png';
import symbol from '../assets/symbol.png';

const Footer = () => {
  return (
    <footer className="footer-dark bg-dark">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand" href="#">
            <img src={symbol} alt="symbol"></img>
            <img src={logo} alt="logo"></img>
          </a>
          <div className="">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" href="#">
                  Favorites
                </a>
              </li>
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" href="#">
                  Join
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
