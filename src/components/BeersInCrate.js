import React from 'react';
import BeerInCrateImg from './BeerInCrateImg';
import uuid from 'uuid';

const BeersInCrate = ({ beersInCrateIds }) =>
  beersInCrateIds.slice(0, 20).map((beer, i) => (
    <div
      style={{
        display: 'inline-block',
        padding: '3px',
      }}
      key={uuid.v4()}
    >
      <BeerInCrateImg />
    </div>
  ));

export default BeersInCrate;
