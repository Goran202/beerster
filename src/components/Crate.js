import React from 'react';
import crate from '../assets/crate.png';
import BeersInCrate from './BeersInCrate';

const Crate = (props) => (
  <>
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
    </nav>
    <div
      onDragOver={(e) => e.preventDefault()}
      // onDrop={() => props.onModalButtonClick(props.beer)}
      // onDrop={(e) => console.log(e.dataTransfer.getData('text'))}
      onDrop={(e) => props.onDropBeerToCrate(e.dataTransfer.getData('text'))}
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
        <BeersInCrate beerList={props.beerList} beersInCrateIds={props.beersInCrateIds} />
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
