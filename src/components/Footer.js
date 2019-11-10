import React from 'react';
import Header from './Header';
import SocialMedia from './SocialMedia';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import symbol from '../assets/symbol.png';

const Footer = ({ navSelected, onNavbarClick }) => (
  <div className="container">
    <footer className="footer-dark bg-dark">
      <div className="container-fluid">
        <div className="row">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand" href="#">
            <img src={symbol} alt="symbol"></img>
            <img src={logo} alt="logo"></img>
          </a>

          {/* <Header /> */}
          <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/home"
                  className={`nav-link${navSelected === 0 ? ' active' : ''}`}
                  onClick={onNavbarClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/favorites"
                  className={`nav-link${navSelected === 1 ? ' active' : ''}`}
                  onClick={onNavbarClick}
                >
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/join"
                  className={`nav-link${navSelected === 2 ? ' active' : ''}`}
                  onClick={onNavbarClick}
                >
                  Join
                </Link>
              </li>
            </ul>
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
