import React from 'react';
import BeerInCrateImg from './BeerInCrateImg';

const BeersInCrate = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.beersInCrateIds.slice(0, 20).map((beer, i) => (
          <div key={i} className="col-3">
            <BeerInCrateImg />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeersInCrate;
