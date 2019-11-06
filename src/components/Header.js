import React from 'react';
import logo from '../assets/logo.png';
import symbol from '../assets/symbol.png';
import { Link } from 'react-router-dom';

const Header = () => {
  //   return <header>header</header>;
  return (
    <>
      {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top"> */}
      <nav className="navbar navbar-expand-md navbar-dark sticky-top">
        <div className="container">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand" href="#">
            <img src={symbol} alt="symbol"></img>
            <img src={logo} alt="logo"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/join">
                  Join
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
