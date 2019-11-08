import React from 'react';
import BeerInCrateImg from './BeerInCrateImg';
import uuid from 'uuid';

const BeersInCrate = (props) => (
  <div>
    {props.beersInCrateIds.slice(0, 20).map((beer, i) => (
      <div
        style={{
          display: 'inline-block',
          padding: '5px',
        }}
        key={uuid.v4()}
      >
        <BeerInCrateImg />
      </div>
    ))}
  </div>
);

export default BeersInCrate;
