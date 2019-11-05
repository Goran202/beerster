import React from 'react';
import crate from '../assets/crate.png';

const Crate = () => {
  return (
    <nav>
      <a className="navbar-brand" href="#">
        ONE
      </a>
      <a className="navbar-brand" href="#">
        TWO
      </a>
      <a className="navbar-brand" href="#">
        THREE
      </a>
      <img src={crate} alt="crate"></img>
      <p>Add a beer to have it appera in the crate.</p>
      <p>- Captain Obvious</p>
    </nav>
  );
};

export default Crate;
