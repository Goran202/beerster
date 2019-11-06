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
      <blockquote class="blockquote text-center">
        <p>Add a beer to have it appear in the crate.</p>
        <footer class="blockquote-footer">
          <cite title="Captain Obvious">Captain Obvious</cite>
        </footer>
      </blockquote>
    </nav>
  );
};

export default Crate;
