import React from 'react';
import logo from '../assets/logo.png';
import symbol from '../assets/symbol.png';

const Header = () => {
  //   return <header>header</header>;
  return (
    <>
      {/* Navigation */}
      {/* <nav className="navbar navbar-md-expand navbar-light bg-light"></nav> */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
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
    </>
  );
};

export default Header;
