import React from 'react';
import BeerInCrateImg from './BeerInCrateImg';
import uuid from 'uuid';

const BeersInCrate = (props) => (
  <div className="container">
    <div className="row">
      {props.beersInCrateIds.slice(0, 20).map((beer, i) => (
        <div key={uuid.v4()} className="col-3">
          <BeerInCrateImg />
        </div>
      ))}
    </div>
  </div>
);

export default BeersInCrate;
