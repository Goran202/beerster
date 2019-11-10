import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ navSelected, onNavbarClick }) => {
  return (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link
          to='/home'
          className={`nav-link${navSelected === 0 ? " active" : ""}`}
          onClick={onNavbarClick}
        >
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/favorites'
          className={`nav-link${navSelected === 1 ? " active" : ""}`}
          onClick={onNavbarClick}
        >
          Favorites
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/join'
          className={`nav-link${navSelected === 2 ? " active" : ""}`}
          onClick={onNavbarClick}
        >
          Join
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
