import React from 'react';
import crate from '../assets/crate.png';
import BeersInCrate from './BeersInCrate';

const Crate = ({ beerList, onDropBeerToCrate, beersInCrateIds }) => (
  <>
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link disabled" href="#/home">
          ONE
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#/home">
          TWO
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#/home">
          THREE
        </a>
      </li>
    </ul>{' '}
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDropBeerToCrate(e.dataTransfer.getData('text'))}
      className="rotatable"
      style={{
        display: 'inline-block',
        position: 'relative',
      }}
    >
      <img src={crate} alt="crate" style={{ maxWidth: '100%' }}></img>
      <div
        style={{
          position: 'absolute',
          top: '0%',
          padding: '10px',
        }}
      >
        <BeersInCrate beerList={beerList} beersInCrateIds={beersInCrateIds} />
      </div>
    </div>
    <blockquote className="blockquote text-center">
      <p>Add a beer to have it appear in the crate.</p>
      <footer className="blockquote-footer">
        <cite title="Captain Obvious">Captain Obvious</cite>
      </footer>
    </blockquote>
  </>
);

export default Crate;
