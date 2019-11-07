import React from 'react';
import crate from '../assets/crate.png';
import BeerInCrateImg from './BeerInCrateImg';
import BeersInCrate from './BeersInCrate';

const Crate = (props) => {
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
      {/* <div> */}
      <div style={{ position: 'absolute' }}>
        <BeersInCrate beerList={props.beerList} beersInCrateIds={props.beersInCrateIds} />
      </div>
      <img src={crate} alt="crate"></img>
      {/* </div> */}
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
